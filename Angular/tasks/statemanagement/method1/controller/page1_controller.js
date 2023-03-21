app.controller("page1", function($scope, $state){


    $scope.userForm = {
        username : "", // string
        knownlanguages : [""], // Array of strings
    }

    $scope.addOneLanguage = ()=>{
        $scope.userForm.knownlanguages.push("")
    }

    $scope.removeOneLanguage = (idx)=>{
        $scope.userForm.knownlanguages.splice(idx, 1);
    }

    $scope.userFormSubmission = ()=>{
        console.log($scope.userForm);
    }

    

    $scope.handleFormSubmit = ()=>{
        console.log($scope.username);
        $state.go("page2", {
            "#":JSON.stringify({
                username : $scope.username
            })
        })
    }
})