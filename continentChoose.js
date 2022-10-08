
console.log("testing")

function getContinent(clicked_id) {
    console.log(clicked_id)
    sessionStorage.setItem("continentName", clicked_id);
}

function continentName(clicked_id) {
    console.log(clicked_id)
    document.querySelector(".continent-name").innerHTML = clicked_id
}