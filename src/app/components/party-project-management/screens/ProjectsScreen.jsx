'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function ProjectsScreen() {
  const {
    isAgent, agentSpecs, hasAgentPayment, search, setSearch, pagination, setPagination, allProjectsList,
    showProject,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <>
        {isAgent && agentSpecs.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3.5rem 1.5rem', color: '#64748b' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🔒</div>
            <h3 style={{ margin: '0 0 8px', color: '#0f172a', fontSize: '18px' }}>No access assigned. Contact admin.</h3>
            <p style={{ margin: 0, fontSize: '13px' }}>Your account does not have any active project specializations. Please contact your administrator to grant access.</p>
          </div>
        ) : isAgent && allProjectsList.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3.5rem 1.5rem', color: '#64748b' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📋</div>
            <h3 style={{ margin: '0 0 8px', color: '#0f172a', fontSize: '18px' }}>No access assigned. Contact admin.</h3>
            <p style={{ margin: 0, fontSize: '13px' }}>You have not been assigned to any projects yet. Please contact your administrator.</p>
          </div>
        ) : (
          <>
            <div className="bar" style={{ marginBottom: 12 }}>
              <input
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ maxWidth: 300 }}
              />
            </div>

            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  {hasAgentPayment && <th>Contract Value</th>}
                  {hasAgentPayment && <th>Received</th>}
                  {hasAgentPayment && <th>Pending</th>}
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allProjectsList.map((p) => (
                  <tr
                    key={p.id}
                    className="clickable-row"
                    onClick={() => showProject(p.id)}
                    title="Click to open project dashboard"
                  >
                    <td>
                      <b>{p.name}</b>
                      <br />
                      <span style={{ fontSize: 11, color: '#64748b' }}>{p.site_address || 'No site address'}</span>
                    </td>
                    {hasAgentPayment && <td>{INR(p.contract_value)}</td>}
                    {hasAgentPayment && <td style={{ color: '#16a34a' }}>{INR(p.received)}</td>}
                    {hasAgentPayment && <td style={{ color: '#dc2626' }}>{INR(p.pending)}</td>}
                    <td>
                      <span className={`badge ${p.status === 'completed' ? 'badge-completed' : 'badge-active'}`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="actions" style={{ justifyContent: 'flex-end' }} onClick={(e) => e.stopPropagation()}>
                      <button onClick={() => showProject(p.id)}>Overview</button>
                    </td>
                  </tr>
                ))}
                {allProjectsList.length === 0 && (
                  <tr>
                    <td colSpan={hasAgentPayment ? 6 : 3} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                      No assigned projects found.
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
        )}
      </>
    </>
  );
}
