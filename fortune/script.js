function revealFortune() {

    var d = new Date();

    //Here I am subtracting the current time in milliseconds from the time that the fortune button was clicked. I have hard coded that number because manuall setting a Date object was bugged for some reason. 
    var quoteNum = Math.floor(Math.abs((d.getTime() - 1480806021656)/84600000)) % 318;

    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "https://skhoulani.github.io/HBC/fortune.txt", true);
    txtFile.onreadystatechange = function()
    {
      if (txtFile.readyState === 4) {  // document is ready to parse.
        if (txtFile.status === 200) {  // file is found
          allText = txtFile.responseText;
          lines = txtFile.responseText.split("\n");

          var fortuneDiv = document.getElementById("fortuneDiv");

          fortuneDiv.removeChild(fortuneDiv.childNodes[3]);

          var node = document.createElement('em');
          var textnode = document.createTextNode(lines[quoteNum]);
          node.appendChild(textnode);
          fortuneDiv.appendChild(node);

          document.getElementsByTagName("em")[0].style.fontSize = "50px";
          document.getElementsByTagName("em")[0].style.color = "#E4FED1";


        }
      }
    }
    txtFile.send(null);


};
