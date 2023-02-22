const routerApp = angular.module("myRouterApp", ["ui.router"]);

routerApp.config(function($stateProvider){
    $stateProvider
    .state("login", {
        url:"/login",
        // templateUrl:"views/login.html",
        template:"<h1> Hello  </h1>",
        controller:"loginController"
    })
    .state("signup", {
        url:"/signup",
        templateUrl:"views/signup.html",
        controller:"signupController"
    })
    
})

