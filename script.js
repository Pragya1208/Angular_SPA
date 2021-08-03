// create the module and name it myApp
var app = angular.module("myApp", ['ngRoute']);

// configure routes
app.config(function($routeProvider){
    $routeProvider
        .when("/", {templateUrl:"Login.html"})
        .when("/about", {templateUrl : "ProductView.html"})
        .when("/services", {templateUrl : "AddToCart.html"})
        .when("/projects", {templateUrl : "Charged.html"})
});