'use client';

import RequiredAsterisk from '../../shared/RequiredAsterisk';
import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { Input } from '../shared';

export default function ExpenseModal() {
  const {
    submitAction, modalReadOnly, modalError, setModalError, setExpenseModal, expenseForm,
    setExpenseForm, editingExpenseId, expenseItemSuggestions, saveExpenseEntry,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="modal-overlay">
        <form onSubmit={(e) => submitAction.submit('expense', () => saveExpenseEntry(e), { successMessage: 'Expense saved successfully', onError: setModalError })} className="modal-card">
          <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>
            {modalReadOnly ? '👁️ View Other Expense' : (editingExpenseId ? '✏️ Edit Other Expense' : 'Record Other Expense')}
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
            <label>
              <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
                Category <RequiredAsterisk />
              </small>
              <select
                value={expenseForm.category}
                onChange={(e) => setExpenseForm({ ...expenseForm, category: e.target.value })}
              >
                <option value="transport">Transport</option>
                <option value="machine_rent">Machine Rent</option>
                <option value="electricity_water">Electricity &amp; Water</option>
                <option value="permit">Permits &amp; Approvals</option>
                <option value="misc">Miscellaneous</option>
                <option value="tools">Tools</option>
                <option value="rent">Rent</option>
              </select>
            </label>
            <Input
              label={['tools', 'rent'].includes(expenseForm.category) ? 'Item / Tool name' : 'Item / Tool name (optional)'}
              name="item_name"
              value={expenseForm.item_name}
              set={setExpenseForm}
              required={['tools', 'rent'].includes(expenseForm.category)}
              placeholder="e.g. Shuttering plate, Centring props, Mixer machine"
              maxLength={120}
              list="other-expenses-items-list"
            />
            <datalist id="other-expenses-items-list">
              {expenseItemSuggestions.map((item) => (
                <option key={item} value={item} />
              ))}
            </datalist>
            <Input label="Amount (₹)" name="amount" type="number" step="any" min="1" value={expenseForm.amount} set={setExpenseForm} required />
            <Input label="Expense Date" name="expense_date" type="date" value={expenseForm.expense_date} set={setExpenseForm} required />
            <Input label="Note / Details" name="note" value={expenseForm.note} set={setExpenseForm} placeholder="e.g. Generator diesel 50L" />
          </div>
          </fieldset>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 16 }}>
            {modalReadOnly ? (
              <button type="button" className="muted" onClick={() => setExpenseModal(false)} style={{ padding: '8px 20px', borderRadius: 6 }}>
                Close
              </button>
            ) : (
              <>
                <button type="button" className="muted" disabled={submitAction.isSubmitting('expense')} onClick={() => setExpenseModal(false)}>
                  Cancel
                </button>
                <button type="submit" disabled={submitAction.isSubmitting('expense')}>{submitAction.isSubmitting('expense') ? 'Saving…' : (editingExpenseId ? 'Update Expense' : 'Save Expense')}</button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
