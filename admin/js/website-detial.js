let db = firebase.firestore();
let spinkit_index;
let file = null;
let mobilescreenfile = null;

var fileButton = document.getElementById("webLogoImg");
var mobilescreenshotfileButton = document.getElementById("mobilescreenshot");

fileButton.addEventListener("change", function (e) {
  file = e.target.files[0];
});

mobilescreenshotfileButton.addEventListener("change", function (e) {
  mobilescreenfile = e.target.files[0];
});

db.collection("websites")
  .doc("website")
  .get()
  .then((docs) => {
    let webData = docs.data();
    let webColor = docs.data().colorCode;
    var root = document.querySelector(":root");

    root.style.setProperty("--primary", webColor);

    $("#websiteTitle").val(webData.website_title);
    $("#url").val(webData.url);
    $("#webLogo").val(webData.website_logo);
    $("#mobilescreenshoturl").val(webData.mobile_screenshot);

    // Image Preview
    $("#imgPreview").append(
      `<img src="${webData.website_logo}" style="width: 100px; height: 100px; margin-bottom: 2rem;"alt="">`
    );
    $("#mobilescreenshotimgPreview").append(
        `<img src="${webData.mobile_screenshot}" style="width: 100px; height: 200px; margin-bottom: 2rem;"alt="">`
      );

    $("#spinkitNum").val(webData.spinkit_index);
    $("#accentColorCode").val(webData.accentColor);
    $("#secondryColorCode").val(webData.secondaryColor);
    $("#primaryColorCode").val(webData.primaryColor);
    $("#accentColorValue").val(webData.accentColor);
    $("#secondryColorValue").val(webData.secondaryColor);
    $("#primaryColorValue").val(webData.primaryColor);
  })
  .then(function () {
    jQuery("#status").fadeOut();

    jQuery("#preloader").fadeOut("slow");
  });

$("#gif0").on("click", function () {
  spinkit_index = 0;

  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "7px solid var(--accent)");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif1").on("click", function () {
  spinkit_index = 1;

  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "7px solid var(--accent)");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif2").on("click", function () {
  spinkit_index = 2;
  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "7px solid var(--accent)");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif3").on("click", function () {
  spinkit_index = 3;

  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "7px solid var(--accent)");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif4").on("click", function () {
  $("#spinkitNum").val(spinkit_index);
  spinkit_index = 4;

  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "7px solid var(--accent)");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif5").on("click", function () {
  $("#spinkitNum").val(spinkit_index);
  spinkit_index = 5;

  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "7px solid var(--accent)");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif6").on("click", function () {
  spinkit_index = 6;
  $("#spinkitNum").val(spinkit_index);

  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "7px solid var(--accent)");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif7").on("click", function () {
  spinkit_index = 7;
  $("#spinkitNum").val(spinkit_index);

  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "7px solid var(--accent)");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif8").on("click", function () {
  spinkit_index = 8;
  $("#spinkitNum").val(spinkit_index);

  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "7px solid var(--accent)");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif9").on("click", function () {
  spinkit_index = 9;
  $("#spinkitNum").val(spinkit_index);

  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "7px solid var(--accent)");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif10").on("click", function () {
  spinkit_index = 10;
  $("#spinkitNum").val(spinkit_index);

  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "7px solid var(--accent)");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif11").on("click", function () {
  spinkit_index = 11;
  $("#spinkitNum").val(spinkit_index);

  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "7px solid var(--accent)");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif12").on("click", function () {
  spinkit_index = 12;
  $("#spinkitNum").val(spinkit_index);

  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "7px solid var(--accent)");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif13").on("click", function () {
  spinkit_index = 13;
  $("#spinkitNum").val(spinkit_index);

  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "7px solid var(--accent)");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif14").on("click", function () {
  spinkit_index = 14;
  $("#spinkitNum").val(spinkit_index);

  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "7px solid var(--accent)");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif15").on("click", function () {
  spinkit_index = 15;
  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "7px solid var(--accent)");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif16").on("click", function () {
  spinkit_index = 16;
  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "7px solid var(--accent)");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif17").on("click", function () {
  spinkit_index = 17;
  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "7px solid var(--accent)");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif18").on("click", function () {
  spinkit_index = 18;
  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "7px solid var(--accent)");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif19").on("click", function () {
  spinkit_index = 19;
  $("#spinkitNum").val(spinkit_index);

  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "7px solid var(--accent)");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif20").on("click", function () {
  spinkit_index = 20;
  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "7px solid var(--accent)");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif21").on("click", function () {
  spinkit_index = 21;
  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "7px solid var(--accent)");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif22").on("click", function () {
  spinkit_index = 22;
  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "7px solid var(--accent)");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif23").on("click", function () {
  spinkit_index = 23;
  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "7px solid var(--accent)");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif24").on("click", function () {
  spinkit_index = 24;
  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "7px solid var(--accent)");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif25").on("click", function () {
  spinkit_index = 25;
  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "7px solid var(--accent)");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "none");
});

$("#gif26").on("click", function () {
  spinkit_index = 26;
  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "7px solid var(--accent)");
  $("#gif27").css("border", "none");
});

$("#gif27").on("click", function () {
  spinkit_index = 27;
  $("#spinkitNum").val(spinkit_index);
  $("#spinkitNum").val(spinkit_index);
  $("#gif0").css("border", "none");
  $("#gif1").css("border", "none");
  $("#gif2").css("border", "none");
  $("#gif3").css("border", "none");
  $("#gif4").css("border", "none");
  $("#gif5").css("border", "none");
  $("#gif6").css("border", "none");
  $("#gif7").css("border", "none");
  $("#gif8").css("border", "none");
  $("#gif9").css("border", "none");
  $("#gif10").css("border", "none");
  $("#gif11").css("border", "none");
  $("#gif12").css("border", "none");
  $("#gif13").css("border", "none");
  $("#gif14").css("border", "none");
  $("#gif15").css("border", "none");
  $("#gif16").css("border", "none");
  $("#gif17").css("border", "none");
  $("#gif18").css("border", "none");
  $("#gif19").css("border", "none");
  $("#gif20").css("border", "none");
  $("#gif21").css("border", "none");
  $("#gif22").css("border", "none");
  $("#gif23").css("border", "none");
  $("#gif24").css("border", "none");
  $("#gif25").css("border", "none");
  $("#gif26").css("border", "none");
  $("#gif27").css("border", "7px solid var(--accent)");
});

const mobilescreenfileupload = async (image) => {
  const uid = Date.now();
  const storageRefrence =  firebase.storage().ref("mobilesreenshot" + uid);
  const uploadedFile = await storageRefrence.put(image);
  return uploadedFile.ref.getDownloadURL();
};

async function updateWebsite() {
  let updatedWebsiteTitle = document.getElementById("websiteTitle").value;
  let url = document.getElementById("url").value;
  let spinkitNum = document.getElementById("spinkitNum").value;
  let primaryColor = document.getElementById("primaryColorValue").value;
  let secondaryColor = document.getElementById("secondryColorValue").value;
  let accentColor = document.getElementById("accentColorValue").value;
  let webLogo = document.getElementById("webLogo").value;
  let mobile_screenshot = document.getElementById("mobilescreenshoturl").value;

  $("#updateWebBtn").html("Please Wait.....");

  if (mobilescreenfile) {
    mobile_screenshot = await mobilescreenfileupload(mobilescreenfile);
    }

  if (file == null) {
    let webRef = db.collection("websites").doc("website");
   
    $("#updateWebBtn").html("Please Wait.....");

    webRef
      .update({
        spinkit_index: spinkitNum,
        url: url,
        mobile_screenshot,
        website_title: updatedWebsiteTitle,
        website_logo: webLogo,
        primaryColor,
        secondaryColor,
        accentColor,
      })
      .then(function () {
        $("#updateWebBtn").html("Updated Successfully");
        window.location.href = "website.html";
      });
  } else {
    var storageRef = firebase.storage().ref("webLogo" + Date.now());

    var uploadTask = storageRef.put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      async () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);

          if (condition) {
          }

          let webRef = db.collection("websites").doc("website");

          $("#updateWebBtn").html("Please Wait.....");
          webRef
            .update({
              spinkit_index: spinkitNum,
              url: url,
              website_title: updatedWebsiteTitle,
              website_logo: downloadURL,
              mobile_screenshot,
              primaryColor,
              secondaryColor,
              accentColor,
            })
            .then(function () {
              $("#updateWebBtn").html("Updated Successfully");
              window.location.href = "website.html";
            });
        });
      }
    );
  }
}
