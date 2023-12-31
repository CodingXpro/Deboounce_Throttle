// Ques 1:- Create a button UI and add debounce as follows =>
//         --> Show "Button Pressed <X> Times" every time button is pressed
//         --> Increase "Triggered <Y> Times" count after 800ms of Throttle

const btn = document.querySelector(".increment_btn");
const btnPressed = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggeredCount = 0;

const start = new Date().getTime();

// Throttle Pollyfill

const myThrottle = (cb, d) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) {
      return;
    }
    last = now;
    return cb(...args);
  };
};

const throttleCount = myThrottle(() => {
  const now = new Date().getTime();
  console.log(now - start);
  count.innerHTML = ++triggeredCount;
}, 2000);

btn.addEventListener("click", () => {
  btnPressed.innerHTML = ++pressedCount;
  throttleCount();
});
