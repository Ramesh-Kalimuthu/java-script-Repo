var a = parseInt(prompt("Enter a Number "))
function checkInRange(a) {
    if (a >= 0 && a <= 30) {
        console.log("Between the range")
    }
    else {
        console.log("Outside the range")
    }
}
checkInRange(a)