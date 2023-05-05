const todo = angular.module("todo", ['ui.router'])

todo.config(($stateProvider)=>{

    $stateProvider
    .state("login", {
        url:"/login",
        controller:"login",
        templateUrl:"views/login.html"
    })

    .state("signup", {
        url:"/signup",
        controller:"signup",
        templateUrl:"views/signup.html"
    })

})