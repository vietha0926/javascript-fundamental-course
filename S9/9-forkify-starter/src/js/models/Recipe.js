import {apiKey, baseUrl} from '../config.js';
import axios from 'axios';

function parseIngredient(ingredient){
	details = {}
	if (ingredient){
		details.count = ingredient.match('/\d+(\s+\d+\/\d+|\/\d+)/g')
	}
}

export default class Recipe{
	constructor(id){
		this.id = id;
	}
	
	async getDetails(){
		const url = `${baseUrl}get/?key=${apiKey}&rId=${this.id}`;
		try{
			const result = await axios({
				method: 'get',
				url: url
			})
			if (result && result.data && result.data.recipe){
				this.details = result.data.recipe;
			}
		}
		catch(error){
			alert(error);
		}
	}
	
	
}