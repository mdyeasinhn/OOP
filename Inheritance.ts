// inheritance in OOP
class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    };
    getSleep(numOfHour: number) {
        console.log(` ${this.name} will sleep for ${numOfHour}`)
    }
};

class Student extends Person {                                   //useing inheritance
    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    };
    getSleep(numOfHour: number) {
        console.log(` ${this.name} will sleep for ${numOfHour}`)
    }
};

const student = new Student("Yeasin", 23, "BD");

class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);                                         //useing inheritance
        this.designation = designation;
    };

    takeClass(numOfClass: number) {
        console.log(` ${this.name} will take ${numOfClass}`)
    }
};

const teacher = new Teacher("Yeasin", 30, "BD", "");
