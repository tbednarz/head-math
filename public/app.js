let slider = document.getElementById("slider-range");

const twoNums = () => {
  let max = 99;
  let nums = [];
  for (let i = 0; i < 2; i++) {
    let one = document.getElementById("numOne");
    let two = document.getElementById("numTwo");
    let num = Math.floor(Math.random() * Math.floor(max));
    if (num != 0) {
      nums.push(num);
    } else {
      return twoNums;
    }
    one.innerHTML = nums[0];
    two.innerHTML = nums[1];
  }
};
let timerId = setInterval(twoNums, 4000); //<-- change 4000 to slider value from above
slider.addEventListener("change", function() {
  clearInterval(timerId);
  timerId = setInterval(twoNums, slider.value);
});

const operator = document.getElementById("operation");
const changeAdd = () => {
  if (operator.innerHTML == "+") {
    return true;
  } else {
    operator.innerHTML = "+";
    document.getElementById("app-head").innerHTML = "Addition";
  }
};

const changeSub = () => {
  if (operator.innerHTML == "-") {
    return true;
  } else {
    operator.innerHTML = "-";
    document.getElementById("app-head").innerHTML = "Subtraction";
  }
};

const changeMult = () => {
  if (operator.innerHTML == "*") {
    return true;
  } else {
    operator.innerHTML = "*";
    document.getElementById("app-head").innerHTML = "Multiplication";
  }
};

const changeDiv = () => {
  if (operator.innerHTML == "/") {
    return true;
  } else {
    operator.innerHTML = "/";
    document.getElementById("app-head").innerHTML = "Division";
  }
};
