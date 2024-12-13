//delete
//insert after
//insert before

class Node{
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}

class DlinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    add(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return 
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode



    }

    display(){
        if(!this.head){
            return console.log('d linked list empty')
        }

        let temp = this.head
        while(temp){
            console.log(temp.data)
            temp = temp.next
        }
    }
}

const linkedList = new DlinkedList()

linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)

linkedList.display()
