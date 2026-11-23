'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input, UnitSelector, INR } from '../shared';

export default function MaterialSupplyModal() {
  const {
    submitAction, selectedVendor, setSupplyModal, supplyForm, setSupplyForm, setModalError,
    handleMaterialNameChange, saveMaterialSupply,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form onSubmit={(e) => submitAction.submit('supply', () => saveMaterialSupply(e), { successMessage: 'Vendor delivery saved successfully', onError: setModalError })} className="modal-card">
          <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>
            Record Vendor Material Supply
          </h3>
          <p style={{ margin: '0 0 12px', fontSize: 12, color: '#64748b' }}>
            Vendor: <strong>{selectedVendor.vendor_name}</strong>
          </p>

          <div className="grid">
            <Input
              label="Item Name (e.g. Red Bricks, Sand)"
              name="item_name"
              list="all-master-materials-list"
              value={supplyForm.item_name}
              onChange={(e) => handleMaterialNameChange(e.target.value, supplyForm, setSupplyForm, 'item_name')}
              required
            />
            <UnitSelector
              label="Unit / इकाई"
              value={supplyForm.unit}
              onChange={(u) => setSupplyForm((prev) => ({ ...prev, unit: u }))}
              required
            />
            <Input
              label={`Quantity (${supplyForm.unit || 'units'})`}
              name="quantity"
              type="number"
              step="any"
              min="0.01"
              value={supplyForm.quantity}
              set={setSupplyForm}
              required
            />
            <Input
              label={`Rate (₹ per ${supplyForm.unit || 'unit'})`}
              name="rate"
              type="number"
              step="any"
              min="0"
              value={supplyForm.rate}
              set={setSupplyForm}
              required
            />
            <Input label="Supply Date" name="supply_date" type="date" value={supplyForm.supply_date} set={setSupplyForm} required />

            <Input label="Note" name="note" value={supplyForm.note} set={setSupplyForm} />
          </div>

          <div style={{ marginTop: 12, textAlign: 'right', fontWeight: 700 }}>
            Estimated Total: {INR(Number(supplyForm.quantity || 0) * Number(supplyForm.rate || 0))}
          </div>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            <button type="button" className="muted" disabled={submitAction.isSubmitting('supply')} onClick={() => setSupplyModal(false)}>
              Cancel
            </button>
            <button type="submit" disabled={submitAction.isSubmitting('supply')}>{submitAction.isSubmitting('supply') ? 'Saving…' : 'Save Supply'}</button>
          </div>
        </form>
      </div>
    </>
  );
}
