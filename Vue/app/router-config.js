module.exports = function(router) {
    // normal routes
    router.map({
        '/message': {
            component: require('./components/message/messageList.vue'),
            auth: true
        },
        '/approach': {
            component: require('./components/sendApproach/approachList.vue'),
            auth: true
        },
        '/strategy': {
            component: require('./components/sendStrategy/strategyList.vue'),
            auth: true
        },
        '/messageType': {
            component: require('./components/messageType/messageTypeList.vue'),
            auth: true
        }
    });
    router.redirect({
        '/': '/message',
    });
}
