---
layout: post
title: "Docker Basic"
date: 2025-05-08
categories: productivity programming
---

##  Ref
https://www.freecodecamp.org/news/the-docker-handbook/


## Install docker desktop

- install from official website

## Terminal

```bash
# list container list
docker ps

# start container
docker run hello-world
# list container
docker ps -a

docker run <image name>

# run container
docker container run <image name>

# port forwarding
docker container run --publish 8080:80 fhsinchy/hello-dock


--publish <host port>:<container port>


--detach or -d

# detech mode
docker container run --detach --publish 8080:80 fhsinchy/hello-dock

# list running container
docker container ls

# list all
docker container ls --all

# name
docker container run --detach --publish 8888:80 --name hello-dock-container fhsinchy/hello-dock

# rename
docker container rename <container identifier> <new name>
docker container rename gifted_sammet hello-dock-container-2
docker container rename gifted_archimedes hello-dock-container-2

# stop container
docker container stop <container identifier>
docker container stop hello-dock-container

gifted_archimedes
docker container kill hello-dock-container-2

# start container
docker container start <container identifier>
docker container ls --all

# create container 
docker container create --publish 8080:80 fhsinchy/hello-dock

# remove container
docker container rm <container identifier>
docker container rm e7a3d7e140c5

# remove when stoped
docker container run --rm --detach --publish 8888:80 --name hello-dock-volatile fhsinchy/hello-dock


# interactive mode
docker container run ubuntu -it
docker container run --rm -it ubuntu
docker container run -it ubuntu
docker container run -it node
docker container run -it node --interactive --tty
docker run alpine uname -a

# run command
docker container run <image name> <command>


# mounting
docker container run --rm -v $(pwd):/zone fhsinchy/rmbyext pdf

--volume <local file system directory absolute path>:<container file system directory absolute path>:<read write access>


docker container run --rm --detach --name default-nginx --publish 8080:80 nginx


# create image
docker image <command> <options>
docker image build .

# run created image
docker container run --rm --detach --name custom-nginx-packaged --publish 8080:80 3199372aa3fc
docker container run  --detach --name custom-nginx-packaged --publish 8080:80 92d4ee56c62c


<none>                     <none>    92d4ee56c62c   5 minutes ago   110MB

# tag image
docker tag 92d4ee56c62c hello-world:latest


# build 
docker build -t hello-nginx .

#Dockerfile 
FROM ubuntu:latest

EXPOSE 80

RUN apt-get update && \
    apt-get install nginx -y && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

CMD ["nginx", "-g", "daemon off;"]

# Build Image
docker build -t hello-nginx .
# Run Image
docker run -p 8080:80 hello-nginx


# Tag
--tag <image repository>:<image tag>


docker image build --tag custom-nginx:packaged .


# List Images
docker image ls
# delete images
docker image prune --force
# get image history
docker image history custom-nginx:packaged

docker image build --tag custom-nginx:built .

```



## Bash Logs
```bash
msd@MSDs-Mac-mini-3 ~ % docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
c9c5fd25a1bd: Pull complete 
Digest: sha256:c41088499908a59aae84b0a49c70e86f4731e588a737f1637e73c8c09d995654
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```


## Container Listing

```bash
msd@MSDs-Mac-mini-3 ~ % docker ps -a
CONTAINER ID   IMAGE                             COMMAND                  CREATED              STATUS                          PORTS                  NAMES
474b42757540   hello-world                       "/hello"                 About a minute ago   Exited (0) About a minute ago                          ecstatic_poitras
27cdbd780fd6   docker/welcome-to-docker:latest   "/docker-entrypoint.…"   10 hours ago         Exited (255) 8 minutes ago      0.0.0.0:8088->80/tcp   welcome-to-docker
msd@MSDs-Mac-mini-3 ~ % 
```

## Listing Containers

```bash
msd@MSDs-Mac-mini-3 ~ % docker container ls
CONTAINER ID   IMAGE                 COMMAND                  CREATED          STATUS          PORTS                  NAMES
d4a852a8854f   fhsinchy/hello-dock   "/docker-entrypoint.…"   40 seconds ago   Up 39 seconds   0.0.0.0:8080->80/tcp   gifted_archimedes
msd@MSDs-Mac-mini-3 ~ % 
```
## Nameed container

```bash
msd@MSDs-Mac-mini-3 ~ % docker container run --detach --publish 8888:80 --name hello-dock-container fhsinchy/hello-dock
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
e59b68b094d42790800c69f50f5192cb14e00e707f61639081c90bb318f2d406
msd@MSDs-Mac-mini-3 ~ % 
```

## Creating container  without running

```bash
msd@MSDs-Mac-mini-3 ~ % docker container create --publish 8080:80 fhsinchy/hello-dock
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
e7a3d7e140c524a51d0c2eaa5091aaf507fcc879da8ff65df5bccf3fb0b1251a
msd@MSDs-Mac-mini-3 ~ % 
```

## Create Image

```bash
msd@MSDs-Mac-mini-3 hello-world % ls
Dockerfile
msd@MSDs-Mac-mini-3 hello-world % docker image build .
[+] Building 9.3s (4/5)                                                                                                                               docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                                  0.0s
 => => transferring dockerfile: 213B                                                                                                                                  0.0s
 => WARN: JSONArgsRecommended: JSON arguments recommended for CMD to prevent unintended behavior related to OS signals (line 9)                                       0.0s
 => [internal] load metadata for docker.io/library/ubuntu:latest                                                                                                      0.0s
 => [internal] load .dockerignore                                                                                                                                     0.0s
 => => transferring context: 2B                                                                                                                                       0.0s
 => [1/2] FROM docker.io/library/ubuntu:latest                                                                                                                        0.0s
 => [2/2] RUN apt-get update &&     apt-get install nginx -y &&     apt-get clean && rm -rf /var/lib/apt/lists/*                                                      9.3s
 => => # Get:2 http://ports.ubuntu.com/ubuntu-ports noble-updates InRelease [126 kB]                                                                                      
 => => # Get:3 http://ports.ubuntu.com/ubuntu-ports noble-backports InRelease [126 kB]                                                                                    
 => => # Get:4 http://ports.ubuntu.com/ubuntu-ports noble-security InRelease [126 kB]                                                                                     
 => => # Get:5 http://ports.ubuntu.com/ubuntu-ports noble/multiverse arm64 Packages [274 kB]                                                                              
 => => # Get:6 http://ports.ubuntu.com/ubuntu-ports noble/main arm64 Packages [1776 kB]                                                                                   
 => => # Get:7 http://ports.ubuntu.com/ubuntu-ports noble/universe arm64 Packages [19.0 MB]         
 ```

## Result on creating image

```bash
msd@MSDs-Mac-mini-3 hello-world % docker image build .
[+] Building 22.6s (6/6) FINISHED                                                                                                                     docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                                  0.0s
 => => transferring dockerfile: 213B                                                                                                                                  0.0s
 => WARN: JSONArgsRecommended: JSON arguments recommended for CMD to prevent unintended behavior related to OS signals (line 9)                                       0.0s
 => [internal] load metadata for docker.io/library/ubuntu:latest                                                                                                      0.0s
 => [internal] load .dockerignore                                                                                                                                     0.0s
 => => transferring context: 2B                                                                                                                                       0.0s
 => [1/2] FROM docker.io/library/ubuntu:latest                                                                                                                        0.0s
 => [2/2] RUN apt-get update &&     apt-get install nginx -y &&     apt-get clean && rm -rf /var/lib/apt/lists/*                                                     22.5s
 => exporting to image                                                                                                                                                0.0s 
 => => exporting layers                                                                                                                                               0.0s 
 => => writing image sha256:92d4ee56c62c848f890433bbeba5509d85a4ba08d0e67c91b52f58702936b669                                                                          0.0s 
                                                                                                                                                                           
 1 warning found (use docker --debug to expand):                                                                                                                           
 - JSONArgsRecommended: JSON arguments recommended for CMD to prevent unintended behavior related to OS signals (line 9)                                                   

What's next:
    View a summary of image vulnerabilities and recommendations → docker scout quickview 
msd@MSDs-Mac-mini-3 hello-world % 
```

## Docker Compose

what is docker compose 

```bash
docker compose up
docker compose up -d --build
```

what is this?


### Bash Logs

```bash
msd@MSDs-Mac-mini-3 loxa % docker compose up
[+] Running 3/3
 ✔ Container loxa-postgres-1  Created                                                                                                              0.0s 
 ✔ Container loxa-web-1       Created                                                                                                              0.0s 
 ✔ Container loxa-nginx-1     Created                                                                                                              0.0s 
Attaching to nginx-1, postgres-1, web-1
postgres-1  | 
postgres-1  | PostgreSQL Database directory appears to contain a database; Skipping initialization
postgres-1  | 
postgres-1  | 2025-10-20 06:25:14.959 UTC [1] LOG:  starting PostgreSQL 16.10 (Debian 16.10-1.pgdg13+1) on aarch64-unknown-linux-gnu, compiled by gcc (Debian 14.2.0-19) 14.2.0, 64-bit
postgres-1  | 2025-10-20 06:25:14.959 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres-1  | 2025-10-20 06:25:14.959 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres-1  | 2025-10-20 06:25:14.961 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres-1  | 2025-10-20 06:25:14.965 UTC [29] LOG:  database system was interrupted; last known up at 2025-10-20 06:23:54 UTC
postgres-1  | 2025-10-20 06:25:15.006 UTC [29] LOG:  database system was not properly shut down; automatic recovery in progress
postgres-1  | 2025-10-20 06:25:15.008 UTC [29] LOG:  invalid record length at 0/19605B0: expected at least 24, got 0
postgres-1  | 2025-10-20 06:25:15.008 UTC [29] LOG:  redo is not required
postgres-1  | 2025-10-20 06:25:15.010 UTC [27] LOG:  checkpoint starting: end-of-recovery immediate wait
postgres-1  | 2025-10-20 06:25:15.014 UTC [27] LOG:  checkpoint complete: wrote 3 buffers (0.0%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.001 s, sync=0.001 s, total=0.005 s; sync files=2, longest=0.001 s, average=0.001 s; distance=0 kB, estimate=0 kB; lsn=0/19605B0, redo lsn=0/19605B0
postgres-1  | 2025-10-20 06:25:15.016 UTC [1] LOG:  database system is ready to accept connections
nginx-1     | /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
nginx-1     | /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
nginx-1     | /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
nginx-1     | 10-listen-on-ipv6-by-default.sh: info: IPv6 listen already enabled
nginx-1     | /docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
nginx-1     | /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
nginx-1     | /docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
nginx-1     | /docker-entrypoint.sh: Configuration complete; ready for start up
nginx-1     | 2025/10/20 06:25:25 [warn] 1#1: duplicate extension "m3u8", content type: "application/vnd.apple.mpegurl", previous content type: "application/vnd.apple.mpegurl" in /etc/nginx/nginx.conf:13
nginx-1     | nginx: [warn] duplicate extension "m3u8", content type: "application/vnd.apple.mpegurl", previous content type: "application/vnd.apple.mpegurl" in /etc/nginx/nginx.conf:13
nginx-1     | 2025/10/20 06:25:25 [warn] 1#1: duplicate extension "ts", content type: "video/mp2t", previous content type: "video/mp2t" in /etc/nginx/nginx.conf:14
nginx-1     | nginx: [warn] duplicate extension "ts", content type: "video/mp2t", previous content type: "video/mp2t" in /etc/nginx/nginx.conf:14
nginx-1     | 2025/10/20 06:25:25 [warn] 1#1: duplicate extension "mp4", content type: "video/mp4", previous content type: "video/mp4" in /etc/nginx/nginx.conf:15
nginx-1     | nginx: [warn] duplicate extension "mp4", content type: "video/mp4", previous content type: "video/mp4" in /etc/nginx/nginx.conf:15
nginx-1     | 2025/10/20 06:25:25 [warn] 1#1: duplicate extension "pdf", content type: "application/pdf", previous content type: "application/pdf" in /etc/nginx/nginx.conf:16
nginx-1     | nginx: [warn] duplicate extension "pdf", content type: "application/pdf", previous content type: "application/pdf" in /etc/nginx/nginx.conf:16
web-1       | Performing system checks...
web-1       | 
web-1       | System check identified some issues:
web-1       | 
web-1       | WARNINGS:
web-1       | ?: (staticfiles.W004) The directory '/app/api/static' in the STATICFILES_DIRS setting does not exist.
web-1       | ?: (staticfiles.W004) The directory '/app/loxa/static' in the STATICFILES_DIRS setting does not exist.
web-1       | ?: (staticfiles.W004) The directory '/app/static' in the STATICFILES_DIRS setting does not exist.
web-1       | 
web-1       | System check identified 3 issues (0 silenced).
web-1       | 
web-1       | You have 49 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, api, auth, contenttypes, orgs, sessions, social_django, token_blacklist.
web-1       | Run 'python manage.py migrate' to apply them.
web-1       | October 20, 2025 - 06:25:28
web-1       | Django version 5.2.5, using settings 'loxa.settings'
web-1       | Starting development server at http://0.0.0.0:8000/
web-1       | Quit the server with CONTROL-C.
web-1       | 
web-1       | WARNING: This is a development server. Do not use it in a production setting. Use a production WSGI or ASGI server instead.
web-1       | For more information on production servers see: https://docs.djangoproject.com/en/5.2/howto/deployment/

```


Welcome to Ubuntu 22.04.5 LTS (GNU/Linux 5.15.0-157-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Mon Oct 20 01:52:47 PM +0630 2025

  System load:  0.06               Processes:                274
  Usage of /:   55.9% of 47.41GB   Users logged in:          1
  Memory usage: 12%                IPv4 address for enp6s18: 103.154.241.54
  Swap usage:   0%

 * Strictly confined Kubernetes makes edge and IoT secure. Learn how MicroK8s
   just raised the bar for easy, resilient and secure K8s cluster deployment.

   https://ubuntu.com/engage/secure-kubernetes-at-the-edge

Expanded Security Maintenance for Applications is not enabled.

8 updates can be applied immediately.
To see these additional updates run: apt list --upgradable

13 additional security updates can be applied with ESM Apps.
Learn more about enabling ESM Apps service at https://ubuntu.com/esm


*** System restart required ***
Last login: Mon Oct 20 13:39:41 2025 from 18.139.20.25
lms@103-154-241-54:~$ docker compose exec postgres psql -U postgres
no configuration file provided: not found
lms@103-154-241-54:~$ cd /var/www/html
lms@103-154-241-54:/var/www/html$ ls
400.shtml  401.shtml  403.shtml  404.shtml  413.shtml  500.shtml  cp_errordocument.shtml  cptechdomain.shtml  index.html  index.nginx-debian.html  loxa
lms@103-154-241-54:/var/www/html$ cd loxa
lms@103-154-241-54:/var/www/html/loxa$ docker compose exec postgres psql -U postgres
psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL:  role "postgres" does not exist
lms@103-154-241-54:/var/www/html/loxa$ docker compose exec postgres psql -U ${POSTGRES_USER} -d ${POSTGRES_DB} -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
docker compose exec web python manage.py migrate
psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL:  role "-d" does not exist
System check identified some issues:

WARNINGS:
?: (staticfiles.W004) The directory '/app/api/static' in the STATICFILES_DIRS setting does not exist.
?: (staticfiles.W004) The directory '/app/loxa/static' in the STATICFILES_DIRS setting does not exist.
?: (staticfiles.W004) The directory '/app/static' in the STATICFILES_DIRS setting does not exist.
Operations to perform:
  Apply all migrations: admin, api, auth, contenttypes, orgs, sessions, social_django, token_blacklist
Running migrations:
  Applying contenttypes.0001_initial...Traceback (most recent call last):
  File "/usr/local/lib/python3.12/site-packages/django/db/backends/utils.py", line 103, in _execute
    return self.cursor.execute(sql)
           ^^^^^^^^^^^^^^^^^^^^^^^^
psycopg2.errors.DuplicateTable: relation "django_content_type" already exists


The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/app/manage.py", line 22, in <module>
    main()
  File "/app/manage.py", line 18, in main
    execute_from_command_line(sys.argv)
  File "/usr/local/lib/python3.12/site-packages/django/core/management/__init__.py", line 442, in execute_from_command_line
    utility.execute()
  File "/usr/local/lib/python3.12/site-packages/django/core/management/__init__.py", line 436, in execute
    self.fetch_command(subcommand).run_from_argv(self.argv)
  File "/usr/local/lib/python3.12/site-packages/django/core/management/base.py", line 416, in run_from_argv
    self.execute(*args, **cmd_options)
  File "/usr/local/lib/python3.12/site-packages/django/core/management/base.py", line 460, in execute
    output = self.handle(*args, **options)
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/site-packages/django/core/management/base.py", line 107, in wrapper
    res = handle_func(*args, **kwargs)
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/site-packages/django/core/management/commands/migrate.py", line 353, in handle
    post_migrate_state = executor.migrate(
                         ^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/site-packages/django/db/migrations/executor.py", line 135, in migrate
    state = self._migrate_all_forwards(
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/site-packages/django/db/migrations/executor.py", line 167, in _migrate_all_forwards
    state = self.apply_migration(
            ^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/site-packages/django/db/migrations/executor.py", line 255, in apply_migration
    state = migration.apply(state, schema_editor)
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/site-packages/django/db/migrations/migration.py", line 132, in apply
    operation.database_forwards(
  File "/usr/local/lib/python3.12/site-packages/django/db/migrations/operations/models.py", line 97, in database_forwards
    schema_editor.create_model(model)
  File "/usr/local/lib/python3.12/site-packages/django/db/backends/base/schema.py", line 512, in create_model
    self.execute(sql, params or None)
  File "/usr/local/lib/python3.12/site-packages/django/db/backends/postgresql/schema.py", line 45, in execute
    return super().execute(sql, params)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/site-packages/django/db/backends/base/schema.py", line 204, in execute
    cursor.execute(sql, params)
  File "/usr/local/lib/python3.12/site-packages/django/db/backends/utils.py", line 122, in execute
    return super().execute(sql, params)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/site-packages/django/db/backends/utils.py", line 79, in execute
    return self._execute_with_wrappers(
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/site-packages/django/db/backends/utils.py", line 92, in _execute_with_wrappers
    return executor(sql, params, many, context)
           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/site-packages/django/db/backends/utils.py", line 100, in _execute
    with self.db.wrap_database_errors:
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/usr/local/lib/python3.12/site-packages/django/db/utils.py", line 91, in __exit__
    raise dj_exc_value.with_traceback(traceback) from exc_value
  File "/usr/local/lib/python3.12/site-packages/django/db/backends/utils.py", line 103, in _execute
    return self.cursor.execute(sql)
           ^^^^^^^^^^^^^^^^^^^^^^^^
django.db.utils.ProgrammingError: relation "django_content_type" already exists

lms@103-154-241-54:/var/www/html/loxa$ docker compose exec postgres bash
root@58da2e2e254b:/# psql -U postgres
psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL:  role "postgres" does not exist
root@58da2e2e254b:/# ^C
root@58da2e2e254b:/# exit;
exit
lms@103-154-241-54:/var/www/html/loxa$ nano .env
lms@103-154-241-54:/var/www/html/loxa$ docker compose exec postgres bash
root@58da2e2e254b:/# psql -U loxa
psql: error: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed: FATAL:  database "loxa" does not exist
root@58da2e2e254b:/# show databases;
bash: show: command not found
root@58da2e2e254b:/# LIST databases;
bash: LIST: command not found
root@58da2e2e254b:/# exit;
exit
lms@103-154-241-54:/var/www/html/loxa$ nano .env
lms@103-154-241-54:/var/www/html/loxa$ nano .env
lms@103-154-241-54:/var/www/html/loxa$ docker compose exec postgres psql -U loxa -d loxa_db
psql (16.10 (Debian 16.10-1.pgdg13+1))
Type "help" for help.

loxa_db=# ^C
loxa_db=# exit;
lms@103-154-241-54:/var/www/html/loxa$ docker compose exec postgres psql -U loxa -d loxa_db -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
NOTICE:  drop cascades to 43 other objects
DETAIL:  drop cascades to table django_migrations
drop cascades to table django_content_type
drop cascades to table auth_permission
drop cascades to table auth_group
drop cascades to table auth_group_permissions
drop cascades to table accounts_user
drop cascades to table accounts_user_groups
drop cascades to table accounts_user_user_permissions
drop cascades to table accounts_role
drop cascades to table accounts_organization
drop cascades to table accounts_user_roles
drop cascades to table accounts_organizationmembership
drop cascades to table django_admin_log
drop cascades to table orgs_org
drop cascades to table orgs_catalog
drop cascades to table orgs_program
drop cascades to table orgs_orgmembership
drop cascades to table orgs_level
drop cascades to table api_lesson
drop cascades to table api_course
drop cascades to table api_lessonasset
drop cascades to table api_livesession
drop cascades to table api_attendance
drop cascades to table api_module
drop cascades to table api_seatreservation
drop cascades to table api_enrollment
drop cascades to table authphone_phoneotp
drop cascades to table django_session
drop cascades to table social_auth_association
drop cascades to table social_auth_code
drop cascades to table social_auth_nonce
drop cascades to table social_auth_usersocialauth
drop cascades to table social_auth_partial
drop cascades to table token_blacklist_blacklistedtoken
drop cascades to table token_blacklist_outstandingtoken
drop cascades to table account_emailaddress
drop cascades to table account_emailconfirmation
drop cascades to table authtoken_token
drop cascades to table django_site
drop cascades to table socialaccount_socialaccount
drop cascades to table socialaccount_socialapp
drop cascades to table socialaccount_socialapp_sites
drop cascades to table socialaccount_socialtoken
DROP SCHEMA
CREATE SCHEMA
lms@103-154-241-54:/var/www/html/loxa$ docker compose exec web python manage.py migrate
System check identified some issues:

WARNINGS:
?: (staticfiles.W004) The directory '/app/api/static' in the STATICFILES_DIRS setting does not exist.
?: (staticfiles.W004) The directory '/app/loxa/static' in the STATICFILES_DIRS setting does not exist.
?: (staticfiles.W004) The directory '/app/static' in the STATICFILES_DIRS setting does not exist.
Operations to perform:
  Apply all migrations: admin, api, auth, contenttypes, orgs, sessions, social_django, token_blacklist
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying orgs.0001_initial... OK
  Applying api.0001_initial... OK
  Applying api.0002_phoneotp... OK
  Applying api.0003_delete_phoneotp_alter_course_code_and_more... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying auth.0012_alter_user_first_name_max_length... OK
  Applying sessions.0001_initial... OK
  Applying social_django.0001_initial... OK
  Applying social_django.0002_add_related_name... OK
  Applying social_django.0003_alter_email_max_length... OK
  Applying social_django.0004_auto_20160423_0400... OK
  Applying social_django.0005_auto_20160727_2333... OK
  Applying social_django.0006_partial... OK
  Applying social_django.0007_code_timestamp... OK
  Applying social_django.0008_partial_timestamp... OK
  Applying social_django.0009_auto_20191118_0520... OK
  Applying social_django.0010_uid_db_index... OK
  Applying social_django.0011_alter_id_fields... OK
  Applying social_django.0012_usersocialauth_extra_data_new... OK
  Applying social_django.0013_migrate_extra_data... OK
  Applying social_django.0014_remove_usersocialauth_extra_data... OK
  Applying social_django.0015_rename_extra_data_new_usersocialauth_extra_data... OK
  Applying token_blacklist.0001_initial... OK
  Applying token_blacklist.0002_outstandingtoken_jti_hex... OK
  Applying token_blacklist.0003_auto_20171017_2007... OK
  Applying token_blacklist.0004_auto_20171017_2013... OK
  Applying token_blacklist.0005_remove_outstandingtoken_jti... OK
  Applying token_blacklist.0006_auto_20171017_2113... OK
  Applying token_blacklist.0007_auto_20171017_2214... OK
  Applying token_blacklist.0008_migrate_to_bigautofield... OK
  Applying token_blacklist.0010_fix_migrate_to_bigautofield... OK
  Applying token_blacklist.0011_linearizes_history... OK
  Applying token_blacklist.0012_alter_outstandingtoken_user... OK
  Applying token_blacklist.0013_alter_blacklistedtoken_options_and_more... OK
lms@103-154-241-54:/var/www/html/loxa$ docker compose exec web python manage.py createsuperuser
System check identified some issues:

WARNINGS:
?: (staticfiles.W004) The directory '/app/api/static' in the STATICFILES_DIRS setting does not exist.
?: (staticfiles.W004) The directory '/app/loxa/static' in the STATICFILES_DIRS setting does not exist.
?: (staticfiles.W004) The directory '/app/static' in the STATICFILES_DIRS setting does not exist.
Username (leave blank to use 'root'): admin
Email address: admin@mail.com
Password: 
Password (again): 
This password is too common.
Bypass password validation and create user anyway? [y/N]: y
Superuser created successfully.







