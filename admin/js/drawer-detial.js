let db = firebase.firestore();
let urlParam = new URLSearchParams(window.location.search);
let myParam = urlParam.get('id');

db.collection('websites').doc('website').collection('drawer').doc(myParam).get().then(function(drawer) {
    let drawerData = drawer.data();

    $('#drawerName').val(drawerData.item_name);
    $('#drawerUrl').val(drawerData.item_url);
    $('#drawerData').val(drawerData.icon_data);
    $('#sort').val(drawerData.sort);

}).then(function() {

    jQuery("#status").fadeOut();

    jQuery("#preloader").fadeOut("slow");


});



function updateDrawer() {

    let drawerRef = db.collection('websites').doc('website').collection('drawer').doc(myParam);

    let drawerName = $('#drawerName').val();
    let drawerUrl = $('#drawerUrl').val();

    let sort = $('#sort').val();

    drawerRef.update({

        item_name: drawerName,
        item_url: drawerUrl,
        sort: sort
    }).then(function() {

        window.alert('Updated Successfully');
        window.location.href = 'drawers.html';
    })


}

function deleteDrawer() {

    let drawerRef = db.collection('websites').doc('website').collection('drawer').doc(myParam);

    drawerRef.delete().then(function() {
        window.alert('Deleted Successfully');
        window.location.href = 'drawers.html';
    })
}