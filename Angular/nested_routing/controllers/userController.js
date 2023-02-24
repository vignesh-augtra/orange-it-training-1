todo.controller("userController", function ($scope, apiCall, $state) {

    $scope.heading = "List of users here ...";
    $scope.users = [];

    $scope.init = async () => {
        
        let paramToApiCall = {
            url: "https://jsonplaceholder.typicode.com/users"
        }
        $scope.users = await apiCall.get(paramToApiCall);
        

        if (!($scope.$$phase)) {
            $scope.$apply()
        }
    }

    $scope.showTodo = (user)=>{
        
        $state.go("todos", {
            "#":JSON.stringify({
                id:user.id
            })
        });
    }
})