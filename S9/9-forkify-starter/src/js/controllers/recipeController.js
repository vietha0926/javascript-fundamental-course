import elements from '../views/base';
import Recipe from '../models/Recipe';
import * as view from '../views/recipeView';
import uniqid from 'uniqid'

const controlRecipe = async e=> {
	let recipeId = window.location.hash.replace('#','');
	let recipe = new Recipe(recipeId);
	await recipe.getDetails();
	console.log(recipe.details);
	view.renderRecipe(recipe.details);
}
export const init = () => {
	elements.resultLst.addEventListener('click', controlRecipe);
}

//(?:\d+)[(\s+\d+\/\d+)|\b|\/\d+]+  to get mixed fraction

//bracket (?<=\().+?(?=\))