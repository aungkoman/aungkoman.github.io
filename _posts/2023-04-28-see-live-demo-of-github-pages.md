---
layout: post
title: See live demo of github pages on Mac
---


layout တေွပါ ပြောင်းကုန်ပြီ။

## Command List

```bash
brew install chruby ruby-install xz
ruby-install ruby 3.1.3
```


## To Do

==> chruby
Add the following to the ~/.bash_profile or ~/.zshrc file:
  source /opt/homebrew/opt/chruby/share/chruby/chruby.sh

To enable auto-switching of Rubies specified by .ruby-version files,
add the following to ~/.bash_profile or ~/.zshrc:
  source /opt/homebrew/opt/chruby/share/chruby/auto.sh


## Refrences

https://jekyllrb.com/docs/installation/macos/



## Logs

Last login: Fri Apr 28 12:15:26 on console
msd@MSDs-Mac-mini ~ % brew install chruby ruby-install xz
==> Downloading https://formulae.brew.sh/api/formula.jws.json
######################################################################### 100.0%
==> Downloading https://formulae.brew.sh/api/cask.jws.json
######################################################################### 100.0%
Warning: xz 5.4.2 is already installed and up-to-date.
To reinstall 5.4.2, run:
  brew reinstall xz
==> Fetching chruby
==> Downloading https://ghcr.io/v2/homebrew/core/chruby/manifests/0.3.9-1
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/chruby/blobs/sha256:977cf9319a2
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################### 100.0%
==> Fetching ruby-install
==> Downloading https://ghcr.io/v2/homebrew/core/ruby-install/manifests/0.9.0-1
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/ruby-install/blobs/sha256:6243f
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################### 100.0%
==> Pouring chruby--0.3.9.all.bottle.1.tar.gz
==> Caveats
Add the following to the ~/.bash_profile or ~/.zshrc file:
  source /opt/homebrew/opt/chruby/share/chruby/chruby.sh

To enable auto-switching of Rubies specified by .ruby-version files,
add the following to ~/.bash_profile or ~/.zshrc:
  source /opt/homebrew/opt/chruby/share/chruby/auto.sh
==> Summary
🍺  /opt/homebrew/Cellar/chruby/0.3.9: 12 files, 51.2KB
==> Running `brew cleanup chruby`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
==> Pouring ruby-install--0.9.0.all.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/ruby-install/0.9.0: 30 files, 82.9KB
==> Running `brew cleanup ruby-install`...
==> `brew cleanup` has not been run in the last 30 days, running now...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
Removing: /Users/msd/Library/Caches/Homebrew/apr--1.7.2... (393.4KB)
Removing: /Users/msd/Library/Caches/Homebrew/apr--1.7.3... (391.9KB)
Removing: /opt/homebrew/Cellar/freetds/1.3.17... (1,262 files, 14MB)
Removing: /Users/msd/Library/Caches/Homebrew/freetds--1.3.17... (2.8MB)
Removing: /Users/msd/Library/Caches/Homebrew/libtiff--4.4.0_1... (1.2MB)
Removing: /opt/homebrew/Cellar/openexr/3.1.6... (194 files, 6.0MB)
Removing: /Users/msd/Library/Caches/Homebrew/openexr--3.1.6... (1.4MB)
Removing: /Users/msd/Library/Caches/Homebrew/php@8.1--8.1.17... (19.2MB)
Removing: /opt/homebrew/Cellar/sqlite/3.41.1... (11 files, 4.5MB)
Removing: /Users/msd/Library/Caches/Homebrew/sqlite--3.41.1... (2MB)
Removing: /opt/homebrew/Cellar/zstd/1.5.4... (31 files, 2.3MB)
Removing: /Users/msd/Library/Caches/Homebrew/zstd--1.5.4... (779.3KB)
Removing: /Users/msd/Library/Logs/Homebrew/libtiff... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libtool... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/gmp... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libidn2... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/little-cms2... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libpng... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/freetype... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/argon2... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/rtmpdump... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/imath... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libavif... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libunistring... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/highway... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/apr-util... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/brotli... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/icu4c... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/readline... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/aom... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/lz4... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/webp... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/sqlite... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/xz... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/unixodbc... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libnghttp2... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/openexr... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/fontconfig... (149.2KB)
Removing: /Users/msd/Library/Logs/Homebrew/curl... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/giflib... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/krb5... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/freetds... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libvmaf... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/ca-certificates... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/gettext... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libssh2... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/zstd... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libsodium... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/apr... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/autoconf... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libpq... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/aspell... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/tidy-html5... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/m4... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/oniguruma... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/gd... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/pcre2... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/openssl@1.1... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/jpeg-xl... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/php@8.1... (12 files, 3.4KB)
Removing: /Users/msd/Library/Logs/Homebrew/libzip... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/openldap... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/jpeg-turbo... (64B)
Pruned 0 symbolic links and 15 directories from /opt/homebrew
==> Caveats
==> chruby
Add the following to the ~/.bash_profile or ~/.zshrc file:
  source /opt/homebrew/opt/chruby/share/chruby/chruby.sh

To enable auto-switching of Rubies specified by .ruby-version files,
add the following to ~/.bash_profile or ~/.zshrc:
  source /opt/homebrew/opt/chruby/share/chruby/auto.sh

### Complete Log


Last login: Fri Apr 28 12:15:26 on console
msd@MSDs-Mac-mini ~ % brew install chruby ruby-install xz
==> Downloading https://formulae.brew.sh/api/formula.jws.json
######################################################################### 100.0%
==> Downloading https://formulae.brew.sh/api/cask.jws.json
######################################################################### 100.0%
Warning: xz 5.4.2 is already installed and up-to-date.
To reinstall 5.4.2, run:
  brew reinstall xz
==> Fetching chruby
==> Downloading https://ghcr.io/v2/homebrew/core/chruby/manifests/0.3.9-1
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/chruby/blobs/sha256:977cf9319a2
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################### 100.0%
==> Fetching ruby-install
==> Downloading https://ghcr.io/v2/homebrew/core/ruby-install/manifests/0.9.0-1
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/ruby-install/blobs/sha256:6243f
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################### 100.0%
==> Pouring chruby--0.3.9.all.bottle.1.tar.gz
==> Caveats
Add the following to the ~/.bash_profile or ~/.zshrc file:
  source /opt/homebrew/opt/chruby/share/chruby/chruby.sh

To enable auto-switching of Rubies specified by .ruby-version files,
add the following to ~/.bash_profile or ~/.zshrc:
  source /opt/homebrew/opt/chruby/share/chruby/auto.sh
==> Summary
🍺  /opt/homebrew/Cellar/chruby/0.3.9: 12 files, 51.2KB
==> Running `brew cleanup chruby`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
==> Pouring ruby-install--0.9.0.all.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/ruby-install/0.9.0: 30 files, 82.9KB
==> Running `brew cleanup ruby-install`...
==> `brew cleanup` has not been run in the last 30 days, running now...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
Removing: /Users/msd/Library/Caches/Homebrew/apr--1.7.2... (393.4KB)
Removing: /Users/msd/Library/Caches/Homebrew/apr--1.7.3... (391.9KB)
Removing: /opt/homebrew/Cellar/freetds/1.3.17... (1,262 files, 14MB)
Removing: /Users/msd/Library/Caches/Homebrew/freetds--1.3.17... (2.8MB)
Removing: /Users/msd/Library/Caches/Homebrew/libtiff--4.4.0_1... (1.2MB)
Removing: /opt/homebrew/Cellar/openexr/3.1.6... (194 files, 6.0MB)
Removing: /Users/msd/Library/Caches/Homebrew/openexr--3.1.6... (1.4MB)
Removing: /Users/msd/Library/Caches/Homebrew/php@8.1--8.1.17... (19.2MB)
Removing: /opt/homebrew/Cellar/sqlite/3.41.1... (11 files, 4.5MB)
Removing: /Users/msd/Library/Caches/Homebrew/sqlite--3.41.1... (2MB)
Removing: /opt/homebrew/Cellar/zstd/1.5.4... (31 files, 2.3MB)
Removing: /Users/msd/Library/Caches/Homebrew/zstd--1.5.4... (779.3KB)
Removing: /Users/msd/Library/Logs/Homebrew/libtiff... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libtool... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/gmp... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libidn2... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/little-cms2... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libpng... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/freetype... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/argon2... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/rtmpdump... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/imath... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libavif... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libunistring... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/highway... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/apr-util... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/brotli... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/icu4c... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/readline... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/aom... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/lz4... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/webp... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/sqlite... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/xz... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/unixodbc... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libnghttp2... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/openexr... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/fontconfig... (149.2KB)
Removing: /Users/msd/Library/Logs/Homebrew/curl... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/giflib... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/krb5... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/freetds... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libvmaf... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/ca-certificates... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/gettext... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libssh2... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/zstd... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libsodium... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/apr... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/autoconf... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/libpq... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/aspell... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/tidy-html5... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/m4... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/oniguruma... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/gd... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/pcre2... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/openssl@1.1... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/jpeg-xl... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/php@8.1... (12 files, 3.4KB)
Removing: /Users/msd/Library/Logs/Homebrew/libzip... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/openldap... (64B)
Removing: /Users/msd/Library/Logs/Homebrew/jpeg-turbo... (64B)
Pruned 0 symbolic links and 15 directories from /opt/homebrew
==> Caveats
==> chruby
Add the following to the ~/.bash_profile or ~/.zshrc file:
  source /opt/homebrew/opt/chruby/share/chruby/chruby.sh

To enable auto-switching of Rubies specified by .ruby-version files,
add the following to ~/.bash_profile or ~/.zshrc:
  source /opt/homebrew/opt/chruby/share/chruby/auto.sh
msd@MSDs-Mac-mini ~ % ruby-install ruby 3.1.3
>>> Updating ruby versions ...
>>> Installing ruby 3.1.3 into /Users/msd/.rubies/ruby-3.1.3 ...
>>> Installing dependencies for ruby 3.1.3 ...
Warning: openssl@1.1 1.1.1t is already installed and up-to-date.
To reinstall 1.1.1t, run:
  brew reinstall openssl@1.1
Warning: readline 8.2.1 is already installed and up-to-date.
To reinstall 8.2.1, run:
  brew reinstall readline
==> Fetching automake
==> Downloading https://ghcr.io/v2/homebrew/core/automake/manifests/1.16.5
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/automake/blobs/sha256:f68481d06
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################### 100.0%
==> Fetching bison
==> Downloading https://ghcr.io/v2/homebrew/core/bison/manifests/3.8.2
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/bison/blobs/sha256:f877d389e78b
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################### 100.0%
==> Fetching libyaml
==> Downloading https://ghcr.io/v2/homebrew/core/libyaml/manifests/0.2.5
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libyaml/blobs/sha256:11239e8f50
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################### 100.0%
==> Fetching gdbm
==> Downloading https://ghcr.io/v2/homebrew/core/gdbm/manifests/1.23
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/gdbm/blobs/sha256:a7321472cc9ff
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################### 100.0%
==> Fetching libffi
==> Downloading https://ghcr.io/v2/homebrew/core/libffi/manifests/3.4.4
######################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libffi/blobs/sha256:66d9dcb2182
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################### 100.0%
==> Pouring automake--1.16.5.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/automake/1.16.5: 131 files, 3.5MB
==> Running `brew cleanup automake`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
==> Pouring bison--3.8.2.arm64_ventura.bottle.tar.gz
==> Caveats
bison is keg-only, which means it was not symlinked into /opt/homebrew,
because macOS already provides this software and installing another version in
parallel can cause all kinds of trouble.

If you need to have bison first in your PATH, run:
  echo 'export PATH="/opt/homebrew/opt/bison/bin:$PATH"' >> ~/.zshrc

For compilers to find bison you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/bison/lib"
==> Summary
🍺  /opt/homebrew/Cellar/bison/3.8.2: 99 files, 3.7MB
==> Running `brew cleanup bison`...
==> Pouring libyaml--0.2.5.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libyaml/0.2.5: 10 files, 351.3KB
==> Running `brew cleanup libyaml`...
==> Pouring gdbm--1.23.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/gdbm/1.23: 24 files, 1MB
==> Running `brew cleanup gdbm`...
==> Pouring libffi--3.4.4.arm64_ventura.bottle.tar.gz
==> Caveats
libffi is keg-only, which means it was not symlinked into /opt/homebrew,
because macOS already provides this software and installing another version in
parallel can cause all kinds of trouble.

For compilers to find libffi you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/libffi/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/libffi/include"

For pkg-config to find libffi you may need to set:
  export PKG_CONFIG_PATH="/opt/homebrew/opt/libffi/lib/pkgconfig"
==> Summary
🍺  /opt/homebrew/Cellar/libffi/3.4.4: 17 files, 724.8KB
==> Running `brew cleanup libffi`...
==> Caveats
==> bison
bison is keg-only, which means it was not symlinked into /opt/homebrew,
because macOS already provides this software and installing another version in
parallel can cause all kinds of trouble.

If you need to have bison first in your PATH, run:
  echo 'export PATH="/opt/homebrew/opt/bison/bin:$PATH"' >> ~/.zshrc

For compilers to find bison you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/bison/lib"
==> libffi
libffi is keg-only, which means it was not symlinked into /opt/homebrew,
because macOS already provides this software and installing another version in
parallel can cause all kinds of trouble.

For compilers to find libffi you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/libffi/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/libffi/include"

For pkg-config to find libffi you may need to set:
  export PKG_CONFIG_PATH="/opt/homebrew/opt/libffi/lib/pkgconfig"
>>> Downloading https://cache.ruby-lang.org/pub/ruby/3.1/ruby-3.1.3.tar.xz into /Users/msd/src ...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 14.5M  100 14.5M    0     0   571k      0  0:00:26  0:00:26 --:--:--  633k
>>> Verifying ruby-3.1.3.tar.xz ...
>>> Extracting ruby-3.1.3.tar.xz to /Users/msd/src/ruby-3.1.3 ...
>>> Configuring ruby 3.1.3 ...
checking for ruby... /usr/bin/ruby
tool/config.guess already exists
tool/config.sub already exists
checking build system type... aarch64-apple-darwin22.3.0
checking host system type... aarch64-apple-darwin22.3.0
checking target system type... aarch64-apple-darwin22.3.0
checking for cl.exe... no
checking for clang... clang
checking for llvm-ar... no
checking for clang++... clang++
checking for llvm-nm... no
checking for llvm-objcopy... no
checking for llvm-objdump... no
checking for llvm-ranlib... no
checking for llvm-strip... no
checking for gcc... (cached) clang
checking whether the C compiler works... yes
checking for C compiler default output file name... a.out
checking for suffix of executables... 
checking whether we are cross compiling... no
checking for suffix of object files... o
checking whether the compiler supports GNU C... yes
checking whether clang accepts -g... yes
checking for clang option to enable C11 features... none needed
checking whether the compiler supports GNU C++... yes
checking whether clang++ accepts -g... yes
checking for clang++ option to enable C++11 features... none needed
checking how to run the C preprocessor... clang -E
checking for ranlib... ranlib
checking for gar... no
checking for ar... ar
checking for gas... no
checking for as... as
checking for gnm... no
checking for nm... nm
checking for gobjcopy... no
checking for objcopy... no
checking for gobjdump... no
checking for objdump... objdump
checking for gstrip... no
checking for strip... strip
checking for stdio.h... yes
checking for stdlib.h... yes
checking for string.h... yes
checking for inttypes.h... yes
checking for stdint.h... yes
checking for strings.h... yes
checking for sys/stat.h... yes
checking for sys/types.h... yes
checking for unistd.h... yes
checking for wchar.h... yes
checking for minix/config.h... no
checking for vfork.h... no
checking whether it is safe to define __EXTENSIONS__... yes
checking whether _XOPEN_SOURCE should be defined... no
checking if minimum required OS X version is supported... yes
checking whether the linker is GNU ld... no
checking whether clang -E accepts -o... yes
checking for clang... /usr/bin/clang
checking for real target cpu... arm64
checking arch option... 
checking for ar flags... rcu
checking whether ln -s works... yes
checking whether make sets $(MAKE)... yes
checking for a BSD-compatible install... /usr/bin/install -c
checking for a race-free mkdir -p...  -d
use 'mkdir -p' as MKDIR_P
checking for dtrace... dtrace
checking for dot... no
checking for doxygen... no
checking for pkg-config... pkg-config
checking whether it is Android... no
checking for cd using physical directory... cd -P
checking whether CFLAGS is valid... yes
checking whether LDFLAGS is valid... yes
checking whether ELF binaries are produced... Unknown option: 1
Usage: head [-options] <url>...
    -m <method>   use method for the request (default is 'HEAD')
    -f            make request even if head believes method is illegal
    -b <base>     Use the specified URL as base
    -t <timeout>  Set timeout value
    -i <time>     Set the If-Modified-Since header on the request
    -c <conttype> use this content-type for POST, PUT, CHECKIN
    -a            Use text mode for content I/O
    -p <proxyurl> use this as a proxy
    -P            don't load proxy settings from environment
    -H <header>   send this HTTP header (you can specify several)

    -u            Display method and URL before any response
    -U            Display request headers (implies -u)
    -s            Display response status code
    -S            Display response status chain
    -e            Display response headers
    -d            Do not display content
    -o <format>   Process HTML content in various ways

    -v            Show program version
    -h            Print this message

    -x            Extra debugging output
no
checking whether -Wl,-rpath,. is accepted as LDFLAGS... yes
checking whether -fdeclspec is accepted as LDFLAGS... yes
checking whether -fdeclspec is accepted as CXXFLAGS... yes
checking whether -Wdeprecated-declarations is accepted as CFLAGS... yes
checking whether -Wdivision-by-zero is accepted as CFLAGS... yes
checking whether -Wduplicated-cond is accepted as CFLAGS... no
checking whether -Wimplicit-function-declaration is accepted as CFLAGS... yes
checking whether -Wimplicit-int is accepted as CFLAGS... yes
checking whether -Wmisleading-indentation is accepted as CFLAGS... yes
checking whether -Wpointer-arith is accepted as CFLAGS... yes
checking whether -Wshorten-64-to-32 is accepted as CFLAGS... yes
checking whether -Wwrite-strings is accepted as CFLAGS... yes
checking whether -Wold-style-definition is accepted as CFLAGS... yes
checking whether -Wimplicit-fallthrough=0 is accepted as CFLAGS... no
checking whether -Wmissing-noreturn is accepted as CFLAGS... yes
checking whether -Wno-cast-function-type is accepted as CFLAGS... yes
checking whether -Wno-constant-logical-operand is accepted as CFLAGS... yes
checking whether -Wno-long-long is accepted as CFLAGS... yes
checking whether -Wno-missing-field-initializers is accepted as CFLAGS... yes
checking whether -Wno-overlength-strings is accepted as CFLAGS... yes
checking whether -Wno-packed-bitfield-compat is accepted as CFLAGS... no
checking whether -Wno-parentheses-equality is accepted as CFLAGS... yes
checking whether -Wno-self-assign is accepted as CFLAGS... yes
checking whether -Wno-tautological-compare is accepted as CFLAGS... yes
checking whether -Wno-unused-parameter is accepted as CFLAGS... yes
checking whether -Wno-unused-value is accepted as CFLAGS... yes
checking whether -Wsuggest-attribute=format is accepted as CFLAGS... no
checking whether -Wsuggest-attribute=noreturn is accepted as CFLAGS... no
checking whether -Wunused-variable is accepted as CFLAGS... yes
checking whether -diag-disable=175,188,1684,2259,2312 is accepted as CFLAGS... no
checking whether -Wextra-tokens is accepted as CFLAGS... yes
checking whether -Wundef is accepted as CFLAGS... yes
checking whether -Wall -Wextra is accepted as CFLAGS... yes
checking whether -Qunused-arguments is accepted as CFLAGS... yes
checking whether -O3 -D_FORTIFY_SOURCE=2 is accepted as CFLAGS... yes
checking whether -fstack-protector-strong is accepted as CFLAGS... yes
checking whether -fstack-protector-strong is accepted as LDFLAGS... yes
checking whether -Wl,--compress-debug-sections=zlib is accepted as LDFLAGS... no
checking whether -std=gnu99 is accepted as CFLAGS... yes
checking whether -fno-strict-overflow is accepted as CFLAGS... yes
checking whether -ggdb3 is accepted as CFLAGS... yes
checking whether -fvisibility=hidden is accepted as CFLAGS... yes
checking whether -fno-fast-math is accepted as CFLAGS... yes
checking whether -fexcess-precision=standard is accepted as CFLAGS... no
checking whether -fp-model precise is accepted as CFLAGS... no
checking whether compiler has statement and declarations in expressions... yes
checking whether syscall(2) is deprecated... yes
checking for broken crypt with 8bit chars... yes
checking for codesign... codesign
checking for dsymutil... dsymutil
checking for crt_externs.h... yes
checking whether CXXFLAGS is valid... yes
checking for crypt in -lcrypt... (cached) no
checking for dlopen in -ldl... yes
checking for shl_load in -ldld... no
checking for shutdown in -lsocket... no
checking for dirent.h that defines DIR... yes
checking for library containing opendir... none required
checking for _Bool... yes
checking for stdbool.h that conforms to C99... yes
checking for sys/wait.h that is POSIX.1 compatible... yes
checking for atomic.h... no
checking for copyfile.h... yes
checking for direct.h... no
checking for grp.h... yes
checking for fcntl.h... yes
checking for float.h... yes
checking for ieeefp.h... no
checking for intrinsics.h... no
checking for langinfo.h... yes
checking for limits.h... yes
checking for locale.h... yes
checking for malloc.h... no
checking for malloc/malloc.h... yes
checking for malloc_np.h... no
checking for net/socket.h... no
checking for process.h... no
checking for pwd.h... yes
checking for sanitizer/asan_interface.h... yes
checking for sanitizer/msan_interface.h... yes
checking for setjmpex.h... no
checking for stdalign.h... yes
checking for sys/attr.h... yes
checking for sys/eventfd.h... no
checking for sys/fcntl.h... yes
checking for sys/file.h... yes
checking for sys/id.h... no
checking for sys/ioctl.h... yes
checking for sys/mkdev.h... no
checking for sys/param.h... yes
checking for sys/prctl.h... no
checking for sys/random.h... yes
checking for sys/resource.h... yes
checking for sys/select.h... yes
checking for sys/sendfile.h... no
checking for sys/socket.h... yes
checking for sys/syscall.h... (cached) no
checking for sys/sysmacros.h... no
checking for sys/time.h... yes
checking for sys/times.h... yes
checking for sys/uio.h... yes
checking for sys/utime.h... no
checking for syscall.h... (cached) no
checking for time.h... yes
checking for ucontext.h... yes
checking for utime.h... yes
checking for gmp.h... no
checking for special C compiler options needed for large files... no
checking for _FILE_OFFSET_BITS value needed for large files... no
checking whether byte ordering is bigendian... no
checking for an ANSI C-conforming const... yes
checking whether char is unsigned... no
checking for inline... inline
checking for working volatile... yes
checking for typeof syntax and keyword spelling... typeof
checking for C/C++ restrict keyword... __restrict__
checking for long long... yes
checking for off_t... yes
checking char bit... 8
checking size of int... 4
checking size of short... 2
checking size of long... 8
checking size of long long... 8
checking size of __int64... 0
checking size of __int128... 16
checking size of off_t... 8
checking size of void*... 8
checking size of float... 4
checking size of double... 8
checking size of time_t... 8
checking size of clock_t... 8
checking packed struct attribute... x __attribute__((packed))
checking whether -Wno-address-of-packed-member is accepted as CFLAGS... yes
checking for printf prefix for long long... ll
checking for pid_t... yes
checking for convertible type of pid_t... INT
checking for uid_t... yes
checking for convertible type of uid_t... UINT
checking for gid_t... yes
checking for convertible type of gid_t... UINT
checking for time_t... yes
checking for convertible type of time_t... LONG
checking for dev_t... yes
checking for convertible type of dev_t... INT
checking for mode_t... yes
checking for convertible type of mode_t... USHORT
checking for rlim_t... yes
checking for convertible type of rlim_t... ULL
checking for off_t... (cached) yes
checking for convertible type of off_t... LL
checking for clockid_t... yes
checking for convertible type of clockid_t... UINT
checking for variable length macro... yes
checking if _Alignof() works... yes
checking for CONSTFUNC function attribute... __attribute__ ((__const__)) x
checking for PUREFUNC function attribute... __attribute__ ((__pure__)) x
checking for NORETURN function attribute... __attribute__ ((__noreturn__)) x
checking for DEPRECATED function attribute... __attribute__ ((__deprecated__)) x
checking for DEPRECATED_BY function attribute... __attribute__ ((__deprecated__("by "#n))) x
checking for NOINLINE function attribute... __attribute__ ((__noinline__)) x
checking for ALWAYS_INLINE function attribute... __attribute__ ((__always_inline__)) x
checking for NO_SANITIZE function attribute... __attribute__ ((__no_sanitize__(san))) x
checking for NO_SANITIZE_ADDRESS function attribute... __attribute__ ((__no_sanitize_address__)) x
checking for NO_ADDRESS_SAFETY_ANALYSIS function attribute... __attribute__ ((__no_address_safety_analysis__)) x
checking for WARN_UNUSED_RESULT function attribute... __attribute__ ((__warn_unused_result__)) x
checking for MAYBE_UNUSED function attribute... __attribute__ ((__unused__)) x
checking for ERRORFUNC function attribute... __attribute__ ((__error__ mesg)) x
checking for WARNINGFUNC function attribute... __attribute__ ((__warning__ mesg)) x
checking for WEAK function attribute... __attribute__ ((__weak__)) x
checking for __attribute__((__depreacted__(msg))) in C++... yes
checking for std::nullptr_t... yes
checking for FUNC_STDCALL function attribute... x
checking for FUNC_CDECL function attribute... __attribute__ ((__cdecl__)) x
checking for FUNC_FASTCALL function attribute... x
checking for FUNC_UNOPTIMIZED function attribute... x
checking for FUNC_MINIMIZED function attribute... x
checking for function alias... no
checking for __atomic builtins... yes
checking for __sync builtins... yes
checking for __builtin_unreachable... yes
checking for exported function attribute... __attribute__ ((__visibility__("default")))
checking for RUBY_FUNC_NONNULL function attribute... __attribute__ ((__nonnull__(n))) x
checking for function name string predefined identifier... __func__
checking if enum over int is allowed... yes
checking for clang options needed to detect all undeclared functions... none needed
checking whether sys_nerr is declared... yes
checking whether getenv is declared... yes
checking for size_t... yes
checking size of size_t... 8
checking size of ptrdiff_t... 8
checking size of dev_t... 4
checking for printf prefix for size_t... z
checking for printf prefix for ptrdiff_t... t
checking for struct stat.st_blksize... yes
checking for struct stat.st_blocks... yes
checking for struct stat.st_rdev... yes
checking size of struct stat.st_size... SIZEOF_OFF_T
checking size of struct stat.st_blocks... SIZEOF_OFF_T
checking size of struct stat.st_ino... SIZEOF_LONG
checking size of struct stat.st_dev... SIZEOF_DEV_T
checking size of struct stat.st_rdev... SIZEOF_DEV_T
checking for struct stat.st_atim... no
checking for struct stat.st_atimespec... yes
checking for struct stat.st_atimensec... no
checking for struct stat.st_mtim... no
checking for struct stat.st_mtimespec... yes
checking for struct stat.st_mtimensec... no
checking for struct stat.st_ctim... no
checking for struct stat.st_ctimespec... yes
checking for struct stat.st_ctimensec... no
checking for struct stat.st_birthtimespec... yes
checking for struct timeval... yes
checking size of struct timeval.tv_sec... SIZEOF_TIME_T
checking for struct timespec... yes
checking for struct timezone... yes
checking for fd_mask... yes
checking for int8_t... yes
checking size of int8_t... 1
checking for uint8_t... yes
checking size of uint8_t... 1
checking for int16_t... yes
checking size of int16_t... 2
checking for uint16_t... yes
checking size of uint16_t... 2
checking for int32_t... yes
checking size of int32_t... 4
checking for uint32_t... yes
checking size of uint32_t... 4
checking for int64_t... yes
checking size of int64_t... 8
checking for uint64_t... yes
checking size of uint64_t... 8
checking for int128_t... __int128
checking for uint128_t... unsigned __int128
checking for intptr_t... yes
checking size of intptr_t... 8
checking for uintptr_t... yes
checking size of uintptr_t... 8
checking for printf prefix for intptr_t... l
checking for ssize_t... yes
checking size of ssize_t... 8
checking for printf prefix for int64_t... ll
checking for stack end address... no
checking for grep that handles long lines and -e... /usr/bin/grep
checking for egrep... /usr/bin/grep -E
checking for uid_t in sys/types.h... (cached) yes
checking type of array argument to getgroups... (cached) gid_t
checking for working alloca.h... yes
checking for alloca... yes
checking for dynamic size alloca... ok
checking for working memcmp... yes
checking for dup... yes
checking for dup2... yes
checking for acosh... yes
checking for cbrt... yes
checking for crypt... yes
checking for erf... yes
checking for explicit_bzero... no
checking for ffs... yes
checking for flock... yes
checking for hypot... yes
checking for lgamma_r... yes
checking for memmove... yes
checking for nan... yes
checking for nextafter... yes
checking for setproctitle... no
checking for strchr... yes
checking for strerror... yes
checking for strlcat... yes
checking for strlcpy... yes
checking for strstr... yes
checking for tgamma... yes
checking for sys/pstat.h... no
checking for pid_t... (cached) yes
checking for fork... yes
checking for vfork... (cached) no
checking for working fork... yes
checking for __syscall... (cached) no
checking for _longjmp... yes
checking for arc4random_buf... yes
checking for atan2l... yes
checking for atan2f... yes
checking for chroot... yes
checking for chsize... no
checking for clock_gettime... yes
checking for copy_file_range... no
checking for cosh... yes
checking for crypt_r... no
checking for daemon... (cached) no
checking for dirfd... yes
checking for dl_iterate_phdr... no
checking for dlopen... yes
checking for dladdr... yes
checking for dup3... no
checking for eaccess... no
checking for endgrent... yes
checking for eventfd... no
checking for explicit_memset... no
checking for fcopyfile... yes
checking for fchmod... yes
checking for fchown... yes
checking for fcntl... yes
checking for fdatasync... (cached) no
checking for fdopendir... yes
checking for fgetattrlist... yes
checking for fmod... yes
checking for fstatat... yes
checking for fsync... yes
checking for ftruncate... yes
checking for ftruncate64... no
checking for getattrlist... yes
checking for getcwd... yes
checking for getentropy... yes
checking for getgidx... no
checking for getgrnam... yes
checking for getgrnam_r... yes
checking for getgroups... yes
checking for getlogin... yes
checking for getlogin_r... yes
checking for getpgid... yes
checking for getpgrp... yes
checking for getpriority... yes
checking for getpwnam... yes
checking for getpwnam_r... yes
checking for getpwuid... yes
checking for getpwuid_r... yes
checking for getrandom... no
checking for getresgid... no
checking for getresuid... no
checking for getrlimit... yes
checking for getsid... yes
checking for gettimeofday... yes
checking for getuidx... no
checking for gmtime_r... yes
checking for grantpt... yes
checking for initgroups... yes
checking for ioctl... yes
checking for isfinite... no
checking for issetugid... yes
checking for killpg... yes
checking for lchmod... yes
checking for lchown... yes
checking for link... yes
checking for llabs... yes
checking for lockf... yes
checking for log2... yes
checking for lstat... yes
checking for lutimes... yes
checking for malloc_usable_size... no
checking for malloc_size... yes
checking for mblen... yes
checking for memalign... no
checking for memset_s... yes
checking for writev... yes
checking for memrchr... no
checking for memmem... yes
checking for mkfifo... yes
checking for mknod... yes
checking for mktime... yes
checking for mmap... yes
checking for openat... yes
checking for pipe2... no
checking for poll... yes
checking for posix_fadvise... no
checking for posix_memalign... yes
checking for ppoll... no
checking for pread... yes
checking for pwrite... yes
checking for qsort_r... yes
checking for qsort_s... no
checking for readlink... yes
checking for realpath... yes
checking for round... yes
checking for sched_getaffinity... no
checking for seekdir... yes
checking for select_large_fdset... no
checking for sendfile... yes
checking for setegid... yes
checking for setenv... yes
checking for seteuid... yes
checking for setgid... yes
checking for setgroups... yes
checking for setpgid... yes
checking for setpgrp... yes
checking for setregid... yes
checking for setresgid... no
checking for setresuid... no
checking for setreuid... yes
checking for setrgid... yes
checking for setrlimit... yes
checking for setruid... yes
checking for setsid... yes
checking for setuid... yes
checking for shutdown... yes
checking for sigaction... yes
checking for sigaltstack... yes
checking for sigprocmask... yes
checking for sinh... yes
checking for spawnv... no
checking for symlink... yes
checking for syscall... (cached) no
checking for sysconf... yes
checking for tanh... yes
checking for telldir... yes
checking for timegm... yes
checking for times... yes
checking for truncate... yes
checking for truncate64... no
checking for unsetenv... yes
checking for utimensat... yes
checking for utimes... yes
checking for wait4... yes
checking for waitpid... yes
checking for __cospi... yes
checking for __sinpi... yes
checking if getcwd allocates buffer if NULL is given... yes
checking for __builtin_alloca_with_align... yes
checking for __builtin_assume_aligned... yes
checking for __builtin_bswap16... yes
checking for __builtin_bswap32... yes
checking for __builtin_bswap64... yes
checking for __builtin_popcount... yes
checking for __builtin_popcountll... yes
checking for __builtin_clz... yes
checking for __builtin_clzl... yes
checking for __builtin_clzll... yes
checking for __builtin_ctz... yes
checking for __builtin_ctzll... yes
checking for __builtin_add_overflow... yes
checking for __builtin_sub_overflow... yes
checking for __builtin_mul_overflow... yes
checking for __builtin_mul_overflow_p... no
checking for __builtin_constant_p... yes
checking for __builtin_choose_expr... yes
checking for __builtin_choose_expr_constant_p... yes
checking for __builtin_types_compatible_p... yes
checking for __builtin_trap... yes
checking for __builtin_expect... yes
checking whether qsort_r is GNU version... no
checking whether qsort_r is BSD version... yes
checking whether atan2 handles Inf as C99... yes
checking for clock_getres... yes
checking for timer_create in -lrt... no
checking for timer_settime in -lrt... no
checking for unsetenv returns a value... yes
checking whether struct tm is in sys/time.h or time.h... time.h
checking for struct tm.tm_zone... yes
checking for struct tm.tm_gmtoff... yes
checking for external int daylight... yes
checking for negative time_t for gmtime(3)... yes
checking for localtime(3) overflow correctly... yes
checking for sig_t... yes
checking whether right shift preserve sign bit... yes
checking for copy_file_range... no
checking whether _SC_CLK_TCK is supported... yes
checking stack growing direction on arm64... -1
checking native coroutine implementation for arm64-darwin22... arm64
checking for pthread_create in -lthr... no
checking for pthread_create in -lpthread... yes
checking for pthread_np.h... no
checking whether pthread_t is scalar type... yes
checking for sched_yield... yes
checking for pthread_attr_setinheritsched... yes
checking for pthread_attr_get_np... no
checking for pthread_attr_getstack... yes
checking for pthread_attr_getguardsize... yes
checking for pthread_get_stackaddr_np... yes
checking for pthread_get_stacksize_np... yes
checking for thr_stksegment... no
checking for pthread_stackseg_np... no
checking for pthread_getthrds_np... no
checking for pthread_condattr_setclock... no
checking for pthread_setname_np... yes
checking for pthread_set_name_np... no
checking for pthread_sigmask... yes
checking for pthread_getattr_np... no
checking arguments of pthread_setname_np... (name)
checking if mcontext_t is a pointer... yes
checking for getcontext... (cached) no
checking for setcontext... (cached) no
checking if fork works with pthread... yes
checking for sys/user.h... yes
checking whether PAGE_SIZE is compile-time const... no
checking ioctl request type... unsigned long
checking for mach-o/loader.h... yes
checking whether OS depend dynamic link works... yes
checking whether -Wl,-multiply_defined,suppress is accepted as LDFLAGS... yes
checking whether -Wl,-multiply_defined,suppress is accepted for bundle... yes
checking whether -Wl,-undefined,dynamic_lookup is accepted as LDFLAGS... no
checking for libproc.h... yes
checking for execinfo.h... yes
checking for backtrace in -lexecinfo... no
checking for libunwind.h... yes
checking for backtrace... yes
checking for broken backtrace... yes
checking for valgrind/memcheck.h... no
checking for strip flags... -A -n
checking whether -fPIE is accepted as CFLAGS... yes
checking whether -pie is accepted as LDFLAGS... no
checking whether -Wl,-pie is accepted as LDFLAGS... yes
checking whether wrapper for DYLD_FALLBACK_LIBRARY_PATH is needed... yes
checking whether dtrace USDT is available... yes(-xnolibs)
checking whether dtrace needs post processing... no
checking for __builtin_setjmp... (cached) no
checking for _setjmpex as a macro or function... no
checking for _setjmp as a macro or function... yes
checking for sigsetjmp as a macro or function... yes
checking for setjmp type... sigsetjmp,0
checking for prefix of external symbols... _
checking for pthread.h... yes
checking if make is GNU make... yes
.ext/include/arm64-darwin22/ruby/config.h updated
configure: ruby library version = 3.1.0
configure: creating ./config.status
config.status: creating GNUmakefile
config.status: creating Makefile
---
Configuration summary for ruby version 3.1.3

   * Installation prefix: /Users/msd/.rubies/ruby-3.1.3
   * exec prefix:         ${prefix}
   * arch:                arm64-darwin22
   * site arch:           ${arch}
   * RUBY_BASE_NAME:      ruby
   * ruby lib prefix:     ${libdir}/${RUBY_BASE_NAME}
   * site libraries path: ${rubylibprefix}/${sitearch}
   * vendor path:         ${rubylibprefix}/vendor_ruby
   * target OS:           darwin22
   * compiler:            clang
   * with pthread:        yes
   * with coroutine:      arm64
   * enable shared libs:  no
   * dynamic library ext: bundle
   * CFLAGS:              -fdeclspec ${optflags} ${debugflags} ${warnflags}
   * LDFLAGS:             -L. -fstack-protector-strong \
                          -L/opt/homebrew/opt/openssl@1.1/lib \
                          -L/opt/homebrew/opt/readline/lib \
                          -L/opt/homebrew/opt/libyaml/lib \
                          -L/opt/homebrew/opt/gdbm/lib -L/usr/local/lib
   * DLDFLAGS:            -L/opt/homebrew/opt/openssl@1.1/lib \
                          -L/opt/homebrew/opt/readline/lib \
                          -L/opt/homebrew/opt/libyaml/lib \
                          -L/opt/homebrew/opt/gdbm/lib \
                          -Wl,-multiply_defined,suppress
   * optflags:            -O3 -fno-fast-math
   * debugflags:          -ggdb3
   * warnflags:           -Wall -Wextra -Wdeprecated-declarations \
                          -Wdivision-by-zero \
                          -Wimplicit-function-declaration -Wimplicit-int \
                          -Wmisleading-indentation -Wpointer-arith \
                          -Wshorten-64-to-32 -Wwrite-strings \
                          -Wold-style-definition -Wmissing-noreturn \
                          -Wno-cast-function-type \
                          -Wno-constant-logical-operand -Wno-long-long \
                          -Wno-missing-field-initializers \
                          -Wno-overlength-strings -Wno-parentheses-equality \
                          -Wno-self-assign -Wno-tautological-compare \
                          -Wno-unused-parameter -Wno-unused-value \
                          -Wunused-variable -Wextra-tokens -Wundef
   * strip command:       strip -A -n
   * install doc:         rdoc
   * JIT support:         yes
   * man page type:       doc
   * BASERUBY -v:         ruby 2.6.10p210 (2022-04-12 revision 67958) \
                          [universal.arm64e-darwin22]

---
>>> Cleaning ruby 3.1.3 ...
cleaning rdoc
cleaning HTML
cleaning capi
>>> Compiling ruby 3.1.3 ...
	BASERUBY = /usr/bin/ruby --disable=gems
	CC = clang
	LD = clang
	LDSHARED = clang -dynamiclib
	CFLAGS = -fdeclspec -O3 -fno-fast-math -ggdb3 -Wall -Wextra -Wdeprecated-declarations -Wdivision-by-zero -Wimplicit-function-declaration -Wimplicit-int -Wmisleading-indentation -Wpointer-arith -Wshorten-64-to-32 -Wwrite-strings -Wold-style-definition -Wmissing-noreturn -Wno-cast-function-type -Wno-constant-logical-operand -Wno-long-long -Wno-missing-field-initializers -Wno-overlength-strings -Wno-parentheses-equality -Wno-self-assign -Wno-tautological-compare -Wno-unused-parameter -Wno-unused-value -Wunused-variable -Wextra-tokens -Wundef -std=gnu99  -pipe 
	XCFLAGS = -D_FORTIFY_SOURCE=2 -fstack-protector-strong -fno-strict-overflow -fvisibility=hidden -DRUBY_EXPORT -fPIE -I. -I.ext/include/arm64-darwin22 -I./include -I. -I./enc/unicode/13.0.0
	CPPFLAGS = -I/opt/homebrew/opt/openssl@1.1/include -I/opt/homebrew/opt/readline/include -I/opt/homebrew/opt/libyaml/include -I/opt/homebrew/opt/gdbm/include -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT   
	DLDFLAGS = -L/opt/homebrew/opt/openssl@1.1/lib -L/opt/homebrew/opt/readline/lib -L/opt/homebrew/opt/libyaml/lib -L/opt/homebrew/opt/gdbm/lib -Wl,-multiply_defined,suppress -fstack-protector-strong -Wl,-pie -framework CoreFoundation  
	SOLIBS = -lpthread -ldl -lobjc
	LANG = 
	LC_ALL = 
	LC_CTYPE = UTF-8
	MFLAGS = 
Apple clang version 14.0.0 (clang-1400.0.29.202)
Target: arm64-apple-darwin22.3.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
compiling ./main.c
compiling dmydln.c
compiling miniinit.c
compiling dmyext.c
translating probes probes.d
. ./vm_opts.h
compiling array.c
compiling ast.c
compiling bignum.c
compiling class.c
compiling compar.c
compiling compile.c
compiling complex.c
compiling cont.c
compiling debug.c
compiling debug_counter.c
compiling dir.c
compiling dln_find.c
compiling encoding.c
compiling enum.c
compiling enumerator.c
compiling error.c
compiling eval.c
compiling file.c
compiling gc.c
compiling hash.c
compiling inits.c
compiling io.c
compiling io_buffer.c
compiling iseq.c
compiling load.c
compiling marshal.c
compiling math.c
compiling memory_view.c
making mjit_config.h
compiling mjit.c
compiling mjit_compile.c
compiling node.c
compiling numeric.c
compiling object.c
compiling pack.c
compiling parse.c
compiling proc.c
compiling process.c
compiling ractor.c
compiling random.c
compiling range.c
compiling rational.c
compiling re.c
compiling regcomp.c
compiling regenc.c
compiling regerror.c
compiling regexec.c
compiling regparse.c
compiling regsyntax.c
compiling ruby.c
compiling scheduler.c
compiling signal.c
compiling sprintf.c
compiling st.c
compiling strftime.c
compiling string.c
compiling struct.c
compiling symbol.c
compiling thread.c
compiling time.c
compiling transcode.c
compiling transient_heap.c
compiling util.c
compiling variable.c
./revision.h unchanged
compiling version.c
compiling vm.c
compiling vm_backtrace.c
compiling vm_dump.c
compiling vm_sync.c
compiling vm_trace.c
compiling yjit.c
assembling coroutine/arm64/Context.S
compiling enc/ascii.c
compiling enc/us_ascii.c
compiling enc/unicode.c
compiling enc/utf_8.c
compiling enc/trans/newline.c
compiling ./missing/explicit_bzero.c
compiling ./missing/setproctitle.c
compiling addr2line.c
compiling dmyenc.c
linking miniruby
/bin/sh ./tool/ifchange "--timestamp=.rbconfig.time" rbconfig.rb rbconfig.tmp
rbconfig.rb updated
generating encdb.h
encdb.h updated
generating arm64-darwin22-fake.rb
arm64-darwin22-fake.rb updated
generating enc.mk
making srcs under enc
make[1]: Nothing to be done for `srcs'.
generating transdb.h
transdb.h updated
compiling dln.c
compiling localeinit.c
creating verconf.h
verconf.h updated
compiling loadpath.c
builtin_binary.inc updated
compiling builtin.c
linking static-library libruby.3.1-static.a
generating makefiles ext/configure-ext.mk
ext/configure-ext.mk updated
configuring -test-/RUBY_ALIGNOF
configuring -test-/arith_seq/extract
configuring -test-/array/concat
configuring -test-/array/resize
configuring -test-/bignum
configuring -test-/bug-14834
configuring -test-/bug-3571
configuring -test-/bug-5832
configuring -test-/bug_reporter
configuring -test-/class
configuring -test-/cxxanyargs
configuring -test-/debug
configuring -test-/dln/empty
configuring -test-/econv
configuring -test-/enumerator_kw
configuring -test-/exception
configuring -test-/fatal
configuring -test-/file
configuring -test-/float
configuring -test-/funcall
configuring -test-/gvl/call_without_gvl
configuring -test-/hash
configuring -test-/integer
configuring -test-/iseq_load
configuring -test-/iter
configuring -test-/load/dot.dot
configuring -test-/load/protect
configuring -test-/marshal/compat
configuring -test-/marshal/internal_ivar
configuring -test-/marshal/usr
configuring -test-/memory_status
configuring -test-/memory_view
configuring -test-/method
configuring -test-/notimplement
configuring -test-/num2int
configuring -test-/path_to_class
configuring -test-/popen_deadlock
configuring -test-/postponed_job
configuring -test-/printf
configuring -test-/proc
configuring -test-/random
configuring -test-/rational
configuring -test-/rb_call_super_kw
configuring -test-/recursion
configuring -test-/regexp
configuring -test-/scan_args
configuring -test-/st/foreach
configuring -test-/st/numhash
configuring -test-/st/update
configuring -test-/string
configuring -test-/struct
configuring -test-/symbol
configuring -test-/thread_fd
configuring -test-/time
configuring -test-/tracepoint
configuring -test-/typeddata
configuring -test-/vm
configuring -test-/wait
configuring bigdecimal
configuring cgi/escape
configuring continuation
configuring coverage
configuring date
configuring digest
configuring digest/bubblebabble
configuring digest/md5
configuring digest/rmd160
configuring digest/sha1
configuring digest/sha2
configuring etc
configuring fcntl
configuring fiddle
configuring io/console
configuring io/nonblock
configuring io/wait
configuring json
configuring json/generator
configuring json/parser
configuring monitor
configuring nkf
configuring objspace
configuring openssl
configuring pathname
configuring psych
configuring pty
configuring racc/cparse
configuring rbconfig/sizeof
configuring readline
configuring ripper
configuring rubyvm
configuring socket
configuring stringio
configuring strscan
configuring syslog
configuring zlib
configuring debug-1.6.3/ext/debug
configuring rbs-2.7.0/ext/rbs_extension
generating makefile exts.mk
exts.mk updated
compiling c.c
compiling cpp.cpp
linking shared-object -test-/RUBY_ALIGNOF.bundle
compiling extract.c
linking shared-object -test-/arith_seq/extract.bundle
compiling to_ary_concat.c
linking shared-object -test-/array/to_ary_concat.bundle
compiling resize.c
linking shared-object -test-/array/resize.bundle
compiling big2str.c
compiling bigzero.c
compiling div.c
compiling init.c
compiling intpack.c
compiling mul.c
compiling str2big.c
linking shared-object -test-/bignum.bundle
compiling bug-14384.c
linking shared-object -test-/bug_14834.bundle
compiling bug.c
linking shared-object -test-/bug_3571.bundle
compiling bug.c
linking shared-object -test-/bug_5832.bundle
compiling bug_reporter.c
linking shared-object -test-/bug_reporter.bundle
compiling class2name.c
compiling init.c
linking shared-object -test-/class.bundle
compiling cxxanyargs.cpp
linking shared-object -test-/cxxanyargs.bundle
compiling init.c
compiling inspector.c
compiling profile_frames.c
linking shared-object -test-/debug.bundle
compiling empty.c
linking shared-object -test-/dln/empty.bundle
compiling append.c
compiling init.c
linking shared-object -test-/econv.bundle
compiling enumerator_kw.c
linking shared-object -test-/enumerator_kw.bundle
compiling dataerror.c
compiling enc_raise.c
compiling ensured.c
compiling init.c
linking shared-object -test-/exception.bundle
compiling rb_fatal.c
linking shared-object -test-/fatal/rb_fatal.bundle
compiling fs.c
compiling init.c
compiling stat.c
linking shared-object -test-/file.bundle
compiling init.c
compiling nextafter.c
linking shared-object -test-/float.bundle
compiling funcall.c
linking shared-object -test-/funcall.bundle
compiling call_without_gvl.c
linking shared-object -test-/gvl/call_without_gvl.bundle
compiling delete.c
compiling init.c
linking shared-object -test-/hash.bundle
compiling core_ext.c
compiling init.c
compiling my_integer.c
linking shared-object -test-/integer.bundle
compiling iseq_load.c
linking shared-object -test-/iseq_load.bundle
compiling break.c
compiling init.c
compiling yield.c
linking shared-object -test-/iter.bundle
compiling dot.dot.c
linking shared-object -test-/load/dot.dot.bundle
compiling protect.c
linking shared-object -test-/load/protect.bundle
compiling usrcompat.c
linking shared-object -test-/marshal/compat.bundle
compiling internal_ivar.c
linking shared-object -test-/marshal/internal_ivar.bundle
compiling usrmarshal.c
linking shared-object -test-/marshal/usr.bundle
compiling memory_status.c
linking shared-object -test-/memory_status.bundle
compiling memory_view.c
linking shared-object -test-/memory_view.bundle
compiling arity.c
compiling init.c
linking shared-object -test-/method.bundle
compiling bug.c
linking shared-object -test-/notimplement.bundle
compiling num2int.c
linking shared-object -test-/num2int.bundle
compiling path_to_class.c
linking shared-object -test-/path_to_class.bundle
compiling postponed_job.c
linking shared-object -test-/postponed_job.bundle
compiling printf.c
linking shared-object -test-/printf.bundle
compiling init.c
compiling receiver.c
compiling super.c
linking shared-object -test-/proc.bundle
compiling init.c
compiling loop.c
linking shared-object -test-/random.bundle
compiling rat.c
linking shared-object -test-/rational.bundle
compiling rb_call_super_kw.c
linking shared-object -test-/rb_call_super_kw.bundle
compiling recursion.c
linking shared-object -test-/recursion.bundle
compiling init.c
compiling parse_depth_limit.c
linking shared-object -test-/regexp.bundle
compiling scan_args.c
linking shared-object -test-/scan_args.bundle
compiling foreach.c
linking shared-object -test-/st/foreach.bundle
compiling numhash.c
linking shared-object -test-/st/numhash.bundle
compiling update.c
linking shared-object -test-/st/update.bundle
compiling capacity.c
compiling coderange.c
compiling cstr.c
compiling ellipsize.c
compiling enc_associate.c
compiling enc_str_buf_cat.c
compiling fstring.c
compiling init.c
compiling modify.c
compiling new.c
compiling nofree.c
compiling normalize.c
compiling qsort.c
compiling rb_interned_str.c
compiling rb_str_dup.c
compiling set_len.c
linking shared-object -test-/string.bundle
compiling duplicate.c
compiling init.c
compiling len.c
compiling member.c
linking shared-object -test-/struct.bundle
compiling init.c
compiling type.c
linking shared-object -test-/symbol.bundle
compiling thread_fd.c
linking shared-object -test-/thread_fd.bundle
compiling init.c
compiling leap_second.c
compiling new.c
linking shared-object -test-/time.bundle
compiling gc_hook.c
compiling tracepoint.c
linking shared-object -test-/tracepoint.bundle
compiling typeddata.c
linking shared-object -test-/typeddata.bundle
compiling at_exit.c
linking shared-object -test-/vm/at_exit.bundle
compiling wait.c
linking shared-object -test-/wait.bundle
compiling bigdecimal.c
compiling missing.c
linking shared-object bigdecimal.bundle
installing default bigdecimal libraries
compiling escape.c
linking shared-object cgi/escape.bundle
compiling continuation.c
linking shared-object continuation.bundle
compiling coverage.c
linking shared-object coverage.bundle
installing default coverage libraries
compiling date_core.c
compiling date_parse.c
compiling date_strftime.c
compiling date_strptime.c
linking shared-object date_core.bundle
installing default date_core libraries
compiling digest.c
linking shared-object digest.bundle
installing digest libraries
installing default digest libraries
compiling bubblebabble.c
linking shared-object digest/bubblebabble.bundle
compiling md5init.c
compiling md5.c
linking shared-object digest/md5.bundle
compiling rmd160init.c
compiling rmd160.c
linking shared-object digest/rmd160.bundle
compiling sha1init.c
compiling sha1.c
linking shared-object digest/sha1.bundle
compiling sha2init.c
compiling sha2.c
linking shared-object digest/sha2.bundle
installing default sha2 libraries
compiling etc.c
linking shared-object etc.bundle
compiling fcntl.c
linking shared-object fcntl.bundle
compiling closure.c
compiling conversions.c
compiling fiddle.c
compiling function.c
compiling handle.c
compiling memory_view.c
compiling pinned.c
compiling pointer.c
linking shared-object fiddle.bundle
installing default fiddle libraries
compiling console.c
linking shared-object io/console.bundle
installing default console libraries
compiling nonblock.c
linking shared-object io/nonblock.bundle
compiling wait.c
linking shared-object io/wait.bundle
installing default libraries
compiling generator.c
linking shared-object json/ext/generator.bundle
compiling parser.c
linking shared-object json/ext/parser.bundle
compiling monitor.c
linking shared-object monitor.bundle
installing default monitor libraries
compiling nkf.c
linking shared-object nkf.bundle
installing default nkf libraries
compiling object_tracing.c
compiling objspace.c
compiling objspace_dump.c
linking shared-object objspace.bundle
installing default objspace libraries
compiling openssl_missing.c
compiling ossl.c
compiling ossl_asn1.c
compiling ossl_bio.c
compiling ossl_bn.c
compiling ossl_cipher.c
compiling ossl_config.c
compiling ossl_digest.c
compiling ossl_engine.c
compiling ossl_hmac.c
compiling ossl_kdf.c
compiling ossl_ns_spki.c
compiling ossl_ocsp.c
compiling ossl_pkcs12.c
compiling ossl_pkcs7.c
compiling ossl_pkey.c
compiling ossl_pkey_dh.c
compiling ossl_pkey_dsa.c
compiling ossl_pkey_ec.c
compiling ossl_pkey_rsa.c
compiling ossl_rand.c
compiling ossl_ssl.c
compiling ossl_ssl_session.c
compiling ossl_ts.c
compiling ossl_x509.c
compiling ossl_x509attr.c
compiling ossl_x509cert.c
compiling ossl_x509crl.c
compiling ossl_x509ext.c
compiling ossl_x509name.c
compiling ossl_x509req.c
compiling ossl_x509revoked.c
compiling ossl_x509store.c
linking shared-object openssl.bundle
ld: warning: directory not found for option '-L@@XAMPP_COMMON_ROOTDIR@@/lib'
installing default openssl libraries
compiling pathname.c
linking shared-object pathname.bundle
installing default pathname libraries
compiling psych.c
compiling psych_emitter.c
compiling psych_parser.c
compiling psych_to_ruby.c
compiling psych_yaml_tree.c
linking shared-object psych.bundle
installing default psych libraries
compiling pty.c
linking shared-object pty.bundle
installing default pty libraries
compiling cparse.c
linking shared-object racc/cparse.bundle
compiling sizes.c
compiling limits.c
linking shared-object rbconfig/sizeof.bundle
compiling readline.c
linking shared-object readline.bundle
compiling ripper.c
linking shared-object ripper.bundle
installing default ripper libraries
checking ../.././parse.y and ../.././ext/ripper/eventids2.c
installing default libraries
compiling init.c
compiling constants.c
compiling basicsocket.c
compiling socket.c
compiling ipsocket.c
compiling tcpsocket.c
compiling tcpserver.c
compiling sockssocket.c
compiling udpsocket.c
compiling unixsocket.c
compiling unixserver.c
compiling option.c
compiling ancdata.c
compiling raddrinfo.c
compiling ifaddr.c
linking shared-object socket.bundle
installing default socket libraries
compiling stringio.c
linking shared-object stringio.bundle
compiling strscan.c
linking shared-object strscan.bundle
compiling syslog.c
linking shared-object syslog.bundle
installing default syslog libraries
compiling zlib.c
linking shared-object zlib.bundle
compiling debug.c
compiling iseq_collector.c
linking shared-object debug/debug.bundle
compiling constants.c
compiling lexer.c
compiling lexstate.c
compiling location.c
compiling main.c
compiling parser.c
compiling parserstate.c
compiling ruby_objs.c
compiling unescape.c
linking shared-object rbs_extension.bundle
./revision.h unchanged
config.status: creating ruby-runner.h
linking ruby
make[1]: Nothing to be done for `note'.
making enc
compiling ./enc/encdb.c
linking encoding encdb.bundle
compiling ./enc/big5.c
linking encoding big5.bundle
compiling ./enc/cesu_8.c
linking encoding cesu_8.bundle
compiling ./enc/cp949.c
linking encoding cp949.bundle
compiling ./enc/emacs_mule.c
linking encoding emacs_mule.bundle
compiling ./enc/euc_jp.c
linking encoding euc_jp.bundle
compiling ./enc/euc_kr.c
linking encoding euc_kr.bundle
compiling ./enc/euc_tw.c
linking encoding euc_tw.bundle
compiling ./enc/gb2312.c
linking encoding gb2312.bundle
compiling ./enc/gb18030.c
linking encoding gb18030.bundle
compiling ./enc/gbk.c
linking encoding gbk.bundle
compiling ./enc/iso_8859_1.c
linking encoding iso_8859_1.bundle
compiling ./enc/iso_8859_2.c
linking encoding iso_8859_2.bundle
compiling ./enc/iso_8859_3.c
linking encoding iso_8859_3.bundle
compiling ./enc/iso_8859_4.c
linking encoding iso_8859_4.bundle
compiling ./enc/iso_8859_5.c
linking encoding iso_8859_5.bundle
compiling ./enc/iso_8859_6.c
linking encoding iso_8859_6.bundle
compiling ./enc/iso_8859_7.c
linking encoding iso_8859_7.bundle
compiling ./enc/iso_8859_8.c
linking encoding iso_8859_8.bundle
compiling ./enc/iso_8859_9.c
linking encoding iso_8859_9.bundle
compiling ./enc/iso_8859_10.c
linking encoding iso_8859_10.bundle
compiling ./enc/iso_8859_11.c
linking encoding iso_8859_11.bundle
compiling ./enc/iso_8859_13.c
linking encoding iso_8859_13.bundle
compiling ./enc/iso_8859_14.c
linking encoding iso_8859_14.bundle
compiling ./enc/iso_8859_15.c
linking encoding iso_8859_15.bundle
compiling ./enc/iso_8859_16.c
linking encoding iso_8859_16.bundle
compiling ./enc/koi8_r.c
linking encoding koi8_r.bundle
compiling ./enc/koi8_u.c
linking encoding koi8_u.bundle
compiling ./enc/shift_jis.c
linking encoding shift_jis.bundle
compiling ./enc/utf_16be.c
linking encoding utf_16be.bundle
compiling ./enc/utf_16le.c
linking encoding utf_16le.bundle
compiling ./enc/utf_32be.c
linking encoding utf_32be.bundle
compiling ./enc/utf_32le.c
linking encoding utf_32le.bundle
compiling ./enc/windows_31j.c
linking encoding windows_31j.bundle
compiling ./enc/windows_1250.c
linking encoding windows_1250.bundle
compiling ./enc/windows_1251.c
linking encoding windows_1251.bundle
compiling ./enc/windows_1252.c
linking encoding windows_1252.bundle
compiling ./enc/windows_1253.c
linking encoding windows_1253.bundle
compiling ./enc/windows_1254.c
linking encoding windows_1254.bundle
compiling ./enc/windows_1257.c
linking encoding windows_1257.bundle
making trans
compiling ./enc/trans/transdb.c
linking transcoder transdb.bundle
compiling ./enc/trans/big5.c
linking transcoder big5.bundle
compiling ./enc/trans/cesu_8.c
linking transcoder cesu_8.bundle
compiling ./enc/trans/chinese.c
linking transcoder chinese.bundle
compiling ./enc/trans/ebcdic.c
linking transcoder ebcdic.bundle
compiling ./enc/trans/emoji.c
linking transcoder emoji.bundle
compiling ./enc/trans/emoji_iso2022_kddi.c
linking transcoder emoji_iso2022_kddi.bundle
compiling ./enc/trans/emoji_sjis_docomo.c
linking transcoder emoji_sjis_docomo.bundle
compiling ./enc/trans/emoji_sjis_kddi.c
linking transcoder emoji_sjis_kddi.bundle
compiling ./enc/trans/emoji_sjis_softbank.c
linking transcoder emoji_sjis_softbank.bundle
compiling ./enc/trans/escape.c
linking transcoder escape.bundle
compiling ./enc/trans/gb18030.c
linking transcoder gb18030.bundle
compiling ./enc/trans/gbk.c
linking transcoder gbk.bundle
compiling ./enc/trans/iso2022.c
linking transcoder iso2022.bundle
compiling ./enc/trans/japanese.c
linking transcoder japanese.bundle
compiling ./enc/trans/japanese_euc.c
linking transcoder japanese_euc.bundle
compiling ./enc/trans/japanese_sjis.c
linking transcoder japanese_sjis.bundle
compiling ./enc/trans/korean.c
linking transcoder korean.bundle
compiling ./enc/trans/single_byte.c
linking transcoder single_byte.bundle
compiling ./enc/trans/utf8_mac.c
linking transcoder utf8_mac.bundle
compiling ./enc/trans/utf_16_32.c
linking transcoder utf_16_32.bundle
making encs
make[1]: Nothing to be done for `encs'.
building rb_mjit_header.h
rb_mjit_header.h updated
building .ext/include/arm64-darwin22/rb_mjit_min_header-3.1.3.h
transform_mjit_header: making external definition static inline: rb_vm_lvar_exposed, Init_vm_stack_canary, rb_vm_opt_cfunc_p, rb_vm_opt_mod, rb_vm_ic_hit_p, rb_vm_splat_array, rb_vm_defined, rb_vm_cc_general, rb_aliased_callable_method_entry, rb_find_defined_class_by_owner, rb_vm_call_ivar_attrset_p, rb_iseq_only_kwparam_p, rb_iseq_only_optparam_p, rb_vm_set_ivar_idx, rb_vm_setinstancevariable, rb_vm_setclassvariable, rb_vm_getclassvariable, rb_vm_rewrite_cref, rb_vm_get_cref, rb_vm_block_ep_update, rb_vm_cref_new_toplevel, rb_vm_cref_dup_without_refinements, rb_vm_frame_block_handler, rb_vm_cframe_keyword_p, rb_vm_ep_local_ep
transform_mjit_header: making declaration static inline: rb_vm_lvar_exposed, rb_vm_lvar_exposed, Init_vm_stack_canary, rb_vm_rewrite_cref, rb_vm_frame_block_handler, rb_vm_block_ep_update, rb_vm_ep_local_ep
transform_mjit_header: SKIPPED to transform: __sigbits, isspecial, isrune, isphonogram, isnumber, isideogram, ishexnumber, digittoint, toupper, tolower, toascii, isxdigit, isupper, isspace, ispunct, isprint, islower, isgraph, isdigit, iscntrl, isblank, isalpha, isalnum, __wcwidth, __isctype, __istype, isascii, __sincospi, __sincospif, __sincos, __sincosf, __inline_isnormall, __inline_isnormald, __inline_isnormalf, __inline_signbitl, __inline_signbitd, __inline_signbitf, __inline_isnanl, __inline_isnand, __inline_isnanf, __inline_isinfl, __inline_isinfd, __inline_isinff, __inline_isfinitel, __inline_isfinited, __inline_isfinitef, __darwin_fd_clr, __darwin_fd_set, __darwin_fd_isset, __darwin_check_fd_set, __sputc
ln -sf ../../../.ext/include/arm64-darwin22/rb_mjit_min_header-3.1.3.h include/ruby-3.1.0/arm64-darwin22/rb_mjit_min_header-3.1.3.h
Generating RDoc documentation
Parsing sources...
100% [918/918]  yjit_utils.c

Generating RI format into /Users/msd/src/ruby-3.1.3/.ext/rdoc...

  Files:        918

  Classes:      922 ( 261 undocumented)
  Modules:      206 (  58 undocumented)
  Constants:   2124 ( 521 undocumented)
  Attributes:   991 ( 293 undocumented)
  Methods:     9525 (2201 undocumented)

  Total:      13768 (3334 undocumented)
   75.78% documented

  Elapsed: 12.0s

>>> Installing ruby 3.1.3 ...
	BASERUBY = /usr/bin/ruby --disable=gems
	CC = clang
	LD = clang
	LDSHARED = clang -dynamiclib
	CFLAGS = -fdeclspec -O3 -fno-fast-math -ggdb3 -Wall -Wextra -Wdeprecated-declarations -Wdivision-by-zero -Wimplicit-function-declaration -Wimplicit-int -Wmisleading-indentation -Wpointer-arith -Wshorten-64-to-32 -Wwrite-strings -Wold-style-definition -Wmissing-noreturn -Wno-cast-function-type -Wno-constant-logical-operand -Wno-long-long -Wno-missing-field-initializers -Wno-overlength-strings -Wno-parentheses-equality -Wno-self-assign -Wno-tautological-compare -Wno-unused-parameter -Wno-unused-value -Wunused-variable -Wextra-tokens -Wundef -std=gnu99  -pipe 
	XCFLAGS = -D_FORTIFY_SOURCE=2 -fstack-protector-strong -fno-strict-overflow -fvisibility=hidden -DRUBY_EXPORT -fPIE -I. -I.ext/include/arm64-darwin22 -I./include -I. -I./enc/unicode/13.0.0
	CPPFLAGS = -I/opt/homebrew/opt/openssl@1.1/include -I/opt/homebrew/opt/readline/include -I/opt/homebrew/opt/libyaml/include -I/opt/homebrew/opt/gdbm/include -D_XOPEN_SOURCE -D_DARWIN_C_SOURCE -D_DARWIN_UNLIMITED_SELECT -D_REENTRANT   
	DLDFLAGS = -L/opt/homebrew/opt/openssl@1.1/lib -L/opt/homebrew/opt/readline/lib -L/opt/homebrew/opt/libyaml/lib -L/opt/homebrew/opt/gdbm/lib -Wl,-multiply_defined,suppress -fstack-protector-strong -Wl,-pie -framework CoreFoundation  
	SOLIBS = -lpthread -ldl -lobjc
	LANG = 
	LC_ALL = 
	LC_CTYPE = UTF-8
	MFLAGS = 
Apple clang version 14.0.0 (clang-1400.0.29.202)
Target: arm64-apple-darwin22.3.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
./revision.h unchanged
generating enc.mk
making srcs under enc
make[1]: Nothing to be done for `srcs'.
generating transdb.h
transdb.h unchanged
generating makefiles ext/configure-ext.mk
ext/configure-ext.mk unchanged
./revision.h unchanged
make[1]: Nothing to be done for `note'.
making enc
make[1]: Nothing to be done for `enc'.
making trans
make[1]: Nothing to be done for `./enc/trans'.
making encs
make[1]: Nothing to be done for `encs'.
Generating RDoc documentation
Parsing sources...
100% [918/918]  yjit_utils.c

Generating RI format into /Users/msd/src/ruby-3.1.3/.ext/rdoc...

  Files:        918

  Classes:      922 ( 261 undocumented)
  Modules:      206 (  58 undocumented)
  Constants:   2124 ( 521 undocumented)
  Attributes:   991 ( 293 undocumented)
  Methods:     9525 (2200 undocumented)

  Total:      13768 (3333 undocumented)
   75.79% documented

  Elapsed: 12.0s

Extracting bundled gem files...
./miniruby -I./lib -I. -I.ext/common  ./tool/runruby.rb --extout=.ext  -- --disable-gems -r./arm64-darwin22-fake ./tool/rbinstall.rb --make="/Applications/Xcode.app/Contents/Developer/usr/bin/make" --dest-dir="" --extout=".ext" --ext-build-dir="./ext" --mflags="" --make-flags="" --data-mode=0644 --prog-mode=0755 --installed-list .installed.list --mantype="doc"  --gnumake --install=all --rdoc-output=".ext/rdoc" --html-output=".ext/html"
installing binary commands:         /Users/msd/.rubies/ruby-3.1.3/bin
installing base libraries:          /Users/msd/.rubies/ruby-3.1.3/lib
installing arch files:              /Users/msd/.rubies/ruby-3.1.3/lib/ruby/3.1.0/arm64-darwin22
installing pkgconfig data:          /Users/msd/.rubies/ruby-3.1.3/lib/pkgconfig
installing extension objects:       /Users/msd/.rubies/ruby-3.1.3/lib/ruby/3.1.0/arm64-darwin22
installing extension objects:       /Users/msd/.rubies/ruby-3.1.3/lib/ruby/site_ruby/3.1.0/arm64-darwin22
installing extension objects:       /Users/msd/.rubies/ruby-3.1.3/lib/ruby/vendor_ruby/3.1.0/arm64-darwin22
installing extension headers:       /Users/msd/.rubies/ruby-3.1.3/include/ruby-3.1.0/arm64-darwin22
installing extension scripts:       /Users/msd/.rubies/ruby-3.1.3/lib/ruby/3.1.0
installing extension scripts:       /Users/msd/.rubies/ruby-3.1.3/lib/ruby/site_ruby/3.1.0
installing extension scripts:       /Users/msd/.rubies/ruby-3.1.3/lib/ruby/vendor_ruby/3.1.0
installing extension headers:       /Users/msd/.rubies/ruby-3.1.3/include/ruby-3.1.0/ruby
installing rdoc:                    /Users/msd/.rubies/ruby-3.1.3/share/ri/3.1.0/system
installing html-docs:               /Users/msd/.rubies/ruby-3.1.3/share/doc/ruby
installing capi-docs:               /Users/msd/.rubies/ruby-3.1.3/share/doc/ruby
installing command scripts:         /Users/msd/.rubies/ruby-3.1.3/bin
installing library scripts:         /Users/msd/.rubies/ruby-3.1.3/lib/ruby/3.1.0
installing common headers:          /Users/msd/.rubies/ruby-3.1.3/include/ruby-3.1.0
installing manpages:                /Users/msd/.rubies/ruby-3.1.3/share/man/man1
installing default gems from lib:   /Users/msd/.rubies/ruby-3.1.3/lib/ruby/gems/3.1.0
                                    abbrev 0.1.0
                                    base64 0.1.1
                                    benchmark 0.2.0
                                    bundler 2.3.26
                                    cgi 0.3.5
                                    csv 3.2.5
                                    delegate 0.2.0
                                    did_you_mean 1.6.1
                                    drb 2.1.0
                                    english 0.7.1
                                    erb 2.2.3
                                    error_highlight 0.3.0
                                    fileutils 1.6.0
                                    find 0.1.1
                                    forwardable 1.3.2
                                    getoptlong 0.1.1
                                    ipaddr 1.2.4
                                    irb 1.4.1
                                    logger 1.5.0
                                    mutex_m 0.1.1
                                    net-http 0.3.0
                                    net-protocol 0.1.2
                                    observer 0.1.1
                                    open-uri 0.2.0
                                    open3 0.1.1
                                    optparse 0.2.0
                                    ostruct 0.5.2
                                    pp 0.3.0
                                    prettyprint 0.1.1
                                    pstore 0.1.1
                                    racc 1.6.0
                                    rdoc 6.4.0
                                    readline 0.0.3
                                    reline 0.3.1
                                    resolv 0.2.1
                                    resolv-replace 0.1.0
                                    rinda 0.1.1
                                    ruby2_keywords 0.0.5
                                    securerandom 0.2.0
                                    set 1.0.2
                                    shellwords 0.1.0
                                    singleton 0.1.1
                                    tempfile 0.1.2
                                    time 0.2.0
                                    timeout 0.2.0
                                    tmpdir 0.1.2
                                    tsort 0.1.0
                                    un 0.2.0
                                    uri 0.11.0
                                    weakref 0.1.1
                                    yaml 0.2.0
installing default gems from ext:   /Users/msd/.rubies/ruby-3.1.3/lib/ruby/gems/3.1.0
                                    bigdecimal 3.1.1
                                    date 3.2.2
                                    digest 3.1.0
                                    etc 1.3.0
                                    fcntl 1.0.1
                                    fiddle 1.1.0
                                    io-console 0.5.11
                                    io-nonblock 0.1.0
                                    io-wait 0.2.1
                                    json 2.6.1
                                    nkf 0.1.1
                                    openssl 3.0.1
                                    pathname 0.2.0
                                    psych 4.0.4
                                    readline-ext 0.1.4
                                    stringio 3.0.1
                                    strscan 3.0.1
                                    syslog 0.1.0
                                    zlib 2.1.1
installing bundled gems:            /Users/msd/.rubies/ruby-3.1.3/lib/ruby/gems/3.1.0
                                    minitest 5.15.0
                                    power_assert 2.0.1
                                    rake 13.0.6
                                    test-unit 3.5.3
                                    rexml 3.2.5
                                    rss 0.2.9
                                    net-ftp 0.1.3
                                    net-imap 0.2.3
                                    net-pop 0.1.1
                                    net-smtp 0.3.1
                                    matrix 0.4.2
                                    prime 0.1.2
                                    rbs 2.7.0
Building native extensions. This could take a while...
                                    typeprof 0.21.3
                                    debug 1.6.3
Building native extensions. This could take a while...
installing bundled gem cache:       /Users/msd/.rubies/ruby-3.1.3/lib/ruby/gems/3.1.0/cache
>>> Successfully installed ruby 3.1.3 into /Users/msd/.rubies/ruby-3.1.3
msd@MSDs-Mac-mini ~ % "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-3.1.3" >> ~/.zshrc # run 'chruby' to see actual version
zsh: permission denied: /Users/msd/.zshrc
zsh: permission denied: /Users/msd/.zshrc
zsh: permission denied: /Users/msd/.zshrc
msd@MSDs-Mac-mini ~ % sudo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
zsh: permission denied: /Users/msd/.zshrc
msd@MSDs-Mac-mini ~ % sudo nano ~/.zshrc
Password:
msd@MSDs-Mac-mini ~ % chruby
zsh: command not found: chruby
msd@MSDs-Mac-mini ~ % ruby -v
ruby 2.6.10p210 (2022-04-12 revision 67958) [universal.arm64e-darwin22]
msd@MSDs-Mac-mini ~ % sudo nano ~/.zshrc
msd@MSDs-Mac-mini ~ % gem install jekyll
Fetching colorator-1.1.0.gem
Fetching http_parser.rb-0.8.0.gem
Fetching eventmachine-1.2.7.gem
Fetching em-websocket-0.5.3.gem
Fetching google-protobuf-3.22.3-x86_64-darwin.gem
Fetching sass-embedded-1.62.1-arm64-darwin.gem
Fetching jekyll-sass-converter-3.0.0.gem
Fetching rb-fsevent-0.11.2.gem
Fetching rb-inotify-0.10.1.gem
Fetching listen-3.8.0.gem
Fetching jekyll-watch-2.2.1.gem
Fetching kramdown-2.4.0.gem
Fetching kramdown-parser-gfm-1.1.0.gem
Fetching liquid-4.0.4.gem
Fetching mercenary-0.4.0.gem
Fetching forwardable-extended-2.6.0.gem
Fetching jekyll-4.3.2.gem
Fetching pathutil-0.16.2.gem
Fetching rouge-4.1.0.gem
Fetching safe_yaml-1.0.5.gem
Fetching unicode-display_width-2.4.2.gem
Fetching terminal-table-3.0.2.gem
Fetching webrick-1.8.1.gem
ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory.
msd@MSDs-Mac-mini ~ % sudo gem install jekyll
Fetching em-websocket-0.5.3.gem
Fetching eventmachine-1.2.7.gem
Fetching colorator-1.1.0.gem
Fetching google-protobuf-3.22.3-x86_64-darwin.gem
Fetching jekyll-sass-converter-3.0.0.gem
Fetching http_parser.rb-0.8.0.gem
Fetching rb-fsevent-0.11.2.gem
Fetching sass-embedded-1.62.1-arm64-darwin.gem
Fetching rb-inotify-0.10.1.gem
Fetching listen-3.8.0.gem
Fetching jekyll-watch-2.2.1.gem
Fetching kramdown-2.4.0.gem
Fetching kramdown-parser-gfm-1.1.0.gem
Fetching liquid-4.0.4.gem
Fetching mercenary-0.4.0.gem
Fetching forwardable-extended-2.6.0.gem
Fetching pathutil-0.16.2.gem
Fetching rouge-4.1.0.gem
Fetching safe_yaml-1.0.5.gem
Fetching unicode-display_width-2.4.2.gem
Fetching terminal-table-3.0.2.gem
Fetching webrick-1.8.1.gem
Fetching jekyll-4.3.2.gem
Successfully installed colorator-1.1.0
Building native extensions. This could take a while...
Successfully installed http_parser.rb-0.8.0
Building native extensions. This could take a while...
Successfully installed eventmachine-1.2.7
Successfully installed em-websocket-0.5.3
Successfully installed google-protobuf-3.22.3-x86_64-darwin
ERROR:  Error installing jekyll:
	The last version of sass-embedded (~> 1.54) to support your Ruby & RubyGems was 1.58.3. Try installing it with `gem install sass-embedded -v 1.58.3` and then running the current command again
	sass-embedded requires Ruby version >= 2.7.0. The current ruby version is 2.6.10.210.
msd@MSDs-Mac-mini ~ % gem install sass-embedded -v 1.58.3
Fetching sass-embedded-1.58.3-arm64-darwin.gem
ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory.
msd@MSDs-Mac-mini ~ % sudo gem install sass-embedded -v 1.58.3
Fetching sass-embedded-1.58.3-arm64-darwin.gem
Successfully installed sass-embedded-1.58.3-arm64-darwin
Parsing documentation for sass-embedded-1.58.3-arm64-darwin
Installing ri documentation for sass-embedded-1.58.3-arm64-darwin
Done installing documentation for sass-embedded after 0 seconds
1 gem installed
msd@MSDs-Mac-mini ~ % sudo gem install jekyll                 
Successfully installed jekyll-sass-converter-3.0.0
Successfully installed rb-fsevent-0.11.2
Successfully installed rb-inotify-0.10.1
Successfully installed listen-3.8.0
Successfully installed jekyll-watch-2.2.1
Successfully installed kramdown-2.4.0
Successfully installed kramdown-parser-gfm-1.1.0
Successfully installed liquid-4.0.4
Successfully installed mercenary-0.4.0
Successfully installed forwardable-extended-2.6.0
Successfully installed pathutil-0.16.2
ERROR:  Error installing jekyll:
	The last version of rouge (>= 3.0, < 5.0) to support your Ruby & RubyGems was 3.30.0. Try installing it with `gem install rouge -v 3.30.0` and then running the current command again
	rouge requires Ruby version >= 2.7. The current ruby version is 2.6.10.210.
msd@MSDs-Mac-mini ~ % sudo gem install rouge -v 3.30.0
Fetching rouge-3.30.0.gem
Successfully installed rouge-3.30.0
Parsing documentation for rouge-3.30.0
Installing ri documentation for rouge-3.30.0
Done installing documentation for rouge after 1 seconds
1 gem installed
msd@MSDs-Mac-mini ~ % sudo gem install jekyll         
Successfully installed safe_yaml-1.0.5
Successfully installed unicode-display_width-2.4.2
Successfully installed terminal-table-3.0.2
Successfully installed webrick-1.8.1
Successfully installed jekyll-4.3.2
Parsing documentation for safe_yaml-1.0.5
Installing ri documentation for safe_yaml-1.0.5
Parsing documentation for unicode-display_width-2.4.2
Installing ri documentation for unicode-display_width-2.4.2
Parsing documentation for terminal-table-3.0.2
Installing ri documentation for terminal-table-3.0.2
Parsing documentation for webrick-1.8.1
Installing ri documentation for webrick-1.8.1
Parsing documentation for jekyll-4.3.2
Installing ri documentation for jekyll-4.3.2
Done installing documentation for safe_yaml, unicode-display_width, terminal-table, webrick, jekyll after 1 seconds
5 gems installed
msd@MSDs-Mac-mini ~ % 