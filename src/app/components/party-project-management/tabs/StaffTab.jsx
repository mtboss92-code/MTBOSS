'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR, staffBlank, staffRolesList, today } from '../shared';

export default function StaffTab() {
  const {
    setModalError, projectStaff, staffSummary, staffSearch, setStaffSearch, staffRoleFilter,
    setStaffRoleFilter, setStaffModal, setStaffForm, setEditingStaffId, setStaffPaymentModal,
    setStaffPaymentForm, setEditingStaffPaymentId, deleteStaffMember,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        {/* Top Staff KPI Stats */}
        <div className="stats" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', marginBottom: 16 }}>
          <div className="stat">
            <small>Total Staff Assigned</small>
            <b style={{ fontSize: 20, display: 'block', marginTop: 4 }}>
              {staffSummary.total_staff || projectStaff.length} Member{(staffSummary.total_staff || projectStaff.length) === 1 ? '' : 's'}
            </b>
          </div>
          <div className="stat">
            <small>Total Payments &amp; Due</small>
            <b style={{ fontSize: 20, display: 'block', marginTop: 4, color: '#16a34a' }}>
              {INR(staffSummary.total_paid || 0)}
              {(() => {
                const totalDue = projectStaff.reduce((sum, s) => sum + (Number(s.balance_due) || 0), 0);
                return totalDue > 0 ? (
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#dc2626', marginLeft: 6 }}>
                    (Due: {INR(totalDue)})
                  </span>
                ) : null;
              })()}
            </b>
          </div>
        </div>

        {/* Staff Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
          <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>
            👥 Project Staff Directory ({projectStaff.length})
          </h4>
          <button
            type="button"
            onClick={() => {
              setStaffForm(staffBlank);
              setEditingStaffId(null);
              setModalError('');
              setStaffModal(true);
            }}
          >
            + Assign Staff Member
          </button>
        </div>

        {/* Staff Directory & Earnings Table */}
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  placeholder="Search staff by name, phone, role..."
                  value={staffSearch}
                  onChange={(e) => setStaffSearch(e.target.value)}
                  style={{ minWidth: 260, fontSize: 13 }}
                />
                <select
                  value={staffRoleFilter}
                  onChange={(e) => setStaffRoleFilter(e.target.value)}
                  style={{ fontSize: 13, padding: '6px 10px' }}
                >
                  <option value="">All Roles</option>
                  {staffRolesList.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <span style={{ fontSize: 12, color: '#64748b' }}>
                Showing {projectStaff.filter((st) => {
                  if (staffRoleFilter && st.role !== staffRoleFilter) return false;
                  if (staffSearch.trim()) {
                    const q = staffSearch.toLowerCase();
                    return st.name.toLowerCase().includes(q) || (st.phone && st.phone.includes(q)) || st.role.toLowerCase().includes(q);
                  }
                  return true;
                }).length} Staff Members
              </span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table>
                <thead>
                  <tr>
                    <th>Staff Name</th>
                    <th>Role / Designation</th>
                    <th>Contact</th>
                    <th>Pay Structure</th>
                    <th>Attendance</th>
                    <th>Earned Salary</th>
                    <th>Commission</th>
                    <th>Total Paid</th>
                    <th>Balance Due</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projectStaff
                    .filter((st) => {
                      if (staffRoleFilter && st.role !== staffRoleFilter) return false;
                      if (staffSearch.trim()) {
                        const q = staffSearch.toLowerCase();
                        return st.name.toLowerCase().includes(q) || (st.phone && st.phone.includes(q)) || st.role.toLowerCase().includes(q);
                      }
                      return true;
                    })
                    .map((st) => (
                      <tr key={st.id}>
                        <td style={{ fontWeight: 600 }}>
                          {st.name}
                        </td>
                        <td>
                          <span className="badge" style={{ background: 'rgba(2,132,199,0.15)', color: '#38bdf8', fontWeight: 600 }}>
                            {st.role}
                          </span>
                        </td>
                        <td>{st.phone || '—'}</td>
                        <td>
                          <div style={{ fontSize: 12, fontWeight: 600 }}>
                            {INR(st.salary_rate)}
                            <span style={{ fontWeight: 400, color: '#64748b', marginLeft: 4 }}>
                              / {st.pay_type === 'per_day' ? 'day' : st.pay_type === 'monthly' ? 'month' : 'project'}
                            </span>
                          </div>
                        </td>
                        <td>
                          <div style={{ fontSize: 12 }}>
                            <b style={{ color: '#0284c7' }}>{st.days_present}P</b>
                            {st.days_half_day > 0 && <span style={{ color: '#f59e0b', marginLeft: 4 }}>• {st.days_half_day}HD</span>}
                          </div>
                        </td>
                        <td style={{ fontWeight: 600 }}>
                          {INR(st.total_salary_earned)}
                        </td>
                        <td>
                          <div style={{ fontSize: 12 }}>
                            <span style={{ fontWeight: 600, color: '#d97706' }}>{INR(st.total_commission_earned)}</span>
                            {st.commission_paid > 0 && (
                              <div style={{ fontSize: 11, color: '#16a34a' }}>
                                (Paid: {INR(st.commission_paid)})
                              </div>
                            )}
                          </div>
                        </td>
                        <td style={{ fontWeight: 600, color: '#22c55e' }}>
                          {INR(st.total_paid)}
                        </td>
                        <td>
                          <b style={{ color: Number(st.balance_due) > 0 ? '#dc2626' : '#16a34a' }}>
                            {INR(st.balance_due)}
                          </b>
                        </td>
                        <td>
                          <span className={`badge ${st.is_active ? 'badge-active' : 'badge-inactive'}`}>
                            {st.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                        <td className="actions" style={{ justifyContent: 'flex-end', display: 'flex', gap: 6 }}>
                          <button
                            type="button"
                            className="muted"
                            style={{ padding: '4px 8px', fontSize: 12 }}
                            title="Record payment for this staff"
                            onClick={() => {
                              setStaffPaymentForm({
                                staff_id: String(st.id),
                                amount: String(st.balance_due > 0 ? st.balance_due : ''),
                                payment_date: today(),
                                payment_type: 'salary',
                                mode: 'bank',
                                transaction_reference: '',
                                note: '',
                              });
                              setEditingStaffPaymentId(null);
                              setModalError('');
                              setStaffPaymentModal(true);
                            }}
                          >
                            💳 Pay
                          </button>
                          <button
                            type="button"
                            className="muted"
                            style={{ padding: '4px 8px', fontSize: 12 }}
                            onClick={() => {
                              setEditingStaffId(st.id);
                              setStaffForm({
                                name: st.name,
                                phone: st.phone || '',
                                role: st.role,
                                pay_type: st.pay_type,
                                salary_rate: String(st.salary_rate || ''),
                                commission_rate: String(st.commission_rate || ''),
                                commission_notes: st.commission_notes || '',
                                is_active: Boolean(st.is_active),
                              });
                              setModalError('');
                              setStaffModal(true);
                            }}
                          >
                            ✏️ Edit
                          </button>
                          <button
                            type="button"
                            className="danger"
                            style={{ padding: '4px 8px', fontSize: 12 }}
                            onClick={() => deleteStaffMember(st.id)}
                            title="Remove or deactivate staff"
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  {projectStaff.length === 0 && (
                    <tr>
                      <td colSpan={11} style={{ textAlign: 'center', padding: '2.5rem', color: '#64748b' }}>
                        No staff members assigned to this project yet. Click &quot;+ Assign Staff Member&quot; to add supervisors, engineers, or managers.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </>
  );
}
