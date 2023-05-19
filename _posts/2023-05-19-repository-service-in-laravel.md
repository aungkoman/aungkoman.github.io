---
layout: post
title:  "Repository , Services in Laravel"
date:   2023-05-19 13:40:00 +0630
categories: howto
---

https://laracasts.com/discuss/channels/general-discussion/what-are-services

A Repository is similar to a Service if you look on the single responsibility and shared functionality point of view.

But you should name a class like a Repository when it encapsulates methods that persist and retrieve your business data with some kind of storage (e.g.: a database). Also generally we create a Repository to each entity (model).

A Service is more generic, it is basically functionality you want to share, not necessarily tied to an entity, not necessarily specific to manipulate storage.

I am not an scholar, but I think you can see a Repository as a specialized Service that encapsulates entity manipulation and business rules specific to persisting/retrieving it in your storage.

A Service can have a more generic functionality, not related to a specific entity or related to a storage.


```note
You could implement the registration in the repository if all you're doing is simply creating the new user with the request data. However, you'll often have more stuff going on when registering, such as sending a welcome email, or setting up billing. The repository should only be responsible for storing the user, not the other things, so that's where the registrar would come in.

A typical workflow would be to have the Registrar depend on several other services (Mailer, Repository, etc), then call those from within the Registrar::create method (referring to the interface here). The idea is that the Registrar knows what should be done to register a user (store in database, send mail, bill credit card), however it shouldn't know how. That's the responsibility of the other services. Likewise, the controller doesn't (and shouldn't) know how to register the user, but just pass data to the Registrar and tell it to register.
```


### Model -> Repository -> Service
when you think of a service think about a bare class with only one responsability (with eventually injected dependencies needed to perform its task).

Imagine you have to perform matrix calculations. You have two Matrix models and you want to multiply them. It is strange to put the multiplication method in the Matrix class. A better approach is a matrix calculation service with a multiply method that takes two matrixs as argument and return the resulting matrix. You can have many methods in the service performing matix algebra.


```
One side note though, don't take these patterns and best practices too far. In some cases, it's no big deal to have some extra logic in one place if there's likely not gonna be another place where you need it. An example would actually be the above post, if you're gonna have separate classes for every bit of logic in your application, it'll become a mess as well. Others may disagree, but I find m1.multiply(m2) to be more readable than MatrixOps::multiply(m1, m2). It also depends on whether you think the logic is gonna change at some point (your user registration process just might, but matrix multiplication will be the same forever).
```


```
Repository mostly for data transactions, Services for any other shared functionality, including business logic.
```


### Repository Design Pattern


to decouple the hard dependencies of models from the controllers

https://blog.devgenius.io/laravel-repository-design-pattern-a-quick-demonstration-5698d7ce7e1f


### Service Injection
Bind the interface and the implementation
The last thing we need to do is bind TaskRepository to TaskRepositoryInterface in Laravel's Service Container; we do this via a Service Provider. Create one using the following command.

php artisan make:provider RepositoryServiceProvider
Open app/Providers/RepositoryServiceProvider.php and update the register function to match the following.

public function register() 
{
    $this->app->bind(TaskRepositoryInterface::class, TaskRepository::class);
 }
Remember to include the import statement for TaskRepository and TaskRepositoryInterface.

use App\Interfaces\TaskRepositoryInterface;
use App\Repositories\TaskRepository;
Finally, add the new Service Provider to the providers array in config/app.php.

'providers' => [
    // ...other declared providers
    App\Providers\RepositoryServiceProvider::class,
];



