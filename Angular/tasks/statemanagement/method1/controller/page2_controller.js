app.controller("page2", function($scope, $stateParams, $state){
    
    $scope.students = [
        {
            name : "vignesh",
            city : "cbe"
        },

        {
            name : "Selvi",
            city : "Thirunelveli"
        },

        {
            name : "Chandru",
            city : "Palani"
        }
    ]

    $scope.dataFromPreviousPage = JSON.parse($stateParams["#"]);

    $scope.handleSelection = (oneStudent)=>{

        $state.go("page3", {
            "#":JSON.stringify({
                ...oneStudent,
                ...$scope.dataFromPreviousPage
            })
        })
        
    }

})