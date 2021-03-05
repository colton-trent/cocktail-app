//target DOM elements
const $drinkTitle = $('#drinkTitle');
const $glassType = $('#glassType');
const $ingredients = $('#ingredients');
const $directions = $('#directions');
const $subDrink1 = $('#subDrink1');
const $subDrink2 = $('#subDrink2');
const $subDrink3 = $('#subDrink3');
const $imgSpace = $('#imgSpace');
const $input = $('input[type="text"]');

//When $input is pressed
$('form').on('submit', handleSubmit);

//define functions
function handleSubmit(evt) {
    evt.preventDefault();
    const $term = $input.val();
    $.ajax(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${$term}`).then(function (data) {
        console.log('Drink', data);
        $drinkTitle.text(`${data.drinks[0].strDrink}`);
        $directions.text(`${data.drinks[0].strInstructions}`);
        $imgSpace.html(`<img src="${data.drinks[0].strDrinkThumb}">`);
        $subDrink1.text(`${data.drinks[1].strDrink}`);
        $subDrink2.text(`${data.drinks[2].strDrink}`);
        $subDrink3.text(`${data.drinks[3].strDrink}`);
});
};

// Come back when you want to figure out global scoping within the function (IPO?
// function render() {
//     $drinkTitle.text(`${data.drinks[0].strDrink}`)
// }


//Needs for each methods for ingredient and amount strings
//needs for each for similar items on the bottom of the screen
//random button
//need a folder for favicons
//Should the field clear for the user upon submit?
//needs CSS
// bonus: animations for menu update