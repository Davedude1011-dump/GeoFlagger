function pageChange() {
  window.open("/FlagGame/flagGame.html", "_self");
}

window.onload = function () {
  setTimeout(() => {
    pageChange();
  }, 3000);
};
