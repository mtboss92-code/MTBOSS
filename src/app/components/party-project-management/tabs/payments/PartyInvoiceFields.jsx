'use client';

import { useEffect } from 'react';
import { usePm } from '../../PmContext';
import { Input } from '../../shared';

function makeInvoiceNumber() {
  const token = (globalThis.crypto?.randomUUID?.() || `${Date.now()}${Math.random()}`).replace(/-/g, '').slice(0, 10).toUpperCase();
  return `INV-${new Date().getFullYear()}-${token}`;
}

const INVOICE_FIELDS = [
  ['invoice_date', 'Invoice Date', 'date'],
  ['order_id', 'Order ID'],
  ['place_of_supply', 'Place of Supply'],
  ['reverse_charge', 'Reverse Charge (Yes/No)'],
  ['dispatch_date', 'Dispatch Date', 'date'],
  ['due_date', 'Due Date', 'date'],
  ['legal_name', 'Legal Business Name'],
];
const BILL_FIELDS = [
  ['billing_name', 'Customer Name'],
  ['billing_address', 'Billing Address'],
  ['billing_state', 'State / Code'],
  ['billing_gstin', 'GSTIN'],
  ['billing_contact', 'Mobile / Email'],
];
const SHIP_FIELDS = [
  ['shipping_name', 'Recipient Name'],
  ['shipping_address', 'Delivery Address'],
  ['shipping_state', 'State / Code'],
  ['shipping_contact', 'Contact Number'],
];
const ITEM_FIELDS = [
  ['item_description', 'Item / Material'],
  ['hsn', 'HSN / SAC'],
  ['qty', 'Qty'],
  ['unit', 'Unit'],
  ['rate', 'Rate'],
  ['discount', 'Discount'],
  ['gst_percent', 'GST %'],
  ['gst_type', 'GST Type (intra or inter)'],
];
const TOTAL_FIELDS = [
  ['taxable_amount', 'Taxable Amount'],
  ['cgst_amount', 'CGST'],
  ['sgst_amount', 'SGST'],
  ['igst_amount', 'IGST'],
  ['grand_total', 'Invoice Grand Total'],
  ['amount_in_words', 'Amount in Words'],
];

const fieldGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: 12,
  alignItems: 'end',
};
const sectionTitle = { gridColumn: '1 / -1', margin: '4px 0 0', fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#64748b' };

function setDetail(setPartyPaymentForm, name, value) {
  setPartyPaymentForm((form) => ({ ...form, invoice_details: { ...(form.invoice_details || {}), [name]: value } }));
}

export default function PartyInvoiceFields() {
  const { partyPayments, partyPaymentForm, setPartyPaymentForm, editingPartyPaymentId } = usePm();
  const details = partyPaymentForm.invoice_details || {};
  useEffect(() => {
    if (editingPartyPaymentId || details.linked_payment_id || String(details.invoice_number || '').trim()) return;
    setPartyPaymentForm((form) => {
      if (form.invoice_details?.invoice_number || form.invoice_details?.linked_payment_id) return form;
      return { ...form, invoice_details: { ...(form.invoice_details || {}), invoice_number: makeInvoiceNumber() } };
    });
  }, [details.invoice_number, details.linked_payment_id, editingPartyPaymentId, setPartyPaymentForm]);
  const savedInvoices = (partyPayments || []).filter((payment) => payment.invoice_details && (payment.invoice_details.invoice_number || payment.invoice_details.item_description || payment.invoice_details.grand_total));
  const extraItems = Array.isArray(details.items) ? details.items : [];

  const setInvoice = (updater) => setPartyPaymentForm((form) => {
    const next = typeof updater === 'function' ? updater({ ...(form.invoice_details || {}) }) : updater;
    return { ...form, invoice_details: next };
  });
  const renderFields = (fields) => fields.map(([name, label, type]) => (
    <Input key={name} label={label} name={name} type={type || 'text'} value={details[name] || ''} set={setInvoice} />
  ));

  return (
    <div className="invoice-fields" style={{ gridColumn: '1 / -1', marginTop: 4, padding: 14, border: '1px solid #e2e8f0', borderRadius: 10, background: '#f8fafc' }}>
      <style jsx>{`
        .invoice-fields :global(input),
        .invoice-fields :global(select),
        .invoice-fields :global(textarea) {
          width: 100%;
          box-sizing: border-box;
          padding: 7px 10px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 13px;
          color: #0f172a;
          background: #ffffff;
        }
        .invoice-fields :global(label) { display: block; min-width: 0; }
      `}</style>
      <h5 style={{ margin: '0 0 12px', fontSize: 14, color: '#0f172a' }}>Tax invoice fields</h5>
      <div style={fieldGrid}>
        <label style={{ gridColumn: '1 / -1' }}>
          <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Link a saved invoice</small>
          <select
            value={details.linked_payment_id || ''}
            onChange={(event) => {
              const payment = savedInvoices.find((item) => String(item.id) === event.target.value);
              if (!payment) {
                setPartyPaymentForm((form) => ({ ...form, invoice_details: { ...(form.invoice_details || {}), linked_payment_id: '', invoice_number: makeInvoiceNumber() } }));
                return;
              }
              setPartyPaymentForm((form) => ({
                ...form,
                invoice_details: { ...(payment.invoice_details || {}), linked_payment_id: String(payment.id) },
              }));
            }}
          >
            <option value="">New invoice — fill the fields below</option>
            {savedInvoices.map((payment) => (
              <option key={payment.id} value={payment.id}>
                {(payment.invoice_details?.invoice_number || `Payment ${payment.id}`)} · grand total {payment.invoice_details?.grand_total || 'from items'}
              </option>
            ))}
          </select>
        </label>
        <div style={sectionTitle}>Invoice</div>
        <label>
          <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Invoice No.</small>
          <input readOnly value={details.invoice_number || ''} />
        </label>
        {renderFields(INVOICE_FIELDS)}
        <div style={sectionTitle}>Bill To</div>
        {renderFields(BILL_FIELDS)}
        <div style={sectionTitle}>Ship To</div>
        {renderFields(SHIP_FIELDS)}
        <div style={sectionTitle}>Item</div>
        {renderFields(ITEM_FIELDS)}
        {extraItems.map((item, index) => (
          <div key={index} style={{ ...fieldGrid, gridColumn: '1 / -1', padding: 10, border: '1px solid #e2e8f0', borderRadius: 8, background: '#fff' }}>
            {[['description', 'Item / Material'], ['hsn', 'HSN / SAC'], ['qty', 'Qty'], ['unit', 'Unit'], ['rate', 'Rate'], ['discount', 'Discount'], ['gst_percent', 'GST %']].map(([name, label]) => (
              <Input key={name} label={`${label} ${index + 2}`} name={name} value={item[name] || ''} set={(updater) => setPartyPaymentForm((form) => {
                const items = [...(form.invoice_details?.items || [])];
                const current = { ...(items[index] || {}) };
                const next = typeof updater === 'function' ? updater(current) : updater;
                items[index] = next;
                return { ...form, invoice_details: { ...(form.invoice_details || {}), items } };
              })} />
            ))}
            <button type="button" className="muted" style={{ alignSelf: 'end', height: 34 }} onClick={() => setPartyPaymentForm((form) => ({ ...form, invoice_details: { ...(form.invoice_details || {}), items: (form.invoice_details?.items || []).filter((_, itemIndex) => itemIndex !== index) } }))}>Remove item</button>
          </div>
        ))}
        <div style={{ gridColumn: '1 / -1' }}>
          <button type="button" className="muted" onClick={() => setDetail(setPartyPaymentForm, 'items', [...extraItems, { description: '', hsn: '', qty: '', unit: '', rate: '', discount: '', gst_percent: '' }])}>Add item row</button>
        </div>
        <div style={sectionTitle}>Totals</div>
        {renderFields(TOTAL_FIELDS)}
        <label style={{ gridColumn: '1 / -1' }}>
          <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Terms &amp; Conditions</small>
          <textarea rows={3} value={details.terms || ''} onChange={(event) => setDetail(setPartyPaymentForm, 'terms', event.target.value)} style={{ width: '100%', boxSizing: 'border-box', resize: 'vertical' }} />
        </label>
        <p style={{ gridColumn: '1 / -1', margin: 0, color: '#64748b', fontSize: 12 }}>
          Fill these before saving. The email attaches one Word invoice, MTBOSS_Tax_Invoice_&lt;Invoice No.&gt;.docx, using this invoice number and grand total. The email text shows the payment amount, which can be a partial payment.
        </p>
      </div>
    </div>
  );
}

export function ClientEmailField() {
  const { partyPaymentForm, setPartyPaymentForm } = usePm();
  return (
    <label>
      <small style={{ display: 'block', marginBottom: 4, fontWeight: 600, color: '#475569' }}>Client Email (optional)</small>
      <input
        type="email"
        aria-invalid={partyPaymentForm.client_email_error ? 'true' : undefined}
        value={partyPaymentForm.client_email || ''}
        onChange={(event) => setPartyPaymentForm((form) => ({ ...form, client_email: event.target.value, client_email_error: '' }))}
        placeholder="client@example.com"
        style={partyPaymentForm.client_email_error ? { borderColor: '#dc2626' } : undefined}
      />
      {partyPaymentForm.client_email_error
        ? <small role="alert" style={{ display: 'block', marginTop: 4, color: '#b91c1c' }}>{partyPaymentForm.client_email_error}</small>
        : <small style={{ display: 'block', marginTop: 4, color: '#64748b' }}>Leave blank to save without sending. A valid email receives the payment message with no Word file.</small>}
    </label>
  );
}
