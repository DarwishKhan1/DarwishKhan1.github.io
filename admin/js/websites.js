let db = firebase.firestore();




db.collection('websites').get().then(function(data) {
    data.forEach(function(item) {
        $('#websites').append(`<tr>
        <td><img style="width: 120px; height: 70px" src="${item.data().website_logo}"></td>
        <td>${item.data().website_title}</td>
        <td>${item.data().url}</td>
        <td><a href="http://127.0.0.1:5503/website-detial.html" class="btn btn-primary"> Edit </a></td>
    </tr>`)
    })
}).then(function() {

    jQuery("#status").fadeOut();

    jQuery("#preloader").fadeOut("slow");


})