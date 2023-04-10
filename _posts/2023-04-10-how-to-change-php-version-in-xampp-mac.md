---
layout: post
title: How to change PHP version in XAMPP on Mac
---

I need to change default php 8.2 come with XAMPP latest version to 8.0.2 which we're running on production server.

brew install php@8.0



msd@MSDs-Mac-mini base % php -v
PHP 8.1.17 (cli) (built: Mar 16 2023 13:07:08) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.1.17, Copyright (c) Zend Technologies
    with Zend OPcache v8.1.17, Copyright (c), by Zend Technologies
msd@MSDs-Mac-mini base % composer install
Installing dependencies from lock file (including require-dev)
Verifying lock file contents can be installed on current platform.
Nothing to install, update or remove
Generating optimized autoload files
> Illuminate\Foundation\ComposerScripts::postAutoloadDump
> @php artisan package:discover --ansi

   INFO  Discovering packages.  

  barryvdh/laravel-debugbar ................................................................................................................... DONE
  kreait/laravel-firebase ..................................................................................................................... DONE
  laravel/passport ............................................................................................................................ DONE
  laravel/sail ................................................................................................................................ DONE
  laravel/sanctum ............................................................................................................................. DONE
  laravel/telescope ........................................................................................................................... DONE
  laravel/tinker .............................................................................................................................. DONE
  livewire/livewire ........................................................................................................................... DONE
  nesbot/carbon ............................................................................................................................... DONE
  nunomaduro/collision ........................................................................................................................ DONE
  nunomaduro/termwind ......................................................................................................................... DONE
  opcodesio/log-viewer ........................................................................................................................ DONE
  spatie/laravel-ignition ..................................................................................................................... DONE

103 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
msd@MSDs-Mac-mini base % brew install php@8.0
Running `brew update --auto-update`...
==> Homebrew is run entirely by unpaid volunteers. Please consider donating:
  https://github.com/Homebrew/brew#donations

==> Auto-updated Homebrew!
Updated 2 taps (homebrew/core and homebrew/cask).
==> New Formulae
aarch64-elf-gdb                 dexter                          hz                              llvm@15                         opal                            trurl                           wxlua
aliyunpan                       enchive                         imessage-exporter               mdt                             openssl@3.0                     trust-dns                       zpaqfranz
arjun                           flavours                        kitex                           musikcube                       renovate                        tt
blocky                          gat                             ksops                           notify                          streamvbyte                     typst
cloudpan189-go                  go-feature-flag-relay-proxy     libansilove                     ntfy                            thriftgo                        wazero
==> New Casks
alipay-key-tool          beardie                  cursor                   edrawmind                mullvad-browser          orbstack                 piclist                  usmart-trade             zed
archaeology              carbide-create           dehelper                 hummingbird              nozbe                    orcaslicer               stack                    vbrokers

You have 5 outdated formulae installed.

Warning: php@8.0 has been deprecated because it is a versioned formula!
==> Fetching dependencies for php@8.0: apr, zstd, freetds, openexr and sqlite
==> Fetching apr
==> Downloading https://ghcr.io/v2/homebrew/core/apr/manifests/1.7.3
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/apr/blobs/sha256:3697f4c0227f5ffbe41d20c423c4ef730f32aafa70b52865704cd8a1e1220c26
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:3697f4c0227f5ffbe41d20c423c4ef730f32aafa70b52865704cd8a1e1220c26?se=2023-04-10T04%3A45%3A00Z&sig=toBRYV4C6DXPcQtobIemtBBwJ8lNK9ADvCnE2K88Zww%
######################################################################## 100.0%
==> Fetching zstd
==> Downloading https://ghcr.io/v2/homebrew/core/zstd/manifests/1.5.5
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/zstd/blobs/sha256:b709835f4cd5d339b97103f0dfa343489a02d2073f8e80ba7b04d682f1d29bd4
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:b709835f4cd5d339b97103f0dfa343489a02d2073f8e80ba7b04d682f1d29bd4?se=2023-04-10T04%3A45%3A00Z&sig=wynErbldkC0AfsM%2FFiIDIA4knFElvCOYZFqxVdtW94
######################################################################## 100.0%
==> Fetching freetds
==> Downloading https://ghcr.io/v2/homebrew/core/freetds/manifests/1.3.18
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/freetds/blobs/sha256:3121d9240917d0efb691d437cd1973123822b0c0fe4197aa9706622588228835
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:3121d9240917d0efb691d437cd1973123822b0c0fe4197aa9706622588228835?se=2023-04-10T04%3A45%3A00Z&sig=vtGcwx9Hsao4q2NT1J3kSFvdGT5n6FNQRhxL5OIx1aY%
######################################################################## 100.0%
==> Fetching openexr
==> Downloading https://ghcr.io/v2/homebrew/core/openexr/manifests/3.1.7
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/openexr/blobs/sha256:af3bf3c18721d74bd6e3ae7ca18af940b18d598539b69f5872e2d5e130f6e83c
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:af3bf3c18721d74bd6e3ae7ca18af940b18d598539b69f5872e2d5e130f6e83c?se=2023-04-10T04%3A45%3A00Z&sig=Sq3eqR4Txxs036d73XIsgo%2ByPLDTUkUvt25k3G8ons
######################################################################## 100.0%
==> Fetching sqlite
==> Downloading https://ghcr.io/v2/homebrew/core/sqlite/manifests/3.41.2
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/sqlite/blobs/sha256:2a77f2ddcf124d8704c299572c4dc55517996d796011545852e362c6e2a2a2ea
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:2a77f2ddcf124d8704c299572c4dc55517996d796011545852e362c6e2a2a2ea?se=2023-04-10T04%3A45%3A00Z&sig=6x7DpD%2F2gtTBKvnTZoUidb2jujozug4hEVrU0E%2Fx
######################################################################## 100.0%
==> Fetching php@8.0
==> Downloading https://ghcr.io/v2/homebrew/core/php/8.0/manifests/8.0.28
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/php/8.0/blobs/sha256:fdff1a7af1220afe62fca6cdc859ec00b72382b7ef14e3cad54cfea8628a5be8
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:fdff1a7af1220afe62fca6cdc859ec00b72382b7ef14e3cad54cfea8628a5be8?se=2023-04-10T04%3A45%3A00Z&sig=ivtHO6Ot29QU3g6woME4x%2ByKYm5oeILoT7vYDavUGD
######################################################################## 100.0%
==> Installing dependencies for php@8.0: apr, zstd, freetds, openexr and sqlite
==> Installing php@8.0 dependency: apr
==> Pouring apr--1.7.3.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/apr/1.7.3: 59 files, 1.4MB
==> Installing php@8.0 dependency: zstd
==> Pouring zstd--1.5.5.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/zstd/1.5.5: 31 files, 2.3MB
==> Installing php@8.0 dependency: freetds
==> Pouring freetds--1.3.18.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/freetds/1.3.18: 1,262 files, 14MB
==> Installing php@8.0 dependency: openexr
==> Pouring openexr--3.1.7.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/openexr/3.1.7: 194 files, 6.0MB
==> Installing php@8.0 dependency: sqlite
==> Pouring sqlite--3.41.2.arm64_ventura.bottle.tar.gz
🍺  /opt/homebrew/Cellar/sqlite/3.41.2: 11 files, 4.5MB
==> Installing php@8.0
==> Pouring php@8.0--8.0.28.arm64_ventura.bottle.tar.gz
==> /opt/homebrew/Cellar/php@8.0/8.0.28/bin/pear config-set php_ini /opt/homebrew/etc/php/8.0/php.ini system
==> /opt/homebrew/Cellar/php@8.0/8.0.28/bin/pear config-set php_dir /opt/homebrew/share/pear@8.0 system
==> /opt/homebrew/Cellar/php@8.0/8.0.28/bin/pear config-set doc_dir /opt/homebrew/share/pear@8.0/doc system
==> /opt/homebrew/Cellar/php@8.0/8.0.28/bin/pear config-set ext_dir /opt/homebrew/lib/php/pecl/20200930 system
==> /opt/homebrew/Cellar/php@8.0/8.0.28/bin/pear config-set bin_dir /opt/homebrew/opt/php@8.0/bin system
==> /opt/homebrew/Cellar/php@8.0/8.0.28/bin/pear config-set data_dir /opt/homebrew/share/pear@8.0/data system
==> /opt/homebrew/Cellar/php@8.0/8.0.28/bin/pear config-set cfg_dir /opt/homebrew/share/pear@8.0/cfg system
==> /opt/homebrew/Cellar/php@8.0/8.0.28/bin/pear config-set www_dir /opt/homebrew/share/pear@8.0/htdocs system
==> /opt/homebrew/Cellar/php@8.0/8.0.28/bin/pear config-set man_dir /opt/homebrew/share/man system
==> /opt/homebrew/Cellar/php@8.0/8.0.28/bin/pear config-set test_dir /opt/homebrew/share/pear@8.0/test system
==> /opt/homebrew/Cellar/php@8.0/8.0.28/bin/pear config-set php_bin /opt/homebrew/opt/php@8.0/bin/php system
==> /opt/homebrew/Cellar/php@8.0/8.0.28/bin/pear update-channels
==> Caveats
To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php_module /opt/homebrew/opt/php@8.0/lib/httpd/modules/libphp.so

    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>

Finally, check DirectoryIndex includes index.php
    DirectoryIndex index.php index.html

The php.ini and php-fpm.ini file can be found in:
    /opt/homebrew/etc/php/8.0/

php@8.0 is keg-only, which means it was not symlinked into /opt/homebrew,
because this is an alternate version of another formula.

If you need to have php@8.0 first in your PATH, run:
  echo 'export PATH="/opt/homebrew/opt/php@8.0/bin:$PATH"' >> ~/.zshrc
  echo 'export PATH="/opt/homebrew/opt/php@8.0/sbin:$PATH"' >> ~/.zshrc

For compilers to find php@8.0 you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/php@8.0/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/php@8.0/include"

To restart php@8.0 after an upgrade:
  brew services restart php@8.0
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/php@8.0/sbin/php-fpm --nodaemonize
==> Summary
🍺  /opt/homebrew/Cellar/php@8.0/8.0.28: 500 files, 77.8MB
==> Running `brew cleanup php@8.0`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
==> Caveats
==> php@8.0
To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php_module /opt/homebrew/opt/php@8.0/lib/httpd/modules/libphp.so

    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>

Finally, check DirectoryIndex includes index.php
    DirectoryIndex index.php index.html

The php.ini and php-fpm.ini file can be found in:
    /opt/homebrew/etc/php/8.0/

php@8.0 is keg-only, which means it was not symlinked into /opt/homebrew,
because this is an alternate version of another formula.

If you need to have php@8.0 first in your PATH, run:
  echo 'export PATH="/opt/homebrew/opt/php@8.0/bin:$PATH"' >> ~/.zshrc
  echo 'export PATH="/opt/homebrew/opt/php@8.0/sbin:$PATH"' >> ~/.zshrc

For compilers to find php@8.0 you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/php@8.0/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/php@8.0/include"

To restart php@8.0 after an upgrade:
  brew services restart php@8.0
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/php@8.0/sbin/php-fpm --nodaemonize


export PATH="/Applications/XAMPP/xamppfiles/bin/:$PATH"
export PATH=$PATH:/Users/msd/Code/enviroment/flutter/bin
#export PATH=$PATH:/Applications/XAMPP/bin
export PATH=$PATH:/Applications/XAMPP/xamppfiles/htdocs/composer/composer.phar
#export PATH=$PATH:/user/bin/python3
alias python=/usr/bin/python3
export PATH=$PATH:/opt/homebrew/bin
#export PATH="/opt/homebrew/opt/php@8.1/bin:$PATH"
#export PATH="/opt/homebrew/opt/php@8.1/sbin:$PATH"
export PATH="/opt/homebrew/opt/php@8.0/bin:$PATH"
export PATH="/opt/homebrew/opt/php@8.0/sbin:$PATH"