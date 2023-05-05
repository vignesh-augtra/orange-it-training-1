todo.service("apiCall", function($http){

    let protocol = "http", 
        domainName = "localhost",
        portNumber = "5000"


    this.request = (param)=>{
       return new Promise(resolve=>{

        $http({
            method:param.method,
            url:`${protocol}://${domainName}:${portNumber}/${param.endPoint}`,
            data : param.data
        }).then(
            (response)=>{
                resolve(response.data)
            },
            (error)=>{
                console.error(error)
                alert(error);
            }
        )

       })
    }

})