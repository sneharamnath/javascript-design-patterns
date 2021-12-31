//Iterator pattern - Allows you to iterate over a collection of objects.
//Collections can be anything like arrays, trees, graphs
//Iterator pattern allows us to define rules on how to iterate over the collections.
//Example of rules can be - front to back iteration, back to front iteration, skip 2 items in collection etc..

//This program is to iterate items array from Front to back

const items = [1, "sneha", false, 1.56]

function Iterator(items){
    this.items = items;
    this.index = 0
}

Iterator.prototype = {
    hasNext: function(){
        return this.index < this.items.length
    },
    next: function(){
        return this.items[this.index++]
    }
}


const iter = new Iterator(items)

//This program is to iterate items array from Back to front

function Iterator(items){
    this.items = items;
    this.index = this.items.length - 1
}

Iterator.prototype = {
    hasNext: function(){
        return this.index >= 0
    },
    next: function(){
        return this.items[this.index--]
    }
}


const items = [1, "sneha", false, 1.56]

const iter = new Iterator(items)