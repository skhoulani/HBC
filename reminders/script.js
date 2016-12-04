$("#inputReminder").keypress(function(event) {
    //$("#submitButton").on("click", function(e) {
        event.preventDefault();
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(event.keyCode == '13'){
            console.log('You pressed an "enter" key in somewhere');
        }
    });


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
// function isEnter(event) {
//     if (event.keyCode == '13')
//         console.log("You pressed a key inside the input field");
// }
