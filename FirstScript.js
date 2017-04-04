function checkForm() {
    var fieldsCount = 0;
    var fName = document.forms["contactForm"]["firstName"].value;
    var lName = document.forms["contactForm"]["lastName"].value;
    var eMail = document.forms["contactForm"]["firstName"].value;
    var phone = document.forms["contactForm"]["lastName"].value;
    var comment = document.forms["contactForm"]["lastName"].value;

    if (fName != "") {

        fieldsCount++;
    }
    if (lName != "") {

        fieldsCount++;
    }
    if (eMail != "") {

        fieldsCount++;
    }
    if (phone != "") {

        fieldsCount++;
    }
    if (comment != "") {

        fieldsCount++;
    }

    if (fieldsCount < 5)
    {
        alert("One or more fields are invalid.");
    }


}

