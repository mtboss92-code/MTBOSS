'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function OmniPartyResults() {
  const {
    omniSearchResults, setOmniSearchOpen, showParty,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 16 }}>👥</span>
          <h4 style={{ margin: 0, fontSize: 13, color: '#0f172a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Clients / Parties ({omniSearchResults.results.parties.length})
          </h4>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
          {omniSearchResults.results.parties.map((pa) => (
            <div
              key={pa.id}
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
                <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>{pa.name}</div>
                <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>
                  📞 {pa.phone} {pa.address && <span>&bull; {pa.address}</span>}
                </div>

                <div style={{ display: 'flex', gap: 8, margin: '10px 0', flexWrap: 'wrap' }}>
                  <div style={{ background: '#f8fafc', padding: '4px 8px', borderRadius: 6, fontSize: 11 }}>
                    Projects: <strong>{pa.projects_count}</strong>
                  </div>
                  <div style={{ background: '#eff6ff', padding: '4px 8px', borderRadius: 6, fontSize: 11, color: '#1e40af' }}>
                    Contract: <strong>{INR(pa.total_contract_value)}</strong>
                  </div>
                  <div style={{ background: '#f0fdf4', padding: '4px 8px', borderRadius: 6, fontSize: 11, color: '#166534' }}>
                    Received: <strong>{INR(pa.total_received)}</strong>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setOmniSearchOpen(false);
                  showParty(pa.id);
                }}
                style={{
                  marginTop: 10,
                  padding: '6px 12px',
                  fontSize: 11,
                  borderRadius: 6,
                  background: '#f8fafc',
                  color: '#475569',
                  border: '1px solid #cbd5e1',
                  fontWeight: 600,
                  cursor: 'pointer',
                  width: '100%',
                }}
              >
                📂 Open Client Projects
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
