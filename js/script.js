$(document).ready(function() {
    $('.menu-icon').click(function() {
        $('nav').toggleClass("nav-expanded");
        return false;
    });
});

function changeText(text){
            
    var display = document.getElementById('text-display');
    display.innerHTML = "";
    display.innerHTML = text;
  }
  
  function defaultText(){
            
    var display = document.getElementById('text-display');
    display.innerHTML = "";
    display.innerHTML = "15 Quotes From The Office That Will Stick With Us Forever";
  }
      
  function PlaySound(soundobj) {
      var thissound=document.getElementById(soundobj);
      thissound.play();
  }

  function StopSound(soundobj) {
      var thissound=document.getElementById(soundobj);
      thissound.pause();
      thissound.currentTime = 0;
  }

