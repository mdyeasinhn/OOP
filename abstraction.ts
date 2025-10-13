// Abstraction in OOP

interface vehiclel {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

class Car implements vehiclel {
    startEngine(): void {
        console.log(`I am starting the car engine`)
    };
    stopEngine(): void {
        console.log(`I am stoping the car engine`)
    };
    move(): void {
        console.log(`I am moveing the car`)
    };
    test(): void {
        console.log(`I am testing the car`)
    }
};

const odiCar = new Car();
odiCar.startEngine();