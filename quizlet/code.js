const termList = [
    {
        term: "תרופה",
        explain: "חומר או תרכובת רפואית, המשפעים על מבנה הגוף ותפקודו."
    },
    {
        term: "התוויה",
        explain: "שיוך של טיפול רפואי מסוים למצב רפואי מסוים."
    },
    {
        term: "התוויה נגד",
        explain: "המצבים בהם אסור לתת את התרופה."
    },
    {
        term: "הוראות מתן",
        explain: "דגשים שעל המנפק להסביר למטופל."
    },
    {
        term: "שם מסחרי",
        explain: "שם שחברת התרופות משתמשות בו על מנת לשווק את התרופה."
    },
    {
        term: "התמכרות",
        explain: "מצב של תלות סיכולוגית ובחלק מהמקרים גם גופנית, בחומר או בפעילות כלשהם. התמכרות מתאפיינת בהתנהגות כפייתית שנועדה להשיג את אותו גירוי. המצב ממשיך גם כאשר הוא מוביל להשלכות שליליות ובא על חשבונם של צרכים חשובים אחרים, פסיכולוגים וגופניים.."
    },
    {
        term: "סבילות",
        explain: "מצב המתפתח עקב שימוש ממושך בסמים או תרופות, אשר גורם לאדם להתרגל אליהם, להיות רגיש פחות לפעולתם ולהפסיק להיות מושפע מהם כפי שהושפע קודם לכן, מינון החומר שהשפיע קודם לכן, אין בו די, ויש צורך במינונים הולכים וגדלים כדי להשיג את ההשפעה המבוקשת."
    },
    {
        term: "תסמונת גמילה",
        explain: "שורה של תסמינים גופניים ונפשיים אשר מופיעים בעקבות הפסקה חדה בלקיחת החומר באדם שהתמכר אליו. התסמינים הגופניים כוללים בדרך כלל את היפוכן של ההשפעות הפרמקולוגיות של הסם. לדוגמה הוא משכך כאב שגם גורם לעצירות."
    },
    {
        term: "תקן 15 ד",
        explain: "תרופות מפרוטוקול טיפול חובש ופרוטוקול בעיות עור, אותן יכול החובש לנפק גם ללא מרשם מן הרופא."
    },
    {
        term: "תקן 15",
        explain: "רשימה של כמאה תרופות נמצאות בכל מרפאות צהל. תרופות אלו מנופקות למטופלים על ידי החובש או רוקח, אך רק בהצגת מרשם מן הרופא."
    },
    {
        term: "טיפול בגורם",
        explain: "טיפול בגורם המחלה"
    },
    {
        term: "טיפול סימפטומטי",
        explain: "טיפול בסימני המחלה"
    },
    {
        term: "מרשם",
        explain: "הוראות רופא בכתב, שעל פיה יכול חובש לנפק תקופה מתקן 15. היא מכיל פרטים כגון: פרטי המטופל, פרטי התרופה והמינון, פרטי הרופא."
    },
    {
        term: "פרמקולוגיה",
        explain: "מדעי התרופה"
    },
    {
        term: "חומר פעיל",
        explain: "החומר בתרופה אשר מפעיל את מנגנון הריפוי"
    },
    {
        term: "פלסבו",
        explain: "תרופה ללא מנגנון השפעה פיזיולוגי"
    },
    {
        term: "IV",
        explain: "תוך ורידי"
    },
    {
        term: "IM",
        explain: "תוך שרירי"
    },
    {
        term: "PO",
        explain: "מתן פומי"
    },
    {
        term: "SC",
        explain: "תת עורי"
    },
    {
        term: "INH",
        explain: "אינהלציה"
    },
    {
        term: "SL",
        explain: "תת לשוני"
    },
    {
        term: "PR",
        explain: "רקטלי"
    },
    {
        term: "IO",
        explain: "תוך גרמי (מהעצם)"
    },
    {
        term: "רצפטור",
        explain: "קולטן"
    },
    {
        term: "נוירוטרנזמיטור",
        explain: "מעביר עצבי"
    },
    {
        term: "PH",
        explain: "חומציות"
    }

];

var currTerm = 0;
var currTermTest = 0;
var worngsListTest = [];
var currectAnsArrTry = [];
var arrShaffelCard = [];

if('serviceWorker' in navigator && location.hostname !== 'localhost'){
    let location = "../"
    navigator.serviceWorker.register(location + 'sw.js');
}

window.onload = () => {
    document.querySelector(".card-button").addEventListener("click", onClickCardButton);
    document.querySelector(".test-button").addEventListener("click", onClickTestButton);
    document.querySelector(".try-button").addEventListener("click", onClickTryButton);
    document.querySelector(".game-button").addEventListener("click", onClickGameButton);
};

function slot(name, styleName, ...contents) {
    var slot = document.createElement("span");
    slot.slot = name;
    slot.classList.add(styleName);
    slot.append(...contents);
    return slot;
}

function createTermChoice(n, t) {
    var el = document.createElement("div");
    el.append(slot("number", "worng-counter-number", n), slot("text", "worng-text-term", t));

    el.attachShadow({ mode: 'closed' }).append(document.querySelector(".term-choice").content.cloneNode(true));
    document.querySelector(".space-of-adding-terms").append(el);
}

function removTermChoice(n, t) {
    var el = document.createElement("div");
    el.append(slot("number", "worng-counter-number", n), slot("text", "worng-text-term", t));
    el.attachShadow({ mode: 'closed' }).append(document.querySelector(".term-choice").content.cloneNode(true));
    document.querySelector(".space-of-adding-terms").append(el);
}

function onClickCardButton() {
    onLoadCards();
    document.querySelector(".home-page").classList.add("inactive");

}

function onClickBackButton() {
    document.querySelector(".home-page").classList.remove("inactive");
    document.querySelector(".cards").classList.add("inactive");
    document.querySelector("header").classList.add("in-menu");
}

function onLoadCards() {
    document.querySelector(".cards").classList.remove("inactive");
    document.querySelector("header").classList.remove("in-menu");
    displayTerm();
    document.querySelector(".rightArrow").addEventListener("click", onClickRightArrow);
    document.querySelector(".leftArrow").addEventListener("click", onClickLeftArrow);
    document.querySelector(".choose-again").addEventListener("click", onClickBackButton);

}

function onClickLeftArrow(e) {
    changeCard(+1);
}

function onClickRightArrow(e) {
    changeCard(-1);
}

function displayTerm() {
    document.getElementById("term-text").innerHTML = termList[currTerm].term;
    document.getElementById("term-explain-text").innerHTML = termList[currTerm].explain;
    document.getElementById("current-term").innerHTML = `${currTerm + 1}/${termList.length}`;
    document.querySelector(".card>.hitbox").checked = false;
}

function changeCard(move) {
    document.querySelector(".appearence").classList.remove(`num-${(currTerm % 4) + 1}`);
    // currTerm = ((currTerm + (move & termList.length)) % termList.length);
    currTerm = (currTerm + move) % termList.length;
    if (currTerm === -1) currTerm = termList.length - 1;
    document.querySelector(".appearence").classList.add(`num-${(currTerm % 4) + 1}`);

    displayTerm();
}

function onClickTestButton() {
    onLoadTest();
    document.querySelector(".home-page").classList.add("inactive");
    var signs = document.querySelector(".result-signs");
    var ans = document.querySelector("#answer>.ans-input");
    signs.style.top = `${ans.offsetTop}px`;
    signs.style.left = `calc(${ans.offsetLeft}px - 15vw / 2 - 3vw)`;
}


function onLoadTest() {
    currTermTest = 0;
    document.querySelector(".test").classList.remove("inactive");
    document.querySelector("header").classList.remove("in-menu");
    displayTermTest();
    document.querySelector(".rightArrowTest").addEventListener("click", onClickLeftArrowTest);
    document.querySelector(".leftArrowTest").addEventListener("click", onClickRightArrowTest);
    document.querySelector(".test .choose-again").addEventListener("click", onClickBackButtonTest);
    document.querySelector(".check-ans").addEventListener("click", checkSpelling);
    document.querySelector(".dont-know-text").addEventListener("click", onClickDontKnow);
}

function changeTape(move) {
    document.querySelector(".test").classList.remove(`num-${(currTermTest % 4) + 1}`);
    currTermTest = (currTermTest + move) % termList.length;
    if (currTermTest === -1) currTermTest = termList.length - 1;
    document.querySelector(".test").classList.add(`num-${(currTermTest % 4) + 1}`);


    displayTermTest();
}

function onClickRightArrowTest(e) {
    if (currTermTest == termList.length - 1) {
        document.querySelector(".test").classList.add("inactive");
        document.querySelector(".test-ans").classList.remove("inactive");
        document.querySelector("#score-text").innerHTML = `הצלחת ב- ${termList.length - worngsListTest.length} שאלות`;
        onLoadTestAns();
    }
    else {
        document.querySelector(".test").classList.remove(`bad-answer`);
        changeTape(+1);
    }
}

function onClickLeftArrowTest(e) {
    changeTape(-1);
}

function displayTermTest() {
    document.getElementById("term-text-test").innerHTML = termList[currTermTest].explain;
    document.getElementById("term-explain-text").innerHTML = termList[currTermTest].explain;
    document.getElementById("current-term-test").innerHTML = `${currTermTest + 1}/${termList.length}`;
    document.querySelector(".test").classList.remove("bad-asnwer");
    document.querySelector(".note .appearence").classList.remove("currect");
    document.querySelector(".note .appearence").classList.remove("wrong");
    document.querySelector(".leftArrowTest").style.visibility = "hidden";
    document.querySelector(".ans-input input").disabled = false;
    document.querySelector(".currect-text").style.visibility = "hidden";
    document.querySelector(".worng-text").style.visibility = "hidden";
    document.querySelector(".dont-know-text").style.visibility = "visible";
    document.querySelector(".check-ans").style.visibility = "visible";

    //x and y signs
    document.querySelector("#greenV").style.visibility = "hidden";
    document.querySelector("#redX").style.visibility = "hidden";

    document.querySelector(".ans-input input").value = "";
}

function onClickBackButtonTest() {
    document.querySelector(".home-page").classList.remove("inactive");
    document.querySelector(".test").classList.add("inactive");
    document.querySelector("header").classList.add("in-menu");

    document.querySelector(".test").classList.remove(`num-${(currTermTest % 4) + 1}`);
    document.querySelector(".test").classList.remove(`bad-answer`);
    worngsListTest = [];
    currTermTest = 0;
    // changeTape(-1);
}

function checkSpelling() {
    //ueser correct
    if (document.querySelector(".ans-input input").value == termList[currTermTest].term) {
        document.querySelector(".note .appearence").classList.remove("wrong");
        document.querySelector(".note .appearence").classList.add("currect");
        document.querySelector(".currect-text").style.visibility = "visible";
        document.querySelector("#greenV").style.visibility = "visible";
    }
    //user worng
    else {
        document.querySelector(".note .appearence").classList.remove("currect");
        document.querySelector(".note .appearence").classList.add("wrong");
        worngsListTest.push(termList[currTermTest].term);
        document.querySelector(".worng-text").innerHTML = `טעית! התשובה הנכונה: ${termList[currTermTest].term} `;
        document.querySelector(".worng-text").style.visibility = "visible";
        document.querySelector("#redX").style.visibility = "visible";
    }

    document.querySelector(".test").classList.add("bad-answer");
    document.querySelector(".leftArrowTest").style.visibility = "visible";
    document.querySelector(".dont-know-text").style.visibility = "hidden";
    document.querySelector(".check-ans").style.visibility = "hidden";
    document.querySelector(".ans-input input").disabled = true;
}

function onClickDontKnow() {
    document.querySelector(".ans-input input").value = termList[currTermTest].term;
    document.querySelector(".test").classList.add("bad-answer");
    document.querySelector(".leftArrowTest").style.visibility = "visible";
    document.querySelector(".dont-know-text").style.visibility = "hidden";
    document.querySelector(".check-ans").style.visibility = "hidden";
    document.querySelector(".ans-input input").disabled = true;
}

function onLoadTestAns() {
    document.querySelector(".test-ans .choose-again").addEventListener("click", onClickBackButtonTestAns);

    document.querySelector(".test").classList.remove(`num-${(currTermTest % 4) + 1}`);
    document.querySelector(".test").classList.remove(`bad-answer`);

    for (var i = 0; i < worngsListTest.length; i++) {
        createTermChoice((i + 1), (worngsListTest[i]));
    }
    worngsListTest = [];
    currTermTest = 0;
}

function onClickBackButtonTestAns() {
    document.querySelector(".home-page").classList.remove("inactive");
    document.querySelector(".test-ans").classList.add("inactive");
    document.querySelector("header").classList.add("in-menu");
    var answer = document.querySelector(".space-of-adding-terms");
    while (answer.firstChild)
        answer.firstChild.remove();
}



/************************* 
//try
**************************/
function slotTry(name, styleName, ...contents) {
    var slot = document.createElement("div");
    slot.slot = name;
    slot.classList.add(styleName);
    slot.append(...contents);
    if (styleName == "check-box") {
        slot.addEventListener("click", onClickNewChoice);
    }
    return slot;
}
function createTryQuess(t, correct, ...a) {
    var el = document.createElement("div");
    el.append(slotTry("term-text-try", "term-text-try", t), slotTry("check-box1", "check-box"), slotTry("ans1", "try-answer", termList[(a[0])].explain),
        slotTry("check-box2", "check-box"), slotTry("ans2", "try-answer", termList[(a[1])].explain), slotTry("check-box3", "check-box"),
        slotTry("ans3", "try-answer", termList[a[2]].explain), slotTry("check-box4", "check-box"), slotTry("ans4", "try-answer", termList[a[3]].explain));

    el.attachShadow({ mode: 'closed' }).append(document.querySelector(".try-quess").content.cloneNode(true));
    document.querySelector(".space-of-adding-quess").prepend(el);
    el.correct = correct;
}

function onClickTryButton() {
    onLoadTry();
    document.querySelector(".home-page").classList.add("inactive");

}

function onLoadTry() {
    document.querySelector(".try").classList.remove("inactive");
    document.querySelector("header").classList.remove("in-menu");
    document.querySelector(".space-of-adding-quess").scrollIntoView();

    showQuess();
    // displayTermTest();
    //document.querySelector(".check-if-currect-img").style.visibility = "visible";
    document.querySelector(".try .choose-again").addEventListener("click", onClickBackButtonTry);
    document.querySelector(".check-if-currect-img").style.visibility = "visible";
    document.querySelector(".try .check-if-currect").addEventListener("click", onClickCheckTry);


}

function onClickBackButtonTry() {
    document.querySelector(".home-page").classList.remove("inactive");
    document.querySelector(".try").classList.add("inactive");
    document.querySelector("header").classList.add("in-menu");
    var answer = document.querySelector(".space-of-adding-quess");
    document.querySelector(".space-of-adding-quess").classList.remove("disable");
    while (answer.firstElementChild != answer.lastElementChild)
        answer.firstChild.remove();
    document.querySelector(".check-if-currect-text").innerHTML = "לבדיקה";
}

function showQuess() {
    var randArr = [];
    var curretAns = 0;

    for (var i = 0; i < termList.length; i++) {
        curretAns = Math.floor(Math.random() * 4);
        currectAnsArrTry.push(curretAns);

        randArr = randArray(i, curretAns);

        createTryQuess(termList[i].term, curretAns, ...randArr);
    }
}

//create array with random answers and the currect answers
function randArray(placeInXml, number) {

    var arr = [];
    arr[number] = placeInXml;
    var temp = 0;

    for (var i = 0; i < 4; i++) {

        if (i === number) {
            continue;
        }

        temp = Math.floor(Math.random() * (termList.length));
        while (arr.includes(temp)) {
            temp = Math.floor(Math.random() * (termList.length));
        }

        arr[i] = temp;
    }
    return arr;
}

function onClickNewChoice(e) {

    if (e.target.parentElement.querySelector(".checked") != null) {
        e.target.parentElement.querySelector(".checked").classList.remove("checked");
    }
    e.target.classList.add("checked");

}

function onClickCheckTry() {
    var cunterCorrectAns = 0;
    document.querySelector(".space-of-adding-quess").classList.add("disable");
    //check if the user currect
    for (var i = termList.length - 1; i > -1; i--) {
        var question = document.querySelectorAll(".space-of-adding-quess>div")[i];
        var number = question.querySelector(".checked");
        if (number) {
            number = /[1-9]+/.exec(number.slot);
        } else {
            number = "-1";
        }
        if (Number(number) === question.correct + 1) {
            question.querySelector(".checked").classList.add("correct");
            cunterCorrectAns++;
        }
        else {
            if (number != -1) {
                question.querySelector(".checked").classList.add("mistake");
            }
            question.querySelector(`[slot=check-box${question.correct + 1}]`).classList.add("right");

        }
        document.querySelector(".check-if-currect-text").innerHTML = `הצלחת <br>${cunterCorrectAns} מתוך ${termList.length} שאלות`;
        document.querySelector(".check-if-currect-img").style.visibility = "hidden";
        document.querySelector(".check-if-currect-text").scrollIntoView();
        //Number(/[1-9]+/.exec("check-box1"))
    }

}

/************************* 
//game
**************************/
function onClickGameButton() {
    onLoadGame();
    document.querySelector(".home-page").classList.add("inactive");
}

function onLoadGame() {
    document.querySelector(".game").classList.remove("inactive");
    document.querySelector("header").classList.remove("in-menu");

    document.querySelector(".game .choose-again").addEventListener("click", onClickBackButtonGame);
    document.querySelector(".match-button").addEventListener("click", onClickMatchButton)
    counterCorrectAns = 0;
    document.querySelector(".match-button").style.visibility = "visible";
    showGameCard();
}

function onClickBackButtonGame() {
    document.querySelector(".home-page").classList.remove("inactive");
    document.querySelector(".game").classList.add("inactive");
    document.querySelector("header").classList.add("in-menu");

    while (document.querySelector(".space-of-adding-cards").firstChild)
        document.querySelector(".space-of-adding-cards").firstChild.remove();
    document.querySelector(".match-button").classList.remove("disable");
    arrShaffelCard = [];
    clearInterval(counterSec);
    totalSec = 0;
    document.querySelector("#congrats").innerHTML = "";
    document.querySelector(".game #finish-game").innerHTML = "";
}

function slotGame(name, styleName, index, ...contents) {
    var slot = document.createElement("div");
    slot.slot = name;
    slot.classList.add(styleName);
    slot.append(...contents);
    slot.index = index;
    if (styleName == "term-explain-card-game") {
        slot.addEventListener("click", onClickExplainCard);
    }
    else {
        slot.addEventListener("click", onClickTermCard);
    }
    return slot;
}

function createGameCards(n, ...a) {
    var el = document.createElement("div");
    if (arrShaffelCard[n] >= termList.length) {

        if (termList[arrShaffelCard[n] - termList.length].explain.length > 30) {
            var tempSlot = slotGame("explain", "term-explain-card-game", arrShaffelCard[n] - termList.length, `${(termList[arrShaffelCard[n] - termList.length].explain.slice(0, 30))}...`)
            tempSlot.addEventListener("touchend", function () {
                clearTimeout(tempSlot.pressTimer);
                // Clear timeout
                return false;
            });
            tempSlot.addEventListener("touchstart", function () {
                // Set timeout
                tempSlot.pressTimer = window.setTimeout(function () {
                    document.querySelector(".big-explain").style.visibility = "visible";
                    document.querySelector(".space-of-adding-cards").classList.add("disable");
                    document.getElementById("big-explain-img").addEventListener("click", afterClickXExplain);
                    document.querySelector(".big-explain-text").innerHTML = termList[arrShaffelCard[n] - termList.length].explain;
                }, 500);
                return false;
            });


            el.append(tempSlot);
        }
        else {
            el.append(slotGame("explain", "term-explain-card-game", arrShaffelCard[n] - termList.length, termList[arrShaffelCard[n] - termList.length].explain));
        }
    }
    else {
        el.append(slotGame("term", "term-card-game", arrShaffelCard[n], termList[arrShaffelCard[n]].term));
    }

    if (arrShaffelCard[n + 1] >= termList.length) {
        if (termList[arrShaffelCard[n + 1] - termList.length].explain.length > 30) {
            var tempSlot = slotGame("explain", "term-explain-card-game", arrShaffelCard[n + 1] - termList.length, `${(termList[arrShaffelCard[n + 1] - termList.length].explain.slice(0, 30))}...`)
            tempSlot.addEventListener("touchend", function () {
                clearTimeout(tempSlot.pressTimer);
                // Clear timeout
                return false;
            });
            tempSlot.addEventListener("touchstart", function () {
                // Set timeout
                tempSlot.pressTimer = window.setTimeout(function () {
                    document.querySelector(".big-explain").style.visibility = "visible";
                    document.querySelector(".space-of-adding-cards").classList.add("disable");
                    document.getElementById("big-explain-img").addEventListener("click", afterClickXExplain);
                    document.querySelector(".big-explain-text").innerHTML = termList[arrShaffelCard[n + 1] - termList.length].explain;
                }, 500);
                return false;
            });


            el.append(tempSlot);
        }
        else {
            el.append(slotGame("explain", "term-explain-card-game", arrShaffelCard[n + 1] - termList.length, termList[arrShaffelCard[n + 1] - termList.length].explain));
        }

    }
    else {
        el.append(slotGame("term", "term-card-game", arrShaffelCard[n + 1], termList[arrShaffelCard[n + 1]].term));
    }

    el.attachShadow({ mode: 'closed' }).append(document.querySelector(".term-card").content.cloneNode(true));
    document.querySelector(".space-of-adding-cards").append(el);



}

function showGameCard() {
    var randArr = [];
    var curretAns = 0;

    for (var i = 0; i < termList.length; i++) {
        arrShaffelCard.push(i);
        arrShaffelCard.push(i + termList.length);
    }

    arrShaffelCard = shuffle(arrShaffelCard);

    for (var i = 0; i < termList.length * 2; i += 2) {
        createGameCards(i, ...randArr);
    }
    counterSec = setInterval(setTime, 1000);
}

function onClickExplainCard(e) {
    //הוספת מחלקה של צבע אחר

    if (e.target.parentElement.parentElement.querySelector(".game-curr-choose-explain") != null) {
        e.target.parentElement.parentElement.querySelector(".game-curr-choose-explain").classList.remove("game-curr-choose-explain");
    }
    e.target.classList.add("game-curr-choose-explain");

}

function onClickTermCard(e) {
    //הוספת מחלקה של צבע אחר

    if (e.target.parentElement.parentElement.querySelector(".game-curr-choose-term") != null) {
        e.target.parentElement.parentElement.querySelector(".game-curr-choose-term").classList.remove("game-curr-choose-term");
    }
    e.target.classList.add("game-curr-choose-term");
}

/**
 * 
 * @param {Array} arr 
 */
function shuffle(arr) {
    var tmp = arr.slice();
    for (var i = 0; i < arr.length; i++) {
        var index = Math.floor(Math.random() * tmp.length);
        arr[i] = tmp[index];
        tmp = tmp.slice(0, index).concat(tmp.slice(index + 1));
    }
    return arr;
}

var changColor;
var counterCorrectAns = 0;
var totalSec = 0;
var counterSec;

function onClickMatchButton(e) {
    if (counterCorrectAns < termList.length - 1) {
        if (document.querySelector(".game-curr-choose-term") != null && document.querySelector(".game-curr-choose-explain") != null) {
            if (document.querySelector(".game-curr-choose-term").index == document.querySelector(".game-curr-choose-explain").index) {
                //add red color
                document.querySelector(".game-curr-choose-explain").classList.add("game-curr-correct-explain");
                document.querySelector(".game-curr-choose-term").classList.add("game-curr-correct-term");
                //remove yellow color

                document.querySelector(".game-curr-choose-explain").classList.remove("game-curr-choose-explain");
                document.querySelector(".game-curr-choose-term").classList.remove("game-curr-choose-term");

                changColor = setInterval(disaperGameCard, 1000);
                counterCorrectAns++;
            }
            else {
                //add red color
                document.querySelector(".game-curr-choose-explain").classList.add("game-curr-worng-explain");
                document.querySelector(".game-curr-choose-term").classList.add("game-curr-worng-term");
                //remove yellow color

                document.querySelector(".game-curr-choose-explain").classList.remove("game-curr-choose-explain");
                document.querySelector(".game-curr-choose-term").classList.remove("game-curr-choose-term");

                changColor = setInterval(returnTermCard, 1000);
            }
        }
    }
    else {
        //add red color
        document.querySelector(".game-curr-choose-explain").classList.add("game-curr-correct-explain");
        document.querySelector(".game-curr-choose-term").classList.add("game-curr-correct-term");
        //remove yellow color

        document.querySelector(".game-curr-choose-explain").classList.remove("game-curr-choose-explain");
        document.querySelector(".game-curr-choose-term").classList.remove("game-curr-choose-term");

        changColor = setInterval(disaperLastGameCard, 1000);
        // stop stoper
        clearInterval(counterSec);


    }


}

function returnTermCard() {

    document.querySelector(".game-curr-worng-explain").classList.remove("game-curr-worng-explain");
    document.querySelector(".game-curr-worng-term").classList.remove("game-curr-worng-term");

    clearInterval(changColor);
}

function disaperGameCard() {
    document.querySelector(".game-curr-correct-explain").classList.add("disable");
    document.querySelector(".game-curr-correct-term").classList.add("disable");

    document.querySelector(".game-curr-correct-explain").style.visibility = "hidden";
    document.querySelector(".game-curr-correct-term").style.visibility = "hidden";

    document.querySelector(".game-curr-correct-explain").classList.remove("game-curr-correct-explain");
    document.querySelector(".game-curr-correct-term").classList.remove("game-curr-correct-term");

    clearInterval(changColor);
}

function disaperLastGameCard() {
    document.querySelector(".game-curr-correct-explain").classList.add("disable");
    document.querySelector(".game-curr-correct-term").classList.add("disable");

    document.querySelector(".game-curr-correct-explain").style.visibility = "hidden";
    document.querySelector(".game-curr-correct-term").style.visibility = "hidden";

    document.querySelector(".game-curr-correct-explain").classList.remove("game-curr-correct-explain");
    document.querySelector(".game-curr-correct-term").classList.remove("game-curr-correct-term");

    clearInterval(changColor);

    //remove back button
    document.querySelector(".match-button").classList.add("disable");
    document.querySelector(".match-button").style.visibility = "hidden";

    document.querySelector("#congrats").innerHTML = "כל הכבוד!";
    document.querySelector(".game #finish-game").innerHTML = "סיימת את המשחק";
}

function setTime() {
    ++totalSec;
    document.querySelector(".time-title").innerHTML = `${pad(parseInt(totalSec / 60))}:${pad(totalSec % 60)}`;
}

function pad(val) {
    var valString = val + ""
    if (valString.length < 2) {
        return `0${valString}`;
    }
    else {
        return valString;
    }
}

var pressTimer;
function longPress() {

}


function afterClickXExplain() {
    document.querySelector(".big-explain").style.visibility = "hidden";
    document.querySelector(".space-of-adding-cards").classList.remove("disable");
}



