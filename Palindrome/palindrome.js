const userInput = document.getElementById('text-input');
const result = document.getElementById('result');
function isPalindrome(string) {
    
    string = string.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
        if (string === '') {
            alert('Please input a value');
            return;
        }

    return string === string.split('').reverse().join('');
}

function checkPalindrome() {
    let userInput = document.getElementById('text-input').value;
    let result = document.getElementById('result');

    if (isPalindrome(userInput)) {
        result.textContent = userInput + " is a palindrome!";
    } else {
        result.textContent = userInput + " is not a palindrome.";
    }
}
