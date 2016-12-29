module.exports = function(myApp) {
	myApp.controller("messageTypeController",function($scope,$http){
        $scope.title = "D";
        $scope.msgType=[{id:1,name:"push",option:'xxx'}];
        $scope.text="'Hello World!'";
        $scope.html = '<p>mzz</p><input ng-blur="check()" ng-model="text"/>';
        $scope.check=function(validnum){
            console.log("mzz hello");
        }
        $scope.fullNumber=function(input,parme1,parme2){
            return input+'.00';
        }
    }).directive("ngChange",function(){
    	return {
            restrict:"A",
            require:'ngModel',
            link: function (scope, iElement, iAttrs,ngController) {
                var ele=iElement[0].nextElementSibling;
                var valid=true;
                console.log(ngController);
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
	}).directive('compile', function($compile) {
      // directive factory creates a link function
      return function(scope, element, attrs) {
        scope.$watch(
          function(scope) {
             // watch the 'compile' expression for changes
            return scope.$eval(attrs.compile);
          },
          function(value) {
            // when the 'compile' expression changes
            // assign it into the current DOM
            element.html(value);
            // compile the new DOM and link it to the current
            // scope.
            // NOTE: we only compile .childNodes so that
            // we don't get into infinite loop compiling ourselves
            $compile(element.contents())(scope);
          }
        );
      };
    });
}