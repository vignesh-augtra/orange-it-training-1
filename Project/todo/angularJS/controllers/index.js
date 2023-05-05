todo.controller("index", function($scope, $state){

    $scope.init = ()=>{
        $state.go("login")
    }

})