const auth = localStorage.getItem("videoDownloaderAdmin");
if (!auth) {
    window.location.href = "index.html";
}

let db = firebase.firestore();
let linkStatus;
let i = 0;
db.collection("websites")
  .get()
  .then((querySnapshot) => {
    $("#websiteCount").html(querySnapshot.docs.length);
  })
  .catch((err) => {
    alert(err.message);
  });

db.collection("social_llinks")
  .get()
  .then((querySnapshot) => {
    $("#socialLinksCount").html(querySnapshot.docs.length);
  })
  .catch((err) => {
    alert(err.message);
  });

db.collection("websites")
  .doc("website")
  .collection("drawer")
  .get()
  .then((querySnapshot) => {
    $("#drawersCount").html(querySnapshot.docs.length);
  })
  .catch((err) => {
    alert(err.message);
  });

db.collection("social_llinks")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      linkStatus = doc.data().active;
      $("#social_links").append(`<tr>
            <td class="border-top-0 px-2 py-4">${doc.data().name} </td>
            <td class="border-top-0 text-muted px-2 py-4 font-14">${
              doc.data().url
            }</td>
        
    </tr>`);

      i++;
    });
  })
  .then(function () {
    $("#overlay1").css("display", "none");
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });
