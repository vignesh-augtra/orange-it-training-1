const todo = angular.module("todo", ["ui.router"]);

todo.config(function($stateProvider){


    $stateProvider
    .state("users", {
        url:"/users",
        templateUrl:"views/users.html",
        controller:"userController"
    })
    .state("todos", {
        url:"/todo",
        templateUrl:"views/todo.html",
        controller:"todoController"
    })

})