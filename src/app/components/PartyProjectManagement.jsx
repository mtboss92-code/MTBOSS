'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useSubmitAction } from '../../hooks/useSubmitAction';
import SubmitToast from './shared/SubmitToast';
import { PmContext } from './party-project-management/PmContext';
import { registerNavigation } from './party-project-management/handlers/navigation';
import { registerProjectData } from './party-project-management/handlers/projectData';
import { registerConstructionSave } from './party-project-management/handlers/constructionSave';
import { registerStaffHandlers } from './party-project-management/handlers/staffHandlers';
import { registerPartyRecords } from './party-project-management/handlers/partyRecords';
import { registerAttendancePay } from './party-project-management/handlers/attendancePay';
import { api, uploadFile, enableAgentApiContext } from './party-project-management/api';
import PmTopBar from './party-project-management/layout/PmTopBar';
import AttendanceDetailModal from './party-project-management/modals/AttendanceDetailModal';
import DeleteProjectModal from './party-project-management/modals/DeleteProjectModal';
import QuickAttendanceModal from './party-project-management/modals/QuickAttendanceModal';
import QuickPaymentModal from './party-project-management/modals/QuickPaymentModal';
import pmStyles from './party-project-management/pmStyles';
import PartiesScreen from './party-project-management/screens/PartiesScreen';
import PartyDetailScreen from './party-project-management/screens/PartyDetailScreen';
import PartyFormScreen from './party-project-management/screens/PartyFormScreen';
import ProjectFormScreen from './party-project-management/screens/ProjectFormScreen';
import ProjectScreen from './party-project-management/screens/ProjectScreen';
import ProjectsScreen from './party-project-management/screens/ProjectsScreen';
import ReportsScreen from './party-project-management/screens/ReportsScreen';
import OmniSearchPanel from './party-project-management/search/OmniSearchPanel';
import {
  partyBlank, projectBlank, today, materialBlank, receivedBlank, usedBlank, adjustmentBlank,
  expenseBlank, commissionBlank, staffBlank, parseExpenseItem, getDefaultUnitForMaterial, INR,
  packExpenseNote, isEditableWithin48Hours, COMMON_MATERIAL_UNITS,
} from './party-project-management/shared';

export {
  COMMON_MATERIAL_UNITS, getDefaultUnitForMaterial, parseExpenseItem, packExpenseNote, formatDateIST,
  isEditableWithin48Hours, isSameDayIST,
} from './party-project-management/shared';

export default function PartyProjectManagement({ initialScreen = 'parties', initialProjectId = null, isDarkMode, isAgent, agent: passedAgent }) {
  const [internalDark, setInternalDark] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const html = document.documentElement;
    const sync = () =>
      setInternalDark(
        html.classList.contains('dark-mode') ||
        html.classList.contains('dark') ||
        localStorage.getItem('theme') === 'dark'
      );
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  const effectiveDark = isDarkMode !== undefined ? Boolean(isDarkMode) : internalDark;
  const submitAction = useSubmitAction();
  if (isAgent) {
    enableAgentApiContext();
  }
  // Navigation: 'parties' | 'party' | 'partyForm' | 'project' | 'projectForm' | 'reports'
  const [screen, setScreen] = useState(initialProjectId ? 'project' : (isAgent ? 'projects' : initialScreen));
  const [role, setRole] = useState(isAgent ? 'agent' : 'admin');

  // Check supervisor role
  useEffect(() => {
    if (isAgent) {
      setRole('agent');
      return;
    }
    try {
      const u = JSON.parse(localStorage.getItem('admin-user') || localStorage.getItem('user') || '{}');
      if (u.role === 'site_supervisor') setRole('site_supervisor');
    } catch {}
  }, [isAgent]);

  const isSupervisor = role === 'site_supervisor';

  // Agent Specialization state
  const [currentAgent, setCurrentAgent] = useState(passedAgent || null);

  useEffect(() => {
    if (passedAgent) {
      setCurrentAgent(passedAgent);
    } else if (isAgent) {
      const token = typeof window !== 'undefined' ? localStorage.getItem('agent-token') : null;
      if (token) {
        fetch('/api/agent/profile', {
          headers: { Authorization: `Bearer ${token}` }
        })
          .then(res => res.json())
          .then(data => {
            if (data?.agent) setCurrentAgent(data.agent);
          })
          .catch(() => {});
      }
    }
  }, [passedAgent, isAgent]);

  const agentSpecs = useMemo(() => {
    if (!isAgent) return ['payments', 'labor', 'vendor', 'construction'];
    const rawSpecs = currentAgent?.specializations;
    return Array.isArray(rawSpecs) ? rawSpecs : (typeof rawSpecs === 'string' ? JSON.parse(rawSpecs || '[]') : []);
  }, [isAgent, currentAgent?.specializations]);

  const hasAgentPayment = !isAgent || agentSpecs.includes('payments');
  const hasAgentLabor = !isAgent || agentSpecs.includes('labor');
  const hasAgentVendor = !isAgent || agentSpecs.includes('vendor');
  const hasAgentConstruction = !isAgent || agentSpecs.includes('construction');

  // 5 Main tabs (in this order): Vendors, Labor, Attendance, Payments, Construction
  const allowedMainTabs = useMemo(() => {
    const tabs = [];
    if (!isAgent || agentSpecs.includes('vendor')) {
      tabs.push('vendors');
    }
    if (!isAgent || agentSpecs.includes('labor')) {
      tabs.push('labor');
    }
    if (!isAgent || agentSpecs.includes('labor') || agentSpecs.includes('vendor')) {
      tabs.push('attendance');
    }
    if ((!isAgent && !isSupervisor) || (isAgent && agentSpecs.includes('payments'))) {
      tabs.push('payments');
    }
    if (!isAgent || agentSpecs.includes('construction')) {
      tabs.push('construction');
    }
    if (!isAgent || agentSpecs.includes('construction') || agentSpecs.includes('payments')) {
      tabs.push('suppliers');
    }
    tabs.push('commission');
    tabs.push('staff');
    return tabs;
  }, [isAgent, isSupervisor, agentSpecs]);

  const allowedAttendanceSubTabs = useMemo(() => {
    const subs = [];
    if (!isAgent || agentSpecs.includes('vendor')) subs.push('vendor');
    if (!isAgent || agentSpecs.includes('labor')) subs.push('labor');
    subs.push('staff');
    return subs;
  }, [isAgent, agentSpecs]);

  const allowedTabs = allowedMainTabs;

  const getUrlParam = (key) => {
    if (typeof window === 'undefined') return null;
    return new URLSearchParams(window.location.search).get(key);
  };

  const normalizeSection = (sec) => {
    if (!sec) return null;
    const s = sec.toLowerCase().trim();
    if (s === 'vendors' || s === 'vendor') return 'vendors';
    if (s === 'labor' || s === 'labour') return 'labor';
    if (s === 'attendance') return 'attendance';
    if (s === 'payments' || s === 'payment') return 'payments';
    if (s === 'construction' || s === 'materials' || s === 'expenses') return 'construction';
    if (s === 'suppliers' || s === 'supplier') return 'suppliers';
    if (s === 'commission' || s === 'commissions') return 'commission';
    if (s === 'staff') return 'staff';
    return null;
  };

  const normalizeAttendanceSub = (sub) => {
    if (!sub) return null;
    const s = sub.toLowerCase().trim();
    if (s === 'labor' || s === 'labor-attendance' || s === 'labor_attendance') return 'labor';
    if (s === 'vendor' || s === 'vendor-attendance' || s === 'vendor_attendance') return 'vendor';
    if (s === 'staff' || s === 'staff-attendance' || s === 'staff_attendance') return 'staff';
    return null;
  };

  const normalizePaymentsSub = (sub) => {
    if (!sub) return null;
    const s = sub.toLowerCase().trim();
    if (s === 'labor' || s === 'labor-payment' || s === 'labor_payment') return 'labor';
    if (s === 'party' || s === 'party-payment' || s === 'party_payment') return 'party';
    if (s === 'vendor' || s === 'vendor-payment' || s === 'vendor_payment') return 'vendor';
    if (s === 'supplier' || s === 'supplier-payment' || s === 'supplier_payment') return 'supplier';
    if (s === 'staff' || s === 'staff-payment' || s === 'staff_payment') return 'staff';
    return null;
  };

  const normalizeConstructionSub = (sub) => {
    if (!sub) return null;
    const s = sub.toLowerCase().trim();
    if (s === 'used' || s === 'material_used' || s === 'material-used' || s === 'daily_usage' || s === 'daily-usage' || s === 'consumption') return 'used';
    if (s === 'adjustments' || s === 'adjustment' || s === 'wastage') return 'adjustments';
    if (s === 'return' || s === 'return_material' || s === 'return-material' || s === 'returns') return 'return';
    if (s === 'scrap' || s === 'scrap_material' || s === 'scrap-material') return 'scrap';
    if (s === 'expenses' || s === 'other-expenses' || s === 'other_expenses') return 'expenses';
    return null;
  };

  // Parties state
  const [parties, setParties] = useState([]);
  const [party, setParty] = useState(null);
  const [partyForm, setPartyForm] = useState(partyBlank);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
  const [message, setMessage] = useState('');

  // Project state
  const [project, setProject] = useState(null);
  const [projectForm, setProjectForm] = useState(projectBlank);

  // Main Project Tab: 'vendors' | 'labor' | 'attendance' | 'payments' | 'construction'
  const [projectTab, setProjectTab] = useState(() => {
    const rawSec = getUrlParam('section');
    const norm = normalizeSection(rawSec);
    if (norm && allowedMainTabs.includes(norm)) return norm;
    return allowedMainTabs.length > 0 ? allowedMainTabs[0] : 'vendors';
  });

  // Sub-tabs
  const [attendanceSubTab, setAttendanceSubTab] = useState(() => {
    const rawSub = getUrlParam('sub');
    const norm = normalizeAttendanceSub(rawSub);
    if (norm && allowedAttendanceSubTabs.includes(norm)) return norm;
    return allowedAttendanceSubTabs.includes('vendor') ? 'vendor' : (allowedAttendanceSubTabs[0] || 'vendor');
  });

  const [paymentsSubTab, setPaymentsSubTab] = useState(() => {
    const rawSub = getUrlParam('sub');
    const norm = normalizePaymentsSub(rawSub);
    if (norm) return norm;
    return 'vendor';
  });

  const [constructionSubTab, setConstructionSubTab] = useState(() => {
    const rawSub = getUrlParam('sub');
    const norm = normalizeConstructionSub(rawSub);
    if (norm) return norm;
    return 'used';
  });

  useEffect(() => {
    if (allowedMainTabs.length > 0 && !allowedMainTabs.includes(projectTab)) {
      setProjectTab(allowedMainTabs[0]);
    }
  }, [allowedMainTabs, projectTab]);

  useEffect(() => {
    if (allowedAttendanceSubTabs.length > 0 && !allowedAttendanceSubTabs.includes(attendanceSubTab)) {
      setAttendanceSubTab(allowedAttendanceSubTabs[0]);
    }
  }, [allowedAttendanceSubTabs, attendanceSubTab]);

  const updateUrlParams = useCallback((section, sub) => {
    if (typeof window !== 'undefined' && window.history?.replaceState) {
      const url = new URL(window.location.href);
      if (section) url.searchParams.set('section', section);
      if (sub) {
        url.searchParams.set('sub', sub);
      } else {
        url.searchParams.delete('sub');
      }
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  const updateProjectUrl = useCallback((projectId) => {
    if (typeof window !== 'undefined' && window.history?.replaceState) {
      const url = new URL(window.location.href);
      if (projectId) url.searchParams.set('projectId', String(projectId));
      else {
        url.searchParams.delete('projectId');
        url.searchParams.delete('section');
        url.searchParams.delete('sub');
      }
      window.history.replaceState({}, '', url.toString());
    }
  }, []);

  

  

  

  

  useEffect(() => {
    const handlePopState = () => {
      const sec = normalizeSection(getUrlParam('section'));
      if (sec && allowedMainTabs.includes(sec)) {
        setProjectTab(sec);
        const sub = getUrlParam('sub');
        if (sec === 'attendance') {
          const normSub = normalizeAttendanceSub(sub);
          if (normSub) setAttendanceSubTab(normSub);
        } else if (sec === 'payments') {
          const normSub = normalizePaymentsSub(sub);
          if (normSub) setPaymentsSubTab(normSub);
        } else if (sec === 'construction') {
          const normSub = normalizeConstructionSub(sub);
          if (normSub) setConstructionSubTab(normSub);
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [allowedMainTabs]);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search.trim()), 300);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    setPagination((prev) => (prev.page === 1 ? prev : { ...prev, page: 1 }));
  }, [debouncedSearch]);

  // Phase 1: Party payments
  const [partyPayments, setPartyPayments] = useState([]);
  const [partyPaymentForm, setPartyPaymentForm] = useState({ amount: '', payment_date: today(), mode: 'bank', note: '', transaction_reference: '' });
  const [partyPaymentModal, setPartyPaymentModal] = useState(false);
  const [editingPartyPaymentId, setEditingPartyPaymentId] = useState(null);
  const [vendorPaymentModal, setVendorPaymentModal] = useState(false);
  const [editingVendorPaymentId, setEditingVendorPaymentId] = useState(null);
  const [editingSupplierPaymentId, setEditingSupplierPaymentId] = useState(null);
  const [modalReadOnly, setModalReadOnly] = useState(false);

  // Phase 2: Project Vendors
  const [projectVendors, setProjectVendors] = useState([]);
  const [allVendorsMaster, setAllVendorsMaster] = useState([]);
  const [contractorSearch, setContractorSearch] = useState('');
  const [contractorsLoading, setContractorsLoading] = useState(false);
  const [suppliersMaster, setSuppliersMaster] = useState([]);
  const [projectSuppliers, setProjectSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [supplierLedgerData, setSupplierLedgerData] = useState({ deliveries: [], payments: [], summary: {} });
  const [loadingSupplierLedger, setLoadingSupplierLedger] = useState(false);
  const [supplierLedgerTab, setSupplierLedgerTab] = useState('deliveries');
  const [supplierPaymentsList, setSupplierPaymentsList] = useState([]);
  const [supplierSearch, setSupplierSearch] = useState('');
  const [supplierPaymentModal, setSupplierPaymentModal] = useState(false);
  const [supplierPaymentForm, setSupplierPaymentForm] = useState({
    supplier_id: '',
    supplier_name: '',
    amount: '',
    payment_date: today(),
    mode: 'bank',
    transaction_reference: '',
    note: '',
  });
  const [vendorTypeFilter, setVendorTypeFilter] = useState('all');
  const [localVendorModal, setLocalVendorModal] = useState(false);
  const [localVendorForm, setLocalVendorForm] = useState({
    name: '',
    phone: '',
    city: '',
    material_type: '',
    address: '',
  });
  const [contractorMenuOpen, setContractorMenuOpen] = useState(false);
  const [supplierView, setSupplierView] = useState(false);
  const [addVendorModal, setAddVendorModal] = useState(false);
  const [vendorMode, setVendorMode] = useState('existing');

  const loadContractorsList = useCallback(async (trade = 'all', searchQuery = '') => {
    setContractorsLoading(true);
    try {
      const q = encodeURIComponent(searchQuery || '');
      const t = encodeURIComponent(trade || 'all');
      const res = await api(`/api/admin/project-management/contractors?trade=${t}&search=${q}&pageSize=100`);
      setAllVendorsMaster(res.data || []);
      return res.data || [];
    } catch (e) {
      console.warn('Could not load from contractors route, falling back to vendors:', e.message);
      try {
        const fb = await api('/api/admin/project-management/vendors?page=1&pageSize=100');
        setAllVendorsMaster(fb.data || []);
        return fb.data || [];
      } catch {
        return [];
      }
    } finally {
      setContractorsLoading(false);
    }
  }, []);

  const [assignForm, setAssignForm] = useState({
    vendor_id: '',
    work_description: '',
    pay_type: 'daily_wage',
    daily_rate: '',
    contract_amount: '',
    new_vendor_name: '',
    new_vendor_phone: '',
    new_vendor_trade: '',
    new_vendor_address: '',
  });

  // Phase 2: Vendor Detail View
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [vendorAttendanceHistory, setVendorAttendanceHistory] = useState([]);
  const [vendorPaymentsHistory, setVendorPaymentsHistory] = useState([]);
  const [vendorMaterialHistory, setVendorMaterialHistory] = useState([]);
  const [calendarMonth, setCalendarMonth] = useState(() => today().slice(0, 7));

  // Phase 2: Bulk Attendance
  const [attendanceDate, setAttendanceDate] = useState(today());
  const [attendanceRows, setAttendanceRows] = useState([]);
  const [savingAttendance, setSavingAttendance] = useState(false);
  const [projectVendorAttendanceHistory, setProjectVendorAttendanceHistory] = useState([]);
  const [projectLaborAttendanceHistory, setProjectLaborAttendanceHistory] = useState([]);

  // Phase 2: Vendor Payments Tab
  const [vendorPaymentsList, setVendorPaymentsList] = useState([]);
  const [vPayFilterVendor, setVPayFilterVendor] = useState('');
  const [vPayFilterType, setVPayFilterType] = useState('');
  const [vPayFilterFrom, setVPayFilterFrom] = useState('');
  const [vPayFilterTo, setVPayFilterTo] = useState('');
  const [vendorPaymentForm, setVendorPaymentForm] = useState({
    project_vendor_id: '',
    amount: '',
    payment_date: today(),
    mode: 'bank',
    payment_type: 'labour',
    note: '',
    transaction_reference: '',
  });

  // Phase 2: Vendor Material Supply Modal
  const [supplyModal, setSupplyModal] = useState(false);
  const [supplyForm, setSupplyForm] = useState({
    item_name: '',
    unit: 'bags',
    quantity: '',
    rate: '',
    supply_date: today(),
    material_id: '',
    note: '',
  });

  // ── Labor (Individual Worker) State ───────────────────────────────────────
  const [projectLabors, setProjectLabors] = useState([]);
  const [laborSubTab, setLaborSubTab] = useState('list'); // 'list' | 'attendance' | 'payments'
  const [selectedLabor, setSelectedLabor] = useState(null);
  const [addLaborModal, setAddLaborModal] = useState(false);
  const [editingLaborId, setEditingLaborId] = useState(null);
  const [laborForm, setLaborForm] = useState({ name: '', phone: '', trade: '', project_vendor_id: '', daily_rate: '' });
  const [laborAttendanceDate, setLaborAttendanceDate] = useState(today());
  const [laborAttendanceRows, setLaborAttendanceRows] = useState([]);
  const [savingLaborAttendance, setSavingLaborAttendance] = useState(false);
  const [laborPaymentsList, setLaborPaymentsList] = useState([]);
  const [laborPaymentFilterLabor, setLaborPaymentFilterLabor] = useState('');
  const [laborPaymentFilterFrom, setLaborPaymentFilterFrom] = useState('');
  const [laborPaymentFilterTo, setLaborPaymentFilterTo] = useState('');
  const [laborPaymentModal, setLaborPaymentModal] = useState(false);
  const [laborPaymentForm, setLaborPaymentForm] = useState({ labor_id: '', amount: '', payment_date: today(), mode: 'cash', payment_type: 'wage', note: '', transaction_reference: '' });
  const [editingLaborPaymentId, setEditingLaborPaymentId] = useState(null);
  const [laborCalendarMonth, setLaborCalendarMonth] = useState(() => today().slice(0, 7));
  const [laborAttendanceHistory, setLaborAttendanceHistory] = useState([]);
  const [laborPaymentsHistory, setLaborPaymentsHistory] = useState([]);
  const [manageTeamVendor, setManageTeamVendor] = useState(null);
  const [lockedContractorId, setLockedContractorId] = useState(null);
  const [laborTypeFilter, setLaborTypeFilter] = useState('all'); // 'all' | 'independent' | 'contractor' | string(id)
  const [laborAttendanceSection, setLaborAttendanceSection] = useState('all'); // 'all' | 'direct' | 'contractor'
  const [attendanceContractorFilter, setAttendanceContractorFilter] = useState('');
  // Retained only for compatibility with the existing bulk-selection code; the
  // checkbox UI is intentionally hidden in favor of per-worker marking.
  const [selectedLaborIds, setSelectedLaborIds] = useState([]);
  const [modalError, setModalError] = useState('');
  const [attendanceDetailModal, setAttendanceDetailModal] = useState(null);
  const [savingAttendanceDetail, setSavingAttendanceDetail] = useState(false);

  // ── Phase 3: Materials & Stock State ───────────────────────────────────────
  const [materialsMaster, setMaterialsMaster] = useState([]);
  const [stockRows, setStockRows] = useState([]);
  const materialsSubTab = constructionSubTab;
  const setMaterialsSubTab = setConstructionSubTab;
  const [receivedRows, setReceivedRows] = useState([]);
  const [usedRows, setUsedRows] = useState([]);
  const [adjustmentRows, setAdjustmentRows] = useState([]);
  const wastageAdjRows = adjustmentRows.filter((r) =>
    ['wastage', 'damage', 'transfer_out'].includes(r.adjustment_type) ||
    (!['return_to_supplier', 'return_material', 'scrap_material', 'scrap'].includes(r.adjustment_type))
  );
  const returnMaterialRows = adjustmentRows.filter((r) =>
    ['return_to_supplier', 'return_material'].includes(r.adjustment_type)
  );
  const scrapMaterialRows = adjustmentRows.filter((r) =>
    ['scrap_material', 'scrap'].includes(r.adjustment_type)
  );

  // Filters for materials tables
  const [matFilterId, setMatFilterId] = useState('');
  const [matFilterFrom, setMatFilterFrom] = useState('');
  const [matFilterTo, setMatFilterTo] = useState('');

  // Modals for Phase 3
  const [addMaterialModal, setAddMaterialModal] = useState(false);
  const [materialForm, setMaterialForm] = useState(materialBlank);

  const [receivedModal, setReceivedModal] = useState(false);
  const [receivedForm, setReceivedForm] = useState(receivedBlank);
  const [editingReceivedId, setEditingReceivedId] = useState(null);

  const [usedModal, setUsedModal] = useState(false);
  const [usedForm, setUsedForm] = useState(usedBlank);
  const [editingUsedId, setEditingUsedId] = useState(null);

  const [adjustmentModal, setAdjustmentModal] = useState(false);
  const [adjustmentForm, setAdjustmentForm] = useState(adjustmentBlank);
  const [editingAdjId, setEditingAdjId] = useState(null);

  const [billFile, setBillFile] = useState(null);

  // Material detail timeline drawer
  const [timelineMaterial, setTimelineMaterial] = useState(null);
  const [timelineData, setTimelineData] = useState([]);
  const [timelineStock, setTimelineStock] = useState(0);

  // ── Phase 3: Other Expenses State ──────────────────────────────────────────
  const [expenseRows, setExpenseRows] = useState([]);
  const [expenseSummary, setExpenseSummary] = useState({ totalAmount: 0 });
  const [expenseCategoryFilter, setExpenseCategoryFilter] = useState('');
  const [expenseSearch, setExpenseSearch] = useState('');
  const [expenseModal, setExpenseModal] = useState(false);
  const [expenseForm, setExpenseForm] = useState(expenseBlank);
  const [editingExpenseId, setEditingExpenseId] = useState(null);

  // ── Commission State ───────────────────────────────────────────────────────
  const [commissionRows, setCommissionRows] = useState([]);
  const [commissionSummary, setCommissionSummary] = useState({ totalAmount: 0 });
  const [commissionSearch, setCommissionSearch] = useState('');
  const [commissionModal, setCommissionModal] = useState(false);
  const [commissionForm, setCommissionForm] = useState(commissionBlank);
  const [editingCommissionId, setEditingCommissionId] = useState(null);

  // ── Staff State ────────────────────────────────────────────────────────────
  const [projectStaff, setProjectStaff] = useState([]);
  const [staffSummary, setStaffSummary] = useState({ total_staff: 0, total_present: 0, total_half_day: 0, total_paid: 0, total_commission_paid: 0, total_commission_allocated: 0 });
  const [staffSearch, setStaffSearch] = useState('');
  const [staffRoleFilter, setStaffRoleFilter] = useState('');
  const [staffModal, setStaffModal] = useState(false);
  const [staffForm, setStaffForm] = useState(staffBlank);
  const [editingStaffId, setEditingStaffId] = useState(null);
  const [staffSubTab, setStaffSubTab] = useState('directory'); // 'directory' | 'attendance' | 'payments'
  const [staffAttendanceDate, setStaffAttendanceDate] = useState(today());
  const [staffDailyAttendance, setStaffDailyAttendance] = useState([]);
  const [staffAttendanceLoading, setStaffAttendanceLoading] = useState(false);
  const [savingStaffAttendance, setSavingStaffAttendance] = useState(false);
  const [projectStaffAttendanceHistory, setProjectStaffAttendanceHistory] = useState([]);
  const [staffPayments, setStaffPayments] = useState([]);
  const [staffPaymentsSummary, setStaffPaymentsSummary] = useState({ total_amount: 0, salary_amount: 0, commission_amount: 0, bonus_amount: 0 });
  const [staffPaymentModal, setStaffPaymentModal] = useState(false);
  const [staffPaymentForm, setStaffPaymentForm] = useState({ staff_id: '', amount: '', payment_date: today(), payment_type: 'salary', mode: 'bank', transaction_reference: '', note: '' });
  const [editingStaffPaymentId, setEditingStaffPaymentId] = useState(null);
  const [staffPaymentFilterType, setStaffPaymentFilterType] = useState('');
  const staffSavingRef = useRef(false);
  const staffPaymentSavingRef = useRef(false);

  const expenseItemSuggestions = useMemo(() => {
    const set = new Set();
    (expenseRows || []).forEach((row) => {
      const { item_name } = parseExpenseItem(row);
      if (item_name) set.add(item_name);
    });
    return Array.from(set);
  }, [expenseRows]);

  // ── Phase 3: Reports State ────────────────────────────────────────────────
  const [reportType, setReportType] = useState('cost_summary');
  const [reportProjectFilter, setReportProjectFilter] = useState('');
  const [reportMaterialFilter, setReportMaterialFilter] = useState('');
  const [reportProjectStatus, setReportProjectStatus] = useState('all');
  const [reportEntityType, setReportEntityType] = useState('all');
  const [reportFrequency, setReportFrequency] = useState('all');
  const [reportSearch, setReportSearch] = useState('');
  const [reportStartDate, setReportStartDate] = useState('');
  const [reportEndDate, setReportEndDate] = useState('');
  const [reportData, setReportData] = useState({ title: '', headers: [], data: [], summary: null });
  const [loadingReport, setLoadingReport] = useState(false);
  const [allProjectsList, setAllProjectsList] = useState([]);

  // ── Omni-Search & Cross-Project Quick Action State ──────────────────────────
  const [omniSearchQuery, setOmniSearchQuery] = useState('');
  const [omniSearchResults, setOmniSearchResults] = useState(null);
  const [omniSearchLoading, setOmniSearchLoading] = useState(false);
  const [omniSearchOpen, setOmniSearchOpen] = useState(false);
  const [omniActiveTab, setOmniActiveTab] = useState('all');

  // Quick Attendance Modal state
  const [quickAttendanceModal, setQuickAttendanceModal] = useState(false);
  const [quickAttendanceForm, setQuickAttendanceForm] = useState({
    labor_id: '',
    labor_name: '',
    project_id: '',
    project_name: '',
    attendance_date: new Date().toISOString().slice(0, 10),
    status: 'present',
    shift_type: 'day',
    overtime_hours: 0,
    daily_rate: 0,
    wage_amount: 0,
    note: '',
    available_projects: [],
  });
  const [savingQuickAttendance, setSavingQuickAttendance] = useState(false);

  // Quick Payment Modal state
  const [quickPaymentModal, setQuickPaymentModal] = useState(false);
  const [quickPaymentForm, setQuickPaymentForm] = useState({
    type: 'labor', // 'labor' | 'vendor'
    id: '', // labor_id or project_vendor_id
    name: '',
    project_id: '',
    project_name: '',
    amount: '',
    payment_date: new Date().toISOString().slice(0, 10),
    mode: 'cash',
    note: '',
    transaction_reference: '',
    balance_due: 0,
    available_projects: [],
  });
  const [savingQuickPayment, setSavingQuickPayment] = useState(false);

  // Omni Search Debounce
  useEffect(() => {
    const q = omniSearchQuery.trim();
    if (!q) {
      setOmniSearchResults(null);
      setOmniSearchLoading(false);
      return;
    }
    setOmniSearchLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await api(`/api/admin/project-management/omni-search?q=${encodeURIComponent(q)}`);
        if (res.success) {
          setOmniSearchResults(res);
          setOmniSearchOpen(true);
        }
      } catch (err) {
        console.error('Omni-search error:', err);
      } finally {
        setOmniSearchLoading(false);
      }
    }, 280);
    return () => clearTimeout(timer);
  }, [omniSearchQuery]);

  

  

  

  

  // ── Agent Assignment State ────────────────────────────────────────────────
  const [projectAgents, setProjectAgents] = useState([]);
  const [allAgentsList, setAllAgentsList] = useState([]);
  const [assignAgentModal, setAssignAgentModal] = useState(false);
  const [assigningAgentId, setAssigningAgentId] = useState('');

  // ── Delete Project State & Handlers ─────────────────────────────────────────
  const [deleteProjectModal, setDeleteProjectModal] = useState(null);
  const [deletingProject, setDeletingProject] = useState(false);
  const deletingProjectRef = useRef(false);
  const [deleteProjectError, setDeleteProjectError] = useState('');

  

  



  // ── Load Parties ─────────────────────────────────────────────────────────────
  const loadParties = useCallback(async () => {
    try {
      const d = await api(`/api/admin/project-management/parties?search=${encodeURIComponent(debouncedSearch)}&page=${pagination.page}&pageSize=20`);
      setParties(d.data || []);
      setPagination(d.pagination || { page: 1, totalPages: 1 });
    } catch (e) {
      setMessage(e.message);
    }
  }, [debouncedSearch, pagination.page]);

  const loadAgentProjects = useCallback(async () => {
    try {
      const d = await api(`/api/admin/project-management/projects?search=${encodeURIComponent(debouncedSearch)}&page=${pagination.page}&pageSize=20`);
      setAllProjectsList(d.data || []);
      setPagination(d.pagination || { page: 1, totalPages: 1 });
    } catch (e) {
      setMessage(e.message);
    }
  }, [debouncedSearch, pagination.page]);

  useEffect(() => {
    if (screen === 'parties') loadParties();
    if (screen === 'projects') loadAgentProjects();
  }, [screen, loadParties, loadAgentProjects]);

  // Auto-open a project if initialProjectId was passed (e.g. from Lead Management conversion)
  useEffect(() => {
    if (initialProjectId) {
      showProject(initialProjectId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialProjectId]);

  

  // ── Load Phase 3 Materials & Expenses Data ──────────────────────────────────
  const loadPhase3ProjectData = useCallback(async (projId) => {
    const pid = projId || project?.id;
    if (!pid) return;
    try {
      const [mRes, stRes, rcRes, usRes, adRes, expRes, comRes] = await Promise.all([
        api('/api/admin/project-management/materials?pageSize=100').catch(() => ({ data: [] })),
        api(`/api/admin/project-management/stock?projectId=${pid}&pageSize=100`).catch(() => ({ data: [] })),
        api(`/api/admin/project-management/material-received?projectId=${pid}&pageSize=100`).catch(() => ({ data: [] })),
        api(`/api/admin/project-management/material-used?projectId=${pid}&pageSize=100`).catch(() => ({ data: [] })),
        api(`/api/admin/project-management/material-adjustments?projectId=${pid}&pageSize=100`).catch(() => ({ data: [] })),
        api(`/api/admin/project-management/other-expenses?projectId=${pid}&pageSize=100`).catch(() => ({ data: [], summary: {} })),
        api(`/api/admin/project-management/commissions?projectId=${pid}&pageSize=100`).catch(() => ({ data: [], summary: {} })),
      ]);

      setMaterialsMaster(mRes.data || []);
      setStockRows(stRes.data || []);
      setReceivedRows(rcRes.data || []);
      setUsedRows(usRes.data || []);
      setAdjustmentRows(adRes.data || []);
      setExpenseRows(expRes.data || []);
      setExpenseSummary(expRes.summary || { totalAmount: 0 });
      setCommissionRows(comRes.data || []);
      setCommissionSummary(comRes.summary || { totalAmount: 0 });
    } catch (e) {
      console.error('Error loading Phase 3 data:', e);
    }
  }, [project?.id]);

  // ── Load Labor Data ────────────────────────────────────────────────────────
  const loadProjectLabors = useCallback(async (projId) => {
    const pid = projId || project?.id;
    if (!pid) return;
    try {
      const d = await api(`/api/admin/project-management/labor?projectId=${pid}&pageSize=200`);
      const seen = new Set();
      const deduped = (d.data || []).filter((item) => {
        if (!item?.id || seen.has(item.id)) return false;
        seen.add(item.id);
        return true;
      });
      setProjectLabors(deduped);
    } catch (e) {
      console.error('Error loading labor:', e);
    }
  }, [project?.id]);

  const loadProjectSuppliers = useCallback(async (projId) => {
    const pid = projId || project?.id;
    if (!pid) return;
    try {
      const res = await api(`/api/admin/project-management/suppliers?projectId=${pid}`);
      setProjectSuppliers(res.projectSuppliers || []);
      if (res.allSuppliers && res.allSuppliers.length > 0) {
        setSuppliersMaster(res.allSuppliers);
      }
    } catch (err) {
      console.error('Error loading project suppliers:', err);
    }
  }, [project?.id]);

  const loadSupplierLedger = useCallback(async (projId, supplierId, supplierName) => {
    const pid = projId || project?.id;
    if (!pid) return;
    setLoadingSupplierLedger(true);
    try {
      let url = `/api/admin/project-management/supplier-ledger?projectId=${pid}`;
      if (supplierId) url += `&supplierId=${supplierId}`;
      if (supplierName) url += `&supplierName=${encodeURIComponent(supplierName)}`;
      const res = await api(url);
      setSupplierLedgerData(res || { deliveries: [], payments: [], summary: {} });
    } catch (err) {
      console.error('Error loading supplier ledger:', err);
    } finally {
      setLoadingSupplierLedger(false);
    }
  }, [project?.id]);

  const loadSupplierPayments = useCallback(async (projId) => {
    const pid = projId || project?.id;
    if (!pid) return;
    try {
      const res = await api(`/api/admin/project-management/supplier-payments?projectId=${pid}&pageSize=200`);
      setSupplierPaymentsList(res.data || []);
    } catch (err) {
      console.error('Error loading supplier payments:', err);
    }
  }, [project?.id]);

  

  const loadLaborAttendance = useCallback(async (date, projId) => {
    const pid = projId || project?.id;
    const d = date || laborAttendanceDate;
    if (!pid || !d) return;
    try {
      const r = await api(`/api/admin/project-management/labor/attendance?projectId=${pid}&date=${d}`);
      const seen = new Set();
      const rows = (r.data || [])
        .filter((row) => {
          const lid = row.labor_id || row.id;
          if (!lid || seen.has(lid)) return false;
          seen.add(lid);
          return true;
        })
        .map((row) => ({
          ...row,
          name: row.name || row.labor_name || '',
          is_marked: Boolean(row.attendance_id),
          // A loaded record is informational until the user explicitly changes it.
          // Untouched workers deliberately have no default attendance status.
          status: row.attendance_id ? (row.attendance_status || row.status || 'present') : '',
          shift_type: row.shift_type || 'day',
          overtime_hours: Number(row.overtime_hours || 0),
          wage_amount: row.attendance_id ? Number(row.wage_amount) : 0,
          dirty: false,
        }));
      setLaborAttendanceRows(rows);
      setSelectedLaborIds([]);
    } catch (e) {
      console.error('Error loading labor attendance:', e);
    }
  }, [project?.id, laborAttendanceDate]);

  const loadLaborPayments = useCallback(async (projId, laborId, from, to) => {
    const pid = projId || project?.id;
    if (!pid) return;
    try {
      const q = new URLSearchParams({
        projectId: String(pid),
        laborId: laborId || '',
        from: from || '',
        to: to || '',
        pageSize: '100',
      });
      const r = await api(`/api/admin/project-management/labor/payments?${q.toString()}`);
      setLaborPaymentsList(r.data || []);
    } catch (e) {
      console.error('Error loading labor payments:', e);
    }
  }, [project?.id]);

  

  // ── Show Single Project Overview ─────────────────────────────────────────────
  const showProject = async (id) => {
    try {
      const [projRes, ppRes, pvRes, vListRes, laborRes, assignedAgentsRes, allAgentsRes, suppliersRes] = await Promise.all([
        api(`/api/admin/project-management/projects/${id}`),
        api(`/api/admin/project-management/payments?projectId=${id}&page=1&pageSize=100`).catch(() => ({ data: [] })),
        api(`/api/admin/project-management/project-vendors?projectId=${id}&page=1&pageSize=100`).catch(() => ({ data: [] })),
        api(`/api/admin/project-management/contractors?trade=all&pageSize=100`).catch(() => api('/api/admin/project-management/vendors?page=1&pageSize=100')).catch(() => ({ data: [] })),
        api(`/api/admin/project-management/labor?projectId=${id}&pageSize=200`).catch(() => ({ data: [] })),
        api(`/api/admin/project-management/projects/${id}/agents`).catch(() => ({ data: [] })),
        api(`/api/admin/lead-management?assigneesOnly=1`).catch(() => ({ agents: [] })),
        api(`/api/admin/project-management/suppliers?projectId=${id}`).catch(() => ({ projectSuppliers: [], allSuppliers: [] })),
        api(`/api/admin/project-management/supplier-payments?projectId=${id}&pageSize=200`).catch(() => ({ data: [] })),
      ]);
      const supPayRes = arguments[0] || {};
      setProject(projRes.data);
      setPartyPayments(ppRes.data || []);
      setProjectVendors(pvRes.data || []);
      setAllVendorsMaster(vListRes.data || []);
      setProjectSuppliers(suppliersRes.projectSuppliers || []);
      setSuppliersMaster(suppliersRes.allSuppliers || []);
      loadSupplierPayments(id);
      setProjectLabors(laborRes.data || []);
      setProjectAgents(assignedAgentsRes.data || []);
      setAllAgentsList(allAgentsRes.agents || []);
      setSelectedVendor(null);
      setSelectedLabor(null);
      setTimelineMaterial(null);
      setScreen('project');
      updateProjectUrl(id);
      const rawSec = getUrlParam('section');
      const normSec = normalizeSection(rawSec);
      const targetSec = (normSec && allowedMainTabs.includes(normSec))
        ? normSec
        : (allowedMainTabs.includes(projectTab) ? projectTab : (allowedMainTabs[0] || 'vendors'));
      setProjectTab(targetSec);
      const rawSub = getUrlParam('sub');
      if (rawSub) {
        if (targetSec === 'attendance') {
          const nSub = normalizeAttendanceSub(rawSub);
          if (nSub && allowedAttendanceSubTabs.includes(nSub)) setAttendanceSubTab(nSub);
        } else if (targetSec === 'payments') {
          const nSub = normalizePaymentsSub(rawSub);
          if (nSub) setPaymentsSubTab(nSub);
        } else if (targetSec === 'construction') {
          const nSub = normalizeConstructionSub(rawSub);
          if (nSub) setConstructionSubTab(nSub);
        }
      }
      loadPhase3ProjectData(id);
      loadProjectVendorAttendanceHistory(id);
      loadProjectLaborAttendanceHistory(id);
    } catch (e) {
      setMessage(e.message);
    }
  };

  

  

  

  // ── Load Reports Data ───────────────────────────────────────────────────────
  const loadReportsData = useCallback(async (
    type,
    projFilter,
    matFilter,
    statusFilter,
    searchFilter,
    entityFilter,
    freqFilter,
    sDate,
    eDate
  ) => {
    setLoadingReport(true);
    try {
      const params = new URLSearchParams();
      params.set('type', type);
      if (projFilter) params.set('projectId', projFilter);
      if (matFilter) params.set('materialId', matFilter);
      if (statusFilter && statusFilter !== 'all') params.set('projectStatus', statusFilter);
      if (searchFilter && searchFilter.trim()) params.set('search', searchFilter.trim());
      if (entityFilter && entityFilter !== 'all') params.set('entityType', entityFilter);
      if (freqFilter && freqFilter !== 'all') params.set('frequency', freqFilter);
      if (sDate) params.set('startDate', sDate);
      if (eDate) params.set('endDate', eDate);

      const url = `/api/admin/project-management/reports?${params.toString()}`;
      const res = await api(url);
      setReportData(res || { title: '', headers: [], data: [], summary: null });
    } catch (e) {
      setMessage(e.message);
    } finally {
      setLoadingReport(false);
    }
  }, []);

  

  useEffect(() => {
    if (screen === 'reports') {
      api('/api/admin/project-management/projects?pageSize=200')
        .then((pRes) => {
          if (pRes?.data && Array.isArray(pRes.data)) setAllProjectsList(pRes.data);
        })
        .catch(() => {});
      api('/api/admin/project-management/materials?pageSize=200')
        .then((mRes) => {
          if (mRes?.data && Array.isArray(mRes.data)) setMaterialsMaster(mRes.data);
        })
        .catch(() => {});
    }
  }, [screen]);

  const availableReportProjects = useMemo(() => {
    const map = new Map();
    (allProjectsList || []).forEach((p) => {
      if (p && p.id) {
        map.set(String(p.id), { id: String(p.id), name: p.name, status: p.status });
      }
    });
    if (Array.isArray(reportData?.data)) {
      reportData.data.forEach((r) => {
        if (r && r.project_id && !map.has(String(r.project_id))) {
          map.set(String(r.project_id), {
            id: String(r.project_id),
            name: r.project_name || `Project #${r.project_id}`,
            status: r.project_status || r.status || '',
          });
        }
      });
    }
    return Array.from(map.values()).sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  }, [allProjectsList, reportData]);

  const availableReportMaterials = useMemo(() => {
    const map = new Map();
    (materialsMaster || []).forEach((m) => {
      if (m && m.id) {
        map.set(String(m.id), { id: String(m.id), name: m.name, unit: m.unit });
      }
    });
    if (Array.isArray(reportData?.data)) {
      reportData.data.forEach((r) => {
        if (r && r.material_id && !map.has(String(r.material_id))) {
          map.set(String(r.material_id), {
            id: String(r.material_id),
            name: r.material_name || `Material #${r.material_id}`,
            unit: r.unit || r.material_unit || '',
          });
        }
      });
    }
    return Array.from(map.values()).sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  }, [materialsMaster, reportData]);

  useEffect(() => {
    if (screen === 'reports') {
      const timer = setTimeout(() => {
        loadReportsData(
          reportType,
          reportProjectFilter,
          reportMaterialFilter,
          reportProjectStatus,
          reportSearch,
          reportEntityType,
          reportFrequency,
          reportStartDate,
          reportEndDate
        );
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [
    screen,
    reportType,
    reportProjectFilter,
    reportMaterialFilter,
    reportProjectStatus,
    reportSearch,
    reportEntityType,
    reportFrequency,
    reportStartDate,
    reportEndDate,
    loadReportsData,
  ]);

  const reportCsvUrl = useMemo(() => {
    const params = new URLSearchParams();
    params.set('type', reportType);
    params.set('format', 'csv');
    if (reportProjectFilter) params.set('projectId', reportProjectFilter);
    if (reportMaterialFilter) params.set('materialId', reportMaterialFilter);
    if (reportProjectStatus && reportProjectStatus !== 'all') params.set('projectStatus', reportProjectStatus);
    if (reportSearch && reportSearch.trim()) params.set('search', reportSearch.trim());
    if (reportEntityType && reportEntityType !== 'all') params.set('entityType', reportEntityType);
    if (reportFrequency && reportFrequency !== 'all') params.set('frequency', reportFrequency);
    if (reportStartDate) params.set('startDate', reportStartDate);
    if (reportEndDate) params.set('endDate', reportEndDate);
    return `/api/admin/project-management/reports?${params.toString()}`;
  }, [
    reportType,
    reportProjectFilter,
    reportMaterialFilter,
    reportProjectStatus,
    reportSearch,
    reportEntityType,
    reportFrequency,
    reportStartDate,
    reportEndDate,
  ]);

  

  

  

  

  

  

  

  

  

  

  

  // ── Staff Management Handlers & Loaders ─────────────────────────────────────
  const loadProjectStaff = useCallback(async (projId) => {
    const pid = projId || project?.id;
    if (!pid) return;
    try {
      const res = await api(`/api/admin/project-management/staff?projectId=${pid}&pageSize=100`);
      setProjectStaff(res.data || []);
      if (res.summary) setStaffSummary(res.summary);
    } catch (e) {
      console.error('Error loading project staff:', e);
    }
  }, [project?.id]);

  

  const loadStaffAttendance = useCallback(async (projId, date) => {
    const pid = projId || project?.id;
    const targetDate = date || staffAttendanceDate || today();
    if (!pid) return;
    setStaffAttendanceLoading(true);
    try {
      const res = await api(`/api/admin/project-management/staff/attendance?projectId=${pid}&date=${targetDate}`);
      const rows = (res.data || []).map((r) => ({
        ...r,
        dirty: false,
        shift_type: r.shift_type || 'day',
        overtime_hours: Number(r.overtime_hours || 0),
        wage_amount: Number(r.wage_amount || 0) || computeStaffWage(r.salary_rate, r.pay_type, r.status, r.shift_type, r.overtime_hours),
        note: r.note || '',
      }));
      setStaffDailyAttendance(rows);
      if (res.history) {
        setProjectStaffAttendanceHistory(res.history);
      }
    } catch (e) {
      console.error('Error loading staff attendance:', e);
    } finally {
      setStaffAttendanceLoading(false);
    }
  }, [project?.id, staffAttendanceDate]);

  

  const loadStaffPayments = useCallback(async (projId) => {
    const pid = projId || project?.id;
    if (!pid) return;
    try {
      const res = await api(`/api/admin/project-management/staff/payments?projectId=${pid}&pageSize=100`);
      setStaffPayments(res.data || []);
      if (res.summary) setStaffPaymentsSummary(res.summary);
    } catch (e) {
      console.error('Error loading staff payments:', e);
    }
  }, [project?.id]);

  

  

  

  

  

  

  

  

  

  

  

  const loadProjectVendorAttendanceHistory = useCallback(async (projId) => {
    const pid = projId || project?.id;
    if (!pid) return;
    try {
      const res = await api(`/api/admin/project-management/attendance?projectId=${pid}&history=1`);
      setProjectVendorAttendanceHistory(res.data || []);
    } catch {
      setProjectVendorAttendanceHistory([]);
    }
  }, [project?.id]);

  const loadProjectLaborAttendanceHistory = useCallback(async (projId) => {
    const pid = projId || project?.id;
    if (!pid) return;
    try {
      const res = await api(`/api/admin/project-management/labor/attendance?projectId=${pid}&history=1`);
      setProjectLaborAttendanceHistory(res.data || []);
    } catch {
      setProjectLaborAttendanceHistory([]);
    }
  }, [project?.id]);

  // ── Phase 2: Bulk Attendance ────────────────────────────────────────────────
  const loadDailyAttendance = useCallback(async (date) => {
    if (!project?.id) return;
    try {
      const attData = await api(`/api/admin/project-management/attendance?projectId=${project.id}&date=${date}`).catch(() => ({ data: [] }));
      const existingMap = new Map((attData.data || []).map((a) => [Number(a.project_vendor_id || a.id), a]));
      const dailyVendors = projectVendors.filter((pv) => pv.pay_type === 'daily_wage');

      const rows = dailyVendors.map((pv) => {
        const ex = existingMap.get(Number(pv.id));
        const hasLinkedLabor = Boolean(ex?.has_linked_labor);
        const isMarked = Boolean(ex && ex.attendance_id);
        const initialStatus = isMarked ? (ex.attendance_status || 'present') : '';
        const workers = isMarked ? Number(ex.workers_count || 1) : 1;
        const rate = isMarked ? Number(ex.rate_per_worker || pv.daily_rate || 0) : Number(pv.daily_rate || 0);
        const mult = initialStatus === 'present' ? 1 : initialStatus === 'half_day' ? 0.5 : 0;
        const wage = isMarked ? Number(ex.wage_amount) : mult * workers * rate;

        const shiftType = ex?.shift_type || 'day';
        const otHours = Number(ex?.overtime_hours || 0);
        return {
          project_vendor_id: pv.id,
          vendor_name: pv.vendor_name,
          trade: pv.trade,
          status: initialStatus,
          shift_type: shiftType,
          overtime_hours: otHours,
          workers_count: workers,
          rate_per_worker: rate,
          wage_amount: wage,
          note: ex ? ex.note || '' : '',
          has_linked_labor: hasLinkedLabor,
          is_marked: isMarked,
          dirty: false,
          created_by: ex?.created_by || null,
          created_at: ex?.created_at || null,
        };
      });
      setAttendanceRows(rows);
    } catch (e) {
      setMessage(e.message);
    }
  }, [project?.id, projectVendors]);

  useEffect(() => {
    if (projectTab === 'attendance' && project?.id) {
      if (attendanceSubTab === 'vendor') {
        loadDailyAttendance(attendanceDate);
        loadProjectVendorAttendanceHistory(project.id);
      } else if (attendanceSubTab === 'labor') {
        loadLaborAttendance(laborAttendanceDate, project.id);
        loadProjectLaborAttendanceHistory(project.id);
      }
    }
  }, [projectTab, attendanceSubTab, attendanceDate, laborAttendanceDate, loadDailyAttendance, loadLaborAttendance, loadProjectVendorAttendanceHistory, loadProjectLaborAttendanceHistory, project?.id]);

  

  // ── Phase 2: Vendor Payments Tab ─────────────────────────────────────────────
  const loadVendorPayments = useCallback(async () => {
    if (!project?.id) return;
    try {
      let q = `/api/admin/project-management/vendor-payments?projectId=${project.id}&pageSize=100`;
      if (vPayFilterVendor) q += `&projectVendorId=${vPayFilterVendor}`;
      if (vPayFilterType) q += `&paymentType=${vPayFilterType}`;
      if (vPayFilterFrom) q += `&startDate=${vPayFilterFrom}`;
      if (vPayFilterTo) q += `&endDate=${vPayFilterTo}`;
      const d = await api(q);
      setVendorPaymentsList(d.data || []);
    } catch (e) {
      setMessage(e.message);
    }
  }, [project?.id, vPayFilterVendor, vPayFilterType, vPayFilterFrom, vPayFilterTo]);

  useEffect(() => {
    if (projectTab === 'payments' && project?.id) {
      if (paymentsSubTab === 'vendor') {
        loadVendorPayments();
      } else if (paymentsSubTab === 'labor') {
        loadLaborPayments(project.id, laborPaymentFilterLabor, laborPaymentFilterFrom, laborPaymentFilterTo);
      }
    }
  }, [projectTab, paymentsSubTab, loadVendorPayments, loadLaborPayments, laborPaymentFilterLabor, laborPaymentFilterFrom, laborPaymentFilterTo, project?.id]);

  useEffect(() => {
    if (project?.id && (projectTab === 'labor' || (projectTab === 'payments' && paymentsSubTab === 'labor') || (projectTab === 'attendance' && attendanceSubTab === 'labor'))) {
      loadProjectLabors(project.id);
    }
  }, [projectTab, paymentsSubTab, attendanceSubTab, loadProjectLabors, project?.id]);

  useEffect(() => {
    if (project?.id) {
      if (projectTab === 'staff') {
        loadProjectStaff(project.id);
      } else if (projectTab === 'attendance' && attendanceSubTab === 'staff') {
        loadProjectStaff(project.id);
        loadStaffAttendance(project.id, staffAttendanceDate);
      } else if (projectTab === 'payments' && paymentsSubTab === 'staff') {
        loadProjectStaff(project.id);
        loadStaffPayments(project.id);
      }
    }
  }, [projectTab, attendanceSubTab, paymentsSubTab, project?.id, staffAttendanceDate, loadProjectStaff, loadStaffAttendance, loadStaffPayments]);

  

  

  // ── Labor (Individual Worker) Handlers ─────────────────────────────────────
  useEffect(() => {
    if (projectTab === 'labor' && project?.id) {
      loadProjectLabors(project.id);
    }
  }, [projectTab, loadProjectLabors, project?.id]);

  

  

  

  

  

  // Everything the views under ./party-project-management read, shared through PmContext.
  const handlerCtx = {
    adjustmentForm, assignForm, assigningAgentId, attendanceDate, attendanceDetailModal, attendanceRows, attendanceSubTab, billFile, calendarMonth, commissionForm, commissionRows, constructionSubTab, deleteProjectModal, deletingProjectRef, editingAdjId, editingCommissionId, editingExpenseId, editingLaborId, editingLaborPaymentId, editingPartyPaymentId, editingReceivedId, editingStaffId, editingSupplierPaymentId, editingUsedId, editingVendorPaymentId, expenseForm, expenseRows, laborAttendanceDate, laborAttendanceRows, laborCalendarMonth, laborForm, laborPaymentFilterFrom, laborPaymentFilterLabor, laborPaymentFilterTo, laborPaymentForm, loadContractorsList, loadDailyAttendance, loadLaborAttendance, loadLaborPayments, loadParties, loadPhase3ProjectData, loadProjectLaborAttendanceHistory, loadProjectLabors, loadProjectStaff, loadProjectSuppliers, loadProjectVendorAttendanceHistory, loadReportsData, loadStaffAttendance, loadStaffPayments, loadSupplierLedger, loadSupplierPayments, loadVendorPayments, localVendorForm, materialForm, materialsMaster, omniSearchQuery, party, partyForm, partyPaymentForm, paymentsSubTab, project, projectForm, quickAttendanceForm, quickPaymentForm, receivedForm, reportEndDate, reportEntityType, reportFrequency, reportMaterialFilter, reportProjectFilter, reportProjectStatus, reportSearch, reportStartDate, reportType, screen, selectedLabor, selectedLaborIds, selectedSupplier, selectedVendor, setAddLaborModal, setAddMaterialModal, setAddVendorModal, setAdjustmentForm, setAdjustmentModal, setAdjustmentRows, setAllProjectsList, setAssignAgentModal, setAssignForm, setAssigningAgentId, setAttendanceDetailModal, setAttendanceSubTab, setBillFile, setCommissionForm, setCommissionModal, setCommissionRows, setCommissionSummary, setConstructionSubTab, setDeleteProjectError, setDeleteProjectModal, setDeletingProject, setEditingAdjId, setEditingCommissionId, setEditingExpenseId, setEditingLaborId, setEditingLaborPaymentId, setEditingPartyPaymentId, setEditingReceivedId, setEditingStaffId, setEditingSupplierPaymentId, setEditingUsedId, setEditingVendorPaymentId, setExpenseForm, setExpenseModal, setExpenseRows, setExpenseSummary, setLaborAttendanceHistory, setLaborAttendanceRows, setLaborForm, setLaborPaymentForm, setLaborPaymentModal, setLaborPaymentsHistory, setLocalVendorForm, setLocalVendorModal, setLockedContractorId, setMaterialForm, setMaterialsMaster, setMessage, setModalError, setOmniSearchResults, setParty, setPartyForm, setPartyPaymentForm, setPartyPaymentModal, setPartyPayments, setPaymentsSubTab, setProject, setProjectAgents, setProjectForm, setProjectLabors, setProjectTab, setProjectVendors, setQuickAttendanceForm, setQuickAttendanceModal, setQuickPaymentForm, setQuickPaymentModal, setReceivedForm, setReceivedModal, setSavingAttendance, setSavingAttendanceDetail, setSavingLaborAttendance, setSavingQuickAttendance, setSavingQuickPayment, setSavingStaffAttendance, setScreen, setSelectedLabor, setSelectedLaborIds, setSelectedSupplier, setSelectedVendor, setStaffForm, setStaffModal, setStaffPaymentForm, setStaffPaymentModal, setSupplierLedgerTab, setSupplierPaymentForm, setSupplierPaymentModal, setSupplyForm, setSupplyModal, setTimelineData, setTimelineMaterial, setTimelineStock, setUsedForm, setUsedModal, setVendorAttendanceHistory, setVendorMaterialHistory, setVendorPaymentForm, setVendorPaymentModal, setVendorPaymentsHistory, staffAttendanceDate, staffDailyAttendance, staffForm, staffPaymentForm, staffPaymentSavingRef, staffSavingRef, supplierPaymentForm, supplyForm, updateProjectUrl, updateUrlParams, usedForm, vendorMode, vendorPaymentForm,
  };
  const h = {};
  registerNavigation(handlerCtx, h);
  registerProjectData(handlerCtx, h);
  registerConstructionSave(handlerCtx, h);
  registerStaffHandlers(handlerCtx, h);
  registerPartyRecords(handlerCtx, h);
  registerAttendancePay(handlerCtx, h);
  const { handleSectionChange, handleAttendanceSubChange, handlePaymentsSubChange, handleConstructionSubChange, openQuickAttendance, handleSaveQuickAttendance, openQuickPayment, handleSaveQuickPayment, openDeleteProjectModal, confirmDeleteProject, showParty, openSupplierLedger, openLaborDetail, assignAgent, removeAgent, refreshProjectData, openReportsScreen, openMaterialTimeline, handleMaterialNameChange, resolveMaterialId, saveMaterialMaster, saveReceivedEntry, saveSupplierPayment, saveLocalVendor, saveUsedEntry, saveAdjustmentEntry, saveExpenseEntry, saveCommissionEntry, computeStaffWage, saveAllStaffAttendance, saveStaffMember, markStaffAttendance, saveStaffPayment, deleteStaffMember, deleteStaffPayment, saveParty, saveProject, del, savePartyPayment, assignVendorToProject, openVendorDetail, saveAllAttendance, saveVendorPayment, saveMaterialSupply, saveLabor, applyBulkStatus, saveAllLaborAttendance, saveAttendanceDetailModal, saveLaborPayment } = h;

  const pm = {
    isAgent, effectiveDark, submitAction, screen, setScreen, role, isSupervisor, agentSpecs,
    hasAgentPayment, hasAgentLabor, hasAgentConstruction, allowedMainTabs, allowedAttendanceSubTabs,
    parties, party, partyForm, setPartyForm, search, setSearch, pagination, setPagination, setMessage,
    project, projectForm, setProjectForm, projectTab, setProjectTab, attendanceSubTab,
    setAttendanceSubTab, paymentsSubTab, constructionSubTab, updateProjectUrl, handleSectionChange,
    handleAttendanceSubChange, handlePaymentsSubChange, handleConstructionSubChange, partyPayments,
    partyPaymentForm, setPartyPaymentForm, partyPaymentModal, setPartyPaymentModal,
    editingPartyPaymentId, setEditingPartyPaymentId, vendorPaymentModal, setVendorPaymentModal,
    editingVendorPaymentId, setEditingVendorPaymentId, editingSupplierPaymentId,
    setEditingSupplierPaymentId, modalReadOnly, setModalReadOnly, projectVendors, allVendorsMaster,
    contractorSearch, setContractorSearch, contractorsLoading, suppliersMaster, projectSuppliers,
    selectedSupplier, setSelectedSupplier, supplierLedgerData, loadingSupplierLedger, supplierLedgerTab,
    setSupplierLedgerTab, supplierPaymentsList, supplierSearch, setSupplierSearch, supplierPaymentModal,
    setSupplierPaymentModal, supplierPaymentForm, setSupplierPaymentForm, vendorTypeFilter,
    setVendorTypeFilter, localVendorModal, setLocalVendorModal, localVendorForm, setLocalVendorForm,
    contractorMenuOpen, setContractorMenuOpen, addVendorModal, setAddVendorModal, vendorMode,
    setVendorMode, loadContractorsList, assignForm, setAssignForm, selectedVendor, setSelectedVendor,
    vendorAttendanceHistory, setVendorAttendanceHistory, vendorPaymentsHistory, vendorMaterialHistory,
    calendarMonth, setCalendarMonth, attendanceDate, setAttendanceDate, attendanceRows,
    setAttendanceRows, savingAttendance, projectVendorAttendanceHistory, projectLaborAttendanceHistory,
    vendorPaymentsList, vPayFilterVendor, setVPayFilterVendor, vPayFilterType, setVPayFilterType,
    vPayFilterFrom, setVPayFilterFrom, vPayFilterTo, setVPayFilterTo, vendorPaymentForm,
    setVendorPaymentForm, supplyModal, setSupplyModal, supplyForm, setSupplyForm, projectLabors,
    selectedLabor, setSelectedLabor, addLaborModal, setAddLaborModal, editingLaborId, setEditingLaborId,
    laborForm, setLaborForm, laborAttendanceDate, setLaborAttendanceDate, laborAttendanceRows,
    setLaborAttendanceRows, savingLaborAttendance, laborPaymentsList, laborPaymentFilterLabor,
    setLaborPaymentFilterLabor, laborPaymentFilterFrom, setLaborPaymentFilterFrom, laborPaymentFilterTo,
    setLaborPaymentFilterTo, laborPaymentModal, setLaborPaymentModal, laborPaymentForm,
    setLaborPaymentForm, editingLaborPaymentId, setEditingLaborPaymentId, laborCalendarMonth,
    setLaborCalendarMonth, laborAttendanceHistory, setLaborAttendanceHistory, laborPaymentsHistory,
    lockedContractorId, setLockedContractorId, laborTypeFilter, setLaborTypeFilter,
    laborAttendanceSection, setLaborAttendanceSection, attendanceContractorFilter,
    setAttendanceContractorFilter, selectedLaborIds, setSelectedLaborIds, modalError, setModalError,
    attendanceDetailModal, setAttendanceDetailModal, savingAttendanceDetail, materialsMaster, stockRows,
    materialsSubTab, receivedRows, usedRows, wastageAdjRows, returnMaterialRows, scrapMaterialRows,
    matFilterId, setMatFilterId, matFilterFrom, setMatFilterFrom, matFilterTo, setMatFilterTo,
    addMaterialModal, setAddMaterialModal, materialForm, setMaterialForm, receivedModal,
    setReceivedModal, receivedForm, setReceivedForm, editingReceivedId, setEditingReceivedId, usedModal,
    setUsedModal, usedForm, setUsedForm, editingUsedId, setEditingUsedId, adjustmentModal,
    setAdjustmentModal, adjustmentForm, setAdjustmentForm, editingAdjId, setEditingAdjId, setBillFile,
    timelineMaterial, setTimelineMaterial, timelineData, timelineStock, expenseRows, expenseSummary,
    expenseCategoryFilter, setExpenseCategoryFilter, expenseSearch, setExpenseSearch, expenseModal,
    setExpenseModal, expenseForm, setExpenseForm, editingExpenseId, setEditingExpenseId, commissionRows,
    commissionSummary, commissionSearch, setCommissionSearch, commissionModal, setCommissionModal,
    commissionForm, setCommissionForm, editingCommissionId, setEditingCommissionId, projectStaff,
    staffSummary, staffSearch, setStaffSearch, staffRoleFilter, setStaffRoleFilter, staffModal,
    setStaffModal, staffForm, setStaffForm, editingStaffId, setEditingStaffId, staffAttendanceDate,
    setStaffAttendanceDate, staffDailyAttendance, setStaffDailyAttendance, staffAttendanceLoading,
    savingStaffAttendance, projectStaffAttendanceHistory, staffPayments, staffPaymentsSummary,
    staffPaymentModal, setStaffPaymentModal, staffPaymentForm, setStaffPaymentForm,
    editingStaffPaymentId, setEditingStaffPaymentId, staffPaymentFilterType, setStaffPaymentFilterType,
    expenseItemSuggestions, reportType, setReportType, reportProjectFilter, setReportProjectFilter,
    reportMaterialFilter, setReportMaterialFilter, reportProjectStatus, setReportProjectStatus,
    reportEntityType, setReportEntityType, reportFrequency, setReportFrequency, reportSearch,
    setReportSearch, reportStartDate, setReportStartDate, reportEndDate, setReportEndDate, reportData,
    loadingReport, allProjectsList, omniSearchQuery, setOmniSearchQuery, omniSearchResults,
    setOmniSearchResults, omniSearchLoading, omniSearchOpen, setOmniSearchOpen, omniActiveTab,
    setOmniActiveTab, setQuickAttendanceModal, quickAttendanceForm, setQuickAttendanceForm,
    savingQuickAttendance, setQuickPaymentModal, quickPaymentForm, setQuickPaymentForm,
    savingQuickPayment, openQuickAttendance, handleSaveQuickAttendance, openQuickPayment,
    handleSaveQuickPayment, projectAgents, allAgentsList, assignAgentModal, setAssignAgentModal,
    assigningAgentId, setAssigningAgentId, deleteProjectModal, setDeleteProjectModal, deletingProject,
    deleteProjectError, setDeleteProjectError, openDeleteProjectModal, confirmDeleteProject, showParty,
    openSupplierLedger, loadLaborAttendance, openLaborDetail, showProject, assignAgent, removeAgent,
    openReportsScreen, availableReportProjects, availableReportMaterials, reportCsvUrl,
    openMaterialTimeline, handleMaterialNameChange, saveMaterialMaster, saveReceivedEntry,
    saveSupplierPayment, saveLocalVendor, saveUsedEntry, saveAdjustmentEntry, saveExpenseEntry,
    saveCommissionEntry, computeStaffWage, loadStaffAttendance, saveAllStaffAttendance, saveStaffMember,
    saveStaffPayment, deleteStaffMember, deleteStaffPayment, saveParty, saveProject, del,
    savePartyPayment, assignVendorToProject, openVendorDetail, loadDailyAttendance, saveAllAttendance,
    saveVendorPayment, saveMaterialSupply, saveLabor, applyBulkStatus, saveAllLaborAttendance,
    saveAttendanceDetailModal, saveLaborPayment,
  };

  return (
    <PmContext.Provider value={pm}>
      <section className={`pm-container${effectiveDark ? ' dark-mode' : ''}`}>
        <SubmitToast toast={submitAction.toast} onDismiss={submitAction.dismissToast} />
        {/* ── TOP NAV BAR ───────────────────────────────────────────────────── */}
        <PmTopBar />

        {message && (
          <div className="alert" onClick={() => setMessage('')} style={{ cursor: 'pointer' }}>
            {message} <small style={{ float: 'right' }}>&times;</small>
          </div>
        )}

        {/* ── 1. PARTIES LIST ───────────────────────────────────────────────── */}
        {screen === 'parties' && (
          <PartiesScreen />
        )}

        {screen === 'projects' && (
          <ProjectsScreen />
        )}

        {/* ── 2. ADD/EDIT PARTY FORM ────────────────────────────────────────── */}
        {screen === 'partyForm' && (
          <PartyFormScreen />
        )}

        {/* ── 3. SINGLE PARTY DETAIL SCREEN ─────────────────────────────────── */}
        {screen === 'party' && party && (
          <PartyDetailScreen />
        )}

        {/* ── 4. ADD/EDIT PROJECT FORM ───────────────────────────────────────── */}
        {screen === 'projectForm' && (
          <ProjectFormScreen />
        )}

        {/* ── 5. PROJECT OVERVIEW & ALL PHASE 1, 2, 3 TABS ────────────────────── */}
        {screen === 'project' && project && (
          <ProjectScreen />
        )}

        {/* ── 6. REPORTS SCREEN (PHASE 3) ───────────────────────────────────── */}
        {screen === 'reports' && (
          <ReportsScreen />
        )}

        {/* ── ATTENDANCE DETAIL & EDIT MODAL ─────────────────────────────── */}
        {attendanceDetailModal && (
          <AttendanceDetailModal />
        )}

        {/* ── DELETE PROJECT CONFIRMATION MODAL ─────────────────────────────── */}
        {deleteProjectModal && (
          <DeleteProjectModal />
        )}

        {/* ── 7. OMNI-SEARCH RESULTS MODAL / DRAWER ────────────────────────── */}
        {omniSearchOpen && omniSearchResults && (
          <OmniSearchPanel />
        )}

        {/* ── 8. QUICK ATTENDANCE MODAL ─────────────────────────────────────── */}
        {quickAttendanceModal && (
          <QuickAttendanceModal />
        )}

        {/* ── 9. QUICK PAYMENT MODAL ────────────────────────────────────────── */}
        {quickPaymentModal && (
          <QuickPaymentModal />
        )}

        {/* Global Datalists for Materials and Units */}
        <datalist id="all-master-materials-list">
          {materialsMaster.map((m) => (
            <option key={m.id} value={m.name} />
          ))}
          <option value="Cement" />
          <option value="Ultratech Cement" />
          <option value="Ambuja Cement" />
          <option value="Steel (Sariya / Rebar)" />
          <option value="TMT Sariya 12mm" />
          <option value="Red Bricks (Eent)" />
          <option value="Fly Ash Bricks" />
          <option value="AAC Blocks" />
          <option value="Sand (Reet / Balu)" />
          <option value="Badarpur / Dust" />
          <option value="Gitti (Aggregate 10mm / 20mm)" />
          <option value="Binding Wire" />
          <option value="Wall Putty" />
          <option value="Tile Adhesive" />
          <option value="Gypsum Powder" />
          <option value="Paint / Primer" />
          <option value="Tiles / Marble" />
          <option value="Plumbing Pipes / Fittings" />
        </datalist>

        <datalist id="common-material-units-list">
          {COMMON_MATERIAL_UNITS.map((u) => (
            <option key={u.value} value={u.value}>
              {u.label}
            </option>
          ))}
        </datalist>

        {/* ── COMPONENT STYLES ──────────────────────────────────────────────── */}
        <style jsx>{pmStyles}</style>
      </section>
    </PmContext.Provider>
  );
}
