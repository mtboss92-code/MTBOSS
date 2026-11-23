'use client';

import { api } from '../api';
import { getDefaultUnitForMaterial, isEditableWithin48Hours, today } from '../shared';

export function registerAttendancePay(ctx, h) {
  const { attendanceDate, attendanceDetailModal, attendanceRows, editingLaborId, editingLaborPaymentId, editingVendorPaymentId, laborAttendanceDate, laborAttendanceRows, laborForm, laborPaymentFilterFrom, laborPaymentFilterLabor, laborPaymentFilterTo, laborPaymentForm, loadDailyAttendance, loadLaborAttendance, loadLaborPayments, loadProjectLaborAttendanceHistory, loadProjectLabors, loadProjectVendorAttendanceHistory, loadVendorPayments, project, selectedLabor, selectedLaborIds, selectedVendor, setAddLaborModal, setAttendanceDetailModal, setEditingLaborId, setEditingLaborPaymentId, setEditingVendorPaymentId, setLaborAttendanceRows, setLaborForm, setLaborPaymentForm, setLaborPaymentModal, setLockedContractorId, setMessage, setModalError, setSavingAttendance, setSavingAttendanceDetail, setSavingLaborAttendance, setSelectedLaborIds, setSupplyForm, setSupplyModal, setVendorPaymentForm, setVendorPaymentModal, supplyForm, vendorPaymentForm } = ctx;
const saveAllAttendance = async () => {
    setSavingAttendance(true);
    try {
      const payloadEntries = attendanceRows
        .filter((r) => r.dirty)
        .map((r) => ({
          project_vendor_id: r.project_vendor_id,
          attendance_date: attendanceDate,
          status: r.status,
          shift_type: r.shift_type || 'day',
          overtime_hours: Number(r.overtime_hours || 0),
          workers_count: r.workers_count,
          rate_per_worker: r.rate_per_worker,
          note: r.note,
        }));

      if (!payloadEntries.length) return;
      await api('/api/admin/project-management/attendance', {
        method: 'POST',
        body: JSON.stringify({
          attendance_date: attendanceDate,
          entries: payloadEntries,
          records: payloadEntries,
        }),
      });
      setMessage('Attendance saved for all vendors');
      h.refreshProjectData();
      loadDailyAttendance(attendanceDate);
      loadProjectVendorAttendanceHistory(project?.id);
    } catch (e) {
      setMessage(e.message);
    } finally {
      setSavingAttendance(false);
    }
  };

const saveVendorPayment = async (e) => {
    if (e) e.preventDefault();
    try {
      if (editingVendorPaymentId) {
        await api(`/api/admin/project-management/vendor-payments/${editingVendorPaymentId}`, {
          method: 'PATCH',
          body: JSON.stringify({
            amount: Number(vendorPaymentForm.amount),
            payment_date: vendorPaymentForm.payment_date,
            mode: vendorPaymentForm.mode,
            payment_type: vendorPaymentForm.payment_type,
            transaction_reference: vendorPaymentForm.transaction_reference,
            note: vendorPaymentForm.note,
          }),
        });
        setMessage('Service provider payment updated successfully');
        setVendorPaymentModal(false);
        setEditingVendorPaymentId(null);
      } else {
        await api('/api/admin/project-management/vendor-payments', {
          method: 'POST',
          body: JSON.stringify(vendorPaymentForm),
        });
        setMessage('Service provider payment recorded successfully');
        setVendorPaymentForm({
          project_vendor_id: '',
          amount: '',
          payment_date: today(),
          mode: 'bank',
          payment_type: 'labour',
          note: '',
          transaction_reference: '',
        });
        setVendorPaymentModal(false);
      }
      h.refreshProjectData();
      loadVendorPayments();
    } catch (e) {
      setMessage(e.message);
      throw e;
    }
  };

// ── Phase 2: Save Material Supply (Vendor) ──────────────────────────────────
  const saveMaterialSupply = async (e) => {
    e.preventDefault();
    if (!selectedVendor) return;
    try {
      const unit = supplyForm.unit || getDefaultUnitForMaterial(supplyForm.item_name);
      await api('/api/admin/project-management/material-supply', {
        method: 'POST',
        body: JSON.stringify({
          ...supplyForm,
          material_id: supplyForm.item_name ? await h.resolveMaterialId(supplyForm.item_name, supplyForm.material_id, unit) : null,
          project_vendor_id: selectedVendor.id,
          unit,
        }),
      });
      setMessage('Vendor material supply recorded');
      setSupplyModal(false);
      setSupplyForm({ item_name: '', unit: 'bags', quantity: '', rate: '', supply_date: today(), material_id: '', note: '' });
      h.openVendorDetail(selectedVendor);
      h.refreshProjectData();
    } catch (e) {
      setMessage(e.message);
      throw e;
    }
  };

const saveLabor = async (e) => {
    e.preventDefault();
    if (!project?.id) return;
    setModalError('');
    try {
      const payload = {
        project_id: project.id,
        name: laborForm.name,
        phone: laborForm.phone,
        trade: laborForm.trade,
        project_vendor_id: laborForm.project_vendor_id ? Number(laborForm.project_vendor_id) : null,
        daily_rate: Number(laborForm.daily_rate || 0),
        is_active: laborForm.is_active !== undefined ? laborForm.is_active : true,
      };

      if (editingLaborId) {
        await api(`/api/admin/project-management/labor/${editingLaborId}`, {
          method: 'PATCH',
          body: JSON.stringify(payload),
        });
        setMessage('Labor worker updated successfully');
      } else {
        await api('/api/admin/project-management/labor', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        setMessage('Labor worker added successfully');
      }
      setAddLaborModal(false);
      setEditingLaborId(null);
      setLockedContractorId(null);
      setModalError('');
      setLaborForm({ name: '', phone: '', trade: '', project_vendor_id: '', daily_rate: '', is_active: true });
      loadProjectLabors(project.id);
      h.refreshProjectData(project.id);
    } catch (err) {
      console.error('Error saving labor:', err);
      throw err;
      setModalError(err.message || 'Could not save laborer');
      setMessage(`❌ ${err.message || 'Could not save laborer'}`);
    }
  };

/* Bulk checkbox controls intentionally removed; attendance is per worker. */
  const applyBulkStatus = (status) => {
    if (!isEditableWithin48Hours(laborAttendanceDate)) {
      setMessage(`❌ 48 hours se purani date par attendance edit nahi kar sakte.`);
      return;
    }
    const selectedSet = new Set(selectedLaborIds);
    if (!selectedSet.size) {
      setMessage('Please select at least one worker first using the checkboxes.');
      return;
    }
    const mult = status === 'present' ? 1 : status === 'half_day' ? 0.5 : 0;
    setLaborAttendanceRows((prev) =>
      prev.map((r) => {
        const lid = r.labor_id || r.id;
        if (selectedSet.has(lid)) {
          return {
            ...r,
            status,
            dirty: true,
            wage_amount: Math.round(mult * Number(r.daily_rate || 0) * 100) / 100,
          };
        }
        return r;
      })
    );
    const label = status === 'present' ? 'Present' : status === 'half_day' ? 'Half Day' : 'Absent';
    setMessage(`✓ Marked ${selectedSet.size} worker(s) as ${label}. Click "Save Attendance" to finalize.`);
  };

const saveAllLaborAttendance = async (customRows, includeUntouched = false) => {
    if (!project?.id) return;
    if (!isEditableWithin48Hours(laborAttendanceDate)) {
      setMessage(`❌ Sirf pichle 48 hours (aaj aur pichle 2 din) ki attendance save ki ja sakti hai.`);
      return;
    }
    const rowsToSave = (customRows || laborAttendanceRows).filter((row) =>
      includeUntouched ? (!row.is_marked || row.dirty) : row.dirty
    );
    if (!rowsToSave.length) {
      setMessage('Mark at least one worker before saving attendance.');
      return;
    }
    setSavingLaborAttendance(true);
    try {
      const payloadEntries = rowsToSave.map((r) => ({
        labor_id: Number(r.labor_id || r.id),
        attendance_date: laborAttendanceDate,
        status: r.status || 'present',
        shift_type: r.shift_type || 'day',
        overtime_hours: Number(r.overtime_hours || 0),
        wage_amount: Number(r.wage_amount || 0),
        note: r.note || '',
      }));

      await api('/api/admin/project-management/labor/attendance', {
        method: 'PUT',
        body: JSON.stringify({
          project_id: project.id,
          attendance_date: laborAttendanceDate,
          entries: payloadEntries,
          records: payloadEntries,
        }),
      });
      setMessage('✅ Labor attendance saved successfully');
      setSelectedLaborIds([]);
      loadLaborAttendance(laborAttendanceDate, project.id);
      loadProjectLabors(project.id);
      h.refreshProjectData(project.id);
      loadProjectLaborAttendanceHistory(project.id);
    } catch (e) {
      console.error('Error saving labor attendance:', e);
      setMessage(`❌ ${e.message || 'Could not save labor attendance'}`);
    } finally {
      setSavingLaborAttendance(false);
    }
  };

const saveAttendanceDetailModal = async (e) => {
    if (e) e.preventDefault();
    if (!attendanceDetailModal || !project?.id) return;
    setSavingAttendanceDetail(true);
    try {
      if (attendanceDetailModal.type === 'labor') {
        const payload = [{
          labor_id: Number(attendanceDetailModal.labor_id),
          attendance_date: attendanceDetailModal.attendance_date,
          status: attendanceDetailModal.status || 'present',
          shift_type: attendanceDetailModal.shift_type || 'day',
          overtime_hours: Number(attendanceDetailModal.overtime_hours || 0),
          wage_amount: Number(attendanceDetailModal.wage_amount || 0),
          note: attendanceDetailModal.note || '',
        }];

        await api('/api/admin/project-management/labor/attendance', {
          method: 'PUT',
          body: JSON.stringify({
            project_id: project.id,
            attendance_date: attendanceDetailModal.attendance_date,
            entries: payload,
            records: payload,
          }),
        });
        setMessage(`✅ Attendance updated successfully for ${attendanceDetailModal.labor_name}`);
        setAttendanceDetailModal(null);
        loadLaborAttendance(laborAttendanceDate, project.id);
        loadProjectLabors(project.id);
        h.refreshProjectData(project.id);
        loadProjectLaborAttendanceHistory(project.id);
      } else if (attendanceDetailModal.type === 'vendor') {
        const payload = [{
          project_vendor_id: Number(attendanceDetailModal.project_vendor_id),
          attendance_date: attendanceDetailModal.attendance_date,
          status: attendanceDetailModal.status || 'present',
          shift_type: attendanceDetailModal.shift_type || 'day',
          overtime_hours: Number(attendanceDetailModal.overtime_hours || 0),
          workers_count: Number(attendanceDetailModal.workers_count || 1),
          rate_per_worker: Number(attendanceDetailModal.rate_per_worker || 0),
          wage_amount: Number(attendanceDetailModal.wage_amount || 0),
          note: attendanceDetailModal.note || '',
        }];

        await api('/api/admin/project-management/attendance', {
          method: 'POST',
          body: JSON.stringify({
            attendance_date: attendanceDetailModal.attendance_date,
            entries: payload,
            records: payload,
          }),
        });
        setMessage(`✅ Attendance updated successfully for ${attendanceDetailModal.vendor_name}`);
        setAttendanceDetailModal(null);
        h.refreshProjectData();
        loadDailyAttendance(attendanceDate);
        loadProjectVendorAttendanceHistory(project?.id);
      }
    } catch (err) {
      alert(`❌ ${err.message || 'Could not update attendance'}`);
    } finally {
      setSavingAttendanceDetail(false);
    }
  };

const saveLaborPayment = async (e) => {
    e.preventDefault();
    if (!project?.id) return;
    try {
      if (editingLaborPaymentId) {
        await api(`/api/admin/project-management/labor/payments/${editingLaborPaymentId}`, {
          method: 'PATCH',
          body: JSON.stringify({
            amount: Number(laborPaymentForm.amount),
            payment_date: laborPaymentForm.payment_date,
            mode: laborPaymentForm.mode,
            payment_type: laborPaymentForm.payment_type || 'wage',
            transaction_reference: laborPaymentForm.transaction_reference || null,
            note: laborPaymentForm.note,
          }),
        });
        setMessage('Labor payment updated successfully');
      } else {
        await api('/api/admin/project-management/labor/payments', {
          method: 'POST',
          body: JSON.stringify({
            labor_id: Number(laborPaymentForm.labor_id),
            amount: Number(laborPaymentForm.amount),
            payment_date: laborPaymentForm.payment_date,
            mode: laborPaymentForm.mode,
            payment_type: laborPaymentForm.payment_type || 'wage',
            transaction_reference: laborPaymentForm.transaction_reference || null,
            note: laborPaymentForm.note,
          }),
        });
        setMessage('Labor payment recorded successfully');
      }
      setLaborPaymentModal(false);
      setEditingLaborPaymentId(null);
      setLaborPaymentForm({ labor_id: '', amount: '', payment_date: today(), mode: 'cash', payment_type: 'wage', note: '', transaction_reference: '' });
      loadLaborPayments(project.id, laborPaymentFilterLabor, laborPaymentFilterFrom, laborPaymentFilterTo);
      loadProjectLabors(project.id);
      if (selectedLabor) {
        h.openLaborDetail(selectedLabor);
      }
      h.refreshProjectData(project.id);
    } catch (e) {
      setMessage(e.message);
      throw e;
    }
  };
  Object.assign(h, { saveAllAttendance, saveVendorPayment, saveMaterialSupply, saveLabor, applyBulkStatus, saveAllLaborAttendance, saveAttendanceDetailModal, saveLaborPayment });
}
