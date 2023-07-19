var a = prompt("enter number 1:")
var b = prompt("enter number 2:")
var c = prompt("enter number 3:")
function findLargest(a, b, c) {
    if (a > b && a > c) {
        console.log(a, "is largest")
    }
    else if (b > a) {
        console.log(b, " is largest")
    }
    else {
        console.log(c, "is largest")
    }
}
findLargest(a, b, c)