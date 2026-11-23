'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { INR, isSameDayIST, formatDateIST } from '../../shared';

export default function SupplierLedgerReturns() {
  const {
    isAgent, isSupervisor, setModalReadOnly, selectedSupplier, supplierLedgerData, setModalError,
    stockRows, setAdjustmentModal, setAdjustmentForm, setEditingAdjId, del,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Material Name</th>
            <th>Returned Qty</th>
            <th>Unit</th>
            {!isSupervisor && <th>Credit / Amount</th>}
            <th>Slip</th>
            <th>Note / Reason</th>
            <th style={{ textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(supplierLedgerData.returns || []).map((ret) => (
            <tr key={ret.id}>
              <td>{ret.adjustment_date ? ret.adjustment_date.slice(0, 10) : '—'}</td>
              <td><b>{ret.material_name}</b></td>
              <td style={{ color: '#dc2626', fontWeight: 600 }}>{Number(ret.quantity).toFixed(2)}</td>
              <td>{ret.material_unit || 'units'}</td>
              {!isSupervisor && (
                <td style={{ fontWeight: 600, color: '#dc2626' }}>
                  {ret.amount ? INR(ret.amount) : '—'}
                </td>
              )}
              <td>
                {ret.bill_url ? (
                  <a href={ret.bill_url} target="_blank" rel="noreferrer" title={ret.bill_filename || 'View Slip'} style={{ textDecoration: 'none', fontSize: 16 }}>
                    📄
                  </a>
                ) : '—'}
              </td>
              <td>{ret.note || ret.reason || '—'}</td>
              <td className="actions" style={{ justifyContent: 'flex-end', display: 'flex', gap: 6 }}>
                {isSameDayIST(ret.created_at || ret.adjustment_date) ? (
                  <>
                    <button
                      className="muted"
                      style={{ padding: '4px 8px', fontSize: 12 }}
                      onClick={() => {
                        setEditingAdjId(ret.id);
                        setAdjustmentForm({
                          material_id: String(ret.material_id),
                          material_name: ret.material_name || stockRows.find((m) => Number(m.id) === Number(ret.material_id))?.name || '',
                          unit: ret.material_unit || ret.unit || 'bags',
                          adjustment_type: ret.adjustment_type || 'return_to_supplier',
                          quantity: ret.quantity,
                          adjustment_date: formatDateIST(ret.adjustment_date),
                          to_project_id: ret.to_project_id ? String(ret.to_project_id) : '',
                          supplier_name: ret.supplier_name || selectedSupplier?.supplier_name || selectedSupplier?.raw_supplier_name || '',
                          amount: ret.amount || '',
                          note: ret.note || ret.reason || '',
                          bill_url: ret.bill_url || '',
                          bill_filename: ret.bill_filename || '',
                        });
                        setModalReadOnly(false);
                        setModalError('');
                        setAdjustmentModal(true);
                      }}
                    >
                      ✏️ Edit
                    </button>
                    {!isAgent && (
                      <button className="danger" style={{ padding: '4px 8px', fontSize: 12 }} onClick={() => del('adjustment', ret.id)}>
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
                        setEditingAdjId(ret.id);
                        setAdjustmentForm({
                          material_id: String(ret.material_id),
                          material_name: ret.material_name || stockRows.find((m) => Number(m.id) === Number(ret.material_id))?.name || '',
                          unit: ret.material_unit || ret.unit || 'bags',
                          adjustment_type: ret.adjustment_type || 'return_to_supplier',
                          quantity: ret.quantity,
                          adjustment_date: formatDateIST(ret.adjustment_date),
                          to_project_id: ret.to_project_id ? String(ret.to_project_id) : '',
                          supplier_name: ret.supplier_name || selectedSupplier?.supplier_name || selectedSupplier?.raw_supplier_name || '',
                          amount: ret.amount || '',
                          note: ret.note || ret.reason || '',
                          bill_url: ret.bill_url || '',
                          bill_filename: ret.bill_filename || '',
                        });
                        setModalReadOnly(true);
                        setModalError('');
                        setAdjustmentModal(true);
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
          ))}
          {(supplierLedgerData.returns || []).length === 0 && (
            <tr>
              <td colSpan={8} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                No material returns recorded for this vendor.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
