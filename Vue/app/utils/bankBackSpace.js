//处理键盘事件 禁止后退键（Backspace）密码或单行、多行文本框除外  
module.exports={
    bankBackSpace:function(e){     
    var ev = e || window.event;//获取event对象     
    var obj = ev.target || ev.srcElement;//获取事件源           
    var t = obj.type || obj.getAttribute('type');//获取事件源类型
  /*  var t2= obi.tagName||obj.getAttribute('tagName');*/
         
    //当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效  
    var flag1=(ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea")  
                ?true:false;     
    //判断  
    if(flag1){  
        return false;  
    }  
  
   
}
 }
 