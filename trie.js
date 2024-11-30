class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}

class SuffixTrie{
    constructor(){
        this.root = new TrieNode()
    }

    insertSuffix(suffix){
        let current = this.root
        for(let char of suffix){
            if(!current.children[char]){
                current.children[char] = new TrieNode()
            }
            current = current.children[char]
        }
        current.isEndOfWord = true
    }

    buildSuffixAndInsert(string){
        for (let i = 0;i<string.length;i++){
            this.insertSuffix(string.slice(i))
        }
    }

    search(string){
        let current = this.root
        for(let char of string){

            if(!current.children[char]){
                return false
            }
            current = current.children[char]

            // return current.isEndOfWord
        }
        return current.isEndOfWord
    }
}

let trieSuffix = new SuffixTrie()
trieSuffix.buildSuffixAndInsert('banana')
console.log(trieSuffix.search('ananaa'))

