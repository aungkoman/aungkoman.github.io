---
layout: post
title: Encrypt API between Flutter and Laravel
---
How to encrypt API between Flutter and Laravel

## what we need

- payload as String
- secret key (key lenght is 32)
- IV , dynamic seed

## what we do

- encrypt payload string using IV dynamic seed and secret key
- send encrypted string along with IV dynamic seed

## how we decrypt

- get request body
- separate encrypted string and IV
- decrypt encrypted string using secret key and IV

## sent back

- encrypt response body using secret key and dynamic IV seed
- send back http response along with dynamic IV Seed

## Let's get CODE

in Flutter
