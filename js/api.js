let gettingQualitiesCalled = false;
let apiKey = "dc242e05fba82b43c2bd2837007a59914392fa29d0385805208985b3";
let database = firebase.firestore();

const videoExtensions = [
  "mp4",
  "(WithWatermark) mp4",
  "(WithoutWatermark) mp4",
  "mov",
  "avi",
  "wmv",
  "avchd",
  "flv",
  "f4v",
  "swf",
  "mkv",
  "webm",
  "mpeg-2",
  "unknown_video",
];

const audioExtensions = [
  "mp4a",
  "mp3",
  "vorbis",
  "aac",
  "opus",
  "flac",
  "m4a",
  "webm",
];

// const isFromMobile = navigator.userAgentData.mobile;
const isFromMobile = false;

function getIpAddress(url) {
  return fetch(url).then((res) => res.json());
}

getIpAddress(`https://api.ipdata.co?api-key=${apiKey}`)
  .then(async (data) => {
    const ip = data.ip;
    const country = data.country_name;
    const countryCode = data.country_code;
    const region = data.region;
    const long = data.longitude;
    const lat = data.latitude;
    const city = data.city;
    const timeStamp = Date.now();
    const useragent = navigator.userAgent;

    const ref = await database
      .collection("VisitingUsers")
      .where("ip", "==", ip)
      .get();

    if (typeof ref.docs === "undefined") {
      const dbRef = await database.collection("VisitingUsers").doc();
      await dbRef.set({
        ip,
        country,
        timeStamp,
        countryCode,
        region,
        long,
        lat,
        useragent,
        city,
        id: dbRef.id,
        isFromMobile,
      });
    }
  })
  .catch((err) => {
    console.log("Saving User Info Error: ", err.message);
  });

// How to use use guide video
$(document).on("click", ".js-videoPoster", function (ev) {
  ev.preventDefault();
  var $poster = $(this);
  var $wrapper = $poster.closest(".js-videoWrapper");
  videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
  var $iframe = $wrapper.find(".js-videoIframe");
  var src = $iframe.data("src");
  // hide poster
  $wrapper.addClass("videoWrapperActive");
  // add iframe src in, starting the video
  $iframe.attr("src", src);
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
  // if we're stopping all videos on page
  if (!$wrapper) {
    var $wrapper = $(".js-videoWrapper");
    var $iframe = $(".js-videoIframe");
    // if we're stopping a particular video
  } else {
    var $iframe = $wrapper.find(".js-videoIframe");
  }
  // reveal poster
  $wrapper.removeClass("videoWrapperActive");
  // remove youtube link, stopping the video from playing in the background
  $iframe.attr("src", "");
}

let youtubeVideos = [];
let youtubeVideosIds = [];

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

const getKey = () => {
  return Date.now() * Math.random() * 1000;
};

const getQoute = (title) => {
  let uTitle = title.replace(/(^"|"$)/g, "");
  uTitle = uTitle.replace(/\s/g, "");
  return uTitle.length > 11 ? uTitle.substring(0, 7) + "..." : uTitle;
};

$("#pastelink").click(async () => {
  if (navigator.clipboard) {
    let text = await navigator.clipboard.readText();

    document.getElementById("videoLink").value = text;
  } else {
    $("#description").append("Clipboard not supported");
    document.getElementsByClassName("popup")[0].classList.add("active");
  }
});

$("#downloadVideo").click(function () {
  showResponse();
});

$("#videoLink").keypress("enterKey", function () {
  var keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode == "13") {
    showResponse();
  }
});

const getPlaylistVideosIds = (res) => {
  const ids = [];
  for (let i = 0; i < res.length; i++) {
    ids.push(res[i].snippet.resourceId.videoId);
  }
  return ids;
};

const getPlaylistVideoUrl = (videos, videoquality) => {
  let url = videos[0].url;
  for (let i = 0; i < videos.length; i++) {
    if (videos[i].acodec !== "none" && videos[i].vcodec !== "none") {
      if (videoquality) {
        if (videos[i].quality.toString() === videoquality.toString()) {
          url = videos[i].url;
          return url;
        }
      } else {
        url = videos[i].url;
        return url;
      }
    }
  }
  return url;
};

const showPlaylistVideo = (i, base = null, videoquality = null) => {
  if (!base) {
    base = youtubeVideos[i];
  }

  $("#playlistvideo").append(`
  <tr>
  <td data-label="#">
     ${i + 1}
  </td>
  <td data-label="Image">
  <img src="https://i.ytimg.com/vi/${
    youtubeVideosIds[i]
  }/default.jpg" width="100" height="50" />
  </td>
  <td data-label="Title"> ${base.title}</td>
  <td data-label="Download">
     ${
       base.formats
         ? ` <a
           href="${getPlaylistVideoUrl(base.formats, videoquality)}"
           rel="noreferrer"
           target="_blank"
           class="btn"
           data-quality="720"
           data-type="mp4"
         >
           <span>
             <i class="fa fa-download"></i>
           </span>
           <span class="download-label"> Download </span>
         </a>`
         : `<span class="error-message">This video has been blocked on copyright grounds</span>`
     } 
  </td>
  <td data-label="Force Download">
  ${
    base.formats
      ? `
  <a href="https://video.infusiblecoder.com/allvideoapk/download.php?url=${getPlaylistVideoUrl(
    base.formats,
    videoquality
  )}&type=All_Video_Downloader_Youtube_${getQoute(
          base.title
        )}.mp4" rel="noreferrer" target="_blank" class="btn"
       data-quality="720" data-type="mp4">
       <span>
       <i class="fas fa-cloud-download-alt"></i>
       </span>
       <span class="download-label"> Force Download </span>
    </a>
  </td>
  `
      : `<span class="error-message">This video has been blocked on copyright grounds</span>`
  } 
  </td>
</tr>`);
};

$("#sortbutton").click(async () => {
  $("#playlistvideo").html("");
  youtubeVideos = youtubeVideos.sort((a, b) => a.id - b.id);
  for (let i = 0; i < youtubeVideos.length; i++) {
    showPlaylistVideo(i, null, null);
  }
});

// Display Specific Quality Videos
$("select").change(function () {
  var selectedQuality = $(this).val();
  $("#playlistvideo").html("");
  for (let i = 0; i < youtubeVideos.length; i++) {
    showPlaylistVideo(i, null, selectedQuality);
  }
});

// Get Video Qualities
const getvideoQualites = (videos) => {
  for (let i = 0; i < videos.length; i++) {
    if (videos[i].acodec !== "none" && videos[i].vcodec !== "none") {
      $("#videoqualities").append(
        `<option value="${videos[i].quality}" onclick="displaySpecificQualityVideos(${videos[i].quality})"> ${videos[i].quality}</option>`
      );
    }
  }
};

// GET and SHOW youtube playlist
const getYoutubeMultipleVideosData = async (playlistUrl) => {
  try {
    $("#overlay").css("display", "flex");
    const playlistIdVideos = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistUrl}&key=AIzaSyBm3nGWzJOZr8QIU0NDQzoGGKi-FzmobTg`
    );

    const videosIds = getPlaylistVideosIds(playlistIdVideos.data.items);
    youtubeVideosIds = videosIds;

    // get single video from api
    for (let j = 0; j < videosIds.length; j++) {
      const videoUrl = `https://www.youtube.com/watch?v=${videosIds[j]}`;

      var myUrl = "https://videodownloaderapinodejs.herokuapp.com/api";

      var myData = {
        url: videoUrl,
      };

      $("#playlistvideo").html("");
      $("#result").css("display", "none");

      axios
        .post(myUrl, myData)
        .then((response) => {
          const base = response.data;
          youtubeVideos.push({ id: j, ...base });
          $("#overlay").css("display", "none");
          $("#playlist").css("display", "inherit");
          showPlaylistVideo(j, base, null); // (index, data, video quality)
          if (!gettingQualitiesCalled) {
            gettingQualitiesCalled = true;
            getvideoQualites(base.formats);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (error) {
    alert(error.message);
  }
};

const getPreviewVideo = (videos) => {
  let videoUrl = videos[videos.length - 1].url;
  for (let i = 0; i < videos.length; i++) {
    if (
      videos[i].acodec !== "none" &&
      videos[i].vcodec !== "none" &&
      typeof videos[i].acodec !== "undefined" &&
      typeof videos[i].vcodec !== "undefined"
    ) {
      videoUrl = videos[i].url;
    }
  }
  return videoUrl;
};

// Display Response
const displayData = (url) => {
  var myUrl = "https://videodownloaderapinodejs.herokuapp.com/api";
  var myData = {
    url: url,
  };

  $("#thumbnail").html("");
  $("#videoDuration").html("");
  $("#title").html("");
  $("#result").css("display", "none");
  $("#overlay").css("display", "flex");
  $("#singleVideo").html("");
  $("#singleAudio").html("");
  $("#playlist").css("display", "none");

  axios
    .post(myUrl, myData)
    .then(function (response) {
      let result = response.data.formats;

      if (result) {
        result = getVideos(response);
      }

      $("#overlay").css("display", "none");
      $("#result").css("display", "inherit");
      $("#videosTab").css("display", "initial");
      $("#audiosTab").css("display", "initial");

      const data = response.data;
      if (result && result.totalVideos.length <= 0) {
        $("#videosTab").css("display", "none");
        document.getElementById("pills-profile-tab").classList.add("active");
        document.getElementById("pills-profile").classList.add("active");
        document.getElementById("pills-profile").classList.add("show");
        $("#pills-home-tab").removeClass("active");
        $("#pills-home").removeClass("show");
      }

      if (result && result.totalAudios.length <= 0) {
        $("#audiosTab").css("display", "none");
        document.getElementById("pills-home-tab").classList.add("active");
        document.getElementById("pills-home").classList.add("show");
        document.getElementById("pills-home").classList.add("active");
        $("#pills-profile-tab").removeClass("active");
        $("#pills-profile").removeClass("show");
      }

      if (result && result.totalVideos.length > 0) {
        $("#thumbnail").append(
          ` <video controlsList="nodownload" height="300px;" width="100%;" controls poster="${
            data.thumbnail
          }"
          src="${getPreviewVideo(result.totalVideos)}"></video>`
        );
      } else if (result && result.totalAudios.length > 0) {
        $("#thumbnail").append(
          ` <video controlsList="nodownload" height="300px;" width="100%;" controls poster="${data.thumbnail}"
          src="${result.totalAudios[0].url}"></video>`
        );
      } else if (data.thumbnail) {
        $("#thumbnail").append(
          `<img alt="thumbnail" class="thumnail-img" src="${data.thumbnail}" />`
        );
      } else {
        $("#thumbnail").append(
          `<img alt="thumbnail" class="thumnail-img" src="../assets/placeholder.jpg" />`
        );
      }

      $("#title").append(data.title);

      if (data.duration) {
        $("#videoDuration").append(
          new Date(parseInt(data.duration) * 1000).toISOString().substr(14, 5)
        );
      } else {
        $("#checkDuration").css("display", "none");
      }

      if (!result) {
        $("#response").css("display", "none");
        $("#copyright-response").css("display", "flex");
        return;
      }

      $("#response").css("display", "inherit");
      $("#copyright-response").css("display", "none");

      result.totalVideos.reverse().forEach((item) => {
        $("#singleVideo").append(`
          <tr>
          <td data-label="Extension">
             ${
               item.acodec === "none"
                 ? "<i class='fas fa-volume-mute'></i>"
                 : ""
             }  ${item.ext}
          </td>
          <td  data-label="File Size">
              ${
                item.filesize > 1024 * 1024 ? formatBytes(item.filesize) : "NaN"
              }
          </td>
          <td  data-label="Link">
              <a href="${item.url}" rel="noreferrer" target="_blank" class="btn"
                  data-quality="720" data-type="mp4">
                  <span>
                      <i class="fa fa-download"></i>
                  </span>
                  <span class="download-label"> Download </span>
              </a>
          </td>
          <td  data-label="Mirror">
          <a href="https://video.infusiblecoder.com/allvideoapk/download.php?url=${encodeURIComponent(
            btoa(item.url)
          )}&type=All_Video_Downloader_${data.source}_${getQoute(
          data.title
        )}.mp4" rel="noreferrer" target="_blank" class="btn"
               data-quality="720" data-type="mp4">
               <span>
               <i class="fas fa-cloud-download-alt"></i>
               </span>
               <span class="download-label"> Force Download </span>
            </a>
          </td>
          </td>
      </tr>`);
      });
      result.totalAudios.forEach((item) => {
        $("#singleAudio").append(`
            <tr>
            <td  data-label="Extension">
               ${item.ext}
            </td>
            <td  data-label="File Size">
                ${
                  item.filesize > 1024 * 1024
                    ? formatBytes(item.filesize)
                    : "NaN"
                }
            </td>
            <td  data-label="Link">
                <a href="${
                  item.url
                }" rel="noreferrer" target="_blank" class="btn"
                    data-quality="720" data-type="mp4">
                    <span>
                        <i class="fa fa-download"></i>
                    </span>
                    <span class="download-label"> Download </span>
                </a>
            </td>
            
            <td  data-label="Mirror">
            <a href="https://video.infusiblecoder.com/allvideoapk/download.php?url=${
              item.url
            }&type=All_Video_Downloader_${
          data.source
        }_.mp3" rel="noreferrer" target="_blank" class="btn"
               data-quality="720" data-type="mp4">
               <span>
               <i class="fas fa-cloud-download-alt"></i>
               </span>
               <span class="download-label"> Force Download </span>
            </a>
          </td>
      
        </tr>`);
      });
    })
    .catch(function (error) {
      $("#overlay").css("display", "none");
      $("#description").append(error.message);
      document.getElementsByClassName("popup")[0].classList.add("active");
    });
};

const getYoutubeSingleVideoData = async (url) => {
  await displayYoutubeData(url);
};

const showResponse = async () => {
  let link = document.getElementById("videoLink").value;
  if (link.trim().length === 0 || !link.includes("https")) {
    $("#description").append("Ivalid Link");
    document.getElementsByClassName("popup")[0].classList.add("active");
    return;
  }

  getIpAddress(`https://api.ipdata.co?api-key=${apiKey}`)
    .then(async (data) => {
      const ip = data.ip;
      const country = data.country_name;
      const countryCode = data.country_code;
      const region = data.region;
      const long = data.longitude;
      const lat = data.latitude;
      const city = data.city;
      const timeStamp = Date.now();
      const useragent = navigator.userAgent;
      const dbRef = await database.collection("DownloadUsers").doc();

      await dbRef.set({
        ip,
        country,
        city,
        timeStamp,
        countryCode,
        region,
        long,
        lat,
        useragent,
        id: dbRef.id,
        isFromMobile,
        url: link,
      });
    })
    .catch((err) => {
      console.log("Saving User Info Error: ", err.message);
    });

  if (link.includes("youtube")) {
    let url = link;
    let playlistUrl = url.split("&list=");
    if (playlistUrl.length > 1) {
      playlistUrl = playlistUrl[1].split("&");
      playlistUrl = playlistUrl[0];
      await getYoutubeMultipleVideosData(playlistUrl);
    } else {
      await getYoutubeSingleVideoData(url);
    }
    return;
  }
  const updatedUrl = link.trim();

  await displayData(updatedUrl);
};

const getVideos = (response) => {
  let totalResponse = [...response.data.formats];
  const total_audios_and_videos = [];
  for (let i = 0; i < totalResponse.length; i++) {
    if (
      totalResponse[i].protocol === "https" ||
      totalResponse[i].protocol === "http"
    ) {
      total_audios_and_videos.push(totalResponse[i]);
    }
  }

  const totalAudios = [];
  const audiosResult = [...total_audios_and_videos];
  for (let i = 0; i < audiosResult.length; i++) {
    audioExtensions.forEach((item) => {
      if (item === audiosResult[i].ext) {
        if (
          audiosResult[i].vcodec === "none" &&
          audiosResult[i].acodec !== "none"
        ) {
          totalAudios.push(audiosResult[i]);
        }
      }
    });
  }

  const totalVideos = [];

  const vdieosResult = [...total_audios_and_videos];
  for (let i = 0; i < vdieosResult.length; i++) {
    videoExtensions.forEach((item) => {
      if (item === vdieosResult[i].ext) {
        if (vdieosResult[i].vcodec !== "none") {
          totalVideos.push(vdieosResult[i]);
        }
      }
    });
  }

  return { totalAudios, totalVideos };
};

$("#sendemailbtn").click(function () {
  let sendemail = document.getElementById("emailinput").value;
  $("#sendemailbtn").attr(
    "href",
    `mailto:infusiblecoder@gmail.com?cc=${sendemail}?subject=Bug Reporting
  &body=Enter Your Message Here`
  );
});

$("#dismiss-popup-btn").click(function () {
  $("#description").html("");
  document.getElementsByClassName("popup")[0].classList.remove("active");
});

function convertVideo(item) {
  const myUrl = "https://videodownloaderapinodejs.herokuapp.com/api/getLink";
  const myData = {
    id: item.id,
    k: item.url,
  };
  axios
    .post(myUrl, myData)
    .then(function (response) {
      const data = response.data;
      const id = "#" + item.filesize;

      $(id).html(`
     <a
     href="${data.dlink}"
     rel="noreferrer"
     target="_blank"
     class="btn"
     data-quality="720"
     data-type="mp4"
   >
     <span>
       <i class="fa fa-download"></i>
     </span>
     <span class="download-label"> Download </span>
   </a>
     `);
    })
    .catch((err) => {
      console.log(err);
    });
}

const displayYoutubeData = (url) => {
  var myUrl = "https://videodownloaderapinodejs.herokuapp.com/api";
  var myData = {
    url: url,
  };

  $("#thumbnail").html("");
  $("#videoDuration").html("");
  $("#title").html("");
  $("#result").css("display", "none");
  $("#overlay").css("display", "flex");
  $("#singleVideo").html("");
  $("#singleAudio").html("");
  $("#playlist").css("display", "none");

  axios
    .post(myUrl, myData)
    .then(function (response) {
      let result = response.data.formats;

      if (result) {
        result = getVideos(response);
      }

      $("#overlay").css("display", "none");
      $("#result").css("display", "inherit");
      $("#videosTab").css("display", "initial");
      $("#audiosTab").css("display", "initial");

      const data = response.data;
      if (result && result.totalVideos.length <= 0) {
        $("#videosTab").css("display", "none");
        document.getElementById("pills-profile-tab").classList.add("active");
        document.getElementById("pills-profile").classList.add("active");
        document.getElementById("pills-profile").classList.add("show");
        $("#pills-home-tab").removeClass("active");
        $("#pills-home").removeClass("show");
      }

      if (result && result.totalAudios.length <= 0) {
        $("#audiosTab").css("display", "none");
        document.getElementById("pills-home-tab").classList.add("active");
        document.getElementById("pills-home").classList.add("show");
        document.getElementById("pills-home").classList.add("active");
        $("#pills-profile-tab").removeClass("active");
        $("#pills-profile").removeClass("show");
      }

      if (result && result.totalVideos.length > 0) {
        $("#thumbnail").append(
          ` <video controlsList="nodownload" height="300px;" width="100%;" controls poster="${
            data.thumbnail
          }"
          src="${getPreviewVideo(result.totalVideos)}"></video>`
        );
      } else if (result && result.totalAudios.length > 0) {
        $("#thumbnail").append(
          ` <video controlsList="nodownload" height="300px;" width="100%;" controls poster="${data.thumbnail}"
          src="${result.totalAudios[0].url}"></video>`
        );
      } else if (data.thumbnail) {
        $("#thumbnail").append(
          `<img alt="thumbnail" class="thumnail-img" src="${data.thumbnail}" />`
        );
      } else {
        $("#thumbnail").append(
          `<img alt="thumbnail" class="thumnail-img" src="../assets/placeholder.jpg" />`
        );
      }

      $("#title").append(data.title);

      if (data.duration) {
        $("#videoDuration").append(
          new Date(parseInt(data.duration) * 1000).toISOString().substr(14, 5)
        );
      } else {
        $("#checkDuration").css("display", "none");
      }

      if (!result) {
        $("#response").css("display", "none");
        $("#copyright-response").css("display", "flex");
        return;
      }

      $("#response").css("display", "inherit");
      $("#copyright-response").css("display", "none");

      result.totalVideos.reverse().forEach((item) => {
        $("#singleVideo").append(`
          <tr>
          <td data-label="Extension">
             ${
               item.acodec === "none"
                 ? "<i class='fas fa-volume-mute'></i>"
                 : ""
             }  ${item.ext}
          </td>
          <td  data-label="File Size">
              ${
                item.filesize > 1024 * 1024 ? formatBytes(item.filesize) : "NaN"
              }
          </td>
        
            <td data-label="Link" id="${item.filesize}">
                <button
                  onclick='convertVideo(${JSON.stringify({
                    ...item,
                    id: data.videoId,
                  })})'
                  class="btn"
                  >
                  <span>
                    <i class="fa fa-exchange"></i>
                  </span>
                  <span class="download-label"> Covert </span>
                </button>
              </td> 
         </tr>`);
      });
      result.totalAudios.forEach((item) => {
        $("#singleAudio").append(`
            <tr>
            <td  data-label="Extension">
               ${item.ext}
            </td>
            <td  data-label="File Size">
                ${
                  item.filesize > 1024 * 1024
                    ? formatBytes(item.filesize)
                    : "NaN"
                }
            </td>
            <td data-label="Link" id="${item.filesize}">
                <button
                  onclick='convertVideo(${JSON.stringify({
                    ...item,
                    id: data.videoId,
                  })})'
                  class="btn"
                  >
                  <span>
                    <i class="fa fa-exchange"></i>
                  </span>
                  <span class="download-label"> Covert </span>
                </button>
              </td> 
        </tr>`);
      });
    })
    .catch(function (error) {
      $("#overlay").css("display", "none");
      $("#description").append(error.message);
      document.getElementsByClassName("popup")[0].classList.add("active");
    });
};
