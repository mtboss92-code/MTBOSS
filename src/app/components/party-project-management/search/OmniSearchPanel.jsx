'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import OmniContractorResults from './OmniContractorResults';
import OmniLaborResults from './OmniLaborResults';
import OmniMaterialResults from './OmniMaterialResults';
import OmniPartyResults from './OmniPartyResults';
import OmniProjectResults from './OmniProjectResults';
import OmniVendorResults from './OmniVendorResults';

export default function OmniSearchPanel() {
  const {
    effectiveDark, omniSearchResults, setOmniSearchOpen, omniActiveTab, setOmniActiveTab,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(3px)',
          zIndex: 2200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
        }}
        onClick={() => setOmniSearchOpen(false)}
      >
        <div
          style={{
            background: effectiveDark ? '#18181c' : '#ffffff',
            borderRadius: 14,
            maxWidth: 960,
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: effectiveDark ? '1px solid #2a2a30' : '1px solid #cbd5e1',
            color: effectiveDark ? '#f0f0f5' : '#0f172a',
            overflow: 'hidden',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 22px',
              borderBottom: '1px solid #e2e8f0',
              background: '#f8fafc',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 18, color: '#0284c7' }}>🔍</span>
                <h3 style={{ margin: 0, fontSize: 18, color: '#0f172a', fontWeight: 700 }}>
                  Omni-Search Results
                </h3>
                <span
                  style={{
                    fontSize: 12,
                    background: '#e0f2fe',
                    color: '#0369a1',
                    padding: '3px 10px',
                    borderRadius: 12,
                    fontWeight: 600,
                    border: '1px solid #bae6fd',
                  }}
                >
                  {omniSearchResults.query}
                </span>
              </div>
              <p style={{ margin: '4px 0 0', fontSize: 12, color: '#64748b' }}>
                Found {((omniSearchResults.counts?.labor || 0) + (omniSearchResults.counts?.projects || 0) + (omniSearchResults.counts?.contractors || 0) + (omniSearchResults.counts?.vendors || 0) + (omniSearchResults.counts?.materials || 0) + (omniSearchResults.counts?.parties || 0) + (omniSearchResults.counts?.agents || 0))} match(es) across all project records
              </p>
            </div>

            <button
              type="button"
              onClick={() => setOmniSearchOpen(false)}
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
                color: '#64748b',
                fontSize: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontWeight: 700,
                transition: 'all 0.15s ease',
              }}
              title="Close"
            >
              ✕
            </button>
          </div>

          {/* Category Navigation Pills */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              padding: '10px 20px',
              background: '#ffffff',
              borderBottom: '1px solid #f1f5f9',
              overflowX: 'auto',
              alignItems: 'center',
            }}
          >
            {[
              { id: 'all', label: 'All Matches', count: (omniSearchResults.counts?.labor || 0) + (omniSearchResults.counts?.projects || 0) + (omniSearchResults.counts?.contractors || 0) + (omniSearchResults.counts?.vendors || 0) + (omniSearchResults.counts?.materials || 0) + (omniSearchResults.counts?.parties || 0) + (omniSearchResults.counts?.agents || 0) },
              { id: 'labor', label: 'Workers', count: omniSearchResults.counts?.labor || 0, icon: '👷' },
              { id: 'projects', label: 'Projects', count: omniSearchResults.counts?.projects || 0, icon: '🏗️' },
              { id: 'contractors', label: 'Service Providers & Contractors', count: omniSearchResults.counts?.contractors || 0, icon: '🛠️' },
              { id: 'vendors', label: 'Vendors', count: omniSearchResults.counts?.vendors || 0, icon: '🚚' },
              { id: 'materials', label: 'Materials', count: omniSearchResults.counts?.materials || 0, icon: '🧱' },
              { id: 'parties', label: 'Clients', count: omniSearchResults.counts?.parties || 0, icon: '👥' },
              { id: 'agents', label: 'Agents', count: omniSearchResults.counts?.agents || 0, icon: '🛡️' },
            ].map((tab) => {
              const isActive = omniActiveTab === tab.id;
              const isZero = tab.count === 0 && tab.id !== 'all';

              return (
                <button
                  type="button"
                  key={tab.id}
                  onClick={() => setOmniActiveTab(tab.id)}
                  style={{
                    border: isActive ? '1px solid #0284c7' : '1px solid #e2e8f0',
                    background: isActive ? '#0284c7' : '#ffffff',
                    color: isActive ? '#ffffff' : isZero ? '#94a3b8' : '#334155',
                    padding: '6px 12px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    whiteSpace: 'nowrap',
                    boxShadow: isActive ? '0 2px 6px rgba(2, 132, 199, 0.25)' : 'none',
                    transition: 'all 0.15s ease',
                    opacity: isZero && !isActive ? 0.65 : 1,
                  }}
                >
                  {tab.icon && <span>{tab.icon}</span>}
                  <span>{tab.label}</span>
                  <span
                    style={{
                      fontSize: 11,
                      padding: '1px 6px',
                      borderRadius: 10,
                      fontWeight: 700,
                      background: isActive ? 'rgba(255, 255, 255, 0.25)' : '#f1f5f9',
                      color: isActive ? '#ffffff' : isZero ? '#94a3b8' : '#64748b',
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Scrollable Results Body */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: 20, background: '#f8fafc' }}>
            {/* 1. Labor / Workers Section */}
            {(omniActiveTab === 'all' || omniActiveTab === 'labor') && (omniSearchResults.results?.labor?.length > 0) && (
              <OmniLaborResults />
            )}

            {/* 2. Projects Section */}
            {(omniActiveTab === 'all' || omniActiveTab === 'projects') && (omniSearchResults.results?.projects?.length > 0) && (
              <OmniProjectResults />
            )}

            {/* 3. Service Providers & Contractors Section */}
            {(omniActiveTab === 'all' || omniActiveTab === 'contractors') && (omniSearchResults.results?.contractors?.length > 0) && (
              <OmniContractorResults />
            )}

            {/* 4. Vendors (Material Suppliers) Section */}
            {(omniActiveTab === 'all' || omniActiveTab === 'vendors') && (omniSearchResults.results?.vendors?.length > 0) && (
              <OmniVendorResults />
            )}

            {/* 4. Materials Section */}
            {(omniActiveTab === 'all' || omniActiveTab === 'materials') && (omniSearchResults.results?.materials?.length > 0) && (
              <OmniMaterialResults />
            )}

            {/* 5. Clients / Parties Section */}
            {(omniActiveTab === 'all' || omniActiveTab === 'parties') && (omniSearchResults.results?.parties?.length > 0) && (
              <OmniPartyResults />
            )}

            {/* Empty state */}
            {(!omniSearchResults.results || Object.values(omniSearchResults.results).every((arr) => !arr || arr.length === 0)) && (
              <div style={{ textAlign: 'center', padding: '3.5rem 1rem', color: '#64748b' }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>🔍</div>
                <p style={{ fontSize: 16, margin: 0, fontWeight: 700, color: '#1e293b' }}>
                  No records matched {omniSearchResults.query}
                </p>
                <p style={{ fontSize: 13, margin: '6px 0 0', color: '#64748b' }}>
                  Try searching by worker name, phone number, project title, or contractor trade.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
