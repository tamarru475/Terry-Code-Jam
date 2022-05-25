function togglePopup(popupModel) {
  if (popupModel.classList.contains("popup_fadein")) {
    popupModel.classList.add("popup_fadeout");
    popupModel.classList.remove("popup_fadein");
  } else {
    popupModel.classList.add("popup_fadein");
  }
}
export default togglePopup;
