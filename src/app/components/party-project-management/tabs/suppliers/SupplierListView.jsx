'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { receivedBlank, today, INR } from '../../shared';

export default function SupplierListView() {
  const {
    hasAgentPayment, hasAgentConstruction, projectSuppliers, supplierSearch, setSupplierSearch,
    setSupplierPaymentModal, setSupplierPaymentForm, setLocalVendorModal, setLocalVendorForm,
    setModalError, setReceivedModal, setReceivedForm, setEditingReceivedId, setBillFile,
    openSupplierLedger,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <h4 style={{ margin: 0, fontSize: 16 }}>Project Vendors ({projectSuppliers.length})</h4>
            <input
              type="text"
              placeholder="Search vendor by name or phone..."
              value={supplierSearch}
              onChange={(e) => setSupplierSearch(e.target.value)}
              style={{ minWidth: 240, padding: '6px 12px', fontSize: 13 }}
            />
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {hasAgentConstruction && (
              <button
                className="btn-secondary"
                onClick={() => {
                  setLocalVendorForm({
                    name: '',
                    phone: '',
                    city: '',
                    material_type: '',
                    address: '',
                  });
                  setModalError('');
                  setLocalVendorModal(true);
                }}
                title="Add local / unregistered vendor to this project"
              >
                + Add Local Vendor
              </button>
            )}
            {hasAgentConstruction && (
              <button
                onClick={() => {
                  setReceivedForm({
                    ...receivedBlank,
                    received_date: today(),
                  });
                  setEditingReceivedId(null);
                  setBillFile(null);
                  setModalError('');
                  setReceivedModal(true);
                }}
              >
                + Record Material Delivered to Site
              </button>
            )}
            {hasAgentPayment && (
              <button
                className="btn-secondary"
                onClick={() => {
                  setSupplierPaymentForm({
                    supplier_id: projectSuppliers[0]?.supplier_id || '',
                    supplier_name: projectSuppliers[0]?.supplier_name || '',
                    amount: '',
                    payment_date: today(),
                    mode: 'bank',
                    transaction_reference: '',
                    note: '',
                  });
                  setModalError('');
                  setSupplierPaymentModal(true);
                }}
              >
                + Record Vendor Payment
              </button>
            )}
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Total Supplied</th>
              <th>Total Returned</th>
              <th>Total Paid</th>
              <th>Balance</th>
              <th>Last Delivery</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projectSuppliers
              .filter((s) => {
                if (!supplierSearch.trim()) return true;
                const q = supplierSearch.toLowerCase();
                return (
                  (s.supplier_name && s.supplier_name.toLowerCase().includes(q)) ||
                  (s.phone && s.phone.includes(q)) ||
                  (s.city && s.city.toLowerCase().includes(q))
                );
              })
              .map((s) => (
                <tr
                  key={s.key}
                  className="clickable-row"
                  onClick={() => openSupplierLedger(s)}
                  title="Click to open vendor ledger"
                >
                  <td>
                    <b>{s.supplier_name}</b>
                    {s.is_registered ? (
                      <span className="badge badge-active" style={{ marginLeft: 6, fontSize: 10 }}>Registered</span>
                    ) : (
                      <span className="badge" style={{ marginLeft: 6, fontSize: 10, background: '#f1f5f9', color: '#475569' }}>
                        {s.is_local ? 'Local Vendor' : 'Unregistered'}
                      </span>
                    )}
                    {s.material_type && (
                      <span style={{ fontSize: 10, color: '#0369a1', background: '#e0f2fe', padding: '1px 6px', borderRadius: 4, marginLeft: 6 }}>
                        {s.material_type}
                      </span>
                    )}
                    {s.phone && (
                      <span style={{ fontSize: 11, color: '#64748b', display: 'block', marginTop: 2 }}>
                        📞 {s.phone} {s.city ? `• ${s.city}` : ''}
                      </span>
                    )}
                  </td>
                  <td style={{ fontWeight: 600 }}>
                    {INR(s.total_supplied)}
                    <span style={{ fontSize: 11, color: '#64748b', display: 'block' }}>
                      {s.delivery_count} {s.delivery_count === 1 ? 'delivery' : 'deliveries'}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600, color: '#dc2626' }}>
                    {INR(s.total_returned || 0)}
                    <span style={{ fontSize: 11, color: '#64748b', display: 'block' }}>
                      {s.return_count || 0} {s.return_count === 1 ? 'return' : 'returns'}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600, color: '#16a34a' }}>
                    {INR(s.total_paid)}
                    <span style={{ fontSize: 11, color: '#64748b', display: 'block' }}>
                      {s.payment_count} {s.payment_count === 1 ? 'payment' : 'payments'}
                    </span>
                  </td>
                  <td>
                    {s.balance > 0 ? (
                      <span style={{ fontWeight: 700, color: '#ea580c' }}>
                        Due: {INR(s.balance)}
                      </span>
                    ) : s.balance < 0 ? (
                      <span className="badge badge-active" style={{ background: '#dcfce7', color: '#15803d', fontWeight: 700 }}>
                        Advance: {INR(Math.abs(s.balance))}
                      </span>
                    ) : (
                      <span style={{ color: '#64748b', fontWeight: 600 }}>Settled (₹0)</span>
                    )}
                  </td>
                  <td>{s.last_delivery ? s.last_delivery.slice(0, 10) : '—'}</td>
                  <td className="actions" style={{ justifyContent: 'flex-end' }} onClick={(e) => e.stopPropagation()}>
                    <button
                      className="muted"
                      onClick={() => openSupplierLedger(s)}
                      title="Open full ledger"
                    >
                      📒 View Ledger
                    </button>
                    {hasAgentPayment && (
                      <button
                        onClick={() => {
                          setSupplierPaymentForm({
                            supplier_id: s.supplier_id || '',
                            supplier_name: s.supplier_name || '',
                            amount: '',
                            payment_date: today(),
                            mode: 'bank',
                            transaction_reference: '',
                            note: '',
                          });
                          setModalError('');
                          setSupplierPaymentModal(true);
                        }}
                        title="Record payment to this vendor"
                      >
                        + Pay
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            {projectSuppliers.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '2.5rem', color: '#64748b' }}>
                  No vendors recorded for this project yet.<br />
                  Click <b>&ldquo;+ Record Material Delivered to Site&rdquo;</b> to record initial vendor deliveries.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
