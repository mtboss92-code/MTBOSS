'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { isEditableWithin48Hours, today } from '../../shared';

export default function AttendanceToolbar() {
  const {
    allowedAttendanceSubTabs, project, attendanceSubTab, handleAttendanceSubChange, attendanceDate,
    setAttendanceDate, attendanceRows, savingAttendance, laborAttendanceDate, setLaborAttendanceDate,
    laborAttendanceRows, savingLaborAttendance, staffAttendanceDate, setStaffAttendanceDate,
    staffDailyAttendance, savingStaffAttendance, loadLaborAttendance, loadStaffAttendance,
    saveAllStaffAttendance, loadDailyAttendance, saveAllAttendance, saveAllLaborAttendance,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {allowedAttendanceSubTabs.includes('vendor') && (
            <button
              className={attendanceSubTab === 'vendor' ? 'active-btn' : 'muted'}
              onClick={() => handleAttendanceSubChange('vendor')}
            >
              Contractors Attendance
            </button>
          )}
          {allowedAttendanceSubTabs.includes('labor') && (
            <button
              className={attendanceSubTab === 'labor' ? 'active-btn' : 'muted'}
              onClick={() => handleAttendanceSubChange('labor')}
            >
              Labor Attendance
            </button>
          )}
          {allowedAttendanceSubTabs.includes('staff') && (
            <button
              className={attendanceSubTab === 'staff' ? 'active-btn' : 'muted'}
              onClick={() => handleAttendanceSubChange('staff')}
            >
              Staff Attendance
            </button>
          )}
        </div>

        {attendanceSubTab === 'vendor' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Attendance Date:</span>
            <input
              type="date"
              value={attendanceDate}
              onChange={(e) => {
                setAttendanceDate(e.target.value);
                loadDailyAttendance(e.target.value);
              }}
              style={{ maxWidth: 170 }}
            />
            <button onClick={saveAllAttendance} disabled={savingAttendance || !isEditableWithin48Hours(attendanceDate) || !attendanceRows.some((row) => row.dirty)}>
              {savingAttendance ? 'Saving...' : `💾 Save Attendance (${attendanceRows.filter((row) => row.dirty).length} marked)`}
            </button>
            {attendanceRows.some((r) => r.is_marked) ? (
              <span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 4, background: '#dcfce7', color: '#166534', fontWeight: 600 }}>
                ✓ Marked for {attendanceDate}
                {attendanceRows.find((r) => r.created_by)?.created_by ? ` (by ${attendanceRows.find((r) => r.created_by)?.created_by})` : ''}
              </span>
            ) : (
              <span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 4, background: '#fef3c7', color: '#92400e', fontWeight: 600 }}>
                ⏳ Not yet saved for {attendanceDate}
              </span>
            )}
          </div>
        )}

        {attendanceSubTab === 'labor' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Date:</span>
            <input
              type="date"
              value={laborAttendanceDate}
              max={today()}
              onChange={(e) => {
                setLaborAttendanceDate(e.target.value);
                loadLaborAttendance(e.target.value, project.id);
              }}
              style={{ maxWidth: 160 }}
            />
            {laborAttendanceDate !== today() && (
              <button
                type="button"
                className="active-btn"
                style={{ fontSize: 12, padding: '4px 10px' }}
                onClick={() => {
                  setLaborAttendanceDate(today());
                  loadLaborAttendance(today(), project.id);
                }}
              >
                ↩️ Go to Today ({today()})
              </button>
            )}
            <button
              onClick={() => saveAllLaborAttendance()}
              disabled={savingLaborAttendance || !isEditableWithin48Hours(laborAttendanceDate)}
              style={{ opacity: !isEditableWithin48Hours(laborAttendanceDate) ? 0.6 : 1 }}
            >
              {savingLaborAttendance ? 'Saving...' : '💾 Save Attendance'}
            </button>
            {laborAttendanceRows.some((r) => r.is_marked) ? (
              <span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 4, background: '#dcfce7', color: '#166534', fontWeight: 600 }}>
                ✓ Marked for {laborAttendanceDate}
              </span>
            ) : (
              <span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 4, background: '#fef3c7', color: '#92400e', fontWeight: 600 }}>
                ⏳ Not yet saved for {laborAttendanceDate}
              </span>
            )}
          </div>
        )}

        {attendanceSubTab === 'staff' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>Date:</span>
            <input
              type="date"
              value={staffAttendanceDate}
              max={today()}
              onChange={(e) => {
                const d = e.target.value;
                setStaffAttendanceDate(d);
                loadStaffAttendance(project.id, d);
              }}
              style={{ maxWidth: 160 }}
            />
            {staffAttendanceDate !== today() && (
              <button
                type="button"
                className="active-btn"
                style={{ fontSize: 12, padding: '4px 10px' }}
                onClick={() => {
                  setStaffAttendanceDate(today());
                  loadStaffAttendance(project.id, today());
                }}
              >
                ↩️ Go to Today ({today()})
              </button>
            )}
            <button
              onClick={saveAllStaffAttendance}
              disabled={savingStaffAttendance || !isEditableWithin48Hours(staffAttendanceDate) || !staffDailyAttendance.some((row) => row.dirty)}
              style={{ opacity: !isEditableWithin48Hours(staffAttendanceDate) ? 0.6 : 1 }}
            >
              {savingStaffAttendance
                ? 'Saving...'
                : `💾 Save Attendance (${staffDailyAttendance.filter((row) => row.dirty).length} marked)`}
            </button>
            {staffDailyAttendance.some((r) => r.is_marked || (r.status && r.status !== 'unmarked')) ? (
              <span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 4, background: '#dcfce7', color: '#166534', fontWeight: 600 }}>
                ✓ Marked for {staffAttendanceDate}
              </span>
            ) : (
              <span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 4, background: '#fef3c7', color: '#92400e', fontWeight: 600 }}>
                ⏳ Not yet saved for {staffAttendanceDate}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
}
