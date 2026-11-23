'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR, Input } from '../shared';

export default function SupplierPaymentModal() {
  const {
    submitAction, editingSupplierPaymentId, setEditingSupplierPaymentId, modalReadOnly,
    setModalReadOnly, suppliersMaster, projectSuppliers, setSupplierPaymentModal, supplierPaymentForm,
    setSupplierPaymentForm, modalError, setModalError, saveSupplierPayment,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form
          onSubmit={(e) =>
            submitAction.submit('supplierPayment', () => saveSupplierPayment(e), {
              successMessage: 'Vendor payment recorded successfully',
              onError: setModalError,
            })
          }
          className="modal-card"
        >
          <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>
            {Boolean(modalReadOnly && editingSupplierPaymentId) ? '👁️ View Vendor Payment' : (editingSupplierPaymentId ? '✏️ Edit Vendor Payment' : 'Record Payment to Vendor')}
          </h3>
          {Boolean(modalReadOnly && editingSupplierPaymentId) && (
            <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: 8, padding: '10px 14px', marginBottom: 14, color: '#92400e', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16 }}>🔒</span>
              <div><strong>Read Only (Locked):</strong> This record was created more than 48 hours ago and cannot be modified.</div>
            </div>
          )}
          {modalError && (
            <div
              role="alert"
              style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                color: '#b91c1c',
                padding: '8px 12px',
                borderRadius: 6,
                marginBottom: 12,
                fontSize: 13,
              }}
            >
              {modalError}
            </div>
          )}
          <fieldset disabled={Boolean(modalReadOnly && editingSupplierPaymentId)} style={{ border: 'none', padding: 0, margin: 0, opacity: (modalReadOnly && editingSupplierPaymentId) ? 0.9 : 1 }}>
            <div className="grid">
            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
                Vendor *
              </small>
              <select
                required
                value={supplierPaymentForm.supplier_id ? `reg_${supplierPaymentForm.supplier_id}` : (supplierPaymentForm.supplier_name ? `unreg_${supplierPaymentForm.supplier_name.toLowerCase().trim()}` : '')}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val.startsWith('reg_')) {
                    const sId = Number(val.replace('reg_', ''));
                    const sup = suppliersMaster.find((s) => Number(s.id) === sId) || projectSuppliers.find((s) => Number(s.supplier_id) === sId);
                    setSupplierPaymentForm({
                      ...supplierPaymentForm,
                      supplier_id: sId,
                      supplier_name: sup?.shop_name || sup?.business_name || '',
                    });
                  } else if (val.startsWith('unreg_')) {
                    const sup = projectSuppliers.find((s) => s.key === val);
                    setSupplierPaymentForm({
                      ...supplierPaymentForm,
                      supplier_id: '',
                      supplier_name: sup?.supplier_name || val.replace('unreg_', ''),
                    });
                  } else {
                    setSupplierPaymentForm({
                      ...supplierPaymentForm,
                      supplier_id: '',
                      supplier_name: '',
                    });
                  }
                }}
              >
                <option value="">Select Vendor</option>
                {projectSuppliers.length > 0 && (
                  <optgroup label="Vendors Used in Project">
                    {projectSuppliers.map((s) => (
                      <option key={s.key} value={s.key}>
                        {s.supplier_name} • Balance: {s.balance > 0 ? `Due ${INR(s.balance)}` : s.balance < 0 ? `Advance ${INR(Math.abs(s.balance))}` : '₹0'}
                      </option>
                    ))}
                  </optgroup>
                )}
                <optgroup label="All Registered Vendors">
                  {suppliersMaster.filter((m) => m.is_registered).map((s) => (
                    <option key={`reg_${s.id}`} value={`reg_${s.id}`}>
                      {s.shop_name || s.business_name || `Vendor #${s.id}`} {s.phone ? `(${s.phone})` : ''} {s.city ? `• ${s.city}` : ''}
                    </option>
                  ))}
                </optgroup>
              </select>
            </label>

            {!supplierPaymentForm.supplier_id && (
              <Input
                label="Vendor Name (if not registered)"
                name="supplier_name"
                value={supplierPaymentForm.supplier_name}
                set={setSupplierPaymentForm}
                required={!supplierPaymentForm.supplier_id}
                placeholder="e.g. Ultratech Distributor"
              />
            )}

            <Input
              label="Amount (₹) *"
              name="amount"
              type="number"
              step="0.01"
              min="0.01"
              value={supplierPaymentForm.amount}
              set={setSupplierPaymentForm}
              required
            />

            <Input
              label="Payment Date *"
              name="payment_date"
              type="date"
              value={supplierPaymentForm.payment_date}
              set={setSupplierPaymentForm}
              required
            />

            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
                Payment Mode *
              </small>
              <select
                value={supplierPaymentForm.mode}
                onChange={(e) => setSupplierPaymentForm({ ...supplierPaymentForm, mode: e.target.value })}
              >
                <option value="bank">Bank Transfer / NEFT / RTGS</option>
                <option value="upi">UPI / GPay / PhonePe</option>
                <option value="cash">Cash</option>
                <option value="cheque">Cheque</option>
              </select>
            </label>

            <Input
              label="Transaction Ref / Cheque No."
              name="transaction_reference"
              value={supplierPaymentForm.transaction_reference}
              set={setSupplierPaymentForm}
              placeholder="e.g. UTR12345678 or Chq #000123"
            />

            <Input
              label="Note / Purpose"
              name="note"
              value={supplierPaymentForm.note}
              set={setSupplierPaymentForm}
              placeholder="e.g. 50 bags cement payment"
            />
          </div>

          {/* Advance / Balance warning */}
          {(() => {
            const selSup = projectSuppliers.find((s) =>
              supplierPaymentForm.supplier_id
                ? Number(s.supplier_id) === Number(supplierPaymentForm.supplier_id)
                : (s.supplier_name && supplierPaymentForm.supplier_name && s.supplier_name.toLowerCase().trim() === supplierPaymentForm.supplier_name.toLowerCase().trim())
            );
            const curBalance = selSup ? selSup.balance : 0;
            const enteredAmt = Number(supplierPaymentForm.amount || 0);

            if (enteredAmt > 0 && selSup) {
              if (enteredAmt > curBalance) {
                const excess = enteredAmt - Math.max(0, curBalance);
                return (
                  <div
                    style={{
                      background: '#fef3c7',
                      border: '1px solid #f59e0b',
                      color: '#92400e',
                      padding: '10px 14px',
                      borderRadius: 6,
                      marginTop: 12,
                      fontSize: 13,
                    }}
                  >
                    ⚠️ <b>Notice: Advance Payment</b>
                    <div style={{ marginTop: 2 }}>
                      Payment of <b>{INR(enteredAmt)}</b> exceeds the current balance due ({INR(Math.max(0, curBalance))}).
                      The excess <b>{INR(excess)}</b> will be recorded as an <b>Advance Payment</b> to this vendor.
                    </div>
                  </div>
                );
              }
            }
            return null;
          })()}
          </fieldset>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            {Boolean(modalReadOnly && editingSupplierPaymentId) ? (
              <button
                type="button"
                className="muted"
                onClick={() => {
                  setSupplierPaymentModal(false);
                  setEditingSupplierPaymentId(null);
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
                  disabled={submitAction.isSubmitting('supplierPayment')}
                  onClick={() => {
                    setSupplierPaymentModal(false);
                    setEditingSupplierPaymentId(null);
                    setModalReadOnly(false);
                    setModalError('');
                  }}
                >
                  Cancel
                </button>
                <button type="submit" disabled={submitAction.isSubmitting('supplierPayment')}>
                  {submitAction.isSubmitting('supplierPayment') ? 'Saving…' : (editingSupplierPaymentId ? 'Update Payment' : 'Record Payment')}
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
