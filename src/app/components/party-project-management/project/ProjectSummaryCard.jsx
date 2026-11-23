'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function ProjectSummaryCard() {
  const {
    isAgent, submitAction, setScreen, isSupervisor, hasAgentPayment, hasAgentLabor,
    hasAgentConstruction, party, project, setProjectForm, projectSuppliers, setModalError,
    projectAgents, allAgentsList, assignAgentModal, setAssignAgentModal, assigningAgentId,
    setAssigningAgentId, openDeleteProjectModal, assignAgent, removeAgent,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 20 }}>{project.name}</h3>
            <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: 13 }}>
              Party: <b>{project.party_name}</b> &bull; Site: {project.site_address || 'No address'} &bull; Status: <b>{project.status}</b> &bull; Running: <b>{project.days_running || 0} days</b>
            </p>
          </div>
          {!isAgent && (
            <div style={{ display: 'flex', gap: 6 }}>
              {!isSupervisor && (
                <button onClick={() => setAssignAgentModal(true)}>+ Assign Agent</button>
              )}
              <button
                className="muted"
                onClick={() => {
                  setProjectForm(project);
                  setScreen('projectForm');
                }}
              >
                Edit Project
              </button>
              {!isSupervisor && (
                <button
                  className="danger"
                  onClick={() => openDeleteProjectModal(project, party?.party?.name || project.party_name)}
                >
                  Delete Project
                </button>
              )}
            </div>
          )}
        </div>

        {/* Assigned Agents */}
        {projectAgents.length > 0 && (
          <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600, alignSelf: 'center' }}>Agents:</span>
            {projectAgents.map((a) => (
              <span key={a.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 20, padding: '2px 10px', fontSize: 12, fontWeight: 600, color: '#1d4ed8' }}>
                {a.name}
                {!isSupervisor && !isAgent && (
                  <button onClick={() => removeAgent(a.id)} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: 13, lineHeight: 1, padding: '0 2px' }}>&times;</button>
                )}
              </span>
            ))}
          </div>
        )}

        {/* Assign Agent Modal */}
        {assignAgentModal && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.5rem', width: 360, boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}>
              <h4 style={{ margin: '0 0 12px' }}>Assign Agent to Project</h4>
              <select
                value={assigningAgentId}
                onChange={(e) => setAssigningAgentId(e.target.value)}
                style={{ width: '100%', padding: '8px', borderRadius: 6, border: '1px solid #e2e8f0', marginBottom: 12 }}
              >
                <option value="">-- Select Agent --</option>
                {allAgentsList
                  .filter((a) => !projectAgents.find((pa) => pa.id === a.id))
                  .map((a) => (
                    <option key={a.id} value={a.id}>{a.name} ({a.city || 'No city'})</option>
                  ))}
              </select>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => submitAction.submit('agent', assignAgent, { successMessage: 'Agent assigned successfully', onError: setModalError })} disabled={!assigningAgentId || submitAction.isSubmitting('agent')}>{submitAction.isSubmitting('agent') ? 'Adding…' : 'Assign Agent'}</button>
                <button className="muted" disabled={submitAction.isSubmitting('agent')} onClick={() => { setAssignAgentModal(false); setAssigningAgentId(''); }}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Financial Overview Cards */}
        <div className="stats" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
          {hasAgentPayment && (
            <>
              <div className="stat">
                <small>Contract Value</small>
                <b>{INR(project.contract_value)}</b>
              </div>
              <div className="stat">
                <small>Received from Party</small>
                <b style={{ color: '#16a34a' }}>{INR(project.received)}</b>
              </div>
              <div className="stat">
                <small>Pending from Party</small>
                <b style={{ color: '#dc2626' }}>{INR(project.pending)}</b>
              </div>
            </>
          )}
          {!isSupervisor && (
            <>
              {hasAgentLabor && (
                <div className="stat">
                  <small>Total Labour Cost</small>
                  <b>{INR(project.total_labour_cost)}</b>
                  <span style={{ fontSize: 10, color: '#64748b', display: 'block', marginTop: 2 }}>
                    Service Provider: {INR(project.vendor_labour_cost ?? (Number(project.daily_labour_cost || 0) + Number(project.contract_labour_cost || 0)))} | Labor: {INR(project.individual_labour_cost || 0)}
                  </span>
                </div>
              )}
              {hasAgentConstruction && (
                <>
                  <div className="stat">
                    <small>Total Material Cost</small>
                    <b style={{ color: '#0369a1' }}>{INR(project.total_material_cost)}</b>
                    <span style={{ fontSize: 10, color: '#64748b', display: 'block', marginTop: 2 }}>
                      Dir: {INR(project.direct_material_cost)} | Ven: {INR(project.total_vendor_material_cost)}
                    </span>
                  </div>
                  <div className="stat">
                    <small>Staff Cost</small>
                    <b style={{ color: '#0284c7' }}>{INR(project.total_staff_cost || 0)}</b>
                    <span style={{ fontSize: 10, color: '#64748b', display: 'block', marginTop: 2 }}>
                      Paid: {INR(project.total_paid_to_staff || 0)} | Due: {INR(Math.max(0, Number(project.total_staff_cost || 0) - Number(project.total_paid_to_staff || 0)))}
                    </span>
                  </div>
                  <div className="stat">
                    <small>Commission</small>
                    <b style={{ color: '#d97706' }}>{INR(project.total_commission || 0)}</b>
                  </div>
                  <div className="stat">
                    <small>Other Expenses</small>
                    <b>{INR(project.total_other_expenses)}</b>
                  </div>
                </>
              )}
              {hasAgentPayment && (
                <>
                  <div className="stat">
                    <small>Total Project Expense</small>
                    <b style={{ color: '#b45309' }}>{INR(project.total_expense)}</b>
                    <span style={{ fontSize: 10, color: '#64748b', display: 'block', marginTop: 2 }}>
                      Labour + Mat + Staff + Comm + Exp
                    </span>
                  </div>
                  <div className="stat">
                    <small>Paid to Contractors</small>
                    <b style={{ color: '#ea580c' }}>{INR(project.total_paid_to_vendors)}</b>
                  </div>
                  <div className="stat">
                    <small>Paid to Vendors</small>
                    <b style={{ color: '#0284c7' }}>{INR(project.total_paid_to_suppliers ?? projectSuppliers.reduce((sum, s) => sum + (Number(s.total_paid) || 0), 0))}</b>
                  </div>
                  <div className="stat">
                    <small>Paid to Staff</small>
                    <b style={{ color: '#16a34a' }}>{INR(project.total_paid_to_staff || 0)}</b>
                  </div>
                  <div className="stat">
                    <small>Total Balance Due</small>
                    <b style={{ color: '#dc2626' }}>{INR(project.total_pending_payable || 0)}</b>
                    <span style={{ fontSize: 10, color: '#dc2626', display: 'block', marginTop: 2 }}>
                      Total Pending Payable
                    </span>
                  </div>
                  <div className="stat" style={{ background: Number(project.profit_or_loss ?? project.profit_so_far) >= 0 ? '#f0fdf4' : '#fef2f2', border: `1px solid ${Number(project.profit_or_loss ?? project.profit_so_far) >= 0 ? '#bbf7d0' : '#fecaca'}` }}>
                    <small style={{ color: Number(project.profit_or_loss ?? project.profit_so_far) >= 0 ? '#166534' : '#991b1b' }}>Profit So Far</small>
                    <b style={{ color: Number(project.profit_or_loss ?? project.profit_so_far) >= 0 ? '#16a34a' : '#dc2626' }}>
                      {INR(project.profit_or_loss ?? project.profit_so_far)}
                    </b>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
