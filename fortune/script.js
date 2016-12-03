function revealFortune() {


    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "https://skhoulani.github.io/HBC/fortune.txt", true);
    txtFile.onreadystatechange = function()
    {
      if (txtFile.readyState === 4) {  // document is ready to parse.
        if (txtFile.status === 200) {  // file is found
          allText = txtFile.responseText;
          lines = txtFile.responseText.split("\n");
          console.log(lines[1]);
        }
      }
    }
    txtFile.send(null);


};
