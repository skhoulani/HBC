function getNextBus() {

    console.log(document.getElementById("item1").value);
    console.log(document.getElementById("item2").value);
    console.log($("#item1"))

    var msg = document.createElement("P");
    var t = document.createTextNode("Your next ")
    msg.appendChild(t);

    document.getElementsByTagName("DIV")[6].appendChild(msg);

}


$(document).ready(function(){
    $("#submitButton").on("click", function(e) {
        e.preventDefault();
        console.log($("#item1"))
        $("#msg").remove();
        $("#submitButton").after("<p id='msg'> Test </p>")
    });
});
