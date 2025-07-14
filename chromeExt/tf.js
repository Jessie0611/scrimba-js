const credits = 0

if (credits > 0) {  //if (credits) will also translate to true
    console.log("Let's play 🎰")
} else {
    console.log("Sorry, you have no credits 😭")
}

// truthy
// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

let currentViewers = null

if (currentViewers) {
    // do something , e.g. notify the live streamers
    console.log("we have viewers")
}

//currentViewers = ["jane", "nick"]

//console.log(currentViewers.randomKey)

console.log(Boolean("")) //false
console.log(Boolean("0")) //true
console.log(Boolean(100)) //true
console.log(Boolean(null)) //false
console.log(Boolean([0])) //true
console.log(Boolean(-0)) //false