const pwd = document.getElementById('password');
const pwdError = document.querySelector('#password + span');
const pwdConfirmation = document.getElementById('confirmation');
const confirmationError = document.querySelector('#confirmation + span');


let timer;
const waitTime = 1000;


pwdConfirmation.addEventListener('keyup', () => {
  timer = setTimeout(() => {
    comparePwd();
  }, waitTime);
});

pwdConfirmation.addEventListener('keypress', () => {
    clearTimeout(timer); //what is this function? 
    comparePwd();

  });


function comparePwd() {
if (pwdConfirmation.value) {
    if (pwd.value != pwdConfirmation.value) {
        confirmationError.style.display = 'block';
        pwdConfirmation.style.border = "1px solid rgb(200, 0, 0)"
        // e.preventDefault()
        // return false
    } else {
            confirmationError.style.display = 'block'
            pwdConfirmation.style.border = "1px solid rgb(18, 176, 0)";
            confirmationError.style.color = 'rgb(18, 176, 0)'
            confirmationError.innerHTML = "It's a match!"
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