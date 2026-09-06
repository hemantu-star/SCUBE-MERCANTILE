import { cookies } from "next/headers";

const COOKIE = "scube_admin";

export function adminPassword() {
  return process.env.ADMIN_PASSWORD || "scube-admin";
}

export async function sessionToken() {
  const secret = process.env.ADMIN_SECRET || "dev-scube-admin-secret";
  const bytes = new TextEncoder().encode(`scube-admin|${secret}`);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash), (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function isAdminToken(token?: string | null) {
  if (!token) return false;
  return token === (await sessionToken());
}

export async function isAdminRequest() {
  const jar = await cookies();
  return isAdminToken(jar.get(COOKIE)?.value);
}

export async function requireAdmin() {
  if (!(await isAdminRequest())) {
    throw new Error("Unauthorized");
  }
}

export { COOKIE };
