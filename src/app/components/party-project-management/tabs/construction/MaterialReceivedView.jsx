'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { INR, isSameDayIST } from '../../shared';

export default function MaterialReceivedView() {
  const {
    isAgent, isSupervisor, setModalReadOnly, setModalError, materialsMaster, stockRows, receivedRows,
    matFilterId, setMatFilterId, matFilterFrom, setMatFilterFrom, matFilterTo, setMatFilterTo,
    setReceivedModal, setReceivedForm, setEditingReceivedId, openMaterialTimeline, del,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <>
        <div className="bar" style={{ marginBottom: 12, gap: 10, flexWrap: 'wrap' }}>
          <select
            value={matFilterId}
            onChange={(e) => setMatFilterId(e.target.value)}
            style={{ maxWidth: 200 }}
          >
            <option value="">All Materials</option>
            {materialsMaster.map((m) => (
              <option value={m.id} key={m.id}>{m.name}</option>
            ))}
          </select>
          <input
            type="date"
            value={matFilterFrom}
            onChange={(e) => setMatFilterFrom(e.target.value)}
            placeholder="From date"
          />
          <input
            type="date"
            value={matFilterTo}
            onChange={(e) => setMatFilterTo(e.target.value)}
            placeholder="To date"
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Material</th>
              <th>Vendor / Source</th>
              <th>Quantity</th>
              {!isSupervisor && <th>Rate</th>}
              {!isSupervisor && <th>Total Amount</th>}
              <th>Challan No</th>
              <th>Vehicle / Received By</th>
              <th>Bill</th>
              <th>Note</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {receivedRows
              .filter((r) => !matFilterId || String(r.material_id) === matFilterId)
              .filter((r) => !matFilterFrom || r.received_date >= matFilterFrom)
              .filter((r) => !matFilterTo || r.received_date <= matFilterTo)
              .map((r) => (
                <tr
                  key={r.id}
                  className="clickable-row"
                  onClick={() => {
                    const mat = stockRows.find((s) => Number(s.id) === Number(r.material_id)) || { id: r.material_id, name: r.material_name, unit: r.material_unit };
                    openMaterialTimeline(mat);
                  }}
                  title="Click to view material ledger & transaction timeline"
                >
                  <td>{r.received_date}</td>
                  <td><b>{r.material_name}</b></td>
                  <td>
                    {r.supplier_name || '—'}
                    {r.transfer_in && <span className="badge badge-active" style={{ marginLeft: 4 }}>Transfer In</span>}
                  </td>
                  <td>{Number(r.quantity).toFixed(2)} {r.material_unit}</td>
                  {!isSupervisor && <td>{INR(r.rate)}</td>}
                  {!isSupervisor && <td style={{ fontWeight: 600 }}>{INR(r.amount)}</td>}
                  <td>{r.challan_no || '—'}</td>
                  <td>
                    {r.vehicle_no ? (
                      <div>
                        <b style={{ color: '#0369a1', fontSize: 12 }}>🚛 {r.vehicle_no}</b>
                        {r.driver_name && <div style={{ fontSize: 11, color: '#475569' }}>Driver: {r.driver_name}</div>}
                        {r.received_by && <div style={{ fontSize: 11, color: '#166534' }}>Recvd: {r.received_by}</div>}
                      </div>
                    ) : (
                      r.received_by ? <span style={{ fontSize: 12, color: '#166534' }}>Recvd: {r.received_by}</span> : '—'
                    )}
                  </td>
                  <td onClick={(e) => e.stopPropagation()}>
                    {r.bill_url ? (
                      <a href={r.bill_url} target="_blank" rel="noreferrer" title={r.bill_filename} style={{ textDecoration: 'none' }}>
                        📄
                      </a>
                    ) : '—'}
                  </td>
                  <td>{r.note || '—'}</td>
                  <td className="actions" style={{ justifyContent: 'flex-end', display: 'flex', gap: 6 }} onClick={(e) => e.stopPropagation()}>
                    {isSameDayIST(r.created_at || r.received_date) ? (
                      <>
                        <button
                          className="muted"
                          style={{ padding: '4px 8px', fontSize: 12 }}
                          onClick={() => {
                            setEditingReceivedId(r.id);
                            setReceivedForm({
                              material_id: String(r.material_id),
                              material_name: r.material_name || stockRows.find((m) => Number(m.id) === Number(r.material_id))?.name || '',
                              unit: r.material_unit || r.unit || 'bags',
                              quantity: r.quantity,
                              rate: r.rate,
                              received_date: r.received_date,
                              supplier_name: r.supplier_name || '',
                              challan_no: r.challan_no || '',
                              vehicle_no: r.vehicle_no || '',
                              driver_name: r.driver_name || '',
                              driver_phone: r.driver_phone || '',
                              received_by: r.received_by || '',
                              note: r.note || '',
                            });
                            setModalReadOnly(false);
                            setModalError('');
                            setReceivedModal(true);
                          }}
                        >
                          ✏️ Edit
                        </button>
                        {!isAgent && (
                          <button className="danger" style={{ padding: '4px 8px', fontSize: 12 }} onClick={() => del('received', r.id)}>
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
                            setEditingReceivedId(r.id);
                            setReceivedForm({
                              material_id: String(r.material_id),
                              material_name: r.material_name || stockRows.find((m) => Number(m.id) === Number(r.material_id))?.name || '',
                              unit: r.material_unit || r.unit || 'bags',
                              quantity: r.quantity,
                              rate: r.rate,
                              received_date: r.received_date,
                              supplier_name: r.supplier_name || '',
                              challan_no: r.challan_no || '',
                              vehicle_no: r.vehicle_no || '',
                              driver_name: r.driver_name || '',
                              driver_phone: r.driver_phone || '',
                              received_by: r.received_by || '',
                              note: r.note || '',
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
            {receivedRows.length === 0 && (
              <tr>
                <td colSpan={9} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                  No material received entries.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    </>
  );
}
