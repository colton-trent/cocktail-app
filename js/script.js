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
const $similar = $('#similar');

//When $input is pressed
$('form').on('submit', handleSubmit);
$('#randomBtn').on('click', randomFn);


//define functions

function randomFn(evt) {
    evt.preventDefault();
    $.ajax(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(function (randomData) {
        console.log('Drink', randomData);
        $drinkTitle.text(`${randomData.drinks[0].strDrink}`);
        $directions.text(`${randomData.drinks[0].strInstructions}`);
        $imgSpace.html(`<img src="${randomData.drinks[0].strDrinkThumb}">`);
        $similar.html('');
        let i = 1;
        while (i <=3 && !!randomData.drinks[i] == true) {
            $similar.append(`<a href=# class="subDrink" id=subDrink${[i]}>${randomData.drinks[i].strDrink}</a>`);
            i++;
        };
        if (randomData.drinks[0].strGlass == "Cocktail glass") {
            $glassType.html(`<img src="/mycollection/svg/001-cocktail.svg" class="glass">`);
        } else if (randomData.drinks[0].strGlass == "Highball glass") {
            $glassType.html('<img src="/mycollection/svg/010-ice.svg" class="glass">');
        } else if (randomData.drinks[0].strGlass == "Old-fashioned glass") {
            $glassType.html('<img src="/mycollection/svg/009-whiskey.svg" class="glass">')
        } else if (randomData.drinks[0].strGlass == "Copper Mug") {
            $glassType.html('<img src="/mycollection/svg/mug.png" class="glass">')
        } else if (randomData.drinks[0].strGlass == "Whiskey sour glass") {
            $glassType.html(`<img src="/mycollection/svg/007-cocktail-2.svg" class="glass">`)
        } else {
            $glassType.html(`<img src="/mycollection/svg/008-drink.svg" class="glass">`);
        }
    });
};

//Search Button - needs refactoring into a global scope.
function handleSubmit(evt) {
    evt.preventDefault();
    const $term = $input.val();
    $.ajax(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${$term}`).then(function (data) {
        console.log('Drink', data);
        $drinkTitle.text(`${data.drinks[0].strDrink}`);
        $directions.text(`${data.drinks[0].strInstructions}`);
        $imgSpace.html(`<img src="${data.drinks[0].strDrinkThumb}">`);
        $similar.html('');
        let i = 1;
        while (i <=3 && !!data.drinks[i] == true) {
            $similar.append(`<a href=# class="subDrink" id=subDrink${[i]}>${data.drinks[i].strDrink}</a>`);
            i++;};
        let v = 1;
        $ingredients.append(data.drinks[0].strIngredient1);
        // console.log(`data.drinks[0].strIngredient` + v)
            
        // while (data.drinks[0].strIngredient + v == true) {
            // let ingSrch = data.drinks[0].strIngredient + v;
            // $ingredients.append(`<p>${data.drinks[0].strIngredient + v}</p><br />`);
        
        if (data.drinks[0].strGlass == "Cocktail glass") {
            $glassType.html(`<img src="/mycollection/svg/001-cocktail.svg" class="glass">`);
        } else if (data.drinks[0].strGlass == "Highball glass") {
            $glassType.html('<img src="/mycollection/svg/010-ice.svg" class="glass">');
        } else if (data.drinks[0].strGlass == "Old-fashioned glass") {
            $glassType.html('<img src="/mycollection/svg/009-whiskey.svg" class="glass">')
        } else if (data.drinks[0].strGlass == "Copper Mug") {
            $glassType.html('<img src="/mycollection/svg/mug.png" class="glass">')
        } else if (data.drinks[0].strGlass == "Whiskey sour glass") {
            $glassType.html(`<img src="/mycollection/svg/007-cocktail-2.svg" class="glass">`)
        } else {
            glassType.html(`<img src="/mycollection/svg/008-drink.svg" class="glass">`);
        }
    });
};

// Come back when you want to figure out global scoping within the function (IPO?
// function render() {
    //     $drinkTitle.text(`${data.drinks[0].strDrink}`)
    // }
    
    //Needs complete refactoring for function
    //Needs for each methods for ingredient and amount strings
    //needs for each for similar items on the bottom of the screen-- needs to work upon clicking them.
    //Should the field clear for the user upon submit?
    //needs CSS
    // bonus: animations for menu update
    //Need a favicon asset for: collins glass,