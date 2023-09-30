// Buttons
var carBtn = document.getElementById("car-img");
var bikeBtn = document.getElementById("bike-img");
var spaceBtn = document.getElementById("space-img");
var phoneBtn = document.getElementById("phone-img");
var natureBtn = document.getElementById("nature-img");

// Images
var carImage = document.getElementById("car-image");
var bikeImage = document.getElementById("bike-image");
var spaceImage = document.getElementById("space-image");
var phoneImage = document.getElementById("phone-image");
var natureImage = document.getElementById("nature-image");

// Preview Image
var previewImage = document.getElementById("preview")

// Image and button array
var images = document.querySelectorAll(".image");
var btns = document.querySelectorAll(".btn");

// To set preview image
function setPreviewImage (image) {
    var computedStyle = getComputedStyle(image);
    var backgroundImage = computedStyle.getPropertyValue("background-image");
    previewImage.style.backgroundImage = backgroundImage;
}

// Image click
images.forEach(image => {
    image.addEventListener('click', () => {
        setPreviewImage(image);
    })
})

// Buttons click
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        var btnName = btn.id.split('-')[0];
        var image = document.getElementById(`${btnName}-image`)
        setPreviewImage(image);
    })
})
