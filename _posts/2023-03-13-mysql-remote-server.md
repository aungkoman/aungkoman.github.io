---
layout: post
title: How to Install MySQL Server on Ubuntu and Enable Remote Access
---

# How to Install MySQL Server on Ubuntu and Enable Remote Access

## Installation

Install MySQL

```bash
$ sudo apt-get install mysql-server libapache2-mod-auth-mysql php5-mysql
```

Activate MySQL. (Skip if after 5.7)

```bash
$ sudo mysql_install_db
```

Finsh up by running the MySQL setup script.

```bash
$ sudo mysql_secure_installation
```

Say yes to all the options.



## Login & Quit

```bash
$ mysql -u [username] -p
Enter passowrd: 
mysql> quit
```

## Create User

```bash
mysql> CREATE USER '[newuser]'@'localhost' IDENTIFIED BY '[password]';
mysql> GRANT ALL PRIVILEGES ON * . * TO '[newuser]'@'localhost';
mysql> FLUSH PRIVILEGES;

```

## Manage Permissions

```bash
mysql> GRANT [type of permission] ON [database name].[table name] TO '[username]'@'localhost';
mysql> REVOKE [type of permission] ON [database name].[table name] FROM '[username]'@'localhost';
mysql> DROP USER '[username]'@'localhost';

```

## Allow Remote Connection

1. Open `/etc/mysql/my.cnf`. (Or `/etc/mysql/mysql.conf.d/mysqld.cnf` if later than 5.7)
1. Comment this following line: `bind-address  = 127.0.0.1`
1. Run command `sudo service mysql restart`
1. Enter mysql shell, execute the following command:



```sql
GRANT ALL PRIVILEGES ON *.* TO '[username]'@'[ip]' IDENTIFIED BY '[password]' WITH GRANT OPTION;
```

If all ip addresses are allowed, replace `[ip]` to `%`.
