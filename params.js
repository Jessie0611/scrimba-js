const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}


greetUser("Hello", "Jessie", "👋")


// Create a function, add(), that adds two numbers together and returns the sum
function add(a, b) {
    return a + b
}
console.log(add(3, 4)) // should log 7
console.log(add(9, 102)) // should log 111