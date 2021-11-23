const auth = localStorage.getItem("videoDownloaderAdmin");
if (!auth) {
  window.location.href = "index.html";
}

let i = 1;
let j = 1;
const db = firebase.firestore();

const getDate = (date) => {
  const nDate = new Date(date);
  return nDate.toLocaleString();
};

db.collection("DownloadUsers")
  .get()
  .then((querySnapshot) => {
    querySnapshot.docs.forEach((doc) => {
      $("#downloadUsers").append(`<tr>
      <td class="px-2 py-4">${j} </td>
        <td class="px-2 py-4">${doc.data().country} </td>
        <td class="px-2 py-4">${getDate(doc.data().timeStamp)} </td>
        <td class="px-2 py-4">${doc.data().ip} </td>
        <td class="text-muted px-2 py-4 font-14">${
          doc.data().isFromMobile ? "Mobile" : "PC"
        }</td>
    
</tr>`);
      j++;
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
              <td class="px-2 py-4">${i} </td>
              <td class="px-2 py-4">${doc.data().country} </td>
              <td class="px-2 py-4">${getDate(doc.data().timeStamp)} </td>
        <td class="px-2 py-4">${doc.data().ip} </td>
              <td class="text-muted px-2 py-4 font-14">${
                doc.data().isFromMobile ? "Mobile" : "PC"
              }</td>
          
      </tr>`);

      i++;
    });

    $("#overlay1").css("display", "none");
  })
  .catch((err) => {
    alert(err.message);
  });
