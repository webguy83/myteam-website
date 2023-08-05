const form = document.querySelector('form')!;
const nameInputElm = document.getElementById('name') as HTMLInputElement;
const nameErrorElm = nameInputElm.nextElementSibling as HTMLParagraphElement;
const emailInputElm = document.getElementById('email') as HTMLInputElement;
const emailErrorElm = emailInputElm.nextElementSibling as HTMLParagraphElement;
const companyInputElm = document.getElementById('company') as HTMLInputElement;
const titleInputElm = document.getElementById('title') as HTMLInputElement;
const messageInputElm = document.getElementById('message') as HTMLTextAreaElement;
const messageErrorElm = messageInputElm.nextElementSibling as HTMLParagraphElement;

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let formSubmitted = false;

function validate(evt: Event) {
  if (formSubmitted) {
    const elm = evt.target as HTMLInputElement | HTMLTextAreaElement;
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
  const isNameValid = nameInputElm.value.length;
  if (isNameValid) {
    nameInputElm.classList.remove('error');
    nameErrorElm.textContent = '';
  } else {
    nameInputElm.classList.add('error');
    nameErrorElm.textContent = 'This field is required';
  }
}

function checkIsEmailValid() {
  const isEmailValid = emailInputElm.value.length;
  const isEmailValidFormat = emailRegExp.test(emailInputElm.value);
  if (isEmailValid && isEmailValidFormat) {
    emailInputElm.classList.remove('error');
    emailErrorElm.textContent = '';
  } else if (!isEmailValid) {
    emailInputElm.classList.add('error');
    emailErrorElm.textContent = 'This field is required';
  } else {
    emailInputElm.classList.add('error');
    emailErrorElm.textContent = 'Please use a valid email address';
  }
}

function checkIsMessageValid() {
  const isMessageValid = messageInputElm.value.length;
  if (isMessageValid) {
    messageInputElm.classList.remove('error');
    messageErrorElm.textContent = '';
  } else {
    messageInputElm.classList.add('error');
    messageErrorElm.textContent = 'This field is required';
  }
}

nameInputElm.addEventListener('input', validate);
emailInputElm.addEventListener('input', validate);
messageInputElm.addEventListener('input', validate);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formSubmitted = true;

  checkIsNameValid();
  checkIsEmailValid();
  checkIsMessageValid();

  const isNameValid = nameInputElm.value.length;
  const isEmailValid = emailInputElm.value.length;
  const isEmailValidFormat = emailRegExp.test(emailInputElm.value);
  const isMessageValid = messageInputElm.value.length;

  if (isNameValid && isEmailValid && isEmailValidFormat && isMessageValid) {
    const confirmed = confirm(`Thank you ${nameInputElm.value} for your submission.`);
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
