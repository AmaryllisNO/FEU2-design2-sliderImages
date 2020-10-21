const slider = document.querySelector(".slider");
const chair = document.querySelector(".chair");

const images = [
    "./images/chair/1.jpg",
    "./images/chair/2.jpg",
    "./images/chair/3.jpg",
    "./images/chair/4.jpg",
    "./images/chair/5.jpg",
    "./images/chair/6.jpg"
]

slider.addEventListener("input", function (event) {
    console.log("changed!");

    const index = event.currentTarget.value;

    console.log(images[index]);
    const newSrc = images[index];

    chair.src = newSrc;
})