'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';
import AttendanceTab from '../tabs/AttendanceTab';
import CommissionTab from '../tabs/CommissionTab';
import ConstructionTab from '../tabs/ConstructionTab';
import LaborTab from '../tabs/LaborTab';
import PaymentsTab from '../tabs/PaymentsTab';
import StaffTab from '../tabs/StaffTab';
import SuppliersTab from '../tabs/SuppliersTab';
import VendorsTab from '../tabs/VendorsTab';
import ContractorTypeMenu from './ContractorTypeMenu';
import ProjectTabBar from './ProjectTabBar';

export default function ProjectTabs() {
  const {
    isSupervisor, projectTab, contractorMenuOpen,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <>
        {/* 5 Main Tabs Navigation: Vendors, Labor, Attendance, Payments, Construction */}
        <ProjectTabBar />

        {contractorMenuOpen && projectTab === 'vendors' && (
          <ContractorTypeMenu />
        )}

        {/* ── 1. VENDORS TAB ────────────────────────────────────────── */}
        {/* ── TAB 1: VENDORS ON THIS PROJECT ──────────────────────────── */}
      {projectTab === 'vendors' && (
      <VendorsTab />
      )}

        {/* ── 2. LABOR TAB ──────────────────────────────────────────── */}
        {projectTab === 'labor' && (
          <LaborTab />
        )}

        {/* ── 3. ATTENDANCE TAB ─────────────────────────────────────── */}
        {projectTab === 'attendance' && (
          <AttendanceTab />
      )}

        {/* ── 4. PAYMENTS TAB ───────────────────────────────────────── */}
        {projectTab === 'payments' && !isSupervisor && (
          <PaymentsTab />
        )}

        {/* ── SUPPLIERS TAB: SUPPLIER LEDGER ─────────────────────── */}
        {projectTab === 'suppliers' && (
          <SuppliersTab />
        )}

        {/* ── 5. CONSTRUCTION TAB ───────────────────────────────────── */}
        {projectTab === 'construction' && (
          <ConstructionTab />
        )}

        {/* ── 7. COMMISSION TAB ───────────────────────────────────── */}
        {projectTab === 'commission' && (
          <CommissionTab />
        )}

        {/* ── 8. STAFF TAB ─────────────────────────────────────────── */}
        {projectTab === 'staff' && (
          <StaffTab />
          )}

      </>
    </>
  );
}
