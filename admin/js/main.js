const auth = localStorage.getItem("videoDownloaderAdmin");
if (!auth) {
  window.location.href = "index.html";
}

let db = firebase.firestore();
let linkStatus;
let DownloadUsers = [];
let VisitingUsers = [];

db.collection("DownloadUsers")
  .get()
  .then((querySnapshot) => {
    querySnapshot.docs.forEach((item) => {
      DownloadUsers.push(item.data());
    });
    $("#websiteCount").html(querySnapshot.docs.length);

    showDownladerDataOnMap();
    showTopDownloadingCountries();
  })
  .catch((err) => {
    alert(err.message);
  });

db.collection("VisitingUsers")
  .get()
  .then((querySnapshot) => {
    querySnapshot.docs.forEach((item) => {
      VisitingUsers.push(item.data());
    });
    // Load google charts
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    google.charts.setOnLoadCallback(ddrawChart);

    $("#socialLinksCount").html(querySnapshot.docs.length);

    showVisitorDataOnMap();
    showTopVisitingCountries();
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
        
    </tr>`);
    });
  })
  .then(function () {
    $("#overlay1").css("display", "none");
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

function showTopVisitingCountries() {
  const countries = [];

  VisitingUsers.forEach((item) => {
    const index = countries.findIndex((user) => user.country === item.country);

    if (index < 0) {
      const data = { country: item.country, users: 1 };
      countries.push(data);
    } else {
      countries[index].users = countries[index].users + 1;
    }
  });

  let topCountries = _.sortBy(countries, "users");
  topCountries = topCountries.reverse();
  topCountries = topCountries.slice(0, 10);

  for (let i = 0; i < topCountries.length; i++) {
    $("#topVisitingCountries").append(`
        <tr>
          <td class="px-2 py-4">${i + 1} </td>
          <td class="px-2 py-4">${topCountries[i].country} </td>
          <td class="px-2 py-4">${topCountries[i].users} </td>
        </tr>`);
  }
}

function showTopDownloadingCountries() {
  const countries = [];

  DownloadUsers.forEach((item) => {
    const index = countries.findIndex((user) => user.country === item.country);

    if (index < 0) {
      const data = { country: item.country, users: 1 };
      countries.push(data);
    } else {
      countries[index].users = countries[index].users + 1;
    }
  });

  let topCountries = _.sortBy(countries, "users");
  topCountries = topCountries.reverse();
  topCountries = topCountries.slice(0, 10);

  for (let i = 0; i < topCountries.length; i++) {
    $("#topDownloadingCountries").append(`
        <tr>
          <td class="px-2 py-4">${i + 1} </td>
          <td class="px-2 py-4">${topCountries[i].country} </td>
          <td class="px-2 py-4">${topCountries[i].users} </td>
        </tr>`);
  }
}

// Draw the chart and set the chart values
function drawChart() {
  const pcUsers = [];
  const mUsers = [];

  VisitingUsers.forEach((item) => {
    if (item.isFromMobile) {
      mUsers.push(item);
    } else {
      pcUsers.push(item);
    }
  });
  var data = google.visualization.arrayToDataTable([
    ["Users", "PC Users & Mobile Users"],
    ["PC Users", pcUsers.length],
    ["Mobile Users", mUsers.length],
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    title: "PC Users & Mobile Users",
    width: "100%",
    height: 373,
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}

function ddrawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Users", "User downloads"],
    ["Visitors", VisitingUsers.length],
    ["Downloaders", DownloadUsers.length],
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    title: "Visitors and Downloaders",
    width: "100%",
    height: 373,
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(
    document.getElementById("dpiechart")
  );
  chart.draw(data, options);
}

const showVisitorDataOnMap = () => {
  var gdpData = {
    af: 0,
    al: 0,
    dz: 0,
    ao: 0,
    ag: 0,
    ar: 0,
    am: 0,
    au: 0,
    at: 0,
    az: 0,
    bs: 0,
    bh: 0,
    bd: 0,
    bb: 0,
    by: 0,
    be: 0,
    bz: 0,
    bj: 0,
    bt: 0,
    bo: 0,
    ba: 0,
    bw: 0,
    br: 0,
    bn: 0,
    bg: 0,
    bf: 0,
    bi: 0,
    kh: 0,
    cm: 0,
    ca: 0,
    cv: 0,
    cf: 0,
    td: 0,
    cl: 0,
    cn: 0,
    co: 0,
    km: 0,
    cd: 0,
    cg: 0,
    cr: 0,
    ci: 0,
    hr: 0,
    cy: 0,
    cz: 0,
    dk: 0,
    dj: 0,
    dm: 0,
    do: 0,
    ec: 0,
    eg: 0,
    sv: 0,
    gq: 0,
    er: 0,
    ee: 0,
    et: 0,
    fj: 0,
    fi: 0,
    fr: 0,
    ga: 0,
    gm: 0,
    ge: 0,
    de: 0,
    gh: 0,
    gr: 0,
    gd: 0,
    gt: 0,
    gn: 0,
    gw: 0,
    gy: 0,
    ht: 0,
    hn: 0,
    hk: 0,
    hu: 0,
    is: 0,
    in: 0,
    id: 0,
    ir: 0,
    iq: 0,
    ie: 0,
    il: 0,
    it: 0,
    jm: 0,
    jp: 0,
    jo: 0,
    kz: 0,
    ke: 0,
    ki: 0,
    kr: 0,
    undefined: 0,
    kw: 0,
    kg: 0,
    la: 0,
    lv: 0,
    lb: 0,
    ls: 0,
    lr: 0,
    ly: 0,
    lt: 0,
    lu: 0,
    mk: 0,
    mg: 0,
    mw: 0,
    my: 0,
    mv: 0,
    ml: 0,
    mt: 0,
    mr: 0,
    mu: 0,
    mx: 0,
    md: 0,
    mn: 0,
    me: 0,
    ma: 0,
    mz: 0,
    mm: 0,
    na: 0,
    np: 0,
    nl: 0,
    nz: 0,
    ni: 0,
    ne: 0,
    ng: 0,
    no: 0,
    om: 0,
    pk: 0,
    pa: 0,
    pg: 0,
    py: 0,
    pe: 0,
    ph: 0,
    pl: 0,
    pt: 0,
    qa: 0,
    ro: 0,
    ru: 0,
    rw: 0,
    ws: 0,
    st: 0,
    sa: 0,
    sn: 0,
    rs: 0,
    sc: 0,
    sl: 0,
    sg: 0,
    sk: 0,
    si: 0,
    sb: 0,
    za: 0,
    es: 0,
    lk: 0,
    kn: 0,
    vc: 0,
    sd: 0,
    sr: 0,
    sz: 0,
    se: 0,
    ch: 0,
    sy: 0,
    tw: 0,
    tj: 0,
    tz: 0,
    th: 0,
    tl: 0,
    tg: 0,
    to: 0,
    tt: 0,
    tn: 0,
    tr: 0,
    tm: 0,
    ug: 0,
    ua: 0,
    ae: 0,
    gb: 0,
    us: 0,
    uy: 0,
    uz: 0,
    vu: 0,
    ve: 0,
    vn: 0,
    ye: 0,
    zm: 0,
    zw: 0,
  };

  VisitingUsers.forEach((item) => {
    gdpData[item.countryCode.toLowerCase()] =
      gdpData[item.countryCode.toLowerCase()] + 1;
  });

  var max = 0,
    min = Number.MAX_VALUE,
    cc,
    startColor = [200, 238, 255],
    endColor = [0, 100, 145],
    colors = {},
    hex;

  //find maximum and minimum values
  for (cc in gdpData) {
    if (parseFloat(gdpData[cc]) > max) {
      max = parseFloat(gdpData[cc]);
    }
    if (parseFloat(gdpData[cc]) < min) {
      min = parseFloat(gdpData[cc]);
    }
  }

  //set colors according to values of GDP
  for (cc in gdpData) {
    if (gdpData[cc] > 0) {
      colors[cc] = "#";
      for (var i = 0; i < 3; i++) {
        hex = Math.round(
          startColor[i] +
            (endColor[i] - startColor[i]) * (gdpData[cc] / (max - min))
        ).toString(16);

        if (hex.length == 1) {
          hex = "0" + hex;
        }

        colors[cc] += (hex.length == 1 ? "0" : "") + hex;
      }
    }
  }

  jQuery(document).ready(function () {
    jQuery("#vmap").vectorMap({
      map: "world_en",
      backgroundColor: "#ffffff",
      color: "#333333",
      colors: colors,
      hoverOpacity: 0.7,
      selectedColor: "#666666",
      enableZoom: true,
      showTooltip: true,
      onLabelShow: function (event, label, code) {
        label[0].innerHTML =
          label[0].innerHTML + " has " + gdpData[code] + " visitors";
      },
      scaleColors: ["#C8EEFF", "#006491"],
      normalizeFunction: "polynomial",
    });
  });
};

const showDownladerDataOnMap = () => {
  var gdpData = {
    af: 0,
    al: 0,
    dz: 0,
    ao: 0,
    ag: 0,
    ar: 0,
    am: 0,
    au: 0,
    at: 0,
    az: 0,
    bs: 0,
    bh: 0,
    bd: 0,
    bb: 0,
    by: 0,
    be: 0,
    bz: 0,
    bj: 0,
    bt: 0,
    bo: 0,
    ba: 0,
    bw: 0,
    br: 0,
    bn: 0,
    bg: 0,
    bf: 0,
    bi: 0,
    kh: 0,
    cm: 0,
    ca: 0,
    cv: 0,
    cf: 0,
    td: 0,
    cl: 0,
    cn: 0,
    co: 0,
    km: 0,
    cd: 0,
    cg: 0,
    cr: 0,
    ci: 0,
    hr: 0,
    cy: 0,
    cz: 0,
    dk: 0,
    dj: 0,
    dm: 0,
    do: 0,
    ec: 0,
    eg: 0,
    sv: 0,
    gq: 0,
    er: 0,
    ee: 0,
    et: 0,
    fj: 0,
    fi: 0,
    fr: 0,
    ga: 0,
    gm: 0,
    ge: 0,
    de: 0,
    gh: 0,
    gr: 0,
    gd: 0,
    gt: 0,
    gn: 0,
    gw: 0,
    gy: 0,
    ht: 0,
    hn: 0,
    hk: 0,
    hu: 0,
    is: 0,
    in: 0,
    id: 0,
    ir: 0,
    iq: 0,
    ie: 0,
    il: 0,
    it: 0,
    jm: 0,
    jp: 0,
    jo: 0,
    kz: 0,
    ke: 0,
    ki: 0,
    kr: 0,
    undefined: 0,
    kw: 0,
    kg: 0,
    la: 0,
    lv: 0,
    lb: 0,
    ls: 0,
    lr: 0,
    ly: 0,
    lt: 0,
    lu: 0,
    mk: 0,
    mg: 0,
    mw: 0,
    my: 0,
    mv: 0,
    ml: 0,
    mt: 0,
    mr: 0,
    mu: 0,
    mx: 0,
    md: 0,
    mn: 0,
    me: 0,
    ma: 0,
    mz: 0,
    mm: 0,
    na: 0,
    np: 0,
    nl: 0,
    nz: 0,
    ni: 0,
    ne: 0,
    ng: 0,
    no: 0,
    om: 0,
    pk: 0,
    pa: 0,
    pg: 0,
    py: 0,
    pe: 0,
    ph: 0,
    pl: 0,
    pt: 0,
    qa: 0,
    ro: 0,
    ru: 0,
    rw: 0,
    ws: 0,
    st: 0,
    sa: 0,
    sn: 0,
    rs: 0,
    sc: 0,
    sl: 0,
    sg: 0,
    sk: 0,
    si: 0,
    sb: 0,
    za: 0,
    es: 0,
    lk: 0,
    kn: 0,
    vc: 0,
    sd: 0,
    sr: 0,
    sz: 0,
    se: 0,
    ch: 0,
    sy: 0,
    tw: 0,
    tj: 0,
    tz: 0,
    th: 0,
    tl: 0,
    tg: 0,
    to: 0,
    tt: 0,
    tn: 0,
    tr: 0,
    tm: 0,
    ug: 0,
    ua: 0,
    ae: 0,
    gb: 0,
    us: 0,
    uy: 0,
    uz: 0,
    vu: 0,
    ve: 0,
    vn: 0,
    ye: 0,
    zm: 0,
    zw: 0,
  };

  DownloadUsers.forEach((item) => {
    gdpData[item.countryCode.toLowerCase()] =
      gdpData[item.countryCode.toLowerCase()] + 1;
  });

  var max = 0,
    min = Number.MAX_VALUE,
    cc,
    endColor = [170, 41, 41],
    startColor = [255, 201, 201],
    colors = {},
    hex;

  //find maximum and minimum values
  for (cc in gdpData) {
    if (parseFloat(gdpData[cc]) > max) {
      max = parseFloat(gdpData[cc]);
    }
    if (parseFloat(gdpData[cc]) < min) {
      min = parseFloat(gdpData[cc]);
    }
  }

  //set colors according to values of GDP
  for (cc in gdpData) {
    if (gdpData[cc] > 0) {
      colors[cc] = "#";
      for (var i = 0; i < 3; i++) {
        hex = Math.round(
          startColor[i] +
            (endColor[i] - startColor[i]) * (gdpData[cc] / (max - min))
        ).toString(16);

        if (hex.length == 1) {
          hex = "0" + hex;
        }

        colors[cc] += (hex.length == 1 ? "0" : "") + hex;
      }
    }
  }

  jQuery(document).ready(function () {
    jQuery("#dmap").vectorMap({
      map: "world_en",
      backgroundColor: "#fff",
      color: "#333333",
      colors: colors,
      hoverOpacity: 0.7,
      selectedColor: "#666666",
      enableZoom: true,
      showTooltip: true,
      onLabelShow: function (event, label, code) {
        label[0].innerHTML =
          label[0].innerHTML + " has " + gdpData[code] + " downloaders";
      },
      scaleColors: ["#C8EEFF", "#006491"],
      normalizeFunction: "polynomial",
    });
  });
};
