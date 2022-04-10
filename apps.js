document.getElementById("enter").addEventListener("click",function begining(event){
    const begining = document.createElement("p")
    begining.textContent = "You find yourself in a mostly empty room. The walls are painted white. You're not sure how you got here, but you kow you have to get out.";
    begining.setAttribute("class", "inner-content")
    const initialLook = document.createElement("button")
    initialLook.textContent = "Look Around"
    initialLook.setAttribute("class","buttons") 
    initialLook.setAttribute("onclick","initialLook(event)")
    event.target.parentElement.appendChild(begining)
    event.target.parentElement.appendChild(initialLook)
    giveUpButton(event)
    event.target.remove()
})

function lookAtDeskButton(event){
    const deskButton = document.createElement("button")
    deskButton.textContent = "Look at Desk"
    deskButton.setAttribute("class", "buttons")
    deskButton.setAttribute("onclick","lookAtDesk(event)")
    event.target.parentElement.appendChild(deskButton)
}

// function searchHoleButton(event){

// }

// function tryDoorButton(event){

// }

// function lightSwitchButton(event){

// }

// function lookAtPicture(event){

// }

function giveUpButton(event){
    const giveUp = document.createElement("button")
    giveUp.textContent = "Give Up Hope"
    giveUp.setAttribute("class","buttons")
    giveUp.setAttribute("onclick","giveUpAction(event)")
    event.target.parentElement.appendChild(giveUp)
}



function initialLook(event){
    event.target.previousSibling.remove()
    event.target.nextSibling.remove()
  
    lookAtDeskButton(event)
    giveUpButton(event)
    giveUpButton(event)
    giveUpButton(event)
    giveUpButton(event)
    // searchHoleButton()
    // tryDoorButton()
    // lightSwitchButton()
    // lookAtPicture()
    event.target.remove()
}

function lookAtDesk(event){
    const parent = event.target.parentElement
    let childrenArr = Array.from(parent.children)
    // const eventIndex = Array.prototype.indexOf.call(parent.children, this)
    console.log(childrenArr)
    for (var i = 0; i < childrenArr.length; i++){
        const eventIndex = Array.prototype.indexOf.call(parent.children, event.target)
        
        if (i === eventIndex){
            console.log(childrenArr)
        }else{
            parent.removeChild(parent.children[i])
        }
        console.log(eventIndex)
        // childrenArr = Array.from(parent.children)
    }
    giveUpButton(event)
    event.target.remove()
    console.log(childrenArr)
    
}

function giveUpAction(){
    location.reload()
}


