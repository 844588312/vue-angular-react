module.exports={
	isMobile:function (validateString) {
		var reg=/^[1][0-9]{10}$/;
		return reg.test(validateString);
	},
	lessThan:function(validateString) {
		var num = parseFloat(validateString);
       if(num <0 || num>65535){
        return false;
    } 
    return true;
	},
	integer:function(validateString){
	   var reg=/^\+?[1-9][0-9]*$/;
	   return reg.test(validateString);
	},
	integero:function(validateString){
	   var reg=/^\+?[0-9][0-9]*$/;
	   return reg.test(validateString);
	}
	
}