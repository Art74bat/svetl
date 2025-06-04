
let container = document.querySelector('.all_reviews_cards_wrapp');
let btn = document.querySelector('.review_form__btn')
let form = document.forms.my_form;


form.addEventListener('submit', getFormValue);
// btn.addEventListener('click',myAdd);

function getFormValue(){
    event.preventDefault();
    const form = document.forms.my_form,
    name = form.elements.name,
    city = form.elements.city,
    review = form.elements.review;
    const data = {
        name:name.value,
        city:city.value,
        review:review.value,
    };
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
    cardName.textContent = data.name;
    cardTitle.appendChild(cardName);

    let cardCity = document.createElement('span');
    cardCity.className = "all_reviews_card__title_city"; 
    cardCity.textContent = data.city;
    cardTitle.appendChild(cardCity);

    console.log(data);

    let cardText = document.createElement('p');
    cardText.className = "all_reviews_card__descript"; 
    cardText.textContent = data.review;
    card.appendChild(cardText);

    container.appendChild(card);


}


// function myAdd(data){
//     let card = document.createElement('div'); 
//     card.className = "all_reviews_card"; 

//     let cardDate = document.createElement('span');
//     cardDate.className = "all_reviews_card__date"; 
//     cardDate.textContent = '20.05.2025';
//     card.appendChild(cardDate);



//     let cardTitle = document.createElement('h2');
//     cardTitle.className = "all_reviews_card__title"; 
//     card.appendChild(cardTitle);

//     let cardName = document.createElement('span');
//     cardName.className = "all_reviews_card__title_name"; 
//     cardName.textContent = data.name;
//     card.appendChild(cardTitle);

//     let cardCity = document.createElement('span');
//     cardCity.className = "all_reviews_card__title_city"; 
//     cardCity.textContent = data.city;
//     card.appendChild(cardTitle);


   

//     let cardText = document.createElement('p');
//     cardText.className = "all_reviews_card__descript"; 
//     cardText.textContent = data.review;
//     card.appendChild(cardText);

//     container.appendChild(card);
// }







