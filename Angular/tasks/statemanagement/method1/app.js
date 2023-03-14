const app = angular.module("app", ["ui.router"]);

app.config(function($stateProvider){

    $stateProvider
    .state("page1", {
        url:"page1",
        templateUrl:"views/page1.html",
        controller:"page1",
    })
    .state("page2", {
        url:"page2",
        templateUrl:"views/page2.html",
        controller:"page2",
    })
    .state("page3", {
        url:"page3",
        templateUrl:"views/page3.html",
        controller:"page3",
    })
})