const containerEl = document.querySelector(".app__container");
const counterEl = document.querySelector(".app__counter");
const increaseButtonEl = document.querySelector(".plus__button");
const counterValueEl = document.querySelector(".app__counter");
const decreaseButtonEl = document.querySelector(".minus__button");
const resetButtonEl = document.querySelector(".reset__app__icon");
const counterTitleEl = document.querySelector(".app__name");
const btnPlusIconEl = document.querySelector(".plus__button__icon");
const btnMinusIconEl = document.querySelector(".minus__button__icon");

// get value from local storage
var storedValue = localStorage.getItem("count");

// check if value is found in local storage
if (storedValue !== null) {
  // parse value to int
  var count = parseInt(storedValue);

  // display value on screen
  counterValueEl.textContent = count;
} else {
  var count = 0;
}

// function that increment counter
const incrementCounter = () => {
  // increment counter by 1
  count++;

  if (count > 5) {
    // force it to stay number 5
    count = 5;

    // give visual indicator that limit has been reach
    containerEl.classList.add("app__container--limit");

    // update counter title to say limit has been reach
    counterTitleEl.innerHTML =
      'LIMIT! BUY <br /><span class="u-bolder u-accent">PRO</span> FOR > 5';

    // disable increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }
  // ANIMATION
  // Clear the previous animation before applying a new one
  btnPlusIconEl.style.animation = "none";
  counterEl.style.animation = "none";

  // force a reflow
  void btnPlusIconEl.offsetWidth; // This line is used to force a reflow, enabling the animation to restart
  void counterEl.offsetWidth;
  // Trigger the animation
  btnPlusIconEl.style.animation = "make-bigger 0.5s";
  counterEl.style.animation = "make-bigger 0.5s";

  // display new value on screen
  counterValueEl.textContent = count;

  // save new value in local storage
  localStorage.setItem("count", count.toString());

  // unfocus (blur)
  increaseButtonEl.blur();
};

///////////////////////////////////////////////////////////////
// Call increment function on Increase Button
increaseButtonEl.addEventListener("click", incrementCounter);

//  Call increment function on Increase Button on pressing any button
document.addEventListener("keydown", incrementCounter);

// function that decrement counter
decreaseButtonEl.addEventListener("click", () => {
  // decrement counter by 1
  count = count - 1;

  if (count < 0) {
    // force it to stay 0
    count = 0;
  }
  // display new value on screen
  counterValueEl.textContent = count;

  // ANIMATION
  // Clear the previous animation before applying a new one
  btnMinusIconEl.style.animation = "none";
  counterEl.style.animation = "none";

  // force a reflow
  void btnMinusIconEl.offsetWidth;
  void counterEl.offsetWidth;
  // Trigger the animation
  btnMinusIconEl.style.animation = "make-bigger 0.5s";
  counterEl.style.animation = "make-bigger 0.5s";

  // save new value in local storage
  localStorage.setItem("count", count.toString());

  // unfocus (blur)
  decreaseButtonEl.blur();
});

//////////////////////////////////////////////////////////////////
// Reset function
resetButtonEl.addEventListener("click", () => {
  // reset value to 0
  count = 0;

  // display value to screen
  counterValueEl.textContent = count;

  // save new value to local storage
  localStorage.setItem("count", count.toString());

  // reset visual indicator that limit has been reach
  containerEl.classList.remove("app__container--limit");

  //reset counter title
  counterTitleEl.innerHTML = "FANCY <br /> COUNTER";

  // enable increase and decrease buttons
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  // unfocus (blur)
  resetButtonEl.blur();
});
