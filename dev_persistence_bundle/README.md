# ⚡ Bolt.diy Dev Persistence + Inspector Bundle

## Overview
This bundle gives you persistent, crash-proof development experience during `npm run dev`:

- ✅ LocalStorage session save/load (for frontend hot reloads)
- ✅ ElectronStore session save/load (for app crashes/restarts)
- ✅ Dev Session Inspector UI (view, reset sessions)
- ✅ Optional future extension for live editing sessions

---

## Files

| File | Purpose |
|:-----|:--------|
| `utils/devPersistence.ts` | Handles LocalStorage save/load |
| `utils/devElectronStore.ts` | Handles ElectronStore save/load |
| `components/DevSessionInspector.tsx` | Visual Inspector Panel for sessions |

---

## Installation

1. Add `devPersistence.ts` and `devElectronStore.ts` under `/utils`
2. Add `DevSessionInspector.tsx` under `/components`
3. Import `DevSessionInspector` inside your `App.tsx` or `root.tsx`:

```tsx
{import.meta.env.DEV && <DevSessionInspector />}
```

4. Done! 🚀

---

## Notes
- This persistence only activates under `import.meta.env.DEV`
- No pollution in production builds (`npm run build`)
- Fully compatible with Remix/Vite/Electron hot reloads

---

Enjoy developing with full memory recovery and debug visibility! 🎯