require('./node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./node_modules/font-awesome/css/font-awesome.min.css');
var Vue=require('./node_modules/vue/dist/vue.min.js');
VueRouter = require('./node_modules/vue-router/dist/vue-router.min.js');
configRouter = require('./app/router-config.js');
Vue.use(VueRouter);
const router = new VueRouter({
    hashbang: true, //hash路由
    saveScrollPosition: true,
});
configRouter(router);
// configure router

const App = Vue.extend(require('./app.vue'));
router.start(App, '#app');
