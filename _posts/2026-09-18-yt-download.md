---
layout: post
title: "Download Myanmar Movies using YT-DL"
date: 2026-09-18
categories: learning
author: "Cisco Ramon"
tags: [life,promotion] # TAG names should always be lowercase
---


```python
python -m pip install --upgrade yt-dlp
winget install Gyan.FFmpeg
yt-dlp "https://www.youtube.com/watch?v=YOUR_VIDEO_ID"

PS D:\Downloads\Videos> pip

Usage:
  pip <command> [options]

Commands:
  install                     Install packages.
  lock                        Generate a lock file.
  download                    Download packages.
  uninstall                   Uninstall packages.
  freeze                      Output installed packages in requirements format.
  inspect                     Inspect the python environment.
  list                        List installed packages.
  show                        Show information about installed packages.
  check                       Verify installed packages have compatible dependencies.
  config                      Manage local and global configuration.
  search                      Search PyPI for packages.
  cache                       Inspect and manage pip's wheel cache.
  index                       Inspect information available from package indexes.
  wheel                       Build wheels from your requirements.
  hash                        Compute hashes of package archives.
  completion                  A helper command used for command completion.
  debug                       Show information useful for debugging.
  help                        Show help for commands.

General Options:
  -h, --help                  Show help.
  --debug                     Let unhandled exceptions propagate outside the main subroutine, instead of logging them
                              to stderr.
  --isolated                  Run pip in an isolated mode, ignoring environment variables and user configuration.
  --require-virtualenv        Allow pip to only run in a virtual environment; exit with an error otherwise.
  --python <python>           Run pip with the specified Python interpreter.
  -v, --verbose               Give more output. Option is additive, and can be used up to 3 times.
  -V, --version               Show version and exit.
  -q, --quiet                 Give less output. Option is additive, and can be used up to 3 times (corresponding to
                              WARNING, ERROR, and CRITICAL logging levels).
  --log <path>                Path to a verbose appending log.
  --no-input                  Disable prompting for input.
  --keyring-provider <keyring_provider>
                              Enable the credential lookup via the keyring library if user input is allowed. Specify
                              which mechanism to use [auto, disabled, import, subprocess]. (default: auto)
  --proxy <proxy>             Specify a proxy in the form scheme://[user:passwd@]proxy.server:port.
  --no-proxy-env              Do not read proxy configuration from environment variables.
  --retries <retries>         Maximum attempts to establish a new HTTP connection. (default: 5)
  --timeout <sec>             Set the socket timeout (default 15 seconds).
  --exists-action <action>    Default action when a path already exists: (s)witch, (i)gnore, (w)ipe, (b)ackup,
                              (a)bort.
  --trusted-host <hostname>   Mark this host or host:port pair as trusted, even though it does not have valid or any
                              HTTPS.
  --cert <path>               Path to PEM-encoded CA certificate bundle. If provided, overrides the default. See 'SSL
                              Certificate Verification' in pip documentation for more information.
  --client-cert <path>        Path to SSL client certificate, a single file containing the private key and the
                              certificate in PEM format.
  --cache-dir <dir>           Store the cache data in <dir>.
  --no-cache-dir              Disable the cache.
  --disable-pip-version-check
                              Don't periodically check PyPI to determine whether a new version of pip is available for
                              download. Implied with --no-index.
  --no-color                  Suppress colored output.
  --use-feature <feature>     Enable new functionality, that may be backward incompatible.
  --use-deprecated <feature>  Enable deprecated functionality, that will be removed in the future.
  --resume-retries <resume_retries>
                              Maximum attempts to resume or restart an incomplete download. (default: 5)
PS D:\Downloads\Videos> python -m pip install --upgrade yt-dlp
Requirement already satisfied: yt-dlp in C:\Users\aungk\AppData\Local\Programs\Python\Python313\Lib\site-packages (2025.11.12)
Collecting yt-dlp
  Downloading yt_dlp-2026.8.19-py3-none-any.whl.metadata (183 kB)
Downloading yt_dlp-2026.8.19-py3-none-any.whl (3.2 MB)
   ---------------------------------------- 3.2/3.2 MB 110.5 kB/s  0:00:26
Installing collected packages: yt-dlp
  Attempting uninstall: yt-dlp
    Found existing installation: yt-dlp 2025.11.12
    Uninstalling yt-dlp-2025.11.12:
      Successfully uninstalled yt-dlp-2025.11.12
Successfully installed yt-dlp-2026.8.19

[notice] A new release of pip is available: 26.2 -> 26.2.1
[notice] To update, run: python.exe -m pip install --upgrade pip
```

