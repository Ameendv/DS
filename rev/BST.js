class Node{
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
        
       this.root =  this.removeHelper(this.root, data)
    }

    removeHelper(node, data){
        
        if(!node){
            return null
        }

        if (data < node.data) {//traverse left sub tree
            
            node.left = this.removeHelper(node.left, data)
        } else if (data > node.data) {//traverse right subtree
            node.right = this.removeHelper(node.right, data)
        }else {//match found
            //no child case
            if(!node.left && !node.right){
                return null
            }

            //case 2 , one child
            if(!node.right) return node.left
            if(!node.left) return node.right

            const minValue = this.getMinNode(node.right)
            node.data = minValue.data
            node.right = this.removeHelper(node.right, minValue.value)


        }

    }

    getMinNode(currentNode) {
       while(currentNode.left){
        currentNode = currentNode.left
       }
       return currentNode
    }
    inOrderTraversal(node = this.root) {
        if (!node) return;

        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    
}
const bst = new Bst()

bst.insert(10)
bst.insert(5)
bst.insert(18)
// bst.remove(18)

bst.inOrderTraversal()

// console.log(bst.contains(18))