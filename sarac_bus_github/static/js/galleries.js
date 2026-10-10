const galleries = {

    tourino: [
        "tourino_unutrasnjost_1.jpg",
        "tourino_unutrasnjost_2.jpg",
        "tourino_unutrasnjost_3.jpg",
        "tourino_unutrasnjost_4.jpg"
    ],

    sprinter: [
        "sprinter_unutrasnjost_1.jpg",
        "sprinter_unutrasnjost_2.jpg",
        "sprinter_unutrasnjost_3.jpg"
    ]

};
let currentGallery = "";
let currentImage = 0;


function openGallery(vehicle) {

    currentGallery = vehicle;
    currentImage = 0;

    document.getElementById("vehicleGallery").style.display = "flex";

    showImage();
}


function closeGallery() {

    document.getElementById("vehicleGallery").style.display = "none";

}


function showImage() {

    const images = galleries[currentGallery];

    document.getElementById("vehicleGalleryImage").src =
        "/static/images/" + images[currentImage];

}


function nextImage() {

    const images = galleries[currentGallery];

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage();

}


function previousImage() {

    const images = galleries[currentGallery];

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage();

}