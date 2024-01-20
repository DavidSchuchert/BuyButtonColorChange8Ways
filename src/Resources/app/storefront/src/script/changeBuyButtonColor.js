import Plugin from 'src/plugin-system/plugin.class'
import DomAccess from 'src/helper/dom-access.helper'

export default class BuyButtonColorChanger extends Plugin {
  init() {
    console.info('Plugin BuyButtonColorChanger loaded!');

    this.createElement();
    this.addEventListeners();
  }

  createElement() {
    console.info('Plugin BuyButtonColorChanger created!');
    this._button = DomAccess.querySelector(document, '.btn-buy');
    this.originalButtonText = this._button.textContent; // Store the button text before clearing it

  }

  addEventListeners() {
    this._button.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {


    let buyButtonContainer = document.getElementById('buy-button-container');
    let buyConfirmationText = buyButtonContainer.getAttribute('data-buy-confirmation-text');

    this._button.classList.add('btn-cart-loading'); // Add the loading class
    this._button.textContent = buyConfirmationText; // Set the button text to the confirmation text

    // Store the button reference as a property of the `this` object
    this.buttonRef = this._button;

    setTimeout(() => {
      // Restore the button text and remove the loading class
      this.buttonRef.classList.remove('btn-cart-loading');
      this.buttonRef.textContent = this.originalButtonText;

    }, 1000);
  }
}
