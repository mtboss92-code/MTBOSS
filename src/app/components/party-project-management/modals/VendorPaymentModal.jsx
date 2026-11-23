'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input } from '../shared';

export default function VendorPaymentModal() {
  const {
    setVendorPaymentModal, editingVendorPaymentId, setEditingVendorPaymentId, modalReadOnly,
    setModalReadOnly, projectVendors, vendorPaymentForm, setVendorPaymentForm, modalError,
    setModalError, saveVendorPayment,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form onSubmit={saveVendorPayment} className="modal-card">
          <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>
            {Boolean(modalReadOnly && editingVendorPaymentId) ? '👁️ View Service Provider Payment' : (editingVendorPaymentId ? '✏️ Edit Service Provider Payment' : 'Record Service Provider Payment')}
          </h3>
          {Boolean(modalReadOnly && editingVendorPaymentId) && (
            <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: 8, padding: '10px 14px', marginBottom: 14, color: '#92400e', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16 }}>🔒</span>
              <div><strong>Read Only (Locked):</strong> This record was created more than 48 hours ago and cannot be modified.</div>
            </div>
          )}
          {modalError && <div role="alert" style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '8px 12px', borderRadius: 6, marginBottom: 12, fontSize: 13 }}>{modalError}</div>}
          <fieldset disabled={Boolean(modalReadOnly && editingVendorPaymentId)} style={{ border: 'none', padding: 0, margin: 0, opacity: (modalReadOnly && editingVendorPaymentId) ? 0.9 : 1 }}>
            <div className="grid">
              <label>
                <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Service Provider</small>
                <select
                  required
                  value={vendorPaymentForm.project_vendor_id}
                  disabled={Boolean(modalReadOnly && editingVendorPaymentId) || Boolean(editingVendorPaymentId)}
                  onChange={(e) => {
                    const pvid = e.target.value;
                    const pv = projectVendors.find((v) => String(v.id) === String(pvid));
                    const defType = pv?.category === 'contractor' ? 'labour' : pv?.category === 'supplier' ? 'material' : 'both';
                    setVendorPaymentForm({ ...vendorPaymentForm, project_vendor_id: pvid, payment_type: defType });
                  }}
                >
                  <option value="">-- Choose Service Provider --</option>
                  {projectVendors.map((pv) => (
                    <option key={pv.id} value={pv.id}>
                      {pv.vendor_name} ({pv.trade || pv.category})
                    </option>
                  ))}
                </select>
              </label>
              <Input label="Amount (₹)" name="amount" type="number" step="any" min="1" value={vendorPaymentForm.amount} set={setVendorPaymentForm} required />
              <Input label="Payment Date" name="payment_date" type="date" value={vendorPaymentForm.payment_date} set={setVendorPaymentForm} required />
              <label>
                <small style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Payment Mode</small>
                <select value={vendorPaymentForm.mode} onChange={(e) => setVendorPaymentForm({ ...vendorPaymentForm, mode: e.target.value })}>
                  <option value="bank">Bank Transfer</option>
                  <option value="cash">Cash</option>
                  <option value="cheque">Cheque</option>
                  <option value="upi">UPI / Online</option>
                </select>
              </label>
              {(vendorPaymentForm.mode === 'upi' || vendorPaymentForm.mode === 'bank') && (
                <Input label="Transaction Reference / UPI ID" name="transaction_reference" value={vendorPaymentForm.transaction_reference || ''} set={setVendorPaymentForm} placeholder="e.g. UPI ID, UTR number, or bank transaction ID" />
              )}
              <label>
                <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Payment For</small>
                <select value={vendorPaymentForm.payment_type} onChange={(e) => setVendorPaymentForm({ ...vendorPaymentForm, payment_type: e.target.value })}>
                  <option value="labour">Labour / Service</option>
                  <option value="material">Material</option>
                  <option value="both">Both</option>
                </select>
              </label>
              <Input label="Note / Transaction Ref" name="note" value={vendorPaymentForm.note} set={setVendorPaymentForm} />
            </div>
          </fieldset>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            {Boolean(modalReadOnly && editingVendorPaymentId) ? (
              <button
                type="button"
                className="muted"
                onClick={() => {
                  setVendorPaymentModal(false);
                  setEditingVendorPaymentId(null);
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
                    setVendorPaymentModal(false);
                    setEditingVendorPaymentId(null);
                    setModalReadOnly(false);
                    setModalError('');
                  }}
                >
                  Cancel
                </button>
                <button type="submit">{editingVendorPaymentId ? 'Update Payment' : 'Save Payment'}</button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
