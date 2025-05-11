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