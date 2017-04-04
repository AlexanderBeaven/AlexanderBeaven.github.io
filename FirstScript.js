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
    }
    else {
        document.getElementById("fN").style.backgroundColor = "#ffd0d0";
    }

    if (lName != "")
    {
        fieldsCount++;
        document.getElementById("lN").style.backgroundColor = "#c2f5c2";
    }
    else {
        document.getElementById("lN").style.backgroundColor = "#ffd0d0";
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail))
    {
        fieldsCount++;
        document.getElementById("eM").style.backgroundColor = "#c2f5c2";
    }
    else {
        document.getElementById("eM").style.backgroundColor = "#ffd0d0";
    }

    if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone))   
    {
        fieldsCount++;
        document.getElementById("pN").style.backgroundColor = "#c2f5c2";
    }
    else {
        document.getElementById("pN").style.backgroundColor = "#ffd0d0";
    }

    if (comment != "")
    {
        fieldsCount++;
        document.getElementById("cM").style.backgroundColor = "#c2f5c2";
    }
    else {
        document.getElementById("cM").style.backgroundColor = "#ffd0d0";
    }

    if (fieldsCount < 5) {
        alert("One or more fields are invalid.");
        document.getElementById("sub").setAttribute('type', 'button');
    } else {
        document.getElementById("sub").setAttribute('type', 'submit');
        alert("The form has been submitted. Thank you.");
    }


}

