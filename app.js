const selectedButton = document.querySelectorAll('.buttons > button');
const submitButton = document.getElementById('submit');
const ratingCard = document.getElementById('rating');
const thankyouCard = document.getElementById('thank-you');
let selectedValue = 0;
let ratingObtained = document.getElementById('rating-value');

selectedButton.forEach(rating => rating.addEventListener('click' , ()=>{
        setColorToNormal();
        selectedValue = rating.getAttribute('data-id');
        rating.setAttribute('style', 'background-color:var(--MediumGrey)');
}));

submitButton.addEventListener('click', ()=>{
    if(selectedValue !== 0){
        console.log(ratingCard);
        ratingCard.setAttribute('data-visible','false');
        thankyouCard.setAttribute('data-visible','true');
        ratingObtained.innerHTML =selectedValue;
    }
})

function setColorToNormal(){
    for(let i=0;i<selectedButton.length;i++){
        selectedButton[i].setAttribute('style','background-color:"var(--VeryDarkBlue)');
    }
}