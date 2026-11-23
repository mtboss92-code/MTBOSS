'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function OmniProjectResults() {
  const {
    omniSearchResults, setOmniSearchOpen, showProject,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 16 }}>🏗️</span>
          <h4 style={{ margin: 0, fontSize: 13, color: '#0f172a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Projects ({omniSearchResults.results.projects.length})
          </h4>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 12 }}>
          {omniSearchResults.results.projects.map((proj) => (
            <div
              key={proj.id}
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
                {/* Top Row: Name and Status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>{proj.name}</span>
                  <span
                    style={{
                      fontSize: 10,
                      padding: '2px 7px',
                      borderRadius: 4,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      background: proj.status === 'running' ? '#dcfce7' : '#e0e7ff',
                      color: proj.status === 'running' ? '#15803d' : '#4338ca',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {proj.status}
                  </span>
                </div>

                <div style={{ fontSize: 12, color: '#64748b', marginTop: 6 }}>
                  Client: <strong style={{ color: '#334155' }}>{proj.party_name}</strong> {proj.party_phone !== '—' && <span style={{ color: '#94a3b8' }}>({proj.party_phone})</span>}
                </div>

                {/* Financial Mini Pills */}
                <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 6, padding: '4px 8px', fontSize: 11 }}>
                    <span style={{ color: '#64748b' }}>Contract: </span>
                    <strong style={{ color: '#0f172a' }}>{INR(proj.contract_value)}</strong>
                  </div>
                  <div style={{ background: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: 6, padding: '4px 8px', fontSize: 11 }}>
                    <span style={{ color: '#166534' }}>Received: </span>
                    <strong style={{ color: '#16a34a' }}>{INR(proj.received)}</strong>
                  </div>
                </div>

                <div style={{ fontSize: 11, color: '#64748b', marginTop: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span>👷 <strong>{proj.workers_count}</strong> Active Worker(s)</span>
                  <span>🏢 <strong>{proj.vendors_count}</strong> Vendor(s)</span>
                </div>
              </div>

              {/* Action Link Button */}
              <button
                type="button"
                onClick={() => {
                  setOmniSearchOpen(false);
                  showProject(proj.id);
                }}
                style={{
                  marginTop: 14,
                  padding: '8px 14px',
                  fontSize: 12,
                  borderRadius: 6,
                  background: '#f0f9ff',
                  color: '#0284c7',
                  border: '1px solid #bae6fd',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'all 0.15s ease',
                }}
              >
                <span>Open Workspace</span>
                <span>&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
