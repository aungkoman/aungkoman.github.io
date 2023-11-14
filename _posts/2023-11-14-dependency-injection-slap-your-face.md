---
layout: post
title:  "Dependency Injection slap your face!"
date:   2023-11-14 09:29:00 +0630
categories: howto
---

### As a software engineer/developer, what did you not “get” until it slapped you across the face?

Dependency injection. It always seemed like black magic, until I started working with APIs.

When it really slapped me across the face is when I was working with another team, and they pushed a branch that broke dependency injection. I cautioned against it, but they went ahead. It didn’t seem like a hill worth dying on at the time… until we needed to inject a service for tests several months later.

Had we used dependency injection it would been a one minute change, taking 3 lines of code in single class. We ended up having to change over 10 classes and I don’t know how many lines of code to pass the required service in. It was a complex, nested, inherited hierarchy of classes. Had to modify lots of constructor calls.

Since then I made it a point to reject any code that breaks dependency injection.


----

That is okay, sometimes it is better to get the product out and experiment with your idea than it is to do it perfect.

I would say that experimenting with using events (not messages like AMQP, Kakfa, RabbitMQ, etc) internally is extremely powerful and allow for almost infinite changes. Somewhat difficult to wrap your head around. But when the question is, “How can I do this?”, the answer is usually hook into the event and when your event is triggered, you can trigger another event that other handlers are attached. With enough events and handlers, you do create a maze of horrific proportions but such architecture is a wonder to work in. Everything is generally isolated so that you can create tests for single modules. Talking across domains becomes easy as well.

----

At a high level DI is a just factory pattern; a class where other classes get registered. For example, say you have Class1, Class2, and Class3. Class1 references Class2 in its constructor. Class2 references Class3.

Using DI you register all 3 classes within the container. How that happens will depend on the container. In a NET Core Web API (what I work with) the container is baked in, so you can do it as part of the API startup configuration. I cannot speak to other frameworks, but most will have some way to setup DI.

Then when you want a class, you let DI instantiate the class. So instead of manually instantiating Class1, you have DI create Class1.

The DI container will look at the constructor (or property, or attribute, or some language-based feature) and see it references Class2. It will start to fetch an instance of Class2. It sees Class2 references Class3. So it fetches class 3 first and passes that instance into Class2, then it passes the instance of Class2 into Class1.

Later, if you added Class4 as a reference to Class3 all you have to do is add Class4 to the Class3 constructor, and DI will figure out the rest. Without DI you’d have to modify Class1 and Class2 to pass Class4 down to Class3.

It can get more complicated than that. A lot of time DI will have scope, to determine if you get one instance per app, one instance per lifetime of the request, or one instance for every unique place it is used.

DI is also useful for having services be an interface, and the concrete implementation gets wired up with DI. That way if you need to swap the implementation later, you can do it in one place — wherever the DI is configured. As long as the interface doesn’t change, the rest of your code won’t care. It is also useful for tests, letting you swap out the actual implementation with a mock implementation.

But at its core DI is just a factory class that handles dependency resolution recursively for you, so you don’t have to change code in a parent class every time you add a dependency to a child class. You could write a DI container in an hour if you wanted to. There isn’t much to DI. It is the pattern and how it lets you abstract away concerns that is powerful.



