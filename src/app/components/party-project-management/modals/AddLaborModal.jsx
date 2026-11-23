'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input } from '../shared';

export default function AddLaborModal() {
  const {
    submitAction, projectVendors, setAddLaborModal, editingLaborId, setEditingLaborId, laborForm,
    setLaborForm, lockedContractorId, setLockedContractorId, modalError, setModalError, saveLabor,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form onSubmit={(e) => submitAction.submit('labor', () => saveLabor(e), { successMessage: editingLaborId ? 'Laborer updated successfully' : 'Laborer added successfully', onError: setModalError })} className="modal-card">
          <h3 style={{ margin: '0 0 12px', fontSize: 17, color: '#0f172a' }}>
            {editingLaborId ? 'Edit Labor Worker' : 'Add Labor Worker to Project'}
          </h3>

          {modalError && (
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '8px 12px', borderRadius: 6, marginBottom: 12, fontSize: 13 }}>
              ⚠️ {modalError}
            </div>
          )}

          {lockedContractorId && (
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 6, padding: '8px 12px', marginBottom: 12, fontSize: 12, color: '#1e40af' }}>
              👷 <b>Contractor Team Worker:</b> Adding worker directly to <b>{projectVendors.find((pv) => String(pv.id) === String(lockedContractorId))?.vendor_name || 'Contractor'}</b> team.
            </div>
          )}

          <div style={{ marginBottom: 12 }}>
            <Input
              label="Worker Full Name"
              name="name"
              value={laborForm.name}
              set={setLaborForm}
              required
              placeholder="e.g. Ramesh Kumar"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
            <Input
              label="Phone Number"
              name="phone"
              value={laborForm.phone}
              set={setLaborForm}
              placeholder="e.g. 9876543210"
            />
            <Input
              label="Trade / Skill"
              name="trade"
              value={laborForm.trade}
              set={setLaborForm}
              placeholder="e.g. Mason, Helper, Painter, Carpenter"
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div>
              <label>
                <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
                  Contractor / Linked Vendor
                </small>
                <select
                  value={laborForm.project_vendor_id}
                  disabled={Boolean(lockedContractorId)}
                  onChange={(e) => setLaborForm({ ...laborForm, project_vendor_id: e.target.value })}
                >
                  <option value="">⚡ Independent (Direct Worker / No Contractor)</option>
                  {projectVendors.map((pv) => (
                    <option key={pv.id} value={pv.id}>
                      🏢 {pv.vendor_name} ({pv.trade || 'Vendor'} — {pv.work_description})
                    </option>
                  ))}
                </select>
              </label>
              <span style={{ fontSize: 10, color: '#64748b', display: 'block', marginTop: 2 }}>
                {lockedContractorId ? 'Locked to this contractor team.' : 'Leave Independent if directly hired without a contractor.'}
              </span>
            </div>

            <Input
              label="Daily Rate (₹/day)"
              name="daily_rate"
              type="number"
              value={laborForm.daily_rate}
              set={setLaborForm}
              required
              min="0"
              placeholder="e.g. 600"
            />
          </div>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            <button
              type="button"
              className="muted"
              disabled={submitAction.isSubmitting('labor')}
              onClick={() => {
                setAddLaborModal(false);
                setEditingLaborId(null);
                setLockedContractorId(null);
                setModalError('');
              }}
            >
              Cancel
            </button>
            <button type="submit" disabled={submitAction.isSubmitting('labor')}>
              {submitAction.isSubmitting('labor') ? 'Saving…' : (editingLaborId ? 'Update Laborer' : 'Add Laborer')}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
