// Practice: Wonder Powers Activate!
// The learning objective of this exercise is writing event listeners to handle button clicks, and modifying the classList of DOM elements when those events are broadcast by the browser.

// creating references to the individual power buttons
const flightButton = document.getElementById("activate-flight")
const mindreadingButton = document.getElementById("activate-mindreading")
const xrayButton = document.getElementById("activate-xray")

// all them powers and button
const powers = document.querySelectorAll(".power")
const individualButtons = [flightButton, mindreadingButton, xrayButton]


// trying out .split
// targetPower takes a string and targets the element that has an id of that string
const targetPower = (powerName) => {
    return document.getElementById(`${powerName}`)
}

// adding event listeners to all individual power button
individualButtons.forEach(button => {
    button.addEventListener("click", function (){
        // getting a string with the name of the power. For example, "#activate-flight" button will have the powerName of "flight"
        powerName = event.target.id.split("-")[1]
        // targeting the section with an id that equals the string in powerName
        currentPower = targetPower(powerName)
        // toggling the power
        currentPower.classList.toggle("enabled")
    })
})

// Enable All Powers
document.querySelector("#activate-all").addEventListener("click", function (){
    powers.forEach(power => {
        power.classList.add("enabled") 
    })
})
// Disable All Powers
document.querySelector("#deactivate-all").addEventListener("click", function (){
    powers.forEach(power => {
        power.classList.remove("enabled")
    })
})
