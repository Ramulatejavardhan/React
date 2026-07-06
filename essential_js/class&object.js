class human{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hello my name is ${this.name}`);
        console.log(`my age is ${this.age}`);
    }
    walk(){
        console.log(`i am going for a walk at my age ${this.age}`);
    }
}
const person1=new human("teja",20);
person1.talk();
person1.walk();