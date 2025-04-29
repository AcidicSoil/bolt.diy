import { useState, useEffect } from "react";
import { loadDevSession, clearDevSession } from "~/utils/devPersistence";
import { loadElectronSession, clearElectronSession } from "~/utils/devElectronStore";

type DevSession = {
  activeModel: string;
  chatHistory: Array<{ role: string; content: string }>;
};

export default function DevSessionInspector() {
  const [localSession, setLocalSession] = useState<DevSession | null>(null);
  const [electronSession, setElectronSession] = useState<DevSession | null>(null);

  useEffect(() => {
    setLocalSession(loadDevSession<DevSession>());
    setElectronSession(loadElectronSession<DevSession>());
  }, []);

  const handleClear = () => {
    clearDevSession();
    clearElectronSession();
    setLocalSession(null);
    setElectronSession(null);
  };

  if (import.meta.env.PROD) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: "10px",
      right: "10px",
      background: "rgba(0,0,0,0.8)",
      color: "white",
      padding: "1rem",
      borderRadius: "0.5rem",
      fontSize: "0.8rem",
      maxWidth: "300px",
      zIndex: 9999,
    }}>
      <h3 style={{ marginBottom: "0.5rem" }}>🛠 Dev Session Inspector</h3>
      <div style={{ marginBottom: "0.5rem" }}>
        <b>LocalStorage Session:</b>
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {JSON.stringify(localSession, null, 2)}
        </pre>
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <b>Electron-Store Session:</b>
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          {JSON.stringify(electronSession, null, 2)}
        </pre>
      </div>
      <button onClick={handleClear} style={{
        backgroundColor: "red",
        color: "white",
        padding: "0.5rem",
        borderRadius: "0.25rem",
        border: "none",
        cursor: "pointer",
        width: "100%",
      }}>
        Clear Sessions
      </button>
    </div>
  );
}