---
layout: post
title: "Free Email Provider"
date: 2025-09-04
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

လိုတဲ့ အချက်အလက်တွေ အရင်စု


### Enable two step verification


https://myaccount.google.com/security


### Create and get app password (16 character)

https://myaccount.google.com/apppasswords


### Create express.js project


```js
require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

// Add this line to parse incoming JSON data
app.use(express.json());
app.use(express.static('public')); // Assuming you put the HTML in a 'public' folder

console.log('GMAIL_USER:', process.env.GMAIL_USER);
console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD);

// Create a transporter using environment variables
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

// A simple route to send an email
app.post('/send-email', async (req, res) => {
    const { to, subject, text, html } = req.body;

    // Check if required fields are present to prevent crashes
    if (!to || !subject || !text) {
        return res.status(400).send('Missing required fields: to, subject, or text.');
    }

    // Email content
    const mailOptions = {
        from: '"Thank Book" <info@thanks.com.mm>',
        to: to,
        subject: subject,
        text: text,
        html: html
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: %s', info.messageId);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email.');
    }
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
```


