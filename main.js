function setup(){
    canvas=createCanvas(900,600);
}
x=0;
y=0;
draw_circle="";
draw_rect="";
var SpeechRecognition=window.webkitSpeechRecognition;

function start(){
    document.getElementById("status").innerHTML="System is listening please speak.";
}
var recognition=new SpeechRecognition();
recognition.onresult=function(event){
    console.log(event);
var Content=event.results[0][0].transcript;

document.getElementById("status").innerHTML="the speech has been recognized as: "+ Content;
if(Content=="circle"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTMl="started drawing circle.";
    draw_circle="set";
}
if(Content=="rectangle"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTMl="started drawing Rectangle.";
    draw_rect="set";
}
}
function draw() {
    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn.";
        draw_circle = "";
    }

  if (draw_rect == "set") {
            rect(x, y,70,50);
            document.getElementById("status").innerHTML = "Rectangle is drawn.";
            draw_rect = "";
        }
    }