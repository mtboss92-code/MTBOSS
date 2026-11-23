'use client';

import RequiredAsterisk from '../../shared/RequiredAsterisk';
import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input, contractorTrades } from '../shared';

export default function AddVendorModal() {
  const {
    submitAction, allVendorsMaster, contractorSearch, setContractorSearch, contractorsLoading,
    setAddVendorModal, vendorMode, setVendorMode, loadContractorsList, assignForm, setAssignForm,
    modalError, setModalError, assignVendorToProject,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form onSubmit={(e) => submitAction.submit('contractor', () => assignVendorToProject(e), { successMessage: vendorMode === 'new' ? 'Contractor created and assigned successfully' : 'Contractor assigned successfully', onError: setModalError })} className="modal-card">
          <h3 style={{ margin: '0 0 12px', fontSize: 17, color: '#0f172a' }}>
            Add Contractor to Project
          </h3>

          {modalError && (
            <div style={{ background: '#fee2e2', border: '1px solid #f87171', borderRadius: 6, padding: '8px 12px', marginBottom: 12, fontSize: 13, color: '#991b1b' }}>
              ⚠️ {modalError}
            </div>
          )}

          <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
            <button
              type="button"
              className={vendorMode === 'existing' ? 'active-btn' : 'muted'}
              onClick={() => { setVendorMode('existing'); setModalError(''); }}
            >
              Select Existing Contractor
            </button>
            <button
              type="button"
              className={vendorMode === 'new' ? 'active-btn' : 'muted'}
              onClick={() => { setVendorMode('new'); setModalError(''); }}
            >
              + Create New Contractor
            </button>
          </div>

          {vendorMode === 'existing' ? (
            <div style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'center' }}>
                <input
                  type="text"
                  placeholder="Search contractor by name or phone..."
                  value={contractorSearch}
                  onChange={(e) => {
                    setContractorSearch(e.target.value);
                    loadContractorsList('all', e.target.value);
                  }}
                  style={{ flex: 1, padding: '7px 10px', fontSize: 13, borderRadius: 6, border: '1px solid #cbd5e1' }}
                />
                <button
                  type="button"
                  className="muted"
                  style={{ padding: '7px 12px', fontSize: 12, whiteSpace: 'nowrap' }}
                  onClick={() => {
                    setContractorSearch('');
                    loadContractorsList('all', '');
                  }}
                >
                  Reset
                </button>
              </div>

              <label>
                <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
                  Select Registered Contractor <RequiredAsterisk />
                </small>
                {contractorsLoading ? (
                  <div style={{ padding: '10px', fontSize: 12, color: '#64748b' }}>
                    Loading registered contractors...
                  </div>
                ) : allVendorsMaster.length > 0 ? (
                  <select
                    required
                    value={assignForm.vendor_id}
                    onChange={(e) => setAssignForm({ ...assignForm, vendor_id: e.target.value })}
                  >
                    <option value="">-- Choose Registered Contractor ({allVendorsMaster.length} available) --</option>
                    {allVendorsMaster.map((v) => (
                      <option value={v.id} key={v.id}>
                        {v.name} ({v.contractor_trade || v.trade || 'General'}) — {v.phone || 'No phone'}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 6, padding: '10px 12px', fontSize: 12, color: '#991b1b', lineHeight: 1.5 }}>
                    ⚠️ Koi registered contractor nahi mila. Vendors &gt; Customers me jakar &apos;Register as Contractor&apos; enable karein.
                  </div>
                )}
              </label>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
              <Input label="Contractor Name" name="new_vendor_name" value={assignForm.new_vendor_name} set={setAssignForm} required />
              <Input label="Phone" name="new_vendor_phone" value={assignForm.new_vendor_phone} set={setAssignForm} />
              <label>
                <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Contractor Type / Trade</small>
                <select value={assignForm.new_vendor_trade} onChange={(e) => setAssignForm({ ...assignForm, new_vendor_trade: e.target.value })}>
                  <option value="">Select contractor type</option>
                  {contractorTrades.map((trade) => <option key={trade} value={trade}>{trade}</option>)}
                </select>
              </label>
              <Input label="Address" name="new_vendor_address" value={assignForm.new_vendor_address} set={setAssignForm} />
            </div>
          )}

          <div style={{ marginBottom: 12 }}>
            <Input label="Work Description" name="work_description" value={assignForm.work_description} set={setAssignForm} required />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600 }}>Pay Type</small>
              <select
                value={assignForm.pay_type}
                onChange={(e) => setAssignForm({ ...assignForm, pay_type: e.target.value })}
              >
                <option value="daily_wage">Daily Wage</option>
                <option value="contract">Fixed Contract</option>
              </select>
            </label>

            {assignForm.pay_type === 'daily_wage' ? (
              <Input label="Daily Rate (₹/day)" name="daily_rate" type="number" value={assignForm.daily_rate} set={setAssignForm} required min="0" />
            ) : (
              <Input label="Total Contract Amount (₹)" name="contract_amount" type="number" value={assignForm.contract_amount} set={setAssignForm} required min="0" />
            )}
          </div>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            <button type="button" className="muted" disabled={submitAction.isSubmitting('contractor')} onClick={() => { setAddVendorModal(false); setModalError(''); }}>
              Cancel
            </button>
            <button type="submit" disabled={submitAction.isSubmitting('contractor')}>{submitAction.isSubmitting('contractor') ? 'Adding…' : 'Assign Contractor'}</button>
          </div>
        </form>
      </div>
    </>
  );
}
