import Store from "electron-store";

const KEY = "bolt_diy_dev_electron_session";
const store = new Store();

export function saveElectronSession<T>(data: T) {
  if (import.meta.env.DEV) {
    store.set(KEY, data);
  }
}

export function loadElectronSession<T>(): T | null {
  if (import.meta.env.DEV) {
    const stored = store.get(KEY);
    return stored ? (stored as T) : null;
  }
  return null;
}

export function clearElectronSession() {
  if (import.meta.env.DEV) {
    store.delete(KEY);
  }
}