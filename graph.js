class Graph{
    constructor(){
        this.map = new Map()
    }

    addVertex(data){
        this.map.set(data,[])
    }

    insert(vertex, edge, isBidirection){
        if(!this.map.has(vertex)){
            this.addVertex(vertex)
        }

        if(!this.map.has(edge)){
            this.addVertex(edge)
        }

        this.map.get(vertex).push(edge)

        if(isBidirection){
            this.map.get(edge).push(vertex)
        }
    }

    display(){
        console.log(this.map)
    }

}

let graph = new Graph()

graph.insert(3,4,true)
graph.insert(3,5,true)

graph.insert(5,6,false)

graph.display()
