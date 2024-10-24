const rangeofCharacters = document.getElementById("rangeOfCharacters");
const numberOfCharacters = document.getElementById("numberOfCharacters");
const form = document.getElementById("passwordGeneratorForm");

rangeofCharacters.addEventListener("input", (e) => {
    const value = e.target.value;
    numberOfCharacters.value = value;
});

numberOfCharacters.addEventListener("input", (e) => {
    const value = e.target.value;
    rangeofCharacters.value = value;
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const characterAmount = parseInt(numberOfCharacters.value);
    const includeUppercase = form.includeUppercase.checked;
    const includeNumbers = form.includeNumbers.checked;
    const includeSymbols = form.includeSymbols.checked;
    let verifiedPassword = false;


    while (verifiedPassword === false) {
        let password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
        checkPassword(password);
        if(checkPassword(password) === true) {
            verifiedPassword = true;
            document.getElementById('password').innerText = password
        }
    }
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {


    let characters = "abcdefghijklmnopqrstuvwxyz";


    if (includeUppercase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
        characters += "0123456789";
    }
    if (includeSymbols) {
        characters += "!@#$%^&*(){}[]=<>/,.";
    }
    let password = "";
    for (let i = 0; i < characterAmount; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;


}

function checkPassword(password) {
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*(){}[]=<>/,.";
    var upperCaseIncluded = false;
    var numbersIncluded = false;
    var symbolsIncluded = false;
    for (let i = 0; i < password.length; i++) {
        for (let j = 0; j < upperCase.length; j++) {
            if (password.charAt(i) === upperCase[j]) {
                upperCaseIncluded = true;
            }
        }
        for (let j = 0; j < numbers.length; j++) {
            if (password.charAt(i) === numbers[j]) {
                numbersIncluded = true;
            }

        }
        for (let j = 0; j < symbols.length; j++) {
            if (password.charAt(i) === symbols[j]) {
                symbolsIncluded = true;
            }

        }
    }
    if ((upperCaseIncluded && form.includeUppercase.checked)|| numbersIncluded && form.includeNumbers.checked || symbolsIncluded && form.includeSymbols.checked ) {
        return true;

    } else if(!form.includeUppercase.checked && !form.includeNumbers.checked && !form.includeSymbols.checked) {
        return true;
    } else {
        return false;
    }
}


