'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input } from '../shared';

export default function LocalVendorModal() {
  const {
    submitAction, setLocalVendorModal, localVendorForm, setLocalVendorForm, modalError, setModalError,
    saveLocalVendor,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form
          onSubmit={(e) =>
            submitAction.submit('localVendor', () => saveLocalVendor(e), {
              successMessage: 'Local vendor added successfully',
              onError: setModalError,
            })
          }
          className="modal-card"
        >
          <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>
            Add Local / Site Vendor
          </h3>
          {modalError && (
            <div
              role="alert"
              style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                color: '#b91c1c',
                padding: '8px 12px',
                borderRadius: 6,
                marginBottom: 12,
                fontSize: 13,
              }}
            >
              {modalError}
            </div>
          )}

          <div className="grid">
            <Input
              label="Vendor / Shop Name *"
              name="name"
              value={localVendorForm.name}
              set={setLocalVendorForm}
              required
              placeholder="e.g. Gupta Reti & Rodi Supplier"
            />
            <Input
              label="Mobile / Phone Number"
              name="phone"
              value={localVendorForm.phone}
              set={setLocalVendorForm}
              placeholder="e.g. 9876543210"
            />
            <Input
              label="City / Area"
              name="city"
              value={localVendorForm.city}
              set={setLocalVendorForm}
              placeholder="e.g. Moradabad Local"
            />
            <Input
              label="Material Category / Supply Item"
              name="material_type"
              value={localVendorForm.material_type}
              set={setLocalVendorForm}
              placeholder="e.g. Sand / Rodi / Bricks / Hardware"
            />
            <Input
              label="Address / Landmark"
              name="address"
              value={localVendorForm.address}
              set={setLocalVendorForm}
              placeholder="e.g. Near Bypass Chowk"
            />
          </div>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            <button
              type="button"
              className="muted"
              disabled={submitAction.isSubmitting('localVendor')}
              onClick={() => {
                setLocalVendorModal(false);
                setModalError('');
              }}
            >
              Cancel
            </button>
            <button type="submit" disabled={submitAction.isSubmitting('localVendor')}>
              {submitAction.isSubmitting('localVendor') ? 'Saving…' : 'Save Local Vendor'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
