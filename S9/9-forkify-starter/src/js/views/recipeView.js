import elements from './base';

export const renderRecipe = (details) => {
	
	emptyElement(elements.recipe);
	const recipeFig = `<figure class="recipe__fig">
                <img src="${details.image_url}" alt="Tomato" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${details.title}</span>
                </h1>
            </figure>`;
	const recipeDetails = `<div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-stopwatch"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">45</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-man"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">4</span>
                    <span class="recipe__info-text"> servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-minus"></use>
                            </svg>
                        </button>
                        <button class="btn-tiny">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-plus"></use>
                            </svg>
                        </button>
                    </div>

                </div>
                <button class="recipe__love">
                    <svg class="header__likes">
                        <use href="img/icons.svg#icon-heart-outlined"></use>
                    </svg>
                </button>
            </div>`;
	let recipeIngredients = `<div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">`;
	
	for (let ingredient of details.ingredients){
		let details = parseIngredient(ingredient);
		console.log(details.count);
		console.log(details.unit);
		recipeIngredients += `<li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__count">${details.count}</div>
                        <div class="recipe__ingredient">${details.unit}
                            <span class="recipe__unit"></span>
                        </div>
                    </li>
`
	}
	recipeIngredients += `</ul>

                <button class="btn-small recipe__btn">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span>Add to shopping list</span>
                </button>
            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">How to cook it</h2>
                <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__by">${details.publisher}</span>. Please check out directions at their website.
                </p>
                <a class="btn-small recipe__btn" href="${details.source_url}" target="_blank">
                    <span>Directions</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>

                </a>
            </div>`;
	elements.recipe.insertAdjacentHTML('beforeend', recipeFig);
	elements.recipe.insertAdjacentHTML('beforeend', recipeDetails);
	elements.recipe.insertAdjacentHTML('beforeend', recipeIngredients);
}

let emptyElement = (e) => {
	if (e){
		while (e.firstChild){
			e.removeChild(e.firstChild);
		}
	}

}

let convertUnit = (item) => {
	const unitMap = new Map();
	let result = item;
	unitMap.set(/^(teaspoons|teaspoon)/, 'tsp');
	unitMap.set(/^(cups|cup)/, 'cup');
	unitMap.set(/^(ounces|ounce)/, 'oz');
	unitMap.set(/^(tablespoons|tablespoon)/, 'tbsp');
	for (let [regEx, unit] of unitMap){
		result = result.replace(regEx, unit);
	}
	return result;
}

function parseIngredient(ingredient){
	const fractionRegex = /(\d+\/\d+|\d+(\s\d+\/\d+)+|\d+)/g;
	const bracketRegex = /\(.*?\)/g;
	let details = {}
	if (ingredient){
		ingredient = ingredient.replace(bracketRegex, '');
		let fractions = ingredient.match(fractionRegex);
		if (fractions){
			details.count = fractions[0];
		} else {
			details.count = 1;
		}
		details.unit = ingredient.replace(fractionRegex,'').trim();
		details.unit = convertUnit(details.unit);
	}
	return details;
}