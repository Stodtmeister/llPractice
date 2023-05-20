// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }


    addToTail(val) {

    }

    removeFromHead() {

    }

    removeFromTail() {

    }

    peekAtHead() {
        
    }

    print() {

    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
