const form = document.querySelector('form')!;
const nameInputElm = document.getElementById('name') as HTMLInputElement;
const nameErrorElm = nameInputElm.nextElementSibling as HTMLParagraphElement;
const emailInputElm = document.getElementById('email') as HTMLInputElement;
const emailErrorElm = emailInputElm.nextElementSibling as HTMLParagraphElement;
const companyInputElm = document.getElementById('company') as HTMLInputElement;
const companyErrorElm = companyInputElm.nextElementSibling as HTMLParagraphElement;
const titleInputElm = document.getElementById('title') as HTMLInputElement;
const titleErrorElm = titleInputElm.nextElementSibling as HTMLParagraphElement;

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isNameValid = nameInputElm.value.length;
  const isEmailValid = emailInputElm.value.length;
  const isEmailValidFormat = emailRegExp.test(emailInputElm.value);
  const isCompanyValid = companyInputElm.value.length;
  const isTitleValid = companyInputElm.value.length;

  if (isNameValid) {
    nameInputElm.classList.remove('error');
    nameErrorElm.textContent = '';
  } else {
    nameInputElm.classList.add('error');
    nameErrorElm.textContent = 'This field is required';
  }
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
  if (isCompanyValid) {
    companyInputElm.classList.remove('error');
    companyErrorElm.textContent = '';
  } else {
    companyInputElm.classList.add('error');
    companyErrorElm.textContent = 'This field is required';
  }
  if (isTitleValid) {
    titleInputElm.classList.remove('error');
    titleErrorElm.textContent = '';
  } else {
    titleInputElm.classList.add('error');
    titleErrorElm.textContent = 'This field is required';
  }

  if (isNameValid && isEmailValid && isEmailValidFormat && isCompanyValid && isTitleValid) {
    alert(`Thank you ${nameInputElm.value} for your submission.`);
  }
});
