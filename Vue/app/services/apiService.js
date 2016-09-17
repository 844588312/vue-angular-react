var FAKER_URL = "http://localhost:3000/fakerApi/http";
var API_URL = {
    LOGIN: "/account/login", //登录

    GET_MESSAGE_LIST: "/messageList", //1.1.3 查看发送的消息列表

    GET_PUSH_SEND_APPROACH: "/push/sendApproach/{sendApproachId}", //2.1.1.1查看极光推送
    ADD_PUSH_SEND_APPROACH: "/push/sendApproach/add", //2.1.1.2 新增极光推送
    MODIFY_PUSH_SEND_APPROACH: "/push/sendApproach/{sendApproachId}/edit", //2.1.1.3 修改极光推送方式
    DEL_PUSH_SEND_APPROACH: "/push/sendApproach/{sendApproachId}/delete", //2.1.1.4 删除极光推送方式

    GET_SMS_SEND_APPROACH: "/sms/sendApproach/{sendApproachId}", //2.1.2.1 查看短信推送方式
    ADD_SMS_SEND_APPROACH: "/sms/sendApproach/add", //2.1.2.2 新增短信推送方式
    MODIFY_SMS_SEND_APPROACH: "/sms/sendApproach/{sendApproachId}/edit", //2.1.2.3 修改短信推送方式
    DEL_SMS_SEND_APPROACH: "/sms/sendApproach/{sendApproachId}/delete", //2.1.2.4 删除短信推送方式

    GET_HTTP_SEND_APPROACH: "/http/sendApproach/{sendApproachId}", //2.1.3.1 查看第三方 http 推送方式
    ADD_HTTP_SEND_APPROACH: "/http/sendApproach/add", //2.1.3.2 新增第三方 http 推送方式
    MODIFY_HTTP_SEND_APPROACH: "/http/sendApproach/{sendApproachId}/edit", //2.1.3.3 修改第三方 http 推送方式
    DEL_HTTP_SEND_APPROACH: "/http/sendApproach/{sendApproachId}/delete", //2.1.3.4 删除第三方 http 推送方式

    GET_SEND_APPROACH_LIST: "/sendApproach/sendApproachList", //2.1.4查看推送方式列表

    GET_SEND_STRATEGY: "/sendStrategy/{sendStrategyId}", //3.1.1 查看推送策略
    ADD_SEND_STRATEGY: "/sendStrategy/add", //3.1.2 新增推送策略
    MODIFY_SEND_STRATEGY: "/sendStrategy/{sendStrategyId}/edit", //3.1.3 修改推送策略
    DEL_SEND_STRATEGY: "/sendStrategy/{sendStrategyId}/delete", //3.1.4 删除推送策略
    GET_SEND_STRATEGY_LIST: "/sendStrategy/sendStrategyList", //3.1.5 查看推送策略列表

    GET_MESSAGE_TYPE: "/messageType/{messageTypeId}", //4.1.1 查看消息类型
    ADD_MESSAGE_TYPE: "/messageType/add", //4.1.2 新增消息类型
    MODIFY_MESSAGE_TYPE: "/messageType/{messageTypeId}/edit", //4.1.3 修改消息类型
    DEL_MESSAGE_TYPE: "/messageType/{messageTypeId}/delete", //4.1.4 删除消息类型
    GET_MESSAGE_TYPE_LIST: "/messageType/messageTypeList", //4.1.5 查看消息类型列表
};

var baseService = require('./baseService.js');
var utils = require('../utils/utils.js');

//api 业务接口
module.exports = {
    //用户接口
    login: function(account, password) {
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.LOGIN);
        return baseService.httpPost(url, null, false);
    },
    
    getMessageList: function(page, pageSize, startTime, endTime, status) {
        // return FAKER_URL + API_URL.GET_MESSAGE_LIST;
        var url = utils.getFuncParameters(arguments.callee, FAKER_URL + API_URL.GET_MESSAGE_LIST);
        console.log(url);
        return baseService.httpGet(url,true);
    },

    //推送方式管理接口
    //2.1.4 查看推送方式列表
    getSendApproachList: function(page, pageSize) {
        var url = utils.getFuncParameters(arguments.callee, FAKER_URL + API_URL.GET_SEND_APPROACH_LIST);
        console.log(url);
        return baseService.httpGet(url,true);
    },

    //2.1.1.1查看极光推送
    getPushSendApproach: function(sendApproachId) {
       var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.GET_PUSH_SEND_APPROACH);
        return baseService.httpGet(url,true);
    },
    //2.1.1.2新增极光推送
    addPushSendApproach: function(name,appKey,masterSecret) {
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.ADD_PUSH_SEND_APPROACH);
        return baseService.httpPost(url,null,true);
    },
    //2.1.1.3修改极光推送
    modifyPushSendApproach: function(sendApproachId,name,appKey,masterSecret) {
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.MODIFY_PUSH_SEND_APPROACH);
        return baseService.httpPost(url,null,true);
    },
    //2.1.1.4删除极光推送
    delPushSendApproach: function(sendApproachId) {
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.DEL_PUSH_SEND_APPROACH);
        return baseService.httpPost(url,null,true);
    },

    //2.1.2.1查看短信推送
    getSmsSendApproach: function(sendApproachId) {
       var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.GET_SMS_SEND_APPROACH);
        return baseService.httpGet(url,true);
    },
    //2.1.2.2新增短信推送
    addSmsSendApproach: function(name,smsAddress,smsPort,userName,userPassword) {
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.ADD_SMS_SEND_APPROACH);
        return baseService.httpPost(url,null,true);
    },
    //2.1.2.3修改短信推送
    modifySmsSendApproach: function(sendApproachId,name,smsAddress,smsPort,userName,userPassword) {
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.MODIFY_SMS_SEND_APPROACH);
        return baseService.httpPost(url,null,true);
    },
    //2.1.2.4删除短信推送
    delSmsSendApproach: function(sendApproachId) {
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.DEL_SMS_SEND_APPROACH);
        return baseService.httpPost(url,null,true);
    },
     //2.1.3.1查看第三方推送
    getHttpSendApproach: function(sendApproachId) {
       var url = utils.getFuncParameters(arguments.callee, FAKER_URL + API_URL.GET_HTTP_SEND_APPROACH);
        return baseService.httpGet(url,true);
    },
    //2.1.3.2新增第三方推送
    addHttpSendApproach: function(name,appAddress,supportType) {
        var url = utils.getFuncParameters(arguments.callee, FAKER_URL + API_URL.ADD_HTTP_SEND_APPROACH);
        console.log(url);
        return baseService.httpGet(url,true);
    },
    //2.1.3.3修改第三方推送
    modifyHttpSendApproach: function(sendApproachId,name,appAddress,supportType) {
        var url = utils.getFuncParameters(arguments.callee, FAKER_URL + API_URL.MODIFY_HTTP_SEND_APPROACH);
        console.log(url);
        return baseService.httpGet(url,true);
    },
    //2.1.3.4删除第三方推送
    delHttpSendApproach: function(sendApproachId) {
        var url = utils.getFuncParameters(arguments.callee, FAKER_URL + API_URL.DEL_HTTP_SEND_APPROACH);
        console.log(url);
        return baseService.httpGet(url,true);
    },

    // 3.1.1 查看推送策略
    getSendStrategy: function(sendStrategyId) {
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.GET_SEND_STRATEGY);
        return baseService.httpGet(url,true);
    },
    // 3.1.2 新增推送策略
    addSendStrategy: function(strategyName,retryTimes,retryInterval,intervalIncreaseTime,callBackAddress,callBackTimes,callBackInterval,phone) {
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.ADD_SEND_STRATEGY);
        return baseService.httpPost(url,null,true);
    },
    // 3.1.3 修改推送策略(405)
    modifySendStrategy: function(sendStrategyId,strategyName,retryTimes,retryInterval,intervalIncreaseTime,callBackAddress,callBackTimes,callBackInterval,phone) {
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.MODIFY_SEND_STRATEGY);
        return baseService.httpPost(url,null,true);
    },
    // 3.1.4 删除推送策略
    delSendStrategy: function(sendStrategyId) {
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.DEL_SEND_STRATEGY);
        return baseService.httpPost(url,null,true);
    },
    //3.1.5 查看推送策略列表
    getSendStrategyList: function(page,pageSize) {
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.GET_SEND_STRATEGY_LIST);
        console.log(url);
        return baseService.httpGet(url,true);
    },
    //4.1.1 查看消息类型
    getMessageType:function(messageTypeId){
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.GET_MESSAGE_TYPE);
        return baseService.httpGet(url,true);
    },
    //4.1.2 新增消息类型
    addMessageType:function(name,sendStrategyId,pushSendId,smsSendId,httpSendId){
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.ADD_MESSAGE_TYPE);
        return baseService.httpPost(url,null,true);
    },
    //4.1.3 修改消息类型
    modifyMessageType:function(messageTypeId,name,sendStrategyId,pushSendId,smsSendId,httpSendId){
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.MODIFY_MESSAGE_TYPE);
        return baseService.httpPost(url,null,true);
    },
    //4.1.4 删除消息类型
    delMessageType:function(messageTypeId){
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.DEL_MESSAGE_TYPE);
        return baseService.httpPost(url,null,true);
    },
    //4.1.5 查看消息类型列表
    getMessageTypeList:function(page,pageSize){
        var url = utils.getFuncParameters(arguments.callee, BASE_URL + API_URL.GET_MESSAGE_TYPE_LIST);
        return baseService.httpGet(url,true);
    }
};
