'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function OmniMaterialResults() {
  const {
    setReportType, setReportMaterialFilter, omniSearchResults, setOmniSearchOpen, openReportsScreen,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 16 }}>🧱</span>
          <h4 style={{ margin: 0, fontSize: 13, color: '#0f172a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Materials ({omniSearchResults.results.materials.length})
          </h4>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
          {omniSearchResults.results.materials.map((m) => (
            <div
              key={m.id}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: 12,
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>{m.name}</span>
                  <span style={{ fontSize: 11, padding: '2px 6px', borderRadius: 4, background: '#f1f5f9', color: '#64748b', fontWeight: 600 }}>
                    Unit: {m.unit || '—'}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, margin: '12px 0' }}>
                  <div style={{ background: '#f8fafc', padding: '6px 8px', borderRadius: 6, textAlign: 'center' }}>
                    <div style={{ fontSize: 10, color: '#64748b' }}>Stock</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: m.current_stock < 0 ? '#e11d48' : '#16a34a', marginTop: 2 }}>
                      {m.current_stock}
                    </div>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '6px 8px', borderRadius: 6, textAlign: 'center' }}>
                    <div style={{ fontSize: 10, color: '#64748b' }}>Used</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', marginTop: 2 }}>{m.total_used}</div>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '6px 8px', borderRadius: 6, textAlign: 'center' }}>
                    <div style={{ fontSize: 10, color: '#64748b' }}>Avg Rate</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', marginTop: 2 }}>{INR(m.avg_rate)}</div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setReportType('material_consumption');
                  setReportMaterialFilter(m.id);
                  setOmniSearchOpen(false);
                  openReportsScreen();
                }}
                style={{
                  padding: '6px 12px',
                  fontSize: 11,
                  borderRadius: 6,
                  background: '#f8fafc',
                  color: '#475569',
                  border: '1px solid #cbd5e1',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  width: '100%',
                }}
              >
                <span>📊 View Consumption Report</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
