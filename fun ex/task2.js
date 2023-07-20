var a = prompt("enter number 1 :")
var b = prompt("enter number 2 :")
var c = prompt("enter number 3 :")
function findTriangleType(a, b, c) {
    if (a == b && b == c && a == c) {
        console.log("Equilateral Triangle")
    }
    else if (a == b || b == c) {
        console.log("Isosceles Triangle")
    }
    else {
        console.log("Scalene Triangle")
    }
}
findTriangleType(a, b, c)