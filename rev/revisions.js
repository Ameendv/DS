//bubble sort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    return arr
}

// console.log(bubbleSort([8, 7, 0, 4, 7, 0, 1, 2, 99, 88, 11, 0, 77, 67, 97, 34]))

//insertionSort - check with all before


function insertSort(arr ) {
    for (let i = 0; i < arr.length; i++) {
        let j = i - 1
        let current = arr[i]
        while (j >= 0 && current < arr[j]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            j--
        }

    }

    return arr
}

// console.log(insertSort([3,4,8,0,1,23,76,34,78,11,33,-1,-5]))

//selection sort - find small and replace to first

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let small = i
        for(let j = i;j<arr.length;j++){
            if(arr[small]>arr[j]){
                small = j
            }
        }

        [arr[small], arr[i]] = [arr[i], arr[small]]
    }
    return arr
}
// console.log(selectionSort([9,192,4,3,1]))

//quick sort
function quickSort(array){
    quickSortHelper1(array, 0, array.length-1)
    console.log(array)
}

function quickSortHelper1(array, startIdx, endIdx){

    if(startIdx>=endIdx) return 

    let pivot= startIdx
    let leftIdx = pivot+1
    let rightIdx = endIdx

    while(leftIdx<=rightIdx){
        if(array[leftIdx]>array[pivot] && array[rightIdx]<array[pivot]){
            [array[leftIdx], array[rightIdx]] = [array[rightIdx], array[leftIdx]]
            leftIdx++
            rightIdx--
        }

        if(array[leftIdx]<array[pivot]){
            leftIdx++
        }

        if(array[rightIdx]>array[pivot]){
            rightIdx--
        }
    }

    [array[pivot], array[rightIdx]] = [array[rightIdx], array[pivot]]

    quickSortHelper1(array, startIdx, rightIdx-1)
    quickSortHelper1(array, rightIdx+1, endIdx)
}

// quickSort([999,90,909,987,956,789,988,765,234,444,211,112,334, -1])

//Merge sort
function mergeSort(array){

    if(array.length === 1) return array
    let middle= Math.round(array.length/2)


    let leftArray = array.slice(0, middle)
    let rightArray = array.slice(middle)

    
    return sort(mergeSort(leftArray), mergeSort(rightArray))
}

function sort(first, second){
    let i = 0
    let j = 0
    let k = 0
    let newArray = []

    while(i<first.length && j<second.length){
        if(first[i]<=second[j]){
            newArray[k++] = first[i++]
        }else{
            newArray[k++]= second[j++]
        }
    }

    while (i < first.length) {
        newArray[k++] = first[i++]
    }

    while (j < second.length) {
        newArray[k++] = second[j++]
    }
    return newArray

}

// console.log(mergeSort([4,3,2]))


//LinkedList

class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head= null
        this.tail = null
    }

    append(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail= newNode
            return 
        }

        let current = this.head
        this.tail.next = newNode
        this.tail = newNode
    }

    display(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }

    delete(data){
        if(data == this.head.data){
            this.head = this.head.next
            return 
        }

        let current = this.head
        let prev = null
        while(current && current.data !== data){
            prev = current
            current = current.next
        }

        if(current === this.tail){
            this.tail = prev
            this.tail.next = null
            return
        }

        prev.next = current.next
    
    }

    reverse(){
        let prev = null
        let curr = this.head
        
        

        while(curr){
           let next = curr.next
           curr.next = prev
           prev = curr
           curr = next

        }

        this.head = prev

    }
}

// const linkedList = new LinkedList()

// linkedList.append(2)
// linkedList.append(3)
// linkedList.append(6)
// linkedList.append(8)



// linkedList.display()
// linkedList.reverse()
// linkedList.display()


//fibonacci
function fibo(num){
    let fib = [0,1]
    for(let i = 2;i<num;i++){
         
        fib.push(fib[i-1]+fib[i-2])
    }

    console.log(fib)
}

// fibo(10)

//fibo by generator function 
function fibo(n){

    
    if(n<=1) return n
    return fibo(n-1)+fibo(n-2)
}

// fibo(6)

//stack

class NodeStack{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
    }

    push(data){
        const newNode = new NodeStack(data)
        if(!this.top){
            this.top = newNode
            console.log(this.top)
            return 
        }

        newNode.next = this.top
        this.top = newNode

        

        
    }

    pop(){
        if(!this.top){
            return 'Staack empty'
        }

        this.top = this.top.next
    }

    display(){
        let temp = this.top
        while(temp){
            console.log(temp.data)
            temp = temp.next
        }
    }
}

// const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)

// stack.display()
// console.log('----')
// stack.pop()
// stack.display()


//BST

class BstNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Bst{
    constructor(){
        this.root = null
    }

    insert(data){
        const newNode = new BstNode(data)

        if(!this.root){
            this.root = newNode
            return 
        }

        let currentNode = this.root
        while(true){
            if(data<currentNode.data){
                if(!currentNode.left){
                    currentNode.left = newNode
                    break
                }else{
                    currentNode = currentNode.left
                }
            }else{
                if(!currentNode.right){
                    currentNode.right = newNode
                    break
                }else{
                    currentNode = currentNode.right
                }
            }
        }
        

    }

    traversal(node = this.root){

        if(!node) return
        this.traversal(node.left)
        console.log(node.data)
        this.traversal(node.right)
    }

    contains(data){

    }

    remove(data){
        this.root = this.removeHelper(data, this.root)
    }

    removeHelper(data, currentNode){
        if(!currentNode) return null

        if(data<currentNode.data){
            currentNode.left = this.removeHelper(currentNode.left)
        }else if(data>currentNode.data){
            currentNode.right = this.removeHelper(currentNode.right)
        }else {
            if(!currentNode.left && !currentNode.right){
                return null
            }

            if(!currentNode.left){
                return currentNode.right
            }

            if(!currentNode.right){
                return currentNode.left
            }

            currentNode.data = this.getMinValue(currentNode.right)
            currentNode.right = this.removeHelper(currentNode.data, currentNode.right)

        }

        return currentNode

    }

    getMinValue(currentNode){
        while(currentNode.left){
            currentNode = currentNode.left
        }

        return currentNode.data
    }

}

// const bstObj = new Bst()

// bstObj.insert(20)
// bstObj.insert(15)
// bstObj.insert(22)

// bstObj.traversal()
// console.log('---')
// bstObj.remove(22)
// bstObj.traversal()

//HEAP
class Heap{
    constructor(){
        this.heap = []
    }

    parent(index){
        return Math.round((index-1)/2)
    }

    leftChild(index){
        return (2*index)+1
    }

    rightChild(index){
        return (2*index)+2
    }

    makeHeap(array){
        this.buildHeap(array)
    }

    buildHeap(array){
        this.heap = array
        for(let i = this.parent(array.length-1);i>=0;i--){
            this.shiftDown(i)
        }
    }

    shiftDown(index){
        let endIdx = this.heap.length-1
        let leftChildIdx = this.leftChild(index)

        while(leftChildIdx<=endIdx){
            let rightChildIdx = this.rightChild(index)
            let shiftIdx
            if(rightChildIdx && this.heap[rightChildIdx]<this.heap[leftChildIdx]){
                shiftIdx = rightChildIdx
            }else{
                shiftIdx = leftChildIdx
            }

            if(this.heap[index]>this.heap[shiftIdx]){
                [this.heap[index], this.heap[shiftIdx]] = [this.heap[shiftIdx], this.heap[index]]
                index = shiftIdx
                leftChildIdx = this.leftChild(index)
            }else{
                return 
            }


        }

    }

    display(){
        console.log(this.heap)
    }
}

// const heap = new Heap()

// heap.makeHeap([1,3,5,6,4,0])
// heap.display()

//TRIE

class TrieNode{
    constructor(){
        this.children = {}
        this.endOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insertSuffix(str){
        let current = this.root
        for(let char of str){
            // console.log(char)
            if(!current.children[char]){
                current.children[char] = new TrieNode()
            }
            current = current.children[char]
        }
        current.endOfWord = true
    }

    buildSuffix(str){
        for(let i=0;i<str.length;i++){

            this.insertSuffix(str.slice(i))
        }
    }

    search(str){
        let current = this.root
        for(let char of str){

            if(!current.children[char]){
                return false
            }

            current = current.children[char]
        }

        return current.endOfWord
    }
}

// const trie = new Trie()

// trie.buildSuffix('ameen')
// console.log(trie.search('meena'))


class Graph{
    
    constructor(){
        this.map = new Map()
    }

    addVertex(data){
        this.map.set(data, [])
    }

    insert(vertex, edge, isBidirectional){
        if(!this.map.has(vertex)){
            this.addVertex(vertex)
        }

        if(!this.map.has(edge)){
            this.addVertex(edge)
        }

        this.map.get(vertex).push(edge)

        if(isBidirectional){
            this.map.get(edge).push(vertex)
        }
    }

    display(){
        console.log(this.map)
    }

    dfs(start){
        let stack = [start]
        let result = []
        let visited = {}
        visited[start] = true

        while(stack.length){
            let current = stack.pop()
            result.push(current)

            this.map.get(current).forEach(data=>{
                if(!visited[data]){stack.push(data)
                visited[data] = true}
            })

        }

        return result
        
    }
}

const graph = new Graph()

graph.insert(5,2,true)
graph.insert(5,3, true)
graph.insert(3,1, true)

graph.display()

console.log(graph.dfs(2))








