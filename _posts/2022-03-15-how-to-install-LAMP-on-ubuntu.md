---
layout: post
title:  How to install LAMP stack on ubuntu 
description: Amazon Lightsail , Putty and LAMP Stack
image: ../images/fcc/kfc.jpg
---
### How to install LAMP stack on ubuntu 
https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-set-up-putty-to-connect-using-ssh

Connect instance using putty.

https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-20-04


```bash
sudo apt update

sudo apt install apache2

sudo ufw app list

sudo ufw allow in "Apache"

sudo ufw status

http://your_server_ip
http://54.255.18.148/

sudo apt install mysql-server

sudo mysql_secure_installation



sudo mysql -u root -p 
CREATE USER 'username'@'localhost' IDENTIFIED BY 'P4ssW0rd';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost';
FLUSH PRIVILEGES;

CREATE USER 'user'@'localhost' IDENTIFIED BY 'P@ssw0rd!@#';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost';
FLUSH PRIVILEGES;



sudo apt install php libapache2-mod-php php-mysql

php -v
sudo apt install software-properties-common
sudo add-apt-repository ppa:ondrej/php

sudo apt update
sudo apt install php8.0 libapache2-mod-php8.0
sudo systemctl restart apache2
sudo apt update
sudo apt install php8.0-fpm libapache2-mod-fcgid
sudo a2enmod proxy_fcgi setenvif
sudo a2enconf php8.0-fpm
sudo systemctl restart apache2

sudo apt-get install php8-mysql

sudo service apache2 restart

cd /var/www/html

sudo git clone https://github.com/aungkoman/server-management

http://54.255.18.148/server-management
```
