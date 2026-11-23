'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function MaterialTimelineView() {
  const {
    isSupervisor, timelineMaterial, setTimelineMaterial, timelineData, timelineStock,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <button className="muted" onClick={() => setTimelineMaterial(null)}>
            &larr; Back to Project Overview
          </button>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10 }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 18 }}>{timelineMaterial.name}</h3>
              <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: 13 }}>
                Category: <b>{timelineMaterial.category || 'General'}</b> &bull; Unit: <b>{timelineMaterial.unit}</b>
                {timelineMaterial.min_stock_level > 0 && ` • Min Stock Alert: ${timelineMaterial.min_stock_level} ${timelineMaterial.unit}`}
              </p>
            </div>
            <div style={{ background: timelineStock < 0 ? '#fef2f2' : '#f0fdf4', padding: '10px 16px', borderRadius: 8, border: `1px solid ${timelineStock < 0 ? '#fecaca' : '#bbf7d0'}`, textAlign: 'right' }}>
              <span style={{ fontSize: 11, color: timelineStock < 0 ? '#991b1b' : '#166534', fontWeight: 600, display: 'block' }}>
                Current Stock Balance
              </span>
              <div style={{ fontSize: 22, fontWeight: 900, color: timelineStock < 0 ? '#dc2626' : '#16a34a' }}>
                {Number(timelineStock).toFixed(2)} {timelineMaterial.unit}
                {timelineStock < 0 && <span className="badge badge-overused" style={{ marginLeft: 8, fontSize: 11 }}>Over-used</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h4 style={{ margin: '0 0 12px', fontSize: 15 }}>Running Stock Ledger &amp; Transaction History</h4>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Details / Vendor / Destination</th>
                <th>Quantity</th>
                <th>Running Stock</th>
                {!isSupervisor && <th>Rate / Amount</th>}
              </tr>
            </thead>
            <tbody>
              {timelineData.map((tx) => {
                const isPlus = tx.type === 'received';
                return (
                  <tr key={`${tx.type}-${tx.id}`}>
                    <td>{tx.tx_date}</td>
                    <td>
                      <span className={`badge ${isPlus ? 'badge-completed' : tx.type === 'used' ? 'badge-active' : 'badge-overused'}`}>
                        {tx.type === 'received' ? 'Received' : tx.type === 'used' ? 'Used' : tx.adjustment_type || 'Adjusted'}
                      </span>
                    </td>
                    <td style={{ fontSize: 12 }}>
                      {tx.type === 'received' && (tx.supplier_name || 'Direct Receipt')}
                      {tx.type === 'used' && (tx.used_for ? `Used for: ${tx.used_for}` : 'Site Usage')}
                      {tx.type === 'adjustment' && (tx.to_project_name ? `Transfer to ${tx.to_project_name}` : tx.note || 'Adjustment')}
                      {tx.challan_no && <span style={{ color: '#64748b' }}> (Challan: {tx.challan_no})</span>}
                    </td>
                    <td style={{ fontWeight: 700, color: isPlus ? '#16a34a' : '#dc2626' }}>
                      {isPlus ? '+' : ''}{Number(tx.quantity).toFixed(2)}
                    </td>
                    <td style={{ fontWeight: 800 }}>
                      {Number(tx.running_stock).toFixed(2)} {timelineMaterial.unit}
                    </td>
                    {!isSupervisor && (
                      <td>
                        {tx.amount ? INR(tx.amount) : '—'}
                      </td>
                    )}
                  </tr>
                );
              })}
              {timelineData.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '1.5rem', color: '#64748b' }}>
                    No transactions recorded for this material.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
