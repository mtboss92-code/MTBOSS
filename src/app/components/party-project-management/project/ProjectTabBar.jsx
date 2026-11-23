'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';

export default function ProjectTabBar() {
  const {
    allowedMainTabs, projectTab, handleSectionChange, projectVendors, projectSuppliers,
    setSelectedSupplier, setContractorMenuOpen, projectLabors, commissionRows, projectStaff,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div className="subtabs" style={{ marginBottom: '1.25rem' }}>
        {allowedMainTabs.includes('vendors') && (
          <button
            className={projectTab === 'vendors' ? 'active' : ''}
            onClick={() => { setSelectedSupplier(null); handleSectionChange('vendors'); setContractorMenuOpen((open) => !open); }}
          >
            👷 Contractors ({projectVendors.length}) ▾
          </button>
        )}
        {allowedMainTabs.includes('labor') && (
          <button
            className={projectTab === 'labor' ? 'active' : ''}
            onClick={() => { setSelectedSupplier(null); setContractorMenuOpen(false); handleSectionChange('labor'); }}
          >
            🦺 Labor ({projectLabors.length})
          </button>
        )}
        {allowedMainTabs.includes('attendance') && (
          <button
            className={projectTab === 'attendance' ? 'active' : ''}
            onClick={() => { setSelectedSupplier(null); setContractorMenuOpen(false); handleSectionChange('attendance'); }}
          >
            📅 Attendance
          </button>
        )}
        {allowedMainTabs.includes('payments') && (
          <button
            className={projectTab === 'payments' ? 'active' : ''}
            onClick={() => { setSelectedSupplier(null); setContractorMenuOpen(false); handleSectionChange('payments'); }}
          >
            💳 Payments
          </button>
        )}
        {allowedMainTabs.includes('construction') && (
          <button
            className={projectTab === 'construction' ? 'active' : ''}
            onClick={() => { setSelectedSupplier(null); setContractorMenuOpen(false); handleSectionChange('construction'); }}
          >
            🏗️ Construction
          </button>
        )}
        {allowedMainTabs.includes('suppliers') && (
          <button
            className={projectTab === 'suppliers' ? 'active' : ''}
            onClick={() => { setSelectedSupplier(null); setContractorMenuOpen(false); handleSectionChange('suppliers'); }}
          >
            🚚 Vendors ({projectSuppliers.length})
          </button>
        )}
        {allowedMainTabs.includes('commission') && (
          <button
            className={projectTab === 'commission' ? 'active' : ''}
            onClick={() => { setSelectedSupplier(null); setContractorMenuOpen(false); handleSectionChange('commission'); }}
          >
            🤝 Commission ({commissionRows.length})
          </button>
        )}
        {allowedMainTabs.includes('staff') && (
          <button
            className={projectTab === 'staff' ? 'active' : ''}
            onClick={() => { setSelectedSupplier(null); setContractorMenuOpen(false); handleSectionChange('staff'); }}
          >
            👔 Staff ({projectStaff.length})
          </button>
        )}
      </div>
    </>
  );
}
