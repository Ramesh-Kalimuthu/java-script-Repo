let name=prompt("ENter Name: ")
let reg=/(^[A-Z]{1})([a-z]+){5,10}/

if(reg.test(name)){
    console.log("Enter Pass")
}
else{
    console.log("Enter Ur Name Correctly")
}