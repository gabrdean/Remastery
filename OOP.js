class Animal {
    constructor(name, prey) {
      this.name = name;
      this.prey = prey;
    }
  
    hunt() {
      console.log(this.name + "brought you back a" + this.prey);
    }
  
    static feed(animal) {
      console.log("You filled" + animal.name + "'s bowl");
    }
  }
  
  class Dog extends Animal {
    constructor(name){
        super(name, 'water bottle')
    }

    rollover() {
        console.log(this.name + "Rolled over")
    }
    // constructor inherited from Animal so no need to define one here
  }
  

  class Cat extends Animal {
    constructor(name){
        super(name, 'Mouse')
    }
    fetch() {
        console.log(this.name + "looks at you confused")
    }


  }


  const milo = new Dog('Milo'); 
  milo.hunt(); 
  Dog.feed(milo); 


  const pumpkin = new Cat('Pumpkin')

  Cat.feed(pumpkin)
