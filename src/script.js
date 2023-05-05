function startCountdown() {
    // Get the user input for the countdown date and time
    var countdownDate = document.getElementById("countdown-date").value;
    var countdownTime = document.getElementById("countdown-time").value;

    // Combine the date and time into a single string in the format "YYYY-MM-DDTHH:MM"
    var countdownDateTime = countdownDate + "T" + countdownTime;

    // Set the date we're counting down to
    var countDownDate = new Date(countdownDateTime).getTime();

    // Update the countdown every 1 second
    var countdownTimer = setInterval(function() {

      // Get the current date and time
      var now = new Date().getTime();

      // Calculate the distance between now and the countdown date
      var distance = countDownDate - now;

      // Calculate the days, hours, minutes, and seconds remaining
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown in the "countdown" div
      document.getElementById("countdown").innerHTML = "Countdown: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      var audio = new Audio('../res/audio/simple.wav');
      audio.play();

      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "Countdown has ended!";
        var audio = new Audio('../res/audio/simple_complete.mp3');
        audio.play();  
    
      }
    }, 1000);
  }