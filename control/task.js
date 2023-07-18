for (let a = 1; a <= 100; a++) {
    if (a % 3 && a % 5) {
        console.log(a)
    }
    else if (a % 3 == 0) {
        console.log(a, "Fizz")
    }
    else if (a % 5 == 0) {
        console.log(a, "buzz")
    }
}