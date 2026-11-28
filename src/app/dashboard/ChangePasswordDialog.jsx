"use client";

import { useState } from 'react';
import { clearAllWebSessions } from '@/lib/client-session';

const EMPTY_FORM = { currentPassword: '', newPassword: '', confirmPassword: '' };

export default function ChangePasswordDialog({ open, onClose, router }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [visible, setVisible] = useState({});

  if (!open) return null;
  const setValue = (key, value) => {
    setForm((old) => ({ ...old, [key]: value }));
    setErrors((old) => ({ ...old, [key]: undefined }));
    setMessage('');
  };
  const validate = () => {
    const next = {};
    if (!form.currentPassword) next.currentPassword = 'Current password is required.';
    if (!form.newPassword) next.newPassword = 'New password is required.';
    else if (form.newPassword.length < 8) next.newPassword = 'New password must be at least 8 characters.';
    else if (!/[A-Z]/.test(form.newPassword) || !/[a-z]/.test(form.newPassword) || !/\d/.test(form.newPassword) || !/[^A-Za-z0-9\s]/.test(form.newPassword)) next.newPassword = 'Use uppercase, lowercase, number, and special character.';
    else if (form.newPassword === form.currentPassword) next.newPassword = 'New password must be different from the current password.';
    if (!form.confirmPassword) next.confirmPassword = 'Please confirm your new password.';
    else if (form.newPassword !== form.confirmPassword) next.confirmPassword = 'New passwords do not match.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const submit = async (event) => {
    event.preventDefault();
    if (submitting || !validate()) return;
    const token = localStorage.getItem('admin-token') || localStorage.getItem('token');
    if (!token) { setMessage('Your session has expired. Please sign in again.'); return; }
    setSubmitting(true);
    try {
      const response = await fetch('/api/admin/change-password', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setErrors(data.errors || {});
        setMessage(data.error || 'Unable to change password.');
        return;
      }
      setForm(EMPTY_FORM);
      setMessage(data.message || 'Password changed successfully.');
      // Password changes require a new session. Give the success message a brief chance to render.
      window.setTimeout(async () => {
        clearAllWebSessions();
        await fetch('/api/auth/logout', { method: 'POST' }).catch(() => {});
        router.replace('/login');
      }, 700);
    } catch {
      setMessage('Unable to change password. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="change-password-title">
      <form onSubmit={submit} className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl dark:bg-slate-900">
        <div className="mb-5 flex items-start justify-between gap-3"><div><h2 id="change-password-title" className="text-lg font-bold text-slate-900 dark:text-white">Change Password</h2><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">You will be signed out on all devices.</p></div><button type="button" onClick={onClose} disabled={submitting} className="text-slate-500 hover:text-slate-900 dark:hover:text-white" aria-label="Close">✕</button></div>
        {['currentPassword', 'newPassword', 'confirmPassword'].map((field) => <div key={field} className="mb-4"><label htmlFor={field} className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-200">{field === 'currentPassword' ? 'Current Password' : field === 'newPassword' ? 'New Password' : 'Confirm New Password'}</label><div className="flex"><input id={field} type={visible[field] ? 'text' : 'password'} autoComplete={field === 'currentPassword' ? 'current-password' : 'new-password'} value={form[field]} onChange={(e) => setValue(field, e.target.value)} maxLength={128} disabled={submitting} className="min-w-0 flex-1 rounded-l-md border border-slate-300 px-3 py-2 text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-white" aria-invalid={Boolean(errors[field])} /><button type="button" onClick={() => setVisible((old) => ({ ...old, [field]: !old[field] }))} className="rounded-r-md border border-l-0 border-slate-300 px-3 text-sm font-medium text-slate-600 dark:border-slate-600 dark:text-slate-200">{visible[field] ? 'Hide' : 'Show'}</button></div>{errors[field] && <p className="mt-1 text-sm text-red-600">{errors[field]}</p>}</div>)}
        {message && <p className={`mb-4 text-sm ${message.includes('successfully') ? 'text-green-700' : 'text-red-600'}`} role="status">{message}</p>}
        <button type="submit" disabled={submitting} className="w-full rounded-md bg-blue-700 px-4 py-2.5 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60">{submitting ? 'Changing Password…' : 'Change Password'}</button>
      </form>
    </div>
  );
}
