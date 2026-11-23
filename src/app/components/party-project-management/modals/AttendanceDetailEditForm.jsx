'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { computeLaborWage, computeVendorWage, INR } from '../shared';

export default function AttendanceDetailEditForm() {
  const {
    attendanceDetailModal, setAttendanceDetailModal, savingAttendanceDetail, saveAttendanceDetailModal,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <form onSubmit={saveAttendanceDetailModal} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* Status Selection */}
        <div>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 6 }}>
            Status
          </label>
          <div style={{ display: 'flex', gap: 8 }}>
            {['present', 'half_day', 'absent'].map((st) => {
              const isActive = attendanceDetailModal.status === st;
              const activeBg = st === 'present' ? '#16a34a' : st === 'half_day' ? '#f59e0b' : '#ef4444';
              return (
                <button
                  key={st}
                  type="button"
                  onClick={() => {
                    let newWage = 0;
                    if (attendanceDetailModal.type === 'labor') {
                      newWage = computeLaborWage(
                        attendanceDetailModal.daily_rate,
                        st,
                        attendanceDetailModal.shift_type || 'day',
                        attendanceDetailModal.overtime_hours || 0
                      );
                    } else {
                      newWage = computeVendorWage(
                        attendanceDetailModal.workers_count || 1,
                        attendanceDetailModal.rate_per_worker || 0,
                        st,
                        attendanceDetailModal.shift_type || 'day',
                        attendanceDetailModal.overtime_hours || 0
                      );
                    }
                    setAttendanceDetailModal((prev) => ({
                      ...prev,
                      status: st,
                      wage_amount: newWage,
                    }));
                  }}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    fontSize: 13,
                    fontWeight: 600,
                    borderRadius: 6,
                    border: isActive ? `2px solid ${activeBg}` : '1px solid #cbd5e1',
                    background: isActive ? activeBg : '#f8fafc',
                    color: isActive ? '#ffffff' : '#475569',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                  }}
                >
                  {st === 'half_day' ? 'Half Day' : st}
                </button>
              );
            })}
          </div>
        </div>

        {/* Shift and Overtime */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 6 }}>
              Shift
            </label>
            <select
              value={attendanceDetailModal.shift_type || 'day'}
              disabled={attendanceDetailModal.status === 'absent'}
              onChange={(e) => {
                const nextShift = e.target.value;
                let newWage = 0;
                if (attendanceDetailModal.type === 'labor') {
                  newWage = computeLaborWage(
                    attendanceDetailModal.daily_rate,
                    attendanceDetailModal.status,
                    nextShift,
                    attendanceDetailModal.overtime_hours || 0
                  );
                } else {
                  newWage = computeVendorWage(
                    attendanceDetailModal.workers_count || 1,
                    attendanceDetailModal.rate_per_worker || 0,
                    attendanceDetailModal.status,
                    nextShift,
                    attendanceDetailModal.overtime_hours || 0
                  );
                }
                setAttendanceDetailModal((prev) => ({
                  ...prev,
                  shift_type: nextShift,
                  wage_amount: newWage,
                }));
              }}
              style={{
                width: '100%',
                padding: '8px 10px',
                fontSize: 13,
                borderRadius: 6,
                border: '1px solid #cbd5e1',
                background: '#ffffff',
              }}
            >
              <option value="day">☀️ Day (1x)</option>
              <option value="night">🌙 Night (1x)</option>
              <option value="double">⚡ Double (2x)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 6 }}>
              Overtime (Hours)
            </label>
            <input
              type="number"
              min="0"
              max="16"
              step="0.5"
              disabled={attendanceDetailModal.status === 'absent'}
              value={attendanceDetailModal.overtime_hours ?? 0}
              onChange={(e) => {
                const otVal = Math.max(0, Number(e.target.value || 0));
                let newWage = 0;
                if (attendanceDetailModal.type === 'labor') {
                  newWage = computeLaborWage(
                    attendanceDetailModal.daily_rate,
                    attendanceDetailModal.status,
                    attendanceDetailModal.shift_type || 'day',
                    otVal
                  );
                } else {
                  newWage = computeVendorWage(
                    attendanceDetailModal.workers_count || 1,
                    attendanceDetailModal.rate_per_worker || 0,
                    attendanceDetailModal.status,
                    attendanceDetailModal.shift_type || 'day',
                    otVal
                  );
                }
                setAttendanceDetailModal((prev) => ({
                  ...prev,
                  overtime_hours: otVal,
                  wage_amount: newWage,
                }));
              }}
              style={{
                width: '100%',
                padding: '8px 10px',
                fontSize: 13,
                borderRadius: 6,
                border: '1px solid #cbd5e1',
              }}
            />
          </div>
        </div>

        {/* If vendor: Workers Count & Rate per worker */}
        {attendanceDetailModal.type === 'vendor' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 6 }}>
                Workers Count
              </label>
              <input
                type="number"
                min="1"
                value={attendanceDetailModal.workers_count ?? 1}
                onChange={(e) => {
                  const count = Math.max(1, Number(e.target.value || 1));
                  const newWage = computeVendorWage(
                    count,
                    attendanceDetailModal.rate_per_worker || 0,
                    attendanceDetailModal.status,
                    attendanceDetailModal.shift_type || 'day',
                    attendanceDetailModal.overtime_hours || 0
                  );
                  setAttendanceDetailModal((prev) => ({
                    ...prev,
                    workers_count: count,
                    wage_amount: newWage,
                  }));
                }}
                style={{
                  width: '100%',
                  padding: '8px 10px',
                  fontSize: 13,
                  borderRadius: 6,
                  border: '1px solid #cbd5e1',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 6 }}>
                Rate / Worker (₹)
              </label>
              <input
                type="number"
                min="0"
                value={attendanceDetailModal.rate_per_worker ?? 0}
                onChange={(e) => {
                  const rate = Math.max(0, Number(e.target.value || 0));
                  const newWage = computeVendorWage(
                    attendanceDetailModal.workers_count || 1,
                    rate,
                    attendanceDetailModal.status,
                    attendanceDetailModal.shift_type || 'day',
                    attendanceDetailModal.overtime_hours || 0
                  );
                  setAttendanceDetailModal((prev) => ({
                    ...prev,
                    rate_per_worker: rate,
                    wage_amount: newWage,
                  }));
                }}
                style={{
                  width: '100%',
                  padding: '8px 10px',
                  fontSize: 13,
                  borderRadius: 6,
                  border: '1px solid #cbd5e1',
                }}
              />
            </div>
          </div>
        )}

        {/* Total Calculated Wage */}
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#166534' }}>Total Wage for this Day:</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#15803d' }}>
            {INR(attendanceDetailModal.wage_amount || 0)}
          </span>
        </div>

        {/* Note */}
        <div>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 6 }}>
            Note / Remark
          </label>
          <input
            type="text"
            placeholder="Optional note..."
            value={attendanceDetailModal.note || ''}
            onChange={(e) => setAttendanceDetailModal((prev) => ({ ...prev, note: e.target.value }))}
            style={{
              width: '100%',
              padding: '8px 10px',
              fontSize: 13,
              borderRadius: 6,
              border: '1px solid #cbd5e1',
            }}
          />
        </div>

        {/* Modal Footer Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 8 }}>
          <button
            type="button"
            className="muted"
            disabled={savingAttendanceDetail}
            onClick={() => setAttendanceDetailModal(null)}
            style={{ padding: '8px 16px', borderRadius: 6 }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="active-btn"
            disabled={savingAttendanceDetail}
            style={{
              padding: '8px 18px',
              borderRadius: 6,
              background: '#2563eb',
              color: '#ffffff',
              fontWeight: 600,
              cursor: savingAttendanceDetail ? 'not-allowed' : 'pointer',
            }}
          >
            {savingAttendanceDetail ? 'Saving...' : '💾 Save Changes'}
          </button>
        </div>
      </form>
    </>
  );
}
