const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");

//bgImage.src = `img/${chosenImage}`;
let bgImage2 = `url(img/${chosenImage})`;
console.log(bgImage2);
document.body.style.background = bgImage2;
//document.body.appendChild(bgImage);