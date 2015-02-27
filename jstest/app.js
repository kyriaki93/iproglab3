$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//add selected dishes
	model.addDishToMenu(1);
	model.addDishToMenu(200);
	
	//Create views
	var exampleView = new ExampleView($("#exampleView"), model);
	var selectView = new SelectView($("#selectView"), model);
	var dishView = new DishView($("#dishView"), model);

	//create controllers
	var exampleViewController = new ExampleViewController(exampleView,model);

});
