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
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.length++
        return this
    }

    removeFromHead() {
        if (!this.head) return undefined
        let removed = this.head
        this.head = this.head.next
        this.length--
        return removed
    }

    removeFromTail() {

        let removed;
        if (!this.head) {
            return undefined
        } else {

            let tail = this.head;
            let prev;
            while (tail.next) {
                prev = tail;

                tail = tail.next;
            }
            if (!prev) this.head = null;
            else{

                prev.next = null;
            }

            this.length--;

            return tail


        // Write your hypothesis on the time complexity of this method here
        }
    }

    peekAtHead() {
        if (!this.head) return undefined
        return this.head.value
    }

    print() {
        if (!this.head) {
            return undefined
        }

        let current = this.head
        while (current.next) {
            console.log(current.value)
            current = current.next
        }

        console.log(current.value)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
