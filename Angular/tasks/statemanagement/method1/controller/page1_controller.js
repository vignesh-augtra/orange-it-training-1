app.controller("page1", function($scope, $state){
    

    $scope.handleFormSubmit = ()=>{
        console.log($scope.username);
        $state.go("page2", {
            "#":JSON.stringify({
                username : $scope.username
            })
        })
    }
})