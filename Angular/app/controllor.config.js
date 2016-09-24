var messageListController=require('./ngcontroller/messageList.js');
var approachController=require('./ngcontroller/approach.js');
var strategyController=require('./ngcontroller/strategy.js');
var messageTypeController=require('./ngcontroller/messageType.js');
module.exports = function(myApp) {
    messageListController(myApp);
    approachController(myApp);
    strategyController(myApp);
    messageTypeController(myApp);
}