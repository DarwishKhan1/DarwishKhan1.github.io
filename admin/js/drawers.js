let db = firebase.firestore();
let i = 0;
let drawerArr = [];
let dataArr = [];
let drawerData = [];

db.collection('websites').doc('website').collection('drawer').orderBy("sort").get().then(function(drawers) {
    drawers.forEach(function(drawer) {

        drawerData = drawer.data();

        $('#tableData').append(`<tr id="mytabledata${i}">
       
        <td class="sort${i}"><input type="text" name="abc" id="sort${i}" value="${drawerData.sort}" style="pointer-events: none; border: none; background: transparent"></td>
        <td class="item_id${i}" data-value="${drawerData.item_id}" style="display: none;">${drawerData.item_id}</td>
        <td class="item_name${i}" data-value="${drawerData.item_name}">${drawerData.item_name}</td>
        <td class="item_url${i}" data-value="${drawerData.item_url}">${drawerData.item_url}</td>
         <td><a href="http://127.0.0.1:5503/drawer-detial.html?id=${drawerData.item_id}" class="btn btn-primary">Edit </a></td>
    </tr>`)

    })


}).then(function() {
    jQuery("#status").fadeOut();
    jQuery("#preloader").fadeOut("slow");

})