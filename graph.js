class Graph{
    constructor(){
        this.map = new Map()
    }

    addVertex(data){
        this.map.set(data, [])
    }

    insert(vertex, edge, isBidire){
        if(!this.map.has(vertex)){
            this.addVertex(vertex)
        }

        if(!this.map.has(edge)){
            this.addVertex(edge)
        }

        this.map.get(vertex).push(edge)

        if(isBidire){
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
                if(!visited[data]){
                    visited[data]= true
                    stack.push(data)
                }
            })
        }

        return result
    }
}

const graph = new Graph()

graph.insert(3,4,true)
graph.insert(2,4,true)
graph.insert(5,6,true)
graph.insert(6,1,true)
graph.insert(5,4,true)

// graph.display()
console.log(graph.dfs(1))