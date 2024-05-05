const question = document.getElementById('question');
const submitButton = document.getElementById('submit');
    

question.addEventListener('input', function() {
    if (this.value.trim().length === 0) {
        submitButton.classList.add('hidden');

    } else {
        submitButton.classList.remove('hidden');
        bottom_cont.classList.remove("hidden");
    }
});


    // Get the div element where the number will be displayed
    const numberDisplay = document.getElementById('numberDisplay');

    // Function to update the number every second
    function updateNumber() {
        // Generate a random number between -20 and 20 (inclusive)
        const randomNumber = Math.floor(Math.random() * 41) - 20;
        
        // Get the current number displayed and parse it as an integer
        let currentNumber = parseInt(numberDisplay.innerText);

        // Add the random number to the current number
        let newNumber = currentNumber + randomNumber;

        // Ensure the new number stays within the range of 180 to 220
        if (newNumber < 180) {
            newNumber = 180;
        } else if (newNumber > 520) {
            newNumber = 520;
        }

        // Update the number displayed in the div
        numberDisplay.innerText = newNumber;

        // Call this function again after 1 second
        setTimeout(updateNumber, 1000);
    }

    // Start the number update function
    updateNumber();

