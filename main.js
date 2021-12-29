var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() 
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event){

    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;
    
    if(content == "take my selfie")
    {
      console.log("taking selfie");
       speak();
    }
}

function speak(){

    var synth = window.speechSynthesis;
    var speak_data = " Taking Your Selfie in 5 4 3 2 1 ";
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    jpeg_quality:100
});


function take_snapshot()
{
  Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
  });
}

function save()
{
link = document.getElementById("link");
image = document.getElementById("selfie_image").src ;
link.href = image;
link.click();
}