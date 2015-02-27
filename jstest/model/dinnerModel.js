//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	var selectedDishes = new Object();
	var numGuest = 3;
	var observers = [];
	
	//add new observer to the array
	this.addObserver = function(observer){
		observers.push(observer);
	}
	
	//call update method on all the obserservers in the array
	var notifyObserver = function(obj){
		for (k=0;i<observers.length;k++){
				observers[k].update(obj);
				console.log(observers[k]);
			}
	}
	
	this.setNumberOfGuests = function(num) {
		numGuest += num;
	}

	// should return 
	this.getNumberOfGuests = function() {
		return numGuest;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		var id = selectedDishes[type];
		var dish = this.getDish(id);

		return dish;
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return selectedDishes;
	}

	//Returns all ingredients for all the dishes on the menu... //gets ingredients from a specifik ID!!! 
	this.getAllIngredients = function(id) {
		name = "";
		var dish = this.getDish(id);
		var ingredients = dish.ingredients;

		for (i=0; i<ingredients.length; i++){
			var ingredient = ingredients[i];
			name += ingredient.name +'</br>';
		}

		return name;	
		
	}

	this.getQuantity = function(id) {
		quantity = "";
		var dish = this.getDish(id);
		var ingredients = dish.ingredients;

		for (i=0; i<ingredients.length; i++){
			var ingredient = ingredients[i];
			quantity += ingredient.quantity +'</br>';
		}

		return quantity;	
		
	}
	
	this.getUnit = function(id) {
		unit = "";
		var dish = this.getDish(id);
		var ingredients = dish.ingredients;

		for (i=0; i<ingredients.length; i++){
			var ingredient = ingredients[i];
			unit += ingredient.unit +'</br>';
		}

		return unit;	
		
	}

	this.getIngredientPrice = function(id) {
		price = "";
		var dish = this.getDish(id);
		var ingredients = dish.ingredients;

		for (i=0; i<ingredients.length; i++){
			var ingredient = ingredients[i];
			price += 'SEK ' + ingredient.price +'</br>';
		}

		return price;	
		
	}
	
	this.pending = function(id) {
		price = 0;
		var dish = this.getDish(id);
		var ingredients = dish.ingredients;

		for (i=0; i<ingredients.length; i++){
			var ingredient = ingredients[i];
			price += ingredient.price;
		}

		return '<div class="col-md-4"><br>Pending: SEK '+ price +'</div>';	
		
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getDishPrice = function(id) {

		var price = 0;

		var dish = this.getDish(id);
		var ingredients = dish.ingredients;

		for (i=0; i<ingredients.length; i++){
			var ingredient = ingredients[i];
			price += ingredient.price;
		}

		return (price*numGuest);
	}	
	
	this.getTotalMenuPrice = function() {
		
	}
	

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		var dish = this.getDish(id); 
		var type = dish.type;
		
		selectedDishes[type]= id;
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var dish = this.getDish(id); 
		var type = dish.type;
		
		if(selectedDishes[type] === id){
			delete selectedDishes[type];
		}
	}


	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });	
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
	}


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolate Ice cream',
		'type':'dessert',
		'image':'ice.jpg',
		'description':" First put the dry ingredients in a bowl. Add the milk and cream and mix until combined. Pour the mixture into your ice cream maker and mix according to the directions for your machine. After 30 minutes it is ready to be put into a container to finishing freezing in the freezer.",
		'ingredients':[{ 
			'name':'Cocoa',
			'quantity':1,
			'unit':'cup',
			'price':6
			},{
			'name':'Brown sugar',
			'quantity':3/4,
			'unit':'cup',
			'price':3
			},{
			'name':'Milk',
			'quantity':1/2,
			'unit':'cup',
			'price':2
			},{
			'name':'Heavy cream',
			'quantity':3,
			'unit':'cup',
			'price':9
			},{
			'name':'Vanilla',
			'quantity':1,
			'unit':'tablespoon',
			'price':4
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'vanilla.jpg',
		'description':"Pour everything into the bowl of a mixer or whisk in a bowl by hand. Pour it into your ice cream maker and freeze according to the directions. When it is done, put it into a container and let it freeze for 2 hours or until frozen.",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry Ice cream',
		'type':'dessert',
		'image':'strawberry.jpg',
		'description':"In a bowl, add 1/2 cup sugar to the strawberries. Add the lemon juice. Give this strawberry a good sir and let it sit for 2 hours at room temperature. After two hours, the strawberries will have let go of their juice and created a yummy syrup.",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}