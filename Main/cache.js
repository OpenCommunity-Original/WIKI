window.addEventListener('load', function() {
    var images = document.querySelectorAll('img');
    var imageUrls = [];

    images.forEach(function(img) {
        var src = img.getAttribute('src');
        if (src && (src.endsWith('.jpg') || src.endsWith('.gif'))) {
            // Check if the image is already cached
            if (!img.complete) {
                imageUrls.push(src);
            }
        }
    });

    preloadImages(imageUrls);
});

function preloadImages(urls) {
    urls.forEach(function(url) {
        var image = new Image();
        image.src = url;
    });
}
