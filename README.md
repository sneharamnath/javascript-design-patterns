# javascript-design-patterns

This repo is my learning of design patterns in JavaScript with small examples to demonstrate them.

## What are design patterns?

Design patterns are a generic solution to a common software design problem.

## Types of design patterns

1. Creational design pattern - Factory, Singleton
2. Structural design pattern - Proxy
3. Behavioral design pattern - Iterator, Strategy, Observer, Mediator,Visitor

### [Factory pattern](https://github.com/sneharamnath/javascript-design-patterns/blob/master/FactoryPattern.js)

- A factory in real world is a building where things are manufactured. 
- In Programming, factory is an object for creating objects. 
- This is useful when we need to create objects in a centralized location instead of doing `const obj = new Object()` which can be littered in your code. This pattern keeps the code clean and concise.

### [Singleton pattern](https://github.com/sneharamnath/javascript-design-patterns/blob/master/SingletonPattern.js)

- It is helpful when we need to restrict the instance of an object to only one.

### [Strategy pattern](https://github.com/sneharamnath/javascript-design-patterns/blob/master/StrategyPattern.js)

- This is used to encapsulate related functions(strategies) into one. It is useful to swap strategies easily.

### [Iterator pattern](https://github.com/sneharamnath/javascript-design-patterns/blob/master/IteratorPattern.js)

- Allows you to iterate over a collection of objects. 
- Collections can be anything like arrays, trees, graphs. 
- Iterator pattern allows us to define rules on how to iterate over the collections. 
- Example of rules can be - front to back iteration, back to front iteration, skip 2 items in collection etc..

### [Observer pattern](https://github.com/sneharamnath/javascript-design-patterns/blob/master/ObserverPattern.js)

- This is used to define 1:many relationship from 1 object(Subject) to many objects(observers). 
- Observers can be functions which watch the subject and wait for some signal or trigger from subject before they are called.

### [Proxy pattern](https://github.com/sneharamnath/javascript-design-patterns/blob/master/ProxyPattern.js)

- Allows one to use one object(proxy) as a placeholder for another object. 
- Proxy can control access to that object. So instead of using the object directly we can make use of proxy to use that object. 
- Proxies can be used to add extra functionality like cache.

### [Mediator pattern](https://github.com/sneharamnath/javascript-design-patterns/blob/master/MediatorPattern.js)

- Allows one to define an object(mediator) that encapsulates and controls how some set of objects interact with each other. 
- Example- Lets say there are 3 objects and they need to intreact with each other and send messages. 
   - Instead of the objects sending the messages directly to each other, they send it to the mediator. 
   - The mediator can have all the complex logic and routing to decide where these messages need to go.`

### [Visitor pattern](https://github.com/sneharamnath/javascript-design-patterns/blob/master/VisitorPattern.js)

- Allows one to add extra functionality/methods to the object without changing the object. 
- The new functionality and logic is kept in a seperate object/function a.k.a visitor object/visitor function. 
- The object you want to extend a.k.a receiving object should have an `accept` method which takes in visitor object and provides the visitor object access to different information and properties of that object. 
- This pattern is useful when we need to extend the functionality of a library or framework.

### [Pub/sub pattern](https://github.com/sneharamnath/javascript-design-patterns/blob/master/PubSubPattern.js)

- Allows one to define many to many relationship. 
- The pub/sub model contains a middleware called the pub/sub broker or message broker. The publishers send events/content to the broker and the broker handles the content delivery to interested subscribers. 
- The publishers publishes the content to a topic and the interested subscribers access these content by sending subscriptions to the message broker channel`

