'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function OmniLaborResults() {
  const {
    omniSearchResults, openQuickAttendance, openQuickPayment,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 16 }}>👷</span>
          <h4 style={{ margin: 0, fontSize: 13, color: '#0f172a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Labor &amp; Workers ({omniSearchResults.results.labor.length})
          </h4>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {omniSearchResults.results.labor.map((w, wIdx) => (
            <div
              key={wIdx}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: 12,
                padding: 16,
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}
            >
              {/* Worker Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: '#0f172a' }}>{w.name}</span>
                  <span
                    style={{
                      fontSize: 11,
                      background: '#f0f9ff',
                      color: '#0284c7',
                      padding: '2px 8px',
                      borderRadius: 6,
                      fontWeight: 600,
                      border: '1px solid #bae6fd',
                    }}
                  >
                    {w.trade}
                  </span>
                  <span style={{ fontSize: 12, color: '#64748b', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    📞 {w.phone}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    background: '#f8fafc',
                    color: '#475569',
                    padding: '3px 10px',
                    borderRadius: 12,
                    border: '1px solid #e2e8f0',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a' }}></span>
                  Active across {w.projects.length} project(s)
                </div>
              </div>

              {/* Modern KPI Cards Strip */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10, margin: '14px 0' }}>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '8px 12px' }}>
                  <div style={{ fontSize: 10, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Days Present</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#0f172a', marginTop: 2 }}>{w.total_days_present} Days</div>
                </div>
                <div style={{ background: '#eff6ff', border: '1px solid #dbeafe', borderRadius: 8, padding: '8px 12px' }}>
                  <div style={{ fontSize: 10, color: '#1e40af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Total Earned</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#2563eb', marginTop: 2 }}>{INR(w.total_earned)}</div>
                </div>
                <div style={{ background: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: 8, padding: '8px 12px' }}>
                  <div style={{ fontSize: 10, color: '#166534', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Total Paid</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#16a34a', marginTop: 2 }}>{INR(w.total_paid)}</div>
                </div>
                <div style={{ background: w.total_balance > 0 ? '#fff1f2' : '#f0fdf4', border: w.total_balance > 0 ? '1px solid #ffe4e6' : '1px solid #dcfce7', borderRadius: 8, padding: '8px 12px' }}>
                  <div style={{ fontSize: 10, color: w.total_balance > 0 ? '#991b1b' : '#166534', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Balance Due</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: w.total_balance > 0 ? '#e11d48' : '#16a34a', marginTop: 2 }}>
                    {INR(w.total_balance)}
                  </div>
                </div>
              </div>

              {/* Projects Breakdown Table */}
              <div style={{ overflowX: 'auto', background: '#ffffff', borderRadius: 8, border: '1px solid #f1f5f9' }}>
                <table style={{ margin: 0, width: '100%', fontSize: 12 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b' }}>PROJECT</th>
                      <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b' }}>STATUS</th>
                      <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b' }}>DAILY RATE</th>
                      <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b' }}>DAYS PRESENT</th>
                      <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b' }}>EARNED</th>
                      <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b' }}>PAID</th>
                      <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b' }}>BALANCE</th>
                      <th style={{ padding: '8px 12px', fontSize: 11, color: '#64748b', textAlign: 'center' }}>QUICK ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {w.projects.map((p, pIdx) => (
                      <tr key={pIdx} style={{ borderBottom: '1px solid #f8fafc' }}>
                        <td style={{ padding: '10px 12px', fontWeight: 600, color: '#0f172a' }}>{p.project_name}</td>
                        <td style={{ padding: '10px 12px' }}>
                          <span
                            style={{
                              fontSize: 10,
                              padding: '2px 7px',
                              borderRadius: 4,
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              background: p.project_status === 'running' ? '#dcfce7' : '#e0e7ff',
                              color: p.project_status === 'running' ? '#15803d' : '#4338ca',
                            }}
                          >
                            {p.project_status}
                          </span>
                        </td>
                        <td style={{ padding: '10px 12px' }}>{INR(p.daily_rate)}</td>
                        <td style={{ padding: '10px 12px', fontWeight: 600 }}>{p.days_present}</td>
                        <td style={{ padding: '10px 12px' }}>{INR(p.earned)}</td>
                        <td style={{ padding: '10px 12px' }}>{INR(p.paid)}</td>
                        <td style={{ padding: '10px 12px', fontWeight: 700, color: p.balance > 0 ? '#e11d48' : '#16a34a' }}>
                          {INR(p.balance)}
                        </td>
                        <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
                            <button
                              type="button"
                              onClick={() => openQuickAttendance(w, p)}
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
                            <button
                              type="button"
                              onClick={() => openQuickPayment(w, 'labor', p)}
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
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
