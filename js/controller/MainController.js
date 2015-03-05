var MainController = function(model) {
 
//Skapar alla views samt tillhörande controllers
var exampleView = new ExampleView($("#exampleView"),model);
window.exampleViewController = new ExampleViewController(exampleView,model);

var startView = new StartView($("#startView"),model);
var startController = new StartController(startView, model);

}