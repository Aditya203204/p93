// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCxjczj9UXwEa3mD3Cd7jUPPcUuKjO77aM",
      authDomain: "kwitter-5aae9.firebaseapp.com",
      databaseURL: "https://kwitter-5aae9-default-rtdb.firebaseio.com",
      projectId: "kwitter-5aae9",
      storageBucket: "kwitter-5aae9.appspot.com",
      messagingSenderId: "241075438467",
      appId: "1:241075438467:web:9d53edd8f8671f8595ecb6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
