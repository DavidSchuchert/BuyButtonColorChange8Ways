
document.addEventListener("DOMContentLoaded", function () {
    // Select all button elements with the class 'btn-buy' and store them in 'buttons'.
    let buttons = document.querySelectorAll("button.btn-buy");

    // Find the element with the ID 'buy-button-container' and store it in 'buyButtonContainer'.
    let buyButtonContainer = document.getElementById("buy-button-container");

    // Get the 'data-buy-confirmation-text' attribute from 'buyButtonContainer' to use later.
    let buyConfirmationText = buyButtonContainer.getAttribute('data-buy-confirmation-text');

    // Iterate over each button stored in 'buttons'.
    buttons.forEach(function (button) {
        // Add a click event listener to each button.
        button.addEventListener("click", function () {
            // Save the current text of the button for later use.
            let originalText = button.textContent;

            // Add a class to the button to show a loading state and change its text to the confirmation message.
            button.classList.add("btn-cart-loading"); 
            button.textContent = buyConfirmationText;

            // After 1 second, reset the button to its original state by removing the loading class and restoring the original text.
            setTimeout(function () {
                button.classList.remove("btn-cart-loading");
                button.textContent = originalText;
            }, 1000);
        });
    });
});
