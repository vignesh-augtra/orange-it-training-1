todo.controller("tasks", function($scope, apiCall){

    $scope.getAllTasks = async ()=>{
        let userData = JSON.parse(window.localStorage.getItem("userData"));


        let paramToApiRequest = {
            method:"POST",
            endPoint : "api/tasks/get",
            data : {
                user_id:userData.id
            }
        }

        let response = await apiCall.request(paramToApiRequest);

        $scope.tasks = response.message.data;

        if(!($scope.$$phase)){
            $scope.$apply()
        }



    }


    $scope.formatDate = (dateString)=>{

        let dateObject = new Date(dateString);

        return `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`


    }

})