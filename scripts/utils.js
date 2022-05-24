const openPopup = (popup) => {
  popup.classList.add("popup_show");
};
const closePopup = (popup) => {
  popup.classList.remove("popup_show");
};
export { openPopup, closePopup };
