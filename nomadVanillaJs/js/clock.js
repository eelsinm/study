const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hour = date.getHours();
    console.log(typeof(hour));
    clock.innerText = `${hour}`;
}

getClock();