todo.controller("login", function($scope, $state, apiCall){


    $scope.goToSignup = ()=>{
        $state.go("signup")
    }

    $scope.handleLoginSubmit = async ()=>{
        console.log($scope.loginForm)

        let paramToApiRequest = {
            method:"POST",
            endPoint : "api/user/login",
            data : $scope.loginForm
        }

        let loginResponse = await apiCall.request(paramToApiRequest);

        if(loginResponse.isError){
            M.toast({
                html:loginResponse.message,
                class:"red rounded"
            })
        } else {
            alert("Success")
        }
    }

})