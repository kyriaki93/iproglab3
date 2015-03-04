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
	
	this.totalCost = container.find("#totalCost");
	this.dishName = container.find("#dishName");
	this.dishPrice = container.find("#dishPrice");

	// Side menu part//
	var type = ['starter', 'main', 'dessert'];
	var selected = model.getFullMenu();
	
	this.fullPrice = function() {

		var output = 0.00;	
			
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
	
	this.totalCost.html(this.fullPrice);
	this.dishPrice.html(this.getPrice);
	
	this.getPrice = function() {

			var output = "";	
			
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
	this.dishPrice.html(this.getPrice);
	

this.getNames = function() {

			var output = "";	
			
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
	
	this.dishName.html(this.getNames);
	
	
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
		
		div += "</div>";
		return div;
	};
		
	this.allDishes.html(this.getDishes);
	
	
	this.images = container.find('.images');
	
	//Single dish view//
	this.dishView = container.find("#dishView");
		
	var getType = model.getAllDishes(selectedType);
		
	this.getDish = function() {
	var name = model.getAllIngredients(200);
	var quantity = model.getQuantity(200);
	var unit = model.getUnit(200);
	var price = model.getIngredientPrice(200);
	var pending = model.pending(200);
		var div = '';
		div += '<div class="row">';
		for(i=0;i<1;i++){
			var dish = getType[i];
			
			div += "<div class='col-md-5'><div><center><h2>"+ dish.name +"</h2></center></div>"
			div += "<img src=images/"+dish.image+" width=100%><br/><br/>";
			div += "<p>"+dish.description +"</p>"
			div += "<div id='foodhead'><center><button class='btn btn-default' type='submit' id='backBtn' style='margin:0% 0% 10% 0%;'>Back to Select Dish</button></center></div>";
			
		}
		
		div += "</div>";
		div += "<div class='row'><div class='col-md-4'><center><h2>Ingredients</h2></center><br><div id='quantity' class='col-md-2'>"+ quantity +"</div><div id='amount' class='col-md-3'>"+ unit +"</div><div id='name' class='col-md-3'>"+ name +"</div><div id='price' class='col-md-2'>"+ price +"</div></div><div id='pending' class='col-md-3'>"+ pending +"<center><button class='btn btn-default' type='submit' class='confirmDishBtn' id='200' style='margin:6% 6% 6% 6%;'>Confirm Dish</button></center></div>";
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
		
		div += '<div class="row"><div class="col-md-12"><center><div><b><h3>My Dinner: <span id="num"></span>people</h3></b>'
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
	//Funktion som körs vid update
	this.update = function (obj){
		//side menu update
		this.numberOfGuests.html(model.getNumberOfGuests);
		this.totalCost.html(this.fullPrice);
		this.dishPrice.html(this.getPrice);
		this.dishName.html(this.getNames);
		//this.removeStarter = container.find("#removeStarter"); 
		//this.removeMain = container.find("#removeMain");
		//this.removeDessert = container.find("#removeDessert");
		
		//select view update
		this.allDishes.html(this.getDishes);
		this.images = container.find('.images');
		this.confirmDishBtn = container.find('.confirmDishBtn');

		//menuOverview
		this.goBackBtn = container.find('#goBackBtn');
		this.num.html(model.getNumberOfGuests);
		exampleViewController.refresh();
	}




}