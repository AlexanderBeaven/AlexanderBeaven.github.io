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
        document.getElementById("fN").style.backgroundColor = "#c2f5c2";
        document.getElementById("fN").style.borderColor = "#7AE7C7";
    }
    else {
        document.getElementById("fN").style.backgroundColor = "#ffd0d0";
        document.getElementById("fN").style.borderColor = "#EF959D";
    }

    if (lName != "")
    {
        fieldsCount++;
        document.getElementById("lN").style.backgroundColor = "#c2f5c2";
        document.getElementById("lN").style.borderColor = "#7AE7C7";
    }
    else {
        document.getElementById("lN").style.backgroundColor = "#ffd0d0";
        document.getElementById("lN").style.borderColor = "#EF959D";
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail))
    {
        fieldsCount++;
        document.getElementById("eM").style.backgroundColor = "#c2f5c2";
        document.getElementById("eM").style.borderColor = "#7AE7C7";
    }
    else {
        document.getElementById("eM").style.backgroundColor = "#ffd0d0";
        document.getElementById("eM").style.borderColor = "#EF959D";
    }

    if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone))   
    {
        fieldsCount++;
        document.getElementById("pN").style.backgroundColor = "#c2f5c2";
        document.getElementById("pN").style.borderColor = "#7AE7C7";
    }
    else {
        document.getElementById("pN").style.backgroundColor = "#ffd0d0";
        document.getElementById("pN").style.borderColor = "#EF959D";
    }

    if (comment != "")
    {
        fieldsCount++;
        document.getElementById("cM").style.backgroundColor = "#c2f5c2";
        document.getElementById("cM").style.borderColor = "#7AE7C7";
    }
    else {
        document.getElementById("cM").style.backgroundColor = "#ffd0d0";
        document.getElementById("cM").style.borderColor = "#EF959D";
    }

    if (fieldsCount < 5) {
        alert("One or more fields are invalid.");
        document.getElementById("sub").setAttribute('type', 'button');
    } else {
        document.getElementById("sub").setAttribute('type', 'submit');
        alert("The form has been submitted. Thank you.");
    }


}

