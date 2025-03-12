var  no_of_drum_button=document.querySelectorAll(".drum").length;/*this line selects all elements with the class drum and counts how many there are*/

 for(var i=0;i<no_of_drum_button;i++)
 {
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){ /*adding eventlisteners to each drum button*/
       var button=this.innerHTML;/*this.innerHTML retrieves the inner HTML content of the clicked button (which is expected to be a key like w, a, s, etc.).*/
       makeSound(button);/*used to play the corresponding sound*/
       buttonAnimation(button);/*this is used to animate the button*/
   });
 }
 document.addEventListener("keydown",function(event)/*adding an keypress eventlistener for entire document*/
 {/*event.key-- gets the key that was pressed*/
    makeSound(event.key);/*plays the corresponding drum sound*/
    buttonAnimation(event.key);/*adds an animation effect*/
 });

 function makeSound(key)
 {
  switch(key)
       {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");/*creates an audio object with the specified sound file*/
         tom1.play();/*.play is used to play the sound and this apply for all below button*/
         break;
         case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;
         case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;
         case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;
         case "j":
          var crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;
         case "k":
          var kick_bass = new Audio("sounds/kick-bass.mp3");
         kick_bass.play();
         break;
         case "l":
          var snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;

       }
 }
 function buttonAnimation(currentkey)/*This function adds a visual animation to the button corresponding to currentkey*/
 {
   var activebutton=document.querySelector("."+currentkey);/*selects the button with the class matching the currentkey(example like.w)*/
   activebutton.classList.add("pressed");/*adds the class pressed to the button which likely applies some css styles to make it look pressed*/
   setTimeout(function()
   {
    activebutton.classList.remove("pressed");/*setTimeout is used to remove the pressed class after 100 milliseconds, creating a quick animation effect.*/
   },100);
 }
 




 /*var audio = new Audio("sounds/tom-1.mp3");
 audio.play();*/