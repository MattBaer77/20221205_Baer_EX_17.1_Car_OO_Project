// 1

// Create a class for a vehicle. Each vehicle instance shoudl have:

// make

// model

// year

class Vehicle{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return 'Beep';
    }
}

//2

class Car extends Vehicle{

    constructor(make, model, year) {
        super(make, model, year);
    }

    numWheels = 4;
}

//3

class MotorCycle extends Vehicle{

    constructor(make, model, year) {
        super(make, model, year);
    }

    numWheels = 2;

    revEngine(){
        return 'VROOOOOM!'
    }

}

//4

//create a class for a Garage

//it should have a property called vehicles

//vehicles should store an array of vehicles

//it should have a property of capacity



class Garage{

    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    addNew(v){

        if (!(v instanceof Vehicle)) {
            return 'Vehicles Only!'
        }

        if (this.vehicles.length >= this.capacity) {

            return 'Garage Full!'

        }

        this.vehicles.push(v);
        return `Added ${JSON.stringify(v)}`
        
    }

}