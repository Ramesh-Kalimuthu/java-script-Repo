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

/// method 2

function checkInRange(a) {
    var a =prompt("Enter a Number ")
    for (a;a<=50;a++){
    if (a >= 20 && a <= 40) {
        console.log(a," Between")
    }
    else {
        console.log(a," Outside")
    }
}
}
checkInRange()