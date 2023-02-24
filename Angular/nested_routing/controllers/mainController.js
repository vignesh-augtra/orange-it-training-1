todo.controller("mainController", function($scope, $state){

    $scope.init = ()=>{
        $state.go("users")
    }
})