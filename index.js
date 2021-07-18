function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(punctuation = "*"){
    const inner =  function(param = "special"){
        return `You are ${punctuation}${param}${punctuation}!`
    }       
    return inner;
    }

   