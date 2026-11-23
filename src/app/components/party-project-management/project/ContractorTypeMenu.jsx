'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { contractorTrades, matchesContractorType } from '../shared';

export default function ContractorTypeMenu() {
  const {
    setMessage, setAttendanceSubTab, handleSectionChange, projectVendors, vendorTypeFilter,
    setVendorTypeFilter, setContractorMenuOpen, setAddLaborModal, setEditingLaborId, setLaborForm,
    setLockedContractorId, setLaborAttendanceSection, setAttendanceContractorFilter, setModalError,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="card" style={{ margin: '-8px 0 16px', padding: 12, border: '1px solid #bfdbfe', background: '#f8fbff' }}>
        <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8, color: '#1e3a8a' }}>Select contractor / service provider type</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button className={vendorTypeFilter === 'all' ? 'active-btn' : 'muted'} onClick={() => setVendorTypeFilter('all')}>All Contractors</button>
          {contractorTrades.map((trade) => (
            <button key={trade} className={vendorTypeFilter === trade.toLowerCase() ? 'active-btn' : 'muted'} onClick={() => setVendorTypeFilter(trade.toLowerCase())}>{trade}</button>
          ))}
        </div>
        {vendorTypeFilter !== 'all' && vendorTypeFilter !== 'general vendor' && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12, paddingTop: 12, borderTop: '1px solid #dbeafe', alignItems: 'center' }}>
            <strong style={{ fontSize: 13, padding: '4px 2px' }}>
              👷 {contractorTrades.find((trade) => trade.toLowerCase() === vendorTypeFilter) || vendorTypeFilter} team:
            </strong>
            {(() => {
              const matching = projectVendors.filter((pv) => matchesContractorType(pv.trade, vendorTypeFilter));
              const hasMatching = matching.length > 0;
              return (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      if (!hasMatching) {
                        setMessage(`⚠️ Pehle ${vendorTypeFilter} contractor add karein. Click "+ Add Contractor" to assign one.`);
                        return;
                      }
                      const targetVendor = matching[0];
                      setLockedContractorId(String(targetVendor.id));
                      setLaborForm({ name: '', phone: '', trade: targetVendor.trade || '', project_vendor_id: String(targetVendor.id), daily_rate: '', is_active: true });
                      setEditingLaborId(null);
                      setModalError('');
                      setAddLaborModal(true);
                    }}
                    style={{ opacity: hasMatching ? 1 : 0.65 }}
                  >
                    + Add Labour
                  </button>
                  <button
                    type="button"
                    className="muted"
                    onClick={() => {
                      if (!hasMatching) {
                        setMessage(`⚠️ Pehle ${vendorTypeFilter} contractor add karein.`);
                        return;
                      }
                      setContractorMenuOpen(false);
                      handleSectionChange('attendance');
                      setAttendanceSubTab('labor');
                      setLaborAttendanceSection('contractor');
                      setAttendanceContractorFilter(String(matching[0].id));
                    }}
                    style={{ opacity: hasMatching ? 1 : 0.65 }}
                  >
                    📅 Labour Attendance
                  </button>
                  {!hasMatching && (
                    <span style={{ fontSize: 12, color: '#dc2626' }}>
                      (No {vendorTypeFilter} assigned yet — pehle contractor add karein)
                    </span>
                  )}
                </>
              );
            })()}
          </div>
        )}
      </div>
    </>
  );
}
