let db = firebase.firestore();


db.collection('social_llinks').get().then(function(data) {
   
    console.log(data.docs);

    data.forEach(function(item) {
        console.log(item.data);

        let socialLinks = item.data();

        $('#social_links').append(`<tr>
        <td>${socialLinks.name}</td>
        <td>${socialLinks.url}</td>
        <td>${socialLinks.active}</td>
        <td><a href="http://127.0.0.1:5503/social-link.html?id=${socialLinks.id}" class="btn btn-primary"> Edit </a></td>
    </tr>`)

    })

}).then(function() {

    jQuery("#status").fadeOut();

    jQuery("#preloader").fadeOut("slow");



})