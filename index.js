for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button.drum")[i].addEventListener("click", function() {
    var a_sound = this.innerHTML;
    makeSound(a_sound);
    animate(a_sound);
  })
}

document.addEventListener("keydown", function(event) {
      makeSound(event.key);
      animate(event.key);
    })

    function makeSound(key) {
      switch (key) {
        case "w":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "a":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;

        default:
          console.log(key);

      }
    }

function animate(key){
  var active_button=document.querySelector("."+key);
  active_button.classList.add("pressed");
  setTimeout(function(){
    active_button.classList.remove("pressed");
  },100)
}
