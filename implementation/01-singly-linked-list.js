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
        const node = new SinglyLinkedNode(val)
        node.next = this.head
        this.head = node
        this.length++
        return this
    }


    addToTail(val) {
        const newNode = new SinglyLinkedNode(val)

        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }

        this.length++
        return this
    }

    removeFromHead() {
        if (!this.head) return undefined

        let saved = this.head
        this.head = this.head.next
        this.length--
        return saved
    }

    removeFromTail() {
        if (!this.head) {
            return undefined
        } else {
            let current = this.head
            let prev;
            while (current.next) {
                prev = current
                current = current.next
            }

            if (!this.head.next) {
                this.head = null
            } else {
                prev.next = null
            }
            this.length--
            return current
        }
    }

    peekAtHead() {
        if (!this.head) return undefined
        return this.head.value
    }

    print() {

    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
