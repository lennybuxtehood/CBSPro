// Initialize local storage
if (localStorage.getItem("Participants") === null) {
    localStorage.setItem("Participants", JSON.stringify([]))
}

var memberArr = JSON.parse(localStorage.getItem("Participants"));

document.getElementById("counter").innerHTML = memberArr.length
document.getElementById("members").innerHTML = "These people are already registered: " + memberArr.toString("")

function register() {

    if (memberArr.length < 5) {
        var newMember = document.getElementById("name").value;

        memberArr.push(newMember);
        localStorage.setItem("Participants", JSON.stringify(memberArr));
    } else {
        alert("Course is already full!");
        return false;
    }
}
