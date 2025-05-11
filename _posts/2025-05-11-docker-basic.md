---
layout: post
title: "Docker Basic"
date: 2025-05-08
categories: productivity programming
---
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