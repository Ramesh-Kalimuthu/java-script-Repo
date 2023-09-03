
function submitVal() {
    let name = document.getElementById("name").value
    let jobrole = document.getElementById("jobRole").value
    let mobile = document.getElementById("mobile").value
    let mail = document.getElementById("mail").value
    let city = document.getElementById("city").value
    let link = document.getElementById("link").value
    let git = document.getElementById("git").value
    let career = document.getElementById("Career").value

    let degree = document.getElementById("degree").value
    let collegename = document.getElementById("college").value
    let collegeyear = document.getElementById("clyear").value
    let collegepercent = document.getElementById("clPercent").value
    let schoolname = document.getElementById("school").value
    let schoolPercent = document.getElementById("scPercent").value
    let schoolyear = document.getElementById("scyear").value

    let interntitle = document.getElementById("intTitle").value
    let internyear = document.getElementById("intyear").value
    let projecttitle = document.getElementById("prjTitle").value
    let projectyear = document.getElementById("prjyear").value

    let companyname = document.getElementById("cmpname").value
    let experienceyear = document.getElementById("expyears").value

    let certificatename = document.getElementById("certificate").value
    let certifiedyear = document.getElementById("certYear").value
    let orgname = document.getElementById("orgname").value

    let skills = document.getElementById("skillname").value
    let skills2 = document.getElementById("skillname2").value


    let language1 = document.getElementById("lng1").value
    let language2 = document.getElementById("lng2").value



    if (name == "") {
        alert("Enter Ur Name")
        return
    }

    if (jobrole == "") {
        alert("Enter Ur Jobrole")
        return
    }

    let mobilereg = /^[6-9]\d{9}$/
    if (!mobilereg.test(mobile)) {
        alert("Enter Ur Mobile  number Correctly")
        return
    }

    if (mail == "") {
        alert("Enter Ur Mail-id")
        return
    }

    if (city == "") {
        alert("Enter Ur City")
        return
    }

    let main = []
    let personalDetails = { name, jobrole, mobile, mail, city, link, git, career }
    main.push(personalDetails)
    console.log(main)


    let education = { degree, collegename, collegeyear, collegeyear, collegepercent, schoolname, schoolPercent, schoolyear }
    main.push(education)
    console.log(main)

    let projects = { interntitle, internyear, projecttitle, projectyear }
    main.push(projects)
    console.log(main)

    let experience = { companyname, experienceyear }
    main.push(experience)

    let certificate = { certificatename, certifiedyear, orgname }
    main.push(certificate)

    let skill = { skills, skills2 }
    main.push(skill)

    let languages = { language1, language2 }
    main.push(languages)

    let local = localStorage.setItem("details", JSON.stringify(main))
    window.location.href = 'myresume2.html';


}