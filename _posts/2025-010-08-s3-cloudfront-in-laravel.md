---
layout: post
title: "Project Board at Software 100"
date: 2025-10-08
categories: tutorials
author: MSD
tags: [tutorial] # TAG names should always be lowercase
---

Laravel မှာ S3 နဲ့ CloudFront ကို အသုံးပြုပြီး ဖိုင်တွေကို SERVE လုပ်ချင်ရင် အောက်ပါအတိုင်း သတ်မှတ်ပေးရမှာ ဖြစ်ပါတယ်။


### s3

### cloudfront

### laravel configuration, environment variables


### integration in crud api

### using service class for s3 and cloudfront store and retrieve public links


Of course. Here is a comprehensive guide to integrating AWS S3 and CloudFront into your Laravel project for handling file uploads in both an API and an admin panel, complete with a service class and a profile management example.

This approach creates a robust and scalable file management system. By using a service class, you keep your controllers clean and your file logic reusable. Using temporary URLs is a best practice for securing user-uploaded content.

-----

### \#\# 1. AWS & Laravel Configuration ⚙️

First, you'll need to set up your AWS services and configure your Laravel application to communicate with them.

#### **On AWS (Amazon Web Services):**

1.  **Create an S3 Bucket:** Go to the S3 service in your AWS console. Create a new bucket (e.g., `my-laravel-app-uploads`). **Important:** Keep "Block all public access" checked. We'll grant access securely through CloudFront.
2.  **Create a CloudFront Distribution:** Go to the CloudFront service.
      * Click "Create distribution."
      * For the **Origin domain**, select your newly created S3 bucket.
      * For **Origin access**, select "Origin access control settings (recommended)." Click "Create control setting." This creates an Origin Access Control (OAC) which allows CloudFront to securely access the S3 bucket.
      * After creating the distribution, AWS will give you a bucket policy to copy. Go back to your S3 bucket -\> Permissions -\> Bucket policy and paste it in. This policy allows the CloudFront OAC to read objects from your bucket.
      * Note down your **Distribution domain name** (e.g., `d123xyz.cloudfront.net`).
3.  **Create an IAM User:** Go to the IAM service.
      * Create a new user with "programmatic access."
      * Attach policies that give it permission to manage objects in your specific S3 bucket (e.g., `s3:PutObject`, `s3:GetObject`, `s3:DeleteObject`).
      * Save the **Access Key ID** and **Secret Access Key**.

#### **In Your Laravel Project:**

1.  **Install the AWS S3 Filesystem Adapter:**

    ```bash
    composer require league/flysystem-aws-s3-v3 "^3.0"
    ```

2.  **Configure `.env` File:** Add your AWS credentials and CloudFront URL to your `.env` file.

    ```ini
    FILESYSTEM_DISK=s3

    AWS_ACCESS_KEY_ID=YOUR_IAM_ACCESS_KEY
    AWS_SECRET_ACCESS_KEY=YOUR_IAM_SECRET_KEY
    AWS_DEFAULT_REGION=your-bucket-region # e.g., us-east-1
    AWS_BUCKET=your-s3-bucket-name

    CLOUDFRONT_URL=https://d123xyz.cloudfront.net
    ```

3.  **Configure `config/filesystems.php`:** Update the `s3` disk configuration to use the CloudFront URL. This tells Laravel to generate all S3 URLs using your CDN domain.

    ```php
    's3' => [
        'driver' => 's3',
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION'),
        'bucket' => env('AWS_BUCKET'),
        'url' => env('CLOUDFRONT_URL'), // This is the key change
        'endpoint' => env('AWS_ENDPOINT'),
        'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false),
        'throw' => false,
    ],
    ```

-----

### \#\# 2. The FileUploadService Class 📁

Creating a service class helps encapsulate all file handling logic, making it reusable for both your API and admin panel controllers.

1.  Create a new file at `app/Services/FileUploadService.php`.

2.  Add the following code. This service will handle uploading, deleting, and generating secure, temporary URLs.

    ```php
    <?php

    namespace App\Services;

    use Illuminate\Http\UploadedFile;
    use Illuminate\Support\Facades\Storage;

    class FileUploadService
    {
        /**
         * Upload a file to S3.
         *
         * @param UploadedFile $file The file to upload.
         * @param string $folder The folder within the S3 bucket to store the file.
         * @return string|false The path to the stored file or false on failure.
         */
        public function upload(UploadedFile $file, string $folder = 'uploads'): string|false
        {
            // Generate a unique name for the file to avoid collisions
            $fileName = time() . '_' . $file->hashName();
            $path = "{$folder}/{$fileName}";

            // Store the file on the 's3' disk
            return Storage::disk('s3')->put($path, $file) ? $path : false;
        }

        /**
         * Get a secure, temporary URL for a private file.
         *
         * @param string|null $path The path to the file on S3.
         * @param int $minutes The duration for which the URL is valid.
         * @return string|null The temporary URL or null if path is invalid.
         */
        public function getTemporaryUrl(?string $path, int $minutes = 15): ?string
        {
            if (!$path) {
                return null;
            }
            return Storage::disk('s3')->temporaryUrl($path, now()->addMinutes($minutes));
        }

        /**
         * Delete a file from S3.
         *
         * @param string|null $path The path to the file on S3.
         * @return bool True on success, false on failure or if path is null.
         */
        public function delete(?string $path): bool
        {
            if (!$path) {
                return false;
            }
            return Storage::disk('s3')->delete($path);
        }
    }
    ```

-----

### \#\# 3. Profile Management Module (CRUD Example) 👤

Now, let's create the simple profile module to use this service.

#### **Model & Migration**

1.  **Create Migration and Model:**

    ```bash
    php artisan make:model Profile -m
    ```

2.  **Edit the Migration File:** Open the generated migration file in `database/migrations/` and define the schema. We only store the **path** to the file, not the full URL.

    ```php
    public function up(): void
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('picture_path')->nullable(); // Stores the path on S3, e.g., 'profiles/12345_abc.jpg'
            $table->timestamps();
        });
    }
    ```

3.  **Run the Migration:**

    ```bash
    php artisan migrate
    ```

4.  **Configure the Model:** Open `app/Models/Profile.php` and set the `fillable` properties.

    ```php
    class Profile extends Model
    {
        use HasFactory;

        protected $fillable = ['name', 'picture_path'];
    }
    ```

#### **Controller**

1.  **Create the Controller:**

    ```bash
    php artisan make:controller Api/ProfileController
    ```

2.  **Implement the CRUD Logic:** Open `app/Http/Controllers/Api/ProfileController.php` and use the `FileUploadService`. This controller can be used for your API or adapted for a web/admin panel context.

    ```php
    <?php

    namespace App\Http\Controllers\Api;

    use App\Http\Controllers\Controller;
    use App\Models\Profile;
    use App\Services\FileUploadService;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Validator;

    class ProfileController extends Controller
    {
        protected $fileUploadService;

        // Inject the service via the constructor
        public function __construct(FileUploadService $fileUploadService)
        {
            $this->fileUploadService = $fileUploadService;
        }

        /**
         * Display a listing of the resource.
         */
        public function index()
        {
            $profiles = Profile::all()->map(function ($profile) {
                // Generate temporary URL for each profile picture on the fly
                $profile->picture_url = $this->fileUploadService->getTemporaryUrl($profile->picture_path);
                return $profile;
            });

            return response()->json($profiles);
        }

        /**
         * Store a newly created resource in storage.
         */
        public function store(Request $request)
        {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'picture' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // 2MB Max
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }

            $path = null;
            if ($request->hasFile('picture')) {
                $path = $this->fileUploadService->upload($request->file('picture'), 'profiles');
            }

            $profile = Profile::create([
                'name' => $request->name,
                'picture_path' => $path,
            ]);

            return response()->json($profile, 201);
        }

        /**
         * Display the specified resource.
         */
        public function show(Profile $profile)
        {
            // Generate the secure, temporary URL on the fly when requested
            $profile->picture_url = $this->fileUploadService->getTemporaryUrl($profile->picture_path);
            return response()->json($profile);
        }

        /**
         * Update the specified resource in storage.
         */
        public function update(Request $request, Profile $profile)
        {
            $validator = Validator::make($request->all(), [
                'name' => 'sometimes|required|string|max:255',
                'picture' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }

            $path = $profile->picture_path;
            if ($request->hasFile('picture')) {
                // Delete the old picture before uploading the new one
                $this->fileUploadService->delete($profile->picture_path);
                // Upload the new picture
                $path = $this->fileUploadService->upload($request->file('picture'), 'profiles');
            }

            $profile->update([
                'name' => $request->name ?? $profile->name,
                'picture_path' => $path,
            ]);

            // Add the fresh temporary URL to the response
            $profile->picture_url = $this->fileUploadService->getTemporaryUrl($profile->picture_path);

            return response()->json($profile);
        }


        /**
         * Remove the specified resource from storage.
         */
        public function destroy(Profile $profile)
        {
            // Delete the file from S3 first
            $this->fileUploadService->delete($profile->picture_path);

            // Then delete the record from the database
            $profile->delete();

            return response()->json(null, 204); // 204 No Content
        }
    }
    ```

This setup provides a clean, secure, and scalable way to handle file uploads, leveraging the power of S3 for storage and CloudFront for fast, secure delivery.


Yes, a temporary URL can be accessed by anyone who has the link, making it publicly accessible for a limited time without needing any special authentication.

---

### ## AWS S3 Configuration Explained

#### **`'endpoint' => env('AWS_ENDPOINT')`**

This setting allows you to use an S3-compatible service instead of the official Amazon Web Services (AWS) S3.

Think of it like this: S3 is a specific product (like Coca-Cola), but its technology is so popular that other companies have created their own compatible products (like Pepsi or other colas).

You would use the `AWS_ENDPOINT` variable to specify the URL of these alternative services.

* **When to use it:** You would set this in your `.env` file if you are using services like **MinIO**, **DigitalOcean Spaces**, or **Wasabi**, which are all designed to work like S3. For example: `AWS_ENDPOINT=https://nyc3.digitaloceanspaces.com`.
* **When to leave it empty:** If you are using the actual Amazon S3 service, you should leave this variable empty or remove it. The Laravel AWS SDK knows the official AWS S3 endpoints by default based on the region you provide (`AWS_DEFAULT_REGION`).

#### **`'use_path_style_endpoint' => env('AWS_USE_PATH_STYLE_ENDPOINT', false)`**

This changes how Laravel formats the URL to access your bucket. S3 has two main URL styles:

1.  **Virtual Hosted-Style (Default, `false`):** The bucket name is part of the domain name. This is the modern and most common format.
    * `https://your-bucket-name.s3.your-region.amazonaws.com/your-file.jpg`

2.  **Path-Style (`true`):** The bucket name comes after the domain name, as part of the URL path.
    * `https://s3.your-region.amazonaws.com/your-bucket-name/your-file.jpg`

* **When to use it:** You might need to set this to `true` when using some S3-compatible services (like a local MinIO server for testing) that don't support the virtual hosted-style URLs.
* **When to leave it `false`:** For a standard AWS S3 setup, you should always leave this as `false`.

---

### ## Temporary URL Accessibility 🔑

A temporary URL, often called a "pre-signed URL," is a special link that grants temporary access to a private file in your S3 bucket.

* **Publicly Accessible:** Anyone with the full URL can access the file. It acts like a temporary password embedded directly into the link.
* **Time-Limited:** The URL is only valid for the duration you specify (e.g., 15 minutes in the service class example). After it expires, the link will no longer work, and access will be denied.
* **Secure:** It is secure because the URL is cryptographically signed with your AWS secret key. This signature proves that the request is authentic and authorized by you. It's the standard and recommended way to provide access to private user content without making the files permanently public.

The CDN is **AWS CloudFront**.

In the setup we discussed, CloudFront acts as the fast and secure public doorway to your private files stored in S3.

---

### ## How It Works in Your Setup

Here is the step-by-step flow:

1.  **File Storage (Private):** You upload a file. Your Laravel application, using the credentials you provided, stores this file directly in your private **AWS S3 bucket**. At this point, no one can access it directly from the internet.

2.  **URL Generation (Public-Facing):** When your application needs to show the file (e.g., a profile picture), it calls `getTemporaryUrl()`. Because you configured `'url' => env('CLOUDFONT_URL')` in your `filesystems.php` file, Laravel doesn't create a link to S3. Instead, it generates a special, signed URL using your **CloudFront domain name**.

3.  **User Request & Delivery (The CDN in Action):**
    * A user's browser uses this CloudFront URL to request the image.
    * The request goes to the nearest CloudFront **edge location** (a server in its global network), not all the way to your S3 bucket's physical location.
    * CloudFront checks the signed URL's validity. If it's valid, CloudFront fetches the private file from your S3 bucket and delivers it to the user.
    * Crucially, CloudFront then **caches** (saves a temporary copy of) that file at the edge location. The next user nearby who requests the same file gets it instantly from the cache, which is incredibly fast.



---

### ## Analogy: Warehouse vs. Retail Store 🏪

Think of it like this:

* **Your S3 Bucket** is the main, secure **warehouse** for your products. It's not open to the public and might be far away.
* **CloudFront** is a global chain of popular **retail stores**.
* **Your File** is a specific product.

When a customer wants your product, you don't send them to the distant, locked-down warehouse. You give them a special, temporary voucher (the signed URL) to pick it up from their nearest retail store (the CloudFront edge server). This is much faster for the customer and keeps your main warehouse secure.


Yes, that is correct.

You should **only store the path** in your database (e.g., `profiles/1728345476_aBcDeFg.jpg`).

-----

### \#\# Why Storing Only the Path is Best Practice

1.  **Flexibility:** If you ever change your storage provider, CDN, or even just your bucket name, you only need to update your `.env` file. If you had stored the full URL in the database, you would have to run a script to update every single record, which is risky and difficult.

2.  **Security:** Storing just the path forces your application to generate the URL every time it's needed. This allows you to create secure, temporary URLs on the fly, as we did with `getTemporaryUrl()`. If you stored a permanent URL, the file would be permanently public and accessible to anyone who finds the link.

3.  **Consistency:** It keeps your data clean. The database is responsible for storing the *what* (the file's location identifier), and your application code is responsible for the *how* (how to access it).

### \#\# Example in Practice

  * **What you store in the `picture_path` column of your database:**

    ```
    profiles/1728345476_aBcDeFg.jpg
    ```

  * **What your `FileUploadService` generates for the user:**

    ```
    https://d123xyz.cloudfront.net/profiles/1728345476_aBcDeFg.jpg?Expires=1728346376&Signature=...&Key-Pair-Id=...
    ```

By storing only the path, you gain significant control and flexibility over how your files are accessed.


Yes, you are exactly right. **CloudFront's Behavior is the final authority.**

No matter which method you use in Laravel, the request ultimately goes to CloudFront, and CloudFront will make the final decision based on the rules you have set for that specific URL path.

The job of your Laravel code (`->url()` or `->temporaryUrl()`) is simply to create a URL that plays by the rules CloudFront is enforcing.

---

### ## Let's Use Your Example: Making Profile Images Public

Imagine you decide you want all profile pictures to be public.

1.  **The Change You Would Make:** You would go into your CloudFront distribution settings and find the Behavior for the path `/profiles/*`. You would change the setting **Restrict Viewer Access** from "Yes" to **"No"**.

2.  **What Happens Now:**
    * If you still use `->temporaryUrl()` in your code, it will generate a signed URL with `?Signature...&Expires...`. When CloudFront receives this, it sees that for the `/profiles/*` path, a signature is **not required**. It will likely ignore the extra parameters and serve the file. **It works, but it's unnecessary.**
    * If you use `->url()` in your code, it will generate a plain URL like `.../profiles/image.jpg`. When CloudFront receives this, it sees that for the `/profiles/*` path, a signature is **not required**. The request is valid, so it serves the file. **This is the correct and cleaner way.**

Think of CloudFront as the gatekeeper. Your Laravel application is just deciding what kind of pass to give to the user. If the gatekeeper doesn't require a special pass for a certain area, you can give the user a simple one (`->url()`). If the gatekeeper demands a special pass (`Restrict Viewer Access: Yes`), you must give the user a signed one (`->temporaryUrl()`).


No, S3 is not modified when you call the `->url()` method. That method is a simple operation inside your Laravel application that just builds a URL string.

CloudFront doesn't "know" if a file is public by checking the file itself. Instead, it follows a rulebook you define called **Behaviors**.

---

### ## The Rulebook: CloudFront Behaviors 📜

When you configure your CloudFront distribution, you set up **Behaviors**. A Behavior is a set of rules for a specific URL path pattern (like `/images/*`, `/profiles/*`, or a default `*` for everything else).

The most important rule for this is **"Restrict Viewer Access."**

1.  **For Private Content (e.g., path `/profiles/*`)**
    * You create a Behavior for the path `/profiles/*`.
    * In this Behavior, you set **Restrict Viewer Access: Yes**.
    * **Rule:** This tells CloudFront, "For any request to a URL starting with `/profiles/`, you *must* find a valid, unexpired signature. If there isn't one, deny access with a 403 Forbidden error."
    * This is why you **must** use `->temporaryUrl()` for these files.

2.  **For Public Content (e.g., default path `*`)**
    * You have a default Behavior that applies to all other paths (`*`).
    * In this Behavior, you set **Restrict Viewer Access: No**.
    * **Rule:** This tells CloudFront, "For any request that doesn't match a more specific rule, a signature is *not* required. Go ahead and try to fetch the file from S3 using your secure OAC permission."
    * This is why `->url()` works for these files. It generates a plain URL, CloudFront sees that no signature is required for this path, and it serves the file.



---

### ## Analogy: The Club Bouncer 🕶️

Think of CloudFront as a bouncer at a club with a very specific rulebook.

* **The Rulebook (Behaviors):**
    * **VIP Section (`/profiles/*`):** "Check for a special, unexpired VIP wristband (the signature). No wristband, no entry."
    * **General Area (`*`):** "No wristband needed. Let them in."

* `->temporaryUrl()` is your app giving someone a VIP wristband with their name and an expiration time.
* `->url()` is your app just telling someone the public address of the club.

The bouncer (CloudFront) simply follows the rules for the part of the club the person is trying to enter. The file in S3 is never changed, just like the drinks inside the club don't change based on who is asking for them.