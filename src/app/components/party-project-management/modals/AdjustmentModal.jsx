'use client';

import RequiredAsterisk from '../../shared/RequiredAsterisk';
import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input, UnitSelector } from '../shared';

export default function AdjustmentModal() {
  const {
    submitAction, project, modalReadOnly, projectSuppliers, modalError, setModalError,
    setAdjustmentModal, adjustmentForm, setAdjustmentForm, editingAdjId, setBillFile, allProjectsList,
    handleMaterialNameChange, saveAdjustmentEntry,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form onSubmit={(e) => submitAction.submit('adjustment', () => saveAdjustmentEntry(e), { successMessage: 'Entry saved successfully', onError: setModalError })} className="modal-card">
          <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>
            {modalReadOnly ? '👁️ View' : (editingAdjId ? '✏️ Edit' : 'Record')} {
              ['return_material', 'return_to_supplier'].includes(adjustmentForm.adjustment_type)
                ? 'Return Material'
                : ['scrap_material', 'scrap'].includes(adjustmentForm.adjustment_type)
                ? 'Scrap Material'
                : 'Material Adjustment / Wastage'
            }
          </h3>
          {modalReadOnly && (
            <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: 8, padding: '10px 14px', marginBottom: 14, color: '#92400e', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16 }}>🔒</span>
              <div><strong>Read Only (Locked):</strong> This record was created on a previous date and cannot be modified.</div>
            </div>
          )}
          {modalError && <div role="alert" style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '8px 12px', borderRadius: 6, marginBottom: 12, fontSize: 13 }}>{modalError}</div>}
          <fieldset disabled={modalReadOnly} style={{ border: 'none', padding: 0, margin: 0, opacity: modalReadOnly ? 0.9 : 1 }}>
            <div className="grid">
            <Input
              label="Material Name"
              name="material_name"
              list="all-master-materials-list"
              value={adjustmentForm.material_name}
              onChange={(e) => handleMaterialNameChange(e.target.value, adjustmentForm, setAdjustmentForm, 'material_name')}
              required
              placeholder="e.g. Cement, Steel, Bricks, Copper Wire"
            />
            <UnitSelector
              label="Unit / इकाई"
              value={adjustmentForm.unit}
              onChange={(u) => setAdjustmentForm((prev) => ({ ...prev, unit: u }))}
              required
            />

            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
                Adjustment Type <RequiredAsterisk />
              </small>
              <select
                value={adjustmentForm.adjustment_type}
                onChange={(e) => setAdjustmentForm({ ...adjustmentForm, adjustment_type: e.target.value })}
              >
                <option value="wastage">Wastage</option>
                <option value="damage">Damage</option>
                <option value="return_material">Return Material (Return to Vendor / Site)</option>
                <option value="scrap_material">Scrap Material</option>
                <option value="transfer_out">Transfer to Another Project</option>
              </select>
            </label>

            <Input
              label={`Quantity (${adjustmentForm.unit || 'units'})`}
              name="quantity"
              type="number"
              step="any"
              min="0.001"
              value={adjustmentForm.quantity}
              set={setAdjustmentForm}
              required
            />
            <Input label="Date" name="adjustment_date" type="date" value={adjustmentForm.adjustment_date} set={setAdjustmentForm} required />

            {['return_material', 'return_to_supplier'].includes(adjustmentForm.adjustment_type) && (
              <>
                <label>
                  <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
                    Returned To / Vendor Name (Optional)
                  </small>
                  <input
                    type="text"
                    list="project-suppliers-list"
                    placeholder="Select or enter vendor name"
                    value={adjustmentForm.supplier_name || ''}
                    onChange={(e) => {
                      const val = e.target.value;
                      const matched = (projectSuppliers || []).find((s) => (s.supplier_name || s.name || '').toLowerCase() === val.trim().toLowerCase());
                      setAdjustmentForm({
                        ...adjustmentForm,
                        supplier_name: val,
                        supplier_id: matched ? (matched.supplier_id || matched.id || '') : adjustmentForm.supplier_id
                      });
                    }}
                  />
                  <datalist id="project-suppliers-list">
                    {projectSuppliers.map((s) => (
                      <option key={s.key || s.id || s.supplier_id} value={s.supplier_name || s.name} />
                    ))}
                  </datalist>
                </label>
                <Input
                  label="Refund / Credit Amount (₹) (Optional)"
                  name="amount"
                  type="number"
                  step="any"
                  min="0"
                  value={adjustmentForm.amount || ''}
                  set={setAdjustmentForm}
                  placeholder="e.g. 1500"
                />
              </>
            )}

            {['scrap_material', 'scrap'].includes(adjustmentForm.adjustment_type) && (
              <>
                <Input
                  label="Scrap Sold Amount (₹) (Optional)"
                  name="amount"
                  type="number"
                  step="any"
                  min="0"
                  value={adjustmentForm.amount || ''}
                  set={setAdjustmentForm}
                  placeholder="e.g. 500"
                />
                <label>
                  <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
                    Buyer / Scrap Dealer Name (Optional)
                  </small>
                  <input
                    type="text"
                    placeholder="e.g. Gupta Scrap Center"
                    value={adjustmentForm.supplier_name || ''}
                    onChange={(e) => setAdjustmentForm({ ...adjustmentForm, supplier_name: e.target.value })}
                  />
                </label>
              </>
            )}

            {adjustmentForm.adjustment_type === 'transfer_out' && (
              <label>
                <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
                  Destination Project <RequiredAsterisk />
                </small>
                <select
                  required
                  value={adjustmentForm.to_project_id}
                  onChange={(e) => setAdjustmentForm({ ...adjustmentForm, to_project_id: e.target.value })}
                >
                  <option value="">Select Destination Project</option>
                  {allProjectsList
                    .filter((p) => p.id !== project.id)
                    .map((p) => (
                      <option value={p.id} key={p.id}>{p.name}</option>
                    ))}
                </select>
              </label>
            )}

            <Input label="Note / Reason" name="note" value={adjustmentForm.note} set={setAdjustmentForm} placeholder="e.g. Rain damage / scrap pieces / returned unused bags" />

            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
                Upload Bill / Return Slip / Receipt (optional)
              </small>
              <input type="file" accept="image/jpeg,image/png,image/webp,application/pdf" onChange={(e) => setBillFile(e.target.files[0] || null)} />
            </label>
          </div>
          </fieldset>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            {modalReadOnly ? (
              <button type="button" className="muted" onClick={() => setAdjustmentModal(false)} style={{ padding: '8px 20px', borderRadius: 6 }}>
                Close
              </button>
            ) : (
              <>
                <button type="button" className="muted" disabled={submitAction.isSubmitting('adjustment')} onClick={() => setAdjustmentModal(false)}>
                  Cancel
                </button>
                <button type="submit" disabled={submitAction.isSubmitting('adjustment')}>
                  {submitAction.isSubmitting('adjustment') ? 'Saving…' : (editingAdjId ? 'Update Entry' : 'Save Entry')}
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
