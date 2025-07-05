function generatePassword() {
    let password = "";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+[]{}|;:,.<>?";

    const passLength = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    let charPool = "";
    if(includeUppercase) {
        charPool += upperCase;
    }
    if(includeLowercase) {
        charPool += lowerCase;
    }
    if(includeNumbers) {
        charPool += number;
    }
    if(includeSymbols) {
        charPool += symbol;
    }

    if (charPool === "") {
        alert ("Please select atleast one character type.");
        return;
    }

    if(includeUppercase) password += upperCase[Math.floor(Math.random() * upperCase.length)];
    if(includeLowercase) password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    if(includeNumbers) password += number[Math.floor(Math.random() * number.length)];
    if(includeSymbols) password += symbol[Math.floor(Math.random() * symbol.length)];

    while (password.length < passLength) {
        password += charPool[Math.floor(Math.random() * charPool.length)];
    }

    document.getElementById("password").value = password;

}


function copyPassword() {
    const passswordField = document.getElementById("password");
    if (passswordField.value=== "") {
        alert("Please generate a password first.");
        return;
    }
    passswordField.select();
    document.execCommand("copy");
}
