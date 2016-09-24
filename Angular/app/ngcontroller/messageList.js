var serverapi=require('../services/apiService.js');
module.exports = function(myApp){
	myApp.controller("messageListController",['$scope','$http',function($scope,$http){
        $scope.title = 'A';
        $scope.data=[];
        $scope.samescope="mzz";
        $http.get(serverapi.getMessageList()).success(function(response){
            if(response.result==0){
                console.log(response.data);
                $scope.data=response.data;
            }
        });
        $scope.setSamescope=function(yy){
            $scope.samescope=yy;
        }
    }]);
	myApp.controller("messageListChildController",function($scope){
    	$scope.count=1;
    	$scope.$on('myEvent',function(){
        	$scope.count++;
            $scope.setSamescope($scope.count);
        });
    });
}