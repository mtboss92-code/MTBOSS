'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { formatDateIST, isSameDayIST, INR } from '../../shared';

export default function LaborAttendanceHistory() {
  const {
    projectLaborAttendanceHistory, projectLabors, setAttendanceDetailModal, openLaborDetail,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div style={{ marginTop: 24, borderTop: '1px solid #e2e8f0', paddingTop: 16 }}>
        <h4 style={{ margin: '0 0 10px', fontSize: 15, display: 'flex', alignItems: 'center', gap: 6 }}>
          📋 Labor Attendance History
          <span style={{ fontSize: 12, color: '#64748b', fontWeight: 400 }}>
            ({projectLaborAttendanceHistory.length} records)
          </span>
        </h4>
        {projectLaborAttendanceHistory.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Labor Name</th>
                <th>Trade</th>
                <th>Status</th>
                <th>Wage Amount</th>
                <th>Marked By</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projectLaborAttendanceHistory.map((h, i) => {
                const dateStr = formatDateIST(h.attendance_date);
                const isTodayEntry = isSameDayIST(h.attendance_date || h.created_at);
                return (
                  <tr
                    key={h.id || i}
                    className="clickable-row"
                    onClick={() => {
                      const lab = projectLabors.find((l) => Number(l.id) === Number(h.labor_id));
                      if (lab) openLaborDetail(lab);
                    }}
                    title="Click to view worker details"
                  >
                    <td><b>{dateStr}</b></td>
                    <td>{h.labor_name}</td>
                    <td>{h.trade || 'Helper'}</td>
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <span className={`badge badge-${h.status === 'present' ? 'active' : h.status === 'half_day' ? 'warning' : 'danger'}`}>
                          {h.status === 'present' ? 'Present' : h.status === 'half_day' ? 'Half Day' : 'Absent'}
                          {h.shift_type && h.shift_type !== 'day' ? ` • ${h.shift_type === 'double' ? '⚡ Double' : '🌙 Night'}` : ''}
                        </span>
                        {Number(h.overtime_hours || 0) > 0 && (
                          <span style={{ fontSize: 10, color: '#0284c7', fontWeight: 600 }}>
                            ⏱️ +{h.overtime_hours} hrs OT
                          </span>
                        )}
                      </div>
                    </td>
                    <td style={{ fontWeight: 600, color: '#22c55e' }}>{INR(h.wage_amount)}</td>
                    <td style={{ fontSize: 12, color: '#64748b' }}>{h.created_by || '—'}</td>
                    <td onClick={(e) => e.stopPropagation()}>
                      {isTodayEntry ? (
                        <button
                          type="button"
                          className="active-btn"
                          style={{ padding: '4px 10px', fontSize: 12, background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}
                          onClick={() => {
                            const lab = projectLabors.find((l) => Number(l.id) === Number(h.labor_id));
                            const dailyRate = Number(lab?.daily_rate || h.daily_rate || 0);
                            setAttendanceDetailModal({
                              type: 'labor',
                              isToday: true,
                              labor_id: h.labor_id,
                              labor_name: h.labor_name || lab?.name || 'Worker',
                              trade: h.trade || lab?.trade || 'Helper',
                              daily_rate: dailyRate,
                              attendance_date: dateStr,
                              status: h.status || 'present',
                              shift_type: h.shift_type || 'day',
                              overtime_hours: Number(h.overtime_hours || 0),
                              wage_amount: Number(h.wage_amount || 0),
                              note: h.note || '',
                              marked_by: h.created_by || '—',
                            });
                          }}
                        >
                          ✏️ Edit Attendance
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="muted"
                          style={{ padding: '4px 10px', fontSize: 12, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4 }}
                          onClick={() => {
                            const lab = projectLabors.find((l) => Number(l.id) === Number(h.labor_id));
                            setAttendanceDetailModal({
                              type: 'labor',
                              isToday: false,
                              labor_id: h.labor_id,
                              labor_name: h.labor_name || lab?.name || 'Worker',
                              trade: h.trade || lab?.trade || 'Helper',
                              daily_rate: Number(lab?.daily_rate || h.daily_rate || 0),
                              attendance_date: dateStr,
                              status: h.status || 'present',
                              shift_type: h.shift_type || 'day',
                              overtime_hours: Number(h.overtime_hours || 0),
                              wage_amount: Number(h.wage_amount || 0),
                              note: h.note || '',
                              marked_by: h.created_by || '—',
                            });
                          }}
                        >
                          👁️ View (Read Only)
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p style={{ color: '#64748b', fontSize: 13, margin: '8px 0' }}>
            No labor attendance recorded yet for this project.
          </p>
        )}
      </div>
    </>
  );
}
