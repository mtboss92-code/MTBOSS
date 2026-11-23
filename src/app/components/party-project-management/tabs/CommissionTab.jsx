'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR, commissionBlank, isSameDayIST } from '../shared';

export default function CommissionTab() {
  const {
    isAgent, setModalReadOnly, setModalError, commissionRows, commissionSummary, commissionSearch,
    setCommissionSearch, setCommissionModal, setCommissionForm, setEditingCommissionId, del,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Search person name, note..."
              value={commissionSearch}
              onChange={(e) => setCommissionSearch(e.target.value)}
              style={{ maxWidth: 260 }}
            />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>
              Total: {INR(commissionSummary.totalAmount)}
            </span>
          </div>

          <button
            onClick={() => {
              setCommissionForm(commissionBlank);
              setEditingCommissionId(null);
              setModalError('');
              setCommissionModal(true);
            }}
          >
            + Record Commission
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Person Name</th>
              <th>Amount</th>
              <th>Note</th>
              <th>Recorded By</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {commissionRows
              .filter((r) => {
                if (commissionSearch.trim()) {
                  const q = commissionSearch.trim().toLowerCase();
                  const pName = String(r.person_name || '').toLowerCase();
                  const note = String(r.note || '').toLowerCase();
                  const creator = String(r.created_by || '').toLowerCase();
                  return pName.includes(q) || note.includes(q) || creator.includes(q);
                }
                return true;
              })
              .map((r) => (
                <tr key={r.id}>
                  <td>{r.commission_date}</td>
                  <td style={{ fontWeight: 600, color: '#0f172a' }}>{r.person_name}</td>
                  <td style={{ fontWeight: 700, color: '#b45309' }}>{INR(r.amount)}</td>
                  <td>{r.note || '—'}</td>
                  <td style={{ fontSize: 11, color: '#64748b' }}>{r.created_by}</td>
                  <td className="actions" style={{ justifyContent: 'flex-end', display: 'flex', gap: 6 }} onClick={(e) => e.stopPropagation()}>
                    {isSameDayIST(r.created_at || r.commission_date) ? (
                      <>
                        <button
                          className="muted"
                          style={{ padding: '4px 8px', fontSize: 12 }}
                          onClick={() => {
                            setEditingCommissionId(r.id);
                            setCommissionForm({
                              person_name: r.person_name,
                              amount: r.amount,
                              commission_date: r.commission_date,
                              note: r.note || '',
                            });
                            setModalReadOnly(false);
                            setModalError('');
                            setCommissionModal(true);
                          }}
                        >
                          ✏️ Edit
                        </button>
                        {!isAgent && (
                          <button className="danger" style={{ padding: '4px 8px', fontSize: 12 }} onClick={() => del('commission', r.id)}>
                            Delete
                          </button>
                        )}
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="muted"
                          style={{ padding: '4px 8px', fontSize: 12 }}
                          onClick={() => {
                            setEditingCommissionId(r.id);
                            setCommissionForm({
                              person_name: r.person_name,
                              amount: r.amount,
                              commission_date: r.commission_date,
                              note: r.note || '',
                            });
                            setModalReadOnly(true);
                            setModalError('');
                            setCommissionModal(true);
                          }}
                        >
                          👁️ View
                        </button>
                        <span title="Locked: Can only be edited or deleted within 48 hours" style={{ fontSize: 11, color: '#94a3b8' }}>
                          🔒 Locked
                        </span>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            {commissionRows.filter((r) => {
              if (commissionSearch.trim()) {
                const q = commissionSearch.trim().toLowerCase();
                const pName = String(r.person_name || '').toLowerCase();
                const note = String(r.note || '').toLowerCase();
                const creator = String(r.created_by || '').toLowerCase();
                return pName.includes(q) || note.includes(q) || creator.includes(q);
              }
              return true;
            }).length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                  {commissionRows.length === 0 ? 'No commission records found for this project.' : 'No commission records match the search.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
