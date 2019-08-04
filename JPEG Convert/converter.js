const fileInput = document.querySelector('#file');
const submit = document.querySelector('#submit');

submit.addEventListener('click', function () {
   let files = fileInput.files[0];
   let reader = new FileReader();
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    reader.readAsDataURL(files);
    let img = new Image();
    reader.addEventListener('load', function (e) {
        img.src = e.target.result;
        img.addEventListener('load', function () {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
            let jpeg = canvas.toDataURL("image/jpeg", 0.65);
            let jpg = new Image();
            jpg.src = jpeg;
            document.body.appendChild(jpg);
        });
    });
});


