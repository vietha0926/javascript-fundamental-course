import elements from '../views/base';
import Search from '../models/Search';
import * as view from '../views/searchView';
import uniqid from 'uniqid'



const controlSearch = async e => {
	e.preventDefault();
	let search = new Search(view.getSearchInput());
	await search.getResults();
	search.recipes.forEach(recipe => {
		view.renderSearchList(recipe.recipe_id, recipe.image_url, recipe.title, recipe.publisher);
	})
	console.log(search.recipes);
}

export const init = () => {
	console.log('Hello world2');
	elements.searchbtn.addEventListener('click', controlSearch);
}
