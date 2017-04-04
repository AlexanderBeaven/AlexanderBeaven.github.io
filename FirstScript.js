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
        document.getElementById("fN").style.backgroundColor = "#D8D8F6";
    }
    else {
        document.getElementById("fN").style.backgroundColor = "#EF959D";
    }

    if (lName != "")
    {
        fieldsCount++;
        document.getElementById("fN").style.backgroundColor = "#D8D8F6";
    }
    else {
        document.getElementById("lN").style.backgroundColor = "#EF959D";
    }

    if (eMail != "")
    {
        fieldsCount++;
        document.getElementById("fN").style.backgroundColor = "#D8D8F6";
    }
    else {
        document.getElementById("eM").style.backgroundColor = "#EF959D";
    }

    if (phone != "")
    {
        fieldsCount++;
        document.getElementById("fN").style.backgroundColor = "#D8D8F6";
    }
    else {
        document.getElementById("pN").style.backgroundColor = "#EF959D";
    }

    if (comment != "")
    {
        fieldsCount++;
        document.getElementById("fN").style.backgroundColor = "#D8D8F6";
    }
    else {
        document.getElementById("cM").style.backgroundColor = "#EF959D";
    }

    if (fieldsCount < 5) {
        alert("One or more fields are invalid.");
        document.getElementById("sub").setAttribute('type', 'button');
    } else {
        document.getElementById("sub").setAttribute('type', 'submit');
        alert("The form has been submitted. Thank you.");
    }


}

