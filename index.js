// Your code here

// 1st problem

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

//2nd problem

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
};

// 3rd problem

function wrapAdjective(flair="*") {
    return function(parameter="special") {
        return `You are ${flair}${parameter}${flair}!`
    }
};

// calculator

let Calculator = {
    add: (num1, num2) => {return num1 + num2},
    subtract: (num1, num2) => {return num1 - num2},
    multiply: (num1, num2) => {return num1 * num2},
    divide: (num1, num2) => {return num1 / num2}
};


// actionApplyer

function actionApplyer(startingInt, arr) {
    let a = startingInt;
    for (let i=0; i<arr.length; i++){
        a = arr[i](a);
    }
    return a;
};
