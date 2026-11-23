'use client';

import { adjustmentBlank, commissionBlank, expenseBlank, getDefaultUnitForMaterial, packExpenseNote, usedBlank } from '../shared';
import { api, uploadFile } from '../api';

export function registerConstructionSave(ctx, h) {
  const { adjustmentForm, billFile, commissionForm, commissionRows, editingAdjId, editingCommissionId, editingExpenseId, editingUsedId, expenseForm, expenseRows, loadProjectSuppliers, loadSupplierLedger, project, selectedSupplier, setAdjustmentForm, setAdjustmentModal, setAdjustmentRows, setBillFile, setCommissionForm, setCommissionModal, setCommissionRows, setCommissionSummary, setEditingAdjId, setEditingCommissionId, setEditingExpenseId, setEditingUsedId, setExpenseForm, setExpenseModal, setExpenseRows, setExpenseSummary, setMessage, setModalError, setUsedForm, setUsedModal, usedForm } = ctx;
// ── Save Used Entry ─────────────────────────────────────────────────────────
  const saveUsedEntry = async (e) => {
    e.preventDefault();
    if (!project?.id) return;
    try {
      const unit = usedForm.unit || getDefaultUnitForMaterial(usedForm.material_name);
      const material_id = await h.resolveMaterialId(usedForm.material_name, usedForm.material_id, unit);
      let res;
      if (editingUsedId) {
        res = await api(`/api/admin/project-management/material-used/${editingUsedId}`, {
          method: 'PATCH',
          body: JSON.stringify({ ...usedForm, material_id, unit }),
        });
      } else {
        res = await api('/api/admin/project-management/material-used', {
          method: 'POST',
          body: JSON.stringify({ ...usedForm, material_id, project_id: project.id, unit }),
        });
      }
      if (res.warning) {
        setMessage(`${res.warning} The wastage entry was saved.`);
      }
      setMessage('Material usage recorded');
      setUsedModal(false);
      setEditingUsedId(null);
      setUsedForm(usedBlank);
      h.refreshProjectData(project.id);
    } catch (err) {
      setMessage(err.message);
      throw err;
    }
  };

// ── Save Adjustment Entry ───────────────────────────────────────────────────
  const saveAdjustmentEntry = async (e) => {
    e.preventDefault();
    if (!project?.id) return;
    try {
      let bill_url = adjustmentForm.bill_url;
      let bill_filename = adjustmentForm.bill_filename;
      
      if (billFile) {
        const uploadData = await uploadFile(billFile);
        bill_url = uploadData.url;
        bill_filename = uploadData.filename;
      }
      
      const unit = adjustmentForm.unit || getDefaultUnitForMaterial(adjustmentForm.material_name);
      const material_id = await h.resolveMaterialId(adjustmentForm.material_name, adjustmentForm.material_id, unit);
      const payload = {
        ...adjustmentForm,
        material_id,
        project_id: project.id,
        unit,
        amount: adjustmentForm.amount ? Number(adjustmentForm.amount) : null,
        supplier_id: adjustmentForm.supplier_id ? Number(adjustmentForm.supplier_id) : null,
        supplier_name: adjustmentForm.supplier_name ? String(adjustmentForm.supplier_name).trim() : null,
        bill_url,
        bill_filename,
      };

      let res;
      if (editingAdjId) {
        res = await api(`/api/admin/project-management/material-adjustments/${editingAdjId}`, {
          method: 'PATCH',
          body: JSON.stringify(payload),
        });
      } else {
        res = await api('/api/admin/project-management/material-adjustments', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
      }
      setMessage(res.warning ? `${res.warning} Entry saved.` : 'Entry recorded successfully');
      if (res.data) {
        const returnedRow = {
          ...res.data,
          material_name: adjustmentForm.material_name || res.data.material_name,
          supplier_name: adjustmentForm.supplier_name || res.data.supplier_name,
          amount: adjustmentForm.amount ? Number(adjustmentForm.amount) : res.data.amount,
        };
        setAdjustmentRows((previous) => [returnedRow, ...previous.filter((row) => Number(row.id) !== Number(res.data.id))]);
      }
      setAdjustmentModal(false);
      setEditingAdjId(null);
      setAdjustmentForm(adjustmentBlank);
      setBillFile(null);
      loadProjectSuppliers(project.id);
      if (selectedSupplier) {
        loadSupplierLedger(project?.id, selectedSupplier.supplier_id, selectedSupplier.raw_supplier_name || selectedSupplier.supplier_name);
      }
      h.refreshProjectData(project.id);
    } catch (err) {
      setMessage(err.message);
      throw err;
    }
  };

// ── Save Expense Entry ──────────────────────────────────────────────────────
  const saveExpenseEntry = async (e) => {
    e.preventDefault();
    if (!project?.id) return;

    const cat = String(expenseForm.category || '').trim();
    const isItemRequired = cat === 'tools' || cat === 'rent';
    const trimmedItem = String(expenseForm.item_name || '').trim();

    if (isItemRequired && !trimmedItem) {
      const catLabel = cat === 'tools' ? 'Tools' : 'Rent';
      const err = `Item / Tool name is required when Category is ${catLabel}.`;
      setModalError(err);
      throw new Error(err);
    }

    const cleanNote = String(expenseForm.note || '').trim();
    const packedNote = packExpenseNote(trimmedItem, cleanNote);
    const payload = {
      ...expenseForm,
      item_name: trimmedItem || undefined,
      note: packedNote,
    };

    try {
      if (editingExpenseId) {
        const previousExpense = expenseRows.find((row) => Number(row.id) === Number(editingExpenseId));
        const result = await api(`/api/admin/project-management/other-expenses/${editingExpenseId}`, {
          method: 'PATCH',
          body: JSON.stringify(payload),
        });
        if (result.data) {
          setExpenseRows((previous) => previous.map((row) => Number(row.id) === Number(editingExpenseId) ? result.data : row));
          setExpenseSummary((previous) => ({
            ...previous,
            totalAmount: Number(previous.totalAmount || 0) + Number(result.data.amount || 0) - Number(previousExpense?.amount || 0),
          }));
        }
        setMessage('Expense updated successfully');
      } else {
        const result = await api('/api/admin/project-management/other-expenses', {
          method: 'POST',
          body: JSON.stringify({ ...payload, project_id: project.id }),
        });
        if (result.data) {
          setExpenseRows((previous) => [result.data, ...previous.filter((row) => Number(row.id) !== Number(result.data.id))]);
          setExpenseSummary((previous) => ({ ...previous, totalAmount: Number(previous.totalAmount || 0) + Number(result.data.amount || 0) }));
        }
        setMessage('Expense recorded successfully');
      }
      setExpenseModal(false);
      setEditingExpenseId(null);
      setModalError('');
      setExpenseForm(expenseBlank);
      // Refresh related project cards in the background. The expense list above
      // is updated immediately from the authoritative save response.
      h.refreshProjectData(project.id);
    } catch (err) {
      setMessage(err.message);
      throw err;
    }
  };

// ── Save Commission Entry ───────────────────────────────────────────────────
  const saveCommissionEntry = async (e) => {
    e.preventDefault();
    if (!project?.id) return;

    const personName = String(commissionForm.person_name || '').trim();
    const amt = Number(commissionForm.amount);
    const dateStr = String(commissionForm.commission_date || '').trim();

    if (!personName) {
      const err = 'Person Name is required.';
      setModalError(err);
      throw new Error(err);
    }
    if (!Number.isFinite(amt) || amt <= 0) {
      const err = 'Valid commission amount is required.';
      setModalError(err);
      throw new Error(err);
    }
    if (!dateStr) {
      const err = 'Date is required.';
      setModalError(err);
      throw new Error(err);
    }

    const payload = {
      project_id: project.id,
      person_name: personName,
      amount: amt,
      commission_date: dateStr,
      note: commissionForm.note ? String(commissionForm.note).trim() : '',
    };

    try {
      if (editingCommissionId) {
        const prevComm = commissionRows.find((row) => Number(row.id) === Number(editingCommissionId));
        const result = await api(`/api/admin/project-management/commissions/${editingCommissionId}`, {
          method: 'PATCH',
          body: JSON.stringify(payload),
        });
        if (result.data) {
          setCommissionRows((prev) =>
            prev.map((row) => (Number(row.id) === Number(editingCommissionId) ? result.data : row))
          );
          setCommissionSummary((prev) => ({
            ...prev,
            totalAmount:
              Number(prev.totalAmount || 0) +
              Number(result.data.amount || 0) -
              Number(prevComm?.amount || 0),
          }));
        }
        setMessage('Commission record updated successfully');
      } else {
        const result = await api('/api/admin/project-management/commissions', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        if (result.data) {
          setCommissionRows((prev) => [
            result.data,
            ...prev.filter((row) => Number(row.id) !== Number(result.data.id)),
          ]);
          setCommissionSummary((prev) => ({
            ...prev,
            totalAmount: Number(prev.totalAmount || 0) + Number(result.data.amount || 0),
          }));
        }
        setMessage('Commission recorded successfully');
      }
      setCommissionModal(false);
      setEditingCommissionId(null);
      setModalError('');
      setCommissionForm(commissionBlank);
      h.refreshProjectData(project.id);
    } catch (err) {
      setMessage(err.message);
      throw err;
    }
  };
  Object.assign(h, { saveUsedEntry, saveAdjustmentEntry, saveExpenseEntry, saveCommissionEntry });
}
