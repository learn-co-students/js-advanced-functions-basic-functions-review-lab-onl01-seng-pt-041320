// Your code here

function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}

saturdayFun();

let mondayWork = function(work="go to the office"){
    return(`This Monday, I will ${work}.`);
}

mondayWork();

function wrapAdjective(flair="*"){
    function encouragingPromptFunction(feeling="special"){
        return(`You are ${flair}${feeling}${flair}!`)
    }
    return encouragingPromptFunction
}
wrapAdjective()();

let Calculator = {
    add : function(num1, num2){
        return(num1 + num2)
    },

    subtract : function(num1, num2){
        return(num1 - num2)
    },

    multiply : function(num1, num2){
        return(num1 * num2)
    },

    divide : function(num1,num2){
        return(num1 / num2)
    }
}

function actionApplyer(int,arrayOfFunctions){
    if (arrayOfFunctions.length === 0){
        return(int)
    } 
    arrayOfFunctions.map(function(func){
        int = func(int)
    })
    return int
}


