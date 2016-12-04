/*function getNextBus() {

    console.log(document.getElementById("item1").value);
    console.log(document.getElementById("item2").value);
    console.log($("#item1"))

    var msg = document.createElement("P");
    var t = document.createTextNode("Your next ")
    msg.appendChild(t);

    document.getElementsByTagName("DIV")[6].appendChild(msg);

}*/


$(document).ready(function(){
    $("#submitButton").on("click", function(e) {
        e.preventDefault();
        //console.log($("#item1"))
        $("#msg1").remove();
        $("#msg2").remove();
        //$("#submitButton").after("<br>");


        var loc = $("#item1").val();

        if($("#item2").val() == "Lowell Voke High School to Kennedy Center (Inbound)") {

            switch(loc){
                case "Kennedy Center":
                    $("#submitButton").after("<h3 id='msg1'> A.M. – 6:14, 6:49, 7:19, 7:24, 7:49, 8:19, 8:49, 9:19, 9:49, 10:19, 10:49, 11:19, 11:49</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. – 12:19, 12:49, 1:19, 1:49, 2:19, 2:49, 3:29, 3:59, 4:29, 4:59, 5:29, 5:59, 6:29, 6:59, 7:29, 7:59, 9:24</h3>");
                    $("#msg2").prepend("<br>");
                    break;
                case "UMass North Campus":
                    $("#submitButton").after("<h3 id='msg1'> A.M. – 6:07, 6:42, 7:12, 7:17, 7:42, 8:12, 8:42, 9:12, 9:42, 10:12, 10:42, 11:12, 11:42</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. – 12:12, 12:42, 1:12, 1:42, 2:12, 2:42, 3:22, 3:52, 4:22, 4:52, 5:22, 5:52, 6:22, 6:52, 7:22, 7:52, 9:17</h3>");
                    $("#msg2").prepend("<br>");
                    break;
                case "Mammoth Rd. & Woodward Ave.":
                    $("#submitButton").after("<h3 id='msg1'> A.M. – 6:06, 6:41, 7:11, 7:16, 7:41, 8:11, 8:41, 9:11, 9:41, 10:11, 10:41, 11:11, 11:41</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. – 12:11, 12:41, 1:11, 1:41, 2:11, 2:41, 3:21, 3:51, 4:21, 4:51, 5:21, 5:51, 6:21, 6:51, 7:21, 7:51, 9:16</h3>");
                    $("#msg2").prepend("<br>");
                    break;
                case "Lowell General Hospital":
                    $("#submitButton").after("<h3 id='msg1'> A.M. – 6:04, 6:39, 7:09, 7:14, 7:39, 8:09, 8:39, 9:09, 9:39, 10:09, 10:39, 11:09, 11:39</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. – 12:09, 12:39, 1:09, 1:39, 2:09, 2:39, 3:19, 3:49, 4:19, 4:49, 5:19, 5:49, 6:19, 6:49, 7:19, 7:49, 9:14</h3>");
                    $("#msg2").prepend("<br>");
                    break;
                case "D’Youville Manor":
                    $("#submitButton").after("<h3 id='msg1'> A.M. – 5:57, 6:32, 7:02, 7:07, 7:32, 8:02, 8:32, 9:02, 9:32, 10:02, 10:32, 11:02, 11:32</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. – 12:02, 12:32, 1:02, 1:32, 2:02, 2:32, 3:12, 3:42, 4:12, 4:42, 5:12, 5:42, 6:12, 6:42, 7:12, 7:42, 9:07</h3>");
                    $("#msg2").prepend("<br>");
                    break;
                case "West Minster Village":
                    $("#submitButton").after("<h3 id='msg1'> A.M. – 5:52, 6:27, 6:57, 7:02, 7:27, 7:57, 8:27, 8:57, 9:27, 9:57, 10:27, 10:57, 11:27, 11:57</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. – 12:27, 12:57, 1:27, 1:57, 2:27, 3:07, 3:37, 4:07, 4:37, 5:07, 5:37, 6:07, 6:37, 7:07, 7:37, 9:02</h3>");
                    $("#msg2").prepend("<br>");
                    break;
                case "Lowell Voke High School":
                    $("#submitButton").after("<h3 id='msg1'> A.M. –  5:50, 6:25, 6:55, 7:00, 7:25, 7:55, 8:25, 8:55, 9:25, 9:55, 10:25, 10:55, 11:25, 11:55</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. – 12:25, 12:55, 1:25, 1:55, 2:25, 3:05, 3:35, 4:05, 4:35, 5:05, 5:35, 6:05, 6:35, 7:05, 7:35, 9:00</h3>");
                    $("#msg2").prepend("<br>");
                    break;
            }
        }


        else if($("#item2").val() == "Kennedy Center to Lowell Voke High School (Outbound)") {

            switch(loc){
                case "Kennedy Center":
                    $("#submitButton").after("<h3 id='msg1'> A.M. – 5:55, 6:25, 6:55, 7:25, 7:55, 8:25, 8:55, 9:25, 9:55, 10:25, 10:55, 11:25, 11:55</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. – 12:25, 12:55, 1:25, 1:55, 2:25, 2:45, 2:55, 3:25, 3:55, 4:25, 4:55, 5:25, 5:55, 6:25, 6:55, 8:20</h3>");
                    $("#msg2").prepend("<br>");
                    break;
                case "UMass North Campus":
                    $("#submitButton").after("<h3 id='msg1'> A.M. – 6:05, 6:35, 7:05, 7:35, 8:05, 8:35, 9:05, 9:35, 10:05, 10:35, 11:05, 11:35</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. – 12:05, 12:35, 1:00, 1:35, 2:05, 2:35, 2:55, 3:05, 3:35, 4:05, 4:35, 5:05, 5:35, 6:05, 6:35, 7:05, 8:30</h3>");
                    $("#msg2").prepend("<br>");
                    break;
                case "Mammoth Rd. & Woodward Ave.":
                    $("#submitButton").after("<h3 id='msg1'> A.M. –  6:11, 6:41, 7:11, 7:41, 8:11, 8:41, 9:11, 9:41, 10:11, 10:41, 11:11, 11:41</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. – 12:11, 12:41, 1:06, 1:41, 2:11, 2:41, 3:11, 3:41, 4:11, 4:41, 5:11, 5:41, 6:11, 6:41, 7:11, 8:36</h3>");
                    $("#msg2").prepend("<br>");
                    break;
                case "Lowell General Hospital":
                    $("#submitButton").after("<h3 id='msg1'> A.M. –  6:14, 6:44, 7:14, 7:44, 8:14, 8:44, 9:14, 9:44, 10:14, 10:44, 11:14, 11:44</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. – 12:14, 12:44, 1:09, 1:44, 2:14, 2:44, 3:04, 3:14, 3:44, 4:14, 4:44, 5:14, 5:44, 6:14, 6:44, 7:14, 8:39</h3>");
                    $("#msg2").prepend("<br>");
                    break;
                case "D’Youville Manor":
                    $("#submitButton").after("<h3 id='msg1'> A.M. – 6:21, 6:51, 7:21, 7:51, 8:21, 8:51, 9:21, 9:51, 10:21, 10:51, 11:21, 11:51</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. – 12:21, 12:51, 1:16, 1:51, 2:21, 2:51, 3:11, 3:21, 3:51, 4:21, 4:51, 5:21, 5:51, 6:21, 6:51, 7:21, 8:46</h3>");
                    $("#msg2").prepend("<br>");
                    break;
                case "West Minster Village":
                    $("#submitButton").after("<h3 id='msg1'> A.M. – 6:23, 6:53, 7:23, 7:53, 8:23, 8:53, 9:23, 9:53, 10:23, 10:53, 11:23, 11:53</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. – 12:23, 12:53, 1:18, 1:53, 2:23, 2:53, 3:13, 3:23, 3:53, 4:23, 4:53, 5:23, 5:53, 6:23, 6:53, 7:23, 8:48</h3>");
                    $("#msg2").prepend("<br>");
                    break;
                case "Lowell Voke High School":
                    $("#submitButton").after("<h3 id='msg1'> A.M. –  6:25, 6:55, 7:25, 7:55, 8:25, 8:55, 9:25, 9:55, 10:25, 10:55, 11:25, 11:55</h3>");
                    $("#submitButton").after("<h3 id='msg2'> P.M. –  12:25, 12:55, 1:25, 1:55, 2:25, 2:55, 3:16, 3:35, 4:05, 4:35, 5:05, 5:35, 6:05, 6:35, 7:05, 7:35, 9:00</h3>");
                    $("#msg2").prepend("<br>");
                    break;
            }
        }



    });
});
