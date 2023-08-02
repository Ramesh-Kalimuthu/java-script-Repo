let name=prompt("Enter Name: ")
let reg=/[A-Z]*[a-z \w+ \W+]{7,16}$/

if(reg.test(name)){
    console.log("Enter ")
}
else{
    console.log("Enter Ur Pass Correctly")
}