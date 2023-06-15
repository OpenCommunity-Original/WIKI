// Preload and cache images on page load
window.addEventListener('load', function() {
    var images = document.querySelectorAll('img');
    var imageUrls = [];

    images.forEach(function(img) {
        var src = img.getAttribute('src');
        if (src && (src.endsWith('.jpg') || src.endsWith('.gif'))) {
            imageUrls.push(src);
        }
    });

    preloadImages(imageUrls);
});

// Preload and cache images using dynamic Image creation
function preloadImages(urls) {
    urls.forEach(function(url) {
        var image = new Image();
        image.src = url;
    });
}
