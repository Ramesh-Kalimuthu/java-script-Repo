function checkLeapYear() {
    let a = prompt("enter a year")
    if (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) {
        console.log(a, "is leap year")
    }
    else {
        console.log(a, "is not a leap year")
    }
}
checkLeapYear()