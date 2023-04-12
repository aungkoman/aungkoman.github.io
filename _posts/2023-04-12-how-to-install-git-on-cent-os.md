---
layout: post
title: How to install git on cent os
---


sudo yum install git
git --version



sudo yum install git
Loaded plugins: fastestmirror
Determining fastest mirrors
epel/x86_64/metalink                                                                                                | 4.2 kB  00:00:00     
 * base: mirror2.totbb.net
 * epel: epel.mirror.angkasa.id
 * extras: mirror2.totbb.net
 * updates: mirror2.totbb.net
base                                                                                                                | 3.6 kB  00:00:00     
epel                                                                                                                | 4.7 kB  00:00:00     
extras                                                                                                              | 2.9 kB  00:00:00     
updates                                                                                                             | 2.9 kB  00:00:00     
(1/3): epel/x86_64/updateinfo                                                                                       | 1.0 MB  00:00:00     
(2/3): epel/x86_64/primary_db                                                                                       | 7.0 MB  00:00:01     
(3/3): updates/7/x86_64/primary_db                                                                                  |  20 MB  00:00:04     
Resolving Dependencies
--> Running transaction check
---> Package git.x86_64 0:1.8.3.1-24.el7_9 will be installed
--> Processing Dependency: perl-Git = 1.8.3.1-24.el7_9 for package: git-1.8.3.1-24.el7_9.x86_64
--> Processing Dependency: perl(Term::ReadKey) for package: git-1.8.3.1-24.el7_9.x86_64
--> Processing Dependency: perl(Git) for package: git-1.8.3.1-24.el7_9.x86_64
--> Processing Dependency: perl(Error) for package: git-1.8.3.1-24.el7_9.x86_64
--> Running transaction check
---> Package perl-Error.noarch 1:0.17020-2.el7 will be installed
---> Package perl-Git.noarch 0:1.8.3.1-24.el7_9 will be installed
---> Package perl-TermReadKey.x86_64 0:2.30-20.el7 will be installed
--> Finished Dependency Resolution

Dependencies Resolved

===========================================================================================================================================
 Package                              Arch                       Version                                 Repository                   Size
===========================================================================================================================================
Installing:
 git                                  x86_64                     1.8.3.1-24.el7_9                        updates                     4.4 M
Installing for dependencies:
 perl-Error                           noarch                     1:0.17020-2.el7                         base                         32 k
 perl-Git                             noarch                     1.8.3.1-24.el7_9                        updates                      56 k
 perl-TermReadKey                     x86_64                     2.30-20.el7                             base                         31 k

Transaction Summary
===========================================================================================================================================
Install  1 Package (+3 Dependent packages)

Total download size: 4.5 M
Installed size: 22 M
Is this ok [y/d/N]: y
Downloading packages:
(1/4): perl-Error-0.17020-2.el7.noarch.rpm                                                                          |  32 kB  00:00:00     
(2/4): perl-TermReadKey-2.30-20.el7.x86_64.rpm                                                                      |  31 kB  00:00:00     
(3/4): perl-Git-1.8.3.1-24.el7_9.noarch.rpm                                                                         |  56 kB  00:00:00     
(4/4): git-1.8.3.1-24.el7_9.x86_64.rpm                                                                              | 4.4 MB  00:00:01     
-------------------------------------------------------------------------------------------------------------------------------------------
Total                                                                                                      3.9 MB/s | 4.5 MB  00:00:01     
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
  Installing : 1:perl-Error-0.17020-2.el7.noarch                                                                                       1/4 
  Installing : perl-TermReadKey-2.30-20.el7.x86_64                                                                                     2/4 
  Installing : perl-Git-1.8.3.1-24.el7_9.noarch                                                                                        3/4 
  Installing : git-1.8.3.1-24.el7_9.x86_64                                                                                             4/4 
  Verifying  : 1:perl-Error-0.17020-2.el7.noarch                                                                                       1/4 
  Verifying  : perl-Git-1.8.3.1-24.el7_9.noarch                                                                                        2/4 
  Verifying  : git-1.8.3.1-24.el7_9.x86_64                                                                                             3/4 
  Verifying  : perl-TermReadKey-2.30-20.el7.x86_64                                                                                     4/4 

Installed:
  git.x86_64 0:1.8.3.1-24.el7_9                                                                                                            

Dependency Installed:
  perl-Error.noarch 1:0.17020-2.el7           perl-Git.noarch 0:1.8.3.1-24.el7_9           perl-TermReadKey.x86_64 0:2.30-20.el7          

Complete!
[root@radius html]# git --version
git version 1.8.3.1