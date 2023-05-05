todo.controller("signup", function($scope, $state){


    $scope.goToLogin = ()=>{
        $state.go("login")
    }


})