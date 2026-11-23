'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { partyBlank } from '../shared';

export default function PmTopBar() {
  const {
    isAgent, effectiveDark, screen, setScreen, role, party, setPartyForm, updateProjectUrl,
    omniSearchQuery, setOmniSearchQuery, omniSearchResults, setOmniSearchResults, omniSearchLoading,
    omniSearchOpen, setOmniSearchOpen, openReportsScreen,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="bar" style={{ justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          {screen !== (isAgent ? 'projects' : 'parties') && (
            <button
              className="muted"
              onClick={() => {
                if (screen === 'project' && party && !isAgent) setScreen('party');
                else if (screen === 'projectForm' && party && !isAgent) setScreen('party');
                else setScreen(isAgent ? 'projects' : 'parties');
                updateProjectUrl(null);
              }}
            >
              &larr; Back
            </button>
          )}
          <h2 style={{ margin: 0, fontSize: 20 }}>Project Management Party</h2>
          {!isAgent && (
            <span style={{ fontSize: 12, background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: 4, fontWeight: 600 }}>
              {role.toUpperCase()}
            </span>
          )}
        </div>

        {/* ── Global Omni-Search Bar ── */}
        <div style={{ position: 'relative', flex: '1 1 320px', maxWidth: 460, minWidth: 200, margin: '0 8px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: effectiveDark ? '#18181c' : '#fff',
              border: omniSearchOpen ? '1.5px solid #0284c7' : (effectiveDark ? '1.5px solid #2a2a30' : '1.5px solid #cbd5e1'),
              borderRadius: 8,
              padding: '6px 12px',
              boxShadow: effectiveDark ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.06)',
            }}
          >
            <span style={{ marginRight: 8, color: '#64748b', fontSize: 13 }}>🔍</span>
            <input
              type="text"
              value={omniSearchQuery}
              onChange={(e) => setOmniSearchQuery(e.target.value)}
              onFocus={() => { if (omniSearchResults) setOmniSearchOpen(true); }}
              placeholder="Search Labor, Vendor, Material, Project (Name/Phone)..."
              style={{
                border: 'none',
                outline: 'none',
                width: '100%',
                fontSize: 13,
                background: 'transparent',
                color: effectiveDark ? '#f0f0f5' : '#0f172a',
              }}
            />
            {omniSearchLoading && <span style={{ fontSize: 11, color: '#0ea5e9', marginRight: 4 }}>⏳</span>}
            {omniSearchQuery && (
              <button
                type="button"
                onClick={() => {
                  setOmniSearchQuery('');
                  setOmniSearchResults(null);
                  setOmniSearchOpen(false);
                }}
                style={{
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  color: '#94a3b8',
                  fontSize: 14,
                  padding: '0 4px',
                  fontWeight: 'bold',
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button
            className={screen === 'reports' ? 'active-btn' : 'muted'}
            onClick={openReportsScreen}
            style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}
          >
            📊 Reports &amp; CSV
          </button>
          {screen === 'parties' && !isAgent && (
            <button
              onClick={() => {
                setPartyForm(partyBlank);
                setScreen('partyForm');
              }}
            >
              + Add Party
            </button>
          )}
        </div>
      </div>
    </>
  );
}
