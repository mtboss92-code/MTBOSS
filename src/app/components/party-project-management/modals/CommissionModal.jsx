'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input } from '../shared';

export default function CommissionModal() {
  const {
    submitAction, modalReadOnly, modalError, setModalError, setCommissionModal, commissionForm,
    setCommissionForm, editingCommissionId, saveCommissionEntry,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form
          onSubmit={(e) =>
            submitAction.submit('commission', () => saveCommissionEntry(e), {
              successMessage: editingCommissionId ? 'Commission updated successfully' : 'Commission recorded successfully',
              onError: setModalError,
            })
          }
          className="modal-card"
        >
          <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>
            {modalReadOnly ? '👁️ View Commission' : (editingCommissionId ? '✏️ Edit Commission' : 'Record Commission')}
          </h3>
          {modalReadOnly && (
            <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: 8, padding: '10px 14px', marginBottom: 14, color: '#92400e', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16 }}>🔒</span>
              <div><strong>Read Only (Locked):</strong> This record was created on a previous date and cannot be modified.</div>
            </div>
          )}
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
          <fieldset disabled={modalReadOnly} style={{ border: 'none', padding: 0, margin: 0, opacity: modalReadOnly ? 0.9 : 1 }}>
            <div className="grid">
            <Input
              label="Date"
              name="commission_date"
              type="date"
              value={commissionForm.commission_date}
              set={setCommissionForm}
              required
            />
            <Input
              label="Person Name"
              name="person_name"
              value={commissionForm.person_name}
              set={setCommissionForm}
              required
              placeholder="e.g. Rahul Sharma"
              maxLength={150}
            />
            <Input
              label="Amount (₹)"
              name="amount"
              type="number"
              step="any"
              min="1"
              value={commissionForm.amount}
              set={setCommissionForm}
              required
              placeholder="e.g. 5000"
            />
            <Input
              label="Note"
              name="note"
              value={commissionForm.note}
              set={setCommissionForm}
              placeholder="e.g. Client reference commission"
            />
          </div>
          </fieldset>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            {modalReadOnly ? (
              <button
                type="button"
                className="muted"
                onClick={() => setCommissionModal(false)}
                style={{ padding: '8px 20px', borderRadius: 6 }}
              >
                Close
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="muted"
                  disabled={submitAction.isSubmitting('commission')}
                  onClick={() => setCommissionModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" disabled={submitAction.isSubmitting('commission')}>
                  {submitAction.isSubmitting('commission') ? 'Saving…' : (editingCommissionId ? 'Update Commission' : 'Save Commission')}
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
