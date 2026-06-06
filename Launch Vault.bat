@echo off
echo Starting Vault Finance App...
where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed.
    echo Please download it from https://nodejs.org and try again.
    pause
    exit /b 1
)
if not exist "node_modules" (
    echo Installing dependencies for the first time...
    npm install
)
npm start
