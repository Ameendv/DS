class MinHeap {
    constructor() {
        this.heap = []
    }

    MinHeap(array) {//o(n)t, 0(1)s
        this.buildHeap(array)
    }

    buildHeap(array) {//build start from last parent of tree
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

    // shiftDown(index) {

    //     let lastIndex = this.heap.length - 1
    //     let leftIdx = this.leftChildIdx(index)

        
    //     while(leftIdx <= lastIndex){
    //         let rightIdx = this.rightChildIdx(index)
    //         let shiftIdx
    //         if(rightIdx <= lastIndex && this.heap[rightIdx] < this.heap[leftIdx]){
    //             shiftIdx = rightIdx
    //         }else{
    //             shiftIdx = leftIdx
    //         }

    //         if (this.heap[shiftIdx] < this.heap[index]) {
    //             [this.heap[shiftIdx], this.heap[index]] = [this.heap[index], this.heap[shiftIdx]]
    //             index = shiftIdx
    //             leftIdx = this.leftChildIdx(index)
    //         }else {
    //             return
    //         }
    //     }
    // }

    shiftDown2(index){
        let endIndex = this.heap.length - 1
        let leftIdx = this.leftChildIdx(index)

        while(leftIdx<=endIndex){
            //means:there is more child to left idx because its less than last index
            //here we iterate untill last index 
            let rightIdx = this.rightChildIdx(index)//get right child if it is there
            let indexToShift 

            if(rightIdx<endIndex && this.heap[rightIdx]<this.heap[leftIdx]){
                //means there is right child, because its index value is less than end index
                //and the right child value is less than left child
                indexToShift = rightIdx
                //if so right index value will be shifted

            }else {
                //else the left child value to be shifted
                indexToShift= leftIdx
            }//now we got the index to shift, next we do the shifting ops
            //fot that we check shiftidx value is less than current idx, then only we need to shift

            if (this.heap[index] > this.heap[indexToShift]) {//shif the value if so 
                [this.heap[index], this.heap[indexToShift]] = [this.heap[indexToShift], this.heap[index]]
                index = indexToShift
                leftIdx = this.leftChildIdx(index)
            }else{
                return
            }

        }
    }

   shiftDown(index){
    let endIdx = this.heap.length-1
    let leftIdx = this.leftChildIdx(index)
    while(leftIdx<=endIdx){
        let shiftIdx
        let rightidx = this.rightChildIdx(index)

        if(rightidx<=endIdx && this.heap[rightidx]<this.heap[leftIdx]){
            shiftIdx = rightidx
        }else{
            shiftIdx = leftIdx
        }

        if(this.heap[index]>this.heap[shiftIdx]){
            [this.heap[index],this.heap[shiftIdx]] = [this.heap[shiftIdx],this.heap[index]]
            index = shiftIdx
            leftIdx = this.leftChildIdx(index)
        }else{
            return
        }

    }
   }

    shiftUp(index){
        let parentIdx = this.parent(index)

        while(index > 0 && this.heap[parentIdx]>this.heap[index]){
            [this.heap[index], this.heap[parentIdx]]= [this.heap[parentIdx], this.heap[index]]
            index = parentIdx
            parentIdx = this.parent(index)
        }
    }

    remove(){//logn - t,
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]]
        this.heap.length = this.heap.length - 1
        this.shiftDown(0)
    }

    insert(value){//O(log(n)) t, o(1)s
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


