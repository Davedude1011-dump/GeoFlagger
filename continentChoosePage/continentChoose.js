document.body.onkeydown = function(e) {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
      window.open("/continentLoadingPage/continentLoading.html", "_self")
    }
}