class MinHeap {
    constructor() {
        this.heap = []
    }

    MinHeap(array) {
        this.buildHeap(array)
    }

    buildHeap(array) {
        this.heap = array
        for(let i = this.parent(array.length - 1);i>=0;i--){
            this.shiftDown(i)
        }
    }

    parent(index){
        return Math.round((index - 1) / 2)
    }

    leftChildIdx(index){

        return (2*index)+1
    }

    rightChildIdx(index){
        return (2*index)+2
    }

    shiftDown(index) {

        let lastIndex = this.heap.length - 1
        let leftIdx = this.leftChildIdx(index)

        
        while(leftIdx <= lastIndex){
            let rightIdx = this.rightChildIdx(index)
            let shiftIdx
            if(rightIdx <= lastIndex && this.heap[rightIdx] < this.heap[leftIdx]){
                shiftIdx = rightIdx
            }else{
                shiftIdx = leftIdx
            }

            if (this.heap[shiftIdx] < this.heap[index]) {
                [this.heap[shiftIdx], this.heap[index]] = [this.heap[index], this.heap[shiftIdx]]
                index = shiftIdx
                leftIdx = this.leftChildIdx(index)
            }else {
                return
            }
        }
    }

    shiftUp(index){
        let parentIdx = this.parent(index)
        while(index > 0 && this.heap[parentIdx] > this.heap[index]){
            [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]]
            index = parentIdx
            parentIdx = this.parent(index)
        }
    }

    remove(){
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]]
        this.heap.length = this.heap.length - 1
        this.shiftDown(0)
    }

    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }

    peek(){
        return this.heap[0]
    }

    display(){
        console.log(this.heap)
    }
}

const array = [6,2,8]
const min = new MinHeap()

min.MinHeap(array)
min.display()
min.insert(1)
min.display()
min.remove()
min.display()


