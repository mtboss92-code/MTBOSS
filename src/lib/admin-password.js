const MAX_PASSWORD_LENGTH = 128;

export function validateNewAdminPassword(currentPassword, newPassword, confirmPassword) {
  const errors = {};
  if (typeof currentPassword !== 'string' || currentPassword.length === 0 || currentPassword.length > MAX_PASSWORD_LENGTH) {
    errors.currentPassword = 'Current password is required.';
  }
  if (typeof newPassword !== 'string' || newPassword.length === 0) {
    errors.newPassword = 'New password is required.';
  } else if (newPassword.length > MAX_PASSWORD_LENGTH) {
    errors.newPassword = `New password must not exceed ${MAX_PASSWORD_LENGTH} characters.`;
  } else if (newPassword.length < 8) {
    errors.newPassword = 'New password must be at least 8 characters.';
  } else if (!/[A-Z]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/\d/.test(newPassword) || !/[^A-Za-z0-9\s]/.test(newPassword)) {
    errors.newPassword = 'New password must include uppercase, lowercase, number, and special character.';
  } else if (typeof currentPassword === 'string' && newPassword === currentPassword) {
    errors.newPassword = 'New password must be different from the current password.';
  }
  if (typeof confirmPassword !== 'string' || confirmPassword.length === 0) {
    errors.confirmPassword = 'Please confirm your new password.';
  } else if (newPassword !== confirmPassword) {
    errors.confirmPassword = 'New passwords do not match.';
  }
  return errors;
}

export const ADMIN_PASSWORD_MAX_LENGTH = MAX_PASSWORD_LENGTH;
