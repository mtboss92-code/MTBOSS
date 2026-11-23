'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { computeVendorWage, INR, formatDateIST, isSameDayIST } from '../../shared';

export default function VendorAttendanceView() {
  const {
    projectVendors, attendanceRows, setAttendanceRows, projectVendorAttendanceHistory,
    setAttendanceDetailModal, openVendorDetail,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '8px 0 16px', borderRadius: 8, border: '1px solid #e2e8f0' }}>
          <table style={{ minWidth: 1060, width: '100%', borderCollapse: 'collapse', margin: 0 }}>
            <thead>
              <tr style={{ background: '#f8fafc' }}>
                <th style={{ minWidth: 170, whiteSpace: 'nowrap' }}>Service Provider (Daily Wage)</th>
                <th style={{ minWidth: 110, whiteSpace: 'nowrap' }}>Trade</th>
                <th style={{ minWidth: 200, whiteSpace: 'nowrap' }}>Status</th>
                <th style={{ minWidth: 140, whiteSpace: 'nowrap' }}>Shift</th>
                <th style={{ minWidth: 90, whiteSpace: 'nowrap' }}>Workers Count</th>
                <th style={{ minWidth: 120, whiteSpace: 'nowrap' }}>Overtime (OT)</th>
                <th style={{ minWidth: 110, whiteSpace: 'nowrap' }}>Rate / Worker</th>
                <th style={{ minWidth: 110, whiteSpace: 'nowrap' }}>Wage Amount</th>
                <th style={{ minWidth: 140, whiteSpace: 'nowrap' }}>Note</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRows.map((row, idx) => (
                <tr key={row.project_vendor_id}>
                  <td>
                    <b>{row.vendor_name}</b>
                    {row.has_linked_labor && (
                      <div style={{ fontSize: 11, color: '#1d4ed8', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '2px 6px', borderRadius: 4, display: 'inline-block', marginTop: 3 }}>
                        👥 Has Team
                      </div>
                    )}
                  </td>
                  <td>{row.trade || '—'}</td>
                  <td>
                    <div style={{ display: 'flex', gap: 4, whiteSpace: 'nowrap' }}>
                      {['present', 'half_day', 'absent'].map((st) => (
                        <button
                          key={st}
                          type="button"
                          onClick={() => {
                            const next = [...attendanceRows];
                            next[idx].status = st;
                            next[idx].dirty = true;
                            next[idx].wage_amount = computeVendorWage(next[idx].workers_count, next[idx].rate_per_worker, st, next[idx].shift_type, next[idx].overtime_hours);
                            setAttendanceRows(next);
                          }}
                          className={row.status === st ? 'active-btn' : 'muted'}
                          style={{
                            padding: '4px 8px',
                            fontSize: 11,
                            borderRadius: 4,
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
                      disabled={row.status === 'absent'}
                      value={row.shift_type || 'day'}
                      onChange={(e) => {
                        const val = e.target.value;
                        const next = [...attendanceRows];
                        next[idx].shift_type = val;
                        next[idx].dirty = true;
                        if (!next[idx].status || next[idx].status === 'absent') {
                          next[idx].status = 'present';
                        }
                        next[idx].wage_amount = computeVendorWage(next[idx].workers_count, next[idx].rate_per_worker, next[idx].status, val, next[idx].overtime_hours);
                        setAttendanceRows(next);
                      }}
                      style={{
                        padding: '5px 8px',
                        fontSize: 12,
                        borderRadius: 6,
                        background: row.shift_type === 'night' ? '#0f172a' : row.shift_type === 'double' ? '#fef3c7' : '#ffffff',
                        color: row.shift_type === 'night' ? '#f8fafc' : row.shift_type === 'double' ? '#92400e' : '#0f172a',
                        fontWeight: row.shift_type && row.shift_type !== 'day' ? 700 : 500,
                        border: '1px solid #cbd5e1',
                        width: '100%',
                        minWidth: 125,
                        cursor: row.status === 'absent' ? 'not-allowed' : 'pointer',
                        opacity: row.status === 'absent' ? 0.6 : 1,
                      }}
                    >
                      <option value="day">☀️ Day (1x)</option>
                      <option value="night">🌙 Night (1x)</option>
                      <option value="double">⚡ Double (2x)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0.5"
                      step="0.5"
                      value={row.workers_count}
                      onChange={(e) => {
                        const next = [...attendanceRows];
                        next[idx].workers_count = e.target.value;
                        next[idx].dirty = true;
                        if (!next[idx].status && Number(e.target.value) > 0) {
                          next[idx].status = 'present';
                        }
                        next[idx].wage_amount = computeVendorWage(e.target.value, next[idx].rate_per_worker, next[idx].status, next[idx].shift_type, next[idx].overtime_hours);
                        setAttendanceRows(next);
                      }}
                      style={{ width: 65, padding: '5px 8px', fontSize: 12, borderRadius: 4, border: '1px solid #cbd5e1' }}
                    />
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <input
                        type="number"
                        min="0"
                        max="16"
                        step="0.5"
                        disabled={row.status === 'absent'}
                        value={row.overtime_hours !== undefined ? row.overtime_hours : 0}
                        onChange={(e) => {
                          const val = Math.max(0, Number(e.target.value || 0));
                          const next = [...attendanceRows];
                          next[idx].overtime_hours = val;
                          next[idx].dirty = true;
                          if (!next[idx].status || next[idx].status === 'absent') {
                            next[idx].status = 'present';
                          }
                          next[idx].wage_amount = computeVendorWage(next[idx].workers_count, next[idx].rate_per_worker, next[idx].status, next[idx].shift_type, val);
                          setAttendanceRows(next);
                        }}
                        style={{
                          width: 55,
                          padding: '5px 8px',
                          fontSize: 12,
                          textAlign: 'center',
                          borderRadius: 4,
                          border: '1px solid #cbd5e1',
                          cursor: row.status === 'absent' ? 'not-allowed' : 'text',
                          opacity: row.status === 'absent' ? 0.6 : 1,
                        }}
                      />
                      <span style={{ fontSize: 11, color: '#64748b' }}>hrs</span>
                    </div>
                    {Number(row.overtime_hours || 0) > 0 && (
                      <span style={{ fontSize: 10, color: '#0284c7', fontWeight: 600, display: 'block', marginTop: 2 }}>
                        +{INR(Math.round(Number(row.workers_count || 1) * Number(row.overtime_hours) * (Number(row.rate_per_worker || 0) / 8)))}
                      </span>
                    )}
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      value={row.rate_per_worker}
                      onChange={(e) => {
                        const next = [...attendanceRows];
                        next[idx].rate_per_worker = e.target.value;
                        next[idx].dirty = true;
                        next[idx].wage_amount = computeVendorWage(next[idx].workers_count, e.target.value, next[idx].status, next[idx].shift_type, next[idx].overtime_hours);
                        setAttendanceRows(next);
                      }}
                      style={{ width: 85, padding: '5px 8px', fontSize: 12, borderRadius: 4, border: '1px solid #cbd5e1' }}
                    />
                  </td>
                  <td style={{ fontWeight: 700, color: '#16a34a' }}>
                    <div>{INR(row.wage_amount)}</div>
                    {row.status !== 'absent' && (row.shift_type === 'double' || Number(row.overtime_hours || 0) > 0) && (
                      <div style={{ fontSize: 10, color: '#64748b', fontWeight: 400, marginTop: 2 }}>
                        {row.shift_type === 'double' ? '2x Shift' : '1x Base'}
                        {Number(row.overtime_hours || 0) > 0 ? ` + ${row.overtime_hours}h OT` : ''}
                      </div>
                    )}
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Note..."
                      value={row.note || ''}
                      onChange={(e) => {
                        const next = [...attendanceRows];
                        next[idx].note = e.target.value;
                        setAttendanceRows(next);
                      }}
                      style={{ width: 140, padding: '5px 8px', fontSize: 12, borderRadius: 4, border: '1px solid #cbd5e1' }}
                    />
                  </td>
                </tr>
              ))}
              {attendanceRows.length === 0 && (
                <tr>
                  <td colSpan={9} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                    No daily-wage vendors assigned to this project. Assign a daily wage vendor under the &ldquo;Vendors&rdquo; tab.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      {/* Contractors Attendance History Log */}
      <div style={{ marginTop: 24, borderTop: '1px solid #e2e8f0', paddingTop: 16 }}>
      <h4 style={{ margin: '0 0 10px', fontSize: 15, display: 'flex', alignItems: 'center', gap: 6 }}>
      📋 Contractors Attendance History
      <span style={{ fontSize: 12, color: '#64748b', fontWeight: 400 }}>
      ({projectVendorAttendanceHistory.length} records)
      </span>
      </h4>
      {projectVendorAttendanceHistory.length > 0 ? (
      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '8px 0 16px', borderRadius: 8, border: '1px solid #e2e8f0' }}>
      <table style={{ minWidth: 920, width: '100%', borderCollapse: 'collapse', margin: 0 }}>
        <thead>
          <tr style={{ background: '#f8fafc' }}>
            <th style={{ minWidth: 100 }}>Date</th>
            <th style={{ minWidth: 140 }}>Vendor</th>
            <th style={{ minWidth: 100 }}>Trade</th>
            <th style={{ minWidth: 160 }}>Status</th>
            <th style={{ minWidth: 80 }}>Workers</th>
            <th style={{ minWidth: 100 }}>Rate / Worker</th>
            <th style={{ minWidth: 100 }}>Wage Amount</th>
            <th style={{ minWidth: 130 }}>Marked By</th>
            <th style={{ minWidth: 110 }}>Action</th>
          </tr>
        </thead>
      <tbody>
        {projectVendorAttendanceHistory.map((h, i) => {
          const dateStr = formatDateIST(h.attendance_date);
          const isToday = isSameDayIST(h.attendance_date || h.created_at);
          return (
            <tr
              key={h.id || i}
              className="clickable-row"
              onClick={() => {
                const pv = projectVendors.find((v) => Number(v.id) === Number(h.project_vendor_id));
                if (pv) openVendorDetail(pv);
              }}
              title="Click to open contractor detail page"
            >
              <td><b>{dateStr}</b></td>
              <td>{h.vendor_name}</td>
              <td>{h.trade || '—'}</td>
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
              <td>{h.workers_count || 1}</td>
              <td>{INR(h.rate_per_worker)}</td>
              <td style={{ fontWeight: 600, color: '#16a34a' }}>{INR(h.wage_amount)}</td>
              <td style={{ fontSize: 12, color: '#64748b' }}>{h.created_by || '—'}</td>
              <td onClick={(e) => e.stopPropagation()}>
                {isToday ? (
                  <button
                    type="button"
                    className="active-btn"
                    style={{ padding: '4px 10px', fontSize: 12, background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}
                    onClick={() => {
                      setAttendanceDetailModal({
                        type: 'vendor',
                        isToday: true,
                        project_vendor_id: h.project_vendor_id,
                        vendor_name: h.vendor_name || 'Vendor',
                        trade: h.trade || '—',
                        attendance_date: dateStr,
                        status: h.status || 'present',
                        shift_type: h.shift_type || 'day',
                        overtime_hours: Number(h.overtime_hours || 0),
                        workers_count: Number(h.workers_count || 1),
                        rate_per_worker: Number(h.rate_per_worker || 0),
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
                      setAttendanceDetailModal({
                        type: 'vendor',
                        isToday: false,
                        project_vendor_id: h.project_vendor_id,
                        vendor_name: h.vendor_name || 'Vendor',
                        trade: h.trade || '—',
                        attendance_date: dateStr,
                        status: h.status || 'present',
                        shift_type: h.shift_type || 'day',
                        overtime_hours: Number(h.overtime_hours || 0),
                        workers_count: Number(h.workers_count || 1),
                        rate_per_worker: Number(h.rate_per_worker || 0),
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
      </div>
      ) : (
      <p style={{ color: '#64748b', fontSize: 13, margin: '8px 0' }}>
      No attendance recorded yet for this project.
      </p>
      )}
      </div>
      </div>
    </>
  );
}
