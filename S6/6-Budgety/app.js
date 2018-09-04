var budgetController = (function(){
	var data;
	data = {
		list: {
			inc: [],
			exp: []
		}
	}
	return {
		addItem: function(item){
			
		},
		calculateBudget: function(){
			
		}, 
	}

})()

var UIController = (function(doc){
	const DomStrings = Object.freeze({
		inputType: '.add__type',
		addDescription: '.add__description',
		addValue: '.add__value',
		addButton: '.add__btn',
		incomeList: '.income__list',
		expenseList: '.expenses__list'
	})
	var id = [];
	
	var getId = function(){
		if (id.length === 0){
			id.push(0);
		} else {
			id.push(id[id.length - 1] + 1);
		} 
		return id[id.length - 1];
	};
	
	return {
		getDomStrings: function(){
			return DomStrings;
		}, 
		getInput: function(){
			return {
				type: doc.querySelector(DomStrings.inputType).value,
				description: doc.querySelector(DomStrings.addDescription).value,
				value: parseFloat(doc.querySelector(DomStrings.addValue).value)
			}
		},
		addItem: function(item){
			var htmlTemplate;
			htmlTemplate = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
			htmlTemplate = htmlTemplate.replace('%id%', getId());
			htmlTemplate = htmlTemplate.replace('%description%', item.description);
			htmlTemplate = htmlTemplate.replace('%value%', item.value);
			if (item.type === 'inc'){
				doc.querySelector(DomStrings.incomeList).insertAdjacentHTML('beforeend', htmlTemplate);
			} else if (item.type === 'exp'){
				doc.querySelector(DomStrings.expenseList).insertAdjacentHTML('beforeend', htmlTemplate);
			}
		}
	}
})(document)

var controller = (function(uiCtrl, doc){
	var dom, domStrings, addItem;
	dom = uiCtrl.getDomStrings();
	domStrings = uiCtrl.getDomStrings();
	addItem = function(){
		var item;
		item = uiCtrl.getInput();

		//validate the input

		// update budget

		// add income and expense list
		uiCtrl.addItem(item);

		// update budget
	}
	return{
		init: function(){
			console.log("Starting the app");
			doc.querySelector(domStrings.addButton).addEventListener('click', addItem);
		}
	}
})(UIController, document)

controller.init();


