class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        // this.tail = null
    }

    display(){
        let current = this.top
        while(current){
            console.log(current.data)
            current = current.next
        }
    }

    push(data){
        let newNode = new Node(data)

        if(!this.top){
            this.top = newNode
            return
        }

        newNode.next = this.top
        this.top = newNode
    }

    pop(){
        
        if(!this.top){
             console.log('stack underflow')
             return
        }

        this.top = this.top.next
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.pop()
stack.pop()
stack.pop()
stack.pop()

stack.display()