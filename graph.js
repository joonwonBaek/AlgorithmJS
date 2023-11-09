class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    isEmpty() {
        return this.rear === this.front;
    }
}
// 핵심 키워드는 "노드", "간선", "최단 경로"
//최단 경로가 제일 큰 경우의 집합을 구하는 문제
function solution(e, edge){
    const graph = Array.from(Array(n+1), () => []);

    for (const [src, dest] of edge){
        graph[src].push(dest);
        graph[dest].push(src);
    }

    const distance = Array(n+1).fill(0);
    distance[1] = 1;

    // BFS 큐를 이용하여 구현
    const queue = new Queue();
    while (!queue.isEmpty()) {
        const src = queue.dequeue();
        for(const dest of graph[src]) {
            if(distance[dest] === 0) {
                queue.enqueue(dest);
                distance[dest] = distance[src] + 1;
            }
        }
    }

    const max = Math.max(...distance);
    return distance.filter(item => item === max).length
}