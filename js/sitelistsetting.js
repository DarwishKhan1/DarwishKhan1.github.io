let database = firebase.firestore();

database
  .collection("websites")
  .doc("website")
  .get()
  .then((docs) => {
    let webData = docs.data();
    console.log(webData);
    let primaryColor = webData.primaryColor;
    let secondaryColor = webData.secondaryColor;
    var root = document.querySelector(":root");
    root.style.setProperty("--primary-color", primaryColor);
    root.style.setProperty("--secondary-color", secondaryColor);
    console.log(webData);
    $("title").html(webData.website_title);
    // Favicon Change
    const favicon = document.getElementById("favicon");
    favicon.setAttribute("href", webData.website_logo);
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
