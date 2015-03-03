var SingleDishView = function (container,model) {

	this.container=container;
	// container.hide();

	//model.addObserver(this);

	this.single = container.find("#single");
	
	var get = model.getAllDishes('dessert');
		
	this.getDishes = function() {
	var name = model.getAllIngredients(200);
	var quantity = model.getQuantity(200);
	var unit = model.getUnit(200);
	var price = model.getIngredientPrice(200);
	var pending = model.pending(200);
		var div = '';
		div += '<div class="row">';
		for(i=0;i<1;i++){
			var dish = get[i];
			
			div += "<div class='col-md-5'><div><center><h2>"+ dish.name +"</h2></center></div>"
			div += "<img src=images/"+dish.image+" width=100%><br/><br/>";
			div += "<p>"+dish.description +"</p>"
			div += "<div id='foodhead'><center><button class='btn btn-default' type='submit' onclick='next()' style='margin:0% 0% 10% 0%;'>Back to Select Dish</button></center></div>";
			
		}
		
		div += "</div>";
		div += "<div class='row'><div class='col-md-5'><center><h2>Ingredients</h2></center><br><div id='quantity' class='col-md-3'>"+ quantity +"</div><div id='amount' class='col-md-3'>"+ unit +"</div><div id='name' class='col-md-3'>"+ name +"</div><div id='price' class='col-md-3'>"+ price +"</div></div><div id='pending' class='col-md-5'>"+ pending +"</div><center><button class='btn btn-default' type='submit' onclick='dish()'style='margin: 4% 4% 4% 4%;'>Confirm Dish</button></center></div></div>";
		return div;

	};
		
	//this.single.html(this.getDishes);
	this.single.html("Den enskilda dishen visas");

	

 }