const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
};

checkBtn.addEventListener('click', () => {
     if(textInput.value === ""){
        alert("Please input a value")
     }  
     
     result.textContent = isPalindrome(textInput.value) ? `${textInput.value} is a palindrome` : `${textInput.value} is not a palindrome`;

     
})