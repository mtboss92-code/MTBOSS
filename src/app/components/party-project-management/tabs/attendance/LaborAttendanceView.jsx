'use client';

import { usePm } from '../../PmContext';
import pmStyles from '../../pmStyles';
import { INR } from '../../shared';
import LaborAttendanceHistory from './LaborAttendanceHistory';
import LaborAttendanceTable from './LaborAttendanceTable';

export default function LaborAttendanceView() {
  const {
    projectVendors, laborAttendanceRows, laborAttendanceSection, setLaborAttendanceSection,
    attendanceContractorFilter, setAttendanceContractorFilter,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        {/* Sub-view Section Toggle & Filters */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', marginBottom: 14, background: '#f8fafc', padding: 10, borderRadius: 8, border: '1px solid #e2e8f0' }}>
          <strong style={{ fontSize: 13, color: '#334155' }}>Section:</strong>
          <button
            type="button"
            className={laborAttendanceSection === 'all' ? 'active-btn' : 'muted'}
            onClick={() => setLaborAttendanceSection('all')}
            style={{ fontSize: 12, padding: '4px 10px' }}
          >
            All Workers ({laborAttendanceRows.length})
          </button>
          <button
            type="button"
            className={laborAttendanceSection === 'direct' ? 'active-btn' : 'muted'}
            onClick={() => setLaborAttendanceSection('direct')}
            style={{ fontSize: 12, padding: '4px 10px' }}
          >
            ⚡ Direct (Independent) ({laborAttendanceRows.filter((r) => !r.project_vendor_id && !r.vendor_name).length})
          </button>
          <button
            type="button"
            className={laborAttendanceSection === 'contractor' ? 'active-btn' : 'muted'}
            onClick={() => setLaborAttendanceSection('contractor')}
            style={{ fontSize: 12, padding: '4px 10px' }}
          >
            🏢 Contractor Teams ({laborAttendanceRows.filter((r) => r.project_vendor_id || r.vendor_name).length})
          </button>

          {laborAttendanceSection === 'contractor' && projectVendors.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 'auto' }}>
              <span style={{ fontSize: 11, color: '#64748b' }}>Contractor:</span>
              <select
                value={attendanceContractorFilter}
                onChange={(e) => setAttendanceContractorFilter(e.target.value)}
                style={{ fontSize: 12, padding: '4px 8px', maxWidth: 220 }}
              >
                <option value="">All Contractor Teams</option>
                {projectVendors.map((pv) => (
                  <option key={pv.id} value={String(pv.id)}>
                    🏢 {pv.vendor_name} ({pv.trade || 'Vendor'})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Separate Totals Summary Cards */}
        {(() => {
          const directRows = laborAttendanceRows.filter((r) => !r.project_vendor_id && !r.vendor_name);
          const contractorRows = laborAttendanceRows.filter((r) => {
            if (!r.project_vendor_id && !r.vendor_name) return false;
            if (attendanceContractorFilter) return String(r.project_vendor_id) === String(attendanceContractorFilter);
            return true;
          });

          const directWage = directRows.reduce((acc, r) => acc + (Number(r.wage_amount) || 0), 0);
          const directPresent = directRows.filter((r) => r.status === 'present').length;
          const directHalf = directRows.filter((r) => r.status === 'half_day').length;
          const directAbsent = directRows.filter((r) => r.status === 'absent').length;

          const contractorWage = contractorRows.reduce((acc, r) => acc + (Number(r.wage_amount) || 0), 0);
          const contractorPresent = contractorRows.filter((r) => r.status === 'present').length;
          const contractorHalf = contractorRows.filter((r) => r.status === 'half_day').length;
          const contractorAbsent = contractorRows.filter((r) => r.status === 'absent').length;

          return (
            <div style={{ display: 'grid', gridTemplateColumns: laborAttendanceSection === 'all' ? '1fr 1fr' : '1fr', gap: 12, marginBottom: 16 }}>
              {(laborAttendanceSection === 'all' || laborAttendanceSection === 'direct') && (
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: 12 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#166534', marginBottom: 4 }}>
                    ⚡ Direct (Independent) Labor Summary
                  </div>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 12, color: '#14532d' }}>
                    <span>Workers: <b>{directRows.length}</b></span>
                    <span>Present: <b style={{ color: '#16a34a' }}>{directPresent}</b></span>
                    <span>Half Day: <b style={{ color: '#d97706' }}>{directHalf}</b></span>
                    <span>Absent: <b style={{ color: '#dc2626' }}>{directAbsent}</b></span>
                    <span style={{ marginLeft: 'auto', fontWeight: 700 }}>Total Wages: {INR(directWage)}</span>
                  </div>
                </div>
              )}

              {(laborAttendanceSection === 'all' || laborAttendanceSection === 'contractor') && (
                <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 8, padding: 12 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#1e40af', marginBottom: 4 }}>
                    🏢 Contractor Labor Team Summary {attendanceContractorFilter ? `(${projectVendors.find((v) => String(v.id) === String(attendanceContractorFilter))?.vendor_name || 'Selected'})` : ''}
                  </div>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 12, color: '#1e3a8a' }}>
                    <span>Workers: <b>{contractorRows.length}</b></span>
                    <span>Present: <b style={{ color: '#16a34a' }}>{contractorPresent}</b></span>
                    <span>Half Day: <b style={{ color: '#d97706' }}>{contractorHalf}</b></span>
                    <span>Absent: <b style={{ color: '#dc2626' }}>{contractorAbsent}</b></span>
                    <span style={{ marginLeft: 'auto', fontWeight: 700 }}>Team Wages: {INR(contractorWage)}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        <LaborAttendanceTable />

        {/* Labor Attendance History Log */}
        <LaborAttendanceHistory />
      </div>
    </>
  );
}
