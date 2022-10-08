var imageSRC = ""
var answer = ""
var wrong1 = ""
var wrong2 = ""
var wrong3 = ""
var wrongButtonPos = []
var buttonNum = ""
var score = 0
var totalGames = 0
var muteAudio = false

function mute() {
    if (muteAudio === true) {
        muteAudio = false
        document.querySelector(".muteButton").style.fill = "black"
        document.querySelector(".muteButton").style.backgroundColor = "rgba(255, 255, 255, 0.3)"
        document.querySelector(".muteButton").style.borderColor = "rgba(0, 0, 0, 0.35)"

        document.querySelector(".muteButtonText").textContent = "mute"
    }
    else {
        muteAudio = true
        document.querySelector(".muteButton").style.fill = "white"
        document.querySelector(".muteButton").style.backgroundColor = "rgba(0, 0, 0, 0.3)"
        document.querySelector(".muteButton").style.borderColor = "rgba(255, 255, 255, 0.35)"

        document.querySelector(".muteButtonText").textContent = "unmute"
    }
}

function applyContinentName() {
    document.querySelector(".continentName").textContent = continentName[continentLength-1];
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
    imageSRC = Math.floor(Math.random() * (continentLength-2)) + 1
    if (imageSRC % 2 === 0) {
        imageChange()
    }
    else {
        randNumEven()
    }
}

function randWrong1() {
    wrong1 = Math.floor(Math.random() * (continentLength-2)) + 1
    if (wrong1 % 2 != 0) {
        document.querySelector(`.button${wrongButtonPos[0]}Text`).textContent = continentName[wrong1]
    }
    else {
        randWrong1()
    }
}
function randWrong2() {
    wrong2 = Math.floor(Math.random() * (continentLength-2)) + 1
    if (wrong2 % 2 != 0) {
        document.querySelector(`.button${wrongButtonPos[1]}Text`).textContent = continentName[wrong2]
    }
    else {
        randWrong2()
    }
}
function randWrong3() {
    wrong3 = Math.floor(Math.random() * (continentLength-2)) + 1
    if (wrong3 % 2 != 0) {
        document.querySelector(`.button${wrongButtonPos[2]}Text`).textContent = continentName[wrong3]
    }
    else {
        randWrong3()
    }
}

function imageChange(){
    document.querySelector(".flag").style.backgroundImage = `url("${continentName[imageSRC]}")`
    document.querySelector(`.button${buttonNum}Text`).textContent = continentName[imageSRC+1]
    console.log(continentName[imageSRC+1])
}

function gameStart() {
    document.querySelector(".score").textContent = score
    document.querySelector(".totalGoes").textContent = totalGames
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
        totalGames += 1
        if (muteAudio === false) {
            document.querySelector(".audioCorrect").play()
            document.querySelector(".audioCorrect").currentTime = 0;
        }
    }
    else {
        totalGames += 1
        if (muteAudio === false) {
            document.querySelector(".audioWrong").play()
            document.querySelector(".audioWrong").currentTime = 0;
        }
    }
    gameStart()
}
function button2Check() {
    var button2Txt = document.querySelector(".button2Text").textContent
    if (button2Txt === continentName[imageSRC+1]) {
        score += 1
        totalGames += 1
        if (muteAudio === false) {
            document.querySelector(".audioCorrect").play()
            document.querySelector(".audioCorrect").currentTime = 0;
        }
    }
    else {
        totalGames += 1
        if (muteAudio === false) {
            document.querySelector(".audioWrong").play()
            document.querySelector(".audioWrong").currentTime = 0;
        }
    }
    gameStart()
}
function button3Check() {
    var button3Txt = document.querySelector(".button3Text").textContent
    if (button3Txt === continentName[imageSRC+1]) {
        score += 1
        totalGames += 1
        if (muteAudio === false) {
            document.querySelector(".audioCorrect").play()
            document.querySelector(".audioCorrect").currentTime = 0;
        }
    }
    else {
        totalGames += 1
        if (muteAudio === false) {
            document.querySelector(".audioWrong").play()
            document.querySelector(".audioWrong").currentTime = 0;
        }
    }
    gameStart()
}
function button4Check() {
    var button4Txt = document.querySelector(".button4Text").textContent
    if (button4Txt === continentName[imageSRC+1]) {
        score += 1
        totalGames += 1
        if (muteAudio === false) {
            document.querySelector(".audioCorrect").play()
            document.querySelector(".audioCorrect").currentTime = 0;
        }
    }
    else {
        totalGames += 1
        if (muteAudio === false) {
            document.querySelector(".audioWrong").play()
            document.querySelector(".audioWrong").currentTime = 0;
        }
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
var south_America = [
    "https://flagicons.lipis.dev/flags/4x3/br.svg",
    "brazil",
    "https://flagicons.lipis.dev/flags/4x3/co.svg",
    "colombia",
    "https://flagicons.lipis.dev/flags/4x3/ar.svg",
    "argentina",
    "https://flagicons.lipis.dev/flags/4x3/pe.svg",
    "peru",
    "https://flagicons.lipis.dev/flags/4x3/cl.svg",
    "chile",
    "https://flagicons.lipis.dev/flags/4x3/ve.svg",
    "venezuela",
    "https://flagicons.lipis.dev/flags/4x3/ec.svg",
    "ecuador",
    "https://flagicons.lipis.dev/flags/4x3/bo.svg",
    "bolivia",
    "https://flagicons.lipis.dev/flags/4x3/gy.svg",
    "guyana",
    "https://flagicons.lipis.dev/flags/4x3/uy.svg",
    "uruguay",
    "https://flagicons.lipis.dev/flags/4x3/sr.svg",
    "suriname",
    "https://flagicons.lipis.dev/flags/4x3/py.svg",
    "paraguay",
    "https://flagicons.lipis.dev/flags/4x3/gf.svg",
    "french guiana",
    "https://flagicons.lipis.dev/flags/4x3/aw.svg",
    "aruba",
    "https://flagicons.lipis.dev/flags/4x3/cw.svg",
    "Curaçao",
    "https://flagicons.lipis.dev/flags/4x3/fk.svg",
    "falkland islands",
    "https://flagicons.lipis.dev/flags/4x3/tt.svg",
    "trinidad",
    "South America"
]
var europe = [
    "https://flagicons.lipis.dev/flags/4x3/de.svg",
    "germany",
    "https://flagicons.lipis.dev/flags/4x3/it.svg",
    "italy",
    "https://flagicons.lipis.dev/flags/4x3/fr.svg",
    "france",
    "https://flagicons.lipis.dev/flags/4x3/gb.svg",
    "untited kingdom",
    "https://flagicons.lipis.dev/flags/4x3/ua.svg",
    "ukrain",
    "https://flagicons.lipis.dev/flags/4x3/nl.svg",
    "netherlands",
    "https://flagicons.lipis.dev/flags/4x3/ch.svg",
    "switzerland",
    "https://flagicons.lipis.dev/flags/4x3/gr.svg",
    "greece",
    "https://flagicons.lipis.dev/flags/4x3/pl.svg",
    "poland",
    "https://flagicons.lipis.dev/flags/4x3/at.svg",
    "austria",
    "https://flagicons.lipis.dev/flags/4x3/se.svg",
    "sweden",
    "https://flagicons.lipis.dev/flags/4x3/be.svg",
    "belgium",
    "https://flagicons.lipis.dev/flags/4x3/no.svg",
    "norway",
    "https://flagicons.lipis.dev/flags/4x3/hr.svg",
    "croatia",
    "https://flagicons.lipis.dev/flags/4x3/dk.svg",
    "denmark",
    "https://flagicons.lipis.dev/flags/4x3/rs.svg",
    "serbia",
    "https://flagicons.lipis.dev/flags/4x3/ie.svg",
    "ireland",
    "https://flagicons.lipis.dev/flags/4x3/cz.svg",
    "czech republic",
    "https://flagicons.lipis.dev/flags/4x3/mt.svg",
    "malta",
    "https://flagicons.lipis.dev/flags/4x3/fi.svg",
    "finland",
    "https://flagicons.lipis.dev/flags/4x3/is.svg",
    "iceland",
    "https://flagicons.lipis.dev/flags/4x3/ro.svg",
    "romania",
    "https://flagicons.lipis.dev/flags/4x3/bg.svg",
    "bulgaria",
    "https://flagicons.lipis.dev/flags/4x3/hu.svg",
    "hungary",
    "https://flagicons.lipis.dev/flags/4x3/lu.svg",
    "luxembourg",
    "https://flagicons.lipis.dev/flags/4x3/al.svg",
    "albania",
    "https://flagicons.lipis.dev/flags/4x3/si.svg",
    "slovenia",
    "https://flagicons.lipis.dev/flags/4x3/cy.svg",
    "Cyprus",
    "https://flagicons.lipis.dev/flags/4x3/lt.svg",
    "lithuania",
    "https://flagicons.lipis.dev/flags/4x3/ee.svg",
    "estonia",
    "https://flagicons.lipis.dev/flags/4x3/mc.svg",
    "monaco",
    "https://flagicons.lipis.dev/flags/4x3/sk.svg",
    "slovakia",
    "https://flagicons.lipis.dev/flags/4x3/li.svg",
    "liechtenstein",
    "https://flagicons.lipis.dev/flags/4x3/md.svg",
    "moldova",
    "https://flagicons.lipis.dev/flags/4x3/me.svg",
    "montenegro",
    "https://flagicons.lipis.dev/flags/4x3/by.svg",
    "belarus",
    "https://flagicons.lipis.dev/flags/4x3/xk.svg",
    "kosovo",
    "https://flagicons.lipis.dev/flags/4x3/va.svg",
    "vatican city",
    "https://flagicons.lipis.dev/flags/4x3/ad.svg",
    "andorra",
    "https://flagicons.lipis.dev/flags/4x3/mk.svg",
    "north macedonia",
    "https://flagicons.lipis.dev/flags/4x3/ba.svg",
    "bosnia",
    "https://flagicons.lipis.dev/flags/4x3/lv.svg",
    "latvia",
    "https://flagicons.lipis.dev/flags/4x3/sm.svg",
    "san marino",
    "https://flagicons.lipis.dev/flags/4x3/im.svg",
    "isle of man",
    "https://flagicons.lipis.dev/flags/4x3/fo.svg",
    "faroe islands",
    "https://flagicons.lipis.dev/flags/4x3/sj.svg",
    "svalbard",
    "https://flagicons.lipis.dev/flags/4x3/gi.svg",
    "gibraltar",
    "https://flagicons.lipis.dev/flags/4x3/ax.svg",
    "aland islands",
    "https://flagicons.lipis.dev/flags/4x3/je.svg",
    "jersey",
    "Europe"
]
var africa = [
    "https://flagicons.lipis.dev/flags/4x3/za.svg",
    "south africa",
    "https://flagicons.lipis.dev/flags/4x3/ng.svg",
    "nigeria",
    "https://flagicons.lipis.dev/flags/4x3/ke.svg",
    "kenya",
    "https://flagicons.lipis.dev/flags/4x3/cg.svg",
    "republic of congo",
    "https://flagicons.lipis.dev/flags/4x3/gh.svg",
    "ghana",
    "https://flagicons.lipis.dev/flags/4x3/ma.svg",
    "morocco",
    "https://flagicons.lipis.dev/flags/4x3/sn.svg",
    "sanegal",
    "https://flagicons.lipis.dev/flags/4x3/tz.svg",
    "tanzania",
    "https://flagicons.lipis.dev/flags/4x3/ml.svg",
    "mali",
    "https://flagicons.lipis.dev/flags/4x3/et.svg",
    "ethiopia",
    "https://flagicons.lipis.dev/flags/4x3/ug.svg",
    "uganda",
    "https://flagicons.lipis.dev/flags/4x3/ao.svg",
    "angola",
    "https://flagicons.lipis.dev/flags/4x3/mg.svg",
    "madagascar",
    "https://flagicons.lipis.dev/flags/4x3/sd.svg",
    "sudan",
    "https://flagicons.lipis.dev/flags/4x3/zw.svg",
    "zimbabwe",
    "https://flagicons.lipis.dev/flags/4x3/cm.svg",
    "cameroon",
    "https://flagicons.lipis.dev/flags/4x3/rw.svg",
    "rwanda",
    "https://flagicons.lipis.dev/flags/4x3/so.svg",
    "somalia",
    "https://flagicons.lipis.dev/flags/4x3/ci.svg",
    "côte d'Ivoire",
    "https://flagicons.lipis.dev/flags/4x3/dz.svg",
    "algeria",
    "https://flagicons.lipis.dev/flags/4x3/tn.svg",
    "tunisia",
    "https://flagicons.lipis.dev/flags/4x3/bw.svg",
    "botswana",
    "https://flagicons.lipis.dev/flags/4x3/ne.svg",
    "niger",
    "https://flagicons.lipis.dev/flags/4x3/na.svg",
    "namibia",
    "https://flagicons.lipis.dev/flags/4x3/zm.svg",
    "zambia",
    "https://flagicons.lipis.dev/flags/4x3/lr.svg",
    "liberia",
    "https://flagicons.lipis.dev/flags/4x3/mz.svg",
    "mozambique",
    "https://flagicons.lipis.dev/flags/4x3/cf.svg",
    "african repulic",
    "https://flagicons.lipis.dev/flags/4x3/gn.svg",
    "guinea",
    "https://flagicons.lipis.dev/flags/4x3/tg.svg",
    "togo",
    "https://flagicons.lipis.dev/flags/4x3/ga.svg",
    "gabon",
    "https://flagicons.lipis.dev/flags/4x3/mu.svg",
    "mauritius",
    "https://flagicons.lipis.dev/flags/4x3/ly.svg",
    "libya",
    "https://flagicons.lipis.dev/flags/4x3/bf.svg",
    "burkina faso",
    "https://flagicons.lipis.dev/flags/4x3/mw.svg",
    "malawi",
    "https://flagicons.lipis.dev/flags/4x3/sz.svg",
    "eswatini",
    "https://flagicons.lipis.dev/flags/4x3/td.svg",
    "chad",
    "https://flagicons.lipis.dev/flags/4x3/sl.svg",
    "sierra leone",
    "https://flagicons.lipis.dev/flags/4x3/gm.svg",
    "gambia",
    "https://flagicons.lipis.dev/flags/4x3/bj.svg",
    "benin",
    "https://flagicons.lipis.dev/flags/4x3/eh.svg",
    "western sahara",
    "https://flagicons.lipis.dev/flags/4x3/dj.svg",
    "djibouti",
    "https://flagicons.lipis.dev/flags/4x3/mr.svg",
    "mauritania",
    "https://flagicons.lipis.dev/flags/4x3/ss.svg",
    "south sudan",
    "https://flagicons.lipis.dev/flags/4x3/cv.svg",
    "cabo verde",
    "https://flagicons.lipis.dev/flags/4x3/er.svg",
    "eritrea",
    "https://flagicons.lipis.dev/flags/4x3/gq.svg",
    "equatorial guinea",
    "https://flagicons.lipis.dev/flags/4x3/bi.svg",
    "burundi",
    "https://flagicons.lipis.dev/flags/4x3/ls.svg",
    "lesotho",
    "https://flagicons.lipis.dev/flags/4x3/sc.svg",
    "seychelles",
    "Africa"
]
var asia = [
    "https://flagicons.lipis.dev/flags/4x3/jp.svg",
    "japan",
    "https://flagicons.lipis.dev/flags/4x3/in.svg",
    "india",
    "https://flagicons.lipis.dev/flags/4x3/id.svg",
    "indonesia",
    "https://flagicons.lipis.dev/flags/4x3/cn.svg",
    "china",
    "https://flagicons.lipis.dev/flags/4x3/th.svg",
    "thailand",
    "https://flagicons.lipis.dev/flags/4x3/kr.svg",
    "south korea",
    "https://flagicons.lipis.dev/flags/4x3/ph.svg",
    "philippines",
    "https://flagicons.lipis.dev/flags/4x3/sg.svg",
    "singapore",
    "https://flagicons.lipis.dev/flags/4x3/vn.svg",
    "vietnam",
    "https://flagicons.lipis.dev/flags/4x3/hk.svg",
    "hong kong",
    "https://flagicons.lipis.dev/flags/4x3/my.svg",
    "malaysia",
    "https://flagicons.lipis.dev/flags/4x3/pk.svg",
    "pakistan",
    "https://flagicons.lipis.dev/flags/4x3/tw.svg",
    "taiwan",
    "https://flagicons.lipis.dev/flags/4x3/sa.svg",
    "saudi arabia",
    "https://flagicons.lipis.dev/flags/4x3/kh.svg",
    "cambodia",
    "https://flagicons.lipis.dev/flags/4x3/la.svg",
    "laos",
    "https://flagicons.lipis.dev/flags/4x3/mm.svg",
    "myanmar",
    "https://flagicons.lipis.dev/flags/4x3/lk.svg",
    "sri lanka",
    "https://flagicons.lipis.dev/flags/4x3/af.svg",
    "afghanistan",
    "https://flagicons.lipis.dev/flags/4x3/bd.svg",
    "bangladesh",
    "https://flagicons.lipis.dev/flags/4x3/ir.svg",
    "iran",
    "https://flagicons.lipis.dev/flags/4x3/il.svg",
    "israel",
    "https://flagicons.lipis.dev/flags/4x3/np.svg",
    "nepal",
    "https://flagicons.lipis.dev/flags/4x3/bn.svg",
    "brunei",
    "https://flagicons.lipis.dev/flags/4x3/mv.svg",
    "maldives",
    "https://flagicons.lipis.dev/flags/4x3/mn.svg",
    "mongolia",
    "https://flagicons.lipis.dev/flags/4x3/qa.svg",
    "qatar",
    "https://flagicons.lipis.dev/flags/4x3/mo.svg",
    "macau",
    "https://flagicons.lipis.dev/flags/4x3/uz.svg",
    "uzbekistan",
    "https://flagicons.lipis.dev/flags/4x3/iq.svg",
    "iraq",
    "https://flagicons.lipis.dev/flags/4x3/cx.svg",
    "christmas island",
    "https://flagicons.lipis.dev/flags/4x3/am.svg",
    "armenia",
    "https://flagicons.lipis.dev/flags/4x3/kp.svg",
    "north korea",
    "https://flagicons.lipis.dev/flags/4x3/lb.svg",
    "lebanon",
    "https://flagicons.lipis.dev/flags/4x3/ae.svg",
    "arab emirates",
    "https://flagicons.lipis.dev/flags/4x3/sy.svg",
    "syria",
    "https://flagicons.lipis.dev/flags/4x3/kg.svg",
    "kyrgyzstan",
    "https://flagicons.lipis.dev/flags/4x3/jo.svg",
    "jordan",
    "https://flagicons.lipis.dev/flags/4x3/ye.svg",
    "yemen",
    "https://flagicons.lipis.dev/flags/4x3/bt.svg",
    "bhutan",
    "https://flagicons.lipis.dev/flags/4x3/ps.svg",
    "palestine",
    "https://flagicons.lipis.dev/flags/4x3/io.svg",
    "british indian territory",
    "https://flagicons.lipis.dev/flags/4x3/kw.svg",
    "kuwait",
    "https://flagicons.lipis.dev/flags/4x3/bh.svg",
    "bahrain",
    "https://flagicons.lipis.dev/flags/4x3/cc.svg",
    "cocos islands",
    "https://flagicons.lipis.dev/flags/4x3/om.svg",
    "oman",
    "https://flagicons.lipis.dev/flags/4x3/tl.svg",
    "timor-leste",
    "https://flagicons.lipis.dev/flags/4x3/tm.svg",
    "turkmenistan",
    "https://flagicons.lipis.dev/flags/4x3/tj.svg",
    "tajikistan",
    "Asia"
]
var australasia = [
    "https://flagicons.lipis.dev/flags/4x3/au.svg",
    "australia",
    "https://flagicons.lipis.dev/flags/4x3/fj.svg",
    "fiji",
    "https://flagicons.lipis.dev/flags/4x3/gu.svg",
    "guam",
    "https://flagicons.lipis.dev/flags/4x3/nz.svg",
    "new zealand",
    "https://flagicons.lipis.dev/flags/4x3/pg.svg",
    "papua new guinea",
    "https://flagicons.lipis.dev/flags/4x3/ws.svg",
    "samoa",
    "https://flagicons.lipis.dev/flags/4x3/sb.svg",
    "solomon islands",
    "https://flagicons.lipis.dev/flags/4x3/to.svg",
    "tonga",
    "Astralasia"
]
var global = [
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
    "https://flagicons.lipis.dev/flags/4x3/br.svg",
    "brazil",
    "https://flagicons.lipis.dev/flags/4x3/co.svg",
    "colombia",
    "https://flagicons.lipis.dev/flags/4x3/ar.svg",
    "argentina",
    "https://flagicons.lipis.dev/flags/4x3/pe.svg",
    "peru",
    "https://flagicons.lipis.dev/flags/4x3/cl.svg",
    "chile",
    "https://flagicons.lipis.dev/flags/4x3/ve.svg",
    "venezuela",
    "https://flagicons.lipis.dev/flags/4x3/ec.svg",
    "ecuador",
    "https://flagicons.lipis.dev/flags/4x3/bo.svg",
    "bolivia",
    "https://flagicons.lipis.dev/flags/4x3/gy.svg",
    "guyana",
    "https://flagicons.lipis.dev/flags/4x3/uy.svg",
    "uruguay",
    "https://flagicons.lipis.dev/flags/4x3/sr.svg",
    "suriname",
    "https://flagicons.lipis.dev/flags/4x3/py.svg",
    "paraguay",
    "https://flagicons.lipis.dev/flags/4x3/gf.svg",
    "french guiana",
    "https://flagicons.lipis.dev/flags/4x3/aw.svg",
    "aruba",
    "https://flagicons.lipis.dev/flags/4x3/cw.svg",
    "Curaçao",
    "https://flagicons.lipis.dev/flags/4x3/fk.svg",
    "falkland islands",
    "https://flagicons.lipis.dev/flags/4x3/tt.svg",
    "trinidad",
    "https://flagicons.lipis.dev/flags/4x3/de.svg",
    "germany",
    "https://flagicons.lipis.dev/flags/4x3/it.svg",
    "italy",
    "https://flagicons.lipis.dev/flags/4x3/fr.svg",
    "france",
    "https://flagicons.lipis.dev/flags/4x3/gb.svg",
    "untited kingdom",
    "https://flagicons.lipis.dev/flags/4x3/ua.svg",
    "ukrain",
    "https://flagicons.lipis.dev/flags/4x3/nl.svg",
    "netherlands",
    "https://flagicons.lipis.dev/flags/4x3/ch.svg",
    "switzerland",
    "https://flagicons.lipis.dev/flags/4x3/gr.svg",
    "greece",
    "https://flagicons.lipis.dev/flags/4x3/pl.svg",
    "poland",
    "https://flagicons.lipis.dev/flags/4x3/at.svg",
    "austria",
    "https://flagicons.lipis.dev/flags/4x3/se.svg",
    "sweden",
    "https://flagicons.lipis.dev/flags/4x3/be.svg",
    "belgium",
    "https://flagicons.lipis.dev/flags/4x3/no.svg",
    "norway",
    "https://flagicons.lipis.dev/flags/4x3/hr.svg",
    "croatia",
    "https://flagicons.lipis.dev/flags/4x3/dk.svg",
    "denmark",
    "https://flagicons.lipis.dev/flags/4x3/rs.svg",
    "serbia",
    "https://flagicons.lipis.dev/flags/4x3/ie.svg",
    "ireland",
    "https://flagicons.lipis.dev/flags/4x3/cz.svg",
    "czech republic",
    "https://flagicons.lipis.dev/flags/4x3/mt.svg",
    "malta",
    "https://flagicons.lipis.dev/flags/4x3/fi.svg",
    "finland",
    "https://flagicons.lipis.dev/flags/4x3/is.svg",
    "iceland",
    "https://flagicons.lipis.dev/flags/4x3/ro.svg",
    "romania",
    "https://flagicons.lipis.dev/flags/4x3/bg.svg",
    "bulgaria",
    "https://flagicons.lipis.dev/flags/4x3/hu.svg",
    "hungary",
    "https://flagicons.lipis.dev/flags/4x3/lu.svg",
    "luxembourg",
    "https://flagicons.lipis.dev/flags/4x3/al.svg",
    "albania",
    "https://flagicons.lipis.dev/flags/4x3/si.svg",
    "slovenia",
    "https://flagicons.lipis.dev/flags/4x3/cy.svg",
    "Cyprus",
    "https://flagicons.lipis.dev/flags/4x3/lt.svg",
    "lithuania",
    "https://flagicons.lipis.dev/flags/4x3/ee.svg",
    "estonia",
    "https://flagicons.lipis.dev/flags/4x3/mc.svg",
    "monaco",
    "https://flagicons.lipis.dev/flags/4x3/sk.svg",
    "slovakia",
    "https://flagicons.lipis.dev/flags/4x3/li.svg",
    "liechtenstein",
    "https://flagicons.lipis.dev/flags/4x3/md.svg",
    "moldova",
    "https://flagicons.lipis.dev/flags/4x3/me.svg",
    "montenegro",
    "https://flagicons.lipis.dev/flags/4x3/by.svg",
    "belarus",
    "https://flagicons.lipis.dev/flags/4x3/xk.svg",
    "kosovo",
    "https://flagicons.lipis.dev/flags/4x3/va.svg",
    "vatican city",
    "https://flagicons.lipis.dev/flags/4x3/ad.svg",
    "andorra",
    "https://flagicons.lipis.dev/flags/4x3/mk.svg",
    "north macedonia",
    "https://flagicons.lipis.dev/flags/4x3/ba.svg",
    "bosnia",
    "https://flagicons.lipis.dev/flags/4x3/lv.svg",
    "latvia",
    "https://flagicons.lipis.dev/flags/4x3/sm.svg",
    "san marino",
    "https://flagicons.lipis.dev/flags/4x3/im.svg",
    "isle of man",
    "https://flagicons.lipis.dev/flags/4x3/fo.svg",
    "faroe islands",
    "https://flagicons.lipis.dev/flags/4x3/sj.svg",
    "svalbard",
    "https://flagicons.lipis.dev/flags/4x3/gi.svg",
    "gibraltar",
    "https://flagicons.lipis.dev/flags/4x3/ax.svg",
    "aland islands",
    "https://flagicons.lipis.dev/flags/4x3/je.svg",
    "jersey",
    "https://flagicons.lipis.dev/flags/4x3/za.svg",
    "south africa",
    "https://flagicons.lipis.dev/flags/4x3/ng.svg",
    "nigeria",
    "https://flagicons.lipis.dev/flags/4x3/ke.svg",
    "kenya",
    "https://flagicons.lipis.dev/flags/4x3/cg.svg",
    "republic of congo",
    "https://flagicons.lipis.dev/flags/4x3/gh.svg",
    "ghana",
    "https://flagicons.lipis.dev/flags/4x3/ma.svg",
    "morocco",
    "https://flagicons.lipis.dev/flags/4x3/sn.svg",
    "sanegal",
    "https://flagicons.lipis.dev/flags/4x3/tz.svg",
    "tanzania",
    "https://flagicons.lipis.dev/flags/4x3/ml.svg",
    "mali",
    "https://flagicons.lipis.dev/flags/4x3/et.svg",
    "ethiopia",
    "https://flagicons.lipis.dev/flags/4x3/ug.svg",
    "uganda",
    "https://flagicons.lipis.dev/flags/4x3/ao.svg",
    "angola",
    "https://flagicons.lipis.dev/flags/4x3/mg.svg",
    "madagascar",
    "https://flagicons.lipis.dev/flags/4x3/sd.svg",
    "sudan",
    "https://flagicons.lipis.dev/flags/4x3/zw.svg",
    "zimbabwe",
    "https://flagicons.lipis.dev/flags/4x3/cm.svg",
    "cameroon",
    "https://flagicons.lipis.dev/flags/4x3/rw.svg",
    "rwanda",
    "https://flagicons.lipis.dev/flags/4x3/so.svg",
    "somalia",
    "https://flagicons.lipis.dev/flags/4x3/ci.svg",
    "côte d'Ivoire",
    "https://flagicons.lipis.dev/flags/4x3/dz.svg",
    "algeria",
    "https://flagicons.lipis.dev/flags/4x3/tn.svg",
    "tunisia",
    "https://flagicons.lipis.dev/flags/4x3/bw.svg",
    "botswana",
    "https://flagicons.lipis.dev/flags/4x3/ne.svg",
    "niger",
    "https://flagicons.lipis.dev/flags/4x3/na.svg",
    "namibia",
    "https://flagicons.lipis.dev/flags/4x3/zm.svg",
    "zambia",
    "https://flagicons.lipis.dev/flags/4x3/lr.svg",
    "liberia",
    "https://flagicons.lipis.dev/flags/4x3/mz.svg",
    "mozambique",
    "https://flagicons.lipis.dev/flags/4x3/cf.svg",
    "african repulic",
    "https://flagicons.lipis.dev/flags/4x3/gn.svg",
    "guinea",
    "https://flagicons.lipis.dev/flags/4x3/tg.svg",
    "togo",
    "https://flagicons.lipis.dev/flags/4x3/ga.svg",
    "gabon",
    "https://flagicons.lipis.dev/flags/4x3/mu.svg",
    "mauritius",
    "https://flagicons.lipis.dev/flags/4x3/ly.svg",
    "libya",
    "https://flagicons.lipis.dev/flags/4x3/bf.svg",
    "burkina faso",
    "https://flagicons.lipis.dev/flags/4x3/mw.svg",
    "malawi",
    "https://flagicons.lipis.dev/flags/4x3/sz.svg",
    "eswatini",
    "https://flagicons.lipis.dev/flags/4x3/td.svg",
    "chad",
    "https://flagicons.lipis.dev/flags/4x3/sl.svg",
    "sierra leone",
    "https://flagicons.lipis.dev/flags/4x3/gm.svg",
    "gambia",
    "https://flagicons.lipis.dev/flags/4x3/bj.svg",
    "benin",
    "https://flagicons.lipis.dev/flags/4x3/eh.svg",
    "western sahara",
    "https://flagicons.lipis.dev/flags/4x3/dj.svg",
    "djibouti",
    "https://flagicons.lipis.dev/flags/4x3/mr.svg",
    "mauritania",
    "https://flagicons.lipis.dev/flags/4x3/ss.svg",
    "south sudan",
    "https://flagicons.lipis.dev/flags/4x3/cv.svg",
    "cabo verde",
    "https://flagicons.lipis.dev/flags/4x3/er.svg",
    "eritrea",
    "https://flagicons.lipis.dev/flags/4x3/gq.svg",
    "equatorial guinea",
    "https://flagicons.lipis.dev/flags/4x3/bi.svg",
    "burundi",
    "https://flagicons.lipis.dev/flags/4x3/ls.svg",
    "lesotho",
    "https://flagicons.lipis.dev/flags/4x3/sc.svg",
    "seychelles",
    "https://flagicons.lipis.dev/flags/4x3/jp.svg",
    "japan",
    "https://flagicons.lipis.dev/flags/4x3/in.svg",
    "india",
    "https://flagicons.lipis.dev/flags/4x3/id.svg",
    "indonesia",
    "https://flagicons.lipis.dev/flags/4x3/cn.svg",
    "china",
    "https://flagicons.lipis.dev/flags/4x3/th.svg",
    "thailand",
    "https://flagicons.lipis.dev/flags/4x3/kr.svg",
    "south korea",
    "https://flagicons.lipis.dev/flags/4x3/ph.svg",
    "philippines",
    "https://flagicons.lipis.dev/flags/4x3/sg.svg",
    "singapore",
    "https://flagicons.lipis.dev/flags/4x3/vn.svg",
    "vietnam",
    "https://flagicons.lipis.dev/flags/4x3/hk.svg",
    "hong kong",
    "https://flagicons.lipis.dev/flags/4x3/my.svg",
    "malaysia",
    "https://flagicons.lipis.dev/flags/4x3/pk.svg",
    "pakistan",
    "https://flagicons.lipis.dev/flags/4x3/tw.svg",
    "taiwan",
    "https://flagicons.lipis.dev/flags/4x3/sa.svg",
    "saudi arabia",
    "https://flagicons.lipis.dev/flags/4x3/kh.svg",
    "cambodia",
    "https://flagicons.lipis.dev/flags/4x3/la.svg",
    "laos",
    "https://flagicons.lipis.dev/flags/4x3/mm.svg",
    "myanmar",
    "https://flagicons.lipis.dev/flags/4x3/lk.svg",
    "sri lanka",
    "https://flagicons.lipis.dev/flags/4x3/af.svg",
    "afghanistan",
    "https://flagicons.lipis.dev/flags/4x3/bd.svg",
    "bangladesh",
    "https://flagicons.lipis.dev/flags/4x3/ir.svg",
    "iran",
    "https://flagicons.lipis.dev/flags/4x3/il.svg",
    "israel",
    "https://flagicons.lipis.dev/flags/4x3/np.svg",
    "nepal",
    "https://flagicons.lipis.dev/flags/4x3/bn.svg",
    "brunei",
    "https://flagicons.lipis.dev/flags/4x3/mv.svg",
    "maldives",
    "https://flagicons.lipis.dev/flags/4x3/mn.svg",
    "mongolia",
    "https://flagicons.lipis.dev/flags/4x3/qa.svg",
    "qatar",
    "https://flagicons.lipis.dev/flags/4x3/mo.svg",
    "macau",
    "https://flagicons.lipis.dev/flags/4x3/uz.svg",
    "uzbekistan",
    "https://flagicons.lipis.dev/flags/4x3/iq.svg",
    "iraq",
    "https://flagicons.lipis.dev/flags/4x3/cx.svg",
    "christmas island",
    "https://flagicons.lipis.dev/flags/4x3/am.svg",
    "armenia",
    "https://flagicons.lipis.dev/flags/4x3/kp.svg",
    "north korea",
    "https://flagicons.lipis.dev/flags/4x3/lb.svg",
    "lebanon",
    "https://flagicons.lipis.dev/flags/4x3/ae.svg",
    "arab emirates",
    "https://flagicons.lipis.dev/flags/4x3/sy.svg",
    "syria",
    "https://flagicons.lipis.dev/flags/4x3/kg.svg",
    "kyrgyzstan",
    "https://flagicons.lipis.dev/flags/4x3/jo.svg",
    "jordan",
    "https://flagicons.lipis.dev/flags/4x3/ye.svg",
    "yemen",
    "https://flagicons.lipis.dev/flags/4x3/bt.svg",
    "bhutan",
    "https://flagicons.lipis.dev/flags/4x3/ps.svg",
    "palestine",
    "https://flagicons.lipis.dev/flags/4x3/io.svg",
    "british indian territory",
    "https://flagicons.lipis.dev/flags/4x3/kw.svg",
    "kuwait",
    "https://flagicons.lipis.dev/flags/4x3/bh.svg",
    "bahrain",
    "https://flagicons.lipis.dev/flags/4x3/cc.svg",
    "cocos islands",
    "https://flagicons.lipis.dev/flags/4x3/om.svg",
    "oman",
    "https://flagicons.lipis.dev/flags/4x3/tl.svg",
    "timor-leste",
    "https://flagicons.lipis.dev/flags/4x3/tm.svg",
    "turkmenistan",
    "https://flagicons.lipis.dev/flags/4x3/tj.svg",
    "tajikistan",
    "https://flagicons.lipis.dev/flags/4x3/au.svg",
    "australia",
    "https://flagicons.lipis.dev/flags/4x3/fj.svg",
    "fiji",
    "https://flagicons.lipis.dev/flags/4x3/gu.svg",
    "guam",
    "https://flagicons.lipis.dev/flags/4x3/nz.svg",
    "new zealand",
    "https://flagicons.lipis.dev/flags/4x3/pg.svg",
    "papua new guinea",
    "https://flagicons.lipis.dev/flags/4x3/ws.svg",
    "samoa",
    "https://flagicons.lipis.dev/flags/4x3/sb.svg",
    "solomon islands",
    "https://flagicons.lipis.dev/flags/4x3/to.svg",
    "tonga",
    "global"
]


// :[> <]
var continentName = eval(sessionStorage.getItem("continentName"));
var continentLength = continentName.length
console.log(continentName)