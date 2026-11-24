/** Sole admin login email — previous IDs cannot open the admin panel. */
const SOLE_ADMIN_EMAIL = 'mtboss2016@gmail.com';

function cleanEnv(value) {
  return String(value || '').replace(/^\uFEFF/, '').trim().toLowerCase();
}

export function getPrimaryAdminEmail() {
  return SOLE_ADMIN_EMAIL;
}

/**
 * Only mtboss2016@gmail.com may open the admin panel.
 * Env ADMIN_EMAIL / aliases / legacy IDs are intentionally ignored for access.
 */
export function isAdminEmail(email) {
  const normalized = cleanEnv(email);
  if (!normalized) return false;
  return normalized === SOLE_ADMIN_EMAIL;
}
