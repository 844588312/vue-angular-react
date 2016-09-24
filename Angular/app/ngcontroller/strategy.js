var utils=require('../utils/utils.js');
module.exports = function(myApp) {
	myApp.value("defaultInput1", 1);
    myApp.value("defaultInput2", 2);
    myApp.constant("_constant","can't modify");
	myApp.config(function($provide,_constant) {
        $provide.provider('MathService', function() {
            this.$get = function() {
               var factory = {};  
               factory.reComputeResult = function(value,a, b) {
		        	switch(value){
		        		case "option1":
		        			return a+b;
		        			break;
		        		case "option2":
		        			return a-b;
		        			break;
		        		case "option3":
		        			return a*b;
		        			break;
		        		case "option4":
		        			return a/b;
		        			break;
		        	}
		        }
               return factory;
            };
        });
    });
    myApp.factory('MathService', utils); 
    myApp.service('CalcService', function($injector){
        var MathService=$injector.get('MathService');
        this.reComputeResult = function(value,a,b) { 
         	return MathService.reComputeResult(value,a,b); 
       	}
    });
    myApp.controller('strategyController', function($scope, CalcService, defaultInput1,defaultInput2,_constant) {
		$scope.title = "B";
		$scope.redioValue="option1";
        $scope.firstNum = defaultInput1;
        $scope.secondNum = defaultInput2;
        console.log(_constant);
        $scope.computeResult = CalcService.reComputeResult($scope.redioValue,$scope.firstNum,$scope.secondNum);
        $scope.reComputeResult = function() {
        	$scope.computeResult = CalcService.reComputeResult($scope.redioValue,$scope.firstNum,$scope.secondNum);
        }
    });
}