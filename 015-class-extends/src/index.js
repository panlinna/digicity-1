class Person {
  constructor(name, weight) {
    this.myName = name;
    // this -> this object
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


class Man extends Person {
  sayHooooo() {
    console.log('Hooooooo');
  }
}


let peter = new Man('Bruce', '70kg');

peter.sayHooooo();
peter.sayName();
