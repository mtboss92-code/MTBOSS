'use client';

import { api, uploadFile } from '../api';
import { INR, getDefaultUnitForMaterial, materialBlank, receivedBlank, today } from '../shared';

export function registerProjectData(ctx, h) {
  const { assigningAgentId, billFile, editingReceivedId, editingSupplierPaymentId, loadContractorsList, loadPhase3ProjectData, loadProjectLaborAttendanceHistory, loadProjectStaff, loadProjectSuppliers, loadProjectVendorAttendanceHistory, loadStaffPayments, loadSupplierLedger, loadSupplierPayments, localVendorForm, materialForm, materialsMaster, project, receivedForm, selectedSupplier, selectedVendor, setAddMaterialModal, setAllProjectsList, setAssignAgentModal, setAssigningAgentId, setBillFile, setEditingReceivedId, setEditingSupplierPaymentId, setLocalVendorForm, setLocalVendorModal, setMaterialForm, setMaterialsMaster, setMessage, setModalError, setPartyPayments, setProject, setProjectAgents, setProjectLabors, setProjectVendors, setReceivedForm, setReceivedModal, setScreen, setSelectedLabor, setSelectedVendor, setSupplierPaymentForm, setSupplierPaymentModal, setTimelineData, setTimelineMaterial, setTimelineStock, supplierPaymentForm } = ctx;
// ── Agent Assignment Functions ────────────────────────────────────────────────
  const assignAgent = async () => {
    if (!assigningAgentId || !project?.id) return;
    try {
      const res = await api(`/api/admin/project-management/projects/${project.id}/agents`, {
        method: 'POST',
        body: JSON.stringify({ agent_id: assigningAgentId }),
      });
      if (res.success !== false) {
        const agentsRes = await api(`/api/admin/project-management/projects/${project.id}/agents`);
        setProjectAgents(agentsRes.data || []);
        setAssigningAgentId('');
        setAssignAgentModal(false);
      } else {
        setMessage(res.error || 'Could not assign agent');
      }
    } catch (e) {
      setMessage(e.message);
      throw e;
    }
  };

const removeAgent = async (agentId) => {
    if (!project?.id) return;
    try {
      await api(`/api/admin/project-management/projects/${project.id}/agents/${agentId}`, { method: 'DELETE' });
      setProjectAgents((prev) => prev.filter((a) => a.id !== agentId));
    } catch (e) {
      setMessage(e.message);
    }
  };

// ── Refresh Project Data ─────────────────────────────────────────────────────
  const refreshProjectData = async (projId) => {
    const pid = projId || project?.id;
    if (!pid) return;
    try {
      const [projRes, pvRes, ppRes, laborRes] = await Promise.all([
        api(`/api/admin/project-management/projects/${pid}`),
        api(`/api/admin/project-management/project-vendors?projectId=${pid}&page=1&pageSize=100`),
        api(`/api/admin/project-management/payments?projectId=${pid}&page=1&pageSize=100`),
        api(`/api/admin/project-management/labor?projectId=${pid}&pageSize=200`).catch(() => ({ data: [] })),
      ]);
      setProject(projRes.data);
      setProjectVendors(pvRes.data || []);
      setPartyPayments(ppRes.data || []);
      setProjectLabors(laborRes.data || []);
      if (selectedVendor) {
        const uv = (pvRes.data || []).find((v) => Number(v.id) === Number(selectedVendor.id));
        if (uv) setSelectedVendor(uv);
      }
      loadPhase3ProjectData(pid);
      loadProjectVendorAttendanceHistory(pid);
      loadProjectLaborAttendanceHistory(pid);
      loadContractorsList('all');
      loadProjectSuppliers(pid);
      loadSupplierPayments(pid);
      loadProjectStaff(pid);
      loadStaffPayments(pid);
      if (selectedSupplier) {
        loadSupplierLedger(pid, selectedSupplier.supplier_id, selectedSupplier.raw_supplier_name || selectedSupplier.supplier_name);
      }
    } catch (e) {
      setMessage(e.message);
    }
  };

const openReportsScreen = async () => {
    setScreen('reports');
    try {
      const pRes = await api('/api/admin/project-management/projects?pageSize=200').catch(() => ({ data: [] }));
      if (pRes?.data && Array.isArray(pRes.data)) setAllProjectsList(pRes.data);
      const mRes = await api('/api/admin/project-management/materials?pageSize=200').catch(() => ({ data: [] }));
      if (mRes?.data && Array.isArray(mRes.data)) setMaterialsMaster(mRes.data);
    } catch {}
  };

// ── Open Timeline Drawer ────────────────────────────────────────────────────
  const openMaterialTimeline = async (material) => {
    if (!project?.id) return;
    try {
      const matId = material.id || material.material_id;
      const res = await api(`/api/admin/project-management/material-timeline?projectId=${project.id}&materialId=${matId}`);
      setSelectedVendor(null);
      setSelectedLabor(null);
      setTimelineMaterial(res.material);
      setTimelineData(res.timeline || []);
      setTimelineStock(res.current_stock ?? 0);
    } catch (e) {
      setMessage(e.message);
    }
  };

const handleMaterialNameChange = (name, formState, setFormState, nameField = 'material_name') => {
    const prevSuggested = getDefaultUnitForMaterial(formState[nameField]);
    const nextSuggested = getDefaultUnitForMaterial(name);
    const matchedMaster = materialsMaster.find((m) => String(m.name || '').trim().toLowerCase() === String(name || '').trim().toLowerCase());
    const matchedUnit = matchedMaster?.unit;
    const newUnit = matchedUnit || (formState.unit === prevSuggested || !formState.unit ? nextSuggested : formState.unit);

    setFormState((prev) => ({
      ...prev,
      [nameField]: name,
      ...(matchedMaster ? { material_id: String(matchedMaster.id) } : {}),
      unit: newUnit || 'bags',
    }));
  };

// ── Save Master Material ────────────────────────────────────────────────────
  // Material endpoints retain their material_id contract. The simplified UI uses
  // a name, resolving an existing master record or creating one invisibly.
  const resolveMaterialId = async (materialName, fallbackId = '', unit = '') => {
    const name = String(materialName || '').trim();
    if (!name) throw new Error('Material name is required');
    const matching = materialsMaster.find((material) => String(material.name || '').trim().toLowerCase() === name.toLowerCase());
    if (matching) {
      if (unit && unit.trim() && matching.unit !== unit.trim()) {
        try {
          await api(`/api/admin/project-management/materials/${matching.id}`, {
            method: 'PATCH',
            body: JSON.stringify({ unit: unit.trim() }),
          });
          matching.unit = unit.trim();
        } catch {}
      }
      return matching.id;
    }
    if (fallbackId) return fallbackId;
    const chosenUnit = unit && unit.trim() ? unit.trim() : getDefaultUnitForMaterial(name);
    const created = await api('/api/admin/project-management/materials', {
      method: 'POST',
      body: JSON.stringify({ ...materialBlank, name, unit: chosenUnit }),
    });
    if (created.data) setMaterialsMaster((previous) => [...previous, created.data]);
    return created.data?.id;
  };

const saveMaterialMaster = async (e) => {
    e.preventDefault();
    try {
      const res = await api('/api/admin/project-management/materials', {
        method: 'POST',
        body: JSON.stringify(materialForm),
      });
      setMessage('Material saved successfully');
      setAddMaterialModal(false);
      setMaterialForm(materialBlank);
      setMaterialsMaster((prev) => [...prev, res.data]);
      if (project?.id) loadPhase3ProjectData(project.id);
    } catch (err) {
      setMessage(err.message);
      throw err;
    }
  };

// ── Save Received Entry ─────────────────────────────────────────────────────
  const saveReceivedEntry = async (e) => {
    e.preventDefault();
    if (!project?.id) return;
    try {
      let bill_url = receivedForm.bill_url;
      let bill_filename = receivedForm.bill_filename;
      
      if (billFile) {
        const uploadData = await uploadFile(billFile);
        bill_url = uploadData.url;
        bill_filename = uploadData.filename;
      }
      
      const unit = receivedForm.unit || getDefaultUnitForMaterial(receivedForm.material_name);
      const material_id = await resolveMaterialId(receivedForm.material_name, receivedForm.material_id, unit);
      const payload = { ...receivedForm, material_id, project_id: project.id, bill_url, bill_filename, unit };
      
      if (editingReceivedId) {
        await api(`/api/admin/project-management/material-received/${editingReceivedId}`, {
          method: 'PATCH',
          body: JSON.stringify(payload),
        });
        setMessage('Material received entry updated');
      } else {
        await api('/api/admin/project-management/material-received', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        setMessage('Material received recorded successfully');
      }
      setReceivedModal(false);
      setEditingReceivedId(null);
      setReceivedForm(receivedBlank);
      setBillFile(null);
      refreshProjectData(project.id);
      loadProjectSuppliers(project.id);
      if (selectedSupplier) {
        loadSupplierLedger(project.id, selectedSupplier.supplier_id, selectedSupplier.raw_supplier_name || selectedSupplier.supplier_name);
      }
    } catch (err) {
      setMessage(err.message);
      throw err;
    }
  };

// ── Save Supplier Payment ──────────────────────────────────────────────────
  const saveSupplierPayment = async (e) => {
    if (e) e.preventDefault();
    if (!project?.id) return;
    try {
      if (editingSupplierPaymentId) {
        await api(`/api/admin/project-management/supplier-payments?id=${editingSupplierPaymentId}`, {
          method: 'PATCH',
          body: JSON.stringify({
            amount: Number(supplierPaymentForm.amount),
            payment_date: supplierPaymentForm.payment_date,
            mode: supplierPaymentForm.mode,
            transaction_reference: supplierPaymentForm.transaction_reference,
            note: supplierPaymentForm.note,
          }),
        });
        setMessage('Vendor payment updated successfully');
        setSupplierPaymentModal(false);
        setEditingSupplierPaymentId(null);
      } else {
        const payload = {
          ...supplierPaymentForm,
          project_id: project.id,
        };
        const res = await api('/api/admin/project-management/supplier-payments', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        setMessage(res.is_advance ? `Vendor payment recorded as advance of ${INR(res.advance_amount)}` : 'Vendor payment recorded successfully');
        setSupplierPaymentModal(false);
      }
      setSupplierPaymentForm({
        supplier_id: '',
        supplier_name: '',
        amount: '',
        payment_date: today(),
        mode: 'bank',
        transaction_reference: '',
        note: '',
      });
      refreshProjectData(project.id);
      loadProjectSuppliers(project.id);
      loadSupplierPayments(project.id);
      if (selectedSupplier) {
        loadSupplierLedger(project.id, selectedSupplier.supplier_id, selectedSupplier.raw_supplier_name || selectedSupplier.supplier_name);
      }
    } catch (err) {
      setModalError(err.message);
      throw err;
    }
  };

// ── Save Local Vendor ────────────────────────────────────────────────────────
  const saveLocalVendor = async (e) => {
    e.preventDefault();
    if (!project?.id) return;
    try {
      const res = await api('/api/admin/project-management/local-vendors', {
        method: 'POST',
        body: JSON.stringify({
          projectId: project.id,
          ...localVendorForm,
        }),
      });
      setMessage(res.message || 'Local vendor saved successfully');
      setLocalVendorModal(false);
      setLocalVendorForm({
        name: '',
        phone: '',
        city: '',
        material_type: '',
        address: '',
      });
      await loadProjectSuppliers(project.id);
    } catch (err) {
      setModalError(err.message || 'Failed to save local vendor');
      throw err;
    }
  };
  Object.assign(h, { assignAgent, removeAgent, refreshProjectData, openReportsScreen, openMaterialTimeline, handleMaterialNameChange, resolveMaterialId, saveMaterialMaster, saveReceivedEntry, saveSupplierPayment, saveLocalVendor });
}
