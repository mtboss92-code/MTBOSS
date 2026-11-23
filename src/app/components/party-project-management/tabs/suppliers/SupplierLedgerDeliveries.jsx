'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { INR, isSameDayIST, formatDateIST } from '../../shared';

export default function SupplierLedgerDeliveries() {
  const {
    isAgent, isSupervisor, setModalReadOnly, selectedSupplier, supplierLedgerData, setModalError,
    stockRows, setReceivedModal, setReceivedForm, setEditingReceivedId, del,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Material Name</th>
            <th>Quantity</th>
            <th>Unit</th>
            {!isSupervisor && <th>Rate</th>}
            {!isSupervisor && <th>Amount</th>}
            <th>Challan No</th>
            <th>Vehicle / Received By</th>
            <th>Bill</th>
            <th>Note</th>
            <th style={{ textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(supplierLedgerData.deliveries || []).map((d) => (
            <tr key={d.id}>
              <td>{d.received_date ? d.received_date.slice(0, 10) : '—'}</td>
              <td><b>{d.material_name}</b></td>
              <td>{Number(d.quantity).toFixed(2)}</td>
              <td>{d.material_unit || 'units'}</td>
              {!isSupervisor && <td>{INR(d.rate)}</td>}
              {!isSupervisor && <td style={{ fontWeight: 600 }}>{INR(d.amount)}</td>}
              <td>{d.challan_no || '—'}</td>
              <td>
                {d.vehicle_no ? (
                  <div>
                    <b style={{ color: '#0369a1', fontSize: 12 }}>🚛 {d.vehicle_no}</b>
                    {d.driver_name && <div style={{ fontSize: 11, color: '#475569' }}>Driver: {d.driver_name}</div>}
                    {d.received_by && <div style={{ fontSize: 11, color: '#166534' }}>Recvd: {d.received_by}</div>}
                  </div>
                ) : (
                  d.received_by ? <span style={{ fontSize: 12, color: '#166534' }}>Recvd: {d.received_by}</span> : '—'
                )}
              </td>
              <td>
                {d.bill_url ? (
                  <a href={d.bill_url} target="_blank" rel="noreferrer" title={d.bill_filename || 'View Bill'} style={{ textDecoration: 'none', fontSize: 16 }}>
                    📄
                  </a>
                ) : '—'}
              </td>
              <td>{d.note || '—'}</td>
              <td className="actions" style={{ justifyContent: 'flex-end', display: 'flex', gap: 6 }}>
                {isSameDayIST(d.created_at || d.received_date) ? (
                  <>
                    <button
                      className="muted"
                      style={{ padding: '4px 8px', fontSize: 12 }}
                      onClick={() => {
                        setEditingReceivedId(d.id);
                        setReceivedForm({
                          material_id: String(d.material_id),
                          material_name: d.material_name || stockRows.find((m) => Number(m.id) === Number(d.material_id))?.name || '',
                          unit: d.material_unit || d.unit || 'bags',
                          quantity: d.quantity,
                          rate: d.rate,
                          received_date: formatDateIST(d.received_date),
                          supplier_name: d.supplier_name || selectedSupplier?.supplier_name || selectedSupplier?.raw_supplier_name || '',
                          challan_no: d.challan_no || '',
                          vehicle_no: d.vehicle_no || '',
                          driver_name: d.driver_name || '',
                          driver_phone: d.driver_phone || '',
                          received_by: d.received_by || '',
                          note: d.note || '',
                        });
                        setModalReadOnly(false);
                        setModalError('');
                        setReceivedModal(true);
                      }}
                    >
                      ✏️ Edit
                    </button>
                    {!isAgent && (
                      <button className="danger" style={{ padding: '4px 8px', fontSize: 12 }} onClick={() => del('received', d.id)}>
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
                        setEditingReceivedId(d.id);
                        setReceivedForm({
                          material_id: String(d.material_id),
                          material_name: d.material_name || stockRows.find((m) => Number(m.id) === Number(d.material_id))?.name || '',
                          unit: d.material_unit || d.unit || 'bags',
                          quantity: d.quantity,
                          rate: d.rate,
                          received_date: formatDateIST(d.received_date),
                          supplier_name: d.supplier_name || selectedSupplier?.supplier_name || selectedSupplier?.raw_supplier_name || '',
                          challan_no: d.challan_no || '',
                          vehicle_no: d.vehicle_no || '',
                          driver_name: d.driver_name || '',
                          driver_phone: d.driver_phone || '',
                          received_by: d.received_by || '',
                          note: d.note || '',
                        });
                        setModalReadOnly(true);
                        setModalError('');
                        setReceivedModal(true);
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
          {(supplierLedgerData.deliveries || []).length === 0 && (
            <tr>
              <td colSpan={10} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                No material deliveries recorded for this vendor.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
