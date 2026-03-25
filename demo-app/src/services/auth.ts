/**
 * Session and token handling for user authentication.
 * Uses OAuth2-style flow with localStorage for demo purposes.
 * In production, use httpOnly cookies and secure token refresh.
 */

const SESSION_KEY = 'app_session';
const TOKEN_KEY = 'app_access_token';

export interface Session {
  userId: string;
  email: string;
  expiresAt: number;
}

export function getSession(): Session | null {
  const raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    const session = JSON.parse(raw) as Session;
    if (session.expiresAt < Date.now()) {
      clearSession();
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function setSession(session: Session): void {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(TOKEN_KEY);
}

export function getAccessToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setAccessToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}
