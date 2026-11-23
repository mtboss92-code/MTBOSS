'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { INR, isSameDayIST, formatDateIST } from '../../shared';

export default function SupplierLedgerPayments() {
  const {
    isAgent, setEditingSupplierPaymentId, setModalReadOnly, selectedSupplier, supplierLedgerData,
    setSupplierPaymentModal, setSupplierPaymentForm, setModalError, del,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Payment Mode</th>
            <th>Reference / Cheque</th>
            <th>Note</th>
            <th>Recorded By</th>
            <th style={{ textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(supplierLedgerData.payments || []).map((p) => (
            <tr key={p.id}>
              <td>{p.payment_date ? p.payment_date.slice(0, 10) : '—'}</td>
              <td style={{ fontWeight: 700, color: '#16a34a' }}>{INR(p.amount)}</td>
              <td><span className="badge" style={{ textTransform: 'capitalize' }}>{p.mode || 'bank'}</span></td>
              <td>{p.transaction_reference || '—'}</td>
              <td>{p.note || '—'}</td>
              <td style={{ fontSize: 12, color: '#64748b' }}>{p.created_by || '—'}</td>
              <td className="actions" style={{ justifyContent: 'flex-end', display: 'flex', gap: 6 }}>
                {isSameDayIST(p.created_at || p.payment_date) ? (
                  <>
                    <button
                      type="button"
                      className="muted"
                      style={{ padding: '4px 8px', fontSize: 12 }}
                      onClick={() => {
                        setEditingSupplierPaymentId(p.id);
                        setSupplierPaymentForm({
                          supplier_id: p.supplier_id ? String(p.supplier_id) : '',
                          supplier_name: p.supplier_name || selectedSupplier?.supplier_name || selectedSupplier?.raw_supplier_name || '',
                          amount: p.amount,
                          payment_date: formatDateIST(p.payment_date),
                          mode: p.mode || 'bank',
                          transaction_reference: p.transaction_reference || '',
                          note: p.note || '',
                        });
                        setModalReadOnly(false);
                        setModalError('');
                        setSupplierPaymentModal(true);
                      }}
                    >
                      ✏️ Edit
                    </button>
                    {!isAgent && (
                      <button className="danger" style={{ padding: '4px 8px', fontSize: 12 }} onClick={() => del('supplierPayment', p.id)}>
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
                        setEditingSupplierPaymentId(p.id);
                        setSupplierPaymentForm({
                          supplier_id: p.supplier_id ? String(p.supplier_id) : '',
                          supplier_name: p.supplier_name || selectedSupplier?.supplier_name || selectedSupplier?.raw_supplier_name || '',
                          amount: p.amount,
                          payment_date: formatDateIST(p.payment_date),
                          mode: p.mode || 'bank',
                          transaction_reference: p.transaction_reference || '',
                          note: p.note || '',
                        });
                        setModalReadOnly(true);
                        setModalError('');
                        setSupplierPaymentModal(true);
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
          {(supplierLedgerData.payments || []).length === 0 && (
            <tr>
              <td colSpan={7} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                No payments recorded for this vendor.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
