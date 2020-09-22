document.addEventListener("DOMContentLoaded", function () {
    var screenBox = document.querySelector(".screenBox");
    var buttonNumber = document.querySelectorAll(".btnNumb");
    var buttonEqual = document.querySelector("#equal");
    var buttonCorrection = document.querySelector("#corrbtn");
    var buttonReset = document.querySelector("#rbtn");
    var buttonPoint = document.querySelector("#btnPoint");
    var buttonMultipli = document.querySelector("#btnMultipli");
    var buttonSoustract = document.querySelector("#btnSoustract");
    var buttonAddition = document.querySelector("#btnAddition");
    var buttonDivision = document.querySelector("#btnDivision");



    for (var button of buttonNumber) {//afficher les nombres
        button.addEventListener("click", function () {
            screenBox.textContent = screenBox.textContent + this.textContent;
        })
    };

    buttonSoustract.addEventListener("click", function () {
        if ((getLastLetter(screenBox.textContent)) === "-") return;
        else {
            screenBox.textContent = screenBox.textContent + this.textContent;
        }
    })

    buttonAddition.addEventListener("click", function () {
        if (isOperator(getLastLetter(screenBox.textContent))) return;
        else {
            screenBox.textContent = screenBox.textContent + this.textContent;
        }
    })

    buttonMultipli.addEventListener("click", function () {
        if (isOperator(getLastLetter(screenBox.textContent))) return;
        else {
            screenBox.textContent = screenBox.textContent + this.textContent;
        }
    })

    buttonDivision.addEventListener("click", function () {
        if (isOperator(getLastLetter(screenBox.textContent))) return;
        else {
            screenBox.textContent = screenBox.textContent + this.textContent;
        }
    })

    buttonEqual.addEventListener("click", function () {//soumettre le calcul

        if (screenBox.textContent === "") return;

        if (isOperator(getLastLetter(screenBox.textContent))) {
            return;
        }
        var text = replaceAll("x", "*", screenBox.textContent);

        var result = eval(text);
        result = Math.round(result * 100000) / 100000;
        screenBox.textContent = result;


    });
    buttonReset.addEventListener("click", function () {
        screenBox.textContent = "";
    });
    buttonCorrection.addEventListener("click", function () {
        screenBox.textContent = removeLastLetter(screenBox.textContent);

    });

    buttonPoint.addEventListener("click", function () {

        var newString = replaceAll("x", "+", screenBox.textContent);
        newString = replaceAll("/", "+", newString);
        newString = replaceAllMoins("-", "+", newString);

        arrayString = newString.split("+");
        // for (var arrayNumbers of arrayString) {
        if (arrayString[arrayString.length - 1].includes(".")) return;
        // }


        screenBox.textContent = screenBox.textContent + this.textContent;

    });

});









