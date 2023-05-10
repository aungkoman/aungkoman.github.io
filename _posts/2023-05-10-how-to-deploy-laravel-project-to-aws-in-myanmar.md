---
layout: post
title:  "How to deploy laravel to AWS in Myanmar"
date:   2023-05-09 15:30:00 +0630
categories: how to
---

ကြိုတင်ပြင်ဆင်ထားရမယ့် အချက်အလက်တွေ

- production database credential
- ssh access to production server 
- github repo with access token

## Our Data



DB_HOST="ls-94ce68bb3fd940cea$%&^&*HTTGf86786iusdyfiusdghfk6875eac1afe8cc2cb2.cbgrie1zfbwy.ap-south-1.rds.amazonaws.com"
DB_PORT=3306
DB_DATABASE="mmpos"
DB_USERNAME="ourusername"
DB_PASSWORD="yuh^*hytN7sdi8fy&686*&^87^*yiU68&*"


sudo git clone https://ghp_Qx5G9i0U6KW7slrOKJHIUy7868GHUT785hguys@github.com/mmsoftware100/pos-backend-api .

## Copy File in linux

in our case, we need to copy .env

cp [...file/directory-sources] [destination]

sudo cp mq/.env mmpos/.env

composer install

## Permission

sudo chmod -R 777 storage


## Point out subdomain and ip in CloudFlare

blah blah blah

## Sub Domain 

cd /etc/apache2/sites-available

sudo cp 000-default.conf pos.mmsoftware100.com.conf

```conf
<VirtualHost *:80>
        # The ServerName directive sets the request scheme, hostname and port that
        # the server uses to identify itself. This is used when creating
        # redirection URLs. In the context of virtual hosts, the ServerName
        # specifies what hostname must appear in the request's Host: header to
        # match this virtual host. For the default virtual host (this file) this
        # value is not decisive as it is used as a last resort host regardless.
        # However, you must set it for any further virtual host explicitly.
        #ServerName www.example.com

        ServerAdmin webmaster@localhost
        # our sub domain
        ServerName pos.mmsoftware100.com
        # our project public path
        DocumentRoot /var/www/html/public

        # our project public path
        <Directory /var/www/html/public>
            Options Indexes FollowSymLinks MultiViews
            AllowOverride All
            Require all granted
        </Directory>

```


## Check Config
sudo apache2ctl configtest


## Enable Sub Domain

sudo a2ensite pos.mmsoftware100.com.conf
sudo a2ensite pos.mmsoftware100.com.conf

```bash
Enabling site pos.mmsoftware100.com.
To activate the new configuration, you need to run:
  systemctl reload apache2
```

## Disable defualt 
sudo a2dissite 000-default.conf

## Restart
sudo systemctl reload apache2
