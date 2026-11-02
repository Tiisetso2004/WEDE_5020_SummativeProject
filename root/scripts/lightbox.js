//Retrieve DOM elements
const lightbox = document.querySelector('.lightbox');
const flexContainer = document.querySelector('.flex-container');
const lightboxImage = document.querySelector('.lightbox-image');
const images = document.querySelectorAll('.container-image');

//Set initial display styles DOM elements
flexContainer.style.display = 'flex';
lightbox.style.display = 'none';

//Show lightbox and update the lightbox image source
function showLightbox(imageSrc) {
    if (imageSrc) {
        lightboxImage.src = imageSrc;
    }
    flexContainer.style.display = 'none';
    lightbox.style.display = 'flex';
}

//Close lightbox
function closeLightbox() {
    flexContainer.style.display = 'flex';
    lightbox.style.display = 'none';
}

//Attach click listeners to all container images
images.forEach(img => {
    img.addEventListener('click', () => {
        showLightbox(img.src);
    });
});

//Close lightbox when clicking anywhere on the lightbox container
lightbox.addEventListener('click', closeLightbox);