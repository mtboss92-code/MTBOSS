'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import { INR } from '../shared';

export default function ReportSummary() {
  const {
    reportType, reportData,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div
        style={{
          marginTop: 16,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12,
        }}
      >
        {reportType === 'cross_project_entity' && (
          <>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#166534', fontWeight: 600 }}>Total Billed / Earned</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#15803d', marginTop: 2 }}>
                {INR(reportData.summary.total_billed)}
              </div>
            </div>
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#1e40af', fontWeight: 600 }}>Total Paid</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#2563eb', marginTop: 2 }}>
                {INR(reportData.summary.total_paid)}
              </div>
            </div>
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#991b1b', fontWeight: 600 }}>Balance Due</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#dc2626', marginTop: 2 }}>
                {INR(reportData.summary.total_balance)}
              </div>
            </div>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#475569', fontWeight: 600 }}>Projects Involved</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginTop: 2 }}>
                {reportData.summary.projects_count}
              </div>
            </div>
            <div style={{ background: '#fdf4ff', border: '1px solid #f5d0fe', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#86198f', fontWeight: 600 }}>Entities Found</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#a21caf', marginTop: 2 }}>
                {reportData.summary.entities_count}
              </div>
            </div>
          </>
        )}

        {reportType === 'cost_summary' && (
          <>
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#1e40af', fontWeight: 600 }}>Total Contract Value</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#2563eb', marginTop: 2 }}>
                {INR(reportData.summary.total_contract_value)}
              </div>
            </div>
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#991b1b', fontWeight: 600 }}>Total Expenses</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#dc2626', marginTop: 2 }}>
                {INR(reportData.summary.total_expense)}
              </div>
            </div>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#166534', fontWeight: 600 }}>Total Received</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#15803d', marginTop: 2 }}>
                {INR(reportData.summary.total_received)}
              </div>
            </div>
            <div style={{ background: reportData.summary.total_profit_or_loss >= 0 ? '#f0fdf4' : '#fef2f2', border: '1px solid #cbd5e1', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#475569', fontWeight: 600 }}>Net Profit / Loss</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: reportData.summary.total_profit_or_loss >= 0 ? '#15803d' : '#dc2626', marginTop: 2 }}>
                {INR(reportData.summary.total_profit_or_loss)}
              </div>
            </div>
          </>
        )}

        {reportType === 'material_consumption' && (
          <>
            <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#92400e', fontWeight: 600 }}>Consumed Material Cost</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#b45309', marginTop: 2 }}>
                {INR(reportData.summary.total_consumed_cost)}
              </div>
            </div>
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#475569', fontWeight: 600 }}>Total Quantity Used</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginTop: 2 }}>
                {Number(reportData.summary.total_used_qty).toLocaleString()}
              </div>
            </div>
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#1e40af', fontWeight: 600 }}>Distinct Materials</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#2563eb', marginTop: 2 }}>
                {reportData.summary.materials_count}
              </div>
            </div>
          </>
        )}

        {(reportType === 'vendor_balance' || reportType === 'labor_summary') && (
          <>
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#1e40af', fontWeight: 600 }}>Total Earned</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#2563eb', marginTop: 2 }}>
                {INR(reportData.summary.total_earned)}
              </div>
            </div>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#166534', fontWeight: 600 }}>Total Paid</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#15803d', marginTop: 2 }}>
                {INR(reportData.summary.total_paid)}
              </div>
            </div>
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#991b1b', fontWeight: 600 }}>Total Balance Due</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#dc2626', marginTop: 2 }}>
                {INR(reportData.summary.total_balance_due)}
              </div>
            </div>
          </>
        )}

        {reportType === 'party_summary' && (
          <>
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#1e40af', fontWeight: 600 }}>Contract Value</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#2563eb', marginTop: 2 }}>
                {INR(reportData.summary.total_contract_value)}
              </div>
            </div>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#166534', fontWeight: 600 }}>Received</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#15803d', marginTop: 2 }}>
                {INR(reportData.summary.total_received)}
              </div>
            </div>
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontSize: 11, color: '#991b1b', fontWeight: 600 }}>Pending</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#dc2626', marginTop: 2 }}>
                {INR(reportData.summary.total_pending)}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
