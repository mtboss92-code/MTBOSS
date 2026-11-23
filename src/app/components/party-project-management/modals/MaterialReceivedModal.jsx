'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input, UnitSelector, INR } from '../shared';

export default function MaterialReceivedModal() {
  const {
    submitAction, isSupervisor, modalReadOnly, suppliersMaster, modalError, setModalError,
    setReceivedModal, receivedForm, setReceivedForm, editingReceivedId, setBillFile, projectStaff,
    handleMaterialNameChange, saveReceivedEntry,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form onSubmit={(e) => submitAction.submit('delivery', () => saveReceivedEntry(e), { successMessage: 'Vendor delivery saved successfully', onError: setModalError })} className="modal-card">
          <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>
            {modalReadOnly ? '👁️ View Vendor Material Delivery' : (editingReceivedId ? '✏️ Edit Vendor Material Delivery' : 'Record Vendor Material Delivery')}
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
              value={receivedForm.material_name}
              onChange={(e) => handleMaterialNameChange(e.target.value, receivedForm, setReceivedForm, 'material_name')}
              required
              placeholder="e.g. Cement 53 Grade"
            />
            <UnitSelector
              label="Unit / इकाई"
              value={receivedForm.unit}
              onChange={(u) => setReceivedForm((prev) => ({ ...prev, unit: u }))}
              required
            />
            <Input
              label={`Quantity (${receivedForm.unit || 'units'})`}
              name="quantity"
              type="number"
              step="any"
              min="0.001"
              value={receivedForm.quantity}
              set={setReceivedForm}
              required
            />
            {!isSupervisor && (
              <Input
                label={`Rate (₹ per ${receivedForm.unit || 'unit'})`}
                name="rate"
                type="number"
                step="any"
                min="0"
                value={receivedForm.rate}
                set={setReceivedForm}
                required
              />
            )}
            <Input label="Received Date" name="received_date" type="date" value={receivedForm.received_date} set={setReceivedForm} required />
            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Vendor</small>
              <select
                value={receivedForm.supplier_id ? `reg_${receivedForm.supplier_id}` : (receivedForm.supplier_name ? `local_${receivedForm.supplier_name}` : '')}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val.startsWith('reg_')) {
                    const sId = Number(val.replace('reg_', ''));
                    const supplier = suppliersMaster.find((item) => Number(item.id) === sId);
                    setReceivedForm({
                      ...receivedForm,
                      supplier_id: sId,
                      supplier_name: supplier ? (supplier.shop_name || supplier.business_name || '') : receivedForm.supplier_name,
                    });
                  } else if (val.startsWith('local_')) {
                    const localName = val.replace('local_', '');
                    setReceivedForm({
                      ...receivedForm,
                      supplier_id: '',
                      supplier_name: localName,
                    });
                  } else {
                    setReceivedForm({
                      ...receivedForm,
                      supplier_id: '',
                      supplier_name: '',
                    });
                  }
                }}
              >
                <option value="">Select Vendor (or type name below)</option>
                {suppliersMaster.filter((s) => s.is_local || (!s.is_registered && s.shop_name)).length > 0 && (
                  <optgroup label="📍 Project Local Vendors">
                    {suppliersMaster.filter((s) => s.is_local || (!s.is_registered && s.shop_name)).map((local) => (
                      <option key={`local_${local.shop_name}`} value={`local_${local.shop_name}`}>
                        {local.shop_name} {local.phone ? `(${local.phone})` : ''} {local.city ? `• ${local.city}` : ''}
                      </option>
                    ))}
                  </optgroup>
                )}
                <optgroup label="🏢 Registered System Vendors">
                  {suppliersMaster.filter((s) => s.is_registered).map((supplier) => (
                    <option key={`reg_${supplier.id}`} value={`reg_${supplier.id}`}>
                      {supplier.shop_name || supplier.business_name || `Vendor #${supplier.id}`} {supplier.phone ? `(${supplier.phone})` : ''} {supplier.city ? `• ${supplier.city}` : ''}
                    </option>
                  ))}
                </optgroup>
              </select>
            </label>
            <Input label="Vendor Name (if typing new local vendor)" name="supplier_name" value={receivedForm.supplier_name} set={setReceivedForm} placeholder="e.g. Local Bhatta / Hardware" />
            <Input label="Challan / Invoice No." name="challan_no" value={receivedForm.challan_no} set={setReceivedForm} />
            <Input label="Vehicle / Gaadi No." name="vehicle_no" value={receivedForm.vehicle_no || ''} set={setReceivedForm} placeholder="e.g. UP 21 BT 4589" />
            <Input label="Driver / Delivered By (Kon Leke Aaya)" name="driver_name" value={receivedForm.driver_name || ''} set={setReceivedForm} placeholder="Driver name & mobile" />
            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Received By (Site Pe Kisne Receive Kiya)</small>
              <input
                list="site-staff-list"
                name="received_by"
                value={receivedForm.received_by || ''}
                onChange={(e) => setReceivedForm({ ...receivedForm, received_by: e.target.value })}
                placeholder="Select or enter receiver name"
              />
              <datalist id="site-staff-list">
                {projectStaff.map((st) => (
                  <option key={st.id} value={`${st.name} (${st.role})`} />
                ))}
              </datalist>
            </label>
            <Input label="Note" name="note" value={receivedForm.note} set={setReceivedForm} />
            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Upload Bill (optional)</small>
              <input type="file" accept="image/jpeg,image/png,image/webp,application/pdf" onChange={(e) => setBillFile(e.target.files[0] || null)} />
            </label>
          </div>
          {!isSupervisor && (
            <div style={{ marginTop: 12, textAlign: 'right', fontWeight: 700 }}>
              Total Amount: {INR(Number(receivedForm.quantity || 0) * Number(receivedForm.rate || 0))}
            </div>
          )}
          </fieldset>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            {modalReadOnly ? (
              <button type="button" className="muted" onClick={() => setReceivedModal(false)} style={{ padding: '8px 20px', borderRadius: 6 }}>
                Close
              </button>
            ) : (
              <>
                <button type="button" className="muted" disabled={submitAction.isSubmitting('delivery')} onClick={() => setReceivedModal(false)}>
                  Cancel
                </button>
                <button type="submit" disabled={submitAction.isSubmitting('delivery')}>{submitAction.isSubmitting('delivery') ? 'Saving…' : (editingReceivedId ? 'Update Vendor Delivery' : 'Save Vendor Delivery')}</button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
