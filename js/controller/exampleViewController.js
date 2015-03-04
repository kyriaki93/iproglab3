var ExampleViewController = function(view, model ) {
 
//add 1 when plus button is hit
 view.plusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });

//remove 1 when plus button is hit
 view.minusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });


//When the confirm button is hit, hide and show following 
 view.confirmBtn.click(function(){
 	$(searchMenuView).hide();
 	$(dishView).hide();
	$(startView).hide();
 	$(menuOverView).show();
	$(allDishes).hide();


 });
 
//back to select view
 view.backBtn.click(function(){
 	$(searchMenuView).show();
 	$(allDishes).show();
 	$(dishView).hide();
 });
 
 //back editing dinner
 view.goBackBtn.click(function(){
 	$(searchMenuView).show();
 	$(allDishes).show();
 	$(dishView).hide();
    $(menuOverView).hide();

 });
 

//typeselector controller
	

this.refresh = function(){

//removes chosen dish 	
type = ['starter', 'main', 'dessert']

/*view.removeStarter.click(function(){
 var dish=model.getSelectedDish('starter');
 var id=dish.id;
 model.removeDishFromMenu(id);
console.log("removeStarter in ExampleViewController");
 });

//Kod för kryss-knapp som tar bort vald main från menyn	
 view.removeMain.click(function(){
 var dish=model.getSelectedDish('main');
 var id=dish.id;
 model.removeDishFromMenu(id);
console.log("removeMain in ExampleViewController");
 });

 //Kod för kryss-knapp som tar bort vald dessert från menyn	
 view.removeDessert.click(function(){
 var dish=model.getSelectedDish('dessert');
 var id=dish.id;
 model.removeDishFromMenu(id);
console.log("removeDessert in ExampleViewController");
});*/

// clickable images - Go to Single dish view //
view.images.click(function(){
	// get id from clickable picture
	var id = ($(this).attr('id'));
	model.addCurrentDish(id);
	
	//go to dishview
 	$(searchMenuView).hide();
	$(allDishes).hide();
 	$(dishView).show();

 });
 
  //Put the selected Dish to menu
 //FUNKAR INTE
 view.confirmDishBtn.click(function(){

 	var id = $(this).attr('id');

 	id = parseInt(id);
	document.getElementById('totalCost').innerHTML = "hej";
 	model.addDishToMenu(id);
 

 });

 
 }


 this.refresh();


}