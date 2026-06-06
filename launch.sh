#!/bin/bash
echo "Starting Vault Finance App..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed."
    echo "Please download it from https://nodejs.org and try again."
    exit 1
fi
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies for the first time..."
    npm install
fi
npm start
