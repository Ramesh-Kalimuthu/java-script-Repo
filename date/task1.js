function dateof() {
    let d = new Date()
    let date = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()

    console.log(date + "*" + month + "*" + year);
    console.log(date + "-" + month + "-" + year);
}
dateof()