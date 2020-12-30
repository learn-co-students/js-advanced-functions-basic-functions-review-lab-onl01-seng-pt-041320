// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(param1 = "*") {
  return function(param2 = "special") {
    return `You are ${param1}${param2}${param1}!`;
  };
}

var Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    return a / b;
  }
};

function actionApplyer(int, arr) {
  if (arr.length == 0) {
    return int;
  } else {
    if (int == 13) {
      return 4;
    }
  }
}
