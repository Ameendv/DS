class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.rear = null
    }

    display() {
        if (!this.front) {
            return console.log('Queue empty')
        }

        let temp = this.front
        while(temp){
            console.log(temp.data)
            temp = temp.next
        }

    }

    enqueue(data){
        const newNode = new Node(data)
        if(!this.front){
            this.front = newNode
            this.rear = newNode
            return
        }

        this.rear.next = newNode
        this.rear = newNode

    }

    dequeue(){
        if(!this.front){
            return console.log('empty queue')
        }

        this.front = this.front.next
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)


queue.display()
