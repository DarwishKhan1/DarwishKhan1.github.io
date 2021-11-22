const auth = localStorage.getItem("videoDownloaderAdmin");
if (!auth) {
  window.location.href = "index.html";
}

const db = firebase.firestore();

const getDate = (date) => {
  const nDate = new Date(date);
  return nDate.toLocaleDateString();
};

db.collection("DownloadUsers")
  .get()
  .then((querySnapshot) => {
    querySnapshot.docs.forEach((doc) => {
      $("#downloadUsers").append(`<tr>
        <td class="border-top-0 px-2 py-4">${doc.data().country} </td>
        <td class="border-top-0 px-2 py-4">${getDate(
          doc.data().timeStamp
        )} </td>
        <td class="border-top-0 text-muted px-2 py-4 font-14">${
          doc.data().useragent
        }</td>
    
</tr>`);
    });
  })
  .catch((err) => {
    alert(err.message);
  });

db.collection("VisitingUsers")
  .get()
  .then((querySnapshot) => {
    querySnapshot.docs.forEach((doc) => {
      $("#visitingUsers").append(`<tr>
              <td class="border-top-0 px-2 py-4">${doc.data().country} </td>
              <td class="border-top-0 px-2 py-4">${getDate(
                doc.data().timeStamp
              )} </td>
              <td class="border-top-0 text-muted px-2 py-4 font-14">${
                doc.data().useragent
              }</td>
          
      </tr>`);
    });

    $("#overlay1").css("display", "none");
  })
  .catch((err) => {
    alert(err.message);
  });
