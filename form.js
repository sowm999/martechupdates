// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,
// measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCZyzZxhXJSbGNRocQlg0k-Jf-3pY9R8qc",
    authDomain: "htmltest-453ae.firebaseapp.com",
    projectId: "htmltest-453ae",
    storageBucket: "htmltest-453ae.firebasestorage.app",
    messagingSenderId: "782580127781",
    appId: "1:782580127781:web:82a0be6d30b59837c507cc"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Signup function
function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));
  alert("SignUp Successfully");
}

// SignIN function
// function signIn() {
//   var email = document.getElementById("email");
//   var password = document.getElementById("password");
//   const promise = auth.signInWithEmailAndPassword(
//             email.value, password.value);
//   promise.catch((e) => alert(e.message));
// }

// // SignOut
// function signOut() {
//   auth.signOut();
//   alert("SignOut Successfully from System");
// }

// Active user to homepage
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     var email = user.email;
//     alert("Active user " + email);
//   } else {
//     alert("No Active user Found");
//   }
// });
