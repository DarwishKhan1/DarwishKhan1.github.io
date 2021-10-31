let db = firebase.firestore();
db.collection('websites').doc('website').get().then((docs) => {
    console.log(docs.data());

    let webData = docs.data();
    let webColor = docs.data().colorCode;
    var root = document.querySelector(':root');

    root.style.setProperty('--primary', webColor);

}).then(() => {
    jQuery("#status").fadeOut();
    jQuery("#preloader").fadeOut("slow");

});


function addDrawer() {

    let drawerUrl = document.getElementById('drawerUrl').value;
    let drawerName = document.getElementById('drawerName').value;

    let drawerSort = document.getElementById('drawerSort').value;


    if (drawerUrl == "" || drawerName == "" || drawerSort == "") {
        window.alert('Please Fill All fields')
    } else {
        let drawerRef = db.collection('websites').doc('website').collection('drawer').doc();
        $('#drawerBtn').html('Please Wait......')
        let data = {
            // icon_data: drawerData,
            item_id: drawerRef.id,
            item_name: drawerName,
            item_url: drawerUrl,
            sort: drawerSort
        }

        drawerRef.set(data).then(function() {
            $('#drawerBtn').html('Added Successfully')
            window.location.href = 'drawers.html'
        })
    }



}