todo.controller("todoController", function($stateParams, $scope, apiCall){

    $scope.todos = [];
    
    $scope.init = async ()=>{
        $scope.currentUser = JSON.parse($stateParams["#"]);

        console.log($scope.currentUser)

        let todos = await apiCall.get({
            url:"https://jsonplaceholder.typicode.com/todos"
        });

        $scope.todos = todos.filter((oneTodoObject)=>oneTodoObject.userId == $scope.currentUser.id);

        console.log($scope.todos)

        if(!($scope.$$phase)){
            $scope.$apply();
        }

    
    }
})