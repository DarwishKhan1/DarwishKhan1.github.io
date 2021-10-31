const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
let db = firebase.firestore()
let linkStatus;
let linkUrl;



db.collection('social_llinks').doc(myParam).get().then(function(links) {

    linkUrl = links.data().url;
    linkStatus = links.data().active;
    $('#socialLinkUrl').val(linkUrl);


}).then(function() {

    jQuery("#status").fadeOut();

    jQuery("#preloader").fadeOut("slow");



});






function updateLink() {

    $('#updateBtn').html('Please Wait...');

 
    let socialLinkUrl = document.getElementById('socialLinkUrl').value;

    db.collection('social_llinks').doc(myParam).update({
     
        url: socialLinkUrl
    }).then(function() {

        window.alert('Updated Successfully');
        window.location.href = 'social-links.html';
    })
}