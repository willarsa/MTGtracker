let playerHealth = [20]
let playerCount = 1
let health = 20
let num = 0;


function addToDisplay(element, input){
    let container = element.closest('[data-id]')
    let dataId = container.getAttribute('data-id')
    let sideDisplay = container.querySelector(`#side-display`)
    
    if(sideDisplay.value === "Error"){
        sideDisplay.value = ""
    }
    sideDisplay.value += input
}

function calculate(element, input){
    let container = element.closest('[data-id]')
    let dataId = container.getAttribute('data-id')
    let sideDisplay = container.querySelector(`#side-display`)
    let display = container.querySelector(`#display`)

    if(sideDisplay.value === "Error"){
        sideDisplay.value = ""
    }
    if(num === 1){
        sideDisplay.value += '+'
    } else {
        sideDisplay.value += '-'
    }

    let length = sideDisplay.value.length
    if((sideDisplay.value.charAt(length-1) === "-" || sideDisplay.value.charAt(length-1) === "+") && sideDisplay.value.length > 1){
        for(let i = length-2; i >= 0; i--){
            if(sideDisplay.value.charAt(i) === "-" || sideDisplay.value.charAt(i) === "+"){
                sideDisplay.value = "Error"
                return
            }
        }

        num = parseInt(sideDisplay.value.slice(0, length-1))
        
        health += num * (input)
        num = 0

        display.value = parseFloat(health)
        sideDisplay.value = ""
    }
    else{
        sideDisplay.value = "Error"
    }
}

function setHealth(element, input){
    let container = element.closest('[data-id]')
    let dataId = container.getAttribute('data-id')
    let display = container.querySelector(`#display`)


    health = input
    console.log(parseFloat(health)) //shows as 20
    display.value = parseFloat(health)
}

function clearSide(element){
    let container = element.closest('[data-id]')
    let dataId = container.getAttribute('data-id')
    let sideDisplay = container.querySelector(`#side-display`)

    sideDisplay.value = ""
}

function addPlayer(){
    playerCount++
    playerHealth.push(20)

    const calculator = document.getElementById("calculator")
    const duplicate = calculator.cloneNode(true)
    duplicate.dataset.id = playerCount

    document.body.appendChild(duplicate)
}

function changeColor(element, color){
    let container = element.closest('[data-id]')
    let healthContainer = container.querySelector(`#healthContainer`)
    
    if(color === 1){
        healthContainer.style.backgroundColor = 'rgb(255, 70, 70)'
    } else if(color === 2){
        healthContainer.style.backgroundColor = 'rgb(7, 197, 0)'
    } else if(color === 3) {
        healthContainer.style.backgroundColor = 'rgb(46, 101, 255)'
    } else {
        healthContainer.style.backgroundColor = 'rgb(255, 251, 34)'
    }
}


