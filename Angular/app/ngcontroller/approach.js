module.exports = function(myApp) {
	myApp.controller("approachController",['$scope',function($scope){
        $scope.title = "推送方式管理";
        $scope.redioValue="option1";
        $scope.firstNum=1;
        $scope.secondNum=2;
        $scope.redioTrue='0';
        $scope.computeResult=$scope.firstNum+$scope.secondNum;
        $scope.reComputeResult=function(){
        	console.log("click");
        	switch($scope.redioValue){
        		case "option1":
        			$scope.computeResult=$scope.firstNum+$scope.secondNum;
        			break;
        		case "option2":
        			$scope.computeResult=$scope.firstNum-$scope.secondNum;
        			break;
        		case "option3":
        			$scope.computeResult=$scope.firstNum*$scope.secondNum;
        			break;
        		case "option4":
        			$scope.computeResult=$scope.firstNum/$scope.secondNum;
        			break;

        	}
        };
        $scope.$on('setNum',function(event,x,y){
        	$scope.firstNum=x;
        	$scope.secondNum=y;
        });
    }]);
    myApp.controller('approachChildController',function($scope){
    	$scope.title="我是一个子controller";
    	$scope.setfirstNum=1;
    	$scope.setsecondNum=2;
    });
}