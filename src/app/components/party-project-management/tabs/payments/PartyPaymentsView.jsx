'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { Input, INR, isSameDayIST, today } from '../../shared';

export default function PartyPaymentsView() {
  const {
    isAgent, submitAction, setMessage, partyPayments, partyPaymentForm, setPartyPaymentForm,
    setPartyPaymentModal, setEditingPartyPaymentId, setModalReadOnly, setModalError, del,
    savePartyPayment,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <form onSubmit={(e) => submitAction.submit('partyPayment', () => savePartyPayment(e), { successMessage: 'Party payment recorded successfully', onError: setMessage })} className="card" style={{ marginBottom: 16 }}>
      <h4 style={{ margin: '0 0 12px', fontSize: 15 }}>Record Party Payment (Client Receipts)</h4>
      <div className="grid">
      <Input label="Amount (₹)" name="amount" type="number" step="any" min="1" value={partyPaymentForm.amount} set={setPartyPaymentForm} required />
      <Input label="Date" name="payment_date" type="date" value={partyPaymentForm.payment_date} set={setPartyPaymentForm} required />
      <label>
      <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Mode</small>
      <select
        value={partyPaymentForm.mode}
        onChange={(e) => setPartyPaymentForm((f) => ({ ...f, mode: e.target.value }))}
      >
        <option value="bank">Bank Transfer</option>
        <option value="cheque">Cheque</option>
        <option value="cash">Cash</option>
        <option value="upi">UPI</option>
      </select>
      </label>
      {(partyPaymentForm.mode === 'upi' || partyPaymentForm.mode === 'bank') && (
      <Input label="Transaction Reference / UPI ID" name="transaction_reference" value={partyPaymentForm.transaction_reference || ''} set={setPartyPaymentForm} placeholder="e.g. UPI ID, UTR number, or bank transaction ID" />
      )}
      <Input label="Note / Reference" name="note" value={partyPaymentForm.note} set={setPartyPaymentForm} />
      </div>
      <p style={{ marginTop: 12, textAlign: 'right' }}>
      <button type="submit" disabled={submitAction.isSubmitting('partyPayment')}>{submitAction.isSubmitting('partyPayment') ? 'Saving…' : 'Record Payment'}</button>
      </p>
      </form>

      <table>
      <thead>
      <tr>
      <th>Date</th>
      <th>Amount</th>
      <th>Mode</th>
      <th>Note</th>
      <th style={{ textAlign: 'right' }}>Actions</th>
      </tr>
      </thead>
      <tbody>
      {partyPayments.map((p) => (
      <tr key={p.id}>
        <td>{p.payment_date}</td>
        <td style={{ fontWeight: 700, color: '#16a34a' }}>{INR(p.amount)}</td>
        <td style={{ textTransform: 'uppercase', fontSize: 11 }}>{p.mode}</td>
        <td>
          {p.note || '—'}
          {p.transaction_reference && <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>Ref: {p.transaction_reference}</div>}
        </td>
        <td className="actions" style={{ justifyContent: 'flex-end', display: 'flex', gap: 6 }} onClick={(e) => e.stopPropagation()}>
          {isSameDayIST(p.created_at || p.payment_date) ? (
            <>
              <button
                type="button"
                className="muted"
                style={{ padding: '4px 8px', fontSize: 12 }}
                onClick={() => {
                  setEditingPartyPaymentId(p.id);
                  setPartyPaymentForm({
                    amount: p.amount,
                    payment_date: p.payment_date ? String(p.payment_date).slice(0, 10) : today(),
                    mode: p.mode || 'bank',
                    transaction_reference: p.transaction_reference || '',
                    note: p.note || '',
                  });
                  setModalReadOnly(false);
                  setModalError('');
                  setPartyPaymentModal(true);
                }}
              >
                ✏️ Edit
              </button>
              {!isAgent && (
                <button className="danger" style={{ padding: '4px 8px', fontSize: 12 }} onClick={() => del('partyPayment', p.id)}>
                  Delete
                </button>
              )}
            </>
          ) : (
            <>
              <button
                type="button"
                className="muted"
                style={{ padding: '4px 8px', fontSize: 12 }}
                onClick={() => {
                  setEditingPartyPaymentId(p.id);
                  setPartyPaymentForm({
                    amount: p.amount,
                    payment_date: p.payment_date ? String(p.payment_date).slice(0, 10) : today(),
                    mode: p.mode || 'bank',
                    transaction_reference: p.transaction_reference || '',
                    note: p.note || '',
                  });
                  setModalReadOnly(true);
                  setModalError('');
                  setPartyPaymentModal(true);
                }}
              >
                👁️ View
              </button>
              <span title="Locked: Can only be edited or deleted within 48 hours" style={{ fontSize: 11, color: '#94a3b8' }}>
                🔒 Locked
              </span>
            </>
          )}
        </td>
      </tr>
      ))}
      {partyPayments.length === 0 && (
      <tr>
        <td colSpan={5} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
          No party payments recorded yet.
        </td>
      </tr>
      )}
      </tbody>
      </table>
      </div>
    </>
  );
}
