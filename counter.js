// Initialize local storage
if (localStorage.getItem("Participants") === null) {
    localStorage.setItem("Participants", JSON.stringify([]))
}

var memberArr = JSON.parse(localStorage.getItem("Participants"));

document.getElementById("counter").innerHTML = memberArr.length
document.getElementById("members").innerHTML = "These people are already registered: " + memberArr.toString(", ")
// alternative Schreibweise mit for in loop
// for(i=0; i<memberArr.length; i++){
//   document.getElementById("members").innerHTML += memberArr[i] + ", ";
//}


function register() {

    if (memberArr.length < 10) {
        var newMember = document.getElementById("name").value;
        memberArr.push(newMember);
        localStorage.setItem("Participants", JSON.stringify(memberArr));
        //return true;
    } else {
        alert("Course is already full!");
        return false;
    }
}
