module.exports = function(myApp) {
    myApp.config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/messageList', {
                templateUrl: 'app/component/messageList.html',
                controller: 'messageListController'
            }).when('/approach', {
                templateUrl: 'app/component/approach.html'
            }).when('/strategy', {
                templateUrl: 'app/component/strategy.html',
                controller: 'strategyController',
            }).when('/messageType', {
                templateUrl: 'app/component/messageType.html',
                controller: 'messageTypeController',
            });
    });
}
