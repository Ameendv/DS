// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//     }

//     append(data){
//         const newNode = new Node(data)

//         if(!this.head){
//             this.head = newNode
//             return 
//         }
//         let current = this.head

//         while(current.next){ 
//             current = current.next
//         }

//         current.next = newNode

//     }
// }

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//     }
    
//     append(data) {

//         const newNode = new Node(data)

//         if(!this.head){
//             this.head = newNode
//             return
//         }

//         let tail = this.head

//         while(tail.next){
//             tail = tail.next
//         }

//         tail.next = newNode


//     }
    
//     display() {
//         if (!this.head) {
//             console.log('linked list is empty')
//         }
//     let temp = this.head
//     while(temp){
//         console.log(temp.data, temp.next)
//         temp = temp.next
//     }

//     }



// }

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
 

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }


    append(data){
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return
        }

        this.tail.next = newNode
        this.tail = newNode

        
    }

    //display linkedlist
    display() {
        if (!this.head) {
            return console.log('No data in linked list')
        }

        let temp = this.head
        while (temp) {
            console.log(temp.data)
            temp = temp.next
        }
        // console.log(this.head)

    }

    //delete a data from linkedlist
    delete(data){
        if(this.head.data === data){
            this.head = this.head.next
            return
        }
        let temp = this.head
        let prev = null

        while(temp && temp.data !== data){
            prev = temp
            temp = temp.next
        }

        if(!temp){
            return console.log('no data matching')
        }

        if(temp === this.tail){
            this.tail = prev
            this.tail.next = null
            return
        }

        prev.next = temp.next



    }

    insert(nextTo, data) {
        let insertNode = new Node(data)
        let temp = this.head

        while (temp && temp.data != nextTo) {
            temp = temp.next
        }
        if(!temp){
            return console.log('position not found')
        }

        if(temp === this.tail){
            this.tail.next = insertNode
            this.tail = insertNode
            return
        }

        insertNode.next = temp.next
        temp.next = insertNode

    }

    removeDup(){
        let current = this.head
        while(current){
            let next = current.next
            while(next && current.data === next.data){
                next = next.next
            }
            current.next = next
            current = next
        }
    }

    reverse(){
    let curr = this.head
    let prev = null
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev
    }
    
    

}
// delete(data){
//     if(this.head.data === data){
//         this.head = this.head.next
//         return
//     }

//     let temp = this.head
//     let prev = null

//     while(temp && temp.data !== data){
//         prev = temp
//         temp = temp.next
//     }

//     if(!temp){
//         console.log('no data matched to delete')
//         return
//     }

//     if(temp === this.tail){
       
//        this.tail = prev
//        this.tail.next = null
//         return
//     }

//     prev.next = temp.next

// }
const linkedList = new LinkedList()

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(3)
linkedList.append(4)
linkedList.append(4)
linkedList.append(4)
linkedList.append(5)
// linkedList.delete(4)
// linkedList.insert(4,5)
// linkedList.removeDup()
linkedList.reverse()

linkedList.display()
