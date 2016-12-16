//This JQuery isn't working for some strange reason
// $(".form-group #inputReminder").on("keyup", function(event) {
//     //$("#submitButton").on("click", function(e) {
//         event.preventDefault();
//         //var keycode = (event.keyCode ? event.keyCode : event.which);
//         console.log(event);
//         if(event.keyCode == 13){
//             console.log('You pressed an "enter" key in somewhere');
//         }
//     });

//another test with Jquery also not working
//         //$("#checklist").after("<br>");
//     });
//     $(document).bind("enterKey",function(e){
//        //do stuff here
//        console.log("hi");
//     });
//     $(document).keydown(function(e){
//         if(e.keyCode == 13)
//         {
//             $(this).trigger("enterKey");
//         }
//     })
// });
// $(document).ready(function() {
// // Keypress does not work here as the character needs to be written to screen before
// // the event handler fires.
//
//
//     $("#inputReminder").keyup(function(event){
//         console.log(event.which)
//
//
//         if (event.which == 13) {
//             return false;
//             console.log("hey");
//
//         }
//     })
// })

//Prevents the enter button from submitting a form
var i = 0;
function noenter1(e){
    //removes last checklist item each time a character is entered on keybaord
    //$("#checklist").last().remove();
    if (e.which == 13) {
        $("#incomplete").append("<li ><label id=check'"+ i +"'>" + $("#inputReminder1").val() + "</label></li>");
        $("#inputReminder1").val("");
        i++;
    }

    return !(window.event && window.event.keyCode == 13);


}

var j = 0;

function noenter2(e){
    //removes last checklist item each time a character is entered on keybaord
    //$("#checklist").last().remove();
    if (e.which == 13) {
        $("#complete").append("<li ><label id=check'"+ j +"'>" + $("#inputReminder2").val() + "</label></li>");
        $("#inputReminder2").val("");
        j++;
    }

    return !(window.event && window.event.keyCode == 13);


}

 var numChecked = 0;

 $('.checkbox input[type=checkbox]').change(function(event) {
     event.preventDefault();
     console.log("hi")
     numChecked = $(".checkbox input[type=checkbox]").checked.length;

 });
