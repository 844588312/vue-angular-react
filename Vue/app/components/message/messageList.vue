<style type="text/css">
    h1{
        text-align: center;
    }
</style>
<template>
	<div id="page-wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">A</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table class="table table-striped table-bordered table-hover" id="dataTables-msgList">
                            <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>姓名</th>
                                    <th>年龄</th>
                                    <th>性别</th>
                                    <th>生日</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="msg in msgList">
                                    <td>{{ msg.id }}</td>
                                    <td>{{ msg.title }}</td>
                                    <td>{{ msg.content }}</td>
                                    <td>{{ msg.receive }}</td>
                                    <td>{{ msg.time }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import api from '../../services/apiService.js';
    export default {
        init(){
            console.log('init');
        },
        created(){
            console.log('created');
        },
        beforeCompile(){
            console.log('beforeCompile');
        },
        compiled(){
            console.log('compiled');
        },
        attached(){
            console.log('attach');
        },
        ready (){   
            console.log('ready');
        },
        beforeDestroy(){
            console.log('beforeDestory');
        },
        detached(){
            console.log('detached');
        },
        destroyed(){
            console.log('destoryed');
        },
        data(){
            return{
                msgList:[],
                condition:{
                    starttime:"",
                    endtime:"",
                    status:""
                },
                total_size:0,
                page_index:1,
                page_size:20,
                items:[]
            }
       },
        route: {
                data:function(){
                    console.log('data');
                },
                activate: function (transition) {  
                    // var p1=new Promise(function(resolve,reject){
                        // window.setTimeout(function(){
                            
                            // console.log('ccc');
                        // },3000);
                    // });
                    console.log('activate before next');
                    transition.next();
                    console.log('activate after next');
                    this.items=['均不符合','均不符合','均不符合'];
                    // this.items[1]='mzz';

                    this.getMessageList();
                    // return p1;
                },
                canDeactivate:function(){
                    console.log('canDeactivate');
                },
                canActivate:function(){
                    console.log('canActivate');
                },
                deactivate:function(){
                    console.log('deactivate');
                }
        },
       methods:{
            getMessageList:function(){
                var ret = api.getMessageList();
                if(ret){
                    switch(ret.result){
                        case 0:
                            this.msgList=ret.data;
                            break;
                        case 3:
                            console.log(ret);
                            break;
                        default:
                    }
                }else{

                }
            }, 
       },
    }

</script>

