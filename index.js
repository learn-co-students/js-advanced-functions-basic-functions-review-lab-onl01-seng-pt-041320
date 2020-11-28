// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string='*') {
    return function(n='special') {
        return `You are ${string}${n}${string}!`
    }
}
wrapAdjective()

let Calculator = {
    add: () => {return 1 + 3},
    subtract: () => {return 1 - 3},
    multiply: () => {return 1 * 3},
    divide: () => {return 10 / 5}
};

function actionApplyer(int, array) {
    let x = int;
    for (let i = 0; i < array.length; i++ ){
        x = array[i](x)
   }
return x
}