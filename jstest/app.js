$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//add selected dishes
	model.addDishToMenu(1);
	model.addDishToMenu(200);
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var selectView = new SelectView($("#selectView"), model);
	var dishView = new DishView($("#dishView"), model);




});
