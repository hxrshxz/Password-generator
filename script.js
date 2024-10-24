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


    document.getElementById('password').innerText = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);


})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {


    let characters = "abcdefghijklmnopqrstuvwxyz";
    let password = "";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*(){}[]=<>/,.";


    for (let i = 0; i < characterAmount; i++) {
        if (password.length < characterAmount) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        if (includeUppercase && password.length < characterAmount) {
            password += upperCase[Math.floor(Math.random() * upperCase.length)];
        }
        if (includeNumbers && password.length < characterAmount) {
            password += numbers[Math.floor(Math.random() * numbers.length)];
        }
        if (includeSymbols && password.length < characterAmount) {
            password += symbols[Math.floor(Math.random() * symbols.length)];
        }
    }

    return password;
}

