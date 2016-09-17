module.exports = {
    getTableTransData: function() {
        return {
            responsive: true,
            "language": {
                "lengthMenu": "每页 _MENU_ 条记录",
                "zeroRecords": "没有找到记录",
                "info": "第 _PAGE_ 页 ( 总共 _PAGES_ 页 )",
                "infoEmpty": "无记录",
                "infoFiltered": "(从 _MAX_ 条记录过滤)",
                // 'search':"搜索 "
            }
        };

    },
    
    //从方法参数中组装url请求
    getFuncParameters: function(func, orignalUrl){
        var argsArray = /\(\s*([\s\S]*?)\s*\)/.exec(func)[1].split(/\s*,\s*/);
        var arguments = func.arguments;
        var subUrl = "";
        for(var i=0; i<arguments.length; i++){
            if(-1 != orignalUrl.indexOf('{'+argsArray[i]+'}')){
                orignalUrl = orignalUrl.replace('{'+argsArray[i]+'}',arguments[i]);
                continue;
            }//处理url自带参数

            if(arguments[i]!=null){
                if(subUrl!=""){
                    subUrl +="&";
                }
                subUrl += argsArray[i]+"="+encodeURIComponent(arguments[i]);
            }//处理?后的参数
        }

        if(subUrl!=""){
            subUrl = "?"+subUrl;
        }
        return orignalUrl + subUrl;
    },
    // 对Date的扩展，将 Date 转化为指定格式的String
    // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
    // 例子： 
    // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
    // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
    formatDateTime: function (date, fmt) {
        var o = {
            "M+": date.getMonth() + 1, //月份 
            "d+": date.getDate(), //日 
            "h+": date.getHours(), //小时 
            "m+": date.getMinutes(), //分 
            "s+": date.getSeconds(), //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
}
