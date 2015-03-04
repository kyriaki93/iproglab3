var MainController = function(model) {
 

//Skapar alla views samt tillhörande controllers
var exampleView = new ExampleView($("#exampleView"),model);
window.exampleViewController = new ExampleViewController(exampleView,model);

var selectView = new SelectView($("#selectView"),model);
//window.dishSelectController = new DishSelectController(selectView,model);

var searchMenuView = new SearchMenuView($("#searchMenuView"),model);
window.searchMenuController = new SearchMenuController(searchMenuView, model);

var startView = new StartView($("#startView"),model);
var startController = new StartController(startView, model);

}