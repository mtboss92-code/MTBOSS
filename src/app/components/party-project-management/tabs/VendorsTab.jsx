'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { matchesContractorType, INR } from '../shared';

export default function VendorsTab() {
  const {
    isAgent, isSupervisor, hasAgentPayment, projectVendors, setContractorSearch, vendorTypeFilter,
    setAddVendorModal, loadContractorsList, setModalError, openVendorDetail,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
          <h4 style={{ margin: 0, fontSize: 16 }}>Project Contractors &amp; Subcontractors</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                setModalError('');
                setContractorSearch('');
                loadContractorsList('all', '');
                setAddVendorModal(true);
              }}
            >
              + Add Contractor
            </button>
          </div>
        </div>

        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', margin: '8px 0 16px', borderRadius: 8, border: '1px solid #e2e8f0' }}>
          <table style={{ minWidth: 1050, width: '100%', borderCollapse: 'collapse', margin: 0 }}>
            <thead>
              <tr style={{ background: '#f8fafc' }}>
                <th style={{ minWidth: 140, whiteSpace: 'nowrap' }}>Vendor</th>
                <th style={{ minWidth: 110, whiteSpace: 'nowrap' }}>Trade</th>
                <th style={{ minWidth: 140, whiteSpace: 'nowrap' }}>Work Description</th>
                <th style={{ minWidth: 100, whiteSpace: 'nowrap' }}>Pay Type</th>
                {(!isAgent || hasAgentPayment) && <th style={{ minWidth: 110, whiteSpace: 'nowrap' }}>Rate / Contract</th>}
                {(!isAgent || hasAgentPayment) && <th style={{ minWidth: 100, whiteSpace: 'nowrap' }}>Total Earned</th>}
                {!isSupervisor && (!isAgent || hasAgentPayment) && <th style={{ minWidth: 100, whiteSpace: 'nowrap' }}>Total Paid</th>}
                {!isSupervisor && (!isAgent || hasAgentPayment) && <th style={{ minWidth: 110, whiteSpace: 'nowrap' }}>Balance</th>}
                <th style={{ minWidth: 90, whiteSpace: 'nowrap' }}>Status</th>
                <th style={{ minWidth: 140, textAlign: 'right', whiteSpace: 'nowrap' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projectVendors.filter((pv) => matchesContractorType(pv.trade, vendorTypeFilter)).map((pv) => {
                const earnedVal = pv.total_earned ?? pv.earned ?? 0;
                const paidVal = pv.total_paid ?? pv.paid ?? 0;
                const dueVal = pv.balance_due ?? pv.balance ?? (Number(earnedVal) - Number(paidVal));
                const isAdvance = Number(dueVal || 0) < 0;
                const isDue = Number(dueVal || 0) > 0;
                return (
                  <tr
                    key={pv.id}
                    className="clickable-row"
                    onClick={() => openVendorDetail(pv)}
                    title="Click to open contractor detail page"
                  >
                    <td>
                      <b>{pv.vendor_name}</b>
                      <br />
                      <span style={{ fontSize: 11, color: '#64748b' }}>{pv.vendor_phone || '—'}</span>
                    </td>
                    <td>{pv.trade || 'General'}</td>
                    <td>{pv.work_description}</td>
                    <td>
                      <span className="badge badge-active">
                        {pv.pay_type === 'daily_wage' ? 'Daily Wage' : 'Contract'}
                      </span>
                    </td>
                    {(!isAgent || hasAgentPayment) && (
                      <td>
                        {pv.pay_type === 'daily_wage' ? `${INR(pv.daily_rate)}/day` : INR(pv.contract_amount)}
                      </td>
                    )}
                    {(!isAgent || hasAgentPayment) && (
                      <td style={{ fontWeight: 600 }}>{INR(earnedVal)}</td>
                    )}
                    {!isSupervisor && (!isAgent || hasAgentPayment) && <td style={{ color: '#16a34a' }}>{INR(paidVal)}</td>}
                    {!isSupervisor && (!isAgent || hasAgentPayment) && (
                      <td>
                        {isDue ? (
                          <span style={{ fontWeight: 700, color: '#ea580c' }}>
                            Due: {INR(dueVal)}
                          </span>
                        ) : isAdvance ? (
                          <span className="badge badge-active" style={{ background: '#dcfce7', color: '#15803d', fontWeight: 700, whiteSpace: 'nowrap' }}>
                            Advance: {INR(Math.abs(dueVal))}
                          </span>
                        ) : (
                          <span style={{ color: '#64748b', fontWeight: 600 }}>Settled (₹0)</span>
                        )}
                      </td>
                    )}
                    <td>
                      <span className={`badge ${pv.status === 'completed' ? 'badge-completed' : 'badge-active'}`}>
                        {pv.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }} onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        className="muted"
                        style={{
                          padding: '5px 12px',
                          fontSize: 12,
                          borderRadius: 6,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                        onClick={() => openVendorDetail(pv)}
                      >
                        <span>👥 Team &amp; Details</span>
                        <span style={{ fontSize: 11, color: '#64748b' }}>&rarr;</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
              {projectVendors.filter((pv) => matchesContractorType(pv.trade, vendorTypeFilter)).length === 0 && (
                <tr>
                  <td colSpan={(!isAgent || hasAgentPayment) ? (isSupervisor ? 8 : 10) : 6} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                    {vendorTypeFilter === 'all'
                      ? 'No contractors assigned to this project yet.'
                      : `No ${vendorTypeFilter.toLowerCase().endsWith('contractor') ? vendorTypeFilter : `${vendorTypeFilter} contractor`} assigned to this project.`} Click &ldquo;+ Add Contractor&rdquo; above.
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
