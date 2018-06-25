// Write your code in this file!

function scuberGreetingForFeet(someValue) {

    if (someValue <= 400) {
      return "This one is on me!"
    }
    else if(someValue > 2500) {
      return "No can do."
  }
      else if (someValue > 2000) {
        return "I will gladly take your thirty bucks."
      }
  }

function ternaryCheckCity(city) {

  let result
    if (city === "NYC"){
      result = "Ok, sounds good.";
    }
    else {
      result = "No go.";
    }
  return result
}

function switchOnCharmFromTip(tip) {

  let result
    if (tip === "generous"){
    result = "Thank you so much."
  }
    else if (tip = "not as generous") {
      result = "Thank you."
    }
    else {
      result = "Bye."
    }
  return result
}
