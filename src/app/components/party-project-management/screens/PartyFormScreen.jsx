'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input } from '../shared';

export default function PartyFormScreen() {
  const {
    submitAction, partyForm, setPartyForm, setMessage, saveParty,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <form onSubmit={(e) => submitAction.submit('party', () => saveParty(e), { successMessage: partyForm.id ? 'Party updated successfully' : 'Party added successfully', onError: setMessage })}>
        <h3>{partyForm.id ? 'Edit' : 'Add'} Party</h3>
        <div className="grid">
          <Input label="Name" name="name" value={partyForm.name} set={setPartyForm} required />
          <Input label="Phone" name="phone" value={partyForm.phone} set={setPartyForm} />
          <Input label="Email" name="email" value={partyForm.email} set={setPartyForm} type="email" />
          <Input label="GST No." name="gst_no" value={partyForm.gst_no} set={setPartyForm} />
          <label style={{ gridColumn: '1/-1' }}>
            <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Address</small>
            <textarea
              value={partyForm.address || ''}
              onChange={(e) => setPartyForm((x) => ({ ...x, address: e.target.value }))}
              style={{ height: 60 }}
            />
          </label>
        </div>
        <p style={{ marginTop: 14 }}>
          <button type="submit" disabled={submitAction.isSubmitting('party')}>{submitAction.isSubmitting('party') ? 'Saving…' : (partyForm.id ? 'Save Party' : 'Add Party')}</button>
        </p>
      </form>
    </>
  );
}
