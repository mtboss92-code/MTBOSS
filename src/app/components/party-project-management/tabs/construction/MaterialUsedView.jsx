'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { isSameDayIST, usedBlank, today } from '../../shared';

export default function MaterialUsedView() {
  const {
    isAgent, setModalReadOnly, setModalError, materialsMaster, stockRows, usedRows, matFilterId,
    setMatFilterId, matFilterFrom, setMatFilterFrom, matFilterTo, setMatFilterTo, setUsedModal,
    setUsedForm, setEditingUsedId, openMaterialTimeline, del,
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
          />
          <input
            type="date"
            value={matFilterTo}
            onChange={(e) => setMatFilterTo(e.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Material</th>
              <th>Quantity Used</th>
              <th>Used For</th>
              <th>Note</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usedRows
              .filter((r) => !matFilterId || String(r.material_id) === matFilterId)
              .filter((r) => !matFilterFrom || r.used_date >= matFilterFrom)
              .filter((r) => !matFilterTo || r.used_date <= matFilterTo)
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
                  <td>{r.used_date}</td>
                  <td><b>{r.material_name}</b></td>
                  <td style={{ fontWeight: 600 }}>{Number(r.quantity).toFixed(2)} {r.material_unit}</td>
                  <td>{r.used_for || '—'}</td>
                  <td>{r.note || '—'}</td>
                  <td>
                    {r.over_used && <span className="badge badge-overused">Over-used</span>}
                  </td>
                  <td className="actions" style={{ justifyContent: 'flex-end', display: 'flex', gap: 6 }} onClick={(e) => e.stopPropagation()}>
                    {isSameDayIST(r.created_at || r.used_date) ? (
                      <>
                        <button
                          className="muted"
                          style={{ padding: '4px 8px', fontSize: 12 }}
                          onClick={() => {
                            setEditingUsedId(r.id);
                            setUsedForm({
                              material_id: String(r.material_id),
                              material_name: r.material_name || stockRows.find((m) => Number(m.id) === Number(r.material_id))?.name || '',
                              unit: r.material_unit || r.unit || 'bags',
                              quantity: r.quantity,
                              used_date: r.used_date,
                              used_for: r.used_for || '',
                              note: r.note || '',
                            });
                            setModalReadOnly(false);
                            setModalError('');
                            setUsedModal(true);
                          }}
                        >
                          ✏️ Edit
                        </button>
                        {!isAgent && (
                          <button className="danger" style={{ padding: '4px 8px', fontSize: 12 }} onClick={() => del('used', r.id)}>
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
                            setEditingUsedId(r.id);
                            setUsedForm({
                              material_id: String(r.material_id),
                              material_name: r.material_name || stockRows.find((m) => Number(m.id) === Number(r.material_id))?.name || '',
                              unit: r.material_unit || r.unit || 'bags',
                              quantity: r.quantity,
                              used_date: r.used_date,
                              used_for: r.used_for || '',
                              note: r.note || '',
                            });
                            setModalReadOnly(true);
                            setModalError('');
                            setUsedModal(true);
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
            {usedRows.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '2.5rem', color: '#64748b' }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>🧱</div>
                  <div style={{ fontWeight: 600, color: '#0f172a', marginBottom: 4 }}>No daily material usage entries yet</div>
                  <div style={{ fontSize: 13, marginBottom: 14 }}>Record daily site material consumption (cement, sand, bricks, sariya) to track usage in reports.</div>
                  <button
                    type="button"
                    onClick={() => {
                      setUsedForm({ ...usedBlank, used_date: today() });
                      setEditingUsedId(null);
                      setModalReadOnly(false);
                      setModalError('');
                      setUsedModal(true);
                    }}
                    style={{ padding: '6px 14px', fontSize: 12 }}
                  >
                    🧱 + Record Daily Consumption
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    </>
  );
}
