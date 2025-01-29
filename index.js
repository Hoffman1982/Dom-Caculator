function toDisplay(value) {
    document.getElementById('display').value += value 
}
function clearDisplay() {
    document.getElementById('display').value = ''
}
function backSpace() {
    let display= document.getElementById('display').value 
    document.getElementById('display').value = display.slice(0,-1)
}
function caculate() {
    let expression= document.getElementById('display').value 
    try {
        let result = eval(expression) 
        document.getElementById('display').value = result
    } catch (error) {
        document.getElementById('display').value = 'Syntax Error'
    }
}