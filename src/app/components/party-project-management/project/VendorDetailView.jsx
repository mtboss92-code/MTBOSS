'use client';

import { usePm } from '../PmContext';
import { api } from '../api';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function VendorDetailView() {
  const {
    isAgent, isSupervisor, hasAgentPayment, setAttendanceSubTab, handleSectionChange, selectedVendor,
    setSelectedVendor, vendorAttendanceHistory, setVendorAttendanceHistory, vendorPaymentsHistory,
    vendorMaterialHistory, calendarMonth, setCalendarMonth, setSupplyModal, projectLabors,
    setAddLaborModal, setEditingLaborId, setLaborForm, setLockedContractorId, setLaborAttendanceSection,
    setAttendanceContractorFilter, setModalError, stockRows, openLaborDetail, openMaterialTimeline,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <button className="muted" onClick={() => setSelectedVendor(null)}>
            &larr; Back to Project Overview
          </button>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setSupplyModal(true)}>
              + Record Material Supply
            </button>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h3 style={{ margin: 0, fontSize: 18 }}>{selectedVendor.vendor_name}</h3>
          <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: 13 }}>
            Trade: <b>{selectedVendor.trade}</b> &bull; Work: {selectedVendor.work_description} &bull; Type: <b>{selectedVendor.pay_type}</b>
          </p>
          {(!isAgent || hasAgentPayment) && (
            <div className="stats" style={{ marginTop: 12 }}>
              <div className="stat">
                <small>Total Earned</small>
                <b>{INR(selectedVendor.total_earned ?? selectedVendor.earned)}</b>
              </div>
              {!isSupervisor && (
                <>
                  <div className="stat">
                    <small>Total Paid</small>
                    <b style={{ color: '#16a34a' }}>{INR(selectedVendor.total_paid ?? selectedVendor.paid)}</b>
                  </div>
                  <div className="stat">
                    <small>Balance</small>
                    {(() => {
                      const bal = Number(selectedVendor.balance_due ?? selectedVendor.balance ?? (Number(selectedVendor.total_earned ?? selectedVendor.earned ?? 0) - Number(selectedVendor.total_paid ?? selectedVendor.paid ?? 0)));
                      if (bal > 0) return <b style={{ color: '#ea580c' }}>Due: {INR(bal)}</b>;
                      if (bal < 0) return <span className="badge badge-active" style={{ background: '#dcfce7', color: '#15803d', fontWeight: 700, fontSize: 13, padding: '3px 8px' }}>Advance: {INR(Math.abs(bal))}</span>;
                      return <b style={{ color: '#64748b' }}>Settled (₹0)</b>;
                    })()}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Contractor Team & Assigned Workers */}
        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
            <div>
              <h4 style={{ margin: 0, fontSize: 15 }}>👥 Assigned Team Members ({projectLabors.filter((l) => String(l.project_vendor_id) === String(selectedVendor.id)).length})</h4>
              <p style={{ margin: '3px 0 0', color: '#64748b', fontSize: 12 }}>Workers working under this contractor. Click any row to view worker details.</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                type="button"
                onClick={() => {
                  setLaborForm({
                    name: '',
                    phone: '',
                    trade: selectedVendor.trade || '',
                    project_vendor_id: String(selectedVendor.id),
                    daily_rate: '',
                    is_active: true,
                  });
                  setLockedContractorId(String(selectedVendor.id));
                  setEditingLaborId(null);
                  setModalError('');
                  setAddLaborModal(true);
                }}
              >
                + Add Worker to Team
              </button>
              <button
                type="button"
                className="muted"
                onClick={() => {
                  setSelectedVendor(null);
                  handleSectionChange('attendance');
                  setAttendanceSubTab('labor');
                  setLaborAttendanceSection('contractor');
                  setAttendanceContractorFilter(String(selectedVendor.id));
                }}
              >
                📅 Team Attendance
              </button>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Worker Name</th>
                <th>Trade</th>
                <th>Daily Rate</th>
                <th>Days Present</th>
                <th>Total Earned</th>
                {!isSupervisor && <th>Total Paid</th>}
                {!isSupervisor && <th>Balance</th>}
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projectLabors
                .filter((l) => String(l.project_vendor_id) === String(selectedVendor.id))
                .map((lab) => {
                  const bal = Number(lab.balance_due ?? (Number(lab.total_earned || 0) - Number(lab.total_paid || 0)));
                  return (
                    <tr
                      key={lab.id}
                      className="clickable-row"
                      onClick={() => openLaborDetail(lab)}
                      title="Click to view worker details and attendance calendar"
                    >
                      <td>
                        <b>{lab.name}</b>
                        {lab.phone && <span style={{ fontSize: 11, color: '#64748b', display: 'block' }}>{lab.phone}</span>}
                      </td>
                      <td>{lab.trade || 'Helper'}</td>
                      <td style={{ fontWeight: 600 }}>{INR(lab.daily_rate)}/day</td>
                      <td>{lab.days_present || 0}</td>
                      <td style={{ fontWeight: 600, color: '#16a34a' }}>{INR(lab.total_earned)}</td>
                      {!isSupervisor && (
                        <>
                          <td style={{ fontWeight: 600, color: '#16a34a' }}>{INR(lab.total_paid)}</td>
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
                        </>
                      )}
                      <td>
                        <span className={`badge ${lab.is_active ? 'badge-active' : 'badge-completed'}`}>
                          {lab.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="actions" style={{ justifyContent: 'flex-end' }} onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          className="muted"
                          onClick={() => openLaborDetail(lab)}
                        >
                          View Details &rarr;
                        </button>
                      </td>
                    </tr>
                  );
                })}
              {projectLabors.filter((l) => String(l.project_vendor_id) === String(selectedVendor.id)).length === 0 && (
                <tr>
                  <td colSpan={isSupervisor ? 7 : 9} style={{ textAlign: 'center', padding: '1.5rem', color: '#64748b' }}>
                    No laborers added for this contractor yet. Click &ldquo;+ Add Worker to Team&rdquo; above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Monthly Attendance Calendar */}
        {selectedVendor.pay_type === 'daily_wage' && (
          <div className="card" style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <h4 style={{ margin: 0, fontSize: 15 }}>Attendance Calendar</h4>
              <input
                type="month"
                value={calendarMonth}
                onChange={(e) => {
                  setCalendarMonth(e.target.value);
                  api(`/api/admin/project-management/attendance?projectVendorId=${selectedVendor.id}&month=${e.target.value}`)
                    .then((r) => setVendorAttendanceHistory(r.data || []))
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
                const dKey = `${calendarMonth}-${dayStr}`;
                const match = vendorAttendanceHistory.find((a) => a.attendance_date?.slice(0, 10) === dKey);
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
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Vendor Material Supply History */}
        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <h4 style={{ margin: 0, fontSize: 15 }}>Material Supply History</h4>
            <button onClick={() => setSupplyModal(true)}>+ Add Supply</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Rate</th>
                <th>Amount</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {vendorMaterialHistory.map((m) => (
                <tr
                  key={m.id}
                  className={m.material_id ? 'clickable-row' : ''}
                  onClick={() => {
                    if (m.material_id) {
                      const mat = stockRows.find((s) => Number(s.id) === Number(m.material_id)) || { id: m.material_id, name: m.item_name, unit: m.unit };
                      openMaterialTimeline(mat);
                    }
                  }}
                  title={m.material_id ? 'Click to view material ledger & transaction timeline' : undefined}
                >
                  <td>{m.supply_date}</td>
                  <td><b>{m.item_name}</b></td>
                  <td>{m.quantity}</td>
                  <td>{m.unit}</td>
                  <td>{INR(m.rate)}</td>
                  <td style={{ fontWeight: 700, color: '#16a34a' }}>{INR(m.amount)}</td>
                  <td>{m.note || '—'}</td>
                </tr>
              ))}
              {vendorMaterialHistory.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '1.5rem', color: '#64748b' }}>
                    No materials recorded for this vendor.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Vendor Payment History */}
        {!isSupervisor && (!isAgent || hasAgentPayment) && (
          <div className="card">
            <h4 style={{ margin: '0 0 12px', fontSize: 15 }}>Payment History</h4>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Advance Payment</th>
                  <th>Mode</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {vendorPaymentsHistory.map((p) => {
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
                      <td style={{ textTransform: 'uppercase', fontSize: 11 }}>{p.mode}</td>
                      <td>{p.note || '—'}</td>
                    </tr>
                  );
                })}
                {vendorPaymentsHistory.length === 0 && (
                  <tr>
                    <td colSpan={6} style={{ textAlign: 'center', padding: '1.5rem', color: '#64748b' }}>
                      No payments recorded yet for this vendor.
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
