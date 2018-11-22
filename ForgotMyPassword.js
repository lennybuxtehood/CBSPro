function validate() {

    var emailValid = /\w{4}\d{2}\w{2}@student.cbs.dk/;

    if(emailValid.test(document.getElementById("email").value)) {
        alert("An email has been sent!");
    } else {
        alert("Email must be a CBS address!");
        return false;
    }
}