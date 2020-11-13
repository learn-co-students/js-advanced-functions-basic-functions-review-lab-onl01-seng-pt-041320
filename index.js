function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(str="*"){
  return function(adj="special"){
    return `You are ${str}${adj}${str}!`
  }
}

const Calculator = {
  add: function add(num1, num2){
    return num1 + num2
  },
  subtract: function subtract(num1, num2){
    return num1 - num2
  },
  multiply: function multiply(num1, num2){
    return num1 * num2
  },
  divide: function divide(num1, num2){
    return num1 / num2
  }
}

function actionApplyer(int, functs){
  for (let i = 0; i < functs.length; i++){
  int = functs[i](int);
  }
  return int
}
