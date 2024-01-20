import Plugin from 'src/plugin-system/plugin.class'
import DomAccess from 'src/helper/dom-access.helper'

export default class BuyButtonColorChanger extends Plugin {

    init() {
        console.info("Plugin BuyButtonColorChanger loaded!")

        this.createElement()
        this.addEventListeners()
    }


    createElement() {
        console.info("Plugin BuyButtonColorChanger Created!")
        this._button = DomAccess.querySelector(document, '.btn-buy');
    }

    addEventListeners() {
        document.addEventListener('click', this.onClick.bind(this))
    }

    onClick() {
        console.info('click');
        this._button.classList.add("btn-cart-loading");
        this._button.textContent = "test";

        let tempButton = this._button; // Save the button reference

        setTimeout(() => {
            this._button.classList.remove("btn-cart-loading");
            this._button.textContent = "originalText";

            // Remove the temporary button reference
            this._button = null;
        }, 1000);
    }
}
/*         document.addEventListener("DOMContentLoaded", function () {
            this._button = DomAccess.querySelector(document, '.btn-buy');
            console.info('click');
            this._button.addEventListener("click", function () {
                this._button.classList.add("btn-cart-loading");
            });
        }); */



        /* 
               document.addEventListener("DOMContentLoaded", function () {
            this.buttons = document.querySelectorAll("button.btn-buy");
            this.buyButtonContainer = document.getElementById("buy-button-container");
            this.buyConfirmationText = buyButtonContainer.getAttribute('data-buy-confirmation-text');
        
        
        
        
        
            
            buttons.forEach(function (button) {
                button.addEventListener("click", function () {
                    let originalText = button.textContent;
        
                    this._button.classList.add('btn-cart-loading').then(() => {
                        button.textContent = buyConfirmationText;
                    });
        
                    setTimeout(function () {
                        button.classList.remove("btn-cart-loading");
                        button.textContent = originalText;
                    }, 1000);
                });
            });
        });  */



        /* this._button = DomAccess.querySelector(document, '.btn-buy')
        this._button.classList.add('btn-cart-loading') */
    
