'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import ReportControls from '../reports/ReportControls';
import ReportTable from '../reports/ReportTable';

export default function ReportsScreen() {
  const {
    loadingReport,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div>
        <ReportControls />

        {/* Report Data Table */}
        {loadingReport ? (
          <p style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>Loading report data...</p>
        ) : (
          <ReportTable />
        )}
      </div>
    </>
  );
}
