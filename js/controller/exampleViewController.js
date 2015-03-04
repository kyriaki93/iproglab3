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
	 view.container.hide();
 	$(searchMenuView).hide();
 	$(dishSelectView).hide();
 	$(dishView).hide();
	$(startView).hide();
 	$(menuOverView).show();

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
 
 }


 this.refresh();


}