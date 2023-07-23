function findGrade() {
    let a = parseInt(prompt("enter marks: "))
    if (a >= 90 && a <= 100) {
        console.log("S Grade")
    }
    else if (a >= 80 && a < 90) {
        console.log("A Grade")
    }
    else if (a >= 70 && a < 80) {
        console.log("B Grade")
    }
    else if (a >= 60 && a < 70) {
        console.log("C Grade")
    }
    else if (a >= 50 && a < 60) {
        console.log("D Grade")
    }
    else if (a > 40 && a < 50) {
        console.log("E Grade")
    }
    else {
        console.log("You are fail")
    }
}
findGrade()