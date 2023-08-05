var form = document.querySelector('form');
var nameInputElm = document.getElementById('name');
var nameErrorElm = nameInputElm.nextElementSibling;
var emailInputElm = document.getElementById('email');
var emailErrorElm = emailInputElm.nextElementSibling;
var companyInputElm = document.getElementById('company');
var titleInputElm = document.getElementById('title');
var messageInputElm = document.getElementById('message');
var messageErrorElm = messageInputElm.nextElementSibling;
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var formSubmitted = false;
function validate(evt) {
    if (formSubmitted) {
        var elm = evt.target;
        switch (elm.name) {
            case 'name':
                checkIsNameValid();
                break;
            case 'email':
                checkIsEmailValid();
                break;
            case 'message':
                checkIsMessageValid();
                break;
        }
    }
}
function checkIsNameValid() {
    var isNameValid = nameInputElm.value.length;
    if (isNameValid) {
        nameInputElm.classList.remove('error');
        nameErrorElm.textContent = '';
    }
    else {
        nameInputElm.classList.add('error');
        nameErrorElm.textContent = 'This field is required';
    }
}
function checkIsEmailValid() {
    var isEmailValid = emailInputElm.value.length;
    var isEmailValidFormat = emailRegExp.test(emailInputElm.value);
    if (isEmailValid && isEmailValidFormat) {
        emailInputElm.classList.remove('error');
        emailErrorElm.textContent = '';
    }
    else if (!isEmailValid) {
        emailInputElm.classList.add('error');
        emailErrorElm.textContent = 'This field is required';
    }
    else {
        emailInputElm.classList.add('error');
        emailErrorElm.textContent = 'Please use a valid email address';
    }
}
function checkIsMessageValid() {
    var isMessageValid = messageInputElm.value.length;
    if (isMessageValid) {
        messageInputElm.classList.remove('error');
        messageErrorElm.textContent = '';
    }
    else {
        messageInputElm.classList.add('error');
        messageErrorElm.textContent = 'This field is required';
    }
}
nameInputElm.addEventListener('input', validate);
emailInputElm.addEventListener('input', validate);
messageInputElm.addEventListener('input', validate);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    formSubmitted = true;
    checkIsNameValid();
    checkIsEmailValid();
    checkIsMessageValid();
    var isNameValid = nameInputElm.value.length;
    var isEmailValid = emailInputElm.value.length;
    var isEmailValidFormat = emailRegExp.test(emailInputElm.value);
    var isMessageValid = messageInputElm.value.length;
    if (isNameValid && isEmailValid && isEmailValidFormat && isMessageValid) {
        var confirmed = confirm("Thank you ".concat(nameInputElm.value, " for your submission."));
        if (confirmed) {
            nameInputElm.value = '';
            emailInputElm.value = '';
            companyInputElm.value = '';
            titleInputElm.value = '';
            messageInputElm.value = '';
            formSubmitted = false;
        }
    }
});
