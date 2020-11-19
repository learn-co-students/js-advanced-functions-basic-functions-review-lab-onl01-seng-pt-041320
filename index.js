function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(adjective="*") {
    return function(special="special") {
        return `You are ${adjective}${special}${adjective}!`
    }
};

let Calculator = new Object()
Calculator.add = function(num1, num2) {
        return (num1 + num2)
};
Calculator.subtract = function(num1, num2) {
    return (num1 - num2)
};
Calculator.multiply = function(num1, num2) {
    return (num1*num2)
}
Calculator.divide = function(num1, num2) {
    return (num1/num2)
}

function actionApplyer(num1, things) {
    if (things.length == 0) {
        return num1
    } else {
        let sum = things[0](num1)
        for (var i = 1; i < things.length; i++) {
            let now = things[i](sum);
            sum = now
            console.log(now)
        }
        return sum
    }
}