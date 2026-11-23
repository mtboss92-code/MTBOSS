'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { INR, Input, isSameDayIST, today } from '../../shared';

export default function VendorPaymentsView() {
  const {
    isAgent, submitAction, setMessage, setVendorPaymentModal, setEditingVendorPaymentId,
    setModalReadOnly, projectVendors, vendorPaymentsList, vPayFilterVendor, setVPayFilterVendor,
    vPayFilterType, setVPayFilterType, vPayFilterFrom, setVPayFilterFrom, vPayFilterTo, setVPayFilterTo,
    vendorPaymentForm, setVendorPaymentForm, setModalError, del, openVendorDetail, saveVendorPayment,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <form onSubmit={(e) => submitAction.submit('vendorPayment', () => saveVendorPayment(e), { successMessage: 'Service provider payment recorded successfully', onError: setMessage })} className="card" style={{ marginBottom: 16 }}>
      <h4 style={{ margin: '0 0 12px', fontSize: 15 }}>Record Service Provider Payment</h4>
      <div className="grid">
      <label>
      <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Service Provider</small>
      <select
        required
        value={vendorPaymentForm.project_vendor_id}
        onChange={(e) => {
          const pvid = e.target.value;
          const pv = projectVendors.find((v) => String(v.id) === String(pvid));
          const earned = pv ? Number(pv.total_earned ?? pv.earned ?? 0) : 0;
          const paid = pv ? Number(pv.total_paid ?? pv.paid ?? 0) : 0;
          const bal = pv ? Number(pv.balance_due ?? pv.balance ?? (earned - paid)) : 0;
          const defType = pv ? (bal <= 0 ? 'advance' : pv.pay_type === 'contract' ? 'contract' : 'labour') : 'labour';
          setVendorPaymentForm({ ...vendorPaymentForm, project_vendor_id: pvid, payment_type: defType });
        }}
      >
        <option value="">Select Service Provider</option>
        {projectVendors.map((pv) => {
          const earned = Number(pv.total_earned ?? pv.earned ?? 0);
          const paid = Number(pv.total_paid ?? pv.paid ?? 0);
          const bal = Number(pv.balance_due ?? pv.balance ?? (earned - paid));
          const balLabel = bal > 0 ? `Due: ${INR(bal)}` : bal < 0 ? `Advance: ${INR(Math.abs(bal))}` : 'Settled (₹0)';
          const rateLabel = pv.pay_type === 'daily_wage' ? `Daily Wage: ${INR(pv.daily_rate)}/day` : `Contract: ${INR(pv.contract_amount)}`;
          return (
            <option value={pv.id} key={pv.id}>
              {pv.vendor_name} ({rateLabel}) &bull; {balLabel}
            </option>
          );
        })}
      </select>
      </label>
      {(() => {
      const sel = projectVendors.find((pv) => String(pv.id) === String(vendorPaymentForm.project_vendor_id));
      if (!sel) return null;
      const earned = Number(sel.total_earned ?? sel.earned ?? 0);
      const paid = Number(sel.total_paid ?? sel.paid ?? 0);
      const bal = Number(sel.balance_due ?? sel.balance ?? (earned - paid));
      const rateLabel = sel.pay_type === 'daily_wage' ? `Daily Wage: ${INR(sel.daily_rate)}/day` : `Contract Amount: ${INR(sel.contract_amount)}`;
      return (
        <div style={{ gridColumn: '1 / -1', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 14px', display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <div>
            <small style={{ color: '#64748b', display: 'block' }}>Contractor / Service Provider</small>
            <b>{sel.vendor_name}</b> <span style={{ fontSize: 12, color: '#64748b' }}>({sel.trade || 'General'})</span>
          </div>
          <div>
            <small style={{ color: '#64748b', display: 'block' }}>Rate / Contract Value</small>
            <span style={{ fontWeight: 600, color: '#0f172a' }}>{rateLabel}</span>
          </div>
          <div>
            <small style={{ color: '#64748b', display: 'block' }}>Service Provider Earned</small>
            <span style={{ fontWeight: 600, color: '#0f172a' }}>{INR(earned)}</span>
          </div>
          <div>
            <small style={{ color: '#64748b', display: 'block' }}>Total Paid</small>
            <span style={{ fontWeight: 600, color: '#16a34a' }}>{INR(paid)}</span>
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
      <Input label="Amount (₹)" name="amount" type="number" step="any" min="1" value={vendorPaymentForm.amount} set={setVendorPaymentForm} required />
      <Input label="Payment Date" name="payment_date" type="date" value={vendorPaymentForm.payment_date} set={setVendorPaymentForm} required />
      <label>
      <small style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Payment Mode</small>
      <select
        value={vendorPaymentForm.mode}
        onChange={(e) => setVendorPaymentForm({ ...vendorPaymentForm, mode: e.target.value })}
      >
        <option value="bank">Bank Transfer</option>
        <option value="cash">Cash</option>
        <option value="cheque">Cheque</option>
        <option value="upi">UPI</option>
      </select>
      </label>
      {(vendorPaymentForm.mode === 'upi' || vendorPaymentForm.mode === 'bank') && (
      <Input label="Transaction Reference / UPI ID" name="transaction_reference" value={vendorPaymentForm.transaction_reference || ''} set={setVendorPaymentForm} placeholder="e.g. UPI ID, UTR number, or bank transaction ID" />
      )}
      <label>
      <small style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Payment Type</small>
      <select
        value={vendorPaymentForm.payment_type}
        onChange={(e) => setVendorPaymentForm({ ...vendorPaymentForm, payment_type: e.target.value })}
      >
        <option value="labour">Labour</option>
        <option value="advance">Advance</option>
        <option value="material">Material</option>
        <option value="contract">Contract</option>
      </select>
      </label>
      <Input label="Note / Transaction Ref" name="note" value={vendorPaymentForm.note} set={setVendorPaymentForm} />
      </div>
      <p style={{ marginTop: 12, textAlign: 'right' }}>
      <button type="submit" disabled={submitAction.isSubmitting('vendorPayment')}>{submitAction.isSubmitting('vendorPayment') ? 'Saving…' : 'Record Payment'}</button>
      </p>
      </form>

      {/* Payment Filters */}
      <div className="bar" style={{ marginBottom: 12, gap: 10, flexWrap: 'wrap' }}>
      <select
      value={vPayFilterVendor}
      onChange={(e) => setVPayFilterVendor(e.target.value)}
      style={{ maxWidth: 200 }}
      >
      <option value="">All Service Providers</option>
      {projectVendors.map((pv) => (
      <option value={pv.id} key={pv.id}>{pv.vendor_name}</option>
      ))}
      </select>
      <select
      value={vPayFilterType}
      onChange={(e) => setVPayFilterType(e.target.value)}
      style={{ maxWidth: 160 }}
      >
      <option value="">All Types</option>
      <option value="advance">Advance</option>
      <option value="labour">Labour</option>
      <option value="material">Material</option>
      <option value="contract">Contract</option>
      </select>
      <input
      type="date"
      value={vPayFilterFrom}
      onChange={(e) => setVPayFilterFrom(e.target.value)}
      placeholder="From Date"
      />
      <input
      type="date"
      value={vPayFilterTo}
      onChange={(e) => setVPayFilterTo(e.target.value)}
      placeholder="To Date"
      />
      </div>

      <table>
      <thead>
      <tr>
      <th>Date</th>
      <th>Service Provider</th>
      <th>Type</th>
      <th>Amount</th>
      <th>Advance Payment</th>
      <th>Balance</th>
      <th>Mode</th>
      <th>Note</th>
      <th style={{ textAlign: 'right' }}>Actions</th>
      </tr>
      </thead>
      <tbody>
      {vendorPaymentsList.map((p) => {
      const pv = projectVendors.find((v) => Number(v.id) === Number(p.project_vendor_id));
      const bal = Number(pv?.balance_due ?? pv?.balance ?? (Number(pv?.total_earned ?? pv?.earned ?? 0) - Number(pv?.total_paid ?? pv?.paid ?? 0)));
      const isAdvance = p.payment_type === 'advance';
      return (
        <tr
          key={p.id}
          className="clickable-row"
          onClick={() => {
            if (pv) openVendorDetail(pv);
          }}
          title="Click to open contractor detail page"
        >
          <td>{p.payment_date ? String(p.payment_date).slice(0, 10) : '—'}</td>
          <td><b>{p.vendor_name}</b></td>
          <td>
            <span
              className="badge badge-active"
              style={{
                textTransform: 'capitalize',
                background: isAdvance ? '#dcfce7' : undefined,
                color: isAdvance ? '#15803d' : undefined,
                fontWeight: isAdvance ? 700 : undefined,
              }}
            >
              {p.payment_type}
            </span>
          </td>
          <td style={{ fontWeight: 700, color: '#16a34a' }}>{INR(p.amount)}</td>
          <td>
            {isAdvance ? (
              <span className="badge badge-active" style={{ background: '#dcfce7', color: '#15803d', fontWeight: 700, whiteSpace: 'nowrap' }}>
                Advance: {INR(p.amount)}
              </span>
            ) : (
              <span style={{ color: '#94a3b8' }}>—</span>
            )}
          </td>
          <td>
            {bal < 0 ? (
              <span className="badge badge-active" style={{ background: '#dcfce7', color: '#15803d', fontWeight: 700, whiteSpace: 'nowrap' }}>
                Advance: {INR(Math.abs(bal))}
              </span>
            ) : bal > 0 ? (
              <span style={{ fontWeight: 700, color: '#ea580c', whiteSpace: 'nowrap' }}>
                Due: {INR(bal)}
              </span>
            ) : (
              <span style={{ color: '#64748b', fontWeight: 600 }}>Settled (₹0)</span>
            )}
          </td>
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
                    setEditingVendorPaymentId(p.id);
                    setVendorPaymentForm({
                      project_vendor_id: String(p.project_vendor_id || ''),
                      amount: p.amount,
                      payment_date: p.payment_date ? String(p.payment_date).slice(0, 10) : today(),
                      mode: p.mode || 'bank',
                      payment_type: p.payment_type || 'labour',
                      transaction_reference: p.transaction_reference || '',
                      note: p.note || '',
                    });
                    setModalReadOnly(false);
                    setModalError('');
                    setVendorPaymentModal(true);
                  }}
                >
                  ✏️ Edit
                </button>
                {!isAgent && (
                  <button className="danger" style={{ padding: '4px 8px', fontSize: 12 }} onClick={() => del('vendorPayment', p.id)}>
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
                    setEditingVendorPaymentId(p.id);
                    setVendorPaymentForm({
                      project_vendor_id: String(p.project_vendor_id || ''),
                      amount: p.amount,
                      payment_date: p.payment_date ? String(p.payment_date).slice(0, 10) : today(),
                      mode: p.mode || 'bank',
                      payment_type: p.payment_type || 'labour',
                      transaction_reference: p.transaction_reference || '',
                      note: p.note || '',
                    });
                    setModalReadOnly(true);
                    setModalError('');
                    setVendorPaymentModal(true);
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
      );
      })}
      {vendorPaymentsList.length === 0 && (
      <tr>
        <td colSpan={9} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
          No service provider payments recorded yet.
        </td>
      </tr>
      )}
      </tbody>
      </table>
      </div>
    </>
  );
}
