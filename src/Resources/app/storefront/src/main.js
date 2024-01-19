console.info("TEEST")

document.addEventListener("DOMContentLoaded", function() {
    //select buy button
    let buttons = document.querySelectorAll("button.btn-buy");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Set new button color
            let originalColor = button.style.backgroundColor;
            button.style.backgroundColor = "red"; // TestColor

            //reset button color 
            setTimeout(function() {
                button.style.backgroundColor = originalColor;
            }, 1000);
        });
    });
});