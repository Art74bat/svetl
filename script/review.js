
let container = document.querySelector('.all_reviews_cards_wrapp');
let btn = document.querySelector('.review_form__btn')
let form = document.forms.my_form;
let message = document.querySelector('.message')

form.addEventListener('submit', function(){
    if(ValidName() && ValidCity() && ValidReview()){
        getFormValue();
        message.textContent = '';
    }else{
        event.preventDefault();
    }
});

function ValidName() {
    let re = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
    let myName = form.elements.my_name.value;
    let valid = re.test(myName);
    if(!valid){
       message.textContent = 'Проверьте введённое имя!';
    }
    return valid;
} 
function ValidCity() {
    let re = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
    let myCity = form.elements.city.value;
    let valid = re.test(myCity);
    if(!valid){
       message.textContent = 'Проверьте название города!';
    }
    return valid;
} 
function ValidReview() {
    let re = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
    let myReview = form.elements.review.value;
    let valid = re.test(myReview);
    if(!valid){
       message.textContent = 'Некорректные символы в тексте отзыва!';
    }
    return valid;
} 

function getFormValue(){
    event.preventDefault();
    my_name = form.elements.my_name,
    city = form.elements.city,
    review = form.elements.review;
    const data = {
        name:my_name.value,
        city:city.value,
        review:review.value,
    };

    // console.log(data);

    // создать карту отзыва-------------------------


    let card = document.createElement('div'); 
    card.className = "all_reviews_card"; 

    let cardDate = document.createElement('span');
    cardDate.className = "all_reviews_card__date"; 
    cardDate.textContent = '20.05.2025';
    card.appendChild(cardDate);



    let cardTitle = document.createElement('h2');
    cardTitle.className = "all_reviews_card__title"; 
    card.appendChild(cardTitle);

    let cardName = document.createElement('span');
    cardName.className = "all_reviews_card__title_name"; 
    cardName.textContent = data.name ;
    cardTitle.appendChild(cardName);

    let cardCity = document.createElement('span');
    cardCity.className = "all_reviews_card__title_city"; 
    cardCity.textContent = "г."+data.city;
    cardTitle.appendChild(cardCity);

    let cardText = document.createElement('p');
    cardText.className = "all_reviews_card__descript"; 
    cardText.textContent = data.review;
    card.appendChild(cardText);

    container.appendChild(card);
    
    form.reset();
}







