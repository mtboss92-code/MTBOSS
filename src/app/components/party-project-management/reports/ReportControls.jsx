'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import ReportSummary from './ReportSummary';

export default function ReportControls() {
  const {
    reportType, setReportType, reportProjectFilter, setReportProjectFilter, reportMaterialFilter,
    setReportMaterialFilter, reportProjectStatus, setReportProjectStatus, reportEntityType,
    setReportEntityType, reportFrequency, setReportFrequency, reportSearch, setReportSearch,
    reportStartDate, setReportStartDate, reportEndDate, setReportEndDate, reportData,
    availableReportProjects, availableReportMaterials, reportCsvUrl,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 18 }}>Project Management &bull; Reports &amp; Analytics</h3>
            <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: 12 }}>
              Cross-project entity tracking, material consumption by period, site stock, cost summaries, and vendor balances with CSV export.
            </p>
          </div>

          <a
            href={reportCsvUrl}
            download
            className="active-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '7px 14px',
              borderRadius: 6,
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            📥 Download CSV
          </a>
        </div>

        {/* Report Type Selector Tabs */}
        <div className="subtabs" style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {[
            { id: 'cost_summary', label: '1. Project Cost Summary' },
            { id: 'material_consumption', label: '2. Material Consumption' },
            { id: 'stock_running', label: '3. Stock Across Running Projects' },
            { id: 'vendor_balance', label: '4. Vendor Balance Summary' },
            { id: 'labor_summary', label: '5. Labor & Worker Summary' },
            { id: 'party_summary', label: '6. Party-wise Contract & Payment' },
            { id: 'cross_project_entity', label: '7. Cross-Project Entity Ledger (Universal Search)' },
          ].map((tab) => (
            <button
              type="button"
              key={tab.id}
              className={reportType === tab.id ? 'active' : ''}
              onClick={() => setReportType(tab.id)}
              style={{ fontSize: 12 }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Comprehensive Universal Filter Toolbar ── */}
        <div
          style={{
            marginTop: 16,
            padding: '12px 14px',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#1e293b', display: 'flex', alignItems: 'center', gap: 6 }}>
              🔍 Filter &amp; Search Reports
            </span>
            {(reportSearch || reportProjectFilter || reportMaterialFilter || reportProjectStatus !== 'all' || reportEntityType !== 'all' || reportFrequency !== 'all' || reportStartDate || reportEndDate) && (
              <button
                type="button"
                className="muted"
                onClick={() => {
                  setReportSearch('');
                  setReportProjectFilter('');
                  setReportMaterialFilter('');
                  setReportProjectStatus('all');
                  setReportEntityType('all');
                  setReportFrequency('all');
                  setReportStartDate('');
                  setReportEndDate('');
                }}
                style={{ fontSize: 11, padding: '3px 8px', borderRadius: 4, cursor: 'pointer' }}
              >
                ✕ Reset Filters
              </button>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
            {/* 1. Name or Phone Number Universal Search */}
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#64748b', marginBottom: 3 }}>
                Search Name or Phone
              </label>
              <input
                type="text"
                value={reportSearch}
                onChange={(e) => setReportSearch(e.target.value)}
                placeholder="e.g. Ramesh, 9876..., Mason"
                style={{ width: '100%', padding: '6px 10px', fontSize: 12, borderRadius: 6, border: '1px solid #cbd5e1' }}
              />
            </div>

            {/* 2. Entity Type (All, Labor, Contractor, Vendor, Service Provider, Party) */}
            {(reportType === 'cross_project_entity' || reportType === 'vendor_balance' || reportType === 'labor_summary') && (
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#64748b', marginBottom: 3 }}>
                  Entity Type
                </label>
                <select
                  value={reportEntityType}
                  onChange={(e) => setReportEntityType(e.target.value)}
                  style={{ width: '100%', padding: '6px 10px', fontSize: 12, borderRadius: 6, border: '1px solid #cbd5e1' }}
                >
                  <option value="all">All Entity Types</option>
                  <option value="labor">Labor / Worker</option>
                  <option value="contractor">Contractor</option>
                  <option value="vendor">Vendor / Supplier</option>
                  <option value="service_provider">Service Provider</option>
                  <option value="party">Client / Party</option>
                </select>
              </div>
            )}

            {/* 3. Project Status (All, Running, Completed / Finished, On Hold) */}
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#64748b', marginBottom: 3 }}>
                Project Status
              </label>
              <select
                value={reportProjectStatus}
                onChange={(e) => setReportProjectStatus(e.target.value)}
                style={{ width: '100%', padding: '6px 10px', fontSize: 12, borderRadius: 6, border: '1px solid #cbd5e1' }}
              >
                <option value="all">All Statuses (Running + Finished)</option>
                <option value="running">Running Projects Only</option>
                <option value="completed">Finished / Completed Only</option>
                <option value="on_hold">On Hold Only</option>
              </select>
            </div>

            {/* 4. Project Filter */}
            <div>
              <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#64748b', marginBottom: 3 }}>
                Project
              </label>
              <select
                value={reportProjectFilter}
                onChange={(e) => setReportProjectFilter(e.target.value)}
                style={{ width: '100%', padding: '6px 10px', fontSize: 12, borderRadius: 6, border: '1px solid #cbd5e1' }}
              >
                <option value="">All Projects</option>
                {availableReportProjects.map((p) => (
                  <option value={p.id} key={p.id}>
                    {p.name} {p.status ? `(${p.status})` : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* 5. Material Filter (For Material Consumption & Stock tabs) */}
            {(reportType === 'material_consumption' || reportType === 'stock_running') && (
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#64748b', marginBottom: 3 }}>
                  Material
                </label>
                <select
                  value={reportMaterialFilter}
                  onChange={(e) => setReportMaterialFilter(e.target.value)}
                  style={{ width: '100%', padding: '6px 10px', fontSize: 12, borderRadius: 6, border: '1px solid #cbd5e1' }}
                >
                  <option value="">All Materials</option>
                  {availableReportMaterials.map((m) => (
                    <option value={m.id} key={m.id}>
                      {m.name} {m.unit ? `(${m.unit})` : ''}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* 6. Frequency Breakdown (Daily, Weekly, Monthly, Yearly) for Material Consumption */}
            {reportType === 'material_consumption' && (
              <div>
                <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#64748b', marginBottom: 3 }}>
                  Time Frequency
                </label>
                <select
                  value={reportFrequency}
                  onChange={(e) => setReportFrequency(e.target.value)}
                  style={{ width: '100%', padding: '6px 10px', fontSize: 12, borderRadius: 6, border: '1px solid #cbd5e1' }}
                >
                  <option value="all">Summary Total (All-Time)</option>
                  <option value="daily">Per Day (Daily Breakdown)</option>
                  <option value="weekly">Per Week (Weekly Breakdown)</option>
                  <option value="monthly">Per Month (Monthly Breakdown)</option>
                  <option value="yearly">Per Year (Yearly Breakdown)</option>
                </select>
              </div>
            )}

            {/* 7. Date Range: Start Date & End Date */}
            {reportType !== 'stock_running' && (
              <>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#64748b', marginBottom: 3 }}>
                    From Date
                  </label>
                  <input
                    type="date"
                    value={reportStartDate}
                    onChange={(e) => setReportStartDate(e.target.value)}
                    style={{ width: '100%', padding: '6px 10px', fontSize: 12, borderRadius: 6, border: '1px solid #cbd5e1' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#64748b', marginBottom: 3 }}>
                    To Date
                  </label>
                  <input
                    type="date"
                    value={reportEndDate}
                    onChange={(e) => setReportEndDate(e.target.value)}
                    style={{ width: '100%', padding: '6px 10px', fontSize: 12, borderRadius: 6, border: '1px solid #cbd5e1' }}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── Summary KPI Metric Cards ── */}
        {reportData.summary && (
          <ReportSummary />
        )}
      </div>
    </>
  );
}
