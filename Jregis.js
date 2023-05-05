const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkInput([firstname,lastname,email,username,password,password1]);
    
    if(email.value===''){
        showError(email,"กรุณาป้อน email");
    }else {
        showSuccess(email);
    }
    checkPassword(password,password1);
    checkInputLength(username,5,10);
    checkInputLength(password,5,12);
});
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerText=message;
}
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}
function checkInput(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,'กรุณาป้อนข้อมูล');
        }else{
            showSuccess(input);
        }
    })
}
function getInputCase(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
function checkPassword(password,password1){
    if(password.value !== password1.value){
        showError(password1, 'รหัสผ่านไม่ตรงกัน')
    }
}
function checkInputLength(input,min,max){
    if(input.value.length<=min){
        showError(input,'กรุณาป้อนชื่อข้อมูลมากกว่า 5 ตัวอักษร');
    }else if(input.value.length>max){
        showError(input,'กรุณาป้อนชื่อข้อมูลต้องไม่เกิน 10 ตัวอักษร');
    }else{
        showSuccess(input);
    }
}
