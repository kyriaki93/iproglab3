var SelectView = function (container, model) {
	
	this.allDishes = container.find("#allDishes");
	
;
	
	this.getDishes = function() {
		
		var div = '';
			div += '<div class="row">';
				var selected = model.getFullMenu();

				var type = ['starter', 'main', 'dessert'];
						
			for(k = 0; k < 3; k++) {
		
    			if(selected[type[k]]){
					if(type[k] == 'starter'){
						var id = selected.starter;
						var t = model.getDish(id);
	
						div += "<div class='col-md-12'><div class='col-md-2' style='margin: 2% 2% 2% 2%'><img src=images/"+t.image+" width=100%></div><div class='col-md-3'><h2>"+ t.name+ "</h2><br/><p>"+t.description+"</p></div><div class='col-md-4'><h2>Preperation</h2><br><p>"+ t.description +"</p></div></div>";
					}
						if(type[k] == 'main'){
						var id = selected.main;
						var t = model.getDish(id);
						div += "<div class='col-md-12'><div class='col-md-2' style='margin: 2% 2% 2% 2%'><img src=images/"+t.image+" width=100%></div><div class='col-md-3'><h2>"+ t.name+ "</h2><br/><p>"+t.description+"</p></div><div class='col-md-4'><h2>Preperation</h2><br><p>"+ t.description +"</p></div></div>";
					}				
						if(type[k] == 'starter'){
						var id = selected.dessert;
						var t = model.getDish(id);
						div += "<div class='col-md-12'><div class='col-md-2' style='margin: 2% 2% 2% 2%'><img src=images/"+t.image+" width=100%></div><div class='col-md-3'><h2>"+ t.name+ "</h2><br/><p>"+t.description+"</p></div><div class='col-md-4'><h2>Preperation</h2><br><p>"+ t.description +"</p></div></div>";
					
					}
					
				}
    		k++;
			return div;
		}
			
			div += '</div>';
		return div;
	};
		
	this.allDishes.html(this.getDishes);
	
}

