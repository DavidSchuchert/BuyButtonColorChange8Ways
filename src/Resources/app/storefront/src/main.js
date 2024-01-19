console.info("TEEST");

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll("button.btn-buy");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            let originalColor = button.style.backgroundColor; // Save initial button color
            let originalText = button.textContent; // Save initial button text

            // Set new button variables
            button.classList.add("btn-cart-loading") // Use global variable
            button.textContent = "test"; // Use global variable

            // Reset button color and text
            setTimeout(function () {
                button.classList.remove("btn-cart-loading") // Use global variable
                button.textContent = originalText;
            }, 1000);
        });
    });
});