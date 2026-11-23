'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { INR, isSameDayIST, today } from '../../shared';

export default function ScrapMaterialView() {
  const {
    isAgent, setModalReadOnly, setModalError, stockRows, scrapMaterialRows, setAdjustmentModal,
    setAdjustmentForm, setEditingAdjId, openMaterialTimeline, del,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Material</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Scrap Sold Amount</th>
            <th>Buyer / Dealer</th>
            <th>Receipt / Bill</th>
            <th>Note</th>
            <th style={{ textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {scrapMaterialRows.map((r) => (
            <tr
              key={r.id}
              className="clickable-row"
              onClick={() => {
                const mat = stockRows.find((s) => Number(s.id) === Number(r.material_id)) || { id: r.material_id, name: r.material_name, unit: r.material_unit };
                openMaterialTimeline(mat);
              }}
              title="Click to view material ledger & transaction timeline"
            >
              <td>{r.adjustment_date ? String(r.adjustment_date).slice(0, 10) : '—'}</td>
              <td><b>{r.material_name}</b></td>
              <td>
                <span className="badge badge-active" style={{ background: '#fef3c7', color: '#b45309', fontWeight: 600, textTransform: 'capitalize' }}>
                  Scrap Material
                </span>
              </td>
              <td style={{ fontWeight: 600 }}>{Number(r.quantity).toFixed(2)} {r.material_unit}</td>
              <td style={{ fontWeight: 700, color: r.amount ? '#16a34a' : '#64748b' }}>
                {r.amount ? INR(r.amount) : '—'}
              </td>
              <td>{r.supplier_name || '—'}</td>
              <td onClick={(e) => e.stopPropagation()}>
                {r.bill_url ? (
                  <a href={r.bill_url} target="_blank" rel="noreferrer" title={r.bill_filename} style={{ textDecoration: 'none' }}>
                    📄 View Slip
                  </a>
                ) : '—'}
              </td>
              <td>{r.note || '—'}</td>
              <td className="actions" style={{ justifyContent: 'flex-end', display: 'flex', gap: 6 }} onClick={(e) => e.stopPropagation()}>
                {isSameDayIST(r.created_at || r.adjustment_date) ? (
                  <>
                    <button
                      className="muted"
                      style={{ padding: '4px 8px', fontSize: 12 }}
                      onClick={() => {
                        setEditingAdjId(r.id);
                        setAdjustmentForm({
                          material_id: String(r.material_id),
                          material_name: r.material_name || stockRows.find((m) => Number(m.id) === Number(r.material_id))?.name || '',
                          unit: r.material_unit || r.unit || 'bags',
                          adjustment_type: r.adjustment_type,
                          quantity: r.quantity,
                          adjustment_date: r.adjustment_date ? String(r.adjustment_date).slice(0, 10) : today(),
                          to_project_id: r.to_project_id ? String(r.to_project_id) : '',
                          supplier_name: r.supplier_name || '',
                          amount: r.amount || '',
                          note: r.note || '',
                          bill_url: r.bill_url || '',
                          bill_filename: r.bill_filename || '',
                        });
                        setModalReadOnly(false);
                        setModalError('');
                        setAdjustmentModal(true);
                      }}
                    >
                      ✏️ Edit
                    </button>
                    {!isAgent && (
                      <button className="danger" style={{ padding: '4px 8px', fontSize: 12 }} onClick={() => del('adjustment', r.id)}>
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
                        setEditingAdjId(r.id);
                        setAdjustmentForm({
                          material_id: String(r.material_id),
                          material_name: r.material_name || stockRows.find((m) => Number(m.id) === Number(r.material_id))?.name || '',
                          unit: r.material_unit || r.unit || 'bags',
                          adjustment_type: r.adjustment_type,
                          quantity: r.quantity,
                          adjustment_date: r.adjustment_date ? String(r.adjustment_date).slice(0, 10) : today(),
                          to_project_id: r.to_project_id ? String(r.to_project_id) : '',
                          supplier_name: r.supplier_name || '',
                          amount: r.amount || '',
                          note: r.note || '',
                          bill_url: r.bill_url || '',
                          bill_filename: r.bill_filename || '',
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
          {scrapMaterialRows.length === 0 && (
            <tr>
              <td colSpan={9} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                No scrap material entries recorded yet. Click &ldquo;♻️ + Record Scrap Material&rdquo; above.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
