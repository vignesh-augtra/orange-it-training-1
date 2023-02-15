timer.controller("timerController", function($scope){
    
    $scope.counter = 0;

    $scope.startCounter = ()=>{
        $scope.i = setInterval(()=>{
            $scope.counter++;
            if(! $scope.$$phase){
                $scope.$apply();
            }
            if($scope.counter == 10){
                clearInterval($scope.i)
            }
        }, 1000)
    }

    $scope.getName = ()=>{
        return  "Vignesh"
    }
    
    
})