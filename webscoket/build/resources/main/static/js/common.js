// 년-월-일
function getDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2);
    var day = ('0' + now.getDate()).slice(-2);
    return year + '-' + month  + '-' + day;
}

// 년-월-일 시:분:초
function getTimeStamp() {
    var now = new Date();
    var hours = ('0' + now.getHours()).slice(-2);
    var minutes = ('0' + now.getMinutes()).slice(-2);
    var seconds = ('0' + now.getSeconds()).slice(-2);
    return getDate() + ' ' + hours + ':' + minutes  + ':' + seconds;
}