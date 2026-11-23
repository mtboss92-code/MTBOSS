'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import SupplierLedgerView from './suppliers/SupplierLedgerView';
import SupplierListView from './suppliers/SupplierListView';

export default function SuppliersTab() {
  const {
    selectedSupplier,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        {!selectedSupplier ? (
          /* ── 1. SUPPLIERS LIST VIEW ────────────────────────── */
          <SupplierListView />
        ) : (
          /* ── 2. SUPPLIER LEDGER VIEW ───────────────────────── */
          <SupplierLedgerView />
        )}
      </div>
    </>
  );
}
