class Node1{
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
        const newNode = new Node(data)

        let current = this.root

        if(!this.root){
            
            this.root = newNode
            return
        }

        while(true){
            console.log(current.data)
            if(data<current.data){
                if(!current.left){
                    current.left = newNode
                    break
                }else{
                    current.left = current.left
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

    contains(data){
        let current = this.root

        while(current){

            if(data>current.data){

                current = current.right
            }else if (data<current.data){
                current=current.left
            } else{
                return true
            }
        }

        return false
    }

  remove(data){
    this.root = this.removeHelper(data, this.root)
  }

  removeHelper(data, currentNode){
    if(!currentNode){
        return null
    }

    if(data<currentNode.data){
        currentNode.left = this.removeHelper(data, currentNode.left)
    }else if(data>currentNode.data){
        currentNode.right= this.removeHelper(data, currentNode.right)
    }else{

        if(!currentNode.right && !currentNode.left){
            return null
        }

        if(!currentNode.left){
            return currentNode.right
        }else if(!currentNode.right){
            return currentNode.left
        }

        currentNode.data = this.getMinValue(currentNode.right)
        currentNode.right = this.removeHelper(currentNode.data, currentNode.right)
    }

    return currentNode

  }

    getMinValue(node){
        while(node.left){
            node = node.left
        } 

        return node.data
    }

    
    inOrderTraversal(node = this.root) {
        if (!node) return;

        this.inOrderTraversal(node.left);
        console.log(node.data);
        this.inOrderTraversal(node.right);
      }
    
}
// const bst = new Bst()

// bst.insert(10)
// bst.insert(5)
// bst.insert(18)

// bst.remove(5)

// bst.inOrderTraversal()

// console.log(bst.contains(10))


class Node{
    constructor(data){
        this.data = data
        this.left= null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(data) {
        const newNode = new Node(data)
        if (!this.root) {
            this.root = newNode
            return
        }

        let currentNode = this.root

        while (true) {
            if (data < currentNode.data) {
                if (!currentNode.left) {
                   return currentNode.left = newNode
                } else {
                    currentNode = currentNode.left
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode
                    return
                } else {
                    currentNode = currentNode.right
                }
            }
        }
    }

    contains(data){
        let current = this.root
        while(current){
            if(data<current.data){
                current = current.left
            }else if(data>current.data){
                current = current.right
            }else{
                return true
            }
        }
        return false
    }

    inOrderTraversal(node = this.root) {

        if(!node) return 
        this.inOrderTraversal(node.left)
        console.log(node.data)
        this.inOrderTraversal(node.right)
    }

    remove(data){
        this.root = this.removeHelper(data, this.root)
    }

    removeHelper(data, current){

        if(data<current.data){
            current.left = this.removeHelper(data, current.left)
        }else if(data>current.data){
            current.right= this.removeHelper(data, current.right)
        }else{
            if(!current.left && !current.right){
                return null
            }

            if(!current.left){
                return current.right
            }
            if(!current.right){
                return current.left
            }

            current.data = this.getMinValue(current.right)
            current.right = this.removeHelper(current.data, current.right)


        }
        return current
    }

    getMinValue(node){
        while(node.left){
            node = node.left
        }

        return node.data
    }

}

const bstNew = new BST()
bstNew.insert(10)
bstNew.insert(15)
bstNew.insert(8)
bstNew.insert(16)
bstNew.remove(16)
bstNew.inOrderTraversal()
// console.log(bstNew.contains(1))