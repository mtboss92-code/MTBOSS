'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { INR, isSameDayIST, today } from '../../shared';

export default function LaborPaymentsView() {
  const {
    isAgent, setModalReadOnly, projectLabors, laborPaymentsList, laborPaymentFilterLabor,
    setLaborPaymentFilterLabor, laborPaymentFilterFrom, setLaborPaymentFilterFrom, laborPaymentFilterTo,
    setLaborPaymentFilterTo, setLaborPaymentModal, setLaborPaymentForm, setEditingLaborPaymentId,
    setModalError, openLaborDetail, del,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', marginBottom: 12 }}>
      <select
        value={laborPaymentFilterLabor}
        onChange={(e) => setLaborPaymentFilterLabor(e.target.value)}
        style={{ maxWidth: 200 }}
      >
        <option value="">All Laborers</option>
        {projectLabors.map((l) => (
          <option key={l.id} value={l.id}>{l.name} ({l.trade || 'Helper'})</option>
        ))}
      </select>

      <input
        type="date"
        value={laborPaymentFilterFrom}
        onChange={(e) => setLaborPaymentFilterFrom(e.target.value)}
        placeholder="From Date"
        style={{ maxWidth: 150 }}
      />

      <input
        type="date"
        value={laborPaymentFilterTo}
        onChange={(e) => setLaborPaymentFilterTo(e.target.value)}
        placeholder="To Date"
        style={{ maxWidth: 150 }}
      />

      {(laborPaymentFilterLabor || laborPaymentFilterFrom || laborPaymentFilterTo) && (
        <button
          className="muted"
          onClick={() => {
            setLaborPaymentFilterLabor('');
            setLaborPaymentFilterFrom('');
            setLaborPaymentFilterTo('');
          }}
        >
          Clear Filters
        </button>
      )}
      </div>

      <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Laborer</th>
          <th>Trade</th>
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
        {laborPaymentsList.map((p) => {
          const lab = projectLabors.find((l) => Number(l.id) === Number(p.labor_id));
          const balVal = Number(lab?.balance_due ?? (Number(lab?.total_earned || 0) - Number(lab?.total_paid || 0)));
          const isAdvancePay = p.payment_type === 'advance';
          return (
            <tr
              key={p.id}
              className="clickable-row"
              onClick={() => {
                if (lab) openLaborDetail(lab);
              }}
              title="Click to open laborer detail page"
            >
              <td>{p.payment_date ? String(p.payment_date).slice(0, 10) : '—'}</td>
              <td><b>{p.labor_name}</b></td>
              <td>{p.trade || '—'}</td>
              <td>
                <span
                  className="badge badge-active"
                  style={{
                    textTransform: 'capitalize',
                    background: isAdvancePay ? '#dcfce7' : undefined,
                    color: isAdvancePay ? '#15803d' : undefined,
                    fontWeight: isAdvancePay ? 700 : undefined,
                  }}
                >
                  {p.payment_type || 'wage'}
                </span>
              </td>
              <td style={{ fontWeight: 700, color: '#16a34a' }}>{INR(p.amount)}</td>
              <td>
                {isAdvancePay ? (
                  <span className="badge badge-active" style={{ background: '#dcfce7', color: '#15803d', fontWeight: 700, whiteSpace: 'nowrap' }}>
                    Advance: {INR(p.amount)}
                  </span>
                ) : (
                  <span style={{ color: '#94a3b8' }}>—</span>
                )}
              </td>
              <td>
                {balVal < 0 ? (
                  <span className="badge badge-active" style={{ background: '#dcfce7', color: '#15803d', fontWeight: 700, whiteSpace: 'nowrap' }}>
                    Advance: {INR(Math.abs(balVal))}
                  </span>
                ) : balVal > 0 ? (
                  <span style={{ fontWeight: 700, color: '#ea580c', whiteSpace: 'nowrap' }}>
                    Due: {INR(balVal)}
                  </span>
                ) : (
                  <span style={{ color: '#64748b', fontWeight: 600 }}>Settled (₹0)</span>
                )}
              </td>
              <td>
                <span className="badge badge-active" style={{ textTransform: 'uppercase', fontSize: 10 }}>
                  {p.mode}
                </span>
              </td>
              <td>
                {p.note || '—'}
                {p.transaction_reference && <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>Ref: {p.transaction_reference}</div>}
              </td>
              <td className="actions" style={{ justifyContent: 'flex-end', display: 'flex', gap: 6 }} onClick={(e) => e.stopPropagation()}>
                {isSameDayIST(p.created_at || p.payment_date) ? (
                  <>
                    <button
                      className="muted"
                      style={{ padding: '4px 8px', fontSize: 12 }}
                      onClick={() => {
                        setLaborPaymentForm({
                          labor_id: p.labor_id,
                          amount: p.amount,
                          payment_date: p.payment_date ? String(p.payment_date).slice(0, 10) : today(),
                          mode: p.mode || 'cash',
                          payment_type: p.payment_type || 'wage',
                          note: p.note || '',
                          transaction_reference: p.transaction_reference || '',
                        });
                        setEditingLaborPaymentId(p.id);
                        setModalReadOnly(false);
                        setModalError('');
                        setLaborPaymentModal(true);
                      }}
                    >
                      ✏️ Edit
                    </button>
                    {!isAgent && (
                      <button className="danger" style={{ padding: '4px 8px', fontSize: 12 }} onClick={() => del('laborPayment', p.id)}>
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
                        setLaborPaymentForm({
                          labor_id: p.labor_id,
                          amount: p.amount,
                          payment_date: p.payment_date ? String(p.payment_date).slice(0, 10) : today(),
                          mode: p.mode || 'cash',
                          payment_type: p.payment_type || 'wage',
                          note: p.note || '',
                          transaction_reference: p.transaction_reference || '',
                        });
                        setEditingLaborPaymentId(p.id);
                        setModalReadOnly(true);
                        setModalError('');
                        setLaborPaymentModal(true);
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
        {laborPaymentsList.length === 0 && (
          <tr>
            <td colSpan={10} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
              No labor payments recorded yet. Click &ldquo;+ Record Labor Payment&rdquo; above.
            </td>
          </tr>
        )}
      </tbody>
      </table>
      </div>
    </>
  );
}
