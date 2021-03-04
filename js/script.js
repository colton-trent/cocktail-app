//target DOM elements
const $drinkTitle = $('#drinkTitle');
const $glassType = $('#glassType');
const $ingredients = $('#ingredients');
const $directions = $('#directions');
const $subDrink1 = $('#subDrink1');
const $subDrink2 = $('#subDrink2');
const $subDrink3 = $('subDrink3');
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
});
}
// Come back when you want to figure out global scoping within the function (IPO?
// function render() {
//     $drinkTitle.text(`${data.drinks[0].strDrink}`)
// }
