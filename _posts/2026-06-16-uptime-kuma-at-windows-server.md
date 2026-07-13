---
layout: post
title: "Uptime Monitoring"
date: 2026-06-10
categories: tutorials
author: KM
tags: [life,poem] # TAG names should always be lowercase
---
Since we established that Docker and WSL 2 are off the table due to your server's lack of nested virtualization, you cannot use the standard Docker installation method for Uptime Kuma.

Fortunately, Uptime Kuma is fundamentally a **Node.js application**. This means it can run entirely natively on Windows Server without needing virtualization, containers, or WSL.

Here is how to install and run Uptime Kuma directly on your Windows VPS.

### **Phase 1: Install Prerequisites**

You need two pieces of software installed on your Windows Server first:

1. **Node.js:** Download and install the standard Windows installer (.msi) from the [official Node.js website](https://nodejs.org/). (The "LTS" version is recommended). Ensure the box to "Add to PATH" is checked during installation.
2. **Git for Windows:** Download and install it from the [official Git website](https://git-scm.com/download/win). Keep all default settings during the installation.

*Note: After installing these, close any open PowerShell windows and open a fresh **PowerShell (Admin)** window so it registers the new commands.*

### **Phase 2: Download and Setup Uptime Kuma**

With your fresh PowerShell window open, run the following commands sequentially:

**1. Clone the Uptime Kuma repository:**

```powershell
git clone https://github.com/louislam/uptime-kuma.git

```

**2. Navigate into the downloaded folder:**

```powershell
cd uptime-kuma

```

**3. Run the setup script:**
*(This will download all necessary dependencies and build the application. It may take a few minutes).*

```powershell
npm run setup

```

### **Phase 3: Test the Application**

Once the setup finishes, let's make sure it actually works before setting it up to run in the background.

Run this command:

```powershell
node server/server.js

```

You should see console output saying the server is listening. Open a web browser on your server and navigate to: `http://localhost:3001`. You should see the Uptime Kuma setup screen.

Once confirmed, go back to your PowerShell window and press **Ctrl + C** to stop the server.

---

### **Phase 4: Run it in the Background (As a Service)**

If you just run `node server/server.js`, Uptime Kuma will shut down the moment you close the PowerShell window. To keep it running permanently in the background (even if you log off), we will use a process manager called **PM2**.

**1. Install PM2 globally:**

```powershell
npm install pm2 -g

```

**2. Start Uptime Kuma using PM2:**
*(Make sure you are still inside the `uptime-kuma` directory)*

```powershell
pm2 start server/server.js --name uptime-kuma

```

**3. Make PM2 start automatically when Windows reboots:**
To ensure Uptime Kuma comes back online if your VPS restarts, install the PM2 Windows Startup tool:

```powershell
npm install pm2-windows-startup -g

```

Install the startup script:

```powershell
pm2-startup install

```

Finally, save your current PM2 list (which includes Uptime Kuma) so it remembers to boot it:

```powershell
pm2 save

```

### **Phase 5: Open the Firewall (Optional but Recommended)**

By default, Windows Firewall will block outside access to port 3001. If you want to access Uptime Kuma from your personal computer rather than logging into the VPS via Remote Desktop every time, you must open the port.

Run this command in PowerShell (Admin):

```powershell
New-NetFirewallRule -DisplayName "Uptime Kuma (Port 3001)" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 3001

```

You can now access your dashboard from anywhere by navigating to `http://YOUR_VPS_IP_ADDRESS:3001` in your web browser.


Yes, absolutely. Using a local file is a much cleaner approach than touching Windows system variables, and it keeps your configuration strictly isolated to the Uptime Kuma folder.

Since Uptime Kuma is a Node.js app, it natively looks for a `.env` file in its root directory. Furthermore, when using PM2, the absolute best practice is to use an **Ecosystem configuration file**, which acts as a permanent blueprint for how PM2 should run your app, including its environment variables.

Here is how to set this up cleanly using the PM2 Ecosystem method, which guarantees your port settings stick without touching Windows variables.

### **Step 1: Open a Fresh PowerShell Window**

If you are still in the same PowerShell window where you typed `$env:PORT="8001"`, close it and open a new **PowerShell (Admin)** window. This ensures that the temporary Windows variable is completely cleared from your active session and won't interfere.

Navigate back to your folder:

```powershell
cd C:\path\to\your\uptime-kuma

```

### **Step 2: Delete the Existing PM2 Process**

Clear out the old configuration so we can start fresh:

```powershell
pm2 delete uptime-kuma

```

### **Step 3: Create an Ecosystem Configuration File**

Instead of a standard `.env` file, we will tell PM2 to generate its native configuration file. Run this command:

```powershell
pm2 ecosystem

```

This creates a file named `ecosystem.config.js` in your directory.

### **Step 4: Edit the Configuration File**

Open the file using Notepad directly from PowerShell:

```powershell
notepad ecosystem.config.js

```

Replace **everything** inside that file with the following code. This explicitly tells PM2 to run Uptime Kuma on port 8001, completely ignoring Windows system variables:

```javascript
module.exports = {
  apps : [{
    name   : "uptime-kuma",
    script : "./server/server.js",
    env: {
      PORT: 8001
    }
  }]
}

```

Save the file in Notepad and close it.

### **Step 5: Start PM2 Using the Ecosystem File**

Now, simply tell PM2 to start based on the blueprint you just created:

```powershell
pm2 start ecosystem.config.js

```

### **Step 6: Save the PM2 List**

Lock in the new startup configuration so it boots correctly upon server restart:

```powershell
pm2 save

```

Your server is now permanently configured to run on Port 8001 using local configurations, keeping your Windows Server environment entirely untouched.


