const auth = localStorage.getItem("videoDownloaderAdmin");
if (auth) {
    window.location.href = "main.html";
}


let db = firebase.firestore();

db.collection("websites")
  .doc("website")
  .get()
  .then((docs) => {
    let webData = docs.data();
    $("#logo").append(
      `<img src="${webData.website_logo}" style="width: 100px; height: 100px;" alt="wrapkit">`
    );
  });

$("#pwd").keyup(function (e) {
  if (e.keyCode == 13) {
    loginAdmin();
  }
});

function loginButtonClicked() {
  loginAdmin();
}

function loginAdmin() {
  let email = document.getElementById("uname").value;
  let password = document.getElementById("pwd").value;

  if (email == "admin@admin.com") {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;

        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            var uid = user.uid;
            localStorage.setItem("videoDownloaderAdmin", uid);
            window.location.href = "main.html";
          } else {
            window.location.href = "index.html";
          }
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage);
      });
  } else {
    window.alert("Not an Admin");
  }
}
