//Person Class
class Person {

// Person Constructor
constructor(name='Anonymous', age=0){
this.name=name;
this.age= age;
}

//super greeting method
getGreeting(){
console.log(`Hey This is ${this.name}`);
}

//super description method
getDescription(){
console.log(`${this.name} is of Age - ${this.age}`);
}

}


// Student Class
class Student extends Person{

//Child Construtor method
constructor(name, age, major){
super(name,age);
this.major = major;
}

//Check for major
hasMajor(){
return !!this.major;
}

//overriden description method
getDescription(){
	let supGreet = super.getDescription();
		if(this.hasMajor()){
			supGreet = supGreet+` with a major - ${this.major}`;
			}
return supGreet;
}
}

// Traveler Class
class Traveler extends Person{

constructor(name,age, supPlace){
super(name,age);
this.supPlace= supPlace;
}

getGreeting(){
super.getGreeting();
if(!!this.supPlace){ console.log(`I'm visting from ${this.supPlace}.`);}
}
}

const me = new Person('Gautham', 10);
console.log(me.getDescription());
const stud = new Student('Sunny', 10, 'CSE');
console.log(stud.getDescription());
const trvlr = new Traveler('Amul', 26, 'Michigan');
trvlr.getGreeting();


