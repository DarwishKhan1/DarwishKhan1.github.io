let db = firebase.firestore();

let file = null;
var fileButton = document.getElementById('adminImage');


fileButton.addEventListener('change', function(e) {
    file = e.target.files[0];
});



db.collection('admin').doc('Pcio0nYhI4AkiNTAEDY4').get().then(function(data) {

    console.log(data.data());

    $('#adminName').html(data.data().name);
    $('#adminEmail').html(data.data().email);
    $('#adminNameUpdate').val(data.data().name);
    $('#adminRightsUpdate').val(data.data().rights);
    $('#adminImageUpdate').val(data.data().profile_pic);

    $('#profile-pic').append(`<img style="width: 220px; height: 220px; border-radius: 50%; margin-bottom: 3rem " class="img-fluid" src="${data.data().profile_pic}" alt="">`)


}).then(function() {

    jQuery("#status").fadeOut();

    jQuery("#preloader").fadeOut("slow");
    console.log('End loader');


});




function editAdminProfile() {

    let updatedName = $('#adminNameUpdate').val();
    let adminRightsUpdate = $('#adminRightsUpdate').val();
    let adminImageUpdate = $('#adminImageUpdate').val();


    if (file == null) {
        let adminRef = db.collection('admin').doc('Pcio0nYhI4AkiNTAEDY4');


        let data = {
            name: updatedName,
            profile_pic: adminImageUpdate,
            rights: adminRightsUpdate

        }

        adminRef.update(data).then(function() {
            window.location.reload();
        });
    } else {


        var storageRef = firebase.storage().ref('adminImage' + Date.now());

        var uploadTask = storageRef.put(file);


        uploadTask.on('state_changed',
            (snapshot) => {

                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                console.log(snapshot.state)
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
                console.log(error)
            },
            () => {

                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log('File available at', downloadURL);

                    let adminRef = db.collection('admin').doc('Pcio0nYhI4AkiNTAEDY4');


                    let data = {
                        name: updatedName,
                        profile_pic: downloadURL,
                        rights: adminRightsUpdate

                    }

                    adminRef.update(data).then(function() {
                        window.location.reload();
                    });



                })
            })

    }





}