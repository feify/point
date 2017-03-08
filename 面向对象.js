// 【附加题】假设有一个基础对象叫“动物”，拥有以下属性：腿的数量、是否有尾巴，
// 有另外一个对象叫“猫”，拥有“动物”对象的属性，并增加一个属性为：动物名称，
// 再增加一个方法，返回动物名称+腿的数量+是否有
// 尾巴的描述，请使用javascript原型链继承来创建以上2个对象。

// 原型链
function Animal(){};
Animal.prototype.leg=4;
Animal.prototype.tail=true;
var animal=new Animal();
function Cat(){};
Cat.prototype=animal;
Cat.prototype.name='cat';
Cat.prototype.getInfo=function(){
	return "Animal's name"+this.name+"number of leg:"+this.leg+"has tail:"+Boolean(this.tail);
	console.log("Animal's name"+this.name+"number of leg:"+this.leg+"has tail:"+Boolean(this.tail));
};
var cat=new Cat();
cat.getInfo();

// 构造函数
function Animal(leg,tail){
	this.leg=leg;
	this.tail=tail;
}

function Cat(name,leg,tail){
	Animal.call(this,leg,tail);
	this.name=name;
	this.getInfo=function(){
		return "Animal's name"+this.name+"number of leg:"+this.leg+"has tail:"+Boolean(this.tail);
	} 
};
var cat=new Cat('cat',4,true);
cat.getInfo();
