import css from 'styled-jsx/css';

// Scoped styles of PartyProjectManagement. styled-jsx only styles elements written in a component that
// renders this stylesheet, so the main component and every view split out of it include
// `<style jsx>{pmStyles}</style>`; they then share one scope class and one injected stylesheet.
export default css`
        .pm-container {
          padding: 16px;
          font-family: inherit;
          color: var(--text, #0f172a);
          background: var(--bg, transparent);
          min-height: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        :global(.dark-mode) .pm-container,
        .pm-container.dark-mode {
          color: #f0f0f5;
        }
        :global(.dark-mode) .pm-container .card,
        .pm-container.dark-mode .card,
        :global(.dark-mode) .pm-container .modal-card,
        .pm-container.dark-mode .modal-card,
        :global(.dark-mode) .pm-container table,
        :global(.dark) .pm-container table,
        .pm-container.dark-mode table {
          background: #18181c !important;
          border-color: #2a2a30 !important;
          color: #f0f0f5 !important;
        }
        :global(.dark-mode) .pm-container th,
        .pm-container.dark-mode th {
          background: #1e1e24;
          color: #a1a1aa;
          border-bottom-color: #2a2a30;
        }
        :global(.dark-mode) .pm-container td,
        .pm-container.dark-mode td {
          border-bottom-color: #232328;
          color: #f0f0f5;
        }
        :global(.dark-mode) .pm-container tr:hover td,
        .pm-container.dark-mode tr:hover td {
          background: #1e1e24;
        }
        .pm-container tr.clickable-row {
          cursor: pointer;
          transition: background-color 0.15s ease;
        }
        .pm-container tr.clickable-row:hover td {
          background-color: #f1f5f9 !important;
        }
        :global(.dark-mode) .pm-container tr.clickable-row:hover td,
        .pm-container.dark-mode tr.clickable-row:hover td {
          background-color: #27272a !important;
        }
        :global(.dark-mode) .pm-container .stat,
        .pm-container.dark-mode .stat {
          background: #18181c;
          border-color: #2a2a30;
        }
        :global(.dark-mode) .pm-container .stat b,
        .pm-container.dark-mode .stat b {
          color: #f0f0f5;
        }
        :global(.dark-mode) .pm-container .stat small,
        .pm-container.dark-mode .stat small {
          color: #a1a1aa;
        }
        :global(.dark-mode) .pm-container input,
        :global(.dark) .pm-container input,
        .pm-container.dark-mode input,
        :global(.dark-mode) .pm-container select,
        :global(.dark) .pm-container select,
        .pm-container.dark-mode select,
        :global(.dark-mode) .pm-container textarea,
        :global(.dark) .pm-container textarea,
        .pm-container.dark-mode textarea {
          background: #18181c !important;
          color: #f0f0f5 !important;
          border-color: #2a2a30 !important;
        }
        :global(.dark-mode) .pm-container button.muted,
        .pm-container.dark-mode button.muted {
          background: #27272a;
          color: #e4e4e7;
          border-color: #3f3f46;
        }
        :global(.dark-mode) .pm-container button.muted:hover,
        .pm-container.dark-mode button.muted:hover {
          background: #3f3f46;
        }
        :global(.dark-mode) .pm-container .subtabs,
        .pm-container.dark-mode .subtabs {
          border-bottom-color: #2a2a30;
        }
        :global(.dark-mode) .pm-container .subtabs button,
        .pm-container.dark-mode .subtabs button {
          background: #27272a;
          color: #e4e4e7;
          border-color: #3f3f46;
        }
        :global(.dark-mode) .pm-container .subtabs button:hover,
        .pm-container.dark-mode .subtabs button:hover {
          background: #3f3f46;
          color: #60a5fa;
          border-color: #52525b;
        }
        :global(.dark-mode) .pm-container .subtabs button.active,
        .pm-container.dark-mode .subtabs button.active {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
          box-shadow: 0 1px 3px rgba(37, 99, 235, 0.35);
        }
        .bar {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
        }
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 10px;
          margin-top: 14px;
        }
        .stat {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 10px 12px;
        }
        .stat small {
          display: block;
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .stat b {
          font-size: 16px;
          color: #0f172a;
        }
        .subtabs {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          border-bottom: 2px solid #e2e8f0;
          margin-bottom: 16px;
          padding-bottom: 10px;
        }
        .subtabs button {
          background: #f8fafc;
          color: #475569;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          padding: 8px 14px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0 !important;
          min-width: max-content !important;
          transition: all 0.15s ease;
        }
        .subtabs select {
          background: #f8fafc;
          color: #475569;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 10px 14px;
          min-height: 42px;
          font-weight: 700;
          font-size: 14px;
          transition: all 0.15s ease;
        }
        .subtabs select.active {
          color: #ffffff;
          background: #1e40af;
          border-color: #1e40af;
        }
        .subtabs button:hover {
          color: #1e40af;
          background: #f1f5f9;
          border-color: #93c5fd;
        }
        .subtabs button.active {
          color: #ffffff;
          background: #1e40af;
          border-color: #1e40af;
          font-weight: 700;
          box-shadow: 0 1px 3px rgba(30, 64, 175, 0.25);
        }
        table {
          width: 100%;
          border-collapse: collapse;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          font-size: 13px;
        }
        th {
          background: #f8fafc;
          color: #475569;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          text-align: left;
          padding: 10px 12px;
          border-bottom: 1px solid #e2e8f0;
        }
        td {
          padding: 10px 12px;
          border-bottom: 1px solid #f1f5f9;
          vertical-align: middle;
        }
        tr:hover td {
          background: #fafafa;
        }
        button {
          background: #2563eb;
          color: #ffffff;
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          transition: opacity 0.15s;
        }
        button:hover {
          opacity: 0.9;
        }
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        button.muted {
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #cbd5e1;
        }
        button.muted:hover {
          background: #e2e8f0;
        }
        button.danger {
          background: #fee2e2;
          color: #b91c1c;
          border: 1px solid #fca5a5;
        }
        button.danger:hover {
          background: #fecaca;
        }
        button.active-btn {
          background: #1e40af;
          color: #ffffff;
        }
        input, select, textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 7px 10px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 13px;
          color: #0f172a;
          background: #ffffff;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }
        .actions {
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .badge {
          display: inline-block;
          padding: 2px 7px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
        }
        .badge-active {
          background: #dbeafe;
          color: #1e40af;
        }
        .badge-completed {
          background: #dcfce7;
          color: #166534;
        }
        .badge-lowstock {
          background: #fef9c3;
          color: #854d0e;
          border: 1px solid #fef08a;
        }
        .badge-overused {
          background: #fee2e2;
          color: #991b1b;
          border: 1px solid #fca5a5;
        }
        .alert {
          background: #eff6ff;
          color: #1e40af;
          border: 1px solid #bfdbfe;
          padding: 10px 14px;
          border-radius: 6px;
          margin-bottom: 14px;
          font-size: 13px;
          font-weight: 600;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 16px;
        }
        .modal-card {
          background: #ffffff;
          padding: 22px;
          border-radius: 10px;
          width: 100%;
          maxWidth: 520px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
      `;
