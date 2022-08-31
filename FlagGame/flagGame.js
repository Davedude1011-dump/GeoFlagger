var continentName = "North America"
var imageSRC = ""
var answer = ""
var wrong1 = ""
var wrong2 = ""
var wrong3 = ""
var wrongButtonPos = []
var buttonNum = ""
var score = 0

function applyContinentName() {
    document.querySelector(".continentName").textContent = continentName;
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
        document.querySelector(`.button${wrongButtonPos[0]}Text`).textContent = northAmericaFlags[wrong1]
    }
    else {
        randWrong1()
    }
}
function randWrong2() {
    wrong2 = Math.floor(Math.random() * 49) + 1
    if (wrong2 % 2 != 0) {
        document.querySelector(`.button${wrongButtonPos[1]}Text`).textContent = northAmericaFlags[wrong2]
    }
    else {
        randWrong2()
    }
}
function randWrong3() {
    wrong3 = Math.floor(Math.random() * 49) + 1
    if (wrong3 % 2 != 0) {
        document.querySelector(`.button${wrongButtonPos[2]}Text`).textContent = northAmericaFlags[wrong3]
    }
    else {
        randWrong3()
    }
}

function imageChange(){
    document.querySelector(".flag").style.backgroundImage = `url("${northAmericaFlags[imageSRC]}")`
    document.querySelector(`.button${buttonNum}Text`).textContent = northAmericaFlags[imageSRC+1]
    console.log(northAmericaFlags[imageSRC+1])
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
    if (button1Txt === northAmericaFlags[imageSRC+1]) {
        score += 1
    }
    gameStart()
}
function button2Check() {
    var button2Txt = document.querySelector(".button2Text").textContent
    if (button2Txt === northAmericaFlags[imageSRC+1]) {
        score += 1
    }
    gameStart()
}
function button3Check() {
    var button3Txt = document.querySelector(".button3Text").textContent
    if (button3Txt === northAmericaFlags[imageSRC+1]) {
        score += 1
    }
    gameStart()
}
function button4Check() {
    var button4Txt = document.querySelector(".button4Text").textContent
    if (button4Txt === northAmericaFlags[imageSRC+1]) {
        score += 1
    }
    gameStart()
}
  
window.onload = function () {
    applyContinentName();
    gameStart()
};


var northAmericaFlags = [
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA/CAMAAAAc5/w0AAAAmVBMVEX///+yIjQ8O26xHDDpzc+vCSXOiI6tABzw3d67SlWuAB7WnaKyJDWyHzKwESg4N2wxMGh/fptJSHa8HytnZ4pNTHj4+PlCQXLp6e1TUnwDAFgmPnOnprmrq7yhoLRzc5IhIGDc3OPHx9InJmORkahgX4WGhqATEVsbGV7S0tu3tsXAv8wkOG/ETFIUHmHy1dW4ABEeL2q6Cx4TgdkpAAACfUlEQVRYhe1Za4/aMBCk7vu5G5PYSTlILhCOQB/X/v8f19049K5gcWdpJCTKCGnwfMgqTnbGdiYmDbPpCwwmxpCxpNck7wNbEzimAwtTfjPP5cqUz/d8EzimIwsXzhV64cq5Snk/juqz6UsMZKrNYk6GyPjFwivTPHBU//b9PQZamNlwnfPAeR243vO/uvk6QWF4VylzLqMHZmU+1tGFyTT9baPT2dz2jb7T3Pcc06GFyVbsvbFcVWyN91xZGQsf64QsTFnbhuls23rk7IAf9B8/X2Egd7x0bqkTzs6x8n4c1Wf3HzCQwjZbG+0bm2VWu8Yo6xOI6FDLlGtTsVoV9DRjvVpL584FWzzNUvj3awzCHRtud4NL0a7lwbW2u7i+/AiCFOZqdKeuG12qChzTke20Lsu1uoWyesfIcR1pIHdluRnapSyH9tmU5Z1yVEcWtlXnycqvEmvy8uuUdXysY71a+mQI+6fZmF9vQBjbSULe6h8rfLAYeKxrO33BYGwnGsNeQn9oH7tY2JgONRAJfXoc/rQP/5iOXHMdhP1pnt2/xUDTaQx5Ogj/qL55B4IU9tI73BXs5S8XHWsnDeEf0fFrrr4P03ma4Ys9cSfXKDcuuBSXJcd07JqLZIuS1SH860y2LBL+tYwjOrRwtVpV6k7PYWmnTxjo3mniOr2rzv3lEP4xfTb9jIFO9XY3PE+/3frh+e62YXcY06FLH+bwhj2HkXecBNwzvuLygUqb5HQCxWt6HoP8IN1AzlYYtGhMX2Wi1snJ6+orLh+oHX7yiQDoSCP9DORsBnK2wqCDuvSTPdDRZPpZ5hWXD9BHlfSvMKDPSOnfnc5mIP9d4T+6Nq8/F3KKfAAAAABJRU5ErkJggg==",
    "united states",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA8CAMAAACac46aAAAAY1BMVEX/AAD/////IiL/+Pj/Skr/0tL/7+//q6v/5+f/9PT/zs7/T0//Hx//mZn/xsb/s7P/GBj/VVX/h4f/a2v/lZX/vLz/oqL/Ojr/QkL/Jyf/cHD/e3v/f3//YGD/MDD/3Nz/DQ3aMxoSAAAB30lEQVRYhe2Y25KCMAyGUysnOYOAooLv/5TLQZDS0mV30nZn1lzIGP76TdIYUgBkdqDk10YP0p+W2wf838GWZQicpmbAFoAsZHXgFEAWsjLwqRecDICPveCoE2zFc8CvkGPRXuODPfDbV8BDyK0Pnp5UBwBZOEnCDCDQk2qSr2W5JnC4loWawNFaFmkCu2uZqwlMnqzqKRThgsekpqwqXdxSBYas/zyzqnPvy0AFuC3s4RqPFVywqoIMlT40NGIXLSK4K6cmLy276nwOV11dbTndpbKtMm/mUsNJ9WXhjAm9LkVX2mditgvqHpdLbzQ16tGO7B+7RAWzyfVB8tVFBTO5ltqUaSww15+3LEQGc21yy1xcMN0fMcUEZ8n+NUmGCHZ+ssjBTHW7O+SkxS0ur9q3oprnPrSn023Pgttbj/dY3LHRDlEBnmb4bWMONJiDgC3d6MomqsCCkfpt6+Eaedjb7GDcbI09ZRZiZcEJscEbFcYflLHBtVhZqwbT8Ubg3+IiSYr45gejh1figh241mVkD/5seA5ROyrrhukdKsDuwnO/LzDc+Unhe65ceC7WAH48DIFNvdkjvm8IXFWGwE1jBkyTRHpbHVjQrrSAPRC+0dMQcRybifgb+4D/CvgLAZ0XVpY62lwAAAAASUVORK5CYII=",
    "canada",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABFCAMAAAC2XtKTAAABmFBMVEUAaEfOESb///8AVyzKAAD7+/zo5eb8///w5964knS/ik3CkVWbYjaphXXg1tPs5uDez8WaaTN/SBiLRiF6Px2JVy6WSQCjfW7h29b09PDr6NrZyLm8l2+yfEjPpXXVxrPEnnsZGxtRMhuKYTekeky9wJrFg0i3fkFyOgqafWmrdTaeXjNMKBmRWDNYPylFHxCzt4ju1KXTn0GOTTFrORdxQyRZLxnMv4TkwlvWqT768t/ZtYuVcEdFKB2cVS1iMhm1l4e/nUF7VTNkPyhzMQXR0L0uIhuhbkPkvEuoq3aqfVmSVCRtTTnAooZ0SiC6n3inpaWzopyZhX6HXlFDAAC6hjfruTT55bFCLx1xXFTIwsFiQzt+hDrwy6v+5N+ik3NJHQB8cm2ho3uTmF7zk4L9wsnlrwDUrmpaNhK+f41trq+bbFlYJAALgINqlJZBKScrDQhmYmT26Me0x8aflZ/mxs++kiNue2O5pFL4hoKPqqpwinxFlp5Ib3mG0+qmxtwAaXEAr9HjoWXO5vH6qEunwLDmj5beqK/EdatZAAACn0lEQVRoge3X3VfTMBgHYHy1ZWxzY2ODJYBTtzLBIgO2gVUYDAIiOFhFirUgtoiKdGrnB8yxL0D+bePxeOHhZjetR8172Vw8afJLct62ttbqMrRYVy61Vi26DGYwgxnMYAYzmMH/Pczz7X8CdnW4Pd6rPqdhv6szEOwKhbt7Is7BCENvX/+16PVA142bsTjvFIwEyT/gDSRuDQ7dFofvjAR5p+AkHh0bG08kUkNeMZ3OZIY5h5ZamJi8K91z358KTIsxMZRNzTgWruisy+Mez06HcnOZbDo/jxyAJYlGOkl64/H0QiadSy/Gw7H8jAOw8gD7lwg87O9fFhfSy4uxfCycX+Hsh+kWC1GAR25PQMyEO4K5YCqUn3cCRoSsSlLEm1uZ8+bXfAVZfiyv2w1jBAgJePXJhtKTyi96Np+CTy0MFp7R+dgJEw3D1jZKgvJ8NhqOxTYzOzJwqlx4AVgXbIR1A8HuS7rJexsbrxKvR8RUdmeFh8jaGp2TYSOMdQu4N/uYqMTV1/12cF6cymYOVE5VwWVgG2FrlB5i0yzC9i4Ax8G79x9GDg7WZV79OWRjuGi6SvVK5eMnVI5wyPqsqLKsdir04bA1XCBoOs1vqV43K/THv+wdHk5yJd8RgKEJ9h6nJRovSeLLZQqb9a+VSrFkHvOANA3be4FgQQFJqUKNK5VL+6ZZLpr1IgeWTuy+uRRB5+Ck0ag2m83K8RZw2KLTIRayGwZi6FztpNponp56BpqNKo2b/muDbYVRUiOWZDU8p7Q8jdqJRTSNOADTdZ2wMAZ/mZYPCQQLxA9OwIAs3TAMQs7OMTZonCUEzsA/XsbkEoWPCDEMAf02ZH8n0V76dnbOXfjsTNN2sXX6x7tFBjOYwQxmMIMZzOC/C/4OoYukaGOL+DgAAAAASUVORK5CYII=",
    "mexico",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABQCAMAAADlRUG7AAAAe1BMVEX////QDDPQADD89fbSKkDOACPPACnMAADPAC3OACbNABvNABLOACHOAB7NABbPACv55+nMAAzaYm7hho777vDtub3ww8jpqq3klZngf4fedoDijJPnpKf23eDYVGLnoKjUOEvXTlvyz9PRHzrrsbfRLDrccnjVQ1PZW2hAac7MAAACQklEQVRoge3Y/5qqIBAGYEcDAxUl08pSy9qt+7/CY6fd5zk/QBnC/YvvAnwLhxkwCHx8fHx8fN7Ott7tD01zPFXtz6FR1aQxJ4xSykgm467f/gTbHqig8GfWqXzUS7PFhjP4P7k4L0sfE6pgnwnFpViMbVephv39r+VtIbfK1hPuGNEs4p6ScNoFSC8LuH08x45h7uWbNHAByMaxO3AjF4CXTt0on32/34mdbuiNqmuoE5LInTuYFNZ3mMNNdTZe6Ge4s4FVmVbWK9RZZV9mOta/SRx17TbBucCObuDSvKS/wt3AV1RpPSMHF26B2UuvsN4FfMvQ8LpzAZe6Q4c+4YcLuENupmdyFxsKX1vjicBF8yIhPgm2rCNFPlb45IPqSfoEimcA7hFfD2quqB8aKFYttno/nxT1agJFncRWc32To4pRBUurAr3jtoIK5pWFGyHnigpmewu4RfZ3Fby+W8C7qUuWIQzcorqQtaWGM4uXjJ2kSjh/oN0KO0mVMDD0qMGeDjUwwZ7djC9aMzBkyK86D2RpaWH2iXJr7HFYC0OMapsr/MlBB4dXhHtANo8pGIj5Ylf4hZ6AQZh27JZYuBMwJDsjtzD/dGAIgzS5HRTcyp2EQcz3kSG1c6dh4N3MnNpb/t85GCidGlTFHX/JMoQhTC66VrItpcVVxxQezyOJ8pt4WzKrbWQOj+OZX8u/Lyjt6Z6iPxrg4XHBqYjPh/5W13XVH7tEkjcWGQO/cJIJIXjK3kZxsON42MMe9rCHjfMLwyIo7pTZIhwAAAAASUVORK5CYII=",
    "greenland",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA8CAMAAACac46aAAAAOVBMVEUAAAAAmzr+0QAAmTv/2gD/1AAAmDx4rS7rwwB5ZQAAlj3/2ADpzA/myxB7ri3nwAB1YQBwqy9uXADGJU1BAAABtUlEQVRYhcWZyxKDIAxFqRRfFbX9/4+ttDMWMBGQpMmq082Ze1QSQDW/ss9W39hKt0/rwZT3uzETG3rDTqbBwBvadiMDWo+zNSEpArvUHXVq3XaTiTnq8A+18IPkL0Qtd+BfO1MJ3yRD2Pui1ACiaYSDkh12UK6GngeNYfsv9gRdJRyT7GFdrbDw+Wpq3SLPdlVxUQrPkMyBLsR+hCPPugSNSe6PktOpbXbqLW28OKbS7uiK7zrx3aYKEZ5Eo8/2XHKO8LPvWo+XJdcIr5Ts19o/stEI9lEgOUgNCz8spESSA3SGcELJfiHC91EBafNXJQepT4QDs1StZL+QztW1mOT6tDsaFG6htBSSQzSQGpJMi/2gIeF8kv0CXzM/Lc0rVYZmxbp6LSDZLC9WrBhYSLXQywU2jAhd2RhAbO4CQoseSpZMOjTalXk68Y6VaYuw5N8Mgk5bdWih0Sd/2CMVLjTeCg30QlsYoU2b0DZVaGOOTtBFRxHF0zbVGV+hcETypQPVAuEUkrNSh8IxyXVHiknhQoeo1JJz0E642EG52NUAk+QQDV2GsEkO0InrH6kLr79e8b0Bnr4xtbcS7QQAAAAASUVORK5CYII=",
    "jamaica",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA8CAMAAACac46aAAAAmVBMVEUAKo/////LFRUAKY8AH4z6+vwhMpIAJ47IAADKDAwAK5TQQkLMFRPTEwDNFRHPFAr13t6kG0MvKIaQH1XRFAW9GCpLJnyGIF1mJHCzGTWbHU2/FyaxGTg5LIYAN5gAI47gjY3qtrby09PZcHD67OzTT0/cfHzNLS3WYGBYJXdxI2skKYtBJ4GAIWDjmpnlpaXPNjbvycnMISDCKRZMAAAB50lEQVRYhc2Z2XaCMBCGZajtRJZgS/dFUMBuWvT9H64JFk5IaK+STP8rjhd+J/NnMpnJbHm5mJGI86swpAAD5Mf3BQEaAOLk+sY/GqTSZPnh22o4iSe3nhcNvXK484oewMLq+0+PaFCUJg8zb1bDSJzvQk/oMVjE+/FtEXqQDpbxfnp+WZ25lgkGYEkxD1xrCgyAUNKAIcVoTQIW8cZNRQIW8cY9DRhil1b/BZZW15k3MGrxbtyklgHGArUf8MsHmEWVBhZWbw/uwWJ5LdOjwPDVemoZ4CzY60vu4l1Uc6vSwCwKgmwCLNDx7tymBjDr1J0ZLXbfqWa1KJirC2sawHUktZVpu2/lZx1pZFkwLbYdfSQL3f2qNjYZsNxe2zF4GI03bol8yuocbLUdysYtFe4G4ynuyWorZOUvcdOfjlk7ubMdgRWj2a9cB6GG7vQ4ST+ve7nYXPJvt73D60mwk3QaIl2grAhHPYd/btwODhAJXgdVhKnkN8aSERwdmWJJR5G8EihSWo+1KBJ2a4RaJLBpfpKX4yFW09h1WYzR/AJfFwFTnq4+JtbXZW8kr9fbkeelI+x/bGGImjaqNpWoMScaRRANX6jGTUQDNqKRItUQlWhsTDQoJ3oaoHoMIXr+IXvwonri+wYawT00FawjGAAAAABJRU5ErkJggg==",
    "cuba",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABQCAMAAADlRUG7AAAAolBMVEX////aEhoHI1cAH1X99vbaCxX29vcsNWDcLjDYAAAAAEjzw8S9wcsAAEMAIVbV193w8fQAF1EADk4AEk/87u/xubrZAAvkcHLo6e2eoLBQVnc/SW8AAEuoq7laYH8AG1Ozt8OHjaIAAD2Ul6kfLFxqcIp0d44AAC7Iy9PeREX55eX32dnsn6DdOz3gTU/urK3hW1zpkpLbICX1z8/jZ2nngYKYPhEtAAABwElEQVRoge3XXW+CMBQGYORLT6EqChVRh865OedQZP7/v7YK6LywxHS2TUzfG3pB8qSHc2o1DP7YHafFnX+4GtawhjXclF6sCB6PFcHJRA0cT3FfCTybopkS+CVNExWwi81u0FDrh8Px3C+zGJjmYFmt5zcG6/E7nmOMaKhL5dMK47mcUscJMq+CkpsHiZBvvHy1zqyFl7ffEdNcvXZau289xiuCujoOKph9hgiC/fozI18yvKI7Hg5NM1jJhd2ga6HFAlndoSsV9lEwoEX202DKqrUY+B1Pyq7qJ5hVazHwx2V4lwNGXwuB1+u/tc8Y5Ge87GlYwxqWBhOHO4bLn/Czwx+jzZ9JaPPHsLiTtlk/1HfF5I6lYQ1r+NnhzZcieLtVBH9nauAQYKME3gHslMAZIXsVcEhaLbAlwmHklcmBwnm1jkIZO46gyulCVy8jOaW2M7i+TUJ2c79CvnEOl2uvA8xjRABsFIdadg4FyxXT1XZdbdJwhgiBoxoGTzL8c5piipORXNimf1HgeKQ9RthniAjYA0K88tFQaxHwCPbl8IYZsGstALYhPy9zkAkXV8NbMGstAL4vGtawhjXMm18Hxju6W0DPDgAAAABJRU5ErkJggg==",
    "panama",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABLCAMAAACMVLPjAAABKVBMVEVJl9D///9HltBOmtH5+/35+vnh4+Tu35Pn6+T68azy5Znn1Yb09/RTgzDJ1sPw8u/f49zN1seAl3BBch1XjELj6uCdr5LT2dCKoXlvj1N6k2phV0UubgAibgDH0cChsJiSpYV9mGattqH38+T+/Omkl3RJgC4NbABKbzBujFnMyL7Uu2LBwYF3nWu3xbPa29+JpXW9u7Bggkb69M/o47TizXhqe0n58b2yw6pRcyvv4p6PrIOsv58+aRRhdDzk2LJch1OOmXfbyIHVwo7BtY2kgVjHy8+ahoV6eGGpsLaOoIzWy8p+YVtikE2WjnthDgBxZ0tPAABmKhanp3KCkIWWpZ2Tk01XRBSXfHNeLwBcaiWYjkDxwWZ0cgCulTHYrUiGhyLFqXhgZUCPuOpAAAACK0lEQVRoge3XW3eTQBAH8E4bCAkxS6gsC1YCJNZCLUnQKDGNaVJFrdbU1PulXr7/h3AWPEd9y8vy4Nl54fKQ3/kPw27Y2tqotndqsFHVdrY3+8UNS8ISlrCEJSxhCUtYwhKWsCC4VTXc0srjtfbvG6QS2OiYllFwu9et8ha1SQUwY45bnt3Yu1lk9rqOLx62g5CCWtN6/X7v1v7tNiiEOPRAPBwZMQVQD/UmrztHyYBgZNMwRMPDUZoqAI16Uf2Bg4/XC2KmCYY1Lzzg4e42iro3aB1h+1MvTUQnDkITA4PS0A/Hdb3ZhyFmNel9Ihi2WVo2FSM39WbjAWQegBVNW4Jhls7KpvYQ5qV4OGs0TbtiYcXanXTwqNbgIXYaq59NAY7NmeCpVljnUVa0fM5bXdcb85NjHOuFnRCxrSae2ykesd7kgcfj+T623vO7oeDE/oLN+FTHy+XydP54/iTBBVtzXJaJfp3a0QQj5k/xOs9roD47x4lz0lD0kmkwGgagPuddz3PMPjwDcHyPv1RiE4P2Ili8VHGwc8wM1nn+ioYj0xa+SYAWmKsLq8VdUHLHMl5f0KCK/Rji9dq9PH1TnGdv3znvV2cdpQr4w8dP9POXr3wBa0+vvl1216sRVAGThR999yNcKTN7evLjKpr9VCqBeYcnUWzYmXGcxe4eU/64gmEtYT7uRoZtEZcmyV9uhX/oyb+X//eXhIQlLGEJS1jCEpawhCUs4bJ+AQp/RVx12P/vAAAAAElFTkSuQmCC",
    "guatemala",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABQCAMAAADlRUG7AAAAt1BMVEXuAAD///8AUPDvJyf+9vYATvD2AAA9YfEAU/gAQO8AQu/xAAAATPAASfAAR/AAPO/a4fyktPhqQMHgEjaLOKjqBxYhTuquLII+St7OHFQAVP25JnR+PLTjDyyaM5qEOq3dG0P4OCWUm+z/+/a5x/pLcPJ2kPXt8f6brPfCzfpae/P3+v/J0/pkgfPi6P2Jnvaxvvi0KXxNR9XUGUuRNqHCImhaRM2kL47IIF9vifQ+aPImWfGQpfYyhBRUAAACmUlEQVRogcWaa1ejMBCGy2gkICSt7qJ2XXXXUrTV4lb3UvD//64NYAttE+qBJPN+atNzeDrvkMl1cHZ+MkARpV++oqABaHRxcooBFujLK/toKDW2n+oKDBTeTu0GDWvR6JtVv6HWePlqEQ1N0evv1lIN22S4sRU07IhGv+2gd8EC/efVht/7YKD01kIVlYCLVP817rcULLrW5T/DaAW4qKJ3P47MSQ0GGvw8vj82pRYwAIOJY0qtYCA8HqKAAQJvmqCAhd/sAQcMxIdHFHCR6pn2VH8KDBD60zkKGAjzRzbAhOw3ee6TcTDJYZ8MAX9eGAYHqzSUtYd+ahbsTYZcbgXzXwyCSZg4XOJ1+RvPtKRaCg5ix5lKvS5/9VYaqqgUXPScJ7nXpUKeOvcmwJ6IaC57rzdi7KLvikfmZVb8pZXS61J0edVvQlg/iqxV1ahHvmlQoM96LTtqrpu5lUj57iQf30SzikxvBt3RtcGxoizNZ4HS7+hX57loI7W+dMSfsLZk02XXZUfjIcSL98e+laqSrDW+PuqE3npIGOxUpWHO2rFF0PStN1gEvTUKjHxlejWDRdXKartn3gGbC2mxuog5rwOOD8er5eUqxdKm04ewWrpTJd6YTy7awZoKyIfTrES+jA57ratkNp2ecv6ctHutcZConBYdeegKHsvFp4WqF2sfFkk+X3dewt8dx5V6bWAiEKbObFMj/SwZSUI2MvVh780aGQYPe0k2NdkLt2oV2Q3Y8PRWKeMTerksLGFksrJok2AtLVN3hbQwR9qKwNp8QdpuQtpgw9pSRNpExdo2RtooH0coRwNIhyGU3nZbHPQEIx14IR3xYR1qIh3jUpyDa6SjeqzLCUjXMZAuoCBduUG7ZIR1reo/n4pI7uFAM14AAAAASUVORK5CYII=",
    "puerto rico",
    "data:image/png;base64,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",
    "haiti",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABQCAMAAADlRUG7AAABSlBMVEUALWLOESb///8ALGHODSQSJl7NFiHNDRoFH1sAKmEAHVoOJF4WIVn8/P3NGB7n5+hvc4YAaACdAADb3N8wPVU8ST5CTTozP1Lw8fBTX3NASCk3RFQgL1nP0dZMVkxSVjVudWYtN2AlMlU4QU3GyNBcYXpvcnZXXHvmy87IU1jJal7KXFvn1NbQ39CFhoRNTj/Ev6PgrIjQEwnNRwXKfmiawZrL1MRek2Bxe5NBSEfU0Lvoup/GNABaSEDFamouiTuDqHGxx6s+jU1koGuChJ0ABVqUj3PmzcGjjW8dAVTbfIF+r4Bpm1zh6t++1MFBUHWSnK/hrrDOusKwtsG5sbObYmSMp4F6QFTFhYxcdIytxpawnqTUUFSMACoAfCins5oAADirs642fC/GnqPJq6WzAABXXCS0c2GdWDjILjylSDjZfnCxYWe1o4/hyFNxAAABnElEQVRoge3W2zcCQRwH8G2idFlry2XR5haSzSXWkmx2t0hpo5BI6EbJ//8q58RDPTBznDkeft+n38tvPjPnzJn5MQx2rCOoL/YhC3bwXYABBhhggAEGGGCAAQYYYIDpwVbsOJyDMH6YYey43D2PZXvFqA0/TP/ufxvOOz4xOcUJpP2EsHd6ZtYnij7/3LyXJiwuLH6VS+MiPZgbC4jLK6ve4FpoXQqMcdRghMJoY3NxazuysyuTLUAI7ylo/8AfPYwdqfFjjf254Y9gQdGNRPIkepo6S2f48yw1WDcME+USrHCRQxp/rlGDZSWTvcwXrq4LVwWN1+nByk3VVCNc8VaylO74Kj3YVOJh1V4u3pcfSjJfIbrYZLf6UZGDkUa+8JR8rlbiJjW4VtcNLSuwgmBWeaNeowZLDVVvvqRDod3Xpqw2JGowqtlasbe2x9N+i7VsRAcmfTIlTwel6vl31PEQnbcLE/zho92+72fys3C78McJhmBqsffv3unAH6AY/DFtEB6xEsyMAAMMMMAAAwwwwAADDDDAAP9f+AOc417g0k8KSgAAAABJRU5ErkJggg==",
    "dominican republic",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABICAMAAAAKwMFNAAAAFVBMVEX///8AK3/OESYALH8AAGzIAADOESchgZBPAAAAUklEQVRoge3ZyQ3AMAzEQOXsv+T04A8NZKYBfgXtHJERFhYWXg5fkbkjA8D+nsi8kTkjwsLCwsLCwsJ/CmfHXnbeArC/7FGeTQPZGCIsLCy86gMC6i0BYNm6NAAAAABJRU5ErkJggg==",
    "costa rica",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA8CAMAAACac46aAAAAOVBMVEUAvOT///8AtOEAt+IAuuP2/P7X8fn7/v+E1e7w+v3L7ffd8/puzusrvuWw5PTo9/uk3vHD6vZVyOnLQSLwAAAA1UlEQVRYhe2WSQ6DMAxFHeyQkKEM9z9s0+5Awk0zKAv8xAb80RMhfAEgCIIgCILwHKZBgBrEP2JTHSgU2+pAiXjRDvSi7wNpCE4vzcU+ElFgFtOEFIi+uVgZwMAnAkL+W84Xz/EV+UQKzB3Ezii/nq+40+nqlekhvqKVtYrZbN3EGxLhNkCsdsS9/O6K5rIJNtBMfNG478EEWolnYJ8pjSh/U+eLHSBNB1eZx0QI7j5QKB7YXPD6EaZOzZW6aeUCn2n2Std8x3WMEw/72RMEQRAEQXgObyv4Dn4LZGElAAAAAElFTkSuQmCC",
    "honduras",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnL0JaZbo82iFV38eOL6x_J5_0s_hpJv7ZPPwt&s=0",
    "the bahamas",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNuVzjeC5cMtvCcB7Gb9_CdSJuBtyaPPaivzCe&s=0",
    "belize",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZx7Wg7tCMIGfrgmn8sxJM1U-je6yyUNrcdEYB&s=0",
    "barbados",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjPC0vwnrbE1laZ5PEw1fTKlsEwkbunchm-7b&s=0",
    "saint barthelemy",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaXUs89c79ukm24XETeYJkA7e7fI8hbONllde&s=0",
    "anguilla",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-s5dbmJPh_86ApRAJ_GLb6ND1mpE-hVsrQEm&s=0",
    "montserrat",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnj5yvth8u80l6md7STG1SKznMnRE3oKp4F5QH&s=0",
    "nicaragua",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ1QxMk_JmfQYH0h2-yHg0nA7KEbWLjIVVE7i5&s=0",
    "grenada",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2aKJOe_YOQxnd3xU_srjRUktY43xrzqe2AAZ&s=0",
    "martinique",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtlaF30K0s6cT764Fc4YegPQeDyXo0rO495wo&s=0",
    "el salvador",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEe7PTwaOlEUiBdXUpT1Bp00pZCd6lyjDcoZ9v&s=0",
    "cayman islands",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJg4k4jTCAZKoA4dZfLOj2tFsmNfWU16Yey6JL&s=0",
    "dominica"
]