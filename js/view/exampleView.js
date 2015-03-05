var ExampleView = function (container,model) {

	this.container=container;
	container.hide();
	
	model.addObserver(this);
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmBtn = container.find("#confirm");
	
	this.numberOfGuests.html(model.getNumberOfGuests);
	
	var totalCost = container.find("#totalCost");
	var dishName = container.find("#dishName");
	var dishPrice = container.find("#dishPrice");

	// Side menu part//
	var type = ['starter', 'main', 'dessert'];
	
	this.fullPrice = function() {

		var output = 0.00;	
			var selected = model.getFullMenu();

			for(k = 0; k < 3; k++) {
		
    			if(selected[type[k]]){
					if(type[k] == 'starter'){
						var id = selected.starter;
						output += model.getDishPrice(id);
					}
						if(type[k] == 'main'){
						var id = selected.main;
						output += model.getDishPrice(id);
					}				
						if(type[k] == 'starter'){
						var id = selected.dessert;
						output += model.getDishPrice(id);	
					}	
					
				}
    		k++;
			return output;
		}
	}
	
	totalCost.html(this.fullPrice());
	
	this.getPrice = function() {

			var output = "";	
			var selected = model.getFullMenu();

			for(k = 0; k < 3; k++) {
			
    			if(selected[type[k]]){
					if(type[k] == 'starter'){
						var id = selected.starter;
						output += model.getDishPrice(id) + "<br>";
					}
						if(type[k] == 'main'){
						var id = selected.main;
						output += model.getDishPrice(id) + "<br>";
					}				
						if(type[k] == 'starter'){
						var id = selected.dessert;
						output += model.getDishPrice(id) + "<br>";	
					}			
				}
					else{
					output += "0.00";
				}
    		k++;
			return output;
		}
	}
	dishPrice.html(this.getPrice());
	

this.getNames = function() {

			var output = "";	
			var selected = model.getFullMenu();

			for(k = 0; k < 3; k++) {
		
    			if(selected[type[k]]){
					if(type[k] == 'starter'){
						var id = selected.starter
						var t = model.getDish(id);
						output += '<button id="remove" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-remove"></span></button> '+t.name +'<br />';
					}
						if(type[k] == 'main'){
						var id = selected.main
						var t = model.getDish(id);
						output += '<button id="remove" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-remove"></span></button> '+t.name +'<br />';
					}				
						if(type[k] == 'starter'){
						var id = selected.dessert
						var t = model.getDish(id);
						output += '<button id="remove" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-remove"></span></button> '+t.name +'<br />';
					}			
				}
				else{
					output += "Pending";
				}
    		k++;
			return output;
		}
	}
	
	dishName.html(this.getNames());
	
	
	// Search Menu View //
	this.searchM = container.find('#searchM');
	
	this.searchMenu = function() {
	var div = '';
	div += '<div id="searchMenuView">'
    div += '<h3><b>SELECT DISH</b></h3>'
    div += '<div class="row"><div class="col-md-4"><div class="input-group">'
    div += '<input type="text" class="form-control" placeholder="Enter key words">'
    div += '<span class="input-group-btn">'
    div += '<button id="searchButton" class="btn btn-default" type="button">Search</button></span></div></div>'
    div += '<div class="col-md-4">'
    div += '<select id ="typeSelect" class="form-control" multiple="multiple">'
    div += '<option class="dropdown" id="starter" value"starter">Starter</option>'
    div += '<option class="dropdown" id="main" value="main">Main</option>'
    div += '<option class="dropdown" id="Dessert" value="dessert" selected="selected">dessert</option></select></div></div></div>';
	
	return div;
	}
	
	this.searchM.html(this.searchMenu);
	
	this.dropdown = container.find('.dropdown');
	this.searchBtn = container.find('#searchButton');
	
	//selectView part//
	this.allDishes = container.find("#allDishes");
		
	var selectedType = model.getCurrentType();
	
	var get = model.getAllDishes(selectedType);
	
	this.getDishes = function() {
		
		var div = '';
		div += '<div class="row">';
		for(i=0;i<get.length;i++){
			var dish = get[i];
			div += "<div class='col-md-3' style='margin:1% 1% 0 1%;'><br />"
			div += "<center><img class='images' id='"+ dish.id +"' src=images/"+dish.image+" width=100%></center><br/><br/>";
			div += "<div id='foodhead'><center><h3>"+dish.name+"</h3></center></div>";
			div += "<p>"+dish.description +"</p></div>"
		}
		
		div += "</div><br/><br/><br/><br/><br/></br>";
		return div;
	};
		
	this.allDishes.html(this.getDishes);
	
	
	this.images = container.find('.images');
	
	//Single dish view//
	this.dishView = container.find("#dishView");
		
	
	this.getDish = function() {
		
	var getId = model.getCurrentDish();
	
	var dish = model.getDish(getId);
	var name = model.getAllIngredients(getId);
	var quantity = model.getQuantity(getId);
	var unit = model.getUnit(getId);
	var price = model.getIngredientPrice(getId);
	var pending = model.pending(getId);
		var div = '';
		div += '<div class="row">';			
			div += "<div class='col-md-5'><div><center><h2>"+ dish.name +"</h2></center></div>"
			div += "<img src=images/"+dish.image+" width=100%><br/><br/>";
			div += "<p>"+dish.description +"</p>"
			div += "<div id='foodhead'><center><button class='btn btn-default' type='submit' id='backBtn' style='margin:0% 0% 10% 0%;'>Back to Select Dish</button></center></div>";
			
		
		
		div += "</div>";
		div += "<div class='row'><div class='col-md-4'><center><h2>Ingredients</h2></center><br><div id='quantity' class='col-md-2'>"+ quantity +"</div><div id='amount' class='col-md-3'>"+ unit +"</div><div id='name' class='col-md-3'>"+ name +"</div><div id='price' class='col-md-2'>"+ price +"</div></div><div id='pending' class='col-md-3'>"+ pending +"<center><span class='confirmDishBtn' id='"+ getId+"'><input class='btn btn-default' type='submit' value='Confirm Dish' style='margin:6% 6% 6% 6%;'></span></center></div>";
		return div;

	};
		
	this.dishView.html(this.getDish);
	
	//buttons
	this.backBtn = container.find('#backBtn');
	this.confirmDishBtn = container.find('.confirmDishBtn');
	
	//MenuOverView//
	this.menuOverView = container.find("#menuOverView");
	
	
	this.getMenu = function() {
		
		var div = '';
		
		div += '<div class="row"><div class="col-md-12"><center><div><b><h3>My Dinner: <span id="num"></span> people</h3></b>'
        div += '<button class="btn btn-default" id="goBackBtn" type="submit">Go back and edit dinner</button>'
        div += '</div></center></div>';
		
		var price=0;
			div += '<center><div class="row">';
				var selected = model.getFullMenu();

				var type = ['starter', 'main', 'dessert'];
						
			for(k = 0; k < 3; k++) {
		
    			if(selected[type[k]]){
					if(type[k] == 'starter'){
						var id = selected.starter;
						var t = model.getDish(id);
						var p = model.getDishPrice(id);
						price += p;
						div += "<div class='col-md-2' style='margin: 2% 2% 2% 2%'><center><h2>"+ t.name+ "</h2><img src=images/"+t.image+" width=100%><br/><h5>"+ p +" SEK</h5></center></div>";
					}
						if(type[k] == 'main'){
						var id = selected.main;
						var t = model.getDish(id);
						var p = model.getDishPrice(id);
						price += p;
						div += "<div class='col-md-2' style='margin: 2% 2% 2% 2%'><center><h2>"+ t.name+ "</h2><img src=images/"+t.image+" width=100%><br/><h5>"+ p+" SEK</h5></center></div>";
					}				
						if(type[k] == 'starter'){
						var id = selected.dessert;
						var t = model.getDish(id);
						var p = model.getDishPrice(id);
						price += p;
						div += "<div class='col-md-2' style='margin: 2% 2% 2% 2%'><center><h2>"+ t.name+ "</h2><img src=images/"+t.image+" width=100%><br/><h5>"+ p +" SEK</h5></center></div>";
						div += '<div class="col-md-12"><h2>Total price: '+ price +' KR</h2><br><button class="btn btn-default" type="submit" onlick="print()">Print full recipe!</button></div>';
					}
					
				}
    		k++;
			return div;
		}
			
			div += '</div></center>';
		return div;
	};
	
	this.menuOverView.html(this.getMenu);
	
	this.goBackBtn = container.find('#goBackBtn');
	this.num = container.find("#num");
	this.num.html(model.getNumberOfGuests);

	//When a update is detected --> runs
	this.update = function (obj){
		//side menu update
		this.numberOfGuests.html(model.getNumberOfGuests);
		totalCost.html(this.fullPrice());
		dishPrice.html(this.getPrice());
		dishName.html(this.getNames());
		//this.removeStarter = container.find("#removeStarter"); 
		//this.removeMain = container.find("#removeMain");
		//this.removeDessert = container.find("#removeDessert");
		
		//select view update
		this.allDishes.html(this.getDishes);
		this.images = container.find('.images');

		//singleDisg view update
		this.dishView.html(this.getDish);
		this.backBtn = container.find('#backBtn');
		this.confirmDishBtn = container.find('.confirmDishBtn');

		//menuOverview
		this.num.html(model.getNumberOfGuests);
		
		exampleViewController.refresh();
	}




}