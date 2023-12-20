document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("countdown-timer");
  
    function updateCountdown() {
      const now = new Date();
      
      // Set the target date to December 26th at 9:00 AM IST
      const targetDate = new Date(now.getFullYear(), 11, 26, 9, 0, 0);
      
      // Convert time difference to days, hours, minutes, and seconds
      const timeDifference = targetDate - now;
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    // Update countdown every second
    setInterval(updateCountdown, 1000);
  
    // Initial call to set the countdown
    updateCountdown();
  });
  