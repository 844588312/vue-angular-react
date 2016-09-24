module.exports = function(myApp) {
	myApp.controller("messageTypeController",function($scope,$http){
        $scope.title = "D";
        $scope.msgType=[{id:1,name:"push",option:'xxx'}];
        $scope.text="'Hello World!'";
    });
}