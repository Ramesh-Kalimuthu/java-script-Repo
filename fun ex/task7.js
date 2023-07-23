function findDaysInMonth() {
    let year = prompt("enter a year: ")
    let month = prompt("enter month: ")
    if (month == 2 && year % 4 == 0) {
        console.log("This month has 29 days")
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
        console.log("This month has 30 days")
    }
    else {
        console.log("This month has 31 days")
    }
}
findDaysInMonth()