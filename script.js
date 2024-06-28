const inputNum = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const outputNum = document.querySelector("#output");
const outputDiv = document.querySelector(".final-output");

convertBtn.addEventListener("click", () => {
    const input = inputNum.value.trim();
    const strToNum = parseInt(inputNum.value);
    const existingSpan = outputDiv.querySelector("span");

    if (existingSpan) {
        existingSpan.remove();
    }

    // Validation checks
    if (inputNum.value === "") {
        outputNum.textContent = "Please enter a valid number";
        return;
    }

    // Number validation
    const numberPattern = /^-?[0-9]+$/;
    if (!numberPattern.test(input)) {
        outputNum.textContent = "Please enter only numbers";
        return;
    }

    // Range validation
    if (strToNum <= 0) {
        outputNum.textContent =
            "Please enter a number greater than or equal to 1";
        return;
    } else if (strToNum > 3999) {
        outputNum.textContent =
            "Please enter a number less than or equal to 3999";
        return;
    }

    // Conversion
    const resNum = numeralConverter(strToNum);

    outputNum.textContent = "Output:";
    const spanEl = document.createElement("span");
    spanEl.textContent = `${resNum}`;
    outputDiv.appendChild(spanEl);
});

const numeralConverter = (num) => {
    if (num <= 0) {
        return false;
    } else if (num >= 4000) {
        return false;
    }

    const numerals = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I",
    };

    let romanizedNum = "";

    const numberKeys = Object.keys(numerals);

    for (let i = numberKeys.length - 1; i >= 0; i--) {
        const key = numberKeys[i];
        while (key <= num) {
            romanizedNum += numerals[key];
            num -= key;
        }
    }

    return romanizedNum;
};
