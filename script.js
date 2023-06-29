const submitBtnHeader = document.getElementById('submitBtnHeader');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
function verifyCheckbox() {
  submitBtn.disabled = !agreement.checked;
}
const submitAlert = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
};
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const charLimit = 500;
function charCount() {
  const inputTextareaLength = textarea.value.length;
  const remainig = charLimit - inputTextareaLength;
  counter.textContent = remainig;
}
textarea.addEventListener('input', charCount);
// trye switch
// const switchForm = () => {
//   const valueName = document.getElementById('input-name').value;
//   const form = document.getElementById('evaluation-form');
//   const newDiv = document.createElement('div');
//   const mainForm = document.getElementById('main-form');
//   newDiv.id = 'form-data';
//   form.innerHTML = '';
//   const newParagrafoName = document.createElement('p');
//   newParagrafoName.innerHTML = `Nome: ${valueName}`;
//   newDiv.appendChild(newParagrafoName);
//   // mainForm.appendChild(newDiv);
//   const valueEmail = document.getElementById('input-email').value;
//   const newParagrafoEmail = document.createElement('p');
//   newParagrafoEmail.innerHTML = `Email: ${valueEmail}`;
//   newDiv.appendChild(newParagrafoEmail);
//   mainForm.appendChild(newDiv);
// };
window.onload = () => {
  submitBtn.disabled = true;
  submitBtnHeader.addEventListener('click', submitAlert);
  agreement.addEventListener('change', verifyCheckbox);
  // submitBtn.addEventListener('click', switchForm);
};

