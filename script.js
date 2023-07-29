const pwd = document.getElementById('password');
const pwdError = document.querySelector('#password + span');
const pwdConfirmation = document.getElementById('confirmation');
const confirmationError = document.querySelector('#confirmation + span');

//confirm password after user stops typing. 
let timer;
const waitTime = 1000;

pwdConfirmation.addEventListener('keyup', () => {
  timer = setTimeout(() => {
    comparePwd();
  }, waitTime);
});

pwdConfirmation.addEventListener('keypress', () => {
    clearTimeout(timer); 
  });

function comparePwd() {
if(pwdConfirmation.value) {
    if(pwd.value != pwdConfirmation.value) {
        confirmationError.style.display = 'block';
        pwdConfirmation.style.border = "1px solid rgb(200, 0, 0)"
        confirmationError.style.color = 'rgb(200, 0, 0)';
        confirmationError.innerHTML = 'Password does not match'
        return false
    } else {
            confirmationError.style.display = 'block'
            pwdConfirmation.style.border = "1px solid rgb(18, 176, 0)";
            confirmationError.style.color = 'rgb(18, 176, 0)'
            confirmationError.innerHTML = "It's a match!"
            return true
        }
} else {
    confirmationError.style.display = 'none'
}
}







/*

https://stackoverflow.com/questions/70703057/how-do-i-check-to-see-is-password-matches-confirm-password-before-user-is-allowe

https://bobbyhadz.com/blog/detect-when-user-stops-typing-in-javascript

https://dev.to/eaich/how-to-detect-when-the-user-stops-typing-3cm1

*/