"use strict";

var db = firebase.firestore();
var fileButton = document.getElementById('productImage');
fileButton.addEventListener('change', function (e) {
  file = e.target.files[0];
});
db.collection('category').get().then(function (docs) {
  docs.forEach(function (category) {
    $('#productCategory').append("<option value=\"Gourmand \">".concat(category.data().categoryTitle, " </option>"));
  });
});

function addProduct() {
  var productName = document.getElementById('productName').value;
  var productCategory = document.getElementById('productCategory').value;
  var productDescription = document.getElementById('productDescription').value;
  var productPrice = document.getElementById('productPrice').value;
  var storageRef = firebase.storage().ref('ProductImage' + Date.now());
  console.log(storageRef);
  var uploadTask = storageRef.put(file);
  uploadTask.on('state_changed', function (snapshot) {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
    console.log('Upload is ' + progress + '% done');
    console.log(snapshot.state);

    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED:
        // or 'paused'
        console.log('Upload is paused');
        break;

      case firebase.storage.TaskState.RUNNING:
        // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function (error) {
    // Handle unsuccessful uploads
    console.log(error);
  }, function () {
    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
      console.log('File available at', downloadURL);
      var prodRef = db.collection('products').doc();
      var data = {
        productName: productName,
        productCategory: productCategory,
        productDescription: productDescription,
        productImage: downloadURL,
        productPrice: productPrice,
        productKey: prodRef.id,
        isFeatured: false,
        onSale: false
      };
      prodRef.set(data).then(function () {
        window.location.reload();
      });
    });
  });
}

$('#productCategory').click(function () {});