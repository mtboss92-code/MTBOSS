import test from 'node:test';
import assert from 'node:assert/strict';
import { validateNewAdminPassword } from '../src/lib/admin-password.js';

test('accepts a compliant new password', () => {
  assert.deepEqual(validateNewAdminPassword('OldPass1!', 'NewPass2@', 'NewPass2@'), {});
});

test('rejects weak, reused, and mismatched passwords with field errors', () => {
  assert.equal(validateNewAdminPassword('OldPass1!', 'short', 'short').newPassword, 'New password must be at least 8 characters.');
  assert.equal(validateNewAdminPassword('OldPass1!', 'OldPass1!', 'OldPass1!').newPassword, 'New password must be different from the current password.');
  assert.equal(validateNewAdminPassword('OldPass1!', 'NewPass2@', 'different').confirmPassword, 'New passwords do not match.');
});

test('rejects blank and excessively long password values', () => {
  const blank = validateNewAdminPassword('', '', '');
  assert.equal(blank.currentPassword, 'Current password is required.');
  assert.equal(blank.newPassword, 'New password is required.');
  assert.ok(validateNewAdminPassword('OldPass1!', `${'A'.repeat(126)}a1!`, `${'A'.repeat(126)}a1!`).newPassword);
});
