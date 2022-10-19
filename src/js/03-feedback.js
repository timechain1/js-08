import throttle from 'lodash.throttle';
const CHAIN_KEY = "feedback-form-state";
const ref = { form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea')};

ref.form.addEventListener('submit', onPatternSubmit);
ref.textarea.addEventListener('input', throttle(onChangeLocalStorage, 500));
populateTextarea();

function onPatternSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
localStorage.removeItem(CHAIN_KEY);    
}

function onChangeLocalStorage(evt) {
    const message = evt.target.value;
    localStorage.setItem(CHAIN_KEY, message);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(CHAIN_KEY);

    if(savedMessage) {
        ref.textarea.value = savedMessage
    }
}