'use client';

import { usePm } from '../PmContext';
import AddLaborModal from '../modals/AddLaborModal';
import AddMaterialModal from '../modals/AddMaterialModal';
import AddVendorModal from '../modals/AddVendorModal';
import AdjustmentModal from '../modals/AdjustmentModal';
import CommissionModal from '../modals/CommissionModal';
import ExpenseModal from '../modals/ExpenseModal';
import LaborPaymentModal from '../modals/LaborPaymentModal';
import LocalVendorModal from '../modals/LocalVendorModal';
import MaterialReceivedModal from '../modals/MaterialReceivedModal';
import MaterialSupplyModal from '../modals/MaterialSupplyModal';
import MaterialUsedModal from '../modals/MaterialUsedModal';
import PartyPaymentModal from '../modals/PartyPaymentModal';
import StaffModal from '../modals/StaffModal';
import StaffPaymentModal from '../modals/StaffPaymentModal';
import SupplierPaymentModal from '../modals/SupplierPaymentModal';
import VendorPaymentModal from '../modals/VendorPaymentModal';
import pmStyles from '../pmStyles';
import LaborDetailView from '../project/LaborDetailView';
import MaterialTimelineView from '../project/MaterialTimelineView';
import ProjectSummaryCard from '../project/ProjectSummaryCard';
import ProjectTabs from '../project/ProjectTabs';
import VendorDetailView from '../project/VendorDetailView';

export default function ProjectScreen() {
  const {
    isAgent, isSupervisor, agentSpecs, partyPaymentModal, vendorPaymentModal, supplierPaymentModal,
    localVendorModal, addVendorModal, selectedVendor, supplyModal, selectedLabor, addLaborModal,
    laborPaymentModal, addMaterialModal, receivedModal, usedModal, adjustmentModal, timelineMaterial,
    expenseModal, commissionModal, staffModal, staffPaymentModal,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <>
        {isAgent && agentSpecs.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3.5rem 1.5rem', color: '#64748b' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🔒</div>
            <h3 style={{ margin: '0 0 8px', color: '#0f172a', fontSize: '18px' }}>No access assigned. Contact admin.</h3>
            <p style={{ margin: 0, fontSize: '13px' }}>Your account does not have any active project specializations. Please contact your administrator to grant access.</p>
          </div>
        ) : (
          <>
            {/* Project Summary Cards */}
            <ProjectSummaryCard />

            {/* Subtabs Navigation */}
            {!selectedVendor && !selectedLabor && !timelineMaterial ? (
              <ProjectTabs />
        ) : selectedVendor ? (
          /* ── VENDOR DETAIL SCREEN (ATTENDANCE CALENDAR & MATERIAL HISTORY) ── */
          <VendorDetailView />
        ) : selectedLabor ? (
          /* ── LABOR DETAIL SCREEN (ATTENDANCE CALENDAR & PAYMENT HISTORY) ── */
          <LaborDetailView />
        ) : timelineMaterial ? (
          /* ── MATERIAL TIMELINE DETAIL SCREEN ── */
          <MaterialTimelineView />
        ) : null}

        {/* ── MODAL: ADD / EDIT LABOR ─────────────────────────────────────── */}
        {/* ── MODAL: ADD / EDIT LABOR ─────────────────────────────────────── */}
        {addLaborModal && (
          <AddLaborModal />
        )}

        {/* ── MODAL: RECORD LABOR PAYMENT ─────────────────────────────────── */}
        {laborPaymentModal && !isSupervisor && (
          <LaborPaymentModal />
        )}

        {/* ── MODAL: ASSIGN VENDOR ────────────────────────────────────────── */}
        {addVendorModal && (
          <AddVendorModal />
        )}

        {/* ── MODAL: RECORD VENDOR MATERIAL SUPPLY ────────────────────────── */}
        {supplyModal && selectedVendor && (
          <MaterialSupplyModal />
        )}

        {/* ── MODAL: CREATE MASTER MATERIAL ───────────────────────────────── */}
        {addMaterialModal && (
          <AddMaterialModal />
        )}

        {/* ── MODAL: ADD LOCAL VENDOR ────────────────────────────────────── */}
        {localVendorModal && (
          <LocalVendorModal />
        )}

        {/* ── MODAL: RECORD SUPPLIER PAYMENT ─────────────────────────────── */}
        {supplierPaymentModal && (
          <SupplierPaymentModal />
        )}

        {/* ── MODAL: MATERIAL RECEIVED ────────────────────────────────────── */}
        {receivedModal && (
          <MaterialReceivedModal />
        )}

        {/* ── MODAL: MATERIAL USED ────────────────────────────────────────── */}
        {usedModal && (
          <MaterialUsedModal />
        )}

        {/* ── MODAL: ADJUSTMENT / WASTAGE / RETURN / SCRAP ────────────────── */}
        {adjustmentModal && (
          <AdjustmentModal />
        )}

        {/* ── MODAL: OTHER EXPENSE ────────────────────────────────────────── */}
        {expenseModal && (
          <ExpenseModal />
        )}

        {/* ── MODAL: COMMISSION ────────────────────────────────────────── */}
        {commissionModal && (
          <CommissionModal />
        )}

        {/* ── MODAL: ASSIGN / EDIT STAFF MEMBER ─────────────────────────── */}
        {staffModal && (
          <StaffModal />
        )}

        {/* ── MODAL: RECORD STAFF PAYMENT ───────────────────────────────── */}
        {staffPaymentModal && (
          <StaffPaymentModal />
        )}

        {/* ── MODAL: PARTY PAYMENT ────────────────────────────────────────── */}
        {partyPaymentModal && (
          <PartyPaymentModal />
        )}

        {/* ── MODAL: SERVICE PROVIDER / VENDOR PAYMENT ───────────────────────── */}
        {vendorPaymentModal && (
          <VendorPaymentModal />
        )}
          </>
        )}
      </>
    </>
  );
}
