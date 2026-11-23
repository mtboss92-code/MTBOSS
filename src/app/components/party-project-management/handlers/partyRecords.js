'use client';

import { api } from '../api';
import { partyBlank, projectBlank, today } from '../shared';

export function registerPartyRecords(ctx, h) {
  const { assignForm, calendarMonth, commissionRows, editingPartyPaymentId, laborPaymentFilterFrom, laborPaymentFilterLabor, laborPaymentFilterTo, loadLaborPayments, loadParties, loadProjectLabors, loadProjectSuppliers, loadSupplierLedger, loadSupplierPayments, party, partyForm, partyPaymentForm, project, projectForm, selectedLabor, selectedSupplier, setAddVendorModal, setAssignForm, setCommissionRows, setCommissionSummary, setEditingPartyPaymentId, setMessage, setModalError, setPartyForm, setPartyPaymentForm, setPartyPaymentModal, setProjectForm, setScreen, setSelectedLabor, setSelectedVendor, setTimelineMaterial, setVendorAttendanceHistory, setVendorMaterialHistory, setVendorPaymentsHistory, vendorMode } = ctx;
// ── Party CRUD ───────────────────────────────────────────────────────────────
  const saveParty = async (e) => {
    e.preventDefault();
    try {
      if (partyForm.id) {
        await api(`/api/admin/project-management/parties/${partyForm.id}`, { method: 'PATCH', body: JSON.stringify(partyForm) });
        setMessage('Party updated');
        setPartyForm(partyBlank);
        setScreen('parties');
        loadParties();
      } else {
        const res = await api('/api/admin/project-management/parties', { method: 'POST', body: JSON.stringify(partyForm) });
        setMessage(res.is_existing ? 'Existing party found. You can add a project here.' : 'Party created');
        setPartyForm(partyBlank);
        // Open the party immediately
        h.showParty(res.data.id);
      }
    } catch (e) {
      setMessage(e.message);
      throw e;
    }
  };

// ── Project CRUD ─────────────────────────────────────────────────────────────
  const saveProject = async (e) => {
    e.preventDefault();
    try {
      if (projectForm.id) {
        await api(`/api/admin/project-management/projects/${projectForm.id}`, { method: 'PATCH', body: JSON.stringify(projectForm) });
        setMessage('Project updated');
      } else {
        await api('/api/admin/project-management/projects', { method: 'POST', body: JSON.stringify(projectForm) });
        setMessage('Project created');
      }
      setProjectForm(projectBlank);
      if (party?.party?.id) {
        h.showParty(party.party.id);
      } else {
        setScreen('parties');
      }
    } catch (e) {
      setMessage(e.message);
      throw e;
    }
  };

// ── Generic Deletion ────────────────────────────────────────────────────────
  const del = async (kind, id) => {
    if (!confirm('Are you sure? This action cannot be undone.')) return;
    try {
      if (kind === 'party') {
        await api(`/api/admin/project-management/parties/${id}`, { method: 'DELETE' });
        loadParties();
      } else if (kind === 'partyPayment') {
        await api(`/api/admin/project-management/payments/${id}`, { method: 'DELETE' });
        h.refreshProjectData();
      } else if (kind === 'supplierPayment') {
        await api(`/api/admin/project-management/supplier-payments?id=${id}`, { method: 'DELETE' });
        loadSupplierPayments(project?.id);
        loadProjectSuppliers(project?.id);
        if (selectedSupplier) {
          loadSupplierLedger(project?.id, selectedSupplier.supplier_id, selectedSupplier.raw_supplier_name || selectedSupplier.supplier_name);
        }
        h.refreshProjectData();
      } else if (kind === 'vendorPayment') {
        await api(`/api/admin/project-management/vendor-payments/${id}`, { method: 'DELETE' });
        h.refreshProjectData();
      } else if (kind === 'received') {
        await api(`/api/admin/project-management/material-received/${id}`, { method: 'DELETE' });
        h.refreshProjectData();
      } else if (kind === 'used') {
        await api(`/api/admin/project-management/material-used/${id}`, { method: 'DELETE' });
        h.refreshProjectData();
      } else if (kind === 'adjustment') {
        await api(`/api/admin/project-management/material-adjustments/${id}`, { method: 'DELETE' });
        loadProjectSuppliers(project?.id);
        if (selectedSupplier) {
          loadSupplierLedger(project?.id, selectedSupplier.supplier_id, selectedSupplier.raw_supplier_name || selectedSupplier.supplier_name);
        }
        h.refreshProjectData();
      } else if (kind === 'expense') {
        await api(`/api/admin/project-management/other-expenses/${id}`, { method: 'DELETE' });
        h.refreshProjectData();
      } else if (kind === 'commission') {
        const deletedComm = commissionRows.find((row) => Number(row.id) === Number(id));
        await api(`/api/admin/project-management/commissions/${id}`, { method: 'DELETE' });
        setCommissionRows((prev) => prev.filter((row) => Number(row.id) !== Number(id)));
        setCommissionSummary((prev) => ({
          ...prev,
          totalAmount: Math.max(0, Number(prev.totalAmount || 0) - Number(deletedComm?.amount || 0)),
        }));
        h.refreshProjectData();
      } else if (kind === 'labor') {
        await api(`/api/admin/project-management/labor/${id}`, { method: 'DELETE' });
        loadProjectLabors(project.id);
        h.refreshProjectData();
      } else if (kind === 'laborPayment') {
        await api(`/api/admin/project-management/labor/payments/${id}`, { method: 'DELETE' });
        loadLaborPayments(project.id, laborPaymentFilterLabor, laborPaymentFilterFrom, laborPaymentFilterTo);
        if (selectedLabor) h.openLaborDetail(selectedLabor);
        h.refreshProjectData();
      }
      setMessage('Record deleted successfully');
    } catch (e) {
      setMessage(e.message);
    }
  };

// ── Phase 1: Party Payment ───────────────────────────────────────────────────
  const savePartyPayment = async (e) => {
    if (e) e.preventDefault();
    try {
      if (editingPartyPaymentId) {
        await api(`/api/admin/project-management/payments/${editingPartyPaymentId}`, {
          method: 'PATCH',
          body: JSON.stringify({
            amount: Number(partyPaymentForm.amount),
            payment_date: partyPaymentForm.payment_date,
            mode: partyPaymentForm.mode,
            transaction_reference: partyPaymentForm.transaction_reference,
            note: partyPaymentForm.note,
          }),
        });
        setMessage('Party payment updated successfully');
        setPartyPaymentModal(false);
        setEditingPartyPaymentId(null);
      } else {
        await api('/api/admin/project-management/payments', {
          method: 'POST',
          body: JSON.stringify({ ...partyPaymentForm, project_id: project.id }),
        });
        setPartyPaymentForm({ amount: '', payment_date: today(), mode: 'bank', note: '', transaction_reference: '' });
        setMessage('Party payment recorded successfully');
        setPartyPaymentModal(false);
      }
      h.refreshProjectData();
    } catch (e) {
      setMessage(e.message);
      throw e;
    }
  };

// ── Phase 2: Assign Vendor ───────────────────────────────────────────────────
  const assignVendorToProject = async (e) => {
    e.preventDefault();
    setModalError('');
    try {
      let vId = assignForm.vendor_id;
      if (vendorMode === 'new') {
        const nv = await api('/api/admin/project-management/vendors', {
          method: 'POST',
          body: JSON.stringify({
            name: assignForm.new_vendor_name,
            phone: assignForm.new_vendor_phone,
            trade: assignForm.new_vendor_trade,
            address: assignForm.new_vendor_address,
          }),
        });
        vId = nv.data.id;
      }

      await api('/api/admin/project-management/project-vendors', {
        method: 'POST',
        body: JSON.stringify({
          project_id: project.id,
          vendor_id: vId,
          work_description: assignForm.work_description,
          pay_type: assignForm.pay_type,
          daily_rate: assignForm.pay_type === 'daily_wage' ? assignForm.daily_rate : null,
          contract_amount: assignForm.pay_type === 'contract' ? assignForm.contract_amount : null,
        }),
      });

      setMessage('Contractor added to project successfully');
      setAddVendorModal(false);
      setModalError('');
      setAssignForm({
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
      h.refreshProjectData();
    } catch (e) {
      console.error('Error assigning contractor:', e);
      throw e;
      setModalError(e.message || 'Could not assign contractor');
      setMessage(`❌ ${e.message || 'Could not assign contractor'}`);
    }
  };

// ── Phase 2: View Vendor Details ─────────────────────────────────────────────
  const openVendorDetail = async (pv) => {
    setSelectedLabor(null);
    setTimelineMaterial(null);
    setSelectedVendor(pv);
    try {
      const [attRes, payRes, matRes] = await Promise.all([
        api(`/api/admin/project-management/attendance?projectVendorId=${pv.id}&month=${calendarMonth}`).catch(() => ({ data: [] })),
        api(`/api/admin/project-management/vendor-payments?projectVendorId=${pv.id}&pageSize=100`).catch(() => ({ data: [] })),
        api(`/api/admin/project-management/material-supply?projectVendorId=${pv.id}&pageSize=100`).catch(() => ({ data: [] })),
      ]);
      setVendorAttendanceHistory(attRes.data || []);
      setVendorPaymentsHistory(payRes.data || []);
      setVendorMaterialHistory(matRes.data || []);
    } catch (e) {
      setMessage(e.message);
    }
  };
  Object.assign(h, { saveParty, saveProject, del, savePartyPayment, assignVendorToProject, openVendorDetail });
}
