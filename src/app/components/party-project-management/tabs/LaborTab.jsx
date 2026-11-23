'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function LaborTab() {
  const {
    isAgent, isSupervisor, projectVendors, projectLabors, setAddLaborModal, setEditingLaborId,
    setLaborForm, setLockedContractorId, laborTypeFilter, setLaborTypeFilter, setModalError,
    openLaborDetail, del,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 10 }}>
          <h4 style={{ margin: 0, fontSize: 16 }}>Laborers &amp; Direct Workers</h4>
          <button
            onClick={() => {
              setLockedContractorId(null);
              setLaborForm({ name: '', phone: '', trade: '', project_vendor_id: '', daily_rate: '', is_active: true });
              setEditingLaborId(null);
              setModalError('');
              setAddLaborModal(true);
            }}
          >
            + Add Labor
          </button>
        </div>

        {/* Filter Chips Bar */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', marginBottom: 14, background: '#f8fafc', padding: 10, borderRadius: 8, border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#334155' }}>Filter:</span>
          <button
            type="button"
            className={laborTypeFilter === 'all' ? 'active-btn' : 'muted'}
            onClick={() => setLaborTypeFilter('all')}
            style={{ fontSize: 12, padding: '4px 10px' }}
          >
            All ({projectLabors.length})
          </button>
          <button
            type="button"
            className={laborTypeFilter === 'independent' ? 'active-btn' : 'muted'}
            onClick={() => setLaborTypeFilter('independent')}
            style={{ fontSize: 12, padding: '4px 10px' }}
          >
            ⚡ Independent ({projectLabors.filter((l) => !l.project_vendor_id && !l.vendor_name).length})
          </button>
          <button
            type="button"
            className={laborTypeFilter === 'contractor' ? 'active-btn' : 'muted'}
            onClick={() => setLaborTypeFilter('contractor')}
            style={{ fontSize: 12, padding: '4px 10px' }}
          >
            🏢 Contractor Teams ({projectLabors.filter((l) => l.project_vendor_id || l.vendor_name).length})
          </button>
          {projectVendors.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 'auto' }}>
              <span style={{ fontSize: 11, color: '#64748b' }}>By Contractor:</span>
              <select
                value={!['all', 'independent', 'contractor'].includes(laborTypeFilter) ? laborTypeFilter : ''}
                onChange={(e) => setLaborTypeFilter(e.target.value || 'all')}
                style={{ fontSize: 12, padding: '4px 8px', maxWidth: 220 }}
              >
                <option value="">-- All Contractors --</option>
                {projectVendors.map((pv) => (
                  <option key={pv.id} value={String(pv.id)}>
                    🏢 {pv.vendor_name} ({pv.trade || 'Vendor'})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <table>
        <thead>
          <tr>
            <th>Labor Name</th>
            <th>Trade</th>
            <th>Contractor / Vendor</th>
            <th>Daily Rate</th>
            <th>Total Earned</th>
            {!isSupervisor && <th>Total Paid</th>}
            {!isSupervisor && <th>Balance</th>}
            <th>Status</th>
            <th style={{ textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projectLabors
            .filter((lab) => {
              if (laborTypeFilter === 'all') return true;
              if (laborTypeFilter === 'independent') return !lab.project_vendor_id && !lab.vendor_name;
              if (laborTypeFilter === 'contractor') return Boolean(lab.project_vendor_id || lab.vendor_name);
              return String(lab.project_vendor_id) === String(laborTypeFilter);
            })
            .map((lab) => {
            const balVal = Number(lab.balance_due ?? (Number(lab.total_earned || 0) - Number(lab.total_paid || 0)));
            const isAdvance = balVal < 0;
            const isDue = balVal > 0;
            return (
              <tr
                key={lab.id}
                className="clickable-row"
                onClick={() => openLaborDetail(lab)}
                title="Click to open laborer detail page"
              >
                <td>
                  <b>{lab.name}</b>
                  {lab.phone && <div style={{ fontSize: 11, color: '#64748b' }}>{lab.phone}</div>}
                </td>
                <td>{lab.trade || 'Helper'}</td>
                <td>
                  {lab.vendor_name || lab.contractor_name ? (
                    <span style={{ fontSize: 11, background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe', padding: '2px 8px', borderRadius: 4, fontWeight: 600 }}>
                      🏢 Via {lab.vendor_name || lab.contractor_name}
                    </span>
                  ) : (
                    <span style={{ fontSize: 11, background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', padding: '2px 8px', borderRadius: 4, fontWeight: 600 }}>
                      ⚡ Independent
                    </span>
                  )}
                </td>
                <td style={{ fontWeight: 600 }}>{INR(lab.daily_rate)}/day</td>
                <td style={{ fontWeight: 600 }}>{INR(lab.total_earned)}</td>
                {!isSupervisor && <td style={{ color: '#16a34a', fontWeight: 600 }}>{INR(lab.total_paid)}</td>}
                {!isSupervisor && (
                  <td>
                    {isDue ? (
                      <span style={{ fontWeight: 700, color: '#ea580c' }}>
                        Due: {INR(balVal)}
                      </span>
                    ) : isAdvance ? (
                      <span className="badge badge-active" style={{ background: '#dcfce7', color: '#15803d', fontWeight: 700, whiteSpace: 'nowrap' }}>
                        Advance: {INR(Math.abs(balVal))}
                      </span>
                    ) : (
                      <span style={{ color: '#64748b', fontWeight: 600 }}>Settled (₹0)</span>
                    )}
                  </td>
                )}
                <td>
                  <span className={`badge ${lab.is_active ? 'badge-active' : 'badge-completed'}`}>
                    {lab.is_active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="actions" style={{ justifyContent: 'flex-end' }} onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => openLaborDetail(lab)}>
                    View Details &rarr;
                  </button>
                  <button
                    className="muted"
                    onClick={() => {
                      setLockedContractorId(lab.project_vendor_id ? String(lab.project_vendor_id) : null);
                      setLaborForm({
                        name: lab.name,
                        phone: lab.phone || '',
                        trade: lab.trade || '',
                        project_vendor_id: lab.project_vendor_id ? String(lab.project_vendor_id) : '',
                        daily_rate: lab.daily_rate,
                        is_active: lab.is_active,
                      });
                      setEditingLaborId(lab.id);
                      setModalError('');
                      setAddLaborModal(true);
                    }}
                  >
                    Edit
                  </button>
                  {!isAgent && (
                    <button className="danger" onClick={() => del('labor', lab.id)}>
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
          {projectLabors.filter((lab) => {
            if (laborTypeFilter === 'all') return true;
            if (laborTypeFilter === 'independent') return !lab.project_vendor_id && !lab.vendor_name;
            if (laborTypeFilter === 'contractor') return Boolean(lab.project_vendor_id || lab.vendor_name);
            return String(lab.project_vendor_id) === String(laborTypeFilter);
          }).length === 0 && (
            <tr>
              <td colSpan={9} style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                {laborTypeFilter === 'independent'
                  ? 'No independent laborers found for this project.'
                  : laborTypeFilter !== 'all'
                  ? 'No laborers found for this selected contractor.'
                  : 'No laborers added to this project yet. Click "+ Add Labor" above.'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </>
  );
}
