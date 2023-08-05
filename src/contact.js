var form = document.querySelector('form');
var nameInputElm = document.getElementById('name');
var nameErrorElm = nameInputElm.nextElementSibling;
var emailInputElm = document.getElementById('email');
var emailErrorElm = emailInputElm.nextElementSibling;
var companyInputElm = document.getElementById('company');
var companyErrorElm = companyInputElm.nextElementSibling;
var titleInputElm = document.getElementById('title');
var titleErrorElm = titleInputElm.nextElementSibling;
var messageInputElm = document.getElementById('message');
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var isNameValid = nameInputElm.value.length;
    var isEmailValid = emailInputElm.value.length;
    var isEmailValidFormat = emailRegExp.test(emailInputElm.value);
    var isCompanyValid = companyInputElm.value.length;
    var isTitleValid = companyInputElm.value.length;
    if (isNameValid) {
        nameInputElm.classList.remove('error');
        nameErrorElm.textContent = '';
    }
    else {
        nameInputElm.classList.add('error');
        nameErrorElm.textContent = 'This field is required';
    }
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
    if (isCompanyValid) {
        companyInputElm.classList.remove('error');
        companyErrorElm.textContent = '';
    }
    else {
        companyInputElm.classList.add('error');
        companyErrorElm.textContent = 'This field is required';
    }
    if (isTitleValid) {
        titleInputElm.classList.remove('error');
        titleErrorElm.textContent = '';
    }
    else {
        titleInputElm.classList.add('error');
        titleErrorElm.textContent = 'This field is required';
    }
    if (isNameValid && isEmailValid && isEmailValidFormat && isCompanyValid && isTitleValid) {
        var confirmed = confirm("Thank you ".concat(nameInputElm.value, " for your submission."));
        if (confirmed) {
            nameInputElm.value = '';
            emailInputElm.value = '';
            companyInputElm.value = '';
            titleInputElm.value = '';
            messageInputElm.value = '';
        }
    }
});
