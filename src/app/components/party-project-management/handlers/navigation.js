'use client';

import { api } from '../api';

export function registerNavigation(ctx, h) {
  const { attendanceSubTab, constructionSubTab, deleteProjectModal, deletingProjectRef, laborCalendarMonth, loadParties, loadProjectStaff, loadReportsData, loadStaffAttendance, loadStaffPayments, loadSupplierLedger, loadSupplierPayments, omniSearchQuery, party, paymentsSubTab, project, quickAttendanceForm, quickPaymentForm, reportEndDate, reportEntityType, reportFrequency, reportMaterialFilter, reportProjectFilter, reportProjectStatus, reportSearch, reportStartDate, reportType, screen, setAttendanceSubTab, setConstructionSubTab, setDeleteProjectError, setDeleteProjectModal, setDeletingProject, setLaborAttendanceHistory, setLaborPaymentsHistory, setMessage, setOmniSearchResults, setParty, setPaymentsSubTab, setProjectTab, setQuickAttendanceForm, setQuickAttendanceModal, setQuickPaymentForm, setQuickPaymentModal, setSavingQuickAttendance, setSavingQuickPayment, setScreen, setSelectedLabor, setSelectedSupplier, setSelectedVendor, setSupplierLedgerTab, setTimelineMaterial, staffAttendanceDate, updateProjectUrl, updateUrlParams } = ctx;
const handleSectionChange = (sec) => {
    setProjectTab(sec);
    setSelectedVendor(null);
    setSelectedLabor(null);
    let subVal = null;
    if (sec === 'attendance') subVal = attendanceSubTab;
    else if (sec === 'payments') subVal = paymentsSubTab;
    else if (sec === 'construction') subVal = constructionSubTab;
    updateUrlParams(sec, subVal);
  };

const handleAttendanceSubChange = (sub) => {
    setAttendanceSubTab(sub);
    updateUrlParams('attendance', sub);
    if (sub === 'staff' && project?.id) {
      loadStaffAttendance(project.id, staffAttendanceDate);
      loadProjectStaff(project.id);
    }
  };

const handlePaymentsSubChange = (sub) => {
    setPaymentsSubTab(sub);
    updateUrlParams('payments', sub);
    if (sub === 'supplier' && project?.id) {
      loadSupplierPayments(project.id);
    }
    if (sub === 'staff' && project?.id) {
      loadStaffPayments(project.id);
      loadProjectStaff(project.id);
      h.refreshProjectData(project.id);
    }
  };

const handleConstructionSubChange = (sub) => {
    setConstructionSubTab(sub);
    updateUrlParams('construction', sub);
  };

// Open Quick Attendance Modal
  const openQuickAttendance = (worker, proj = null) => {
    const defaultProj = proj || (worker.projects && worker.projects[0]) || {
      labor_id: worker.labor_id || worker.id,
      project_id: worker.project_id,
      project_name: worker.project_name,
      daily_rate: worker.daily_rate,
    };
    const rate = Number(defaultProj?.daily_rate || worker.daily_rate || 0);
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date());

    setQuickAttendanceForm({
      labor_id: defaultProj?.labor_id || worker.labor_id || worker.id || '',
      labor_name: worker.name || worker.labor_name || worker.entity_name || '',
      project_id: defaultProj?.project_id || '',
      project_name: defaultProj?.project_name || '',
      attendance_date: today,
      status: 'present',
      shift_type: 'day',
      overtime_hours: 0,
      daily_rate: rate,
      wage_amount: rate,
      note: '',
      available_projects: worker.projects && worker.projects.length > 0 ? worker.projects : [defaultProj],
    });
    setQuickAttendanceModal(true);
  };

// Save Quick Attendance
  const handleSaveQuickAttendance = async (e) => {
    e?.preventDefault?.();
    if (!quickAttendanceForm.labor_id || !quickAttendanceForm.project_id) {
      setMessage('Labor and Project are required');
      return;
    }
    setSavingQuickAttendance(true);
    try {
      const body = {
        entries: [{
          labor_id: Number(quickAttendanceForm.labor_id),
          attendance_date: quickAttendanceForm.attendance_date,
          status: quickAttendanceForm.status,
          shift_type: quickAttendanceForm.shift_type,
          overtime_hours: Number(quickAttendanceForm.overtime_hours || 0),
          note: quickAttendanceForm.note,
        }],
        admin_override: true,
      };
      const res = await api('/api/admin/project-management/labor/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.success) {
        setMessage(`✓ Attendance recorded for ${quickAttendanceForm.labor_name} in ${quickAttendanceForm.project_name || 'project'}`);
        setQuickAttendanceModal(false);
        if (omniSearchQuery.trim()) {
          const updated = await api(`/api/admin/project-management/omni-search?q=${encodeURIComponent(omniSearchQuery.trim())}`);
          if (updated.success) setOmniSearchResults(updated);
        }
        if (screen === 'reports') {
          loadReportsData(reportType, reportProjectFilter, reportMaterialFilter, reportProjectStatus, reportSearch, reportEntityType, reportFrequency, reportStartDate, reportEndDate);
        }
      } else {
        setMessage(res.error || 'Failed to record attendance');
      }
    } catch (err) {
      setMessage(err.message || 'Error recording attendance');
    } finally {
      setSavingQuickAttendance(false);
    }
  };

// Open Quick Payment Modal
  const openQuickPayment = (entity, type = 'labor', proj = null) => {
    const isSupplier =
      type === 'supplier' ||
      entity.entity_kind === 'supplier' ||
      entity.pay_type === 'material_supply' ||
      entity.trade === 'Material Supplier' ||
      entity.trade === 'Material Vendor' ||
      (type === 'vendor' && !entity.project_vendor_id && !proj?.project_vendor_id);
    const isLabor = type === 'labor' && !isSupplier;
    const resolvedType = isLabor ? 'labor' : (isSupplier ? 'supplier' : 'contractor');

    const defaultProj = proj || (entity.projects && entity.projects[0]) || {
      id: isLabor ? (entity.labor_id || entity.id) : (entity.project_vendor_id || entity.id),
      labor_id: entity.labor_id || entity.id,
      project_vendor_id: entity.project_vendor_id || entity.id,
      project_id: entity.project_id,
      project_name: entity.project_name,
      supplier_name: entity.supplier_name || entity.name,
      balance: entity.balance_due ?? entity.total_balance ?? 0,
    };
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date());

    setQuickPaymentForm({
      type: resolvedType,
      id: isLabor ? (defaultProj?.labor_id || entity.labor_id || entity.id || '') : (defaultProj?.project_vendor_id || entity.project_vendor_id || entity.id || ''),
      supplier_name: entity.supplier_name || defaultProj?.supplier_name || entity.name || entity.labor_name || entity.vendor_name || entity.entity_name || '',
      supplier_id: entity.supplier_id || defaultProj?.supplier_id || null,
      name: entity.name || entity.labor_name || entity.vendor_name || entity.entity_name || '',
      project_id: defaultProj?.project_id || entity.project_id || '',
      project_name: defaultProj?.project_name || entity.project_name || '',
      amount: '',
      payment_date: today,
      mode: 'cash',
      note: '',
      transaction_reference: '',
      balance_due: defaultProj?.balance ?? entity.total_balance ?? entity.balance_due ?? 0,
      available_projects: entity.projects && entity.projects.length > 0 ? entity.projects : [defaultProj],
    });
    setQuickPaymentModal(true);
  };

// Save Quick Payment
  const handleSaveQuickPayment = async (e) => {
    e?.preventDefault?.();
    if (!quickPaymentForm.amount || Number(quickPaymentForm.amount) <= 0) {
      setMessage('Please enter a valid payment amount');
      return;
    }
    if (quickPaymentForm.type !== 'supplier' && !quickPaymentForm.id) {
      setMessage('Payee identification missing');
      return;
    }
    if (!quickPaymentForm.project_id) {
      setMessage('Please select a project');
      return;
    }
    setSavingQuickPayment(true);
    try {
      if (quickPaymentForm.type === 'labor') {
        const body = {
          labor_id: Number(quickPaymentForm.id),
          amount: Number(quickPaymentForm.amount),
          payment_date: quickPaymentForm.payment_date,
          mode: quickPaymentForm.mode,
          note: quickPaymentForm.note,
          transaction_reference: quickPaymentForm.transaction_reference,
        };
        const res = await api('/api/admin/project-management/labor/payments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        if (res.success) {
          setMessage(`✓ Payment of ₹${quickPaymentForm.amount} recorded for ${quickPaymentForm.name}`);
          setQuickPaymentModal(false);
        } else {
          setMessage(res.error || 'Failed to record payment');
        }
      } else if (quickPaymentForm.type === 'supplier') {
        const body = {
          project_id: Number(quickPaymentForm.project_id),
          supplier_name: (quickPaymentForm.supplier_name || quickPaymentForm.name || '').trim(),
          supplier_id: quickPaymentForm.supplier_id ? Number(quickPaymentForm.supplier_id) : null,
          amount: Number(quickPaymentForm.amount),
          payment_date: quickPaymentForm.payment_date,
          mode: quickPaymentForm.mode,
          note: quickPaymentForm.note,
          transaction_reference: quickPaymentForm.transaction_reference,
        };
        const res = await api('/api/admin/project-management/supplier-payments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        if (res.success) {
          setMessage(`✓ Payment of ₹${quickPaymentForm.amount} recorded for ${quickPaymentForm.name}`);
          setQuickPaymentModal(false);
        } else {
          setMessage(res.error || 'Failed to record payment');
        }
      } else {
        const body = {
          project_vendor_id: Number(quickPaymentForm.id),
          amount: Number(quickPaymentForm.amount),
          payment_date: quickPaymentForm.payment_date,
          mode: quickPaymentForm.mode,
          payment_type: 'labour',
          note: quickPaymentForm.note,
          transaction_reference: quickPaymentForm.transaction_reference,
        };
        const res = await api('/api/admin/project-management/vendor-payments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        if (res.success) {
          setMessage(`✓ Payment of ₹${quickPaymentForm.amount} recorded for ${quickPaymentForm.name}`);
          setQuickPaymentModal(false);
        } else {
          setMessage(res.error || 'Failed to record payment');
        }
      }

      if (omniSearchQuery.trim()) {
        const updated = await api(`/api/admin/project-management/omni-search?q=${encodeURIComponent(omniSearchQuery.trim())}`);
        if (updated.success) setOmniSearchResults(updated);
      }
      if (screen === 'reports') {
        loadReportsData(reportType, reportProjectFilter, reportMaterialFilter, reportProjectStatus, reportSearch, reportEntityType, reportFrequency, reportStartDate, reportEndDate);
      }
    } catch (err) {
      setMessage(err.message || 'Error recording payment');
    } finally {
      setSavingQuickPayment(false);
    }
  };

const openDeleteProjectModal = (proj, partyName = '') => {
    setDeleteProjectError('');
    setDeletingProject(false);
    deletingProjectRef.current = false;
    setDeleteProjectModal({
      id: proj.id,
      name: proj.name,
      partyName: partyName || proj.party_name || party?.party?.name || 'Party',
      partyId: proj.party_id || party?.party?.id,
    });
  };

const confirmDeleteProject = async () => {
    if (deletingProjectRef.current || !deleteProjectModal) return;
    deletingProjectRef.current = true;
    setDeletingProject(true);
    setDeleteProjectError('');

    try {
      await api(`/api/admin/project-management/projects/${deleteProjectModal.id}`, {
        method: 'DELETE',
      });
      const deletedPartyId = deleteProjectModal.partyId;
      setDeleteProjectModal(null);
      deletingProjectRef.current = false;
      setDeletingProject(false);
      setMessage('Project deleted successfully.');

      if (screen === 'project') {
        if (deletedPartyId) {
          await showParty(deletedPartyId);
        } else {
          setScreen('parties');
          await loadParties();
        }
      } else if (screen === 'party' && party) {
        await showParty(party.party.id);
      } else {
        await loadParties();
      }
    } catch (err) {
      setDeleteProjectError(err.message || 'Could not delete project');
      deletingProjectRef.current = false;
      setDeletingProject(false);
    }
  };

// ── Show Single Party ────────────────────────────────────────────────────────
  const showParty = async (id) => {
    try {
      const d = await api(`/api/admin/project-management/parties/${id}?page=1&pageSize=100`);
      setParty(d.data);
      setScreen('party');
      updateProjectUrl(null);
    } catch (e) {
      setMessage(e.message);
    }
  };

const openSupplierLedger = (supplier) => {
    setSelectedSupplier(supplier);
    setSupplierLedgerTab('deliveries');
    loadSupplierLedger(project?.id, supplier.supplier_id, supplier.raw_supplier_name || supplier.supplier_name);
  };

const openLaborDetail = async (labor) => {
    try {
      setSelectedVendor(null);
      setTimelineMaterial(null);
      setSelectedLabor(labor);
      const [attRes, payRes] = await Promise.all([
        api(`/api/admin/project-management/labor/attendance?laborId=${labor.id}&month=${laborCalendarMonth}`).catch(() => ({ data: [] })),
        api(`/api/admin/project-management/labor/payments?projectId=${project.id}&laborId=${labor.id}&pageSize=100`).catch(() => ({ data: [] })),
      ]);
      setLaborAttendanceHistory(attRes.data || []);
      setLaborPaymentsHistory(payRes.data || []);
    } catch (e) {
      setMessage(e.message);
    }
  };
  Object.assign(h, { handleSectionChange, handleAttendanceSubChange, handlePaymentsSubChange, handleConstructionSubChange, openQuickAttendance, handleSaveQuickAttendance, openQuickPayment, handleSaveQuickPayment, openDeleteProjectModal, confirmDeleteProject, showParty, openSupplierLedger, openLaborDetail });
}
