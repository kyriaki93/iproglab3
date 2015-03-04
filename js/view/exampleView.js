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

	//type list
	
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
	
	//selecten 
	this.allDishes = container.find("#allDishes");
	
	var get = model.getAllDishes('dessert');
	
	this.getDishes = function() {
		
		var div = '';
		div += '<div class="row">';
		for(i=0;i<get.length;i++){
			var dish = get[i];
			div += "<div class='col-md-3' style='margin:2% 4% 4% 4%;'><br />"
			div += "<center><img src=images/"+dish.image+" width=90%></center><br/><br/>";
			div += "<div id='foodhead'><center><button class='btn btn-default' type='submit' id='pick' style='margin:0% 0% 5% 0%;'>"+dish.name+"</button></center></div>";
			div += "<p>"+dish.description +"</p></div>"
		}
		
		div += "</div>";
		return div;
	};
		
	this.allDishes.html(this.getDishes);



	//Funktion som körs vid update
	this.update = function (obj){
		this.numberOfGuests.html(model.getNumberOfGuests);
		this.totalCost.html(this.fullPrice);
		this.dishPrice.html(this.getPrice);
		this.dishName.html(this.getNames);
		this.allDishes.html(this.getDishes);

		//this.removeStarter = container.find("#removeStarter"); 
		//this.removeMain = container.find("#removeMain");
		//this.removeDessert = container.find("#removeDessert");

		exampleViewController.refresh();
	}




}