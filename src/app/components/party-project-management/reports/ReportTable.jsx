'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function ReportTable() {
  const {
    reportType, reportData, openQuickAttendance, openQuickPayment,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div style={{ overflowX: 'auto', background: '#fff', borderRadius: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
        <table>
          <thead>
            <tr>
              {reportData.headers?.map((h) => (
                <th key={h.key}>{h.label}</th>
              ))}
              {(reportType === 'cross_project_entity' || reportType === 'labor_summary') && (
                <th style={{ textAlign: 'center', minWidth: 150 }}>Quick Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {reportData.data?.map((row, rIdx) => (
              <tr key={rIdx}>
                {reportData.headers?.map((h) => {
                  const val = row[h.key];
                  const isMoney = String(h.label).includes('(₹)');
                  const isStatus = h.key === 'project_status' || h.key === 'status';
                  const isType = h.key === 'entity_type';

                  return (
                    <td key={h.key} style={isMoney ? { fontWeight: 600 } : {}}>
                      {isType ? (
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '2px 8px',
                            borderRadius: 4,
                            fontSize: 11,
                            fontWeight: 600,
                            background:
                              val === 'Labor / Worker'
                                ? '#eff6ff'
                                : val === 'Contractor'
                                ? '#fef3c7'
                                : val === 'Service Provider'
                                ? '#f3e8ff'
                                : val === 'Client / Party'
                                ? '#ecfdf5'
                                : '#f1f5f9',
                            color:
                              val === 'Labor / Worker'
                                ? '#1d4ed8'
                                : val === 'Contractor'
                                ? '#b45309'
                                : val === 'Service Provider'
                                ? '#7e22ce'
                                : val === 'Client / Party'
                                ? '#047857'
                                : '#475569',
                          }}
                        >
                          {val}
                        </span>
                      ) : isStatus ? (
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '2px 6px',
                            borderRadius: 4,
                            fontSize: 11,
                            fontWeight: 600,
                            background:
                              val === 'running' || val === 'Active' || val === 'ADEQUATE'
                                ? '#dcfce7'
                                : val === 'completed'
                                ? '#e0e7ff'
                                : val === 'LOW_STOCK'
                                ? '#fef9c3'
                                : val === 'OVER_USED'
                                ? '#fee2e2'
                                : '#f1f5f9',
                            color:
                              val === 'running' || val === 'Active' || val === 'ADEQUATE'
                                ? '#15803d'
                                : val === 'completed'
                                ? '#4338ca'
                                : val === 'LOW_STOCK'
                                ? '#a16207'
                                : val === 'OVER_USED'
                                ? '#b91c1c'
                                : '#475569',
                          }}
                        >
                          {val}
                        </span>
                      ) : isMoney ? (
                        INR(val)
                      ) : (
                        val ?? '—'
                      )}
                    </td>
                  );
                })}
                {(reportType === 'cross_project_entity' || reportType === 'labor_summary') && (
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', gap: 6 }}>
                      {(row.entity_type === 'Labor / Worker' || reportType === 'labor_summary') && (
                        <button
                          type="button"
                          onClick={() => openQuickAttendance({
                            labor_id: row.entity_record_id || row.labor_id,
                            name: row.entity_name || row.labor_name,
                            daily_rate: row.daily_rate,
                            projects: [{
                              labor_id: row.entity_record_id || row.labor_id,
                              project_id: row.project_id,
                              project_name: row.project_name,
                              daily_rate: row.daily_rate,
                            }],
                          })}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            fontSize: 11,
                            padding: '5px 10px',
                            borderRadius: 6,
                            background: '#f0f9ff',
                            color: '#0284c7',
                            border: '1px solid #bae6fd',
                            cursor: 'pointer',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            lineHeight: 1.2,
                          }}
                        >
                          <span>📅</span>
                          <span>Attendance</span>
                        </button>
                      )}
                      {(row.entity_type === 'Labor / Worker' || reportType === 'labor_summary') && (
                        <button
                          type="button"
                          onClick={() => openQuickPayment({
                            labor_id: row.entity_record_id || row.labor_id,
                            name: row.entity_name || row.labor_name,
                            balance_due: row.balance_due,
                            projects: [{
                              labor_id: row.entity_record_id || row.labor_id,
                              project_id: row.project_id,
                              project_name: row.project_name,
                              balance: row.balance_due,
                            }],
                          }, 'labor')}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            fontSize: 11,
                            padding: '5px 10px',
                            borderRadius: 6,
                            background: '#f0fdf4',
                            color: '#16a34a',
                            border: '1px solid #bbf7d0',
                            cursor: 'pointer',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            lineHeight: 1.2,
                          }}
                        >
                          <span>💳</span>
                          <span>Pay</span>
                        </button>
                      )}
                      {(row.entity_type === 'Contractor' || row.entity_type === 'Service Provider') && (
                        <button
                          type="button"
                          onClick={() => openQuickPayment({
                            project_vendor_id: row.entity_record_id,
                            name: row.entity_name,
                            balance_due: row.balance_due,
                            projects: [{
                              project_vendor_id: row.entity_record_id,
                              project_id: row.project_id,
                              project_name: row.project_name,
                              balance: row.balance_due,
                            }],
                          }, 'contractor')}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            fontSize: 11,
                            padding: '5px 10px',
                            borderRadius: 6,
                            background: '#fef3c7',
                            color: '#b45309',
                            border: '1px solid #fde68a',
                            cursor: 'pointer',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            lineHeight: 1.2,
                          }}
                        >
                          <span>💳</span>
                          <span>Pay Contractor</span>
                        </button>
                      )}
                      {(row.entity_type === 'Vendor / Supplier' || row.entity_type === 'Vendor') && (
                        <button
                          type="button"
                          onClick={() => openQuickPayment({
                            supplier_name: row.entity_name,
                            name: row.entity_name,
                            balance_due: row.balance_due,
                            entity_kind: 'supplier',
                            projects: [{
                              supplier_name: row.entity_name,
                              project_id: row.project_id,
                              project_name: row.project_name,
                              balance: row.balance_due,
                            }],
                          }, 'supplier')}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 4,
                            fontSize: 11,
                            padding: '5px 10px',
                            borderRadius: 6,
                            background: '#f0fdf4',
                            color: '#16a34a',
                            border: '1px solid #bbf7d0',
                            cursor: 'pointer',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            lineHeight: 1.2,
                          }}
                        >
                          <span>💳</span>
                          <span>Pay Vendor</span>
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
            {(!reportData.data || reportData.data.length === 0) && (
              <tr>
                <td colSpan={(reportData.headers?.length || 5) + ((reportType === 'cross_project_entity' || reportType === 'labor_summary') ? 1 : 0)} style={{ textAlign: 'center', padding: '2.5rem', color: '#64748b' }}>
                  No records match the selected filters. Try broadening your search or resetting filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
