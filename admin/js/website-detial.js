const auth = localStorage.getItem("videoDownloaderAdmin");
if (!auth) {
  window.location.href = "index.html";
}

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
    $("#accentColorCode").val(webData.accentColor);
    $("#secondryColorCode").val(webData.secondaryColor);
    $("#primaryColorCode").val(webData.primaryColor);
    $("#downloadPageColorCode").val(webData.downloadPageColor);
    $("#accentColorValue").val(webData.accentColor);
    $("#secondryColorValue").val(webData.secondaryColor);
    $("#primaryColorValue").val(webData.primaryColor);
    $("#downloadPageColorValue").val(webData.downloadPageColor);
  })
  .then(function () {
    $("#overlay1").css("display", "none");
  });

const mobilescreenfileupload = async (image) => {
  const uid = Date.now();
  const storageRefrence = firebase.storage().ref("mobilesreenshot" + uid);
  const uploadedFile = await storageRefrence.put(image);
  return uploadedFile.ref.getDownloadURL();
};

async function updateWebsite() {
  let updatedWebsiteTitle = document.getElementById("websiteTitle").value;
  let url = document.getElementById("url").value;
  let primaryColor = document.getElementById("primaryColorValue").value;
  let secondaryColor = document.getElementById("secondryColorValue").value;
  let accentColor = document.getElementById("accentColorValue").value;
  let downloadPageColor = document.getElementById("downloadPageColorCode")
    .value;
  let webLogo = document.getElementById("webLogo").value;
  let mobile_screenshot = document.getElementById("mobilescreenshoturl").value;

  $("#updateWebBtn").html("Please Wait.....");

  if (mobilescreenfile) {
    mobile_screenshot = await mobilescreenfileupload(mobilescreenfile);
  }

  if (file == null) {
    let webRef = db.collection("websites").doc("website");

    $("#updateWebBtn").html("Please Wait.....");

    console.log(downloadPageColor);
    webRef
      .update({
        url: url,
        mobile_screenshot,
        website_title: updatedWebsiteTitle,
        website_logo: webLogo,
        primaryColor,
        secondaryColor,
        accentColor,
        downloadPageColor: downloadPageColor,
      })
      .then(function () {
        window.location.reload();
        $("#updateWebBtn").html("Done");
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
          let webRef = db.collection("websites").doc("website");

          $("#updateWebBtn").html("Please Wait.....");
          webRef
            .update({
              url: url,
              website_title: updatedWebsiteTitle,
              website_logo: downloadURL,
              mobile_screenshot,
              primaryColor,
              secondaryColor,
              accentColor,
              downloadPageColor,
            })
            .then(function () {
              window.location.reload();
              $("#updateWebBtn").html("Done");
            });
        });
      }
    );
  }
}
