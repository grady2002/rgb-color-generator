function generateColor() {
    var redComponent = parseInt(document.getElementById('redComponent').value)
    var greenComponent = parseInt(document.getElementById('greenComponent').value)
    var blueComponent = parseInt(document.getElementById('blueComponent').value)
    const commandOutput = document.getElementById('commandOutput')
    const colorScreen = document.getElementById('colorScreen')

    if (redComponent == "" || greenComponent == "" || blueComponent == "") {
        commandOutput.innerHTML = "please input correct values"
    }
    else {
        var finalHex = rgbToHex(redComponent, greenComponent, blueComponent)
        commandOutput.innerHTML = finalHex
        colorScreen.style.backgroundColor = finalHex
        colorScreen.style.boxShadow = "0 20px 40px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.30)"
    }
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(redComponent, greenComponent, blueComponent) {
    return "#" + componentToHex(redComponent) + componentToHex(greenComponent) + componentToHex(blueComponent);
}

function clearColor() {
    colorScreen.style.backgroundColor = "#fff"
    commandOutput.innerHTML = ""
    location.reload()
}