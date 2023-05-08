todo.controller("login", function($scope, $state, apiCall, exceptionHandler){




    $scope.goToSignup = ()=>{
        $state.go("signup")
    }

    $scope.handleLoginSubmit = async ()=>{

        try{
            let paramToApiRequest = {
                method:"POST",
                endPoint : "api/user/login",
                data : $scope.loginForm
            }
    
            let loginResponse = await apiCall.request(paramToApiRequest);
    
            if(loginResponse.isError){
                M.toast({
                    html:loginResponse.message,
                    classes:"rounded red"
                })
            } else {
    
                let responseString = JSON.stringify(loginResponse.message.userData);
                window.localStorage.setItem("userData", responseString)
                $state.go("tasks")
    
            }
        } catch(e){
            exceptionHandler.show(e)
        }
    }

})