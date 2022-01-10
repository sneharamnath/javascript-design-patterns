//Pub-Sub pattern - It allows us to define many to many relationship.

//How does it work?
//It has a middleware called the message broker/pub-sub broker. The publisher sends the content to the message broker.
//The message broker handles relaying the message to the appropriate subscriber.
//The publisher sends the content to a topic and the interested subscribers access this content by subscribing to that topic
//The publishers and the subscribers do not need to know about each other.

class PubSub{
    constructor(){
        this.events = {};
    }

    subsciptions(eventName, func){
        return {
            subscribe: () => {
                if(this.events[eventName]){
                    this.events[eventName].push(func)
                    console.log(`${func.name} has subscribed to ${eventName} topic!`)
                }else{
                    this.events[eventName] = [func]
                    console.log(`${func.name} has subscribed to ${eventName} topic!`)
                }
            },
            unsubscribe: () => {
                if(this.events[eventName]){
                    this.events[eventName] = this.events[eventName].filter(subscriber => {
                        return subscriber !== func
                    })
                    console.log(`${func.name} has unsubscribed to ${eventName} topic!`)
                }
            }
        }
    }
    publish(eventName,...args){
        const funcs = this.events[eventName]
        funcs.forEach(func => {
            func.apply(null, args);
        });
    }
}

const speak = (param) => {
    `I am ${param}`
}

const greatAll = (...args) => {
    `Hello ${args.toString()}`
}

const pubSub = new PubSub()
pubSub.subsciptions("greet", greatAll).subscribe() //greatAll has subscribed to greet topic!
pubSub.subsciptions("say name", speak).subscribe() // speak has subscribed to say name topic!

pubSub.publish("greet", "Lawrence", "Mayo", "Alfred"); //Hello Lawrence,Mayo, Alfred
pubSub.publish("say name", "Alfred");// I am Alfred