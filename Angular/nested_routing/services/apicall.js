todo.service("apiCall", function($http){

    this.get = (param)=>{
        return new Promise((resolve, reject)=>{
            $http({
                method:"GET",
                url:param.url
            }).then(
                (response)=>{
                    resolve(response.data);
                },
                (err)=>{
                    alert(err);
                    reject("Something went wrong!");

                }
            )
        })
    }

})