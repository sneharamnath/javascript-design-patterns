function Member(name){
    this.name = name;
    this.chatroom = null;
}

Member.prototype = {
    send: function(message, toMember){
        this.chatroom.send(message, this, toMember);
    },
    receive: function(message, fromMember){
        console.log(`${fromMember.name} to ${this.name}: ${message}`)
    }
}

function Chatroom(){
    this.members = {};
}

Chatroom.prototype = {
    addMembers: function(member){
        this.members[member.name] = member;
        member.chatroom = this;
    },
    send: function(message, fromMember, toMember){
        toMember.receive(message, fromMember)
    }
}

//Create new chat room
const chat = new Chatroom()

//Create new members
const bob = new Member("Bob")
const john = new Member("John")
const tim = new Member("Tim")

//Add members to chatroom
chat.addMembers(bob)
chat.addMembers(john)
chat.addMembers(tim)

//Chat room members
chat.members
//{Bob: Member, John: Member, Tim: Member}

bob.send("Hey John", john)
//Bob to John: Hey John

john.send("Hey Bob, whats up?", bob)
//John to Bob: Hey Bob, whats up?

tim.send("Hey Bob", bob)
//Tim to Bob: Hey Bob