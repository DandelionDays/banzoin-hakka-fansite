let myLocalTime = document.querySelector("samp");
const event = new Date('August 5, 2024 0:00:00 GMT+00:00');
myLocalTime.textContent = (event.toLocaleTimeString('en-US'));
