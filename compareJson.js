// 比较两个json里面的字符串是否相同，把不通的字符串保存起来
let a=["Cu",'a','lf','liu','xiao'];
let b=['liu','xiao','fei','cu'];
let result1=[];
let result2=[];
let fun=function(v1,v2,r){
	v1.forEach(function(value1,index1,obj){
	let exit=false;
	// let aValue=value1.toLowerCase();
	v2.forEach(function(value2,index2,obj2){
		if(value2.toLowerCase()==value1.toLowerCase()){
			exit=true;
		}
	});
	if(!exit){
		r.push(value1);
	}
});
}
fun(a,b,result1);
fun(b,a,result2);
console.log(result1);
console.log(result2);