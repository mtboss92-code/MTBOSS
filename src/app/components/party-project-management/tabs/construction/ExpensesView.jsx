'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { INR, expenseBlank, parseExpenseItem, isSameDayIST } from '../../shared';

export default function ExpensesView() {
  const {
    isAgent, setModalReadOnly, setModalError, expenseRows, expenseSummary, expenseCategoryFilter,
    setExpenseCategoryFilter, expenseSearch, setExpenseSearch, setExpenseModal, setExpenseForm,
    setEditingExpenseId, del,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      <select
      value={expenseCategoryFilter}
      onChange={(e) => setExpenseCategoryFilter(e.target.value)}
      style={{ maxWidth: 180 }}
      >
      <option value="">All Categories</option>
      <option value="transport">Transport</option>
      <option value="machine_rent">Machine Rent</option>
      <option value="electricity_water">Electricity &amp; Water</option>
      <option value="permit">Permits &amp; Approvals</option>
      <option value="misc">Miscellaneous</option>
      <option value="tools">Tools</option>
      <option value="rent">Rent</option>
      </select>
      <input
      type="text"
      placeholder="Search item, note..."
      value={expenseSearch}
      onChange={(e) => setExpenseSearch(e.target.value)}
      style={{ maxWidth: 200 }}
      />
      <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>
      Total: {INR(expenseSummary.totalAmount)}
      </span>
      </div>

      <button
      onClick={() => {
      setExpenseForm(expenseBlank);
      setEditingExpenseId(null);
      setModalError('');
      setExpenseModal(true);
      }}
      >
      + Record Other Expense
      </button>
      </div>

      <table>
      <thead>
      <tr>
      <th>Date</th>
      <th>Category</th>
      <th>Item</th>
      <th>Amount</th>
      <th>Note</th>
      <th>Recorded By</th>
      <th style={{ textAlign: 'right' }}>Actions</th>
      </tr>
      </thead>
      <tbody>
      {expenseRows
      .filter((r) => {
        const parsed = parseExpenseItem(r);
        const rowCat = parsed.category || r.category;
        if (expenseCategoryFilter && rowCat !== expenseCategoryFilter) return false;
        if (expenseSearch.trim()) {
          const q = expenseSearch.trim().toLowerCase();
          const cat = (rowCat || '').toLowerCase();
          const creator = (r.created_by || '').toLowerCase();
          return (
            parsed.item_name.toLowerCase().includes(q) ||
            parsed.note.toLowerCase().includes(q) ||
            cat.includes(q) ||
            creator.includes(q)
          );
        }
        return true;
      })
      .map((r) => {
        const parsed = parseExpenseItem(r);
        const rowCat = parsed.category || r.category;
        return (
          <tr key={r.id}>
            <td>{r.expense_date}</td>
            <td>
              <span className="badge badge-active" style={{ textTransform: 'capitalize' }}>
                {rowCat?.replace(/_/g, ' ')}
              </span>
            </td>
            <td style={{ fontWeight: 500, color: parsed.item_name ? '#0f172a' : '#94a3b8' }}>
              {parsed.item_name || '—'}
            </td>
            <td style={{ fontWeight: 700, color: '#b45309' }}>{INR(r.amount)}</td>
            <td>{parsed.note || '—'}</td>
            <td style={{ fontSize: 11, color: '#64748b' }}>{r.created_by}</td>
            <td className="actions" style={{ justifyContent: 'flex-end', display: 'flex', gap: 6 }} onClick={(e) => e.stopPropagation()}>
              {isSameDayIST(r.created_at || r.expense_date) ? (
                <>
                  <button
                    className="muted"
                    style={{ padding: '4px 8px', fontSize: 12 }}
                    onClick={() => {
                      setEditingExpenseId(r.id);
                      const parsedItem = parseExpenseItem(r);
                      setExpenseForm({
                        category: parsedItem.category || r.category,
                        item_name: parsedItem.item_name,
                        amount: r.amount,
                        expense_date: r.expense_date,
                        note: parsedItem.note,
                      });
                      setModalReadOnly(false);
                      setModalError('');
                      setExpenseModal(true);
                    }}
                  >
                    ✏️ Edit
                  </button>
                  {!isAgent && (
                    <button className="danger" style={{ padding: '4px 8px', fontSize: 12 }} onClick={() => del('expense', r.id)}>
                      Delete
                    </button>
                  )}
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="muted"
                    style={{ padding: '4px 8px', fontSize: 12 }}
                    onClick={() => {
                      setEditingExpenseId(r.id);
                      const parsedItem = parseExpenseItem(r);
                      setExpenseForm({
                        category: parsedItem.category || r.category,
                        item_name: parsedItem.item_name,
                        amount: r.amount,
                        expense_date: r.expense_date,
                        note: parsedItem.note,
                      });
                      setModalReadOnly(true);
                      setModalError('');
                      setExpenseModal(true);
                    }}
                  >
                    👁️ View
                  </button>
                  <span title="Locked: Can only be edited or deleted within 48 hours" style={{ fontSize: 11, color: '#94a3b8' }}>
                    🔒 Locked
                  </span>
                </>
              )}
            </td>
          </tr>
        );
      })}
      {expenseRows.filter((r) => {
      const parsed = parseExpenseItem(r);
      const rowCat = parsed.category || r.category;
      if (expenseCategoryFilter && rowCat !== expenseCategoryFilter) return false;
      if (expenseSearch.trim()) {
        const q = expenseSearch.trim().toLowerCase();
        const cat = (rowCat || '').toLowerCase();
        const creator = (r.created_by || '').toLowerCase();
        return (
          parsed.item_name.toLowerCase().includes(q) ||
          parsed.note.toLowerCase().includes(q) ||
          cat.includes(q) ||
          creator.includes(q)
        );
      }
      return true;
      }).length === 0 && (
      <tr>
        <td colSpan={7} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
          {expenseRows.length === 0 ? 'No other expenses recorded for this project.' : 'No expenses match the filter.'}
        </td>
      </tr>
      )}
      </tbody>
      </table>
      </div>
    </>
  );
}
