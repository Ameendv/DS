class MinHeap{
    constructor(){
        this.heap = []
    }

    initMinHeap(array){
        this.buildHeap(array)
    }

    parent(index) {
        return Math.round((index - 1) / 2)
    }

    leftChild(index) {
        return (2 * index) + 1
    }

    rightChild(index) {
        return (2 * index) + 2
    }

    buildHeap(array){
        this.heap = array
        for(let i = this.parent(array.length-1);i>=0;i--){
            this.shiftDown(i)
        }
    }

    shiftDown(index){
    

        let lastIdx = this.heap.length-1
        let leftIdx = this.leftChild(index)

        while(leftIdx<=lastIdx){
            let rightIdx = this.rightChild(index)
            let shiftIdx
            if(rightIdx<=lastIdx && this.heap[rightIdx]<this.heap[leftIdx]){
                shiftIdx = rightIdx
            }else{
                shiftIdx = leftIdx
            }

            if(this.heap[shiftIdx]<this.heap[index]){
                [this.heap[shiftIdx],this.heap[index]] =[ this.heap[index],this.heap[shiftIdx]]
                index = shiftIdx
                leftIdx = this.leftChild(index)
            }else {
                return 
            }
            
        }

    }

    insert(data){
        this.heap.push( data)
        this.shiftUp(this.heap.length-1)
    }

    shiftUp(index){
        let currentIdx = this.parent(index)
        while(index>=0 && this.heap[currentIdx]>this.heap[index]){
            [this.heap[currentIdx],this.heap[index]]=[this.heap[index],this.heap[currentIdx]]
            index = currentIdx
            currentIdx = this.parent(index)
        }
    }
    remove(){
        [this.heap[0], this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1], this.heap[0]]
        this.heap.length = this.heap.length-1
        this.shiftDown(0)
    }

    display(){
        console.log(this.heap)
    }
}

const heap = new MinHeap()
heap.initMinHeap([6,2,8])
heap.insert(1)
heap.remove()
heap.remove()
heap.display()