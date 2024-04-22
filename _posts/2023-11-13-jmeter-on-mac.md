---
layout: post
title:  "How to install Jmeter on Mac"
date:   2023-11-13 08:02:00 +0630
categories: howto
---


*** အဆင်မပြေ ***

### Install လုပ်ဖို့

```bash
brew install jmeter
```


### ဖွင့်ဖို့

```bash
open /opt/homebrew/bin/jmeter
```


### Installation Logs

```bash
Last login: Mon Nov 13 07:23:15 on console
msd@MSDs-Mac-mini ~ % brew install jmeter
Running `brew update --auto-update`...
==> Auto-updated Homebrew!
Updated 3 taps (mongodb/brew, homebrew/core and homebrew/cask).
==> New Formulae
ain                 dicebear            orbuculum           reflex
ali                 faircamp            phylum-cli          regclient
apkleaks            frozen              python-docopt       scikit-image
appstream           ghc@9.6             python-filelock     signmykey
bomber              graphqlviz          python-jinja        spglib
bounceback          libsail             python-mpmath
chainsaw            mediamtx            python-networkx
cliam               noir                python-sympy
==> New Casks
btp                 deskpad             keymapp             rode-central
clibor              jazz2-resurrection  orka3

You have 17 outdated formulae installed.

==> Downloading https://ghcr.io/v2/homebrew/core/jmeter/manifests/5.6.2
######################################################################### 100.0%
==> Fetching dependencies for jmeter: openjdk@17
==> Downloading https://ghcr.io/v2/homebrew/core/openjdk/17/manifests/17.0.9
######################################################################### 100.0%
==> Fetching openjdk@17
==> Downloading https://ghcr.io/v2/homebrew/core/openjdk/17/blobs/sha256:e227f7f
######################################################################### 100.0%
==> Fetching jmeter
==> Downloading https://ghcr.io/v2/homebrew/core/jmeter/blobs/sha256:057e07995bc
######################################################################### 100.0%
==> Installing dependencies for jmeter: openjdk@17
==> Installing jmeter dependency: openjdk@17
==> Downloading https://ghcr.io/v2/homebrew/core/openjdk/17/manifests/17.0.9
Already downloaded: /Users/msd/Library/Caches/Homebrew/downloads/6274f55d293c4208920a5d52b3b06d4a9dedb0e7139b671f4f66fada2abbc486--openjdk@17-17.0.9.bottle_manifest.json
==> Pouring openjdk@17--17.0.9.arm64_sonoma.bottle.tar.gz
🍺  /opt/homebrew/Cellar/openjdk@17/17.0.9: 635 files, 304.9MB
==> Installing jmeter
==> Pouring jmeter--5.6.2.arm64_sonoma.bottle.tar.gz
🍺  /opt/homebrew/Cellar/jmeter/5.6.2: 2,629 files, 147.9MB
==> Running `brew cleanup jmeter`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
```


### Open Logs

```bash
Last login: Mon Nov 13 08:01:00 on ttys000
/opt/homebrew/Cellar/jmeter/5.6.2/bin/jmeter ; exit;
msd@MSDs-Mac-mini ~ % /opt/homebrew/Cellar/jmeter/5.6.2/bin/jmeter ; exit;
WARNING: package sun.awt.X11 not in java.desktop
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
WARN StatusConsoleListener The use of package scanning to locate plugins is deprecated and will be removed in a future release
================================================================================
Don't use GUI mode for load testing !, only for Test creation and Test debugging.
For load testing, use CLI Mode (was NON GUI):
   jmeter -n -t [jmx file] -l [results file] -e -o [Path to web report folder]
& increase Java Heap to meet your test requirements:
   Modify current env variable HEAP="-Xms1g -Xmx1g -XX:MaxMetaspaceSize=256m" in the jmeter batch file
Check : https://jmeter.apache.org/usermanual/best-practices.html
================================================================================
/opt/homebrew/Cellar/jmeter/5.6.2/libexec/bin/jmeter: line 199:  3647 Trace/BPT trap: 5       "$JAVA_HOME/bin/java" $ARGS $JVM_ARGS $JMETER_OPTS -jar "$PRGDIR/ApacheJMeter.jar" "$@"

Saving session...
...copying shared history...
...saving history...truncating history files...
...completed.
Deleting expired sessions...       4 completed.
```