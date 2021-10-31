let database = firebase.firestore();

$("#overlay").css("display", "flex");
database
  .collection("websites")
  .doc("website")
  .get()
  .then((docs) => {
    let webData = docs.data();
    let primaryColor = webData.primaryColor;
    let secondaryColor = webData.secondaryColor;
    var root = document.querySelector(":root");

    root.style.setProperty("--primary-color", primaryColor);
    root.style.setProperty("--secondary-color", secondaryColor);
    $("#overlay").css("display", "none");

    $("#app-title").html(webData.website_title);
    $(".footer-app-title").html(webData.website_title);

    $("title").html(webData.website_title);
    // Favicon Change
    const favicon = document.getElementById("favicon");

    favicon.setAttribute("href", webData.website_logo);

    const playstoreurl = document.getElementById("playstoreurl");
    playstoreurl.setAttribute("href", webData.url);

    const mobilescreenshot = document.getElementById("mobilescreenshot");
    mobilescreenshot.setAttribute("src", webData.mobile_screenshot);


  })
  .catch((err) => {
    console.log(err);
  });

database
  .collection("social_llinks")
  .get()
  .then(function (data) {
    data.forEach(function (item) {
      const base = item.data();
      const favicon = document.getElementById(base.id);
      favicon.setAttribute("href", base.url);
    });
  });
