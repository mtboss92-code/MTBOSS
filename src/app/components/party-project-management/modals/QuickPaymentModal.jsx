'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function QuickPaymentModal() {
  const {
    setQuickPaymentModal, quickPaymentForm, setQuickPaymentForm, savingQuickPayment,
    handleSaveQuickPayment,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(3px)',
          zIndex: 2600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
        }}
        onClick={() => { if (!savingQuickPayment) setQuickPaymentModal(false); }}
      >
        <div
          style={{
            background: '#ffffff',
            borderRadius: 12,
            padding: 24,
            maxWidth: 480,
            width: '100%',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
            border: '1px solid #cbd5e1',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 17, color: '#0f172a' }}>
                💳 Record Quick Payment
              </h3>
              <p style={{ margin: '3px 0 0', fontSize: 13, color: '#64748b' }}>
                Payee: <strong style={{ color: '#0f172a' }}>{quickPaymentForm.name}</strong> ({quickPaymentForm.type === 'labor' ? 'Worker' : quickPaymentForm.type === 'supplier' ? 'Vendor' : 'Service Provider / Contractor'})
              </p>
            </div>
            <button
              type="button"
              className="muted"
              onClick={() => setQuickPaymentModal(false)}
              style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 16, fontWeight: 'bold' }}
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSaveQuickPayment}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Current Balance Notice */}
              <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 6, padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: '#991b1b', fontWeight: 600 }}>Current Balance Due:</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#dc2626' }}>{INR(quickPaymentForm.balance_due)}</span>
              </div>

              {/* Select Project */}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 4 }}>
                  Select Project *
                </label>
                <select
                  value={quickPaymentForm.project_id}
                  onChange={(e) => {
                    const pid = Number(e.target.value);
                    const matched = quickPaymentForm.available_projects?.find((p) => Number(p.project_id) === pid);
                    setQuickPaymentForm((prev) => ({
                      ...prev,
                      project_id: pid,
                      project_name: matched?.project_name || prev.project_name,
                      id: prev.type === 'labor' ? (matched?.labor_id || prev.id) : (matched?.project_vendor_id || prev.id),
                      supplier_name: matched?.supplier_name || prev.supplier_name,
                      balance_due: matched?.balance ?? prev.balance_due,
                    }));
                  }}
                  required
                  style={{ width: '100%', padding: '7px 10px', fontSize: 13, borderRadius: 6, border: '1px solid #cbd5e1' }}
                >
                  {quickPaymentForm.available_projects?.map((p, idx) => (
                    <option key={idx} value={p.project_id}>
                      {p.project_name} (Due: ₹{p.balance || 0})
                    </option>
                  ))}
                  {(!quickPaymentForm.available_projects || quickPaymentForm.available_projects.length === 0) && (
                    <option value="">No projects found</option>
                  )}
                </select>
              </div>

              {/* Payment Amount */}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 4 }}>
                  Payment Amount (₹) *
                </label>
                <input
                  type="number"
                  step="1"
                  min="1"
                  required
                  placeholder="Enter amount in ₹"
                  value={quickPaymentForm.amount}
                  onChange={(e) => setQuickPaymentForm((prev) => ({ ...prev, amount: e.target.value }))}
                  style={{ width: '100%', padding: '7px 10px', fontSize: 14, fontWeight: 600, borderRadius: 6, border: '1px solid #cbd5e1' }}
                />
              </div>

              {/* Date & Mode */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 4 }}>
                    Payment Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={quickPaymentForm.payment_date}
                    onChange={(e) => setQuickPaymentForm((prev) => ({ ...prev, payment_date: e.target.value }))}
                    style={{ width: '100%', padding: '7px 10px', fontSize: 13, borderRadius: 6, border: '1px solid #cbd5e1' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 4 }}>
                    Payment Mode
                  </label>
                  <select
                    value={quickPaymentForm.mode}
                    onChange={(e) => setQuickPaymentForm((prev) => ({ ...prev, mode: e.target.value }))}
                    style={{ width: '100%', padding: '7px 10px', fontSize: 13, borderRadius: 6, border: '1px solid #cbd5e1' }}
                  >
                    <option value="cash">Cash</option>
                    <option value="upi">UPI / Online</option>
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="cheque">Cheque</option>
                  </select>
                </div>
              </div>

              {/* Note / Ref */}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 4 }}>
                  Note / Reference (Optional)
                </label>
                <input
                  type="text"
                  value={quickPaymentForm.note}
                  onChange={(e) => setQuickPaymentForm((prev) => ({ ...prev, note: e.target.value }))}
                  placeholder="e.g. UPI Ref / Cash voucher #42"
                  style={{ width: '100%', padding: '7px 10px', fontSize: 13, borderRadius: 6, border: '1px solid #cbd5e1' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 20 }}>
              <button
                type="button"
                className="muted"
                disabled={savingQuickPayment}
                onClick={() => setQuickPaymentModal(false)}
                style={{ padding: '7px 16px', borderRadius: 6 }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={savingQuickPayment}
                style={{ padding: '7px 18px', borderRadius: 6, fontWeight: 600 }}
              >
                {savingQuickPayment ? 'Recording…' : '✓ Record Payment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
