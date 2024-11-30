class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(data){
        let currentNode = this.root
        let newNode = new Node(data)
        if(!currentNode){
            this.root = newNode
            currentNode = newNode
            return
        }

        while (true) {
            if (data < currentNode.data) {
                if (!currentNode.left) {
                    currentNode.left = newNode
                    break
                } else {
                    currentNode = currentNode.left
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode
                    break
                } else {
                    currentNode = currentNode.right
                }
            }
        }

    }

    contains(data) {
        let currentNode = this.root

        while (currentNode) {

            if (data < currentNode.data) {
                currentNode = currentNode.left
            } else if (data > currentNode.data) {
                currentNode = currentNode.right
            } else {
                
                return true
            }


        }
        return false
    }
}

let bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(11)
bst.insert(2)
bst.insert(18)

console.log(bst.contains(6))