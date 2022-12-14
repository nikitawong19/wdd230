// The imagesToLoad variable contains references to all the images
const imagesToLoad = document.querySelectorAll("img[data-src]");

// Optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 2,
    rootMargin: "0px 0px 50px 0px"
};

// The loadImages function moves the path from data-src to src
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    // When each image is actually loaded, we remove its data-src attribute as it's not needed anymore
    image.onload = () => {image.removeAttribute("data-src");};
  };

// First check to see if Intersection Observer is supported
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
            });
        });

// Then we loop through each image and load it:
imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}