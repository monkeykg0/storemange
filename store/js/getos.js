/**
 * 
 * 获取操作系统类型
 * @return {String} 
 */
function getOS() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isAndroid){
        return 'android'
    }
    if(isiOS){
        return 'ios'
    }
}