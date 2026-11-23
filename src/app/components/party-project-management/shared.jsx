'use client';

import React, { useId, useState } from 'react';
import RequiredAsterisk from '../shared/RequiredAsterisk';

export function today() {
  try {
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date());
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

export function INR(val) {
  const n = Number(val);
  if (!Number.isFinite(n)) return '₹0';
  return '₹' + n.toLocaleString('en-IN', { maximumFractionDigits: 2 });
}

export function Input({ label, name, type = 'text', value, set, required, placeholder, min, step, list, maxLength, onChange }) {
  const inputId = useId();
  return (
    <label htmlFor={inputId}>
      <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
        {label} {required && <RequiredAsterisk />}
      </small>
      <input
        id={inputId}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        min={min}
        step={step}
        list={list}
        maxLength={maxLength}
        value={value ?? ''}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          } else if (set) {
            set((prev) => ({ ...prev, [name]: e.target.value }));
          }
        }}
      />
    </label>
  );
}

export const COMMON_MATERIAL_UNITS = [
  { value: 'bags', label: 'Bags (बोरी)' },
  { value: 'kg', label: 'Kg (किलो)' },
  { value: 'tonne', label: 'Tonne (टन)' },
  { value: 'pcs', label: 'Pcs (नग)' },
  { value: 'cft', label: 'CFT (घन फुट)' },
  { value: 'brass', label: 'Brass (ब्रास)' },
  { value: 'litre', label: 'Litre (लीटर)' },
  { value: 'meter', label: 'Meter (मीटर)' },
];

export function getDefaultUnitForMaterial(name = '') {
  const s = String(name || '').toLowerCase().trim();
  if (!s) return 'bags';
  if (/(cement|putty|adhesive|gypsum|boc|birla|ambuja|ultratech|shree|acc|jk)/.test(s)) return 'bags';
  if (/(sariya|steel|rebar|tmt|loha|iron|wire|nail|binding\s*wire)/.test(s)) return 'kg';
  if (/(brick|brik|eent|int|block|aac|paver|door|window|pipe|fitting|tile|marble|granite|plywood|sheet|glass|board)/.test(s)) return 'pcs';
  if (/(sand|reet|ret|balu|badarpur|gitti|grit|aggregate|dust|morrum|soil|mitti)/.test(s)) return 'cft';
  if (/(paint|primer|distemper|enamel|chemical|thinner|waterproof|dr\s*fixit)/.test(s)) return 'litre';
  return 'bags';
}

export function UnitSelector({ label = 'Unit / इकाई', value = 'bags', onChange, required = false }) {
  const curVal = (value || '').toLowerCase().trim();
  const isKnown = COMMON_MATERIAL_UNITS.some((u) => u.value === curVal);
  const [customActive, setCustomActive] = useState(() => Boolean(curVal && !isKnown));

  return (
    <label>
      <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>
        {label} {required && <RequiredAsterisk />}
      </small>
      {!customActive ? (
        <select
          value={isKnown ? curVal : (curVal ? '__custom__' : 'bags')}
          onChange={(e) => {
            if (e.target.value === '__custom__') {
              setCustomActive(true);
            } else {
              onChange?.(e.target.value);
            }
          }}
          required={required}
        >
          {COMMON_MATERIAL_UNITS.map((u) => (
            <option key={u.value} value={u.value}>
              {u.label}
            </option>
          ))}
          <option value="__custom__">+ Other (Type Custom Unit)</option>
        </select>
      ) : (
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <input
            type="text"
            autoFocus
            value={value ?? ''}
            placeholder="e.g. bundle, roll, drum"
            onChange={(e) => onChange?.(e.target.value)}
            required={required}
            style={{ flex: 1 }}
          />
          <button
            type="button"
            className="muted"
            onClick={() => {
              setCustomActive(false);
              onChange?.('bags');
            }}
            style={{ padding: '6px 10px', fontSize: '11px', whiteSpace: 'nowrap' }}
            title="Back to dropdown"
          >
            ← List
          </button>
        </div>
      )}
    </label>
  );
}

export function computeVendorWage(workersCount, ratePerWorker, status, shiftType = 'day', overtimeHours = 0) {
  const workers = Number(workersCount || 1);
  const rate = Number(ratePerWorker || 0);
  const ot = Math.max(0, Number(overtimeHours || 0));
  const hourlyRate = rate > 0 ? (rate / 8) : 0;
  const otAmount = Math.round(workers * ot * hourlyRate * 100) / 100;

  if (status === 'absent' || !status) return 0;
  let base = workers * rate;
  if (shiftType === 'double') base = workers * rate * 2;
  else if (status === 'half_day') base = Math.round(workers * rate * 0.5 * 100) / 100;

  return Math.round((base + otAmount) * 100) / 100;
}

export function computeLaborWage(dailyRate, status, shiftType = 'day', overtimeHours = 0) {
  const rate = Number(dailyRate || 0);
  const ot = Math.max(0, Number(overtimeHours || 0));
  const hourlyRate = rate > 0 ? (rate / 8) : 0;
  const otAmount = Math.round(ot * hourlyRate * 100) / 100;

  if (status === 'absent' || !status) return 0;
  let base = rate;
  if (shiftType === 'double') base = rate * 2;
  else if (status === 'half_day') base = Math.round(rate * 0.5 * 100) / 100;

  return Math.round((base + otAmount) * 100) / 100;
}

export const partyBlank = { name: '', phone: '', email: '', gst_no: '', address: '' };
export const projectBlank = {
  name: '',
  party_id: '',
  site_address: '',
  start_date: today(),
  expected_end_date: '',
  contract_value: '',
  built_up_area: '',
  status: 'running',
  project_type: '',
  floors: '',
  quality_tier: '',
  city: '',
  foundation_type: '',
  include_in_benchmark: false,
};

export const materialBlank = { name: '', unit: 'bags', category: 'Civil', min_stock_level: 0, is_active: true };
export const receivedBlank = { material_id: '', material_name: '', unit: 'bags', supplier_id: '', quantity: '', rate: '', received_date: today(), supplier_name: '', challan_no: '', note: '', bill_url: '', bill_filename: '', vehicle_no: '', driver_name: '', driver_phone: '', received_by: '' };
export const staffBlank = { name: '', phone: '', role: 'Site Supervisor', pay_type: 'monthly', salary_rate: '', commission_rate: '', commission_notes: '', is_active: true };
export const staffRolesList = [
  'Site Supervisor',
  'Site Engineer',
  'Project Manager',
  'Store Keeper / Incharge',
  'Accountant',
  'HR',
  'Quality Surveyor',
  'Safety Officer',
  'Driver / Logistics',
  'Field Officer',
  'Designer',
  'Cleaning Staff',
  'Office Staff',
  'Forman',
  'Other',
];
export const contractorTrades = ['General Vendor', 'Civil Contractor', 'Plumber / Plumbing', 'Electrician', 'Mason', 'Carpenter', 'Painter', 'Fabricator', 'Tile / Flooring', 'Waterproofing', 'HVAC', 'Other'];

export const matchesContractorType = (trade, filter) => {
  if (!filter || filter === 'all') return true;
  const f = String(filter).toLowerCase().trim();
  const v = String(trade || '').toLowerCase().trim();
  if (!v) return f === 'all' || f === 'general vendor' || f === 'other';
  if (f.includes('civil')) return v.includes('civil');
  if (f.includes('plumb')) return v.includes('plumb');
  if (f.includes('elect')) return v.includes('elect');
  if (f.includes('mason')) return v.includes('mason');
  if (f.includes('carpent')) return v.includes('carpent');
  if (f.includes('paint')) return v.includes('paint');
  if (f.includes('fabricat')) return v.includes('fabricat');
  if (f.includes('tile') || f.includes('floor')) return v.includes('tile') || v.includes('floor');
  if (f.includes('waterproof')) return v.includes('waterproof');
  if (f.includes('hvac')) return v.includes('hvac');
  if (f === 'general vendor' || f === 'general') return v.includes('general') || v.includes('vendor');
  return v.includes(f) || f.includes(v);
};

export const usedBlank = { material_id: '', material_name: '', unit: 'bags', quantity: '', used_date: today(), used_for: '', note: '' };
export const adjustmentBlank = { material_id: '', material_name: '', unit: 'bags', adjustment_type: 'wastage', quantity: '', adjustment_date: today(), to_project_id: '', supplier_id: '', supplier_name: '', amount: '', note: '', bill_url: '', bill_filename: '' };
export const expenseBlank = { category: 'transport', item_name: '', amount: '', expense_date: today(), note: '' };
export const commissionBlank = { commission_date: today(), person_name: '', amount: '', note: '' };

export function parseExpenseItem(row) {
  if (!row) return { category: '', item_name: '', note: '' };
  let category = row.category || '';
  let rawNote = String(row.display_note || row.note || '').trim();

  const catMatch = rawNote.match(/^\[Category:\s*([^\]]+)\](?:\s*([\s\S]*))?$/);
  if (catMatch) {
    category = catMatch[1].trim();
    rawNote = (catMatch[2] || '').trim();
  }

  let item_name = row.item_name ? String(row.item_name).trim() : '';
  if (!item_name && rawNote) {
    const match = rawNote.match(/^\[Item:\s*([^\]]+)\](?:\s*([\s\S]*))?$/);
    if (match) {
      item_name = match[1].trim();
      rawNote = (match[2] || '').trim();
    }
  }
  return { category, item_name, note: rawNote };
}

export function packExpenseNote(itemName, noteText) {
  const cleanItem = String(itemName || '').trim();
  const cleanNote = String(noteText || '').trim();
  if (!cleanItem) return cleanNote;
  return cleanNote ? `[Item: ${cleanItem}] ${cleanNote}` : `[Item: ${cleanItem}]`;
}

export function formatDateIST(dateVal) {
  if (!dateVal) return '—';
  if (typeof dateVal === 'string') {
    const trimmed = dateVal.trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
      return trimmed;
    }
    if (trimmed.includes('T')) {
      try {
        return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date(trimmed));
      } catch {
        return trimmed.slice(0, 10);
      }
    }
    return trimmed.slice(0, 10);
  }
  if (dateVal instanceof Date) {
    try {
      return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(dateVal);
    } catch {
      return dateVal.toISOString().slice(0, 10);
    }
  }
  return String(dateVal).slice(0, 10);
}

export function isEditableWithin48Hours(dateOrTimestamp) {
  if (!dateOrTimestamp) return false;
  try {
    const str = String(dateOrTimestamp).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
      const todayStr = today();
      const targetDate = new Date(`${str}T00:00:00+05:30`);
      const todayDate = new Date(`${todayStr}T00:00:00+05:30`);
      const diffMs = todayDate.getTime() - targetDate.getTime();
      const diffDays = Math.round(diffMs / (24 * 60 * 60 * 1000));
      return diffDays >= 0 && diffDays <= 2;
    }
    const targetTime = new Date(dateOrTimestamp).getTime();
    if (Number.isNaN(targetTime)) return false;
    const diffHours = (Date.now() - targetTime) / (1000 * 60 * 60);
    return diffHours >= -1 && diffHours <= 48;
  } catch {
    return false;
  }
}

export function isSameDayIST(dateOrTimestamp) {
  return isEditableWithin48Hours(dateOrTimestamp);
}
