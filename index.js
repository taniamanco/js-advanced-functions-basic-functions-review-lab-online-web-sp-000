function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = 'go to the office'){
  return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(visual = "*"){
  return function(special = 'special'){
    return `You are ${visual} ${special} ${visual}!`
  }
}