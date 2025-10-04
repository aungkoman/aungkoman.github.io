---
layout: post
title: "Live Wire မှာ ဘာ‌ွေပါ။"
date: 2025-10-02
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

### Event - Listener - Job - Email - Queue - Worker 


event bus.

### Redis 

Last login: Sat Oct  4 19:01:14 on console
msd@MSDs-Mac-mini-3 ~ % brew install redis
==> Auto-updating Homebrew...
Adjust how often this is run with `$HOMEBREW_AUTO_UPDATE_SECS` or disable with
`$HOMEBREW_NO_AUTO_UPDATE=1`. Hide these hints with `$HOMEBREW_NO_ENV_HINTS=1` (see `man brew`).
==> Auto-updated Homebrew!
Updated 3 taps (mongodb/brew, homebrew/core and homebrew/cask).
==> New Formulae
airtable-mcp-server: MCP Server for Airtable
atomic_queue: C++14 lock-free queues
cagent: Agent Builder and Runtime by Docker Engineering
chrome-devtools-mcp: Chrome DevTools for coding agents
doge: Command-line DNS client
fastmcp: Fast, Pythonic way to build MCP servers and clients
fernflower: Advanced decompiler for Java bytecode
jiratui: Textual User Interface for interacting with Atlassian Jira from your shell
jqp: TUI playground to experiment and play with jq
komac: Community Manifest Creator for Windows Package Manager (WinGet)
lazyssh: Terminal-based SSH manager
libcpucycles: Microlibrary for counting CPU cycles
libpq@17: Postgres C API library
lue-reader: Terminal eBook reader with text-to-speech and multi-format support
mcp-atlassian: MCP server for Atlassian tools (Confluence, Jira)
mcp-google-sheets: MCP server integrates with your Google Drive and Google Sheets
mcp-grafana: MCP server for Grafana
mcp-server-chart: MCP with 25+ @antvis charts for visualization, generation, and analysis
mdserve: Fast markdown preview server with live reload and theme support
mlx-lm: Run LLMs with MLX
msedit: Simple text editor with clickable interface
nanobot: Build MCP Agents
ni: Selects the right Node package manager based on lockfiles
openssl@3.5: Cryptography and SSL/TLS Toolkit
pgstream: PostgreSQL replication with DDL changes
php-intl: PHP internationalization extension
playwright-mcp: MCP server for Playwright
portable-libffi: Portable Foreign Function Interface library
portable-libxcrypt: Extended crypt library for descrypt, md5crypt, bcrypt, and others
portable-libyaml: YAML Parser
portable-openssl: Cryptography and SSL/TLS Toolkit
portable-ruby: Powerful, clean, object-oriented scripting language
portable-zlib: General-purpose lossless data-compression library
postgresql@18: Object-relational database system
privatebin-cli: CLI for creating and managing PrivateBin pastes
salesforce-mcp: MCP Server for interacting with Salesforce instances
sarif-tools: Set of command-line tools and Python library for working with SARIF files
slack-mcp-server: Powerful MCP Slack Server with multiple transports and smart history fetch logic
snooze: Run a command at a particular time
swag: Automatically generate RESTful API documentation with Swagger 2.0 for Go
termsvg: Record, share and export your terminal as a animated SVG image
tfstate-lookup: Lookup resource attributes in tfstate
wuppiefuzz: Coverage-guided REST API fuzzer developed on top of LibAFL
zuban: Python language server and type checker, written in Rust
==> New Casks
aionui: GUI for Gemini CLI
atuin-desktop: Runbook editor for terminal workflows
browseros: Open-source agentic browser
cmd: AI assistant for development in Xcode
coderabbit: AI code review CLI
corretto@25: OpenJDK distribution from Amazon
dayflow: Generate a timeline of your day, automatically
droid: AI-powered software engineering agent by Factory
folder-preview-pro: Quick Look extension for folders
font-bbh-sans-bartle
font-bbh-sans-bogle
font-bbh-sans-hegarty
frame0: Wireframing tool
graalvm-jdk@25: GraalVM from Oracle
handy: Speech to text application
helium-browser: Chromium-based web browser
iaito: GUI for radare2
itermbrowserplugin: Enables an integrated web browser in iTerm2
microsoft-openjdk@25: OpenJDK distribution from Microsoft
oracle-jdk-javadoc@25: Documentation for the Oracle JDK
oracle-jdk@25: JDK from Oracle
osaurus: LLM server built on MLX
rclone-ui: GUI for Rclone
rewritebar: AI-powered writing assistant
semeru-jdk-open@25: Production-ready JDK with the OpenJDK class libraries and the Eclipse OpenJ9 JVM
socialstream: Consolidate, control, and customise live social messaging streams
topaz-gigapixel: AI image upscaler
topaz-photo: AI image enhancer
topaz-video: Video upscaler and quality enhancer
zulu@25: OpenJDK distribution from Azul
Error: Unexpected method 'appcast' called on Cask adoptopenjdk11.
Follow the instructions here:
  https://github.com/Homebrew/homebrew-cask#reporting-bugs

You have 71 outdated formulae and 1 outdated cask installed.
Error: Unexpected method 'appcast' called on Cask adoptopenjdk11.
Follow the instructions here:
  https://github.com/Homebrew/homebrew-cask#reporting-bugs
Error: Unexpected method 'appcast' called on Cask adoptopenjdk11.
Follow the instructions here:
  https://github.com/Homebrew/homebrew-cask#reporting-bugs
Error: Unexpected method 'appcast' called on Cask adoptopenjdk11.
Follow the instructions here:
  https://github.com/Homebrew/homebrew-cask#reporting-bugs

redis 7.2.0 is already installed but outdated (so it will be upgraded).
==> Fetching downloads for: redis
==> Downloading https://ghcr.io/v2/homebrew/core/redis/manifests/8.2.2
######################################################################### 100.0%
==> Fetching dependencies for redis: openssl@3
==> Downloading https://ghcr.io/v2/homebrew/core/openssl/3/manifests/3.6.0
######################################################################### 100.0%
==> Fetching openssl@3
==> Downloading https://ghcr.io/v2/homebrew/core/openssl/3/blobs/sha256:9a8fa2ae
######################################################################### 100.0%
==> Fetching redis
==> Downloading https://ghcr.io/v2/homebrew/core/redis/blobs/sha256:a8594939b4b0
######################################################################### 100.0%
==> Upgrading redis
  7.2.0 -> 8.2.2 
==> Installing redis dependency: openssl@3
==> Downloading https://ghcr.io/v2/homebrew/core/openssl/3/manifests/3.6.0
Already downloaded: /Users/msd/Library/Caches/Homebrew/downloads/403c903e557d19d801f4c6b4f635c9553af72a487024139a5773e636c884ef9e--openssl@3-3.6.0.bottle_manifest.json
==> Pouring openssl@3--3.6.0.arm64_sequoia.bottle.tar.gz
🍺  /opt/homebrew/Cellar/openssl@3/3.6.0: 7,609 files, 36.0MB
==> Pouring redis--8.2.2.arm64_sequoia.bottle.tar.gz
==> Caveats
To start redis now and restart at login:
  brew services start redis
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/redis/bin/redis-server /opt/homebrew/etc/redis.conf
==> Summary
🍺  /opt/homebrew/Cellar/redis/8.2.2: 15 files, 2.8MB
==> Running `brew cleanup redis`...
Disable this behaviour by setting `HOMEBREW_NO_INSTALL_CLEANUP=1`.
Hide these hints with `HOMEBREW_NO_ENV_HINTS=1` (see `man brew`).
Removing: /opt/homebrew/Cellar/redis/7.2.0... (14 files, 2.5MB)
==> No outdated dependents to upgrade!
==> Caveats
==> redis
To start redis now and restart at login:
  brew services start redis
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/redis/bin/redis-server /opt/homebrew/etc/redis.conf
msd@MSDs-Mac-mini-3 ~ % redis-server
8894:C 04 Oct 2025 19:05:05.089 * oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
8894:C 04 Oct 2025 19:05:05.089 * Redis version=8.2.2, bits=64, commit=00000000, modified=1, pid=8894, just started
8894:C 04 Oct 2025 19:05:05.089 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf
8894:M 04 Oct 2025 19:05:05.089 * Increased maximum number of open files to 10032 (it was originally set to 256).
8894:M 04 Oct 2025 19:05:05.089 * monotonic clock: POSIX clock_gettime
                _._                                                  
           _.-``__ ''-._                                             
      _.-``    `.  `_.  ''-._           Redis Open Source            
  .-`` .-```.  ```\/    _.,_ ''-._      8.2.2 (00000000/1) 64 bit
 (    '      ,       .-`  | `,    )     Running in standalone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 8894
  `-._    `-._  `-./  _.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |           https://redis.io       
  `-._    `-._`-.__.-'_.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |                                  
  `-._    `-._`-.__.-'_.-'    _.-'                                   
      `-._    `-.__.-'    _.-'                                       
          `-._        _.-'                                           
              `-.__.-'                                               

8894:M 04 Oct 2025 19:05:05.090 # WARNING: The TCP backlog setting of 511 cannot be enforced because kern.ipc.somaxconn is set to the lower value of 128.
8894:M 04 Oct 2025 19:05:05.091 * Server initialized
8894:M 04 Oct 2025 19:05:05.092 * Loading RDB produced by version 7.2.0
8894:M 04 Oct 2025 19:05:05.092 * RDB age 60579481 seconds
8894:M 04 Oct 2025 19:05:05.092 * RDB memory usage when created 1.05 Mb
8894:M 04 Oct 2025 19:05:05.092 * Done loading RDB, keys loaded: 0, keys expired: 0.
8894:M 04 Oct 2025 19:05:05.092 * DB loaded from disk: 0.001 seconds
8894:M 04 Oct 2025 19:05:05.092 * Ready to accept connections tcp

### Caching using Redis

redis for 

- caching
- queue
- job
- event

