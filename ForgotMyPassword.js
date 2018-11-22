function validate() {

    var emailValid = /\w{4}\d{2}@student.cbs.dk/;

    if(emailValid.test(document.getElementById("email").value)) {
        alert("Look in your inbox!");
    } else {
        alert("Email must be a CBS address!");
        return false;
    }
}