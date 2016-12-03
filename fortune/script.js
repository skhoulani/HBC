function revealFortune() {


console.log("hi");


};

function handleFileSelect(evt)
{

    var files = this.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++)
    {

        var reader = new FileReader();
        reader.onload = function(event)
        {
            // NOTE: event.target point to FileReader
            var contents = event.target.result;
            var lines = contents.split('\n');
            //////
            document.getElementById('container').innerHTML=contents;
        };

        reader.readAsText(f);
    }
}
