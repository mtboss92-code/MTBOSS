'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { today } from '../shared';
import LaborPaymentsView from './payments/LaborPaymentsView';
import PartyPaymentsView from './payments/PartyPaymentsView';
import StaffPaymentsView from './payments/StaffPaymentsView';
import SupplierPaymentsView from './payments/SupplierPaymentsView';
import VendorPaymentsView from './payments/VendorPaymentsView';

export default function PaymentsTab() {
  const {
    isSupervisor, paymentsSubTab, handlePaymentsSubChange, partyPayments, setModalReadOnly,
    supplierPaymentsList, vendorPaymentsList, projectLabors, laborPaymentsList, setLaborPaymentModal,
    setLaborPaymentForm, setEditingLaborPaymentId, setModalError, projectStaff, staffPayments,
    setStaffPaymentModal, setStaffPaymentForm, setEditingStaffPaymentId,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <button
              className={paymentsSubTab === 'vendor' ? 'active-btn' : 'muted'}
              onClick={() => handlePaymentsSubChange('vendor')}
            >
              Service Provider Payment ({vendorPaymentsList.length})
            </button>
            <button
              className={paymentsSubTab === 'labor' ? 'active-btn' : 'muted'}
              onClick={() => handlePaymentsSubChange('labor')}
            >
              Labor Payment ({laborPaymentsList.length})
            </button>
            <button
              className={paymentsSubTab === 'party' ? 'active-btn' : 'muted'}
              onClick={() => handlePaymentsSubChange('party')}
            >
              Party Payment ({partyPayments.length})
            </button>
            <button
              className={paymentsSubTab === 'supplier' ? 'active-btn' : 'muted'}
              onClick={() => handlePaymentsSubChange('supplier')}
            >
              Vendor Payment ({supplierPaymentsList.length})
            </button>
            <button
              className={paymentsSubTab === 'staff' ? 'active-btn' : 'muted'}
              onClick={() => handlePaymentsSubChange('staff')}
            >
              Staff Payment ({staffPayments.length})
            </button>
          </div>

          {paymentsSubTab === 'labor' && !isSupervisor && (
            <button
              onClick={() => {
                setLaborPaymentForm({
                  labor_id: projectLabors[0]?.id || '',
                  amount: '',
                  payment_date: today(),
                  mode: 'cash',
                  note: '',
                });
                setEditingLaborPaymentId(null);
                setModalReadOnly(false);
                setModalError('');
                setLaborPaymentModal(true);
              }}
            >
              + Record Labor Payment
            </button>
          )}
          {paymentsSubTab === 'staff' && (
            <button
              type="button"
              onClick={() => {
                setStaffPaymentForm({
                  staff_id: projectStaff[0]?.id ? String(projectStaff[0].id) : '',
                  amount: '',
                  payment_date: today(),
                  payment_type: 'salary',
                  mode: 'bank',
                  transaction_reference: '',
                  note: '',
                });
                setEditingStaffPaymentId(null);
                setModalReadOnly(false);
                setModalError('');
                setStaffPaymentModal(true);
              }}
            >
              + Record Staff Payment
            </button>
          )}
        </div>

        {paymentsSubTab === 'vendor' && (
          <VendorPaymentsView />
        )}

        {paymentsSubTab === 'labor' && (
          <LaborPaymentsView />
        )}

        {paymentsSubTab === 'party' && (
          <PartyPaymentsView />
        )}

        {paymentsSubTab === 'supplier' && (
          <SupplierPaymentsView />
        )}

        {/* ── STAFF PAYMENTS IN PAYMENTS TAB ── */}
        {paymentsSubTab === 'staff' && (
          <StaffPaymentsView />
        )}
      </div>
    </>
  );
}
