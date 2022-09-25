//addlistener is used to add a click two button.
function choose(key){
  // var buttonInnerHTML = this.innerHTML;
  switch(key){
    case "w":
       var audio = new Audio('sounds/crash.mp3');
       audio.play();
       break;
    case "a":
          var audio = new Audio('sounds/kick-bass.mp3');
          audio.play();
          break;
    case "s":
          var audio = new Audio('sounds/snare.mp3');
          audio.play();
          break;
    case "d":
             var audio = new Audio('sounds/tom-1.mp3');
             audio.play();
             break;
    case "j":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
    case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
    case "l":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

   default:
}}
//addevent listener button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var buttonInnerHTML = this.innerHTML;
    choose(buttonInnerHTML);
    animations(buttonInnerHTML);

  });
}

//addevent listener keyboard pressed
document.addEventListener("keypress",function(event)
{
  choose(event.key);
  animations(event.key);
});

//add animations-:
function animations(lettersclicked){
var activekey =  document.querySelector("."+lettersclicked);
activekey.classList.add("pressed");
setTimeout(function(){
  activekey.classList.remove("pressed");
},100);
}
