// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }

// class SuffixTrie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insertSuffix(suffix){
//         let current = this.root
//         for(let char of suffix){
//             if(!current.children[char]){
//                 current.children[char] = new TrieNode()
//             }
//             current = current.children[char]
//         }
//         current.isEndOfWord = true
//     }

//     buildSuffixAndInsert(string){
//         for (let i = 0;i<string.length;i++){
//             this.insertSuffix(string.slice(i))
//         }
//     }

//     search(string){
//         let current = this.root
//         for(let char of string){

//             if(!current.children[char]){
//                 return false
//             }
//             current = current.children[char]

//             // return current.isEndOfWord
//         }
//         return current.isEndOfWord
//     }
// }

// let trieSuffix = new SuffixTrie()
// trieSuffix.buildSuffixAndInsert('banana')
// console.log(trieSuffix.search('ananaa'))



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
            if(!current.children[char]){
                current.children[char] = new TrieNode()
            }

            current = current.children[char]
        }

        current.endOfWord = true
    }

    buildSuffix(str){
        for(let i = 0;i<str.length;i++){
            this.insertSuffix(str.slice(i))
        }
    }

    search(str){
        let current= this.root
        for(let char of str){
            if(!current.children[char]){
                return false
            }
            current = current.children[char]
        }

        return current.endOfWord
    }
}

const trie = new Trie()

// trie.buildSuffix('ameena')
trie.insertSuffix('ameen')
trie.insertSuffix('ansar')
trie.insertSuffix('amras')

console.log(trie.search('ansar'))