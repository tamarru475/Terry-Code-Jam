/// Imports ///

import togglePopup from "./utils.js";

//// Popup Modles ///
const navPopup = document.querySelector(".popup__nav");

/// Buttons ///

const menuButton = document.querySelector(".nav__menu-button");

/// Event Listeners ///

menuButton.addEventListener("click", togglePopup(navPopup));
