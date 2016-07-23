class Person {
  constructor(name, weight) {
    this.myName = name;
    this.myWeight = weight;
  }
  // container for data and behavior
  sayName() {
      console.log(' I am ' + this.myName);
  }
  sayWeight() {
      console.log(' My weight ' + this.myWeight);
  }
}

let peter = new Person('Peter', '70kg');
//new  Class -> Object

let lucy = new Person('Lucy', '50kg');


peter.sayName();
peter.sayWeight();

lucy.sayName();
lucy.sayWeight();
