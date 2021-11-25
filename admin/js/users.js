const auth = localStorage.getItem("videoDownloaderAdmin");
if (!auth) {
  window.location.href = "index.html";
}

let i = 1;
let j = 1;
const db = firebase.firestore();
let VisitingUsersArr = [];
let downloadingUsersArr = [];
let paginationData = [];

const getDate = (date) => {
  const nDate = new Date(date);
  return nDate.toLocaleString();
};

db.collection("DownloadUsers")
  .get()
  .then((querySnapshot) => {
    querySnapshot.docs.forEach((doc) => {
      downloadingUsersArr.push(doc.data());
      $("#downloadUsers").append(`<tr class="downloadUser">
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
    dsetPaginationNumber(downloadingUsersArr);
    changePage1(1);
  })
  .catch((err) => {
    $("#overlay1").css("display", "none");
    alert(err.message);
  });

db.collection("VisitingUsers")
  .get()
  .then((querySnapshot) => {
    querySnapshot.docs.forEach((doc) => {
      VisitingUsersArr.push(doc.data());
    });

    setPaginationNumber(VisitingUsersArr);
    changePage(1);

    $("#overlay1").css("display", "none");
  })
  .catch((err) => {
    $("#overlay1").css("display", "none");
    alert(err.message);
  });

// Custom Pagination
let current_page = 1;
let records_per_page = 10;

function prevPage() {
  if (current_page > 1) {
    $(`#page${current_page}`).removeClass("active");
    current_page--;
    $(`#page${current_page}`).addClass("active");
    changePage(current_page);
  }
}

function nextPage() {
  if (current_page < numPages()) {
    $(`#page${current_page}`).removeClass("active");
    current_page++;
    $(`#page${current_page}`).addClass("active");
    changePage(current_page);
  }
}

function changePage(page) {
  let btn_next = document.getElementById("btn_next");
  let btn_prev = document.getElementById("btn_prev");
  let VisitingUsers = document.getElementById("visitingUsers");

  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  VisitingUsers.innerHTML = "";

  for (
    let i = (page - 1) * records_per_page;
    i < page * records_per_page;
    i++
  ) {
    VisitingUsers.innerHTML += `<tr>
    <td class="px-2 py-4">${i + 1} </td>
    <td class="px-2 py-4">${VisitingUsersArr[i].country} </td>
    <td class="px-2 py-4">${getDate(VisitingUsersArr[i].timeStamp)} </td>
<td class="px-2 py-4">${VisitingUsersArr[i].ip} </td>
    <td class="text-muted px-2 py-4 font-14">${
      VisitingUsersArr[i].isFromMobile ? "Mobile" : "PC"
    }</td>

</tr>`;
  }
}

function numPages() {
  return Math.ceil(VisitingUsersArr.length / records_per_page);
}

function changeCurrentPage(page) {
  $(`#page${current_page}`).removeClass("active");
  current_page = page;
  $(`#page${page}`).addClass("active");
  changePage(page);
}

function setPaginationNumber(arrData) {
  for (let aa = 0; aa < arrData.length / records_per_page; aa++) {
    $("#totalPages").append(`
  <a href="javascript:changeCurrentPage(${aa + 1})"  id="page${aa + 1}"> ${
      aa + 1
    } </a>
  `);
  }

  $(`#page${1}`).addClass("active");
}

// Pagination for downloaders

let dcurrent_page = 1;
let drecords_per_page = 10;

function dprevPage() {
  if (dcurrent_page > 1) {
    $(`#1page${dcurrent_page}`).removeClass("active");
    dcurrent_page--;
    $(`#1page${dcurrent_page}`).addClass("active");
    changePage1(dcurrent_page);
  }
}

function dnextPage() {
  if (dcurrent_page < numPages()) {
    $(`#1page${dcurrent_page}`).removeClass("active");
    dcurrent_page++;
    $(`#1page${dcurrent_page}`).addClass("active");
    changePage1(dcurrent_page);
  }
}

function dnumPages() {
  return Math.ceil(downloadingUsersArr.length / drecords_per_page);
}

function dchangeCurrentPage(page) {
  $(`#1page${dcurrent_page}`).removeClass("active");
  dcurrent_page = page;
  $(`#1page${page}`).addClass("active");
  changePage1(page);
}

function dsetPaginationNumber(arrData) {
  for (let aa = 0; aa < arrData.length / drecords_per_page; aa++) {
    $("#totalPages1").append(`
  <a href="javascript:dchangeCurrentPage(${aa + 1})"  id="1page${aa + 1}"> ${
      aa + 1
    } </a>
  `);
  }

  $(`#1page${1}`).addClass("active");
}

function changePage1(page) {
  let btn_next = document.getElementById("btn_next1");
  let btn_prev = document.getElementById("btn_prev1");
  let downloadeingUser = document.getElementById("downloadUsers");

  // Validate page
  if (page < 1) page = 1;
  if (page > dnumPages()) page = dnumPages();

  downloadeingUser.innerHTML = "";

  for (
    let i = (page - 1) * drecords_per_page;
    i < page * drecords_per_page;
    i++
  ) {
    downloadeingUser.innerHTML += `<tr>
    <td class="px-2 py-4">${i + 1} </td>
    <td class="px-2 py-4">${downloadingUsersArr[i].country} </td>
    <td class="px-2 py-4">${getDate(downloadingUsersArr[i].timeStamp)} </td>
    <td class="px-2 py-4">${downloadingUsersArr[i].ip} </td>
    <td class="text-muted px-2 py-4 font-14">${
      downloadingUsersArr[i].isFromMobile ? "Mobile" : "PC"
    }</td>

</tr>`;
  }

}
