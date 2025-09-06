# Install Node.js and npm - Quick Guide

## Step 1: Download Node.js
1. Go to https://nodejs.org/
2. Click "Download for Windows" (LTS version recommended)
3. Run the downloaded installer (.msi file)

## Step 2: Installation Process
1. Follow the installation wizard
2. Accept the license agreement
3. Choose installation location (default is fine)
4. **Important:** Make sure "Add to PATH" is checked
5. Click "Install"

## Step 3: Verify Installation
Open a new PowerShell window and run:
```bash
node --version
npm --version
```

## Step 4: Build Your Project
Once installed, navigate to your project and run:
```bash
cd C:\Users\Hp\Desktop\project
npm run build
```

This will create a `dist` folder with your production files ready for upload to shared hosting.

## Alternative: Use Chocolatey (Advanced)
If you have Chocolatey package manager:
```bash
choco install nodejs
```

## Troubleshooting
- If commands don't work, restart PowerShell
- If PATH issues persist, restart your computer
- Ensure you're using a new terminal window after installation
