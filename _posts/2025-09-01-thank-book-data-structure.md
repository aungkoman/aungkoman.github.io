---
layout: post
title: "Vercel နဲ့ Render ဘာကို ရွေးကြမလဲ?"
date: 2025-09-01
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

Entity တိုင်းမှာ အောက်ပါ Fields များ ပါရန်။


- [ ] id (Primary Key)
- [ ] created_at (Datetime)
- [ ] updated_at (Datetime)
- [ ] deleted_at (Datetime )
- ---

### Entity List

Role
----
id : PK
name : varchar
description : text
created_at : datetime
updated_at : datetime
deleted_at : datetime


User
----
id : PK
email : varchar
phone : varchar
name : varchar
password : text
role_id : FK(Role.id)
created_at : datetime
updated_at : datetime
deleted_at : datetime


Profile
-------
id : PK
user_id : FK(User.id)
profile_picture : text
location : text
bio : text
blood_type : text
professional : text
dob : date
dod : date
created_at : datetime
updated_at : datetime
deleted_at : datetime


Contact
-------
id : PK
name : varchar
email : varchar
phone : varchar
phone_2 : varchar
dob : date
dod : date
created_by : FK(User.id)
created_at : datetime
updated_at : datetime
deleted_at : datetime


Contact_Profile
---------------
id : PK
contact_id : FK(Contact.id)
profile_id : FK(Profile.id)
created_at : datetime
updated_at : datetime
deleted_at : datetime


Friend
------
id : PK
from_user_id : FK(User.id)
to_user_id : FK(User.id)
friend_status : ENUM(pending, accepted, blocked)
created_at : datetime
updated_at : datetime
deleted_at : datetime


Chat_Message
------------
id : PK
friend_id : FK(Friend.id)
sender_id : FK(User.id)
chat_message_type : ENUM(text, image, file)
content : text
created_at : datetime
updated_at : datetime
deleted_at : datetime


Thank_Note
----------
id : PK
title : text
content : text
created_by : FK(User.id)
privacy : ENUM(public, friends_only, private)
created_at : datetime
updated_at : datetime
deleted_at : datetime


Contact_Thank_Note
------------------
id : PK
contact_id : FK(Contact.id)
thank_note_id : FK(Thank_Note.id)
created_at : datetime
updated_at : datetime
deleted_at : datetime


Thank_Note_Media
----------------
id : PK
thank_note_id : FK(Thank_Note.id)
media_url : text
media_type : text
created_at : datetime
updated_at : datetime
deleted_at : datetime


Thank_Note_Reaction
-------------------
id : PK
thank_note_id : FK(Thank_Note.id)
reaction_type : ENUM(👍, ❤️, 😂, 😢)
created_by : FK(User.id)
created_at : datetime
updated_at : datetime
deleted_at : datetime


Thank_Note_Comment
------------------
id : PK
thank_note_id : FK(Thank_Note.id)
comment : text
created_by : FK(User.id)
created_at : datetime
updated_at : datetime
deleted_at : datetime


----

```sql
Table Role {
  id int [pk]
  name varchar
  description text
  created_at datetime
  updated_at datetime
  deleted_at datetime
}

Table User {
  id int [pk]
  email varchar
  phone varchar
  name varchar
  password text
  role_id int [ref: > Role.id]
  created_at datetime
  updated_at datetime
  deleted_at datetime
}

Table Profile {
  id int [pk]
  user_id int [ref: > User.id, unique]
  profile_picture text
  location text
  bio text
  blood_type text
  professional text
  dob date
  dod date
  created_at datetime
  updated_at datetime
  deleted_at datetime
}

Table Contact {
  id int [pk]
  name varchar
  email varchar
  phone varchar
  phone_2 varchar
  dob date
  dod date
  created_by int [ref: > User.id]
  created_at datetime
  updated_at datetime
  deleted_at datetime
}

Table Contact_Profile {
  id int [pk]
  contact_id int [ref: > Contact.id]
  profile_id int [ref: > Profile.id]
  created_at datetime
  updated_at datetime
  deleted_at datetime
}

Table Friend {
  id int [pk]
  from_user_id int [ref: > User.id]
  to_user_id int [ref: > User.id]
  friend_status enum('pending','accepted','blocked')
  created_at datetime
  updated_at datetime
  deleted_at datetime
}

Table Chat_Message {
  id int [pk]
  friend_id int [ref: > Friend.id]
  sender_id int [ref: > User.id]
  chat_message_type enum('text','image','file')
  content text
  created_at datetime
  updated_at datetime
  deleted_at datetime
}

Table Thank_Note {
  id int [pk]
  title text
  content text
  created_by int [ref: > User.id]
  privacy enum('public','friends_only','private')
  created_at datetime
  updated_at datetime
  deleted_at datetime
}

Table Contact_Thank_Note {
  id int [pk]
  contact_id int [ref: > Contact.id]
  thank_note_id int [ref: > Thank_Note.id]
  created_at datetime
  updated_at datetime
  deleted_at datetime
}

Table Thank_Note_Media {
  id int [pk]
  thank_note_id int [ref: > Thank_Note.id]
  media_url text
  media_type text
  created_at datetime
  updated_at datetime
  deleted_at datetime
}

Table Thank_Note_Reaction {
  id int [pk]
  thank_note_id int [ref: > Thank_Note.id]
  reaction_type enum('👍','❤️','😂','😢')
  created_by int [ref: > User.id]
  created_at datetime
  updated_at datetime
  deleted_at datetime
}

Table Thank_Note_Comment {
  id int [pk]
  thank_note_id int [ref: > Thank_Note.id]
  comment text
  created_by int [ref: > User.id]
  created_at datetime
  updated_at datetime
  deleted_at datetime
}

```
