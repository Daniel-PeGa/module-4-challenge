var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var timeLeft = 9;


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }
  
  // Function to create and append colorsplosion image
  function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);
  
  }
  
  setTime();
  