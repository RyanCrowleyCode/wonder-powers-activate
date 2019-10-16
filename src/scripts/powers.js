// Practice: Wonder Powers Activate!
// The learning objective of this exercise is writing event listeners to handle button clicks, and modifying the classList of DOM elements when those events are broadcast by the browser.
const flight = document.querySelector("#flight")
const mindreading = document.querySelector("#mindreading")
const xray = document.querySelector("#xray")

const powerButtons = [flight, mindreading, xray]

const togglePowers = (power) => {
    power.classList.toggle("enabled")
}

document.querySelector("#activate-flight").addEventListener("click", function (){
    togglePowers(flight)

})

document.querySelector("#activate-mindreading").addEventListener("click", function () {
    togglePowers(mindreading)
})

document.querySelector("#activate-xray").addEventListener("click", function () {
    togglePowers(xray)
})


// Enable All Powers
/// THIS IS WHERE I STOPPED WORKING ON THIS SO FAR
document.querySelector("#activate-all").addEventListener("click", function (){
    powerButtons.forEach(element => {
        element.classList.add("enabled") // is working as toggle currently...
    })
})
// Disable All Powers
// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.