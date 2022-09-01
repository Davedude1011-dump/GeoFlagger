var imageSRC = ""
var answer = ""
var wrong1 = ""
var wrong2 = ""
var wrong3 = ""
var wrongButtonPos = []
var buttonNum = ""
var score = 0

function applyContinentName() {
    document.querySelector(".continentName").textContent = continentName[50];
}

function rightAnswerButton() {
    buttonNum = Math.floor(Math.random() * 4) + 1
    wrongButtonPos = [
        "1",
        "2",
        "3",
        "4"
    ]
    wrongButtonPos.splice(buttonNum-1, 1)
}

function randNumEven() {
    imageSRC = Math.floor(Math.random() * 49) + 1
    if (imageSRC % 2 === 0) {
        imageChange()
    }
    else {
        randNumEven()
    }
}

function randWrong1() {
    wrong1 = Math.floor(Math.random() * 49) + 1
    if (wrong1 % 2 != 0) {
        document.querySelector(`.button${wrongButtonPos[0]}Text`).textContent = continentName[wrong1]
    }
    else {
        randWrong1()
    }
}
function randWrong2() {
    wrong2 = Math.floor(Math.random() * 49) + 1
    if (wrong2 % 2 != 0) {
        document.querySelector(`.button${wrongButtonPos[1]}Text`).textContent = continentName[wrong2]
    }
    else {
        randWrong2()
    }
}
function randWrong3() {
    wrong3 = Math.floor(Math.random() * 49) + 1
    if (wrong3 % 2 != 0) {
        document.querySelector(`.button${wrongButtonPos[2]}Text`).textContent = continentName[wrong3]
    }
    else {
        randWrong3()
    }
}

function imageChange(){
    document.querySelector(".flag").style.backgroundImage = `url("${continentName[imageSRC-2]}")`
    document.querySelector(`.button${buttonNum}Text`).textContent = continentName[imageSRC+1]
    console.log(continentName[imageSRC+1])
}

function gameStart() {
    document.querySelector(".scoreTracker").textContent = score
    rightAnswerButton()
    randNumEven()
    randWrong1()
    randWrong2()
    randWrong3()
}

function button1Check() {
    var button1Txt = document.querySelector(".button1Text").textContent
    if (button1Txt === continentName[imageSRC+1]) {
        score += 1
    }
    gameStart()
}
function button2Check() {
    var button2Txt = document.querySelector(".button2Text").textContent
    if (button2Txt === continentName[imageSRC+1]) {
        score += 1
    }
    gameStart()
}
function button3Check() {
    var button3Txt = document.querySelector(".button3Text").textContent
    if (button3Txt === continentName[imageSRC+1]) {
        score += 1
    }
    gameStart()
}
function button4Check() {
    var button4Txt = document.querySelector(".button4Text").textContent
    if (button4Txt === continentName[imageSRC+1]) {
        score += 1
    }
    gameStart()
}
  
window.onload = function () {
    applyContinentName();
    gameStart()
};


var north_America = [
    "https://flagicons.lipis.dev/flags/4x3/us.svg",
    "united states",
    "https://flagicons.lipis.dev/flags/4x3/ca.svg",
    "canada",
    "https://flagicons.lipis.dev/flags/4x3/mx.svg",
    "mexico",
    "https://flagicons.lipis.dev/flags/4x3/gl.svg",
    "greenland",
    "https://flagicons.lipis.dev/flags/4x3/jm.svg",
    "jamaica",
    "https://flagicons.lipis.dev/flags/4x3/cu.svg",
    "cuba",
    "https://flagicons.lipis.dev/flags/4x3/pa.svg",
    "panama",
    "https://flagicons.lipis.dev/flags/4x3/gt.svg",
    "guatemala",
    "https://flagicons.lipis.dev/flags/4x3/pr.svg",
    "puerto rico",
    "https://flagicons.lipis.dev/flags/4x3/ht.svg",
    "haiti",
    "https://flagicons.lipis.dev/flags/4x3/do.svg",
    "dominican republic",
    "https://flagicons.lipis.dev/flags/4x3/cr.svg",
    "costa rica",
    "https://flagicons.lipis.dev/flags/4x3/hn.svg",
    "honduras",
    "https://flagicons.lipis.dev/flags/4x3/bs.svg",
    "the bahamas",
    "https://flagicons.lipis.dev/flags/4x3/bz.svg",
    "belize",
    "https://flagicons.lipis.dev/flags/4x3/bb.svg",
    "barbados",
    "https://flagicons.lipis.dev/flags/4x3/ag.svg",
    "antigua",
    "https://flagicons.lipis.dev/flags/4x3/ai.svg",
    "anguilla",
    "https://flagicons.lipis.dev/flags/4x3/ms.svg",
    "montserrat",
    "https://flagicons.lipis.dev/flags/4x3/ni.svg",
    "nicaragua",
    "https://flagicons.lipis.dev/flags/4x3/gd.svg",
    "grenada",
    "https://flagicons.lipis.dev/flags/4x3/mq.svg",
    "martinique",
    "https://flagicons.lipis.dev/flags/4x3/sv.svg",
    "el salvador",
    "https://flagicons.lipis.dev/flags/4x3/ky.svg",
    "cayman islands",
    "https://flagicons.lipis.dev/flags/4x3/dm.svg",
    "dominica",
    "North America"
]



// :[> <]
var continentName = north_America