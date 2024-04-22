---
layout: post
title:  "Learning and Teaching Experience"
date:   2023-06-28 08:30:00 +0630
categories: howto
---


```html

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Collecting Data</title>
	<script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
	</script>

	<link rel="stylesheet" href=
"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
		integrity=
"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
		crossorigin="anonymous">
</head>

<body class="container" style="margin-top: 50px;
	width: 50%; height:auto;">
	
	<h2 class="text-primary" style=
		"margin-left: 15px; margin-bottom: 10px">
		Hey There,Help Us In Collecting Data
	</h2>
	
	<form class="container" id="contactForm">
		<div class="card">
			<div class="card-body">
				<div class="form-group">
					<label for="exampleFormControlInput1">
						Enter Your Name
					</label>
					
					<input type="text" class="form-control"
					id="name" placeholder="Enter your name">
				</div>

				<div class="form-group">
					<label for="exampleFormControlInput1">
						Email address
					</label>
					
					<input type="email" class="form-control"
					id="email" placeholder="name@example.com">
				</div>
			</div>
			<button type="submit" class="btn btn-primary"
				style="margin-left: 15px; margin-top: 10px">
				Submit
			</button>
		</div>
	</form>

	<script src=
"https://www.gstatic.com/firebasejs/3.7.4/firebase.js">
	</script>
	
	<script>
		var firebaseConfig = {
			apiKey: "Use Your Api Key Here",
			authDomain: "Use Your authDomain Here",
			databaseURL: "Use Your databaseURL Here",
			projectId: "Use Your projectId Here",
			storageBucket: "Use Your storageBucket Here",
			messagingSenderId: "Use Your messagingSenderId Here",
			appId: "Use Your appId Here"
		};

		firebase.initializeApp(firebaseConfig);

		var messagesRef = firebase.database()
			.ref('Collected Data');
		
		document.getElementById('contactForm')
			.addEventListener('submit', submitForm);

		function submitForm(e) {
			e.preventDefault();

			// Get values
			var name = getInputVal('name');
			var email = getInputVal('email');

			saveMessage(name, email);
			document.getElementById('contactForm').reset();
		}

		// Function to get form values
		function getInputVal(id) {
			return document.getElementById(id).value;
		}

		// Save message to firebase
		function saveMessage(name, email) {
			var newMessageRef = messagesRef.push();
			newMessageRef.set({
				name: name,
				email: email,
			});
		}
	</script>
</body>

</html>

```


our code 
```html
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBY0jPAtNan32oNJEmg8HaSHCeNZ5waFI0",
    authDomain: "golden-day-mm.firebaseapp.com",
    databaseURL: "https://golden-day-mm-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "golden-day-mm",
    storageBucket: "golden-day-mm.appspot.com",
    messagingSenderId: "52961655254",
    appId: "1:52961655254:web:36618c80709e7079cf8c77",
    measurementId: "G-4PR6R93L13"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
```

ပြဿနာ တက်ပြီ

```bash
Uncaught Error: FIREBASE FATAL ERROR: Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com 
    at Vb (firebase.js:324:277)
    at Wb (firebase.js:326:20)
    at firebase.INTERNAL.registerService.Reference (firebase.js:532:234)
    at e.<computed> [as database] (firebase.js:55:478)
    at X.X (firebase.js:52:176)
    at Object.n [as database] (firebase.js:56:110)
    at storage.html:84:30
```


another error

```js
{
    "code": "app/invalid-app-argument",
    "message": "Firebase: firebase.database() takes either no argument or a Firebase App instance. (app/invalid-app-argument).",
    "name": "database"
}
```

version update လုပ်လိုက်တာ အိုကေသွားပြီ။

```html

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Collecting Data</title>
	<script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
	</script>

	<link rel="stylesheet" href=
"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
		integrity=
"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
		crossorigin="anonymous">
</head>

<body class="container" style="margin-top: 50px;
	width: 50%; height:auto;">
	
	<h2 class="text-primary" style=
		"margin-left: 15px; margin-bottom: 10px">
		Hey There,Help Us In Collecting Data
	</h2>
	
	<form class="container" id="contactForm" action="#">
		<div class="card">
			<div class="card-body">
				<div class="form-group">
					<label for="exampleFormControlInput1">
						Enter Your Name
					</label>
					
					<input type="text" class="form-control"
					id="name" placeholder="Enter your name">
				</div>

				<div class="form-group">
					<label for="exampleFormControlInput1">
						Email address
					</label>
					
					<input type="email" class="form-control"
					id="email" placeholder="name@example.com">
				</div>
			</div>
			<button type="submit" class="btn btn-primary"
				style="margin-left: 15px; margin-top: 10px">
				Submit
			</button>
		</div>
	</form>

	<!-- <script src="https://www.gstatic.com/firebasejs/3.7.4/firebase.js"></script> -->
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
    <!-- Include other Firebase SDKs if necessary -->
	
	<script>
        /*
		var firebaseConfig = {
			apiKey: "Use Your Api Key Here",
			authDomain: "Use Your authDomain Here",
			databaseURL: "Use Your databaseURL Here",
			projectId: "Use Your projectId Here",
			storageBucket: "Use Your storageBucket Here",
			messagingSenderId: "Use Your messagingSenderId Here",
			appId: "Use Your appId Here"
		};
        */
        var firebaseConfig = {
            apiKey: "AIzaSyBY0jPAtNan32oNJEmg8HaSHCeNZ5waFI0",
            authDomain: "golden-day-mm.firebaseapp.com",
            databaseURL: "https://golden-day-mm-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "golden-day-mm",
            storageBucket: "golden-day-mm.appspot.com",
            messagingSenderId: "52961655254",
            appId: "1:52961655254:web:36618c80709e7079cf8c77",
            measurementId: "G-4PR6R93L13"
        };
        // https://golden-day-mm-default-rtdb.asia-southeast1.firebasedatabase.app/

		firebase.initializeApp(firebaseConfig);

        console.log("messagesRef");
		var messagesRef = firebase.database().ref('Collected Data');
        console.log(messagesRef);
		
		document.getElementById('contactForm')
			.addEventListener('submit', submitForm);

        messagesRef.on('value', (snapshot) => {
            // This callback will be triggered whenever there is a change in 'Collected Data' node
            console.log("messagesRef.onValue");
            const data = snapshot.val();
            console.log(data);
            // serialize and update lat,lng array
            // re locate pointer
        });


		function submitForm(e) {
			e.preventDefault();

			// Get values
			var name = getInputVal('name');
			var email = getInputVal('email');

			saveMessage(name, email);
			document.getElementById('contactForm').reset();
		}

		// Function to get form values
		function getInputVal(id) {
			return document.getElementById(id).value;
		}

		// Save message to firebase
		function saveMessage(name, email) {
            //console(name + " , " + email);
			var newMessageRef = messagesRef.push();
            //console.log(newMessageRef);
			newMessageRef.set({
				name: name,
				email: email,
			});
		}
	</script>
</body>

</html>

```

Ref;
https://www.geeksforgeeks.org/create-a-website-using-html-css-and-javascript-that-stores-data-in-firebase/
