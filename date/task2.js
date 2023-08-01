function dateof(month, year) {
    month = parseInt(prompt("Enter Month :"))
    year = parseInt(prompt("Enter Year :"))
    return new Date(year, month, 0).getDate();
}
console.log(dateof())