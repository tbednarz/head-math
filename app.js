let slider = document.getElementById("slider-range");

//Generates two numbers between 1-100
//pushes too an array
//then pushes into html
const twoNums = () => {
  let nums = [];
  let max = 99;
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
  let answer = nums => {
    let answerBox = document.getElementById("answer");
    if (operator.innerHTML == "+") {
      answerBox.innerHTML = nums[0] + nums[1];
    } else if (operator.innerHTML == "-") {
      answerBox.innerHTML = nums[0] - nums[1];
    } else if (operator.innerHTML == "*") {
      answerBox.innerHTML = nums[0] * nums[1];
    } else {
      answerBox.innerHTML = nums[0] / nums[1];
    }
  };
  return answer(nums);
};
//event listener to see if slider was used to change timing
let timerId = setInterval(twoNums, 4000); //<-- change 4000 to slider value from above
slider.addEventListener("change", function() {
  clearInterval(timerId);
  timerId = setInterval(twoNums, slider.value);
});

//Functions to change operators
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
