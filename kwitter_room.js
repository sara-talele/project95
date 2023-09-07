var firebaseConfig = {
    apiKey: "AIzaSyBvqtwn_C4fyKR0E70mUkkXeKIgCPra5Y4",
    authDomain: "kwitter-e8e13.firebaseapp.com",
    databaseURL: "https://kwitter-e8e13-default-rtdb.firebaseio.com",
    projectId: "kwitter-e8e13",
    storageBucket: "kwitter-e8e13.appspot.com",
    messagingSenderId: "365771735773",
    appId: "1:365771735773:web:7a6c9371aec71e556d1134"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("room name : " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirect(name) {
    console.log(name);
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}