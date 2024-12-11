const firebaseConfig = {
  //   copy your firebase config informations
    apiKey: "AIzaSyCZyzZxhXJSbGNRocQlg0k-Jf-3pY9R8qc",
    authDomain: "htmltest-453ae.firebaseapp.com",
    databaseURL: "https://htmltest-453ae-default-rtdb.firebaseio.com",
    projectId: "htmltest-453ae",
    storageBucket: "htmltest-453ae.firebasestorage.app",
    messagingSenderId: "782580127781",
    appId: "1:782580127781:web:82a0be6d30b59837c507cc"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var newsletterDB = firebase.database().ref("newsletter");

document.getElementById("newsletter").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");

  saveMessages(name, emailid);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("newsletter").reset();
}

const saveMessages = (name, emailid) => {
  var new_newsletter = newsletterDB.push();

  new_newsletter.set({
    name: name,
    emailid: emailid,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
