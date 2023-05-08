todo.controller("index", function($scope, $state){

    $scope.init = ()=>{

        let userData = window.localStorage.getItem("userData");
        if(userData){
            $state.go("tasks")

        } else {
            $state.go("login")
        }
    }

    $scope.logout = ()=>{
        window.localStorage.removeItem("userData")
        $state.go("login")
    }

})