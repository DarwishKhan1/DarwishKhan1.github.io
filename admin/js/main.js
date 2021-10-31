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
            <td class="border-top-0  px-2 py-4 font-14 status" id="status${i}" >${
        doc.data().active
      }</td>
    </tr>`);

      if (linkStatus == false) {
        $(`#status${i}`).html(
          '<span class="badge badge-danger">Not Active</span>'
        );
      } else {
        $(`#status${i}`).html(
          '<span class="badge badge-primary" style="background-color: var(--accent) !important;"> Active</span>'
        );
      }
      i++;
    });
  })
  .then(function () {
    jQuery("#status").fadeOut();
    jQuery("#preloader").fadeOut("slow");
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });
