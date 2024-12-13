const { link } = require("fs")

class Node{
    constructor(data){
        this.data = data
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    add(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
            return
        }
        this.tail.next = newNode
        this.tail = newNode

    }

    display(){
        if(!this.head){
            return console.log('linked list empty')
        }

        let temp = this.head
        while(temp){
            console.log(temp.data)
            temp = temp.next
        }
    }

    deleteData(data){
        if(data===this.head.data){
            this.head = this.head.next
            return
        }

        let temp = this.head
        let prev = temp
        while (temp && temp.data !== data) {

            prev = temp
            temp = temp.next
        }

        if(temp == this.tail){
            this.tail = prev
            this.tail.next = null
            return
        }

        prev.next = temp.next
    }

    insertAfter(after, data){
        const newNode = new Node(data)
        let temp = this.head

        while(temp && temp.data !== after){
            temp = temp.next
        }

        if(temp.data == this.tail.data){
            this.tail.next = newNode
            this.tail = newNode
            return
        }

        newNode.next = temp.next
        temp.next = newNode

        
    }

    removeDuplicates(){
        let current = this.head

        while(current){
            let next = current.next

            while(next && next.data == current.data){
                next = next.next
            }

            current.next = next
            current = current.next
        }
    }

    reverse(){
        let current = this.head
        let prev = null
        while(current){
            let next = current.next
            current.next = prev
            prev = current
            current = next


        }
        this.head = prev
    }
}

const linkedList = new LinkedList()

linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)
// linkedList.deleteData(3)
// linkedList.insertAfter(3, 5)
linkedList.reverse()
linkedList.removeDuplicates()
linkedList.display()