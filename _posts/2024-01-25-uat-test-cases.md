---
layout: post
title:  "How to build sellable side project in 5 months"
date:   2024-01-23 12:20:00 +0630
categories: howto
---

| Test Case ID | Test Case Description                        | Test Steps                                            | Expected Result                                      | Status   | Comments                |
|--------------|---------------------------------------------|--------------------------------------------------------|-------------------------------------------------------|----------|-------------------------|
| TC001        | User Authentication - Successful Login      | 1. Open the app.                                      | User is logged in without any errors.                 |          |                         |
|              |                                             | 2. Enter valid username and password.                  |                                                       |          |                         |
|              |                                             | 3. Click on the login button.                          |                                                       |          |                         |
|--------------|---------------------------------------------|--------------------------------------------------------|-------------------------------------------------------|----------|-------------------------|
| TC002        | User Authentication - Invalid Credentials  | 1. Open the app.                                      | Error message is displayed, login is denied.          |          |                         |
|              |                                             | 2. Enter an invalid username or password.              |                                                       |          |                         |
|              |                                             | 3. Click on the login button.                          |                                                       |          |                         |
|--------------|---------------------------------------------|--------------------------------------------------------|-------------------------------------------------------|----------|-------------------------|
| TC003        | Trading - Place Buy Order                   | 1. Navigate to the trading section.                   | Buy order is successfully placed, portfolio updated.   |          |                         |
|              |                                             | 2. Select a stock.                                    |                                                       |          |                         |
|              |                                             | 3. Enter valid quantity and price.                    |                                                       |          |                         |
|              |                                             | 4. Click on the "Buy" button.                         |                                                       |          |                         |
|--------------|---------------------------------------------|--------------------------------------------------------|-------------------------------------------------------|----------|-------------------------|
| TC004        | Trading - Place Sell Order                  | 1. Navigate to the trading section.                   | Sell order is successfully placed, portfolio updated.  |          |                         |
|              |                                             | 2. Select a stock from the user's portfolio.          |                                                       |          |                         |
|              |                                             | 3. Enter valid quantity and price.                    |                                                       |          |                         |
|              |                                             | 4. Click on the "Sell" button.                        |                                                       |          |                         |
|--------------|---------------------------------------------|--------------------------------------------------------|-------------------------------------------------------|----------|-------------------------|
| TC005        | Account Management - View Account Details   | 1. Navigate to the account section.                   | User can view account information.                     |          |                         |
|              |                                             | 2. Click on the "Account Details" option.             |                                                       |          |                         |
|--------------|---------------------------------------------|--------------------------------------------------------|-------------------------------------------------------|----------|-------------------------|
| TC006        | Account Management - Update Account Info    | 1. Navigate to the account section.                   | Account information is updated, changes reflected.     |          |                         |
|              |                                             | 2. Click on the "Edit Profile" option.                |                                                       |          |                         |
|              |                                             | 3. Update any relevant information.                   |                                                       |          |                         |
|              |                                             | 4. Click on the "Save" button.                        |                                                       |          |                         |
|--------------|---------------------------------------------|--------------------------------------------------------|-------------------------------------------------------|----------|-------------------------|
| TC007        | Security - Prevent Unauthorized Access      | 1. Log out of the app.                                | Redirected to the login page.                          |          |                         |
|              |                                             | 2. Attempt to access a secure section without logging in.|                                                  |                                                       |          |                         |
|--------------|---------------------------------------------|--------------------------------------------------------|-------------------------------------------------------|----------|-------------------------|
| TC008        | Security - Session Timeout                  | 1. Log in to the app.                                 | Prompted to log in again after session timeout.        |          |                         |
|              |                                             | 2. Wait for the session timeout duration.             |                                                       |          |                         |
|              |                                             | 3. Attempt to perform an action.                      |                                                       |          |                         |
