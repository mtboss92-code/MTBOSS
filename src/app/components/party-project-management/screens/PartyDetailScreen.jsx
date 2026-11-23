'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { projectBlank, INR } from '../shared';

export default function PartyDetailScreen() {
  const {
    isAgent, setScreen, isSupervisor, party, setProjectForm, openDeleteProjectModal, showProject,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 18 }}>{party.party.name}</h3>
              <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: 12 }}>
                {party.party.phone} &bull; {party.party.email || 'No email'} &bull; GST: {party.party.gst_no || '—'}
              </p>
            </div>
            <button
              onClick={() => {
                setProjectForm({ ...projectBlank, party_id: String(party.party.id) });
                setScreen('projectForm');
              }}
            >
              + Add Project
            </button>
          </div>

          {(() => {
            const projectsList = party.projects || [];
            const liveContractValue = projectsList.length > 0
              ? projectsList.reduce((acc, p) => acc + Number(p.contract_value || 0), 0)
              : Number(party.party.total_contract_value || 0);
            const liveReceived = projectsList.length > 0
              ? projectsList.reduce((acc, p) => acc + Number(p.received || 0), 0)
              : Number(party.party.total_received || 0);
            const livePending = liveContractValue - liveReceived;
            const liveExpense = projectsList.length > 0
              ? projectsList.reduce((acc, p) => acc + Number(p.total_expense || 0), 0)
              : Number(party.party.total_expense || 0);
            const liveProfit = liveReceived - liveExpense;

            return (
              <div className="stats" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
                <div className="stat">
                  <small>Contract Value</small>
                  <b>{INR(liveContractValue)}</b>
                </div>
                <div className="stat">
                  <small>Received</small>
                  <b style={{ color: '#16a34a' }}>{INR(liveReceived)}</b>
                </div>
                <div className="stat">
                  <small>Pending</small>
                  <b style={{ color: '#dc2626' }}>{INR(livePending)}</b>
                </div>
                {!isSupervisor && (
                  <>
                    <div className="stat">
                      <small>Total Party Expense</small>
                      <b style={{ color: '#b45309' }}>{INR(liveExpense)}</b>
                    </div>
                    <div className="stat" style={{ background: Number(liveProfit) >= 0 ? '#f0fdf4' : '#fef2f2' }}>
                      <small style={{ color: Number(liveProfit) >= 0 ? '#166534' : '#991b1b' }}>Net Profit</small>
                      <b style={{ color: Number(liveProfit) >= 0 ? '#16a34a' : '#dc2626' }}>
                        {INR(liveProfit)}
                      </b>
                    </div>
                  </>
                )}
                <div className="stat">
                  <small>Projects</small>
                  <b>{party.projects.length}</b>
                </div>
              </div>
            );
          })()}
        </div>

        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Contract Value</th>
              <th>Received</th>
              <th>Pending</th>
              {!isSupervisor && <th>Total Expense</th>}
              {!isSupervisor && <th>Profit / Loss</th>}
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {party.projects.map((p) => (
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
                <td>{INR(p.contract_value)}</td>
                <td style={{ color: '#16a34a' }}>{INR(p.received)}</td>
                <td style={{ color: '#dc2626' }}>{INR(p.pending)}</td>
                {!isSupervisor && <td style={{ fontWeight: 600, color: '#b45309' }}>{INR(p.total_expense)}</td>}
                {!isSupervisor && (
                  <td style={{ fontWeight: 700, color: Number(p.profit_or_loss) >= 0 ? '#16a34a' : '#dc2626' }}>
                    {INR(p.profit_or_loss)}
                  </td>
                )}
                <td>
                  <span className={`badge ${p.status === 'completed' ? 'badge-completed' : 'badge-active'}`}>
                    {p.status}
                  </span>
                </td>
                <td className="actions" style={{ justifyContent: 'flex-end' }} onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => showProject(p.id)}>Overview</button>
                  {!isAgent && (
                    <button
                      className="muted"
                      onClick={() => {
                        setProjectForm(p);
                        setScreen('projectForm');
                      }}
                    >
                      Edit
                    </button>
                  )}
                  {!isAgent && !isSupervisor && (
                    <button
                      className="danger"
                      onClick={() => openDeleteProjectModal(p, party?.party?.name)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {party.projects.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                  No projects found for this party.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    </>
  );
}
