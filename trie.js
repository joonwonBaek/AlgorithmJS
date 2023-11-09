class Node {
  constructor(value ='') {
    this.value = value;
    this.children = new Map();
  }
}
// Node {value: '', children: Map(0)}

class Trie {
  constructor() {
    this.root = new Node();
  }
  
  insert(string) { // string = 'cat'
    let currentNode = this.root; // root부터 탐색을 시작한다.
    
    for (const char of string) { // 문자열을 맨 앞부터 문자 하나씩 순회한다. char = 'c'
      if (!currentNode.children.has(char)) { // 현재 노드가 'c'를 간선으로 가지고 있지 않다면,
        currentNode.children.set(char, new Node(currentNode.value + char)); // 새롭게 노드를 추가한다.
        // Node {value:'', children: Map(1) {'c' => Node}}
      }
      
      currentNode = currentNode.children.get(char); // 그러고나서 char 노드로 이동한다.
      // 'c' 간선이 이어진 노드로 이동
      // Node {value: 'c', children: Map(0)}
    }
  }
  
  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }

    return true;
  }
}

const trie = new Trie();
trie.insert('cat');
trie.insert('can');
console.log(trie.has('cat')); // true
console.log(trie.has('can')); // true
console.log(trie.has('cap')); // false