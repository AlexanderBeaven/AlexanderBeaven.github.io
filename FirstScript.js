function checkForm() {
    var fieldsCount = 0;
    var fName = document.forms["contactForm"]["firstName"].value;
    var lName = document.forms["contactForm"]["lastName"].value;
    var eMail = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var comment = document.forms["contactForm"]["comment"].value;

    if (fName != "")
    {
        fieldsCount++;
    }
    else {
        document.getElementById("fN").style.color = "#EF959D";
    }

    if (lName != "")
    {
        fieldsCount++;
    }
    else {
        document.getElementById("lN").style.color = "#EF959D";
    }

    if (eMail != "")
    {
        fieldsCount++;
    }
    else {
        document.getElementById("eM").style.color = "#EF959D";
    }

    if (phone != "")
    {
       fieldsCount++;
    }
    else {
        document.getElementById("pN").style.color = "#EF959D";
    }

    if (comment != "")
    {
        fieldsCount++;
    }
    else {
        document.getElementById("cM").style.color = "#EF959D";
    }

    if (fieldsCount < 5)
    {
        alert("One or more fields are invalid.");
    }


}

