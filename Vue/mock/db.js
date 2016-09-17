'use strict'
//mock/db.js
//mock server 用于生成假数据

module.exports = function() {
  	var data = { 
	  		messageList:{
	  				result:0,
	  				message:"查询成功",
	  				data:[
		  				{id:1,title:"dd",content:"21",receive:'male',time:'2016.11.27'},
		  				{id:2,title:"vv",content:"21",receive:'male',time:'2016.11.27'},
		  				{id:3,title:"mzssz",content:"21",receive:'male',time:'2016.11.27'},
		  				{id:4,title:"mzawz",content:"21",receive:'male',time:'2016.11.27'},
		  				{id:5,title:"ee",content:"21",receive:'male',time:'2016.11.27'},
		  				{id:6,title:"ff",content:"21",receive:'male',time:'2016.11.27'},
		  				{id:7,title:"uu",content:"21",receive:'male',time:'2016.11.27'},
		  				{id:8,title:"wdsd",content:"21",receive:'male',time:'2016.11.27'},
		  				{id:9,title:"ii",content:"21",receive:'male',time:'2016.11.27'},
		  				{id:10,title:"pp",content:"21",receive:'male',time:'2016.11.27'},
	  				],
	  				total:10
	  		},
	  		2:{
	  			result:0,
	  			message:"查询成功",
	  			data:{id: 2, name: "111111", appAddress: "http://192.168.200.110:9500/jsp/receive/http", supportType: "get"},
	  			total:24
	  		},
	  		add:{result:0,message: "添加成功", data: null, total: 0},
	  		edit:{result:0,message: "修改成功", data: null, total: 0},
	  		delete:{result:0,message: "删除成功", data: null, total: 0}
	}
  return data
}