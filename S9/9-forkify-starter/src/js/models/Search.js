import {apiKey, baseUrl} from '../config.js';
import axios from 'axios';

export default class Search{
	constructor(query){
		this.query = query;
	}

	async getResults(){
		const url = `${baseUrl}search/?key=${apiKey}&q=${this.query}`;
		try{
			const result = await axios({
				method: 'get',
				url: url
			});
			if (result && result.data){
				this.recipes = result.data.recipes;
			}
		}catch(error){
			alert(error);
		}
	}
	
}
