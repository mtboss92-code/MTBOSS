'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input, staffRolesList } from '../shared';

export default function StaffModal() {
  const {
    submitAction, modalError, setStaffModal, staffForm, setStaffForm, editingStaffId, saveStaffMember,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form onSubmit={(e) => submitAction.submit('staff', () => saveStaffMember(e), { successMessage: editingStaffId ? 'Staff member updated successfully' : 'Staff member assigned to project' })} className="modal-card">
          <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>
            {editingStaffId ? '✏️ Edit Staff Member' : '👔 Assign Staff Member to Project'}
          </h3>
          {modalError && (
            <div role="alert" style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '8px 12px', borderRadius: 6, marginBottom: 12, fontSize: 13 }}>
              {modalError}
            </div>
          )}
          <div className="grid">
            <Input
              label="Staff Member Name"
              name="name"
              value={staffForm.name}
              set={setStaffForm}
              required
              placeholder="e.g. Rahul Sharma"
            />
            <Input
              label="Phone / Mobile Number"
              name="phone"
              value={staffForm.phone}
              set={setStaffForm}
              placeholder="e.g. 9876543210"
            />
            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Role / Designation</small>
              <select
                value={staffForm.role}
                onChange={(e) => setStaffForm({ ...staffForm, role: e.target.value })}
                required
              >
                {staffRolesList.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </label>
            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Pay Type</small>
              <select
                value={staffForm.pay_type}
                onChange={(e) => setStaffForm({ ...staffForm, pay_type: e.target.value })}
                required
              >
                <option value="monthly">Monthly Salary</option>
                <option value="per_day">Daily Wage (Per-Day)</option>
                <option value="fixed_fee">Fixed Project Fee</option>
              </select>
            </label>
            <Input
              label={`Salary / Base Rate (₹ ${staffForm.pay_type === 'per_day' ? 'per day' : staffForm.pay_type === 'monthly' ? 'per month' : 'total'})`}
              name="salary_rate"
              type="number"
              step="any"
              min="0"
              value={staffForm.salary_rate}
              set={setStaffForm}
              required
            />
            <Input
              label="Commission Rate / Amount (₹)"
              name="commission_rate"
              type="number"
              step="any"
              min="0"
              value={staffForm.commission_rate}
              set={setStaffForm}
              placeholder="e.g. 15000 (if eligible for commission)"
            />
            <Input
              label="Commission Notes / Milestones"
              name="commission_notes"
              value={staffForm.commission_notes}
              set={setStaffForm}
              placeholder="e.g. Payable on 100% completion on time"
            />
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10 }}>
              <input
                type="checkbox"
                checked={staffForm.is_active}
                onChange={(e) => setStaffForm({ ...staffForm, is_active: e.target.checked })}
              />
              <span style={{ fontSize: 13, fontWeight: 600 }}>Staff Member is currently active on this project</span>
            </label>
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            <button type="button" className="muted" onClick={() => setStaffModal(false)}>
              Cancel
            </button>
            <button type="submit" disabled={submitAction.isSubmitting('staff')}>
              {submitAction.isSubmitting('staff') ? 'Saving…' : (editingStaffId ? 'Update Staff Member' : 'Assign to Project')}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
