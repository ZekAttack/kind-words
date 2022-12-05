$(document).on("keypress", function(e) {
    var randNum = Math.floor(Math.random()*3)
    switch(e.key) {
        case "a":
            $(".textDisplay").text(aList[randNum])
            break;
        case "b":
            $(".textDisplay").text(bList[randNum])
            break;
        case "c":
            $(".textDisplay").text(cList[randNum])
            break;
        case "d":
            $(".textDisplay").text(dList[randNum])
            break;
        case "e":
            $(".textDisplay").text(eList[randNum])
            break;
        case "f":
            $(".textDisplay").text(fList[randNum])
            break;
        case "g":
            $(".textDisplay").text(gList[randNum])
            break;
        case "h":
            $(".textDisplay").text(hList[randNum])
            break;
        case "i":
            $(".textDisplay").text(iList[randNum])
            break;
        case "j":
            $(".textDisplay").text(jList[randNum])
            break;
        case "k":
            $(".textDisplay").text(kList[randNum])
            break;
        case "l":
            $(".textDisplay").text(lList[randNum])
            break;
        case "m":
            $(".textDisplay").text(mList[randNum])
            break;
        case "n":
            $(".textDisplay").text(nList[randNum])
            break;
        case "o":
            $(".textDisplay").text(oList[randNum])
            break;
        case "p":
            $(".textDisplay").text(pList[randNum])
            break;
        case "q":
            $(".textDisplay").text(qList[randNum])
            break;
        case "r":
            $(".textDisplay").text(rList[randNum])
            break;
        case "s":
            $(".textDisplay").text(sList[randNum])
            break;
        case "t":
            $(".textDisplay").text(tList[randNum])
            break;
        case "u":
            $(".textDisplay").text(uList[randNum])
            break;
        case "v":
            $(".textDisplay").text(vList[randNum])
            break;
        case "w":
            $(".textDisplay").text(wList[randNum])
            break;
        case "x":
            $(".textDisplay").text(xList[randNum])
            break;
        case "y":
            $(".textDisplay").text(yList[randNum])
            break;
        case "z":
            $(".textDisplay").text(zList[randNum])
            break;
        default:
            $(".textDisplay").text("Press a letter and let motivation and encouragement come to you!")
    }
}) 