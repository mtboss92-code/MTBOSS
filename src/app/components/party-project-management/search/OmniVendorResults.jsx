'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function OmniVendorResults() {
  const {
    omniSearchResults, openQuickPayment,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 16 }}>🚚</span>
          <h4 style={{ margin: 0, fontSize: 13, color: '#0f172a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Vendors ({omniSearchResults.results.vendors.length})
          </h4>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {omniSearchResults.results.vendors.map((v) => (
            <div
              key={v.vendor_id}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: 12,
                padding: 16,
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: '#0f172a' }}>{v.name}</span>
                  <span
                    style={{
                      fontSize: 11,
                      background: '#f0fdf4',
                      color: '#15803d',
                      padding: '2px 8px',
                      borderRadius: 6,
                      fontWeight: 600,
                      border: '1px solid #bbf7d0',
                    }}
                  >
                    {v.trade || 'Material Vendor'}
                  </span>
                  <span style={{ fontSize: 12, color: '#64748b' }}>📞 {v.phone}</span>
                </div>

                <div style={{ display: 'flex', gap: 10, fontSize: 12 }}>
                  <div style={{ background: '#f8fafc', padding: '4px 8px', borderRadius: 6 }}>Earned: <strong>{INR(v.total_earned)}</strong></div>
                  <div style={{ background: '#f0fdf4', padding: '4px 8px', borderRadius: 6 }}>Paid: <strong style={{ color: '#16a34a' }}>{INR(v.total_paid)}</strong></div>
                  <div style={{ background: v.total_balance > 0 ? '#fff1f2' : '#f0fdf4', padding: '4px 8px', borderRadius: 6 }}>
                    Due: <strong style={{ color: v.total_balance > 0 ? '#e11d48' : '#16a34a' }}>{INR(v.total_balance)}</strong>
                  </div>
                </div>
              </div>

              {v.projects?.length > 0 && (
                <div style={{ overflowX: 'auto', background: '#ffffff', borderRadius: 8, border: '1px solid #f1f5f9', marginTop: 12 }}>
                  <table style={{ margin: 0, width: '100%', fontSize: 12 }}>
                    <thead>
                      <tr style={{ background: '#f8fafc' }}>
                        <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b' }}>PROJECT</th>
                        <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b' }}>SCOPE / SUPPLIED ITEMS</th>
                        <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b' }}>TYPE</th>
                        <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b' }}>EARNED</th>
                        <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b' }}>PAID</th>
                        <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b' }}>BALANCE</th>
                        <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b', textAlign: 'center' }}>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {v.projects.map((vp, vpIdx) => (
                        <tr key={vpIdx} style={{ borderBottom: '1px solid #f8fafc' }}>
                          <td style={{ padding: '9px 12px', fontWeight: 600, color: '#0f172a' }}>{vp.project_name}</td>
                          <td style={{ padding: '9px 12px', color: '#475569' }}>{vp.work_description || '—'}</td>
                          <td style={{ padding: '9px 12px' }}>
                            <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 4, background: '#f1f5f9', color: '#475569', fontWeight: 600 }}>
                              {vp.pay_type}
                            </span>
                          </td>
                          <td style={{ padding: '9px 12px' }}>{INR(vp.earned)}</td>
                          <td style={{ padding: '9px 12px' }}>{INR(vp.paid)}</td>
                          <td style={{ padding: '9px 12px', fontWeight: 700, color: vp.balance > 0 ? '#e11d48' : '#16a34a' }}>
                            {INR(vp.balance)}
                          </td>
                          <td style={{ padding: '9px 12px', textAlign: 'center' }}>
                            <button
                              type="button"
                              onClick={() => openQuickPayment(v, 'supplier', vp)}
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
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
