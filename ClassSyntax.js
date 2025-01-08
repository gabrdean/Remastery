class Computer {
    constructor(brand, OS, type) {

        this.brand = brand;
        this.OS = OS;
        this.type = type;

    }

    powerOn(){
       return console.log(this.brand +" " +this.type + " powered on with " + this.OS)
    }

    static powerAll(...computers){
        // Flatten the array if computers are passed as an array
        const flatComputers = computers.flat();
        flatComputers.forEach(device => device.powerOn());
    }


   

}
// Create two instances
const robsPC = new Computer('HP', 'Windows 10', 'PC');
const juliesPC = new Computer('Apple', 'Sonoma', 'mac');

// Test individual powerOn
robsPC.powerOn();
juliesPC.powerOn();

// Test static powerAll method
Computer.powerAll(robsPC, juliesPC);
// Or with an array
Computer.powerAll([robsPC, juliesPC]);



