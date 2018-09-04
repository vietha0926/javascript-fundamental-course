import elements from './base';


export const getSearchInput = () => {
	return elements.searchFld.value;
}

export const renderSearchList = (id, imageUrl, title, publisher) => {
	const item = `<li>
<a class="results__link results__link--active" href="#${id}">
<figure class="results__fig">
<img src="${imageUrl}" alt="Test">
</figure>
<div class="results__data">
<h4 class="results__name">${title}</h4>
<p class="results__author">${publisher}</p>
</div>
</a>
</li>`;
	elements.resultLst.insertAdjacentHTML('beforeend', item);

}


