const form_btn = document.querySelector('.form__btn');

function ValidPhone() {

    let re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    let myPhone = document.querySelector('.form__input_tel').value;
    let valid = re.test(myPhone);
    if (valid) {output = ''}
    else {output = 'Номер телефона введен неправильно!'};
    document.querySelector('.message').innerHTML=output;
    return valid;
} 
function ValidName() {

    let re = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
    let myName = document.querySelector('.form__input_text').value;
    let valid = re.test(myName);
    if (valid) {output = ''}
    else {output = 'Проверьте введённое имя!'};
    document.querySelector('.message').innerHTML=output;
    return valid;
} 

form_btn.addEventListener('click', ValidPhone);
form_btn.addEventListener('click', ValidName);