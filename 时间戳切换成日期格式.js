/**
 * Created by Administrator on 2018/3/8 0008.
 */
formatDate(1521083543000);
function formatDate(nows) {
    var now=new Date(nows);
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var date=now.getDate();
    var hour=now.getHours();
    var minute=now.getMinutes();
    var second=now.getSeconds();
    return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
}