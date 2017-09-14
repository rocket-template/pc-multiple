var page = window.$CONFIG || {};
var loginFlag = page.userId ? true : false;
var param = function(obj){
    var ret = [];
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            ret.push(i + '=' + obj[i]);
        }
    }
    return ret.join('&');
};


var env = window.location.host.indexOf('pre') != -1 ?
    'pre' : (window.location.host.indexOf('dev') != -1 ? 'dev' : 'dist');

export {loginFlag, page, env};
