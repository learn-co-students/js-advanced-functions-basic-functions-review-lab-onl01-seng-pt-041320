// Your code here

// Problem #1 - defines saturdayFun function declaration as specified
// 1) Declare a function called saturdayFun
// 2) the function returns a string "This Saturday, I want to ....!"
// 3) Fill in the ... with the activity that's passed in as the first parameter
// 4) if nothing is passed in, default to "roller-skate"

function saturdayFun(hobby="roller-skate") {
    return `This Saturday, I want to ${hobby}!`;
}

 saturdayFun();

// Problem #2 - defines mondayWork function expression as specified function exists:
// 1) Implement a function called mondayWork
// 2) It should return a String like "This Monday, I will ... ."
// 3) Fill in the ... with the activity that's passed in as the first parameter.
// 4) If nothing is passed in, default to "go to the office".

// regular function syntax
// let mondayWork = function(work = "go to the office"){
//     return `This Monday, I will ${work}.`
// }
//  mondayWork();

// arrow function
let mondayWork = (work = "go to the office") => {
    return `This Monday, I will ${work}.`
}
 mondayWork();

// Problem #3 - defines wrapAdjective function according to the specification
// Implement a function called wrapAdjective
// It should return a function
// This "inner" function should
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
// Call example: let encouragingPromptFunction = wrapAdjective("!!!")

function wrapAdjective(asterisk = "*") {
        return function(word = "programmer") {
        // let encouragingPromptFunction = wrapAdjective("!!!")
        return `You are ${asterisk}${word}${asterisk}!`
    }
}

// Problem #4 - defines an object called Calculator
// 1) has a JavaScript Object called Calculator as a local variable that has a function called add
// 2) Calculator.add exists
// 3) calculates 1 + 3

const Calculator = {
    add: function(a, b) {
       return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}

function actionApplyer(interger, array) {
    let startPoint = interger
    for( let i = 0; i < array.length; i++) {
        startPoint = array[i](startPoint)
    }
    return startPoint
}