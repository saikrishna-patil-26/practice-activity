const firebaseConfig = {
    apiKey: "AIzaSyDUQrP-FaLFz-sOznrQ8uMdfEcpRfnd994",
    authDomain: "practice-activity-24300.firebaseapp.com",
    databaseURL: "https://practice-activity-24300-default-rtdb.firebaseio.com",
    projectId: "practice-activity-24300",
    storageBucket: "practice-activity-24300.appspot.com",
    messagingSenderId: "367756184514",
    appId: "1:367756184514:web:4a357a623ff8a1c8e6245b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function adduser(){
    var user=document.getElementById("textinput1").value;
    firebase.database().ref("/").child(user).update({
        purpose:"practice activity"
    });
}