class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }

}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    append(data){
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
            return console.log('linkedlist empty')
        }
        let temp = this.head

        while(temp){
            console.log(temp.data)
            temp = temp.next
        }
    }

    displayRev(){
        if(!this.head){
            return console.log('linkedlist empty')
        }
        let temp = this.tail

        while(temp){
            console.log(temp.data)
            temp = temp.prev
        }
    }

    insertBeforeTo(beforeTo, data){
        const newNode = new Node(data)
        let temp = this.head
        let prev = null
        while(temp && temp.data!== beforeTo){
           
            temp = temp.next
        }
        if(!temp){
            return console.log('no data in d linkedlist')
        }

        if(temp === this.head){
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
            return
        }
        // if(temp === this.tail){
        //     this.tail.next = newNode
        //     newNode.prev = this.tail
        //     this.tail = newNode
        //     return 
        // }

      newNode.next = temp
        newNode.prev = temp.prev
        temp.prev.next = newNode
        temp.prev = newNode
    }

    //to insert data , before and after a specific value, delete  a value, 
}

const linkedList = new LinkedList

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.insertBeforeTo(3, 5)
linkedList.display()
