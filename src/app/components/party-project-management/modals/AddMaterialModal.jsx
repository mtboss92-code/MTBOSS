'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input, UnitSelector } from '../shared';

export default function AddMaterialModal() {
  const {
    submitAction, setModalError, setAddMaterialModal, materialForm, setMaterialForm,
    handleMaterialNameChange, saveMaterialMaster,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form onSubmit={(e) => submitAction.submit('material', () => saveMaterialMaster(e), { successMessage: 'Material created successfully', onError: setModalError })} className="modal-card">
          <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>
            Add Master Material
          </h3>
          <div className="grid">
            <Input
              label="Material Name"
              name="name"
              list="all-master-materials-list"
              value={materialForm.name}
              onChange={(e) => handleMaterialNameChange(e.target.value, materialForm, setMaterialForm, 'name')}
              required
              placeholder="e.g. Cement 53 Grade"
            />
            <UnitSelector
              label="Unit / इकाई"
              value={materialForm.unit}
              onChange={(u) => setMaterialForm((prev) => ({ ...prev, unit: u }))}
              required
            />
            <Input label="Category" name="category" value={materialForm.category} set={setMaterialForm} placeholder="e.g. Civil, Electrical, Plumbing" />
            <Input label="Min Stock Alert Level" name="min_stock_level" type="number" step="any" min="0" value={materialForm.min_stock_level} set={setMaterialForm} />
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            <button type="button" className="muted" disabled={submitAction.isSubmitting('material')} onClick={() => setAddMaterialModal(false)}>
              Cancel
            </button>
            <button type="submit" disabled={submitAction.isSubmitting('material')}>{submitAction.isSubmitting('material') ? 'Adding…' : 'Create Material'}</button>
          </div>
        </form>
      </div>
    </>
  );
}
