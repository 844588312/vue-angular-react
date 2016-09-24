//基础控制类
var $ = require('../../bower_components/jquery/dist/jquery.min.js');

module.exports = {
    httpGet: function(url, auth) {
        var result;
        $.support.cors = true;
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            async: false,
            beforeSend: function(xhr) {
                if (auth) {
                    xhr.setRequestHeader("token", localStorage.token);
                }
            },
            success: function(data) {
                result = data;
            }
        });
        return result;
    },

    httpPost: function(url, data, auth) {
        var result;
        $.support.cors = true;        
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            dataType: "json",
            async: false,
            beforeSend: function(xhr) {
                if (auth) {
                    xhr.setRequestHeader("token", localStorage.token);
                }
            },
            success: function(data) {
                result = data;
            }
        });
        return result;
    }
};
