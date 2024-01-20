import Plugin from 'src/plugin-system/plugin.class'
import DomAccess from 'src/helper/dom-access.helper'

export default class BuyButtonColorChanger extends Plugin {
    //start the initialisition process
    init() {
        this.createElement();
        this.addEventListeners();
    }
    
    //select the button and set his text as variable
    createElement() {
        this._button = DomAccess.querySelector(document, '.btn-buy');
        this.originalButtonText = this._button.textContent; // Store the button text before clearing it

    }

    //start the eventlistener
    addEventListeners() {
        this._button.addEventListener('click', this.onClick.bind(this));
    }

    //define what happens after the click
    onClick() {
        let buyButtonContainer = document.getElementById('buy-button-container');
        this.buyConfirmationText = buyButtonContainer.getAttribute('data-buy-confirmation-text');

        this.changeButtonAppearance();

        setTimeout(() => {
            this.resetButton();

        }, 1000);
    }

    //Change the color and text of the button
    changeButtonAppearance() {
        this._button.classList.add('btn-cart-loading');
        this._button.textContent = this.buyConfirmationText;

    }
    // Restore the button text and remove the loading class
    resetButton() {
        this._button.classList.remove('btn-cart-loading');
        this._button.textContent = this.originalButtonText;

    }
}
