const KEY = "bolt_diy_dev_session";

export function saveDevSession<T>(data: T) {
  if (import.meta.env.DEV) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }
}

export function loadDevSession<T>(): T | null {
  if (import.meta.env.DEV) {
    const stored = localStorage.getItem(KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as T;
      } catch {
        console.warn("Failed to parse dev session");
        return null;
      }
    }
  }
  return null;
}

export function clearDevSession() {
  if (import.meta.env.DEV) {
    localStorage.removeItem(KEY);
  }
}