'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR, Input } from '../shared';

export default function LaborPaymentModal() {
  const {
    submitAction, modalReadOnly, setModalReadOnly, projectLabors, selectedLabor, setLaborPaymentModal,
    laborPaymentForm, setLaborPaymentForm, editingLaborPaymentId, setEditingLaborPaymentId, modalError,
    setModalError, saveLaborPayment,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form onSubmit={(e) => submitAction.submit('laborPayment', () => saveLaborPayment(e), { successMessage: 'Labor payment recorded successfully', onError: setModalError })} className="modal-card">
          <h3 style={{ margin: '0 0 12px', fontSize: 17, color: '#0f172a' }}>
            {Boolean(modalReadOnly && editingLaborPaymentId) ? '👁️ View Labor Payment' : (editingLaborPaymentId ? '✏️ Edit Labor Payment' : 'Record Labor Payment')}
          </h3>
          {Boolean(modalReadOnly && editingLaborPaymentId) && (
            <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: 8, padding: '10px 14px', marginBottom: 14, color: '#92400e', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16 }}>🔒</span>
              <div><strong>Read Only (Locked):</strong> This record was created more than 48 hours ago and cannot be modified.</div>
            </div>
          )}
          {modalError && <div role="alert" style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '8px 12px', borderRadius: 6, marginBottom: 12, fontSize: 13 }}>{modalError}</div>}
          <fieldset disabled={Boolean(modalReadOnly && editingLaborPaymentId)} style={{ border: 'none', padding: 0, margin: 0, opacity: (modalReadOnly && editingLaborPaymentId) ? 0.9 : 1 }}>

          <div style={{ marginBottom: 12 }}>
            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
                Select Laborer
              </small>
              <select
                required
                value={laborPaymentForm.labor_id}
                disabled={Boolean(editingLaborPaymentId || (selectedLabor && !editingLaborPaymentId))}
                onChange={(e) => {
                  const labId = e.target.value;
                  const lab = projectLabors.find((l) => String(l.id) === String(labId));
                  const bal = lab ? Number(lab.balance_due ?? (Number(lab.total_earned || 0) - Number(lab.total_paid || 0))) : 0;
                  setLaborPaymentForm({
                    ...laborPaymentForm,
                    labor_id: labId,
                    payment_type: bal <= 0 ? 'advance' : 'wage',
                  });
                }}
              >
                <option value="">-- Choose Worker --</option>
                {projectLabors.map((lab) => {
                  const bal = Number(lab.balance_due ?? (Number(lab.total_earned || 0) - Number(lab.total_paid || 0)));
                  const balLabel = bal > 0 ? `Due: ${INR(bal)}` : bal < 0 ? `Advance: ${INR(Math.abs(bal))}` : 'Settled (₹0)';
                  return (
                    <option key={lab.id} value={lab.id}>
                      {lab.name} ({lab.trade || 'Helper'} &bull; {INR(lab.daily_rate)}/day) &bull; {balLabel}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>

          {(() => {
            const selLab = projectLabors.find((l) => String(l.id) === String(laborPaymentForm.labor_id));
            if (!selLab) return null;
            const bal = Number(selLab.balance_due ?? (Number(selLab.total_earned || 0) - Number(selLab.total_paid || 0)));
            return (
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 14px', marginBottom: 12, display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center' }}>
                <div>
                  <small style={{ color: '#64748b', display: 'block' }}>Laborer</small>
                  <b>{selLab.name}</b> <span style={{ fontSize: 11, color: '#64748b' }}>({selLab.trade || 'Helper'})</span>
                </div>
                <div>
                  <small style={{ color: '#64748b', display: 'block' }}>Daily Wage</small>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>{INR(selLab.daily_rate)}/day</span>
                </div>
                <div>
                  <small style={{ color: '#64748b', display: 'block' }}>Total Earned</small>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>{INR(selLab.total_earned)}</span>
                </div>
                <div>
                  <small style={{ color: '#64748b', display: 'block' }}>Total Paid</small>
                  <span style={{ fontWeight: 600, color: '#16a34a' }}>{INR(selLab.total_paid)}</span>
                </div>
                <div>
                  <small style={{ color: '#64748b', display: 'block' }}>Current Balance</small>
                  {bal > 0 ? (
                    <span style={{ fontWeight: 700, color: '#ea580c' }}>Due: {INR(bal)}</span>
                  ) : bal < 0 ? (
                    <span className="badge badge-active" style={{ background: '#dcfce7', color: '#15803d', fontWeight: 700 }}>
                      Advance: {INR(Math.abs(bal))}
                    </span>
                  ) : (
                    <span style={{ color: '#64748b', fontWeight: 600 }}>Settled (₹0)</span>
                  )}
                </div>
              </div>
            );
          })()}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <Input
              label="Amount (₹)"
              name="amount"
              type="number"
              value={laborPaymentForm.amount}
              set={setLaborPaymentForm}
              required
              min="1"
              placeholder="e.g. 3000"
            />
            <Input
              label="Payment Date"
              name="payment_date"
              type="date"
              value={laborPaymentForm.payment_date}
              set={setLaborPaymentForm}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
                Payment Type
              </small>
              <select
                value={laborPaymentForm.payment_type || 'wage'}
                onChange={(e) => setLaborPaymentForm({ ...laborPaymentForm, payment_type: e.target.value })}
              >
                <option value="wage">Wage Payment</option>
                <option value="advance">Advance Payment</option>
              </select>
            </label>

            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
                Payment Mode
              </small>
              <select
                value={laborPaymentForm.mode}
                onChange={(e) => setLaborPaymentForm({ ...laborPaymentForm, mode: e.target.value })}
              >
                <option value="cash">Cash</option>
                <option value="bank">Bank Transfer</option>
                <option value="upi">UPI / Online</option>
                <option value="cheque">Cheque</option>
              </select>
            </label>
            {(laborPaymentForm.mode === 'upi' || laborPaymentForm.mode === 'bank') && (
              <Input label="Transaction Reference / UPI ID" name="transaction_reference" value={laborPaymentForm.transaction_reference || ''} set={setLaborPaymentForm} placeholder="e.g. UPI ID, UTR number, or bank transaction ID" />
            )}

            <Input
              label="Note / Remarks"
              name="note"
              value={laborPaymentForm.note}
              set={setLaborPaymentForm}
              placeholder="e.g. Weekly wage, advance"
            />
          </div>
          </fieldset>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            {Boolean(modalReadOnly && editingLaborPaymentId) ? (
              <button
                type="button"
                className="muted"
                onClick={() => {
                  setLaborPaymentModal(false);
                  setEditingLaborPaymentId(null);
                  setModalReadOnly(false);
                  setModalError('');
                }}
                style={{ padding: '8px 20px', borderRadius: 6 }}
              >
                Close
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="muted"
                  onClick={() => {
                    setLaborPaymentModal(false);
                    setEditingLaborPaymentId(null);
                    setModalReadOnly(false);
                    setModalError('');
                  }}
                >
                  Cancel
                </button>
                <button type="submit" disabled={submitAction.isSubmitting('laborPayment')}>
                  {submitAction.isSubmitting('laborPayment') ? 'Saving…' : (editingLaborPaymentId ? 'Update Payment' : 'Save Payment')}
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
