---
layout: post
title: How to be better at Laravel
---

If you need to have php@8.1 first in your PATH, run:
  echo 'export PATH="/opt/homebrew/opt/php@8.1/bin:$PATH"' >> ~/.zshrc
  echo 'export PATH="/opt/homebrew/opt/php@8.1/sbin:$PATH"' >> ~/.zshrc

  
msd@MSDs-Mac-mini ~ % sudo nano ~/.zshrc
Password:
msd@MSDs-Mac-mini ~ % source ~/.zshrc
msd@MSDs-Mac-mini ~ % brew
Example usage:
  brew search TEXT|/REGEX/
  brew info [FORMULA|CASK...]
  brew install FORMULA|CASK...
  brew update
  brew upgrade [FORMULA|CASK...]
  brew uninstall FORMULA|CASK...
  brew list [FORMULA|CASK...]

Troubleshooting:
  brew config
  brew doctor
  brew install --verbose --debug FORMULA|CASK

Contributing:
  brew create URL [--no-fetch]
  brew edit [FORMULA|CASK...]

Further help:
  brew commands
  brew help [COMMAND]
  man brew
  https://docs.brew.sh
msd@MSDs-Mac-mini ~ % brew install libsodium
==> Fetching libsodium
==> Downloading https://ghcr.io/v2/homebrew/core/libsodium/manifests/1.0.18_1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libsodium/blobs/sha256:9a473cc4
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Pouring libsodium--1.0.18_1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libsodium/1.0.18_1: 73 files, 777.9KB
==> Running `brew cleanup libsodium`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
msd@MSDs-Mac-mini ~ % libsodium
zsh: command not found: libsodium
msd@MSDs-Mac-mini ~ % brew install php@8.1
==> Downloading https://formulae.brew.sh/api/formula.jws.json
##O#-#                                                                        
==> Fetching dependencies for php@8.1: apr, ca-certificates, openssl@1.1, apr-util, argon2, aspell, m4, autoconf, brotli, libunistring, gettext, libidn2, libnghttp2, libssh2, openldap, rtmpdump, lz4, xz, zstd, curl, libtool, unixodbc, freetds, libpng, freetype, fontconfig, jpeg-turbo, giflib, highway, imath, libtiff, little-cms2, openexr, webp, jpeg-xl, libvmaf, aom, libavif, gd, gmp, icu4c, krb5, libpq, libzip, oniguruma, pcre2, readline, sqlite and tidy-html5
==> Fetching apr
==> Downloading https://ghcr.io/v2/homebrew/core/apr/manifests/1.7.2
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/apr/blobs/sha256:43d7a315b75512
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching ca-certificates
==> Downloading https://ghcr.io/v2/homebrew/core/ca-certificates/manifests/2023-
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/ca-certificates/blobs/sha256:11
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching openssl@1.1
==> Downloading https://ghcr.io/v2/homebrew/core/openssl/1.1/manifests/1.1.1t
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/openssl/1.1/blobs/sha256:e1e08d
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching apr-util
==> Downloading https://ghcr.io/v2/homebrew/core/apr-util/manifests/1.6.3
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/apr-util/blobs/sha256:6934399a1
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching argon2
==> Downloading https://ghcr.io/v2/homebrew/core/argon2/manifests/20190702_1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/argon2/blobs/sha256:016bdb5f9f2
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching aspell
==> Downloading https://ghcr.io/v2/homebrew/core/aspell/manifests/0.60.8-1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/aspell/blobs/sha256:f00a63fb34a
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching m4
==> Downloading https://ghcr.io/v2/homebrew/core/m4/manifests/1.4.19
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/m4/blobs/sha256:11308abe8d607be
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching autoconf
==> Downloading https://ghcr.io/v2/homebrew/core/autoconf/manifests/2.71
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/autoconf/blobs/sha256:a3d366c98
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching brotli
==> Downloading https://ghcr.io/v2/homebrew/core/brotli/manifests/1.0.9
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/brotli/blobs/sha256:dda0779953c
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching libunistring
==> Downloading https://ghcr.io/v2/homebrew/core/libunistring/manifests/1.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libunistring/blobs/sha256:c78e7
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching gettext
==> Downloading https://ghcr.io/v2/homebrew/core/gettext/manifests/0.21.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/gettext/blobs/sha256:28c5b06e66
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching libidn2
==> Downloading https://ghcr.io/v2/homebrew/core/libidn2/manifests/2.3.4_1-1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libidn2/blobs/sha256:b044c66cc0
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching libnghttp2
==> Downloading https://ghcr.io/v2/homebrew/core/libnghttp2/manifests/1.52.0
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libnghttp2/blobs/sha256:d1f911e
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching libssh2
==> Downloading https://ghcr.io/v2/homebrew/core/libssh2/manifests/1.10.0
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libssh2/blobs/sha256:51e8220123
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching openldap
==> Downloading https://ghcr.io/v2/homebrew/core/openldap/manifests/2.6.4
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/openldap/blobs/sha256:6a5fb0e34
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching rtmpdump
==> Downloading https://ghcr.io/v2/homebrew/core/rtmpdump/manifests/2.4.20151223
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/rtmpdump/blobs/sha256:6a1838bae
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching lz4
==> Downloading https://ghcr.io/v2/homebrew/core/lz4/manifests/1.9.4
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/lz4/blobs/sha256:cd29e40287b0a2
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching xz
==> Downloading https://ghcr.io/v2/homebrew/core/xz/manifests/5.4.2
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/xz/blobs/sha256:5919a39bb56458a
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching zstd
==> Downloading https://ghcr.io/v2/homebrew/core/zstd/manifests/1.5.4
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/zstd/blobs/sha256:0d9bceb9cfaea
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching curl
==> Downloading https://ghcr.io/v2/homebrew/core/curl/manifests/8.0.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/curl/blobs/sha256:c2a30c3f61e8b
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching libtool
==> Downloading https://ghcr.io/v2/homebrew/core/libtool/manifests/2.4.7
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libtool/blobs/sha256:924534e0a6
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching unixodbc
==> Downloading https://ghcr.io/v2/homebrew/core/unixodbc/manifests/2.3.11
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/unixodbc/blobs/sha256:4c0380e01
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching freetds
==> Downloading https://ghcr.io/v2/homebrew/core/freetds/manifests/1.3.17
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/freetds/blobs/sha256:2cf1f35b95
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching libpng
==> Downloading https://ghcr.io/v2/homebrew/core/libpng/manifests/1.6.39-1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libpng/blobs/sha256:27fb15928d0
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching freetype
==> Downloading https://ghcr.io/v2/homebrew/core/freetype/manifests/2.13.0_1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/freetype/blobs/sha256:9dec5b349
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching fontconfig
==> Downloading https://ghcr.io/v2/homebrew/core/fontconfig/manifests/2.14.2
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/fontconfig/blobs/sha256:11cd488
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching jpeg-turbo
==> Downloading https://ghcr.io/v2/homebrew/core/jpeg-turbo/manifests/2.1.5.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/jpeg-turbo/blobs/sha256:2465718
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching giflib
==> Downloading https://ghcr.io/v2/homebrew/core/giflib/manifests/5.2.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/giflib/blobs/sha256:ced5a24b12f
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching highway
==> Downloading https://ghcr.io/v2/homebrew/core/highway/manifests/1.0.4
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/highway/blobs/sha256:bf339bb1c4
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching imath
==> Downloading https://ghcr.io/v2/homebrew/core/imath/manifests/3.1.7
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/imath/blobs/sha256:d3cbdbbd65ce
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching libtiff
==> Downloading https://ghcr.io/v2/homebrew/core/libtiff/manifests/4.4.0_1-1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libtiff/blobs/sha256:4f8764b4cf
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching little-cms2
==> Downloading https://ghcr.io/v2/homebrew/core/little-cms2/manifests/2.14
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/little-cms2/blobs/sha256:f65e00
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching openexr
==> Downloading https://ghcr.io/v2/homebrew/core/openexr/manifests/3.1.6
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/openexr/blobs/sha256:d693491cf6
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching webp
==> Downloading https://ghcr.io/v2/homebrew/core/webp/manifests/1.3.0
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/webp/blobs/sha256:fb2edf5a9f207
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching jpeg-xl
==> Downloading https://ghcr.io/v2/homebrew/core/jpeg-xl/manifests/0.8.1_1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/jpeg-xl/blobs/sha256:7f91c90c84
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching libvmaf
==> Downloading https://ghcr.io/v2/homebrew/core/libvmaf/manifests/2.3.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libvmaf/blobs/sha256:ddf3300461
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching aom
==> Downloading https://ghcr.io/v2/homebrew/core/aom/manifests/3.6.0
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/aom/blobs/sha256:a42b91d5040012
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching libavif
==> Downloading https://ghcr.io/v2/homebrew/core/libavif/manifests/0.11.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libavif/blobs/sha256:9b4735a706
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching gd
==> Downloading https://ghcr.io/v2/homebrew/core/gd/manifests/2.3.3_4
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/gd/blobs/sha256:62e2d11e1a55608
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching gmp
==> Downloading https://ghcr.io/v2/homebrew/core/gmp/manifests/6.2.1_1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/gmp/blobs/sha256:2436cd120e5678
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching icu4c
==> Downloading https://ghcr.io/v2/homebrew/core/icu4c/manifests/72.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/icu4c/blobs/sha256:0666e999875e
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching krb5
==> Downloading https://ghcr.io/v2/homebrew/core/krb5/manifests/1.20.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/krb5/blobs/sha256:671c6257abcf1
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching libpq
==> Downloading https://ghcr.io/v2/homebrew/core/libpq/manifests/15.2
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libpq/blobs/sha256:c07042502352
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching libzip
==> Downloading https://ghcr.io/v2/homebrew/core/libzip/manifests/1.9.2
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libzip/blobs/sha256:6da42edf5cc
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching oniguruma
==> Downloading https://ghcr.io/v2/homebrew/core/oniguruma/manifests/6.9.8
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/oniguruma/blobs/sha256:ce1351a9
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching pcre2
==> Downloading https://ghcr.io/v2/homebrew/core/pcre2/manifests/10.42
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/pcre2/blobs/sha256:8423a338c590
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching readline
==> Downloading https://ghcr.io/v2/homebrew/core/readline/manifests/8.2.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/readline/blobs/sha256:fba42a9bd
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching sqlite
==> Downloading https://ghcr.io/v2/homebrew/core/sqlite/manifests/3.41.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/sqlite/blobs/sha256:fedac4380af
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching tidy-html5
==> Downloading https://ghcr.io/v2/homebrew/core/tidy-html5/manifests/5.8.0
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/tidy-html5/blobs/sha256:25de41a
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Fetching php@8.1
==> Downloading https://ghcr.io/v2/homebrew/core/php/8.1/manifests/8.1.17
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/php/8.1/blobs/sha256:17b9556287
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Installing dependencies for php@8.1: apr, ca-certificates, openssl@1.1, apr-util, argon2, aspell, m4, autoconf, brotli, libunistring, gettext, libidn2, libnghttp2, libssh2, openldap, rtmpdump, lz4, xz, zstd, curl, libtool, unixodbc, freetds, libpng, freetype, fontconfig, jpeg-turbo, giflib, highway, imath, libtiff, little-cms2, openexr, webp, jpeg-xl, libvmaf, aom, libavif, gd, gmp, icu4c, krb5, libpq, libzip, oniguruma, pcre2, readline, sqlite and tidy-html5
==> Installing php@8.1 dependency: apr
==> Pouring apr--1.7.2.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/apr/1.7.2: 59 files, 1.4MB
==> Installing php@8.1 dependency: ca-certificates
==> Pouring ca-certificates--2023-01-10.all.bottle.tar.gz
==> Downloading https://formulae.brew.sh/api/cask.jws.json
##O#-#                                                                        
==> Regenerating CA certificate bundle from keychain, this may take a while...
🍺  /opt/homebrew/Cellar/ca-certificates/2023-01-10: 3 files, 216.9KB
==> Installing php@8.1 dependency: openssl@1.1
==> Pouring openssl@1.1--1.1.1t.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/openssl@1.1/1.1.1t: 8,101 files, 18MB
==> Installing php@8.1 dependency: apr-util
==> Pouring apr-util--1.6.3.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/apr-util/1.6.3: 54 files, 891.7KB
==> Installing php@8.1 dependency: argon2
==> Pouring argon2--20190702_1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/argon2/20190702_1: 12 files, 684.1KB
==> Installing php@8.1 dependency: aspell
==> Pouring aspell--0.60.8.arm64_ventura.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/aspell/0.60.8: 767 files, 322.8MB
==> Installing php@8.1 dependency: m4
==> Pouring m4--1.4.19.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/m4/1.4.19: 13 files, 742.3KB
==> Installing php@8.1 dependency: autoconf
==> Pouring autoconf--2.71.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/autoconf/2.71: 71 files, 3.2MB
==> Installing php@8.1 dependency: brotli
==> Pouring brotli--1.0.9.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/brotli/1.0.9: 25 files, 2.3MB
==> Installing php@8.1 dependency: libunistring
==> Pouring libunistring--1.1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libunistring/1.1: 56 files, 5.0MB
==> Installing php@8.1 dependency: gettext
==> Pouring gettext--0.21.1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/gettext/0.21.1: 1,983 files, 20.9MB
==> Installing php@8.1 dependency: libidn2
==> Pouring libidn2--2.3.4_1.arm64_ventura.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/libidn2/2.3.4_1: 79 files, 1MB
==> Installing php@8.1 dependency: libnghttp2
==> Pouring libnghttp2--1.52.0.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libnghttp2/1.52.0: 13 files, 731.5KB
==> Installing php@8.1 dependency: libssh2
==> Pouring libssh2--1.10.0.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libssh2/1.10.0: 184 files, 1MB
==> Installing php@8.1 dependency: openldap
==> Pouring openldap--2.6.4.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/openldap/2.6.4: 83 files, 6.9MB
==> Installing php@8.1 dependency: rtmpdump
==> Pouring rtmpdump--2.4+20151223_1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/rtmpdump/2.4+20151223_1: 20 files, 645KB
==> Installing php@8.1 dependency: lz4
==> Pouring lz4--1.9.4.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/lz4/1.9.4: 22 files, 680KB
==> Installing php@8.1 dependency: xz
==> Pouring xz--5.4.2.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/xz/5.4.2: 162 files, 2.5MB
==> Installing php@8.1 dependency: zstd
==> Pouring zstd--1.5.4.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/zstd/1.5.4: 31 files, 2.3MB
==> Installing php@8.1 dependency: curl
==> Pouring curl--8.0.1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/curl/8.0.1: 510 files, 4.2MB
==> Installing php@8.1 dependency: libtool
==> Pouring libtool--2.4.7.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libtool/2.4.7: 75 files, 3.8MB
==> Installing php@8.1 dependency: unixodbc
==> Pouring unixodbc--2.3.11.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/unixodbc/2.3.11: 48 files, 2.3MB
==> Installing php@8.1 dependency: freetds
==> Pouring freetds--1.3.17.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/freetds/1.3.17: 1,262 files, 14MB
==> Installing php@8.1 dependency: libpng
==> Pouring libpng--1.6.39.arm64_ventura.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/libpng/1.6.39: 27 files, 1.3MB
==> Installing php@8.1 dependency: freetype
==> Pouring freetype--2.13.0_1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/freetype/2.13.0_1: 67 files, 2.4MB
==> Installing php@8.1 dependency: fontconfig
==> Pouring fontconfig--2.14.2.arm64_ventura.bottle.tar.gz
==> Regenerating font cache, this may take a while
==> /opt/homebrew/Cellar/fontconfig/2.14.2/bin/fc-cache -frv
🍺  /opt/homebrew/Cellar/fontconfig/2.14.2: 88 files, 2.4MB
==> Installing php@8.1 dependency: jpeg-turbo
==> Pouring jpeg-turbo--2.1.5.1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/jpeg-turbo/2.1.5.1: 44 files, 2.5MB
==> Installing php@8.1 dependency: giflib
==> Pouring giflib--5.2.1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/giflib/5.2.1: 19 files, 540.2KB
==> Installing php@8.1 dependency: highway
==> Pouring highway--1.0.4.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/highway/1.0.4: 65 files, 2.6MB
==> Installing php@8.1 dependency: imath
==> Pouring imath--3.1.7.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/imath/3.1.7: 49 files, 932.4KB
==> Installing php@8.1 dependency: libtiff
==> Pouring libtiff--4.4.0_1.arm64_ventura.bottle.1.tar.gz
🍺  /opt/homebrew/Cellar/libtiff/4.4.0_1: 249 files, 4.8MB
==> Installing php@8.1 dependency: little-cms2
==> Pouring little-cms2--2.14.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/little-cms2/2.14: 21 files, 1.4MB
==> Installing php@8.1 dependency: openexr
==> Pouring openexr--3.1.6.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/openexr/3.1.6: 194 files, 6.0MB
==> Installing php@8.1 dependency: webp
==> Pouring webp--1.3.0.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/webp/1.3.0: 47 files, 2.3MB
==> Installing php@8.1 dependency: jpeg-xl
==> Pouring jpeg-xl--0.8.1_1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/jpeg-xl/0.8.1_1: 41 files, 10.7MB
==> Installing php@8.1 dependency: libvmaf
==> Pouring libvmaf--2.3.1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libvmaf/2.3.1: 234 files, 7MB
==> Installing php@8.1 dependency: aom
==> Pouring aom--3.6.0.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/aom/3.6.0: 23 files, 8.7MB
==> Installing php@8.1 dependency: libavif
==> Pouring libavif--0.11.1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libavif/0.11.1: 19 files, 496.5KB
==> Installing php@8.1 dependency: gd
==> Pouring gd--2.3.3_4.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/gd/2.3.3_4: 33 files, 1.5MB
==> Installing php@8.1 dependency: gmp
==> Pouring gmp--6.2.1_1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/gmp/6.2.1_1: 21 files, 3.2MB
==> Installing php@8.1 dependency: icu4c
==> Pouring icu4c--72.1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/icu4c/72.1: 263 files, 78.4MB
==> Installing php@8.1 dependency: krb5
==> Pouring krb5--1.20.1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/krb5/1.20.1: 162 files, 5.6MB
==> Installing php@8.1 dependency: libpq
==> Pouring libpq--15.2.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libpq/15.2: 2,368 files, 28.5MB
==> Installing php@8.1 dependency: libzip
==> Pouring libzip--1.9.2.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libzip/1.9.2: 145 files, 853KB
==> Installing php@8.1 dependency: oniguruma
==> Pouring oniguruma--6.9.8.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/oniguruma/6.9.8: 14 files, 1.4MB
==> Installing php@8.1 dependency: pcre2
==> Pouring pcre2--10.42.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/pcre2/10.42: 230 files, 6.2MB
==> Installing php@8.1 dependency: readline
==> Pouring readline--8.2.1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/readline/8.2.1: 50 files, 1.7MB
==> Installing php@8.1 dependency: sqlite
==> Pouring sqlite--3.41.1.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/sqlite/3.41.1: 11 files, 4.5MB
==> Installing php@8.1 dependency: tidy-html5
==> Pouring tidy-html5--5.8.0.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/tidy-html5/5.8.0: 14 files, 3MB
==> Installing php@8.1
==> Pouring php@8.1--8.1.17.arm64_ventura.bottle.tar.gz
==> /opt/homebrew/Cellar/php@8.1/8.1.17/bin/pear config-set php_ini /opt/homebre
==> /opt/homebrew/Cellar/php@8.1/8.1.17/bin/pear config-set php_dir /opt/homebre
==> /opt/homebrew/Cellar/php@8.1/8.1.17/bin/pear config-set doc_dir /opt/homebre
==> /opt/homebrew/Cellar/php@8.1/8.1.17/bin/pear config-set ext_dir /opt/homebre
==> /opt/homebrew/Cellar/php@8.1/8.1.17/bin/pear config-set bin_dir /opt/homebre
==> /opt/homebrew/Cellar/php@8.1/8.1.17/bin/pear config-set data_dir /opt/homebr
==> /opt/homebrew/Cellar/php@8.1/8.1.17/bin/pear config-set cfg_dir /opt/homebre
==> /opt/homebrew/Cellar/php@8.1/8.1.17/bin/pear config-set www_dir /opt/homebre
==> /opt/homebrew/Cellar/php@8.1/8.1.17/bin/pear config-set man_dir /opt/homebre
==> /opt/homebrew/Cellar/php@8.1/8.1.17/bin/pear config-set test_dir /opt/homebr
==> /opt/homebrew/Cellar/php@8.1/8.1.17/bin/pear config-set php_bin /opt/homebre
==> /opt/homebrew/Cellar/php@8.1/8.1.17/bin/pear update-channels
==> Caveats
To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php_module /opt/homebrew/opt/php@8.1/lib/httpd/modules/libphp.so

    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>

Finally, check DirectoryIndex includes index.php
    DirectoryIndex index.php index.html

The php.ini and php-fpm.ini file can be found in:
    /opt/homebrew/etc/php/8.1/

php@8.1 is keg-only, which means it was not symlinked into /opt/homebrew,
because this is an alternate version of another formula.

If you need to have php@8.1 first in your PATH, run:
  echo 'export PATH="/opt/homebrew/opt/php@8.1/bin:$PATH"' >> ~/.zshrc
  echo 'export PATH="/opt/homebrew/opt/php@8.1/sbin:$PATH"' >> ~/.zshrc

For compilers to find php@8.1 you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/php@8.1/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/php@8.1/include"

To start php@8.1 now and restart at login:
  brew services start php@8.1
==> Summary
🍺  /opt/homebrew/Cellar/php@8.1/8.1.17: 513 files, 81.7MB
==> Running `brew cleanup php@8.1`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
==> Caveats
==> php@8.1
To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php_module /opt/homebrew/opt/php@8.1/lib/httpd/modules/libphp.so

    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>

Finally, check DirectoryIndex includes index.php
    DirectoryIndex index.php index.html

The php.ini and php-fpm.ini file can be found in:
    /opt/homebrew/etc/php/8.1/

php@8.1 is keg-only, which means it was not symlinked into /opt/homebrew,
because this is an alternate version of another formula.

If you need to have php@8.1 first in your PATH, run:
  echo 'export PATH="/opt/homebrew/opt/php@8.1/bin:$PATH"' >> ~/.zshrc
  echo 'export PATH="/opt/homebrew/opt/php@8.1/sbin:$PATH"' >> ~/.zshrc

For compilers to find php@8.1 you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/php@8.1/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/php@8.1/include"

To start php@8.1 now and restart at login:
  brew services start php@8.1
msd@MSDs-Mac-mini ~ % 
