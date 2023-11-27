document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.getElementById('progress-bar');
    var dateDisplay = document.getElementById('date-display');
    var percentageDisplay = document.getElementById('percentage'); // New line

    // Logg test
    console.log("im loaded");

    // Get the current date
    var currentDate = new Date();

    // Get the current day in December
    var currentDayInDecember = currentDate.getDate();

    // Calculate progress percentage
    var progressPercentage = (currentDayInDecember / 24) * 100;

    // Limit progress to 100%
    if (progressPercentage > 100) {
        progressPercentage = 100;
    }

    progressBar.style.width = progressPercentage + '%';

    // Display the date
    dateDisplay.textContent = currentDate.toDateString();

    // Update the progress percentage in the HTML
    percentageDisplay.textContent = progressPercentage.toFixed(2); // Update the displayed percentage
});