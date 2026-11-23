'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input } from '../shared';

export default function PartyPaymentModal() {
  const {
    partyPaymentForm, setPartyPaymentForm, setPartyPaymentModal, editingPartyPaymentId,
    setEditingPartyPaymentId, modalReadOnly, setModalReadOnly, modalError, setModalError,
    savePartyPayment,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form onSubmit={savePartyPayment} className="modal-card">
          <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>
            {Boolean(modalReadOnly && editingPartyPaymentId) ? '👁️ View Party Payment' : (editingPartyPaymentId ? '✏️ Edit Party Payment' : 'Record Party Payment')}
          </h3>
          {Boolean(modalReadOnly && editingPartyPaymentId) && (
            <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: 8, padding: '10px 14px', marginBottom: 14, color: '#92400e', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16 }}>🔒</span>
              <div><strong>Read Only (Locked):</strong> This record was created more than 48 hours ago and cannot be modified.</div>
            </div>
          )}
          {modalError && <div role="alert" style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '8px 12px', borderRadius: 6, marginBottom: 12, fontSize: 13 }}>{modalError}</div>}
          <fieldset disabled={Boolean(modalReadOnly && editingPartyPaymentId)} style={{ border: 'none', padding: 0, margin: 0, opacity: (modalReadOnly && editingPartyPaymentId) ? 0.9 : 1 }}>
            <div className="grid">
              <Input label="Amount (₹)" name="amount" type="number" step="any" min="1" value={partyPaymentForm.amount} set={setPartyPaymentForm} required />
              <Input label="Date" name="payment_date" type="date" value={partyPaymentForm.payment_date} set={setPartyPaymentForm} required />
              <label>
                <small style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Payment Mode</small>
                <select value={partyPaymentForm.mode} onChange={(e) => setPartyPaymentForm((f) => ({ ...f, mode: e.target.value }))}>
                  <option value="bank">Bank Transfer</option>
                  <option value="cash">Cash</option>
                  <option value="cheque">Cheque</option>
                  <option value="upi">UPI / Online</option>
                </select>
              </label>
              {(partyPaymentForm.mode === 'upi' || partyPaymentForm.mode === 'bank') && (
                <Input label="Transaction Reference / UPI ID" name="transaction_reference" value={partyPaymentForm.transaction_reference || ''} set={setPartyPaymentForm} placeholder="e.g. UPI ID, UTR number, or bank transaction ID" />
              )}
              <Input label="Note / Reference" name="note" value={partyPaymentForm.note} set={setPartyPaymentForm} />
            </div>
          </fieldset>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            {Boolean(modalReadOnly && editingPartyPaymentId) ? (
              <button
                type="button"
                className="muted"
                onClick={() => {
                  setPartyPaymentModal(false);
                  setEditingPartyPaymentId(null);
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
                    setPartyPaymentModal(false);
                    setEditingPartyPaymentId(null);
                    setModalReadOnly(false);
                    setModalError('');
                  }}
                >
                  Cancel
                </button>
                <button type="submit">{editingPartyPaymentId ? 'Update Payment' : 'Save Payment'}</button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
