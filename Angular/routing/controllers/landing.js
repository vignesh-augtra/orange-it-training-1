routerApp.controller("landingController", function($scope, $state){

    
    $scope.goToLogin = ()=>{
        $state.go("login")
    }

    $scope.goToSignup = ()=>{
        $state.go("signup")
    }

})