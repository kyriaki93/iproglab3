var DishSelectView = function (container,model) {

	this.container=container;
	
	//model.addObserver(this);
	
	this.allDishes = container.find("#allDishes");
	
	var get = model.getAllDishes('dessert');
	
	this.getDishes = function() {
		
		var div = '';
		div += '<div class="row">';
		for(i=0;i<get.length;i++){
			var dish = get[i];
			div += "<div class='col-md-3' style='margin:2% 4% 4% 4%;'><br />"
			div += "<center><img src=images/"+dish.image+" width=100%></center><br/><br/>";
			div += "<div id='foodhead'><center><button class='btn btn-default' type='submit' onclick='singlepage()' style='margin:0% 0% 10% 0%;'>"+dish.name+"</button></center></div>";
			div += "<p>"+dish.description +"</p></div>"
		}
		
		div += "</div>";
		return div;
	};
		
	//this.allDishes.html(this.getDishes);
	this.allDishes.html("Selecten visas!");


}