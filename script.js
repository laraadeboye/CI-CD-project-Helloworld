// Get references to the buttons

const eatDrinkButtons = document.querySelectorAll('.eatDrink, .noEatDrink');
const hikeStrollButtons = document.querySelectorAll('.hikeStroll, .noHikeStroll');

    // Add event listeners to the buttons
    eatDrinkButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('eatDrink')) {
                alert('Enjoy your coffee, water, or snacks!');
            } else {
                alert('Oh no! Maybe next time.');
            }
        });
    });

    hikeStrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('hikeStroll')) {
                alert('Great choice! Enjoy your hike or stroll.');
            } else {
                alert('Too bad! Maybe another time.');
            }
        });
    });