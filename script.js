// Get the ARRAY of cards using spread operator
const cards = [...document.querySelectorAll('.card')];

// Expand each card on click
cards.forEach(card => {
    card.addEventListener('click', e => {
        // expand card if it's small
        if(![...card.classList].includes('fullScreen')) {
            card.classList.add('fullScreen');
            e.stopPropagation();
        }
    });

    // shrink if click event outside of card is registered
    window.addEventListener('click', e => {
        if(e.target !== card)
            card.classList.remove('fullScreen');
    });

    // shrink card when X is clicked
   card.querySelector('.card-closer').addEventListener('click', e => {
    card.classList.remove('fullScreen');
    e.stopPropagation();
   });
});