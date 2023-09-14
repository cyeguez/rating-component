let buttoncalification = document.querySelectorAll(
  ".rating-state-start__calification "
);
let buttonSubmit= document.querySelector('.rating-state-start__button');
let ratingStart= document.querySelector('.rating-sate-start');
let ratingEnd= document.querySelector('.rating-state-end');
let locationValue= document.querySelector('.rating-state-end__result--select-value');

buttoncalification.forEach((button) => {
  button.addEventListener('click', (e)=>{
    let selectionValue=e.target.innerText;
    if(selectionValue > 0 && selectionValue<=5 ){
      buttonSubmit.addEventListener('click', ()=>{
        locationValue.innerHTML= selectionValue;
        ratingStart.style.display="none";
        ratingEnd.style.display="flex";

      })

    }
  })
});
