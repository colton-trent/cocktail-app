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
    $.ajax(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(function (data) {
        console.log('Drink', data);
        $drinkTitle.text(`${data.drinks[0].strDrink}`);
        $directions.text(`${data.drinks[0].strInstructions}`);
        $imgSpace.html(`<img src="${data.drinks[0].strDrinkThumb}">`);
        $similar.html('');
        let i = 1;
        while (i <=3 && !!data.drinks[i] == true) {
            $similar.append(`<a href=# class="subDrink" id=subDrink${[i]}>${data.drinks[i].strDrink}</a>`);
            i++};
            $ingredients.html('');
            if (!!data.drinks[0].strIngredient1 == true) {
                $ingredients.append(`<p>${data.drinks[0].strMeasure1} ${data.drinks[0].strIngredient1}</p>`);
                if (!!data.drinks[0].strIngredient2 == true) {
                    $ingredients.append(`<p>${data.drinks[0].strMeasure2} ${data.drinks[0].strIngredient2}</p>`);
                    if (!!data.drinks[0].strIngredient3 == true) {
                        $ingredients.append(`<p>${data.drinks[0].strMeasure3} ${data.drinks[0].strIngredient3}</p>`);
                        if (!!data.drinks[0].strIngredient4 == true) {
                            $ingredients.append(`<p>${data.drinks[0].strMeasure4} ${data.drinks[0].strIngredient4}</p>`);
                            if (!!data.drinks[0].strIngredient5 == true) {
                                $ingredients.append(`<p>${data.drinks[0].strMeasure5} ${data.drinks[0].strIngredient5}</p>`);
                                if (!!data.drinks[0].strIngredient6 == true) {
                                    $ingredients.append(`<p>${data.drinks[0].strMeasure6} ${data.drinks[0].strIngredient6}</p>`);
                                    if (!!data.drinks[0].strIngredient7 == true) {
                                        $ingredients.append(`<p>${data.drinks[0].strMeasure7} ${data.drinks[0].strIngredient7}</p>`);
                                        if (!!data.drinks[0].strIngredient8 == true) {
                                            $ingredients.append(`<p>${data.drinks[0].strMeasure8} ${data.drinks[0].strIngredient8}</p>`);
                                            if (!!data.drinks[0].strIngredient9 == true) {
                                                $ingredients.append(`<p>${data.drinks[0].strMeasure9} ${data.drinks[0].strIngredient9}</p>`);
                                                if (!!data.drinks[0].strIngredient10 == true) {
                                                    $ingredients.append(`<p>${data.drinks[0].strMeasure10} ${data.drinks[0].strIngredient10}</p>`);
                                                    if (!!data.drinks[0].strIngredient11 == true) {
                                                        $ingredients.append(`<p>${data.drinks[0].strMeasure11} ${data.drinks[0].strIngredient11}</p>`);
                                                        if (!!data.drinks[0].strIngredient12 == true) {
                                                            $ingredients.append(`<p>${data.drinks[0].strMeasure12} ${data.drinks[0].strIngredient12}</p>`);
                                                            if (!!data.drinks[0].strIngredient13== true) {
                                                                $ingredients.append(`<p>${data.drinks[0].strMeasure13} ${data.drinks[0].strIngredient13}</p>`);
                                                                if (!!data.drinks[0].strIngredient14 == true) {
                                                                    $ingredients.append(`<p>${data.drinks[0].strMeasure14} ${data.drinks[0].strIngredient14}</p>`);
                                                                    if (!!data.drinks[0].strIngredient15 == true) {
                                                                        $ingredients.append(`<p>${data.drinks[0].strMeasure15} ${data.drinks[0].strIngredient15}</p>`);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
            
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
            i++};
            $ingredients.html('');
            if (!!data.drinks[0].strIngredient1 == true) {
                $ingredients.append(`<p>${data.drinks[0].strMeasure1} ${data.drinks[0].strIngredient1}</p>`);
                if (!!data.drinks[0].strIngredient2 == true) {
                    $ingredients.append(`<p>${data.drinks[0].strMeasure2} ${data.drinks[0].strIngredient2}</p>`);
                    if (!!data.drinks[0].strIngredient3 == true) {
                        $ingredients.append(`<p>${data.drinks[0].strMeasure3} ${data.drinks[0].strIngredient3}</p>`);
                        if (!!data.drinks[0].strIngredient4 == true) {
                            $ingredients.append(`<p>${data.drinks[0].strMeasure4} ${data.drinks[0].strIngredient4}</p>`);
                            if (!!data.drinks[0].strIngredient5 == true) {
                                $ingredients.append(`<p>${data.drinks[0].strMeasure5} ${data.drinks[0].strIngredient5}</p>`);
                                if (!!data.drinks[0].strIngredient6 == true) {
                                    $ingredients.append(`<p>${data.drinks[0].strMeasure6} ${data.drinks[0].strIngredient6}</p>`);
                                    if (!!data.drinks[0].strIngredient7 == true) {
                                        $ingredients.append(`<p>${data.drinks[0].strMeasure7} ${data.drinks[0].strIngredient7}</p>`);
                                        if (!!data.drinks[0].strIngredient8 == true) {
                                            $ingredients.append(`<p>${data.drinks[0].strMeasure8} ${data.drinks[0].strIngredient8}</p>`);
                                            if (!!data.drinks[0].strIngredient9 == true) {
                                                $ingredients.append(`<p>${data.drinks[0].strMeasure9} ${data.drinks[0].strIngredient9}</p>`);
                                                if (!!data.drinks[0].strIngredient10 == true) {
                                                    $ingredients.append(`<p>${data.drinks[0].strMeasure10} ${data.drinks[0].strIngredient10}</p>`);
                                                    if (!!data.drinks[0].strIngredient11 == true) {
                                                        $ingredients.append(`<p>${data.drinks[0].strMeasure11} ${data.drinks[0].strIngredient11}</p>`);
                                                        if (!!data.drinks[0].strIngredient12 == true) {
                                                            $ingredients.append(`<p>${data.drinks[0].strMeasure12} ${data.drinks[0].strIngredient12}</p>`);
                                                            if (!!data.drinks[0].strIngredient13== true) {
                                                                $ingredients.append(`<p>${data.drinks[0].strMeasure13} ${data.drinks[0].strIngredient13}</p>`);
                                                                if (!!data.drinks[0].strIngredient14 == true) {
                                                                    $ingredients.append(`<p>${data.drinks[0].strMeasure14} ${data.drinks[0].strIngredient14}</p>`);
                                                                    if (!!data.drinks[0].strIngredient15 == true) {
                                                                        $ingredients.append(`<p>${data.drinks[0].strMeasure15} ${data.drinks[0].strIngredient15}</p>`);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
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
            $glassType.html(`<img src="/mycollection/svg/008-drink.svg" class="glass">`);
        }
    });
};

// Come back when you want to figure out global scoping within the function (IPO?
// function render() {
    //     $drinkTitle.text(`${data.drinks[0].strDrink}`)
    // }
    
    //Needs complete refactoring for function
    //Needs for each methods for ingredient and amount strings-- could use some significant work.
    //needs for each for similar items on the bottom of the screen-- needs to work upon clicking them.
    //needs CSS
    // bonus: animations for menu update
    //Need a favicon asset for: collins glass,
