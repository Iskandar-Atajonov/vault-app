# Vault — Personal Finance Desktop App

A modern personal finance tracker built with Electron.

---

## Quick Start (Run the App)

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or newer (includes npm)

### Steps

1. **Extract** this zip anywhere on your PC (e.g. `C:\Vault`)
2. **Open a terminal** in that folder (right-click → "Open in Terminal")
3. **Install dependencies:**
   ```
   npm install
   ```
4. **Launch the app:**
   ```
   npm start
   ```

The Vault window will open — your data is saved locally on your PC automatically.

---

## Build a Standalone Executable (No Terminal Needed)

After running `npm install`, you can build a proper `.exe` / `.dmg` / `.AppImage`:

### Windows (.exe portable)
```
npm run build:win
```
Find your app in `dist/` — a single `.exe` file, no install needed.

### macOS (.dmg)
```
npm run build:mac
```

### Linux (.AppImage)
```
npm run build:linux
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| Ctrl+1 | Overview |
| Ctrl+2 | Add Transaction |
| Ctrl+3 | Savings Goals |
| Ctrl+4 | Budgets |
| Ctrl+5 | History |
| Ctrl+N | Notifications |
| Ctrl+R | Reload |
| F11 | Fullscreen |
| F12 | DevTools |

---

## Data Storage

All your financial data is stored locally in your browser's localStorage within the Electron app — nothing is sent to any server.

To back up your data, use the browser DevTools console and export `localStorage`.

---

## Tech Stack
- **Electron** — cross-platform desktop shell
- **Chart.js** — charts and graphs
- **Vanilla JS + HTML/CSS** — no framework dependencies
