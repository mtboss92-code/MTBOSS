'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { INR, today } from '../../shared';

export default function StaffPaymentsView() {
  const {
    setModalError, projectStaff, staffPayments, staffPaymentsSummary, setStaffPaymentModal,
    setStaffPaymentForm, setEditingStaffPaymentId, staffPaymentFilterType, setStaffPaymentFilterType,
    deleteStaffPayment,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <select
              value={staffPaymentFilterType}
              onChange={(e) => setStaffPaymentFilterType(e.target.value)}
              style={{ fontSize: 13, padding: '6px 10px' }}
            >
              <option value="">All Payment Types</option>
              <option value="salary">Salary</option>
              <option value="commission">Commission</option>
              <option value="advance">Advance</option>
              <option value="bonus">Bonus</option>
              <option value="reimbursement">Reimbursement</option>
            </select>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#16a34a' }}>
              Total Paid: {INR(staffPaymentsSummary.total_amount)}
            </span>
            <span style={{ fontSize: 12, color: '#94a3b8' }}>
              (Salary: {INR(staffPaymentsSummary.salary_amount)} • Commission: {INR(staffPaymentsSummary.commission_amount)})
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              setStaffPaymentForm({
                staff_id: projectStaff[0]?.id ? String(projectStaff[0].id) : '',
                amount: '',
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
            + Record Staff Payment
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Staff Member</th>
                <th>Role</th>
                <th>Payment Type</th>
                <th>Amount</th>
                <th>Mode</th>
                <th>Reference No.</th>
                <th>Note</th>
                <th>Recorded By</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffPayments
                .filter((p) => !staffPaymentFilterType || p.payment_type === staffPaymentFilterType)
                .map((p) => (
                  <tr key={p.id}>
                    <td>{p.payment_date}</td>
                    <td style={{ fontWeight: 600 }}>{p.staff_name}</td>
                    <td>
                      <span className="badge" style={{ background: 'rgba(148,163,184,0.15)', color: '#94a3b8' }}>
                        {p.role}
                      </span>
                    </td>
                    <td>
                      <span
                        className="badge"
                        style={{
                          background: p.payment_type === 'commission' ? 'rgba(217,119,6,0.2)' : p.payment_type === 'advance' ? 'rgba(2,132,199,0.2)' : 'rgba(22,163,74,0.2)',
                          color: p.payment_type === 'commission' ? '#f59e0b' : p.payment_type === 'advance' ? '#38bdf8' : '#4ade80',
                          fontWeight: 600,
                          textTransform: 'capitalize'
                        }}
                      >
                        {p.payment_type}
                      </span>
                    </td>
                    <td style={{ fontWeight: 700, color: p.payment_type === 'commission' ? '#f59e0b' : '#22c55e' }}>
                      {INR(p.amount)}
                    </td>
                    <td style={{ textTransform: 'capitalize' }}>{p.mode || 'bank'}</td>
                    <td>{p.transaction_reference || '—'}</td>
                    <td>{p.note || '—'}</td>
                    <td style={{ fontSize: 11, color: '#94a3b8' }}>{p.created_by}</td>
                    <td className="actions" style={{ justifyContent: 'flex-end', display: 'flex', gap: 6 }}>
                      <button
                        type="button"
                        className="danger"
                        style={{ padding: '4px 8px', fontSize: 12 }}
                        onClick={() => deleteStaffPayment(p.id)}
                        title="Delete payment entry"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              {staffPayments.length === 0 && (
                <tr>
                  <td colSpan={10} style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>
                    No staff payment records found for this project.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
