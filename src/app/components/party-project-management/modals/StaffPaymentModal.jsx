'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR, Input } from '../shared';

export default function StaffPaymentModal() {
  const {
    submitAction, modalError, projectStaff, setStaffPaymentModal, staffPaymentForm, setStaffPaymentForm,
    editingStaffPaymentId, saveStaffPayment,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form onSubmit={(e) => submitAction.submit('staffPayment', () => saveStaffPayment(e), { successMessage: 'Staff payment recorded successfully' })} className="modal-card">
          <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>
            {editingStaffPaymentId ? '✏️ Edit Staff Payment' : '💳 Record Staff Payment / Commission'}
          </h3>
          {modalError && (
            <div role="alert" style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '8px 12px', borderRadius: 6, marginBottom: 12, fontSize: 13 }}>
              {modalError}
            </div>
          )}
          <div className="grid">
            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Select Staff Member</small>
              <select
                value={staffPaymentForm.staff_id}
                onChange={(e) => setStaffPaymentForm({ ...staffPaymentForm, staff_id: e.target.value })}
                required
              >
                <option value="">-- Choose Staff Member --</option>
                {projectStaff.map((st) => (
                  <option key={st.id} value={st.id}>
                    {st.name} ({st.role}) {st.balance_due > 0 ? `• Due: ${INR(st.balance_due)}` : ''}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Payment Type</small>
              <select
                value={staffPaymentForm.payment_type}
                onChange={(e) => setStaffPaymentForm({ ...staffPaymentForm, payment_type: e.target.value })}
                required
              >
                <option value="salary">Salary Payment</option>
                <option value="commission">Commission Payout</option>
                <option value="advance">Advance / Petty Cash</option>
                <option value="bonus">Bonus / Incentive</option>
                <option value="reimbursement">Site Expense Reimbursement</option>
              </select>
            </label>
            <Input
              label="Amount (₹)"
              name="amount"
              type="number"
              step="any"
              min="1"
              value={staffPaymentForm.amount}
              set={setStaffPaymentForm}
              required
            />
            <Input
              label="Payment Date"
              name="payment_date"
              type="date"
              value={staffPaymentForm.payment_date}
              set={setStaffPaymentForm}
              required
            />
            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Payment Mode</small>
              <select
                value={staffPaymentForm.mode}
                onChange={(e) => setStaffPaymentForm({ ...staffPaymentForm, mode: e.target.value })}
              >
                <option value="bank">Bank Transfer (NEFT/RTGS/IMPS)</option>
                <option value="upi">UPI / Online</option>
                <option value="cheque">Cheque</option>
                <option value="cash">Cash</option>
              </select>
            </label>
            <Input
              label="Transaction Ref / Cheque No."
              name="transaction_reference"
              value={staffPaymentForm.transaction_reference}
              set={setStaffPaymentForm}
              placeholder="e.g. UTR / URN / Cheque #123456"
            />
            <Input
              label="Note / Remarks"
              name="note"
              value={staffPaymentForm.note}
              set={setStaffPaymentForm}
              placeholder="e.g. Advance for site travel / October Salary"
            />
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            <button type="button" className="muted" onClick={() => setStaffPaymentModal(false)}>
              Cancel
            </button>
            <button type="submit" disabled={submitAction.isSubmitting('staffPayment')}>
              {submitAction.isSubmitting('staffPayment') ? 'Recording…' : (editingStaffPaymentId ? 'Update Staff Payment' : 'Save Staff Payment')}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
