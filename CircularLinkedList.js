class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    find(data) {
      let curNode = this.head;
      while (curNode.data !== data) {
        if (curNode.next === this.head) return null;
        curNode = curNode.next;
      }
      return curNode;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
        newNode.next = this.head;
      }
    }
  
    add(node, data) {
      if (node !== null) {
        const newNode = new Node(data);
        newNode.next = node.next;
        node.next = newNode;
        return;
      }
    }
  
    remove(data) {
      let preNode = this.head;
      if (preNode.data === data) {
        this.head = preNode.next;
        return;
      }
      while (preNode.next.data !== data) {
        preNode = preNode.next;
        if (preNode.next === this.head) return null;
      }
      if (preNode.data !== null) {
        if (preNode.next === this.tail) {
          this.tail = preNode;
          preNode.next = this.head;
        }
              else
            preNode.next = preNode.next.next;
      }
    }
  
    size() {
      let cnt = 0;
      let curNode = this.head;
      while (curNode !== null) {
        cnt++;
        if (curNode === this.tail) break;
        curNode = curNode.next;
      }
      return cnt;
    }
  
    display() {
      let ret = "[";
      let curNode = this.head;
      while (curNode !== null) {
        ret += `${curNode.data},`;
        if (curNode === this.tail) break;
        curNode = curNode.next;
      }
      ret = ret.substring(0, ret.length - 1);
      ret += "]";
      return ret;
    }
  }
  
  const circularLinkedList = new CircularLinkedList();
  circularLinkedList.append(1);
  circularLinkedList.append(2);
  circularLinkedList.append(3);
  circularLinkedList.add(circularLinkedList.find(1), 5);
  circularLinkedList.remove(1);
  console.log(circularLinkedList.size());