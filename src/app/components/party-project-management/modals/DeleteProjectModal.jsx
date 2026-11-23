'use client';

import { usePm } from '../PmContext';
import pmStyles from '../pmStyles';

export default function DeleteProjectModal() {
  const {
    deleteProjectModal, setDeleteProjectModal, deletingProject, deleteProjectError,
    setDeleteProjectError, confirmDeleteProject,
  } = usePm();

  return (
    <>
      <style jsx>{pmStyles}</style>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(3px)',
          zIndex: 2500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
        }}
        onClick={() => {
          if (!deletingProject) {
            setDeleteProjectModal(null);
            setDeleteProjectError('');
          }
        }}
      >
        <div
          style={{
            background: '#ffffff',
            borderRadius: 14,
            padding: '24px',
            width: '100%',
            maxWidth: 480,
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.2)',
            border: '1px solid #fecaca',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: '#fee2e2',
                color: '#dc2626',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              !
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, color: '#991b1b', fontWeight: 700 }}>
                Delete Project
              </h3>
              <small style={{ color: '#64748b', fontSize: 13 }}>
                Party: <b>{deleteProjectModal.partyName}</b>
              </small>
            </div>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '12px 14px', marginBottom: 16 }}>
            <div style={{ fontSize: 14, color: '#334155' }}>
              Are you sure you want to delete project <strong style={{ color: '#0f172a' }}>{deleteProjectModal.name}</strong>?
            </div>
            <div style={{ fontSize: 12, color: '#64748b', marginTop: 6, lineHeight: 1.4 }}>
              This will permanently remove the project and its agent assignments. If this project was converted from a lead, the lead will be unlocked so it can be converted again.
            </div>
          </div>

          {deleteProjectError && (
            <div
              style={{
                background: '#fef2f2',
                border: '1px solid #f87171',
                borderRadius: 8,
                padding: '12px 14px',
                marginBottom: 16,
                color: '#991b1b',
                fontSize: 13,
                lineHeight: 1.5,
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Cannot Delete Project</div>
              {deleteProjectError}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
            <button
              type="button"
              className="muted"
              disabled={deletingProject}
              onClick={() => {
                setDeleteProjectModal(null);
                setDeleteProjectError('');
              }}
              style={{ padding: '8px 16px', borderRadius: 6 }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="danger"
              disabled={deletingProject}
              onClick={confirmDeleteProject}
              style={{
                padding: '8px 18px',
                borderRadius: 6,
                background: deletingProject ? '#94a3b8' : '#dc2626',
                color: '#ffffff',
                border: 'none',
                fontWeight: 600,
                cursor: deletingProject ? 'not-allowed' : 'pointer',
              }}
            >
              {deletingProject ? 'Deleting…' : 'Delete Project'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
