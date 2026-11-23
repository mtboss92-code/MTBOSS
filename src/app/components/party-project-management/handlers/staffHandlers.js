'use client';

import { isEditableWithin48Hours, staffBlank, today } from '../shared';
import { api } from '../api';

export function registerStaffHandlers(ctx, h) {
  const { editingStaffId, loadProjectStaff, loadStaffAttendance, loadStaffPayments, project, setEditingStaffId, setMessage, setModalError, setSavingStaffAttendance, setStaffForm, setStaffModal, setStaffPaymentForm, setStaffPaymentModal, staffAttendanceDate, staffDailyAttendance, staffForm, staffPaymentForm, staffPaymentSavingRef, staffSavingRef } = ctx;
const computeStaffWage = (salaryRate, payType, status, shiftType = 'day', overtimeHours = 0) => {
    if (status === 'absent' || !status || status === 'unmarked') return 0;
    const mult = shiftType === 'double' ? 2 : 1;
    let base = 0;
    const rate = Number(salaryRate || 0);
    if (payType === 'per_day') {
      base = status === 'half_day' ? rate * 0.5 : rate * mult;
    } else {
      // Monthly pay: daily approx rate = rate / 30
      const dailyApprox = rate / 30;
      base = status === 'half_day' ? Math.round(dailyApprox * 0.5) : Math.round(dailyApprox * mult);
    }
    let ot = 0;
    if (Number(overtimeHours) > 0) {
      const hourly = rate > 0 ? (rate / (payType === 'monthly' ? 240 : 8)) : 0;
      ot = Math.round(hourly * Number(overtimeHours));
    }
    return Math.round(base + ot);
  };

const saveAllStaffAttendance = async () => {
    if (!project?.id) return;
    if (!isEditableWithin48Hours(staffAttendanceDate)) {
      setMessage('❌ Sirf pichle 48 hours (aaj aur pichle 2 din) ki attendance save ki ja sakti hai.');
      return;
    }
    setSavingStaffAttendance(true);
    try {
      const dirtyRows = staffDailyAttendance.filter((r) => r.dirty);
      if (!dirtyRows.length) return;
      const entries = dirtyRows.map((r) => ({
        staff_id: r.staff_id,
        attendance_date: staffAttendanceDate,
        status: r.status,
        shift_type: r.shift_type || 'day',
        overtime_hours: Number(r.overtime_hours || 0),
        wage_amount: r.wage_amount,
        note: r.note || '',
      }));
      await api('/api/admin/project-management/staff/attendance', {
        method: 'POST',
        body: JSON.stringify({
          attendance_date: staffAttendanceDate,
          entries,
        }),
      });
      setMessage('✅ Staff attendance saved successfully');
      loadStaffAttendance(project.id, staffAttendanceDate);
      loadProjectStaff(project.id);
      h.refreshProjectData(project.id);
    } catch (e) {
      setMessage(`❌ ${e.message || 'Could not save staff attendance'}`);
    } finally {
      setSavingStaffAttendance(false);
    }
  };

const saveStaffMember = async (e) => {
    if (e) e.preventDefault();
    if (!project?.id) return;
    if (staffSavingRef.current) return;
    staffSavingRef.current = true;
    try {
      const payload = {
        ...staffForm,
        project_id: project.id,
        salary_rate: Number(staffForm.salary_rate || 0),
        commission_rate: Number(staffForm.commission_rate || 0),
      };

      if (editingStaffId) {
        await api(`/api/admin/project-management/staff/${editingStaffId}`, {
          method: 'PATCH',
          body: JSON.stringify(payload),
        });
        setMessage('Staff member updated successfully');
      } else {
        await api('/api/admin/project-management/staff', {
          method: 'POST',
          body: JSON.stringify(payload),
        });
        setMessage('Staff member assigned to project');
      }
      setStaffModal(false);
      setEditingStaffId(null);
      setStaffForm(staffBlank);
      setModalError('');
      loadProjectStaff(project.id);
      loadStaffAttendance(project.id, staffAttendanceDate);
      h.refreshProjectData(project.id);
      h.refreshProjectData(project.id);
    } catch (err) {
      setModalError(err.message || 'Could not save staff member');
      setMessage(err.message);
      throw err;
    } finally {
      staffSavingRef.current = false;
    }
  };

const markStaffAttendance = async (staffId, status, overtimeHours = 0, note = '') => {
    if (!project?.id) return;
    try {
      await api('/api/admin/project-management/staff/attendance', {
        method: 'POST',
        body: JSON.stringify({
          staff_id: staffId,
          attendance_date: staffAttendanceDate,
          status,
          overtime_hours: overtimeHours,
          note,
        }),
      });
      setMessage(`Staff attendance marked as ${status}`);
      loadStaffAttendance(project.id, staffAttendanceDate);
      loadProjectStaff(project.id);
    } catch (err) {
      setMessage(err.message);
    }
  };

const saveStaffPayment = async (e) => {
    if (e) e.preventDefault();
    if (!project?.id) return;
    if (staffPaymentSavingRef.current) return;
    staffPaymentSavingRef.current = true;
    try {
      await api('/api/admin/project-management/staff/payments', {
        method: 'POST',
        body: JSON.stringify({
          ...staffPaymentForm,
          project_id: project.id,
          amount: Number(staffPaymentForm.amount),
        }),
      });
      setMessage('Staff payment recorded successfully');
      setStaffPaymentModal(false);
      setStaffPaymentForm({ staff_id: '', amount: '', payment_date: today(), payment_type: 'salary', mode: 'bank', transaction_reference: '', note: '' });
      setModalError('');
      loadStaffPayments(project.id);
      loadProjectStaff(project.id);
      h.refreshProjectData(project.id);
      h.refreshProjectData(project.id);
    } catch (err) {
      setModalError(err.message || 'Could not record staff payment');
      setMessage(err.message);
      throw err;
    } finally {
      staffPaymentSavingRef.current = false;
    }
  };

const deleteStaffMember = async (staffId) => {
    if (!project?.id) return;
    if (!confirm('Are you sure you want to remove/deactivate this staff member?')) return;
    try {
      const res = await api(`/api/admin/project-management/staff/${staffId}`, { method: 'DELETE' });
      setMessage(res.message || 'Staff member removed');
      loadProjectStaff(project.id);
      loadStaffAttendance(project.id, staffAttendanceDate);
      h.refreshProjectData(project.id);
    } catch (err) {
      setMessage(err.message);
    }
  };

const deleteStaffPayment = async (paymentId) => {
    if (!project?.id) return;
    if (!confirm('Are you sure you want to delete this payment record?')) return;
    try {
      await api(`/api/admin/project-management/staff/payments?id=${paymentId}`, { method: 'DELETE' });
      setMessage('Staff payment deleted');
      loadStaffPayments(project.id);
      loadProjectStaff(project.id);
      h.refreshProjectData(project.id);
    } catch (err) {
      setMessage(err.message);
    }
  };
  Object.assign(h, { computeStaffWage, saveAllStaffAttendance, saveStaffMember, markStaffAttendance, saveStaffPayment, deleteStaffMember, deleteStaffPayment });
}
