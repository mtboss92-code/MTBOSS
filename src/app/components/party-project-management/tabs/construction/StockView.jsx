'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { INR } from '../../shared';

export default function StockView() {
  const {
    isSupervisor, stockRows, openMaterialTimeline,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <table>
        <thead>
          <tr>
            <th>Material</th>
            <th>Category</th>
            <th>Unit</th>
            <th>Received</th>
            <th>Used</th>
            <th>Adjusted</th>
            <th>Current Stock</th>
            {!isSupervisor && <th>Avg Rate</th>}
            {!isSupervisor && <th>Stock Value</th>}
            <th>Status</th>
            <th style={{ textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stockRows.map((r) => {
            const isLow = Number(r.stock) <= Number(r.min_stock_level || 0);
            const isOverUsed = Number(r.stock) < 0;
            return (
              <tr
                key={r.id}
                className="clickable-row"
                onClick={() => openMaterialTimeline(r)}
                title="Click to view full material ledger & transaction timeline"
              >
                <td>
                  <b>{r.name}</b>
                  {r.min_stock_level > 0 && (
                    <span style={{ fontSize: 10, color: '#64748b', display: 'block' }}>
                      Min: {Number(r.min_stock_level).toFixed(2)} {r.unit}
                    </span>
                  )}
                </td>
                <td>{r.category || '—'}</td>
                <td>{r.unit}</td>
                <td>{Number(r.received).toFixed(2)}</td>
                <td>{Number(r.used).toFixed(2)}</td>
                <td>{Number(r.adjusted).toFixed(2)}</td>
                <td style={{ fontWeight: 700, color: isOverUsed ? '#dc2626' : '#0f172a' }}>
                  {Number(r.stock).toFixed(2)}
                </td>
                {!isSupervisor && <td>{INR(r.average_rate)}</td>}
                {!isSupervisor && <td style={{ fontWeight: 600 }}>{INR(r.stock_value)}</td>}
                <td>
                  {isOverUsed ? (
                    <span className="badge badge-overused">⚠️ Over-used</span>
                  ) : isLow ? (
                    <span className="badge badge-lowstock">Low Stock</span>
                  ) : (
                    <span className="badge badge-active">Adequate</span>
                  )}
                </td>
                <td className="actions" style={{ justifyContent: 'flex-end' }} onClick={(e) => e.stopPropagation()}>
                  <button
                    className="muted"
                    onClick={() => openMaterialTimeline(r)}
                    title="View running timeline history"
                  >
                    🔍 Timeline History
                  </button>
                </td>
              </tr>
            );
          })}
          {stockRows.length === 0 && (
            <tr>
              <td colSpan={11} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                No material records yet for this project. Click &ldquo;+ Material Received&rdquo; to record initial deliveries.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
