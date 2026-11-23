'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { usedBlank, today, adjustmentBlank, expenseBlank } from '../shared';
import AdjustmentsView from './construction/AdjustmentsView';
import ExpensesView from './construction/ExpensesView';
import MaterialReceivedView from './construction/MaterialReceivedView';
import MaterialUsedView from './construction/MaterialUsedView';
import ReturnMaterialView from './construction/ReturnMaterialView';
import ScrapMaterialView from './construction/ScrapMaterialView';
import StockView from './construction/StockView';

export default function ConstructionTab() {
  const {
    constructionSubTab, handleConstructionSubChange, setModalReadOnly, setModalError, materialsSubTab,
    usedRows, wastageAdjRows, returnMaterialRows, scrapMaterialRows, setUsedModal, setUsedForm,
    setEditingUsedId, setAdjustmentModal, setAdjustmentForm, setEditingAdjId, expenseRows,
    setExpenseModal, setExpenseForm, setEditingExpenseId,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <button
              className={constructionSubTab === 'used' ? 'active-btn' : 'muted'}
              onClick={() => handleConstructionSubChange('used')}
            >
              🧱 Daily Material Used ({usedRows.length})
            </button>
            <button
              className={constructionSubTab === 'adjustments' ? 'active-btn' : 'muted'}
              onClick={() => handleConstructionSubChange('adjustments')}
            >
              Wastage / Adjustments ({wastageAdjRows.length})
            </button>
            <button
              className={constructionSubTab === 'return' ? 'active-btn' : 'muted'}
              onClick={() => handleConstructionSubChange('return')}
            >
              Return Material ({returnMaterialRows.length})
            </button>
            <button
              className={constructionSubTab === 'scrap' ? 'active-btn' : 'muted'}
              onClick={() => handleConstructionSubChange('scrap')}
            >
              Scrap Material ({scrapMaterialRows.length})
            </button>
            <button
              className={constructionSubTab === 'expenses' ? 'active-btn' : 'muted'}
              onClick={() => handleConstructionSubChange('expenses')}
            >
              Other Expenses ({expenseRows.length})
            </button>
          </div>

          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {constructionSubTab === 'used' && (
              <button
                onClick={() => {
                  setUsedForm({ ...usedBlank, used_date: today() });
                  setEditingUsedId(null);
                  setModalReadOnly(false);
                  setModalError('');
                  setUsedModal(true);
                }}
              >
                🧱 + Record Daily Consumption
              </button>
            )}
            {constructionSubTab === 'adjustments' && (
              <button
                onClick={() => {
                  setAdjustmentForm({ ...adjustmentBlank, adjustment_type: 'wastage' });
                  setEditingAdjId(null);
                  setAdjustmentModal(true);
                }}
              >
                ⚡ + Record Wastage / Adjustment
              </button>
            )}
            {constructionSubTab === 'return' && (
              <button
                onClick={() => {
                  setAdjustmentForm({ ...adjustmentBlank, adjustment_type: 'return_material' });
                  setEditingAdjId(null);
                  setAdjustmentModal(true);
                }}
              >
                🔄 + Record Return Material
              </button>
            )}
            {constructionSubTab === 'scrap' && (
              <button
                onClick={() => {
                  setAdjustmentForm({ ...adjustmentBlank, adjustment_type: 'scrap_material' });
                  setEditingAdjId(null);
                  setAdjustmentModal(true);
                }}
              >
                ♻️ + Record Scrap Material
              </button>
            )}
            {constructionSubTab === 'expenses' && (
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
            )}
          </div>
        </div>

        {materialsSubTab === 'stock' && (
      <StockView />
      )}

      {/* SUBTAB 2: RECEIVED HISTORY */}

        {materialsSubTab === 'received' && (
      <MaterialReceivedView />
      )}

      {/* SUBTAB 3: USAGE HISTORY */}

        {materialsSubTab === 'used' && (
      <MaterialUsedView />
      )}

      {/* SUBTAB 4: ADJUSTMENTS HISTORY */}

        {constructionSubTab === 'adjustments' && (
      <AdjustmentsView />
      )}

      {constructionSubTab === 'return' && (
      <ReturnMaterialView />
      )}

      {constructionSubTab === 'scrap' && (
      <ScrapMaterialView />
      )}

        {constructionSubTab === 'expenses' && (
          <ExpensesView />
        )}
      </div>
    </>
  );
}
