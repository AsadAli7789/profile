var div1 = document.getElementById("lop")
var div2 = document.getElementById("log")
var btn1 = document.getElementById("jol")
btn1.addEventListener('click',pol)
function pol(){
    div1.style.display="block"
    div2.style.display="none"
}

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBI0kAXAZRig7GEjZuvuDEVJT97Mmq7ZIA",
    authDomain: "my-1st-projects-6730c.firebaseapp.com",
    projectId: "my-1st-projects-6730c",
    storageBucket: "my-1st-projects-6730c.appspot.com",
    messagingSenderId: "202066845750",
    appId: "1:202066845750:web:aa65933b26f7e7b71db897",
    measurementId: "G-Y0M7ZYMNYP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
