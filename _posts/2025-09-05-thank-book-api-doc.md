---
layout: post
title: "Thankbook API Doc"
date: 2025-09-05
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

## List of API

### User

/api/v1/login -> login,password -> User Information
/api/v1/signup -> name,login,password,confirm_password -> User Information
/api/v1/otp -> access_token, otp -> User Information
/api/v1/password-reset-request -> login -> User Information
/api/v1/password-reset -> access_token, new_password -> User Information

/api/v1/home -> access token, page -> list of thank notes for news feed
/api/v1/my-thanks -> access token, page -> list of thank note created by me
/api/v1/thanks -> access token, page -> list of thank note
/api/v1/thanks/{id} -> access token -> thank note detail

/api/v1/my-contacts -> access token, page -> list of contacts create by me
/api/v1/contacts/{id} -> access token -> contact detail


| Endpoint                          | Method | Parameters                                      | Description                              |
|-----------------------------------|--------|------------------------------------------------|------------------------------------------|
| /api/v1/login                     | POST   | login, password                                | User login → returns User Information     |
| /api/v1/signup                    | POST   | name, login, password, confirm_password        | User signup → returns User Information    |
| /api/v1/otp                       | POST   | access_token, otp                              | Verify OTP → returns User Information     |
| /api/v1/password-reset-request    | POST   | login                                          | Request password reset → User Information |
| /api/v1/password-reset            | POST   | access_token, new_password                     | Reset password → returns User Information |
| /api/v1/home                      | GET    | access_token, page                             | List of thank notes (news feed)           |
| /api/v1/my-thanks                 | GET    | access_token, page                             | List of thank notes created by me         |
| /api/v1/thanks                    | GET    | access_token, page                             | List of thank notes                       |
| /api/v1/thanks/{id}               | GET    | access_token                                   | Thank note detail                         |
| /api/v1/my-contacts               | GET    | access_token, page                             | List of contacts created by me            |
| /api/v1/contacts/{id}             | GET    | access_token                                   | Contact detail                            |

