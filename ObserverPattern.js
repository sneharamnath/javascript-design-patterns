//Observer Pattern: This is used to define 1:many relationship from 1 object(Subject) to many objects(observers)
//Observers can be functions which watch the subject and wait for some signal or trigger from subject before they are called.


function Subject(){
    this.observers = [];
}

Subject.prototype = {
    subscribe: function(fn){
       this.observers.push(fn)
    },
    unsubscribe: function(fnToRemove){
        this.observers = this.observers.filter(fn => {
            if(fn !== fnToRemove)
                return fn
        })
    },
    fire: function(){
        this.observers.forEach(fn => {
            fn.call()
        })
    }
}

//Usage
const subject = new Subject()
function observer1(){
    console.log("Observer1 Firing!")
}
function observer2(){
    console.log("Observer2 Firing!")
}
subject.subscribe(observer1)
subject.subscribe(observer2)
subject.fire()

//Output
//Observer1 Firing!
//Observer2 Firing!

subject.unsubscribe(observer2)
subject.fire()

//Output
//Observer1 Firing!