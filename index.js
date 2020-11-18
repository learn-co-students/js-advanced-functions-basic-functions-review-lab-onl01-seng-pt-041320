// Your code here
function saturdayFun (activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
    return function(parameter="special") {
        return `You are ${flair}${parameter}${flair}!`
    }
}

const Calculator = { add, subtract, multiply, divide }
    function add(a,b) {
        return a+b
    };
    function subtract(a,b) {
        return a-b
    };
    function multiply(a,b) {
       return a*b
    };
    function divide(a,b) {
       return a/b
    
}

function actionApplyer(integer, array) {
    if (array[0] === undefined) {
        return integer
    }
    else {
      let num = array[0](integer)
      let num2 = array[1](num)
      return array[2](num2)
        
    }
    
}