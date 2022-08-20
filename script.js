document.getElementById("generate").addEventListener("click", function () {
    let rand = getRandomNumber();
    setInputValueById('otp', rand);

    // reset
    document.getElementById("user-typed-code").value = "";
    document.getElementById("matched").style.display = "none";
    document.getElementById("mismatched").style.display = "none";
});
document.getElementById("calculator").addEventListener("click", function (event) {
    let value = event.target.innerText;

    if (isNaN(value)) {
        if ('C' == value) {
            document.getElementById("user-typed-code").value = "";
        }
        if ("<" == value) {
            let currentValue = document.getElementById("user-typed-code").value;

            currentValue = currentValue.split("");

            console.log(currentValue);
            currentValue.pop();

            currentValue = currentValue.join("");
            document.getElementById("user-typed-code").value = currentValue;
        }
    } else {
        displayValue("user-typed-code", value);
    }

});
document.getElementById("submit-btn").addEventListener("click", function () {
    const otp = getInputValue("otp");
    const code = getInputValue("user-typed-code");

    if (code === otp) {
        document.getElementById("mismatched").style.display = "none";
        document.getElementById("matched").style.display = "block";
    } else {
        document.getElementById("matched").style.display = "none";
        document.getElementById("mismatched").style.display = "block";
    }
});




