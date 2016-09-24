var angular = require('angular');
var controllerConfig=require('./app/controllor.config.js');
var routeConfig=require('./app/router.config.js');
require('angular-route');
require('angular-mocks');
// ngRouteModule.directive('ngView', ngViewFactory);
var myApp = angular.module('myApp', ['ngRoute']);
routeConfig(myApp);
controllerConfig(myApp);


