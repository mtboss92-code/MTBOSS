'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { INR } from '../../shared';

export default function SupplierPaymentsView() {
  const {
    setProjectTab, projectSuppliers, supplierPaymentsList, openSupplierLedger,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
          padding: '12px 16px',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: 8,
          marginBottom: 16
        }}>
          <div>
            <div style={{ fontWeight: 600, color: '#0f172a', fontSize: 14 }}>
              ℹ️ Vendor Payment Details (View Only)
            </div>
            <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>
              Payment add, edit ya delete sirf <b>Vendors</b> tab me jaakar kiya ja sakta hai.
            </div>
          </div>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => setProjectTab('suppliers')}
            style={{ fontSize: 12 }}
          >
            Go to Vendors Tab ➔
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Vendor Name</th>
              <th>Amount</th>
              <th>Payment Mode</th>
              <th>Reference / Cheque</th>
              <th>Note</th>
              <th>Recorded By</th>
              <th style={{ textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {supplierPaymentsList.map((p) => {
              const supplierName = p.supplier_display || p.supplier_name || (projectSuppliers.find(s => s.supplier_id === p.supplier_id)?.supplier_name) || `Vendor #${p.supplier_id || ''}`;
              return (
                <tr key={p.id}>
                  <td>{p.payment_date ? String(p.payment_date).slice(0, 10) : '—'}</td>
                  <td>
                    <b>{supplierName}</b>
                    {p.supplier_phone && (
                      <div style={{ fontSize: 11, color: '#64748b' }}>📞 {p.supplier_phone}</div>
                    )}
                  </td>
                  <td style={{ fontWeight: 700, color: '#16a34a' }}>{INR(p.amount)}</td>
                  <td>
                    <span className="badge" style={{ textTransform: 'capitalize' }}>
                      {p.mode || 'bank'}
                    </span>
                  </td>
                  <td>{p.transaction_reference || '—'}</td>
                  <td>{p.note || '—'}</td>
                  <td style={{ fontSize: 12, color: '#64748b' }}>{p.created_by || '—'}</td>
                  <td className="actions" style={{ justifyContent: 'flex-end' }}>
                    <button
                      type="button"
                      className="muted"
                      style={{ fontSize: 11 }}
                      onClick={() => {
                        const matched = projectSuppliers.find(
                          (s) => (p.supplier_id && s.supplier_id === p.supplier_id) ||
                                 (s.supplier_name && (s.supplier_name.toLowerCase() === (p.supplier_name || '').toLowerCase()))
                        );
                        setProjectTab('suppliers');
                        if (matched) {
                          openSupplierLedger(matched);
                        }
                      }}
                      title="View ledger in Vendors tab"
                    >
                      📒 View in Vendors
                    </button>
                  </td>
                </tr>
              );
            })}
            {supplierPaymentsList.length === 0 && (
              <tr>
                <td colSpan={8} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                  No vendor payments recorded yet. Payments can be recorded in the Vendors tab.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
