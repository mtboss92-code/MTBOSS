'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { isEditableWithin48Hours, INR, computeLaborWage, today } from '../../shared';

export default function LaborAttendanceTable() {
  const {
    laborAttendanceDate, laborAttendanceRows, setLaborAttendanceRows, savingLaborAttendance,
    laborAttendanceSection, attendanceContractorFilter, selectedLaborIds, setSelectedLaborIds,
    applyBulkStatus, saveAllLaborAttendance,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      {(() => {
        const isLaborDateToday = isEditableWithin48Hours(laborAttendanceDate);
        const visibleLaborAttendanceRows = laborAttendanceRows.filter((r) => {
          const isContractor = Boolean(r.project_vendor_id || r.vendor_name);
          if (laborAttendanceSection === 'direct' && isContractor) return false;
          if (laborAttendanceSection === 'contractor' && !isContractor) return false;
          if (laborAttendanceSection === 'contractor' && attendanceContractorFilter && String(r.project_vendor_id) !== String(attendanceContractorFilter)) return false;
          return true;
        });

        const selectedFromVisible = selectedLaborIds.filter((id) =>
          visibleLaborAttendanceRows.some((r) => (r.labor_id || r.id) === id)
        );

        const groups = {};
        laborAttendanceRows.forEach((r) => {
          const isContractor = Boolean(r.project_vendor_id || r.vendor_name);
          if (laborAttendanceSection === 'direct' && isContractor) return;
          if (laborAttendanceSection === 'contractor' && !isContractor) return;
          if (laborAttendanceSection === 'contractor' && attendanceContractorFilter && String(r.project_vendor_id) !== String(attendanceContractorFilter)) return;

          const key = r.vendor_name ? `Vendor: ${r.vendor_name}` : 'Independent (Direct Workers)';
          if (!groups[key]) groups[key] = [];
          groups[key].push(r);
        });

        const groupKeys = Object.keys(groups);
        if (groupKeys.length === 0) {
          return (
            <div style={{ textAlign: 'center', padding: '2.5rem', color: '#64748b' }}>
              {laborAttendanceSection === 'direct'
                ? 'No direct independent laborers found. Add laborers in the Labor tab.'
                : laborAttendanceSection === 'contractor'
                ? 'No contractor laborers found matching the filter.'
                : 'No active laborers found for this project. Add laborers in the Labor tab first.'}
            </div>
          );
        }

        return (
          <div>
            {/* Bulk Action Bar */}
            {false && isLaborDateToday && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  flexWrap: 'wrap',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: 8,
                  padding: '10px 14px',
                  marginBottom: 16,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: 13,
                      userSelect: 'none',
                      margin: 0,
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={
                        visibleLaborAttendanceRows.length > 0 &&
                        visibleLaborAttendanceRows.every((r) => selectedLaborIds.includes(r.labor_id || r.id))
                      }
                      onChange={(e) => {
                        const visibleIds = visibleLaborAttendanceRows.map((r) => r.labor_id || r.id);
                        if (e.target.checked) {
                          setSelectedLaborIds((prev) => Array.from(new Set([...prev, ...visibleIds])));
                        } else {
                          const vSet = new Set(visibleIds);
                          setSelectedLaborIds((prev) => prev.filter((id) => !vSet.has(id)));
                        }
                      }}
                      style={{ width: 16, height: 16, cursor: 'pointer' }}
                    />
                    <span>Select All ({visibleLaborAttendanceRows.length})</span>
                  </label>

                  {selectedFromVisible.length > 0 && (
                    <span
                      style={{
                        fontSize: 12,
                        background: '#e0e7ff',
                        color: '#3730a3',
                        padding: '2px 8px',
                        borderRadius: 12,
                        fontWeight: 700,
                      }}
                    >
                      {selectedFromVisible.length} selected
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 12, color: '#475569', fontWeight: 600 }}>Mark Selected as:</span>
                  <button
                    type="button"
                    disabled={selectedFromVisible.length === 0}
                    onClick={() => applyBulkStatus('present')}
                    style={{
                      padding: '5px 12px',
                      fontSize: 12,
                      background: '#16a34a',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 6,
                      cursor: selectedFromVisible.length === 0 ? 'not-allowed' : 'pointer',
                      fontWeight: 600,
                      opacity: selectedFromVisible.length === 0 ? 0.5 : 1,
                    }}
                  >
                    🟢 Present
                  </button>
                  <button
                    type="button"
                    disabled={selectedFromVisible.length === 0}
                    onClick={() => applyBulkStatus('half_day')}
                    style={{
                      padding: '5px 12px',
                      fontSize: 12,
                      background: '#f59e0b',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 6,
                      cursor: selectedFromVisible.length === 0 ? 'not-allowed' : 'pointer',
                      fontWeight: 600,
                      opacity: selectedFromVisible.length === 0 ? 0.5 : 1,
                    }}
                  >
                    🟡 Half Day
                  </button>
                  <button
                    type="button"
                    disabled={selectedFromVisible.length === 0}
                    onClick={() => applyBulkStatus('absent')}
                    style={{
                      padding: '5px 12px',
                      fontSize: 12,
                      background: '#dc2626',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 6,
                      cursor: selectedFromVisible.length === 0 ? 'not-allowed' : 'pointer',
                      fontWeight: 600,
                      opacity: selectedFromVisible.length === 0 ? 0.5 : 1,
                    }}
                  >
                    🔴 Absent
                  </button>
                  {selectedFromVisible.length > 0 && (
                    <button
                      type="button"
                      className="muted"
                      onClick={() => setSelectedLaborIds([])}
                      style={{ padding: '4px 8px', fontSize: 11 }}
                    >
                      Clear Selection
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Group Worker Tables */}
            {groupKeys.map((grpTitle) => (
              <div key={grpTitle} className="card" style={{ marginBottom: 16 }}>
                <h4 style={{ margin: '0 0 10px', fontSize: 15, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span>{grpTitle.startsWith('Vendor') ? '🏢' : '⚡'}</span>
                  <span>{grpTitle}</span>
                  <span style={{ fontSize: 12, color: '#64748b', fontWeight: 'normal' }}>
                    ({groups[grpTitle].length} {groups[grpTitle].length === 1 ? 'worker' : 'workers'})
                  </span>
                </h4>

                <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '4px 0', borderRadius: 8, border: '1px solid #e2e8f0' }}>
                  <table style={{ minWidth: 980, width: '100%', borderCollapse: 'collapse', margin: 0 }}>
                    <thead>
                      <tr style={{ background: '#f8fafc' }}>
                        <th style={{ width: 40, textAlign: 'center', display: 'none' }}>
                          <input
                            type="checkbox"
                            disabled={!isLaborDateToday}
                            checked={
                              groups[grpTitle].length > 0 &&
                              groups[grpTitle].every((r) => selectedLaborIds.includes(r.labor_id || r.id))
                            }
                            onChange={(e) => {
                              const grpIds = groups[grpTitle].map((r) => r.labor_id || r.id);
                              if (e.target.checked) {
                                setSelectedLaborIds((prev) => Array.from(new Set([...prev, ...grpIds])));
                              } else {
                                const grpSet = new Set(grpIds);
                                setSelectedLaborIds((prev) => prev.filter((id) => !grpSet.has(id)));
                              }
                            }}
                            style={{ cursor: isLaborDateToday ? 'pointer' : 'not-allowed' }}
                          />
                        </th>
                        <th style={{ minWidth: 160, whiteSpace: 'nowrap' }}>Labor Name</th>
                        <th style={{ minWidth: 110, whiteSpace: 'nowrap' }}>Trade</th>
                        <th style={{ minWidth: 105, whiteSpace: 'nowrap' }}>Daily Rate</th>
                        <th style={{ minWidth: 190, whiteSpace: 'nowrap' }}>Status</th>
                        <th style={{ minWidth: 135, whiteSpace: 'nowrap' }}>Shift</th>
                        <th style={{ minWidth: 115, whiteSpace: 'nowrap' }}>Overtime (OT)</th>
                        <th style={{ minWidth: 110, whiteSpace: 'nowrap' }}>Wage Amount</th>
                        <th style={{ minWidth: 130, whiteSpace: 'nowrap' }}>Note</th>
                      </tr>
                    </thead>
                  <tbody>
                    {groups[grpTitle].map((row) => {
                      const rowId = row.labor_id || row.id;
                      const isSelected = selectedLaborIds.includes(rowId);
                      const idx = laborAttendanceRows.findIndex((x) => (x.labor_id || x.id) === rowId);

                      return (
                        <tr
                          key={rowId}
                          style={{
                            background: isSelected ? '#eff6ff' : undefined,
                            transition: 'background 0.15s ease',
                          }}
                        >
                          <td style={{ textAlign: 'center', display: 'none' }}>
                            <input
                              type="checkbox"
                              disabled={!isLaborDateToday}
                              checked={isSelected}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedLaborIds((prev) => [...prev, rowId]);
                                } else {
                                  setSelectedLaborIds((prev) => prev.filter((id) => id !== rowId));
                                }
                              }}
                              style={{ cursor: isLaborDateToday ? 'pointer' : 'not-allowed' }}
                            />
                          </td>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                              <b>{row.name}</b>
                              {row.is_marked && (
                                <span
                                  style={{
                                    fontSize: 10,
                                    padding: '1px 6px',
                                    borderRadius: 4,
                                    background:
                                      row.status === 'present'
                                        ? '#dcfce7'
                                        : row.status === 'half_day'
                                        ? '#fef3c7'
                                        : '#fee2e2',
                                    color:
                                      row.status === 'present'
                                        ? '#166534'
                                        : row.status === 'half_day'
                                        ? '#92400e'
                                        : '#991b1b',
                                    fontWeight: 700,
                                  }}
                                >
                                  Already marked: {row.status === 'present' ? 'Present' : row.status === 'half_day' ? 'Half Day' : 'Absent'}
                                </span>
                              )}
                            </div>
                            {row.phone && <span style={{ fontSize: 11, color: '#64748b', display: 'block' }}>{row.phone}</span>}
                          </td>
                          <td>{row.trade || 'Helper'}</td>
                          <td>{INR(row.daily_rate)}/day</td>
                          <td>
                            <div style={{ display: 'flex', gap: 4 }}>
                              {['present', 'half_day', 'absent'].map((st) => (
                                <button
                                  key={st}
                                  type="button"
                                  disabled={!isLaborDateToday}
                                  onClick={() => {
                                    const next = [...laborAttendanceRows];
                                    next[idx].status = st;
                                    next[idx].dirty = true;
                                    next[idx].wage_amount = computeLaborWage(row.daily_rate, st, row.shift_type || 'day', row.overtime_hours || 0);
                                    setLaborAttendanceRows(next);
                                  }}
                                  className={row.status === st ? 'active-btn' : 'muted'}
                                  style={{
                                    padding: '3px 8px',
                                    fontSize: 11,
                                    cursor: isLaborDateToday ? 'pointer' : 'not-allowed',
                                    opacity: !isLaborDateToday && row.status !== st ? 0.4 : 1,
                                  }}
                                >
                                  {st === 'present' ? 'Present' : st === 'half_day' ? 'Half Day' : 'Absent'}
                                </button>
                              ))}
                            </div>
                          </td>
                          <td>
                            <select
                              disabled={!isLaborDateToday || row.status === 'absent'}
                              value={row.shift_type || 'day'}
                              onChange={(e) => {
                                const val = e.target.value;
                                const next = [...laborAttendanceRows];
                                next[idx].shift_type = val;
                                next[idx].dirty = true;
                                if (!next[idx].status || next[idx].status === 'absent') {
                                  next[idx].status = 'present';
                                }
                                next[idx].wage_amount = computeLaborWage(row.daily_rate, next[idx].status, val, row.overtime_hours || 0);
                                setLaborAttendanceRows(next);
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
                                cursor: !isLaborDateToday || row.status === 'absent' ? 'not-allowed' : 'pointer',
                                opacity: !isLaborDateToday || row.status === 'absent' ? 0.6 : 1,
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
                                disabled={!isLaborDateToday || row.status === 'absent'}
                                value={row.overtime_hours !== undefined ? row.overtime_hours : 0}
                                onChange={(e) => {
                                  const val = Math.max(0, Number(e.target.value || 0));
                                  const next = [...laborAttendanceRows];
                                  next[idx].overtime_hours = val;
                                  next[idx].dirty = true;
                                  if (!next[idx].status || next[idx].status === 'absent') {
                                    next[idx].status = 'present';
                                  }
                                  next[idx].wage_amount = computeLaborWage(row.daily_rate, next[idx].status, row.shift_type || 'day', val);
                                  setLaborAttendanceRows(next);
                                }}
                                style={{
                                  width: 55,
                                  padding: '5px 8px',
                                  fontSize: 12,
                                  textAlign: 'center',
                                  borderRadius: 4,
                                  border: '1px solid #cbd5e1',
                                  cursor: !isLaborDateToday || row.status === 'absent' ? 'not-allowed' : 'text',
                                  opacity: !isLaborDateToday || row.status === 'absent' ? 0.6 : 1,
                                }}
                              />
                              <span style={{ fontSize: 11, color: '#64748b' }}>hrs</span>
                            </div>
                            {Number(row.overtime_hours || 0) > 0 && (
                              <span style={{ fontSize: 10, color: '#0284c7', fontWeight: 600, display: 'block', marginTop: 2 }}>
                                +{INR(Math.round(Number(row.overtime_hours) * (Number(row.daily_rate || 0) / 8)))}
                              </span>
                            )}
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
                              disabled={!isLaborDateToday}
                              onChange={(e) => {
                                const next = [...laborAttendanceRows];
                                next[idx].note = e.target.value;
                                setLaborAttendanceRows(next);
                              }}
                              style={{ width: 140 }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                </div>
              </div>
            ))}

            {/* Sticky Save Attendance Bar */}
            {isLaborDateToday && laborAttendanceRows.length > 0 && (
              <div
                style={{
                  position: 'sticky',
                  bottom: 12,
                  zIndex: 20,
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: 10,
                  padding: '12px 18px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  marginTop: 18,
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 13, color: '#334155', fontWeight: 600 }}>
                    Ready to Save: <b>{laborAttendanceRows.filter((r) => r.dirty).length}</b> of <b>{laborAttendanceRows.length}</b> workers (marked)
                  </span>
                  <span style={{ fontSize: 13, color: '#16a34a', fontWeight: 700 }}>
                    Total Wages: {INR(laborAttendanceRows.filter((r) => r.dirty).reduce((acc, r) => acc + (Number(r.wage_amount) || 0), 0))}
                  </span>
                  {selectedFromVisible.length > 0 && (
                    <span style={{ fontSize: 12, color: '#4338ca', background: '#e0e7ff', padding: '2px 8px', borderRadius: 4, fontWeight: 700 }}>
                      {selectedFromVisible.length} checked
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    className="muted"
                    disabled={savingLaborAttendance}
                    onClick={() => {
                      if (!window.confirm('Mark every untouched worker absent and save attendance?')) return;
                      const next = laborAttendanceRows.map((r) => {
                        if (!r.is_marked && !r.dirty) {
                          return { ...r, status: 'absent', wage_amount: 0, dirty: true };
                        }
                        return r;
                      });
                      setLaborAttendanceRows(next);
                      saveAllLaborAttendance(next, true);
                    }}
                    style={{ padding: '8px 14px', fontSize: 12 }}
                  >
                    Mark Remaining as Absent & Save
                  </button>
                  <button
                    type="button"
                    className="active-btn"
                    disabled={savingLaborAttendance || laborAttendanceRows.filter((r) => r.dirty).length === 0}
                    onClick={() => saveAllLaborAttendance()}
                    style={{
                      padding: '8px 18px',
                      fontSize: 13,
                      fontWeight: 700,
                      background: '#2563eb',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 6,
                      cursor: 'pointer',
                    }}
                  >
                    {savingLaborAttendance ? 'Saving...' : `💾 Save Attendance for Today (${today()})`}
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })()}
    </>
  );
}
