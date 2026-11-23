'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';
import AttendanceDetailEditForm from './AttendanceDetailEditForm';

export default function AttendanceDetailModal() {
  const {
    attendanceDetailModal, setAttendanceDetailModal, savingAttendanceDetail,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(3px)',
          zIndex: 2500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
        }}
        onClick={() => {
          if (!savingAttendanceDetail) setAttendanceDetailModal(null);
        }}
      >
        <div
          style={{
            background: '#ffffff',
            borderRadius: 14,
            padding: '24px',
            width: '100%',
            maxWidth: 500,
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.2)',
            border: attendanceDetailModal.isToday ? '1px solid #93c5fd' : '1px solid #e2e8f0',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, color: '#0f172a', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
                {attendanceDetailModal.isToday ? '✏️ Edit Attendance' : '👁️ View Attendance'}
              </h3>
              <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>
                Date: <strong style={{ color: '#0f172a' }}>{attendanceDetailModal.attendance_date}</strong>
                {attendanceDetailModal.marked_by && (
                  <span style={{ marginLeft: 10 }}>• Marked by: {attendanceDetailModal.marked_by}</span>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setAttendanceDetailModal(null)}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: 20,
                color: '#94a3b8',
                cursor: 'pointer',
                padding: 4,
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          {/* Target Worker/Vendor Info */}
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '12px 14px', marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#0f172a' }}>
              {attendanceDetailModal.type === 'vendor' ? attendanceDetailModal.vendor_name : attendanceDetailModal.labor_name}
            </div>
            <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>
              Trade / Role: <strong>{attendanceDetailModal.trade || 'Worker'}</strong>
              {attendanceDetailModal.type === 'labor' && attendanceDetailModal.daily_rate > 0 && (
                <span style={{ marginLeft: 10 }}>• Daily Rate: {INR(attendanceDetailModal.daily_rate)}</span>
              )}
            </div>
          </div>

          {/* Past Date Banner if not editable */}
          {!attendanceDetailModal.isToday && (
            <div
              style={{
                background: '#fef3c7',
                border: '1px solid #fcd34d',
                borderRadius: 8,
                padding: '10px 14px',
                marginBottom: 16,
                color: '#92400e',
                fontSize: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span style={{ fontSize: 16 }}>🔒</span>
              <div>
                <strong>Read Only (Locked):</strong> Attendance records older than 48 hours cannot be modified. They can only be edited within 48 hours of creation.
              </div>
            </div>
          )}

          {/* Editable Form or Read-only Display */}
          {attendanceDetailModal.isToday ? (
            <AttendanceDetailEditForm />
          ) : (
            /* Read Only View Details */
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: 6, border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: 11, color: '#64748b' }}>Status</div>
                  <div style={{ fontSize: 14, fontWeight: 600, textTransform: 'capitalize', color: attendanceDetailModal.status === 'present' ? '#16a34a' : attendanceDetailModal.status === 'half_day' ? '#f59e0b' : '#ef4444' }}>
                    {attendanceDetailModal.status === 'half_day' ? 'Half Day' : (attendanceDetailModal.status || 'Present')}
                  </div>
                </div>
                <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: 6, border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: 11, color: '#64748b' }}>Shift</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0f172a' }}>
                    {attendanceDetailModal.shift_type === 'double' ? 'Double (2x)' : (attendanceDetailModal.shift_type === 'night' ? 'Night (1x)' : 'Day (1x)')}
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: 6, border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: 11, color: '#64748b' }}>Overtime (OT)</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0f172a' }}>
                    {attendanceDetailModal.overtime_hours > 0 ? `${attendanceDetailModal.overtime_hours} hrs` : 'None'}
                  </div>
                </div>
                <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: 6, border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: 11, color: '#64748b' }}>Total Wage</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#16a34a' }}>
                    {INR(attendanceDetailModal.wage_amount || 0)}
                  </div>
                </div>
              </div>

              {attendanceDetailModal.note && (
                <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: 6, border: '1px solid #f1f5f9', marginBottom: 16 }}>
                  <div style={{ fontSize: 11, color: '#64748b', marginBottom: 2 }}>Note</div>
                  <div style={{ fontSize: 13, color: '#334155' }}>{attendanceDetailModal.note}</div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
                <button
                  type="button"
                  className="muted"
                  onClick={() => setAttendanceDetailModal(null)}
                  style={{ padding: '8px 20px', borderRadius: 6 }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
