const auth = localStorage.getItem("videoDownloaderAdmin");
if (!auth) {
    window.location.href = "index.html";
}


let db = firebase.firestore();


db.collection('social_llinks').get().then(function(data) {

    data.forEach(function(item) {

        let socialLinks = item.data();

        $('#social_links').append(`<tr>
        <td>${socialLinks.name}</td>
        <td>${socialLinks.url}</td>
        <td><a href="./social-link.html?id=${socialLinks.id}" class="btn btn-primary"> Edit </a></td>
    </tr>`)

    })

}).then(function() {

 $("#overlay1").css("display", "none");

})