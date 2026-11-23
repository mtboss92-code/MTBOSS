'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input, UnitSelector } from '../shared';

export default function MaterialUsedModal() {
  const {
    submitAction, modalReadOnly, modalError, setModalError, stockRows, setUsedModal, usedForm,
    setUsedForm, editingUsedId, handleMaterialNameChange, saveUsedEntry,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form onSubmit={(e) => submitAction.submit('usage', () => saveUsedEntry(e), { successMessage: 'Material usage saved successfully', onError: setModalError })} className="modal-card">
          <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>
            {modalReadOnly ? '👁️ View Daily Material Usage' : (editingUsedId ? '✏️ Edit Daily Material Usage' : '🧱 Record Daily Material Consumption')}
          </h3>
          {modalReadOnly && (
            <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: 8, padding: '10px 14px', marginBottom: 14, color: '#92400e', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16 }}>🔒</span>
              <div><strong>Read Only (Locked):</strong> This record was created on a previous date and cannot be modified.</div>
            </div>
          )}
          {modalError && <div role="alert" style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '8px 12px', borderRadius: 6, marginBottom: 12, fontSize: 13 }}>{modalError}</div>}
          <fieldset disabled={modalReadOnly} style={{ border: 'none', padding: 0, margin: 0, opacity: modalReadOnly ? 0.9 : 1 }}>
            {stockRows.length > 0 && !modalReadOnly && !editingUsedId && (
              <div style={{ marginBottom: 14, background: '#f8fafc', padding: '10px 12px', borderRadius: 8, border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: 11, color: '#475569', fontWeight: 600, marginBottom: 6 }}>
                  Quick Select Material from Site Stock:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {stockRows.map((s) => {
                    const isSel = usedForm.material_name?.toLowerCase() === s.name?.toLowerCase();
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          setUsedForm((prev) => ({
                            ...prev,
                            material_id: String(s.id),
                            material_name: s.name,
                            unit: s.unit || prev.unit,
                          }));
                        }}
                        style={{
                          fontSize: 11,
                          padding: '4px 10px',
                          borderRadius: 6,
                          background: isSel ? '#dbeafe' : '#ffffff',
                          color: isSel ? '#1d4ed8' : '#334155',
                          border: isSel ? '1.5px solid #3b82f6' : '1px solid #cbd5e1',
                          cursor: 'pointer',
                          fontWeight: isSel ? 700 : 500,
                        }}
                      >
                        {s.name} ({Number(s.stock ?? s.current_stock ?? 0).toFixed(1)} {s.unit})
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="grid">
            <Input
              label="Material Name"
              name="material_name"
              list="all-master-materials-list"
              value={usedForm.material_name}
              onChange={(e) => handleMaterialNameChange(e.target.value, usedForm, setUsedForm, 'material_name')}
              required
              placeholder="e.g. Cement 53 Grade"
            />
            <UnitSelector
              label="Unit / इकाई"
              value={usedForm.unit}
              onChange={(u) => setUsedForm((prev) => ({ ...prev, unit: u }))}
              required
            />
            <Input
              label={`Quantity Used (${usedForm.unit || 'units'})`}
              name="quantity"
              type="number"
              step="any"
              min="0.001"
              value={usedForm.quantity}
              set={setUsedForm}
              required
            />
            <Input label="Usage Date" name="used_date" type="date" value={usedForm.used_date} set={setUsedForm} required />
            <Input label="Used For (e.g. Foundation, Slab, Plaster)" name="used_for" value={usedForm.used_for} set={setUsedForm} placeholder="e.g. 1st Floor Slab casting" />
            <Input label="Note / Remarks" name="note" value={usedForm.note} set={setUsedForm} placeholder="Optional site remarks" />
          </div>
          </fieldset>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            {modalReadOnly ? (
              <button type="button" className="muted" onClick={() => setUsedModal(false)} style={{ padding: '8px 20px', borderRadius: 6 }}>
                Close
              </button>
            ) : (
              <>
                <button type="button" className="muted" disabled={submitAction.isSubmitting('usage')} onClick={() => setUsedModal(false)}>
                  Cancel
                </button>
                <button type="submit" disabled={submitAction.isSubmitting('usage')}>{submitAction.isSubmitting('usage') ? 'Saving…' : (editingUsedId ? 'Update Usage' : 'Record Usage')}</button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
