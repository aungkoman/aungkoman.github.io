---
layout: post
title:  "Using chatgpt for mobile development"
date:   2023-12-05 18:15:00 +0630
categories: howto
---

ဒီ​ Screen (၆) ခုကို ChatGPT သုံးပြီး ရေးမယ်။

Sample prompt က

Create a Flutter login page with the following features:

Email/Username Input: Include a text input field for users to enter their email or username.

Password Input: Provide a secure text input field for users to enter their password.

Forgot Password: Add a "Forgot Password?" link/button that users can click to initiate a password reset process.

Login Button: Implement a button to submit the login credentials.

Sign-Up Link: Include a link/button that redirects users to a sign-up page if they don't have an account.

Social Media Login: Optionally, integrate social media login buttons for popular platforms like Google or Facebook.

Validation: Ensure proper validation for the email/username and password fields. Display error messages if the input is incorrect.

Only use single page, do not use any other library.


---


### Flutter Signup Page Prompt:

Design a Flutter signup page with the following components:

Full Name Input: Include a text input field for users to enter their full name.

Email Input: Provide a text input field for users to enter their email address.

Password Input: Implement a secure text input field for users to set their password.

Confirm Password Input: Add a secure text input field to confirm the password.


Terms and Conditions Checkbox: Include a checkbox for users to agree to the terms and conditions.

Signup Button: Implement a button to submit the signup information.

Login Link: Provide a link/button that redirects users to the login page if they already have an account.

Validation: Ensure proper validation for all input fields. Display error messages if the input is incorrect.



Only use single page, do not use any other library.


### Create Prompt for Dashboard Page

write a prompt to generate user dashboard page using flutter,

dashboard data is as following

```json
{
    "username" : "Mg Mg",
    "profile_image_url" : "https://via.placeholder.com/350x150",
    "total_point" : 1234.45,
    "spin_count" : 2,
    "gift_count" : 8,
    "created_at" : "2023-12-12 12:34:56",
    "updated_at" : "2023-12-12 12:34:56"
}
```


### Create Dashboard Prompt

Create a Flutter user dashboard page with the following features:

Header Section:
Display the user's profile image.
Show the username.
Include a logout button that redirects to the login page.

Points Section:
Display the total points earned by the user.
Show the number of spins and gifts the user has.

Activity Section:
Display the user's account creation date (created_at) and last update date (updated_at).

Profile Image:
Fetch and display the profile image from the provided URL.
Ensure that the dashboard data is dynamically loaded and displayed. 


Use appropriate Flutter widgets to structure the layout, and provide comments to explain your code. Additionally, consider using Flutter packages for image loading and formatting if necessary.


### Add package to flutter project

```bash
flutter pub add cached_network_image
flutter pub add webview_flutter
flutter pub add rive
```


### Create Webview Page Prompt



write a prompt to generate webview page using flutter that should include url change listener and loading percentage of webpage


Certainly! Here's a prompt to help you generate a Flutter code snippet for a WebView page with a URL change listener and a loading percentage display:

Flutter WebView Page Prompt:

Create a Flutter WebView page with the following features:

WebView Integration:

Implement a WebView widget to load a web page. Use a placeholder URL for demonstration purposes.
URL Change Listener:

Add a listener to detect changes in the URL loaded by the WebView.
Display a log or a toast message whenever the URL changes.
Loading Percentage Display:

Show a loading indicator or progress bar to visualize the webpage loading progress.
Display the loading percentage next to the indicator.
Error Handling:

Handle WebView errors gracefully and display an error message or a reload button when necessary.
Use appropriate Flutter widgets and packages to achieve these functionalities. Provide comments to explain your code, especially regarding the integration of the WebView, URL change listener, and loading percentage display.

Consider using the webview_flutter package or any other package that fits your needs for WebView integration. Ensure that the code follows best practices and is well-structured.

Feel free to modify or extend the prompt based on additional requirements or features you'd like to incorporate into your WebView page.


### Flutter Webview Page


### Flutter Landing Page


create prompt for welcome page in flutter that show get started button

---

Flutter Welcome Page Prompt:

Create a Flutter welcome page with the following features:

Welcome Message:

Display a welcome message or introduction text to greet the user.
Illustration or Image:

Include an illustration or image that complements the welcome message.
Get Started Button:

Add a "Get Started" button that users can click to navigate to the next screen or take a specific action.
Navigation:

Implement navigation to another screen or page when the "Get Started" button is pressed.
Optional:

You may optionally include additional elements like onboarding slides or additional buttons for other actions.
Ensure that the welcome page is visually appealing and follows good Flutter design practices. Provide comments to explain your code, especially regarding navigation and button functionality.

Consider using Flutter widgets like Text, Image, ElevatedButton, or InkWell for the button, and the Navigator class for navigation.

--- 
Feel free to customize this prompt based on your specific project requirements or design preferences.


