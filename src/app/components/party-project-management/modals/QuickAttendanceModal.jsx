'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';

export default function QuickAttendanceModal() {
  const {
    setQuickAttendanceModal, quickAttendanceForm, setQuickAttendanceForm, savingQuickAttendance,
    handleSaveQuickAttendance,
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
          zIndex: 2600,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
        }}
        onClick={() => { if (!savingQuickAttendance) setQuickAttendanceModal(false); }}
      >
        <div
          style={{
            background: '#ffffff',
            borderRadius: 12,
            padding: 24,
            maxWidth: 480,
            width: '100%',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
            border: '1px solid #cbd5e1',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 17, color: '#0f172a' }}>
                📅 Mark Attendance
              </h3>
              <p style={{ margin: '3px 0 0', fontSize: 13, color: '#64748b' }}>
                Worker: <strong style={{ color: '#0f172a' }}>{quickAttendanceForm.labor_name}</strong>
              </p>
            </div>
            <button
              type="button"
              className="muted"
              onClick={() => setQuickAttendanceModal(false)}
              style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 16, fontWeight: 'bold' }}
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSaveQuickAttendance}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Select Project */}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 4 }}>
                  Select Project *
                </label>
                <select
                  value={quickAttendanceForm.project_id}
                  onChange={(e) => {
                    const pid = Number(e.target.value);
                    const matched = quickAttendanceForm.available_projects?.find((p) => p.project_id === pid);
                    setQuickAttendanceForm((prev) => ({
                      ...prev,
                      project_id: pid,
                      project_name: matched?.project_name || prev.project_name,
                      labor_id: matched?.labor_id || prev.labor_id,
                      daily_rate: matched?.daily_rate ?? prev.daily_rate,
                    }));
                  }}
                  required
                  style={{ width: '100%', padding: '7px 10px', fontSize: 13, borderRadius: 6, border: '1px solid #cbd5e1' }}
                >
                  {quickAttendanceForm.available_projects?.map((p, idx) => (
                    <option key={idx} value={p.project_id}>
                      {p.project_name} (Rate: ₹{p.daily_rate || 0})
                    </option>
                  ))}
                  {(!quickAttendanceForm.available_projects || quickAttendanceForm.available_projects.length === 0) && (
                    <option value="">No projects assigned</option>
                  )}
                </select>
              </div>

              {/* Attendance Date */}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 4 }}>
                  Attendance Date *
                </label>
                <input
                  type="date"
                  required
                  value={quickAttendanceForm.attendance_date}
                  onChange={(e) => setQuickAttendanceForm((prev) => ({ ...prev, attendance_date: e.target.value }))}
                  style={{ width: '100%', padding: '7px 10px', fontSize: 13, borderRadius: 6, border: '1px solid #cbd5e1' }}
                />
              </div>

              {/* Status */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 4 }}>
                    Status
                  </label>
                  <select
                    value={quickAttendanceForm.status}
                    onChange={(e) => setQuickAttendanceForm((prev) => ({ ...prev, status: e.target.value }))}
                    style={{ width: '100%', padding: '7px 10px', fontSize: 13, borderRadius: 6, border: '1px solid #cbd5e1' }}
                  >
                    <option value="present">Present (Full Day)</option>
                    <option value="half_day">Half Day</option>
                    <option value="absent">Absent</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 4 }}>
                    Shift Type
                  </label>
                  <select
                    value={quickAttendanceForm.shift_type}
                    onChange={(e) => setQuickAttendanceForm((prev) => ({ ...prev, shift_type: e.target.value }))}
                    style={{ width: '100%', padding: '7px 10px', fontSize: 13, borderRadius: 6, border: '1px solid #cbd5e1' }}
                  >
                    <option value="day">Day Shift</option>
                    <option value="night">Night Shift</option>
                    <option value="double">Double (2x)</option>
                  </select>
                </div>
              </div>

              {/* Overtime Hours */}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 4 }}>
                  Overtime Hours
                </label>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  max="12"
                  value={quickAttendanceForm.overtime_hours}
                  onChange={(e) => setQuickAttendanceForm((prev) => ({ ...prev, overtime_hours: e.target.value }))}
                  style={{ width: '100%', padding: '7px 10px', fontSize: 13, borderRadius: 6, border: '1px solid #cbd5e1' }}
                />
              </div>

              {/* Note */}
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#475569', marginBottom: 4 }}>
                  Work Note / Remarks
                </label>
                <input
                  type="text"
                  value={quickAttendanceForm.note}
                  onChange={(e) => setQuickAttendanceForm((prev) => ({ ...prev, note: e.target.value }))}
                  placeholder="e.g. Mason work on second floor"
                  style={{ width: '100%', padding: '7px 10px', fontSize: 13, borderRadius: 6, border: '1px solid #cbd5e1' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 20 }}>
              <button
                type="button"
                className="muted"
                disabled={savingQuickAttendance}
                onClick={() => setQuickAttendanceModal(false)}
                style={{ padding: '7px 16px', borderRadius: 6 }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={savingQuickAttendance}
                style={{ padding: '7px 18px', borderRadius: 6, fontWeight: 600 }}
              >
                {savingQuickAttendance ? 'Saving…' : '✓ Save Attendance'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
