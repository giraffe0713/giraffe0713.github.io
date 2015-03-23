// var person = {
// 	name: "xiaoxian",
// 	age:21
// }

// var person = {};
// Object.defineProperty(person,"name",{
// 	writeable:false,
// 	value:"Nicholas"
// })
// console.log(person.name);
// person.name = "Greg";
// console.log(person.name);


// Object.defineProperty(person,"name",{
// 	configurable:false,
// 	value:"Nicholas"
// })
// console.log(person.name);
// person.name = "xiaoxian";
// console.log(person.name);


// Object.defineProperty(person,"name",{
// 	configurable:true,
// 	value:"xiaoxin"
// })
// console.log(person.name);

// var book = {
// 	_year:2004,
// 	edition:1
// };

// Object.defineProperty(book,"year",{
// 	get:function(){
// 		return this._year;
// 	},
// 	set:function(newValue){   //重写了this._year 和 this.edition
// 		if(newValue>2004){
// 			this._year = newValue;
// 			this.edition += newValue -2004;
// 		}
// 	}
// });

// book.year = 2005;
// console.log(book._year);
// console.log(book.edition);


// var book = {};
// Object.defineProperties(book,{
// 	_year:{
// 		value: 2004
// 	},
// 	edition:{
// 		value:1
// 	},
// 	year:{
// 		get:function(){
// 			return this._year;
// 		},
// 		set:function(newValue){
// 			if(newValue>2004){
// 				this._year = newValue;
// 				this.edition += newValue-2004;
// 			}
// 		}
// 	}
// });

// var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
// console.log(descriptor.value);
// console.log(descriptor.configurable);

// console.log(typeof(descriptor.get))

// var descriptor = Object.getOwnPropertyDescriptor(book,"year");
// console.log(descriptor.value);
// console.log(descriptor.enumerable);
// console.log(typeof(dscriptor.get))



// function Person(name,age,job){
// 	this.name = name;
// 	this.age = age;
// 	this.job = job;
// 	this.sayName = function(){
// 		console.log(name);
// 	}
// }

// var person1 = new Person("Nicholas",29,"Software Engineer");
// var person2 = new Person("Greg",27,"Doctor");

// var person1 = document.getElementById("j_img");
// console.log(person1);
// person1 = new Person("xiao",21,"Software");
// console.log(person1.src);
// console.log(person1.name);

// console.log(person1);
// console.log(person2);


// console.log(person1.name);
// console.log(person1 instanceof Person);

// Person("xiao",21,"Software");
// window.sayName();

// var o = new Object();
// Person.call(o,"Kristen",25,"Doctor");
// o.sayName();


function Person(1,2,3,4){
	argument: arguments.length
};
var friend = new Person;

// Person.prototype = {   //这是重写了整个原型
// 	constrctor : Person,
// 	name : "Nicholas",
// 	age : 29,
// 	job : "Software",
// }

Person.prototype.name = "Nicholas";
Person.prototype.age = 21;
Person.prototype.sayName = function(){
	console.log(this.name)
}



// var person1 = new Person();
// // var person2 = new Person();
// person1.name = "xiao";
// person1.age = 30;
// console.log(person1.name);

// delete person1.name;
// console.log(person1.name);
// person1.name = "xiao";
// person1.sayHi = function(){
// 	console.log("Hihi")
// }
// person1.sayHi();
// console.log(person1.name);
// console.log(person2.name);
// person2.sayHi();

// for(var prop in person1){
// 	console.log(prop)
// }
// console.log(hasPrototypeProperty(person1,"name"))
// for(var prop in person1){
// 	console.log(prop)
// }

// var person1keys = Object.keys(person1);
// console.log(person1keys);

// var friend = new Person();
// Person.prototype.sayHi = function(){
// 	console.log("hi");
// };
// friend.sayHi();
// for(var prop in friend){
// 	console.log(friend[prop])
// }

// console.log(friend.name)






