//Visitor pattern: Allows one to add extra functionality/methods to the object without changing the object.
//The new functionality and logic is kept in a seperate object/function a.k.a visitor object/visitor function.
//How it works? - The object you want to extend a.k.a receiving object should have an accept method which takes in
    //visitor object and provides the visitor object access to different information and properties of that object.
//This pattern is useful when we need to extend the functionality of a library or framework.

//This program demonstartes the usage of visitor pattern. 

//We have an Employee class. We can extend the functionality of employee class using visitor pattern.

function Employee(name, salary){
    this.name = name;
    this.salary = salary;
}

Employee.prototype = {
    getSalary: function(){
        return this.salary
    },
    setSalary: function(sal){
        this.salary = sal;
    },
    accept: function(visitorFunc){
        visitorFunc(this)
    }
}

sneha.getSalary() //10000

function ExtraSalary(emp){
    emp.setSalary(emp.getSalary() * 2)
}

sneha.accept(ExtraSalary)

sneha.getSalary() //20000