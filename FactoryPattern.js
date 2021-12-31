//Factory pattern: This is a creational design pattern. 
//What is a factory? In real world, a factory is a building where things are manufactured.
//In Programming, factory is an object for creating objects.
//This is useful as we can create objects in a centralized location instead of doing const obj = new Object()
//which can be littered in your code. This pattern keeps the code clean and concise.

// You own a software company, you have 2 types of employees 1:Developer 2:Tester
// You have a database where you want to create and manage your employees: this is an empty array

function Developer(name) {
    this.name = name;
    this.type = "Developer"
}

function Tester(name) {
    this.name = name;
    this.type = "Tester"
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
        }
    }
}

function say() {
    console.log(`I am ${this.name} and I am a ${this.type}`)
}

//Database
const employees = [];
const employeeFactory = new EmployeeFactory()
employees.push(employeeFactory.create("Sneha", 1));
employees.push(employeeFactory.create("Such", 1));
employees.push(employeeFactory.create("JK", 2));

employees.forEach(emp => {
    say.call(emp);
})

