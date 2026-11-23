'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { today, isEditableWithin48Hours } from '../shared';
import AttendanceToolbar from './attendance/AttendanceToolbar';
import LaborAttendanceView from './attendance/LaborAttendanceView';
import StaffAttendanceView from './attendance/StaffAttendanceView';
import VendorAttendanceView from './attendance/VendorAttendanceView';

export default function AttendanceTab() {
  const {
    project, attendanceSubTab, laborAttendanceDate, setLaborAttendanceDate, staffAttendanceDate,
    setStaffAttendanceDate, loadLaborAttendance, loadStaffAttendance,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <AttendanceToolbar />

        {attendanceSubTab === 'labor' && laborAttendanceDate !== today() && (
          <div style={{ background: isEditableWithin48Hours(laborAttendanceDate) ? '#ecfdf5' : '#fffbeb', border: `1px solid ${isEditableWithin48Hours(laborAttendanceDate) ? '#86efac' : '#fde68a'}`, color: isEditableWithin48Hours(laborAttendanceDate) ? '#166534' : '#92400e', borderRadius: 8, padding: '8px 14px', fontSize: 12, margin: '10px 0 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>{isEditableWithin48Hours(laborAttendanceDate) ? '✓' : '🔒'}</span>
            <span>
              {isEditableWithin48Hours(laborAttendanceDate) ? (
                <><b>Back-date attendance ({laborAttendanceDate}):</b> Is date ki attendance aaj mark ya edit ki ja sakti hai. Pichle 48 hours (aaj aur pichle 2 din) tak editing allowed hai.</>
              ) : (
                <><b>Past Date View ({laborAttendanceDate}):</b> Yeh date 48 hours se purani hai, isliye attendance sirf view mode me available hai.</>
              )}
            </span>
            <button
              type="button"
              className="active-btn"
              style={{ marginLeft: 'auto', fontSize: 11, padding: '3px 8px' }}
              onClick={() => {
                setLaborAttendanceDate(today());
                loadLaborAttendance(today(), project.id);
              }}
            >
              Jump to Today
            </button>
          </div>
        )}

        {attendanceSubTab === 'staff' && staffAttendanceDate !== today() && (
          <div style={{ background: isEditableWithin48Hours(staffAttendanceDate) ? '#ecfdf5' : 'rgba(245,158,11,0.1)', border: `1px solid ${isEditableWithin48Hours(staffAttendanceDate) ? '#86efac' : 'rgba(245,158,11,0.3)'}`, color: isEditableWithin48Hours(staffAttendanceDate) ? '#166534' : '#f59e0b', borderRadius: 8, padding: '8px 14px', fontSize: 12, margin: '10px 0 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>{isEditableWithin48Hours(staffAttendanceDate) ? '✓' : '🔒'}</span>
            <span>
              {isEditableWithin48Hours(staffAttendanceDate) ? (
                <><b>Back-date attendance ({staffAttendanceDate}):</b> Is date ki attendance aaj mark ya edit ki ja sakti hai. Pichle 48 hours (aaj aur pichle 2 din) tak editing allowed hai.</>
              ) : (
                <><b>Past Date View ({staffAttendanceDate}):</b> Yeh date 48 hours se purani hai, isliye attendance sirf view mode me available hai.</>
              )}
            </span>
            <button
              type="button"
              className="active-btn"
              style={{ marginLeft: 'auto', fontSize: 11, padding: '3px 8px' }}
              onClick={() => {
                setStaffAttendanceDate(today());
                loadStaffAttendance(project.id, today());
              }}
            >
              Jump to Today
            </button>
          </div>
        )}

        {attendanceSubTab === 'vendor' && (
          <VendorAttendanceView />
      )}

        {attendanceSubTab === 'labor' && (
          <LaborAttendanceView />
      )}

      {/* ── STAFF ATTENDANCE IN ATTENDANCE TAB ── */}
      {attendanceSubTab === 'staff' && <StaffAttendanceView />}
      </div>
    </>
  );
}
