// Select all <img> elements
let allImages = document.querySelectorAll("img");

// Loop through them
allImages.forEach(function (img) {
  img.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  img.alt = "Elzero Logo";
});
