---
layout: post
title: "Developing RESTful API with ASP.NET on Mac"
date: 2025-09-22
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

Download .net sdk 

https://dotnet.microsoft.com/en-us/download


The following was installed 
	•	.NET SDK 8.0.414
	•	.NET Runtime 8.0.20
	•	ASP.NET Core Runtime 8.0.20

This product collects usage data 
	•	More information and opt-out

Resources 
	•	.NET Documentation
	•	SDK Documentation
	•	Release Notes
	•	Tutorials

 msd@MSDs-Mac-mini-3 TestAPI % dotnet

Usage: dotnet [options]
Usage: dotnet [path-to-application]

Options:
  -h|--help         Display help.
  --info            Display .NET information.
  --list-sdks       Display the installed SDKs.
  --list-runtimes   Display the installed runtimes.

path-to-application:
  The path to an application .dll file to execute.
msd@MSDs-Mac-mini-3 TestAPI % dotnet restore

Welcome to .NET 8.0!
---------------------
SDK Version: 8.0.414

Telemetry
---------
The .NET tools collect usage data in order to help us improve your experience. It is collected by Microsoft and shared with the community. You can opt-out of telemetry by setting the DOTNET_CLI_TELEMETRY_OPTOUT environment variable to '1' or 'true' using your favorite shell.

Read more about .NET CLI Tools telemetry: https://aka.ms/dotnet-cli-telemetry

----------------
Installed an ASP.NET Core HTTPS development certificate.
To trust the certificate, run 'dotnet dev-certs https --trust'
Learn about HTTPS: https://aka.ms/dotnet-https

----------------
Write your first app: https://aka.ms/dotnet-hello-world
Find out what's new: https://aka.ms/dotnet-whats-new
Explore documentation: https://aka.ms/dotnet-docs
Report issues and find source on GitHub: https://github.com/dotnet/core
Use 'dotnet --help' to see available commands or visit: https://aka.ms/dotnet-cli
--------------------------------------------------------------------------------------
An issue was encountered verifying workloads. For more information, run "dotnet workload update".
  Determining projects to restore...


msd@MSDs-Mac-mini-3 TestAPI % dotnet run
Building...
/Users/msd/Code/repos/dot-net/TestAPI/Models/Blood.cs(9,23): warning CS8618: Non-nullable property 'Name_English' must contain a non-null value when exiting constructor. Consider adding the 'required' modifier or declaring the property as nullable. [/Users/msd/Code/repos/dot-net/TestAPI/TestAPI.csproj]
/Users/msd/Code/repos/dot-net/TestAPI/Models/Blood.cs(10,23): warning CS8618: Non-nullable property 'Name_Myanmar' must contain a non-null value when exiting constructor. Consider adding the 'required' modifier or declaring the property as nullable. [/Users/msd/Code/repos/dot-net/TestAPI/TestAPI.csproj]
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5122
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
      Content root path: /Users/msd/Code/repos/dot-net/TestAPI


### Open Swagger UI

http://localhost:5122/swagger/index.html


### DB Migration

Connect with mysql database

host: localhost
port: 3306
db: dotnetapi
username: root
password: {blank}

# ASP.NET Core with MySQL Migration Guide

## Task Completion Summary

### ✅ Task 1: Install MySQL Entity Framework Core Package
**Command Executed:**
```bash
dotnet add package Pomelo.EntityFrameworkCore.MySql
```

### ✅ Task 2: Update Connection String in appsettings.json
**Changes Made:**
- Updated connection string from SQL Server to MySQL format
- Configured MySQL database connection parameters

### ✅ Task 3: Update Program.cs to Use MySQL
**Changes Made:**
- Replaced `UseSqlServer()` with `UseMySql()`
- Updated Entity Framework configuration for MySQL compatibility

### ✅ Task 4: Create and Run Database Migrations
**Commands Executed:**
```bash
# Install Entity Framework Core tools globally
dotnet tool install --global dotnet-ef

# Add to PATH (macOS/Linux)
export PATH="$PATH:/Users/msd/.dotnet/tools"

# Install design package (required for migrations)
dotnet add package Microsoft.EntityFrameworkCore.Design

# Create initial migration
dotnet ef migrations add InitialCreate

# Apply migration to database
dotnet ef database update
```

## Key Configuration Details

### Connection String Format for MySQL
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=YourDatabase;User=root;Password=yourpassword;"
  }
}
```

### Program.cs MySQL Configuration
```csharp
// Replace SQL Server configuration:
// options.UseSqlServer(connectionString);

// With MySQL configuration:
options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
```

## Required Packages

### Core MySQL Package
- **Pomelo.EntityFrameworkCore.MySql** - MySQL provider for EF Core

### Migration Tools
- **Microsoft.EntityFrameworkCore.Design** - Required for EF Core migrations
- **dotnet-ef** - Global tool for migration commands

## Migration Files Created

After running `dotnet ef migrations add InitialCreate`, the following files are generated:
- `Migrations/InitialCreate.cs` - Migration class
- `Migrations/[Timestamp]_InitialCreate.cs` - Migration snapshot
- `Migrations/YourDbContextModelSnapshot.cs` - Current model state

## Common Issues and Solutions

### 1. dotnet-ef Command Not Found
```bash
# Solution: Add to PATH or reinstall
export PATH="$PATH:/Users/msd/.dotnet/tools"
dotnet tool install --global dotnet-ef
```

### 2. Missing Design Package
```bash
# Solution: Install design package
dotnet add package Microsoft.EntityFrameworkCore.Design
```

### 3. MySQL Version Compatibility
- Use `ServerVersion.AutoDetect()` for automatic version detection
- Or specify exact version: `ServerVersion.Parse("8.0.0")`

## Verification Steps

1. **Check Migration Status:**
   ```bash
   dotnet ef migrations list
   ```

2. **Verify Database Creation:**
   - Check MySQL for new database and tables
   - Verify table structure matches your models

3. **Test Application:**
   - Run the application
   - Test API endpoints that use database operations

## Next Steps

- Consider adding seed data in migration
- Set up database connection retry logic
- Configure connection pooling
- Implement database health checks

This migration successfully transitions your ASP.NET Core API from SQL Server to MySQL with proper Entity Framework Core configuration and database schema setup.



Here's how to deploy an ASP.NET RESTful API on Ubuntu server using Apache instead of Nginx:

## Prerequisites
- Ubuntu server (18.04+ recommended)
- Your published ASP.NET API project
- SSH access to the server

## Step 1: Install .NET Runtime on Ubuntu

```bash
# Update package list
sudo apt update

# Install required dependencies
sudo apt install -y wget

# Add Microsoft package repository
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb

# Install .NET runtime
sudo apt update
sudo apt install -y aspnetcore-runtime-6.0

# Or for newer versions:
sudo apt install -y aspnetcore-runtime-7.0
# or
sudo apt install -y aspnetcore-runtime-8.0
```

## Step 2: Install Apache and Required Modules

```bash
# Install Apache
sudo apt install -y apache2

# Enable required Apache modules
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_wstunnel
sudo a2enmod rewrite
sudo a2enmod headers

# Restart Apache
sudo systemctl restart apache2
```

## Step 3: Prepare Your Application

### Publish your API locally:
```bash
dotnet publish -c Release -o ./publish
```

### Ensure your appsettings.json includes:
```json
{
  "Kestrel": {
    "Endpoints": {
      "Http": {
        "Url": "http://localhost:5000"
      }
    }
  }
}
```

## Step 4: Transfer Files to Server

```bash
# Create directory
sudo mkdir -p /var/www/yourapi

# Copy files (from your local machine)
scp -r ./publish/* username@your-server-ip:/var/www/yourapi/

# Set permissions
sudo chown -R www-data:www-data /var/www/yourapi
sudo chmod -R 755 /var/www/yourapi
```

## Step 5: Configure Apache Virtual Host

```bash
# Create virtual host file
sudo nano /etc/apache2/sites-available/yourapi.conf
```

### Apache Virtual Host Configuration:
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/yourapi

    # Proxy API requests to Kestrel
    ProxyPreserveHost On
    ProxyPass / http://localhost:5000/
    ProxyPassReverse / http://localhost:5000/
    
    # WebSocket support (if needed)
    ProxyPass /ws/ ws://localhost:5000/ws/
    ProxyPassReverse /ws/ ws://localhost:5000/ws/

    # Error log
    ErrorLog ${APACHE_LOG_DIR}/yourapi_error.log
    CustomLog ${APACHE_LOG_DIR}/yourapi_access.log combined

    # Additional headers for ASP.NET Core
    Header set X-Content-Type-Options nosniff
    Header set X-Frame-Options DENY
    Header set X-XSS-Protection "1; mode=block"
</VirtualHost>
```

### Alternative configuration for subdirectory or path-based routing:
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /var/www/html

    # Proxy only specific path to API
    ProxyPreserveHost On
    ProxyPass /api/ http://localhost:5000/
    ProxyPassReverse /api/ http://localhost:5000/
    
    # For SPA applications with API
    RewriteEngine On
    RewriteCond %{REQUEST_URI} !^/api/
    RewriteRule "^(.+)$" "/index.html" [PT]
</VirtualHost>
```

```bash
# Enable the site and disable default site
sudo a2ensite yourapi.conf
sudo a2dissite 000-default.conf

# Test Apache configuration
sudo apache2ctl configtest

# Restart Apache
sudo systemctl restart apache2
```

## Step 6: Create Systemd Service

```bash
# Create service file
sudo nano /etc/systemd/system/yourapi.service
```

### Service Configuration:
```ini
[Unit]
Description=ASP.NET Core Web API
After=network.target

[Service]
Type=exec
User=www-data
Group=www-data
WorkingDirectory=/var/www/yourapi
ExecStart=/usr/bin/dotnet /var/www/yourapi/yourapi.dll
Restart=always
RestartSec=10
KillSignal=SIGINT
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false
Environment=ASPNETCORE_URLS=http://localhost:5000

# Optional: Specify custom environment variables
Environment=ConnectionStrings__DefaultConnection="Your_Connection_String"

[Install]
WantedBy=multi-user.target
```

```bash
# Enable and start the service
sudo systemctl daemon-reload
sudo systemctl enable yourapi.service
sudo systemctl start yourapi.service

# Check status
sudo systemctl status yourapi.service
```

## Step 7: Configure Firewall

```bash
# Enable firewall
sudo ufw enable

# Allow Apache (opens ports 80 and 443)
sudo ufw allow 'Apache Full'

# Allow SSH
sudo ufw allow ssh

# Check status
sudo ufw status
```

## Step 8: SSL Certificate with Apache

```bash
# Install Certbot for Apache
sudo apt install -y certbot python3-certbot-apache

# Get SSL certificate
sudo certbot --apache -d your-domain.com -d www.your-domain.com

# Auto-renewal test
sudo certbot renew --dry-run
```

## Step 9: Application Configuration Files

### Create appsettings.Production.json:
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "Kestrel": {
    "Endpoints": {
      "Http": {
        "Url": "http://localhost:5000"
      }
    }
  }
}
```

## Step 10: Advanced Apache Configuration

### For better performance and security:
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    
    # Basic settings
    DocumentRoot /var/www/yourapi
    ProxyPreserveHost On
    
    # Proxy configuration
    ProxyPass / http://localhost:5000/ retry=0 timeout=30
    ProxyPassReverse / http://localhost:5000/
    
    # Timeout settings
    ProxyTimeout 300
    
    # Buffer settings
    ProxyBadHeader Ignore
    ProxyIOBufferSize 65536
    
    # Security headers
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    
    # Compression
    SetOutputFilter DEFLATE
    
    LogLevel warn
    ErrorLog ${APACHE_LOG_DIR}/yourapi_error.log
    CustomLog ${APACHE_LOG_DIR}/yourapi_access.log combined
</VirtualHost>
```

## Step 11: Monitoring and Maintenance

### Useful commands:
```bash
# Check application logs
sudo journalctl -u yourapi.service -f

# Check Apache logs
sudo tail -f /var/log/apache2/yourapi_error.log

# Restart services
sudo systemctl restart yourapi.service
sudo systemctl restart apache2

# Check service status
sudo systemctl status yourapi.service
sudo systemctl status apache2
```

## Troubleshooting Common Issues

### 1. 502 Bad Gateway Error:
```bash
# Check if .NET app is running
sudo systemctl status yourapi.service

# Check if port 5000 is listening
sudo netstat -tulpn | grep :5000

# Check Apache error logs
sudo tail -f /var/log/apache2/error.log
```

### 2. Permission Issues:
```bash
sudo chown -R www-data:www-data /var/www/yourapi
sudo find /var/www/yourapi -type f -exec chmod 644 {} \;
sudo find /var/www/yourapi -type d -exec chmod 755 {} \;
```

### 3. SELinux Issues (if enabled):
```bash
# Install SELinux utilities
sudo apt install -y policycoreutils-python-utils

# Allow Apache to make network connections
sudo setsebool -P httpd_can_network_connect 1
```

### 4. Static Files Not Serving:
Ensure your `Startup.cs` or `Program.cs` has:
```csharp
app.UseStaticFiles();
```

This Apache configuration provides a robust production environment for your ASP.NET RESTful API with proper reverse proxy setup, SSL support, and service management.

