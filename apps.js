document.getElementById("enter").addEventListener("click",function begining(event){
    const begining = document.createElement("p")
    begining.textContent = "You find yourself in a mostly empty room. The walls are painted white. You're not sure how you got here, but you kow you have to get out.";
    begining.setAttribute("class", "inner-content")
    const initialLook = document.createElement("button")
    initialLook.textContent = "Look Around"
    initialLook.setAttribute("id","initialLookButton")
    initialLook.setAttribute("class","buttons") 
    initialLook.setAttribute("onclick","initialLook(event)")
    event.target.parentElement.appendChild(begining)
    event.target.parentElement.appendChild(initialLook)
    giveUpButton(event)
    document.getElementById("main").textContent = ""
    event.target.remove()
})

function lookAtDeskButton(event){
    const deskButton = document.createElement("button")
    deskButton.textContent = "Look at Desk"
    deskButton.setAttribute("class", "buttons")
    deskButton.setAttribute("id","lookAtDeskButton")
    deskButton.setAttribute("onclick","lookAtDesk(event)")
    event.target.parentElement.appendChild(deskButton)
}

function searchHoleButton(event){
    const searchHole = document.createElement("button")
    searchHole.textContent = "Search the Hole"
    searchHole.setAttribute("class","buttons")
    searchHole.setAttribute("id","searchHoleButton")
    searchHole.setAttribute("onclick","searchHole(event)")
    event.target.parentElement.appendChild(searchHole)
}

function tryDoorButton(event){
    const tryDoor = document.createElement("button")
    tryDoor.textContent = "Try the Door"
    tryDoor.setAttribute("class","buttons")
    tryDoor.setAttribute("id","tryDoorButton")
    tryDoor.setAttribute("onclick","tryDoor(event)")
    event.target.parentElement.appendChild(tryDoor)
}

function lightSwitchButton(event){
    const lightSwitch = document.createElement("button")
    lightSwitch.textContent = "Look At Light Switches"
    lightSwitch.setAttribute("class","buttons")
    lightSwitch.setAttribute("id","lightSwitchButton")
    lightSwitch.setAttribute("onclick","lightSwitch(event)")
    event.target.parentElement.appendChild(lightSwitch)
}

function lookAtPictureButton(event){
    const lookAtPicture = document.createElement("button")
    lookAtPicture.textContent = "Look at the Picture"
    lookAtPicture.setAttribute("class","buttons")
    lookAtPicture.setAttribute("id","lookAtPictureButton")
    lookAtPicture.setAttribute("onclick","lookAtPicture(event)")
    event.target.parentElement.appendChild(lookAtPicture)
}

function giveUpButton(event){
    const giveUp = document.createElement("button")
    giveUp.textContent = "Give Up Hope"
    giveUp.setAttribute("class","buttons")
    giveUp.setAttribute("id","giveUpButton")
    giveUp.setAttribute("onclick","giveUp(event)")
    event.target.parentElement.appendChild(giveUp)
}

function returnFromDeskButton(event){
    const returnFromDesk = document.createElement("button")
    returnFromDesk.textContent = "Keep Exploring Room"
    returnFromDesk.setAttribute("class","buttons")
    returnFromDesk.setAttribute("id","returnFromDeskButton")
    returnFromDesk.setAttribute("onclick","returnFromDesk(event)")
    event.target.parentElement.appendChild(returnFromDesk)
}


function inspectLampButton(event){
    const inspectLamp = document.createElement("button")
    inspectLamp.textContent = "Inspect Lamp"
    inspectLamp.setAttribute("class","buttons")
    inspectLamp.setAttribute("id","inspectLampButton")
    inspectLamp.setAttribute("onclick","inspectLamp(event)")
    event.target.parentElement.appendChild(inspectLamp)
}

function inspectPencilCupButton(event){
    const inspectPencilCup = document.createElement("button")
    inspectPencilCup.textContent = "Inspect Pencil Cup"
    inspectPencilCup.setAttribute("class","buttons")
    inspectPencilCup.setAttribute("id","inspectPencilCupButton")
    inspectPencilCup.setAttribute("onclick","inspectPencilCup(event)")
    event.target.parentElement.appendChild(inspectPencilCup)
}

function inspectFamilyPhotoButton(event){
    const inspectFamilyPhoto = document.createElement("button")
    inspectFamilyPhoto.textContent = "Inspect Family Photo"
    inspectFamilyPhoto.setAttribute("class","buttons")
    inspectFamilyPhoto.setAttribute("id","inspectFamilyPhotoButton")
    inspectFamilyPhoto.setAttribute("onclick","inspectFamilyPhoto(event)")
    event.target.parentElement.appendChild(inspectFamilyPhoto)
}

function inspectDrawerButton(event){
    const inspectDrawer = document.createElement("button")
    inspectDrawer.textContent = "Inspect Drawer"
    inspectDrawer.setAttribute("class","buttons")
    inspectDrawer.setAttribute("id","inspectDrawerButton")
    inspectDrawer.setAttribute("onclick","inspectDrawer(event)")
    event.target.parentElement.appendChild(inspectDrawer)
}

function initialLook(event){
    event.target.previousSibling.remove()
    event.target.nextSibling.remove()
    const innerContent = document.createElement("p")
    innerContent.textContent = "There are no windows in the room. There is a door with a knob that appears to take a key. Next to the door are two switches. You look at above you and think the switches are probably for the fan and the fan light.  There is a hole in the wall bellow the switches. It seems to be in line with the door lock. There is a desk in the room with a few items on it. Behind the desk hangs an odd looking picture."
    innerContent.setAttribute("class", "inner-content")
    innerContent.setAttribute("id", "innerContent")
    event.target.parentElement.appendChild(innerContent)
    tryDoorButton(event)
    lookAtDeskButton(event)
    searchHoleButton(event)
    lightSwitchButton(event)
    lookAtPictureButton(event)
    giveUpButton(event)
    event.target.remove()
}



function lookAtDesk(event){    
    document.getElementById("innerContent").textContent = "The Desk is simple. On top you see a lamp, a cup with a single pencil, and a picture that you assume is a photo of someones family. The desk also has a single drawer."
    inspectLampButton(event)
    inspectPencilCupButton(event)
    inspectFamilyPhotoButton(event)
    inspectDrawerButton(event)
    returnFromDeskButton(event)
    document.getElementById("giveUpButton").remove()
    document.getElementById("lookAtDeskButton").remove()
    document.getElementById("searchHoleButton").remove()
    document.getElementById("tryDoorButton").remove()
    document.getElementById("lightSwitchButton").remove()
    document.getElementById("lookAtPictureButton").remove()
}

function inspectDrawer(event){
    document.getElementById("innerContent").textContent = "You try to open the drawer but it doesnt budge. You notice its locked with a three character combination lock. It seems to be alphanumeric."
    var drawerForm = document.createElement("form")
    drawerForm.setAttribute("id","drawerForm")
    drawerForm.setAttribute("name","drawerForm")
    drawerForm.setAttribute("onsubmit","codeSubmit(event);return false")
    var drawerCodeTitle = document. createElement("h1")
    drawerCodeTitle.setAttribute("id","drawerCodeTitle")
    var inputOne = document.createElement("input")
    inputOne.setAttribute("type","text")
    inputOne.setAttribute("maxlength","1")
    inputOne.setAttribute("class","input")
    inputOne.setAttribute("id","inputOne")
    var inputTwo= document.createElement("input")
    inputTwo.setAttribute("type","text")
    inputTwo.setAttribute("maxlength","1")
    inputTwo.setAttribute("class","input")
    inputTwo.setAttribute("id","inputTwo")
    var inputThree = document.createElement("input")
    inputThree.setAttribute("type","text")
    inputThree.setAttribute("maxlength","1")
    inputThree.setAttribute("class","input")
    inputThree.setAttribute("id","inputThree")
    var drawerSubmit = document.createElement("input")
    drawerSubmit.setAttribute("class","buttons")
    drawerSubmit.setAttribute("type","submit")
    drawerSubmit.textContent = "Try Your Code"
    drawerForm.appendChild(drawerCodeTitle)
    drawerForm.appendChild(inputOne)
    drawerForm.appendChild(inputTwo)
    drawerForm.appendChild(inputThree)
    drawerForm.appendChild(drawerSubmit)
    
    event.target.parentElement.appendChild(drawerForm)
    document.getElementById("inspectLampButton").remove()
    document.getElementById("inspectPencilCupButton").remove()
    document.getElementById("inspectFamilyPhotoButton").remove()
    document.getElementById("inspectDrawerButton").remove()
    document.getElementById("returnFromDeskButton").remove()
}

function codeSubmit(event){
    event.preventDefault();
    var one = document.getElementById("inputOne").value
    var two = document.getElementById("inputTwo").value
    var three = document.getElementById("inputThree").value
    var userInputs = one + two + three
    var userString = userInputs.toUpperCase()
    console.log(userInputs)
    console.log(userString)
    if (userString == "DOM"){
        document.getElementById("content").textContent = "YOU WON!!! ..... This time...."
    }else{
        document.getElementById("drawerCodeTitle").textContent = "invalid code"
        document.getElementById("inputOne").value = ""
        document.getElementById("inputTwo").value = ""
        document.getElementById("inputThree").value = ""
    }
    return false;
    
}

function returnFromDesk(event){
    document.getElementById("innerContent").textContent = "There are no windows in the room. There is a door with a knob that appears to take a key. Next to the door are two switches. You look at above you and think the switches are probably for the fan and the fan light.  There is a hole in the wall bellow the switches. It seems to be in line with the door lock. There is a desk in the room with a few items on it. Behind the desk hangs an odd looking picture."
    tryDoorButton(event)
    lookAtDeskButton(event)
    searchHoleButton(event)
    lightSwitchButton(event)
    lookAtPictureButton(event)
    giveUpButton(event)
    document.getElementById("inspectLampButton").remove()
    document.getElementById("inspectPencilCupButton").remove()
    document.getElementById("inspectFamilyPhotoButton").remove()
    document.getElementById("inspectDrawerButton").remove()
    document.getElementById("returnFromDeskButton").remove()
}


// function lookAtDesk(event){
//     const parent = event.target.parentElement
//     let childrenArr = Array.from(parent.children)
//     const eventIndex = Array.prototype.indexOf.call(parent.children, event.target)
    
//     console.log(childrenArr)
    
//     for (var i = 0; i < constChildrenArr.length; i++){
//         // const eventIndex = Array.prototype.indexOf.call(parent.children, this)
        
//         if (i === eventIndex){
//             console.log(childrenArr)
//         }else{
//             parent.removeChild(parent.children[i])
//         }
//         // console.log(eventIndex)
//         // childrenArr = Array.from(parent.children)
//     }
//     // giveUpButton(event)
//     event.target.remove()
//     console.log(childrenArr)
    
// }




function giveUp (){
    location.reload()
}





