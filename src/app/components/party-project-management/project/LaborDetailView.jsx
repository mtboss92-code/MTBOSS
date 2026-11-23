'use client';

import { usePm } from '../PmContext';
import { api } from '../api';
import pmStyles from '../pmStyles';
import { INR, isSameDayIST, today } from '../shared';

export default function LaborDetailView() {
  const {
    isAgent, isSupervisor, setModalReadOnly, selectedLabor, setSelectedLabor, setLaborPaymentModal,
    setLaborPaymentForm, setEditingLaborPaymentId, laborCalendarMonth, setLaborCalendarMonth,
    laborAttendanceHistory, setLaborAttendanceHistory, laborPaymentsHistory, setModalError, del,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <button className="muted" onClick={() => setSelectedLabor(null)}>
            &larr; Back to Project Overview
          </button>

        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h3 style={{ margin: 0, fontSize: 18 }}>{selectedLabor.name}</h3>
          <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: 13 }}>
            Trade: <b>{selectedLabor.trade || 'Helper'}</b> &bull; Rate: <b>{INR(selectedLabor.daily_rate)}/day</b> &bull; Contractor:{' '}
            <b>{selectedLabor.vendor_name ? selectedLabor.vendor_name : 'Independent (Direct Worker)'}</b>
            {selectedLabor.phone ? ` • Phone: ${selectedLabor.phone}` : ''}
          </p>
          <div className="stats" style={{ marginTop: 12 }}>
            <div className="stat">
              <small>Total Earned</small>
              <b>{INR(selectedLabor.total_earned)}</b>
            </div>
            {!isSupervisor && (
              <>
                <div className="stat">
                  <small>Total Paid</small>
                  <b style={{ color: '#16a34a' }}>{INR(selectedLabor.total_paid)}</b>
                </div>
                <div className="stat">
                  <small>Balance</small>
                  {(() => {
                    const bal = Number(selectedLabor.balance_due ?? (Number(selectedLabor.total_earned || 0) - Number(selectedLabor.total_paid || 0)));
                    if (bal > 0) return <b style={{ color: '#ea580c' }}>Due: {INR(bal)}</b>;
                    if (bal < 0) return <span className="badge badge-active" style={{ background: '#dcfce7', color: '#15803d', fontWeight: 700, fontSize: 13, padding: '3px 8px' }}>Advance: {INR(Math.abs(bal))}</span>;
                    return <b style={{ color: '#64748b' }}>Settled (₹0)</b>;
                  })()}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Monthly Attendance Calendar */}
        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <h4 style={{ margin: 0, fontSize: 15 }}>Attendance Calendar</h4>
            <input
              type="month"
              value={laborCalendarMonth}
              onChange={(e) => {
                setLaborCalendarMonth(e.target.value);
                api(`/api/admin/project-management/labor/attendance?laborId=${selectedLabor.id}&month=${e.target.value}`)
                  .then((r) => setLaborAttendanceHistory(r.data || []))
                  .catch(() => {});
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: 14, marginBottom: 12, fontSize: 12 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 12, height: 12, background: '#22c55e', borderRadius: 2 }} /> Present (1.0)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 12, height: 12, background: '#eab308', borderRadius: 2 }} /> Half Day (0.5)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 12, height: 12, background: '#ef4444', borderRadius: 2 }} /> Absent (0.0)
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(65px, 1fr))', gap: 6 }}>
            {Array.from({ length: 31 }).map((_, i) => {
              const dayStr = String(i + 1).padStart(2, '0');
              const dKey = `${laborCalendarMonth}-${dayStr}`;
              const match = laborAttendanceHistory.find((a) => a.attendance_date?.slice(0, 10) === dKey);
              let bg = '#f8fafc';
              let color = '#94a3b8';
              if (match) {
                if (match.status === 'present') { bg = '#dcfce7'; color = '#15803d'; }
                else if (match.status === 'half_day') { bg = '#fef9c3'; color = '#a16207'; }
                else if (match.status === 'absent') { bg = '#fee2e2'; color = '#b91c1c'; }
              }
              return (
                <div
                  key={dKey}
                  style={{
                    background: bg,
                    color,
                    padding: '8px 4px',
                    textAlign: 'center',
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div>{i + 1}</div>
                  <div style={{ fontSize: 9, marginTop: 2 }}>{match ? match.status : '—'}</div>
                  {match && match.wage_amount > 0 && (
                    <div style={{ fontSize: 9, marginTop: 1, color: '#16a34a' }}>{INR(match.wage_amount)}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Labor Payment History */}
        {!isSupervisor && (
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <h4 style={{ margin: 0, fontSize: 15 }}>Payment History</h4>

            </div>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Advance Payment</th>
                  <th>Mode</th>
                  <th>Note</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {laborPaymentsHistory.map((p) => {
                  const isAdvance = p.payment_type === 'advance';
                  return (
                    <tr key={p.id}>
                      <td>{p.payment_date ? String(p.payment_date).slice(0, 10) : '—'}</td>
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
                          {p.payment_type || 'wage'}
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
                        <span className="badge badge-active" style={{ textTransform: 'uppercase', fontSize: 10 }}>
                          {p.mode}
                        </span>
                      </td>
                      <td>
                        {p.note || '—'}
                        {p.transaction_reference && <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>Ref: {p.transaction_reference}</div>}
                      </td>
                      <td className="actions" style={{ justifyContent: 'flex-end', display: 'flex', gap: 6 }}>
                        {isSameDayIST(p.created_at || p.payment_date) ? (
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
                                setModalReadOnly(false);
                                setModalError('');
                                setLaborPaymentModal(true);
                              }}
                            >
                              ✏️ Edit
                            </button>
                            {!isAgent && (
                              <button
                                className="danger"
                                style={{ padding: '4px 8px', fontSize: 12 }}
                                onClick={() => del('laborPayment', p.id)}
                              >
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
                {laborPaymentsHistory.length === 0 && (
                  <tr>
                    <td colSpan={7} style={{ textAlign: 'center', padding: '1.5rem', color: '#64748b' }}>
                      No payments recorded yet for this worker.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
