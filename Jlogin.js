const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInput([username, password]);

    // if(email.value===''){
    //     showError(email,"กรุณาป้อน email");
    // }else {
    //     showSuccess(email);
    // }
    // checkPassword(password1,password2);
    // checkInputLength(username,5,10);
    // checkInputLength(password1,5,1);
});
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function checkInput(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, 'กรุณาป้อนข้อมูล');
        } else {
            showSuccess(input);
        }
    })
}
function getInputCase(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
