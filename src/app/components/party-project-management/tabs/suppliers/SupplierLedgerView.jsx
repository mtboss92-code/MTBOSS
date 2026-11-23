'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { receivedBlank, today, INR } from '../../shared';
import SupplierLedgerDeliveries from './SupplierLedgerDeliveries';
import SupplierLedgerPayments from './SupplierLedgerPayments';
import SupplierLedgerReturns from './SupplierLedgerReturns';

export default function SupplierLedgerView() {
  const {
    hasAgentPayment, hasAgentConstruction, selectedSupplier, setSelectedSupplier, supplierLedgerData,
    loadingSupplierLedger, supplierLedgerTab, setSupplierLedgerTab, setSupplierPaymentModal,
    setSupplierPaymentForm, setLocalVendorModal, setLocalVendorForm, setModalError, setReceivedModal,
    setReceivedForm, setEditingReceivedId, setBillFile,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              className="muted"
              onClick={() => setSelectedSupplier(null)}
              style={{ display: 'flex', alignItems: 'center', gap: 4 }}
            >
              ← Back to Vendors
            </button>
            <div>
              <h4 style={{ margin: 0, fontSize: 18 }}>
                {selectedSupplier.supplier_name}
                {selectedSupplier.is_registered ? (
                  <span className="badge badge-active" style={{ marginLeft: 8, fontSize: 11 }}>Registered</span>
                ) : (
                  <span className="badge" style={{ marginLeft: 8, fontSize: 11, background: '#f1f5f9', color: '#64748b' }}>Unregistered</span>
                )}
              </h4>
              {selectedSupplier.phone && (
                <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>
                  📞 {selectedSupplier.phone} {selectedSupplier.city ? `• ${selectedSupplier.city}` : ''}
                </div>
              )}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {hasAgentConstruction && (
              <button
                className="btn-secondary"
                onClick={() => {
                  setLocalVendorForm({
                    name: '',
                    phone: '',
                    city: '',
                    material_type: '',
                    address: '',
                  });
                  setModalError('');
                  setLocalVendorModal(true);
                }}
                title="Add local / unregistered vendor to this project"
              >
                + Add Local Vendor
              </button>
            )}
            {hasAgentConstruction && (
              <button
                onClick={() => {
                  setReceivedForm({
                    ...receivedBlank,
                    supplier_id: selectedSupplier.supplier_id || '',
                    supplier_name: selectedSupplier.supplier_name || '',
                    received_date: today(),
                  });
                  setEditingReceivedId(null);
                  setBillFile(null);
                  setModalError('');
                  setReceivedModal(true);
                }}
              >
                + Record Delivery
              </button>
            )}
            {hasAgentPayment && (
              <button
                className="btn-secondary"
                onClick={() => {
                  setSupplierPaymentForm({
                    supplier_id: selectedSupplier.supplier_id || '',
                    supplier_name: selectedSupplier.supplier_name || '',
                    amount: '',
                    payment_date: today(),
                    mode: 'bank',
                    transaction_reference: '',
                    note: '',
                  });
                  setModalError('');
                  setSupplierPaymentModal(true);
                }}
              >
                + Record Payment
              </button>
            )}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="stat-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 16 }}>
          <div className="card" style={{ padding: '12px 16px', borderLeft: '4px solid #0369a1' }}>
            <small style={{ color: '#64748b', fontWeight: 600, textTransform: 'uppercase', fontSize: 11 }}>Total Supplied</small>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', marginTop: 4 }}>
              {INR(supplierLedgerData.summary?.total_supplied ?? selectedSupplier.total_supplied)}
            </div>
            <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>
              {supplierLedgerData.deliveries?.length || selectedSupplier.delivery_count || 0} deliveries
            </div>
          </div>
          <div className="card" style={{ padding: '12px 16px', borderLeft: '4px solid #dc2626' }}>
            <small style={{ color: '#64748b', fontWeight: 600, textTransform: 'uppercase', fontSize: 11 }}>Total Returned</small>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#dc2626', marginTop: 4 }}>
              {INR(supplierLedgerData.summary?.total_returned ?? selectedSupplier.total_returned ?? 0)}
            </div>
            <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>
              {supplierLedgerData.returns?.length || selectedSupplier.return_count || 0} returns
            </div>
          </div>
          <div className="card" style={{ padding: '12px 16px', borderLeft: '4px solid #16a34a' }}>
            <small style={{ color: '#64748b', fontWeight: 600, textTransform: 'uppercase', fontSize: 11 }}>Total Paid</small>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#16a34a', marginTop: 4 }}>
              {INR(supplierLedgerData.summary?.total_paid ?? selectedSupplier.total_paid)}
            </div>
            <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>
              {supplierLedgerData.payments?.length || selectedSupplier.payment_count || 0} payments
            </div>
          </div>
          <div
            className="card"
            style={{
              padding: '12px 16px',
              borderLeft: `4px solid ${(supplierLedgerData.summary?.balance ?? selectedSupplier.balance) < 0 ? '#10b981' : '#f97316'}`,
              background: (supplierLedgerData.summary?.balance ?? selectedSupplier.balance) < 0 ? '#f0fdf4' : '#fff'
            }}
          >
            <small style={{ color: '#64748b', fontWeight: 600, textTransform: 'uppercase', fontSize: 11 }}>
              {(supplierLedgerData.summary?.balance ?? selectedSupplier.balance) < 0 ? 'Advance Paid' : 'Balance Due'}
            </small>
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: (supplierLedgerData.summary?.balance ?? selectedSupplier.balance) < 0 ? '#15803d' : '#ea580c',
                marginTop: 4
              }}
            >
              {INR(Math.abs(supplierLedgerData.summary?.balance ?? selectedSupplier.balance))}
            </div>
            <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>
              {(supplierLedgerData.summary?.balance ?? selectedSupplier.balance) < 0
                ? 'Overpayment / Advance available'
                : (supplierLedgerData.summary?.balance ?? selectedSupplier.balance) === 0
                ? 'All cleared'
                : 'Net payment pending'}
            </div>
          </div>
        </div>

        {/* Ledger Sub-tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 12, borderBottom: '1px solid #e2e8f0', paddingBottom: 8 }}>
          <button
            className={supplierLedgerTab === 'deliveries' ? 'active-btn' : 'muted'}
            onClick={() => setSupplierLedgerTab('deliveries')}
          >
            📦 Deliveries ({supplierLedgerData.deliveries?.length || 0})
          </button>
          <button
            className={supplierLedgerTab === 'returns' ? 'active-btn' : 'muted'}
            onClick={() => setSupplierLedgerTab('returns')}
          >
            🔄 Returns ({supplierLedgerData.returns?.length || 0})
          </button>
          <button
            className={supplierLedgerTab === 'payments' ? 'active-btn' : 'muted'}
            onClick={() => setSupplierLedgerTab('payments')}
          >
            💳 Payments ({supplierLedgerData.payments?.length || 0})
          </button>
        </div>

        {loadingSupplierLedger ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>Loading ledger entries...</div>
        ) : supplierLedgerTab === 'deliveries' ? (
          <SupplierLedgerDeliveries />
        ) : supplierLedgerTab === 'returns' ? (
          <SupplierLedgerReturns />
        ) : (
          <SupplierLedgerPayments />
        )}
      </div>
    </>
  );
}
