let database = firebase.firestore();

database
  .collection("websites")
  .doc("website")
  .get()
  .then((docs) => {
    let webData = docs.data();
    let primaryColor = docs.data().primaryColor;
    let secondaryColor = docs.data().secondaryColor;
    let accentColor = docs.data().accentColor;
    var root = document.querySelector(":root");

    root.style.setProperty("--primary", primaryColor);
    root.style.setProperty("--secondary", secondaryColor);
    root.style.setProperty("--accent", accentColor);

    document.title = webData.website_title;

    // Favicon Change
    const favicon = document.getElementById("favicon");

    favicon.setAttribute("href", webData.website_logo);

    $("#logoImg").append(`<b class="logo-icon" id="logoImg">

        <img src="${webData.website_logo}" style="width: 100px; margin-top: 2rem; height: 100px;" alt="homepage" class="dark-logo" />

        <img src="${webData.website_logo}" style="width: 100px; margin-top: 2rem; height: 100px;" alt="homepage" class="light-logo" />
    </b>`);
  });

database
  .collection("admin")
  .doc("Pcio0nYhI4AkiNTAEDY4")
  .get()
  .then((rights) => {
    $("#rights").html(rights.data().rights);
  });

database
  .collection("admin")
  .doc("Pcio0nYhI4AkiNTAEDY4")
  .get()
  .then((profle) => {
    let profileImg = profle.data().profile_pic;
    let profileName = profle.data().name;

    $("#adminName").html(profle.data().name);

    $("#profileImg")
      .append(`<a class="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="${profileImg}" alt="user" class="rounded-circle" style="width: 40px; height: 40px;">
        <span class="ml-2 d-none d-lg-inline-block"><span>Hello,</span> <span class="text-dark">${profileName}</span> <i data-feather="chevron-down" class="svg-icon"></i></span>
    </a>
    <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">

        <a class="dropdown-item" href="admin-profile.html"><i class="icon-user svg-icon mr-2 ml-1" ></i>
            Profile</a>

        <a class="dropdown-item" id="logoff"><i class="icon-power svg-icon mr-2 ml-1" ></i>
            Logout</a>

    </div>`);
  })
  .then(() => {
    $("#logoff").on("click", () => {
      firebase
        .auth()
        .signOut()
        .then(
          function () {
            localStorage.removeItem("videoDownloaderAdmin");
            window.location.href = "index.html";
          },
          function (error) {
            console.error("Sign Out Error", error);
          }
        );
    });
  });
