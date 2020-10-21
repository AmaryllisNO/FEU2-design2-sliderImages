// select DOM slider
const slider = document.querySelector(".slider");

// assign const to slider value 
const sliderValue = slider.value

// select DOM display value
const displayValue = document.querySelector("#displayValue");

// select DOM image container 
const imageContainer = document.querySelector(".image-container");

// select DOM image 
const image = document.querySelector(".image")

slider.addEventListener("input", handleSlider);

function handleSlider(event) {
    // console.log(event.explicitOriginalTarget.value);
    let newValue = event.currentTarget.value;
    console.log(newValue);
    showImages(newValue);
    displayValue.innerHTML = newValue;
}

// select DOM images 
const images = [
    "./images/birds/img1.webp",
    "./images/birds/img3.webp",
    "./images/birds/img7.webp",
    "./images/birds/img9.webp",
    "./images/birds/img11.webp",
    "./images/birds/img13.webp",
    "./images/birds/img15.webp",
    "./images/birds/img17.webp",
    "./images/birds/img19.webp"
]
console.log(images);

function showImages(param) {

    let index = parseInt(param);
    console.log(index)
    console.log(images[index]);
    let newSrc = images[index];


    image.src = newSrc;
    /*  console.log(index);
     console.log(slides[index].outerHTML);
     slides[index].classList.toggle("slide-show");
     slides[index].classList.toggle("slide"); */
}
