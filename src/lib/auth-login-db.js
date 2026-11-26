import { isTransientConnectionError, queryRaw, queryReadWithRetry } from '@/lib/db';
import { createInitializationGuard } from '@/lib/api-utils';

/**
 * Login reads go through the shared singleton pool.
 * Writes (last_login touch) are fire-and-forget and must never reject unhandled.
 */

export const AUTH_LOGIN_ATTEMPTS = 3;

// Keeps deployments safe when application code reaches a server before the
// additive migration has been run. The migration remains the normal path.
export const ensureAuthVersionSchema = createInitializationGuard(async () => {
  await queryRaw('ALTER TABLE users ADD COLUMN IF NOT EXISTS auth_version INTEGER NOT NULL DEFAULT 0');
}, 24 * 60 * 60 * 1000, 'auth-version-schema');

export async function authLoginQuery(text, params = []) {
  return queryReadWithRetry(text, params, { maxAttempts: AUTH_LOGIN_ATTEMPTS });
}

export async function softAuthLoginQuery(text, params = []) {
  try {
    return await authLoginQuery(text, params);
  } catch {
    return { rows: [] };
  }
}

export function touchUserLastLogin(userId) {
  queryRaw('UPDATE users SET last_login_at = NOW() WHERE id = $1', [userId]).catch((error) => {
    if (!isTransientConnectionError(error)) {
      console.warn('[auth-login] last_login update failed:', error?.message);
    }
  });
}

export function touchAgentLastLogin(agentId) {
  queryRaw('UPDATE agents SET last_login_at = NOW() WHERE id = $1', [agentId]).catch((error) => {
    if (!isTransientConnectionError(error)) {
      console.warn('[auth-login] agent last_login update failed:', error?.message);
    }
  });
}
