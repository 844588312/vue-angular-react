module.exports = function(myApp) {
	myApp.controller("messageTypeController",function($scope,$http){
        $scope.title = "D";
        $scope.msgType=[{id:1,name:"push",option:'xxx'}];
        $scope.text="'Hello World!'";
        $scope.check=function(validnum){

        }
    }).directive("ngChange",function(){
    	return {
            restrict:"A",
            link: function (scope, iElement, iAttrs,ngController) {
                var ele=iElement[0].nextElementSibling;
                var valid=true;
                scope.$watch(iAttrs.ngModel, function (newVal,oldVal) {
                	if(newVal==undefined){
                        valid=false;
                		return;
                	}
                	if(newVal==""){
                        valid=false;
                        ele.innerHTML="输入框不能为空";
                    	return;
                	}
                	if(Number(newVal)>20||Number(newVal)<0){
                        valid=false;
                    	ele.innerHTML="输入必须大于0且小于20";
                    	return;
                	}else if(newVal.indexOf(".")==-1){
                        valid=true;
                		return;
                	}
                	var reg=/[\d]{1,2}\.[\d]{2}/;
                	if(!reg.test(newVal)){
                		iElement[0].value=newVal.slice(0,5);
                        valid=false;
                    	ele.innerHTML="输入只能为两位小数";
                    	return;
                	}
                    ele.innerHTML="";
                });
                iElement[0].onblur=function(){
                    if(!valid){
                        return;
                    }
                    ele.innerHTML="";
                	var reg=/[\d]{1,2}/;
                	if(reg.test(this.value)){
                		this.value=this.value+".00";
                	}
                };
            }
    	};
	})
}