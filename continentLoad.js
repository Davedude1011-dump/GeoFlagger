function pageChange() {
  window.open("flagGame.html", "_self");
}

window.onload = function () {
  setTimeout(() => {
    pageChange();
  }, 3000);
};
