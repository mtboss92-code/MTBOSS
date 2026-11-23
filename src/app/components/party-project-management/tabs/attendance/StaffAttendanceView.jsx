'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { isEditableWithin48Hours, INR } from '../../shared';

export default function StaffAttendanceView() {
  const {
    project, staffAttendanceDate, setStaffAttendanceDate, staffDailyAttendance, setStaffDailyAttendance,
    staffAttendanceLoading, projectStaffAttendanceHistory, computeStaffWage, loadStaffAttendance,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      {(() => {
        const isStaffDateToday = isEditableWithin48Hours(staffAttendanceDate);
        return (
          <div>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
              <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700 }}>
                👔 Daily Staff Site Attendance
              </h4>
              <span style={{ fontSize: 12, color: '#94a3b8' }}>
                Marking attendance for active staff on site for {staffAttendanceDate}
              </span>
            </div>

            {staffAttendanceLoading ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>Loading attendance…</div>
            ) : (
              <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '8px 0 16px', borderRadius: 8, border: '1px solid rgba(148,163,184,0.2)' }}>
                <table style={{ minWidth: 1060, width: '100%', borderCollapse: 'collapse', margin: 0 }}>
                  <thead>
                    <tr>
                      <th style={{ minWidth: 170, whiteSpace: 'nowrap' }}>Staff Member</th>
                      <th style={{ minWidth: 120, whiteSpace: 'nowrap' }}>Role</th>
                      <th style={{ minWidth: 200, whiteSpace: 'nowrap' }}>Status</th>
                      <th style={{ minWidth: 140, whiteSpace: 'nowrap' }}>Shift</th>
                      <th style={{ minWidth: 120, whiteSpace: 'nowrap' }}>Overtime (OT)</th>
                      <th style={{ minWidth: 120, whiteSpace: 'nowrap' }}>Rate / Pay</th>
                      <th style={{ minWidth: 110, whiteSpace: 'nowrap' }}>Wage Amount</th>
                      <th style={{ minWidth: 140, whiteSpace: 'nowrap' }}>Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffDailyAttendance.map((row, idx) => (
                      <tr key={row.staff_id}>
                        <td>
                          <b>{row.staff_name}</b>
                          {row.phone && (
                            <div style={{ fontSize: 11, color: '#94a3b8' }}>📞 {row.phone}</div>
                          )}
                        </td>
                        <td>
                          <span className="badge" style={{ background: 'rgba(148,163,184,0.15)', color: '#94a3b8' }}>
                            {row.role}
                          </span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: 4, whiteSpace: 'nowrap' }}>
                            {['present', 'half_day', 'absent'].map((st) => (
                              <button
                                key={st}
                                type="button"
                                disabled={!isStaffDateToday}
                                onClick={() => {
                                  if (!isStaffDateToday) return;
                                  const next = [...staffDailyAttendance];
                                  next[idx].status = st;
                                  next[idx].dirty = true;
                                  next[idx].wage_amount = computeStaffWage(next[idx].salary_rate, next[idx].pay_type, st, next[idx].shift_type, next[idx].overtime_hours);
                                  setStaffDailyAttendance(next);
                                }}
                                className={row.status === st ? 'active-btn' : 'muted'}
                                style={{
                                  padding: '4px 8px',
                                  fontSize: 11,
                                  borderRadius: 4,
                                  cursor: !isStaffDateToday ? 'not-allowed' : 'pointer',
                                  opacity: !isStaffDateToday && row.status !== st ? 0.4 : 1,
                                  fontWeight: row.status === st ? 700 : 500,
                                  background: row.status === st ? (st === 'present' ? '#16a34a' : st === 'half_day' ? '#d97706' : '#dc2626') : undefined,
                                  borderColor: row.status === st ? 'transparent' : undefined,
                                  color: row.status === st ? '#ffffff' : undefined,
                                }}
                              >
                                {st === 'present' ? 'Present' : st === 'half_day' ? 'Half Day' : 'Absent'}
                              </button>
                            ))}
                          </div>
                        </td>
                        <td>
                          <select
                            disabled={!isStaffDateToday || row.status === 'absent'}
                            value={row.shift_type || 'day'}
                            onChange={(e) => {
                              if (!isStaffDateToday) return;
                              const val = e.target.value;
                              const next = [...staffDailyAttendance];
                              next[idx].shift_type = val;
                              next[idx].dirty = true;
                              if (!next[idx].status || next[idx].status === 'absent' || next[idx].status === 'unmarked') {
                                next[idx].status = 'present';
                              }
                              next[idx].wage_amount = computeStaffWage(next[idx].salary_rate, next[idx].pay_type, next[idx].status, val, next[idx].overtime_hours);
                              setStaffDailyAttendance(next);
                            }}
                            style={{
                              padding: '5px 8px',
                              fontSize: 12,
                              borderRadius: 6,
                              width: '100%',
                              minWidth: 125,
                              cursor: (!isStaffDateToday || row.status === 'absent') ? 'not-allowed' : 'pointer',
                              opacity: (!isStaffDateToday || row.status === 'absent') ? 0.6 : 1,
                            }}
                          >
                            <option value="day">☀️ Day (1x)</option>
                            <option value="night">🌙 Night (1x)</option>
                            <option value="double">⚡ Double (2x)</option>
                          </select>
                        </td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <input
                              type="number"
                              min="0"
                              max="16"
                              step="0.5"
                              disabled={!isStaffDateToday || row.status === 'absent'}
                              value={row.overtime_hours !== undefined ? row.overtime_hours : 0}
                              onChange={(e) => {
                                if (!isStaffDateToday) return;
                                const val = Math.max(0, Number(e.target.value || 0));
                                const next = [...staffDailyAttendance];
                                next[idx].overtime_hours = val;
                                next[idx].dirty = true;
                                if (!next[idx].status || next[idx].status === 'absent' || next[idx].status === 'unmarked') {
                                  next[idx].status = 'present';
                                }
                                next[idx].wage_amount = computeStaffWage(next[idx].salary_rate, next[idx].pay_type, next[idx].status, next[idx].shift_type, val);
                                setStaffDailyAttendance(next);
                              }}
                              style={{
                                width: 55,
                                padding: '5px 8px',
                                fontSize: 12,
                                textAlign: 'center',
                                borderRadius: 4,
                                cursor: (!isStaffDateToday || row.status === 'absent') ? 'not-allowed' : 'text',
                                opacity: (!isStaffDateToday || row.status === 'absent') ? 0.6 : 1,
                              }}
                            />
                            <span style={{ fontSize: 11, color: '#94a3b8' }}>hrs</span>
                          </div>
                        </td>
                        <td>
                          <div style={{ fontSize: 12 }}>
                            <b>{INR(row.salary_rate)}</b>
                            <span style={{ color: '#94a3b8', marginLeft: 4 }}>
                              / {row.pay_type === 'per_day' ? 'day' : row.pay_type === 'monthly' ? 'mo' : 'fee'}
                            </span>
                          </div>
                        </td>
                        <td>
                          <b style={{ color: Number(row.wage_amount || 0) > 0 ? '#22c55e' : '#94a3b8' }}>
                            {INR(row.wage_amount || 0)}
                          </b>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="Note..."
                            disabled={!isStaffDateToday}
                            value={row.note || ''}
                            onChange={(e) => {
                              if (!isStaffDateToday) return;
                              const next = [...staffDailyAttendance];
                              next[idx].note = e.target.value;
                              next[idx].dirty = true;
                              setStaffDailyAttendance(next);
                            }}
                            style={{ width: 140, padding: '5px 8px', fontSize: 12, borderRadius: 4, cursor: !isStaffDateToday ? 'not-allowed' : 'text', opacity: !isStaffDateToday ? 0.6 : 1 }}
                          />
                        </td>
                      </tr>
                    ))}
                    {staffDailyAttendance.length === 0 && (
                      <tr>
                        <td colSpan={8} style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>
                          No active staff members assigned to this project to mark attendance. Click &quot;Staff&quot; tab to assign staff.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Staff Attendance History Log */}
          <div style={{ marginTop: 24, borderTop: '1px solid rgba(148,163,184,0.2)', paddingTop: 16 }}>
            <h4 style={{ margin: '0 0 10px', fontSize: 15, display: 'flex', alignItems: 'center', gap: 6 }}>
              📋 Staff Attendance History
              <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 400 }}>
                ({projectStaffAttendanceHistory.length} records)
              </span>
            </h4>
            {projectStaffAttendanceHistory.length > 0 ? (
              <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '8px 0 16px', borderRadius: 8, border: '1px solid rgba(148,163,184,0.2)' }}>
                <table style={{ minWidth: 920, width: '100%', borderCollapse: 'collapse', margin: 0 }}>
                  <thead>
                    <tr>
                      <th style={{ minWidth: 100 }}>Date</th>
                      <th style={{ minWidth: 150 }}>Staff Member</th>
                      <th style={{ minWidth: 110 }}>Role</th>
                      <th style={{ minWidth: 120 }}>Status</th>
                      <th style={{ minWidth: 90 }}>Shift</th>
                      <th style={{ minWidth: 80 }}>Overtime</th>
                      <th style={{ minWidth: 110 }}>Wage Amount</th>
                      <th style={{ minWidth: 120 }}>Marked By</th>
                      <th style={{ minWidth: 140 }}>Note</th>
                      <th style={{ minWidth: 90, textAlign: 'right' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectStaffAttendanceHistory.map((h, i) => (
                      <tr key={h.id || i}>
                        <td>{h.attendance_date ? String(h.attendance_date).slice(0, 10) : '—'}</td>
                        <td>
                          <b>{h.staff_name}</b>
                        </td>
                        <td>
                          <span className="badge" style={{ background: 'rgba(148,163,184,0.15)', color: '#94a3b8' }}>
                            {h.role}
                          </span>
                        </td>
                        <td>
                          <span
                            className="badge"
                            style={{
                              background: h.status === 'present' ? 'rgba(22,163,74,0.2)' : h.status === 'half_day' ? 'rgba(217,119,6,0.2)' : 'rgba(220,38,38,0.2)',
                              color: h.status === 'present' ? '#4ade80' : h.status === 'half_day' ? '#f59e0b' : '#f87171',
                              fontWeight: 600,
                              textTransform: 'capitalize'
                            }}
                          >
                            {h.status === 'present' ? '✅ Present' : h.status === 'half_day' ? '⛅ Half Day' : '❌ Absent'}
                          </span>
                        </td>
                        <td>
                          <span style={{ textTransform: 'capitalize' }}>
                            {h.shift_type === 'double' ? '⚡ Double' : h.shift_type === 'night' ? '🌙 Night' : '☀️ Day'}
                          </span>
                        </td>
                        <td>{Number(h.overtime_hours || 0) > 0 ? `${h.overtime_hours} hrs` : '—'}</td>
                        <td style={{ fontWeight: 600, color: '#22c55e' }}>{INR(h.wage_amount || 0)}</td>
                        <td style={{ fontSize: 12, color: '#94a3b8' }}>{h.created_by || '—'}</td>
                        <td style={{ fontSize: 12, color: '#94a3b8' }}>{h.note || '—'}</td>
                        <td style={{ textAlign: 'right' }}>
                          {isEditableWithin48Hours(String(h.attendance_date).slice(0, 10)) ? (
                            <button
                              type="button"
                              className="active-btn"
                              style={{ padding: '3px 8px', fontSize: 11 }}
                              onClick={() => {
                                const date = String(h.attendance_date).slice(0, 10);
                                setStaffAttendanceDate(date);
                                loadStaffAttendance(project.id, date);
                              }}
                              title="Edit attendance"
                            >
                              ✏️ Edit
                            </button>
                          ) : (
                            <span style={{ fontSize: 11, color: '#94a3b8', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                              🔒 Locked
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p style={{ color: '#94a3b8', fontSize: 13, margin: '8px 0' }}>
                No staff attendance records saved yet for this project.
              </p>
            )}
            </div>
          </div>
        );
      })()}
    </>
  );
}
