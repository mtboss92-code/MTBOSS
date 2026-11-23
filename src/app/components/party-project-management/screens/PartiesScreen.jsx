'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function PartiesScreen() {
  const {
    isAgent, setScreen, parties, setPartyForm, search, setSearch, pagination, setPagination, showParty,
    del,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <>
        <div className="bar" style={{ marginBottom: 12 }}>
          <input
            placeholder="Search parties..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ maxWidth: 300 }}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>Party</th>
              <th>Projects</th>
              <th>Contract Value</th>
              <th>Received</th>
              <th>Pending</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parties.map((p) => (
              <tr
                key={p.id}
                className="clickable-row"
                onClick={() => showParty(p.id)}
                title="Click to view party overview & projects"
              >
                <td>
                  <b>{p.name}</b>
                  <br />
                  <span style={{ fontSize: 11, color: '#64748b' }}>{p.phone || p.email || '—'}</span>
                </td>
                <td>{p.project_count}</td>
                <td style={{ fontWeight: 600 }}>{INR(p.total_contract_value)}</td>
                <td style={{ color: '#16a34a', fontWeight: 600 }}>{INR(p.total_received)}</td>
                <td style={{ color: '#dc2626', fontWeight: 600 }}>{INR(p.total_pending)}</td>
                <td className="actions" style={{ justifyContent: 'flex-end' }} onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => showParty(p.id)}>View Party</button>
                  {!isAgent && (
                    <button
                      className="muted"
                      onClick={() => {
                        setPartyForm(p);
                        setScreen('partyForm');
                      }}
                    >
                      Edit
                    </button>
                  )}
                  {!isAgent && (
                    <button className="danger" onClick={() => del('party', p.id)}>
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {parties.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                  No parties found. Click &ldquo;+ Add Party&rdquo; to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="bar" style={{ marginTop: 14, justifyContent: 'space-between' }}>
          <span style={{ fontSize: 12, color: '#64748b' }}>
            Page {pagination.page} / {pagination.totalPages || 1}
          </span>
          <div style={{ display: 'flex', gap: 6 }}>
            <button
              className="muted"
              disabled={pagination.page <= 1}
              onClick={() => setPagination((p) => ({ ...p, page: p.page - 1 }))}
            >
              Previous
            </button>
            <button
              className="muted"
              disabled={pagination.page >= pagination.totalPages}
              onClick={() => setPagination((p) => ({ ...p, page: p.page + 1 }))}
            >
              Next
            </button>
          </div>
        </div>
      </>
    </>
  );
}
