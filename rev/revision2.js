//-----remove target
function removeTarget(arr, target){
    let j = 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i] !== target){
            arr[j] = arr[i]
            j++
        }
    }
    console.log(arr)
}

// removeTarget([1,2,3,1,4,3,6,1], 1)
//-----bubble sort
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }

    console.log( arr)
}

//-----move duplicate to end
function moveDuplicateToEnd(arr){
    let j = 1
    for(let i = 1;i<arr.length;i++){
        if(arr[i]!==arr[i-1]){
            arr[j]=arr[i]
            j++
        }
    }
    console.log(arr)
}
// moveDuplicateToEnd([2,3,5,5,5,6,7,7,12,32,4])

//-----bubbleSort([5,2,4,9,0])

function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
    let j = i-1
    let current = arr[i]
        while(j>=0 && current < arr[j]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            j--
        }
    } 
    console.log(arr)   
}

// insertionSort([7,8,1,0,55,6,1])

//-----selection sort
function selectionSort(arr){
    for(let i= 0;i<arr.length;i++){
        let small = i
        for(let j = i;j<arr.length;j++){
            if(arr[small]>arr[j]){
                small = j
            }
        }

        [arr[small], arr[i]] = [arr[i], arr[small]]
    }
    console.log(arr)
}

// selectionSort([8,6,0,1,22,44,21,1,2,12])

function quickSort(arr){
     quickSortHelper(arr, 0, arr.length-1)
     console.log(arr)
     
}

function quickSortHelper(arr, startIndex, endIndex){
    console.log(startIndex, endIndex)
    
    if(startIndex>=endIndex) return null
    
    let pivot = startIndex
    let leftIndex = pivot + 1
    let rightIndex = endIndex

    while(leftIndex<=rightIndex){
        
        if(arr[leftIndex]>arr[pivot] && arr[rightIndex]<arr[pivot]){
            [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]]
            leftIndex++
            rightIndex--
        }

        if(arr[leftIndex]<=arr[pivot]){
            leftIndex++
        }

        if(arr[rightIndex]>=arr[pivot]){
            rightIndex--
        }


    }

    [arr[pivot], arr[rightIndex]] = [arr[rightIndex], arr[pivot]]

    quickSortHelper(arr, startIndex, rightIndex-1)
    quickSortHelper(arr, rightIndex+1, endIndex)

}

// quickSort([12,21,23,32,34,43,11,77,88,22,0,12,76,89,98,67])

//-----merge sort
function mergeSort(arr){
// console.log(arr)

if(arr.length === 1) return arr

    let middle = Math.round((arr.length-1)/2)
    console.log(middle)
    let leftArray = arr.slice(0, middle)
    let rightArray  = arr.slice(middle)
    return sortMerge(mergeSort(leftArray), mergeSort(rightArray))
}

function sortMerge(first, second) {
    // console(first)
    let i = 0
    let j = 0
    let k = 0
    const newArray = []

    while(i<first.length && j<second.length){
        if(first[i]<=second[j]){
            newArray[k++] = first[i++]
        }else{
            newArray[k++] = second[j++]
        }
    }

    while(i<first.length){
        newArray[k++] = first[i++]
    }

    while(j<second.length){
        newArray[k++] = second[j++]
    }

    return newArray

}

// console.log(mergeSort([5,4,3,4,3,2,3,45,65]))

//-----Linked List
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
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return 
        }
        
        this.tail.next = newNode
        this.tail = newNode

    }

    display(){
        let temp = this.head
        while(temp){
            console.log(temp.data)
            temp = temp.next
        }
    }

    delete(data){
        let temp = this.head
        let prev = null

        if(temp.data == data){
            this.head = temp.next
            return
        }

        while(temp && temp.data !== data){
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

    reverse(){
        let temp = this.head
        let prev = null
        while(temp){
            let next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        this.head = prev
    }
}

// const linkedList = new LinkedList()
// linkedList.append(1)
// linkedList.append(2)
// linkedList.append(3)
// linkedList.append(4)

// // linkedList.display()
// linkedList.reverse()
// linkedList.display()

//-----doubly linkedList
class DNode{
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
        const newNode = new DNode(data)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return
        }

        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
    }
}


//-----fibo
function fibo(n){
    if(n<=1) return n
    return fibo(n-1)+fibo(n-2)
}

// console.log(fibo(5))

function fiboSeries(n){
   
    const arr = [0,1]
    for(let i = 2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2])
    }
    console.log(arr)
}

// fiboSeries(0)

//-----binary search tree
class BstNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BstRev{
    constructor(){
        this.root = null
    }

    insert(data){
        const newNode = new BstNode(data)
        if(!this.root){
            this.root = newNode
            return
        }
        let current = this.root
        while(true){
            if(data<current.data){
                if(!current.left){
                    current.left = newNode
                    break
                }else{
                    current = current.left
                }
            }else{
                if(!current.right){
                    current.right = newNode
                    break
                }else{
                    current = current.right
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

    delete(data){
        let current = this.root
        this.root= this.deleteNode(data, current)
    }

    deleteNode(data, currentNode){
        if(data<currentNode.data){
            currentNode.left = this.deleteNode(data, currentNode.left)
        }else if(data>currentNode.data){
            currentNode.right = this.deleteNode(data, currentNode.right)
        }else{
            if(!currentNode.right && !currentNode.left){
                return null
            }

            if(!currentNode.right){
                return currentNode.left
            }

            if(!currentNode.left){
                return currentNode.right
            }

            currentNode.data = this.getMinNodeValue(currentNode.right)
            currentNode.right = this.deleteNode(currentNode.data, currentNode.right)


        }
        return currentNode
    }

    getMinNodeValue(node){
        
        while(node.left){
            node = node.left
        }
        return node.data
    }
}

// const bst = new BstRev()
// bst.insert(15)
// bst.insert(10)
// bst.insert(20)
// bst.insert(16)

// bst.traversal()
// console.log('-----')
// bst.delete(20)
// bst.traversal()

class HeapTree{
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

    heapify(arr) {
        
        this.buildHeap(arr)

    }

    buildHeap(arr){
        this.heap = arr
        for(let i = this.parent(this.heap[this.heap.length-1]);i>=0;i--){
            this.shiftDown(i)
        }
    }

    shiftDown(index){
        let leftIdx = this.leftChild(index)
        let endIdx = this.heap.length-1
        while(leftIdx<=endIdx){
            let rightIdx = this.rightChild(index)
            let shiftIdx
            if(rightIdx && this.heap[leftIdx]>this.heap[rightIdx]){
                shiftIdx = rightIdx
            }else {
                shiftIdx = leftIdx
            }

            if(this.heap[index]>this.heap[shiftIdx]){
                [this.heap[index], this.heap[shiftIdx]]=[this.heap[shiftIdx], this.heap[index]]
                index = shiftIdx
                leftIdx =this.leftChild(index)
            }else {
                return
            }

        }
    }

    display(){
        console.log(this.heap)
    }

    remove(){
        [this.heap[0], this.heap[this.heap.length-1]]= [this.heap[this.heap.length-1], this.heap[0]]
        this.heap.length = this.heap.length-1
        this.shiftDown(0)
    }

    insert(data){
        this.heap.push(data)
        this.shiftup(this.heap.length-1)
    }

    shiftup(index){
        let parentIdx = this.parent(index)
        while (index > 0 && this.heap[index]<this.heap[parentIdx]){
            [this.heap[index],this.heap[parentIdx]] = [this.heap[parentIdx],this.heap[index]]
            index = parentIdx
            parentIdx = this.parent(index)
        }
    }
}

// const heapify = new HeapTree()

// heapify.heapify([7,98,34,56,11,23,3,32])
// heapify.insert(12)

// heapify.display()

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

    createTrie(str){
        let current = this.root
        for(let i= 0;i<str.length;i++){
            if(!current.children[str[i]]){
                current.children[str[i]] = new TrieNode
            }

            current = current.children[str[i]]
        }
        current.endOfWord = true
    }
    createSuffix(str){
        for(let i=0;i<str.length;i++){
            this.createTrie(str.slice(i))
        }
    }

    search(str){
        console.log(JSON.stringify(this.root))
    }
}

// let trie = new Trie()
// trie.createSuffix('ameen')
// trie.createTrie('ramsey')
// trie.createTrie('rameesh')
// trie.search()

class Graph{
    constructor(){
        this.map = new Map()
    }

    addVertex(vertex){
        this.map.set(vertex, [])
    }

    insert(vertex, edge, isBid){
        if(!this.map.has(vertex)){
            this.addVertex(vertex)
        }

        if(!this.map.has(edge)){
            this.addVertex(edge)
        }

        this.map.get(vertex).push(edge)

        if(isBid){
            this.map.get(edge).push(vertex)
        }
    }

    display(){
        console.log(this.map)
    }

    dfs(start){
        let stack=[start]
        let visited={}
        let result=[]
        visited[start]=true

        while(stack.length){
            let current = stack.pop()
            result.push(current)

            this.map.get(current).forEach(data=>{
                if(!visited[data]){
                    visited[data]=true
                    stack.push(data)
                }
            })
        }
        console.log(result)

    }
}

// const graph = new Graph()

// graph.insert(2,3,true)
// graph.insert(2,5,true)
// graph.insert(5,6,true)
// graph.insert(3,0,true)
// graph.insert(8,0,true)
// graph.insert(8,9,true)
// graph.insert(3,8,true)
// graph.display()
// graph.dfs(2)

//input c1b2d3
//output cbbddd

function expand(str){
    let result = ''
    let i=0
    while(i<str.length){
        let count= ''
        let char = str[i]
        i++
        while(i<str.length && !isNaN(str[i])){
            count+=str[i]
            i++
        }
        
        result+=char.repeat(count)
    }
    console.log(result)
}

// expand('a1b2c10')

//inputaaabbbccc
//output a3b3c3

function compress(str){
    let i = 0
    let result= ''
    while(i<str.length){
        let char = str[i]
        i++
        let count = 1
        while(i>0 && str[i]===str[i-1]){
            count++
            i++
        }
        result+=char+count

    }

    console.log(result)
}

compress(' ')





