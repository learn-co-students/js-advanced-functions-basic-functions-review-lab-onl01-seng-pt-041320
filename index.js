// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(whatev="*"){
  return function(param="special"){
    return `You are ${whatev}${param}${whatev}!`
  }
}

const Calculator = {
  add: (a, b) => a+b,
  subtract: (a,b) => a-b,
  multiply: (a,b) => a*b,
  divide: (a,b) => a/b
}

function actionApplyer(i, array){
  array.forEach((fun)=>{
    i = fun(i)
  })
  return i
}