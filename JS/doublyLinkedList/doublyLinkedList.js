// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
		this.tail = null;
  }
	
  // O(1) time | O(1) space
  setHead(node) {
    if (this.head === null) {
			this.head = node;
			this.tail = node;
			return;
		}
		
		this.insertBefore(this.head, node);
  }
	
  // O(1) time | O(1) space
  setTail(node) {
    if (this.tail === null) {
			this.head = node;
			this.tail = node;
			return
		}
		
		this.insertAfter(this.tail, node);
  }
	
  // O(n) time | O(1) space
	// move the existing node with value nodeToInsert before
	// the existing node with the value of the parameter 'node'
  insertBefore(node, nodeToInsert) {
    // if the linked list is a single node, then just return
		if (nodeToInsert === this.head && nodeToInsert === this.tail) {
			return
		}
		// delete the node we are removing from its current location
		this.remove(nodeToInsert);
		
		nodeToInsert.prev = node.prev;
		nodeToInsert.next = node;
		
		if (node.prev === null) {
			this.head = nodeToInsert;
		} else {
			node.prev.next = nodeToInsert;
		}
		
		node.prev = nodeToInsert;
  }
	
  // O(n) time | O(1) space
	// move the existing node with value nodeToInsert after
	// the existing node with the value of the parameter 'node'
  insertAfter(node, nodeToInsert) {
    // if the linked list is a single node, then just return
		if (nodeToInsert === this.head && nodeToInsert === this.tail) {
			return
		}
		// delete the node we are removing from its current location
		this.remove(nodeToInsert);
		
		nodeToInsert.prev = node;
		nodeToInsert.next = node.next;
		
		if (node.next === null) {
			this.tail = nodeToInsert;
		} else {
			node.next.prev = nodeToInsert;
		}
		
		node.next = nodeToInsert;
  }
	
  // O(p) time | O(1) space ; iterating up until position p
  insertAtPosition(position, nodeToInsert) {
    let currentPosition = 1;
		let currentNode = this.head;
		
		while (currentNode !== null && currentPosition !== position) {
			currentNode = currentNode.next;
			currentPosition += 1;
		}
		// if currentNode is not null then we are not at the tail
		if (currentNode !== null) {
			this.insertBefore(currentNode, nodeToInsert);
		} else {
			this.setTail(nodeToInsert);
		}
  }
	
  // O(n) time | O(1) space
  removeNodesWithValue(value) {
		let currentNode = this.head;
		
		while (currentNode) {
			let nodeToRemove = currentNode;
			currentNode = currentNode.next;
			if (nodeToRemove.value === value) {
			  this.remove(nodeToRemove);
		  }
		}
  }
	
  // O(1) time | O(1) space
  remove(node) {
		if (node === this.head) {
			this.head = this.head.next;
		}
		
		if (node === this.tail) {
			this.tail = this.tail.prev;
		}
		
		this.removeConnections(node);
  }
	
	// O(n) time | O(1) space
  // check all nodes to see if this value exists
  containsNodeWithValue(value) {
	  let currentNode = this.head;
		
		while (currentNode !== null) {
			if (currentNode.value === value) {
				return true;
			}
			currentNode = currentNode.next;
		}
		return false;
  }
	
	// O(1) time | O(1) space
	// remove connections from node
	removeConnections(node) {
		if (node.prev !== null) {
			node.prev.next = node.next;
		}
		
		if (node.next !== null) {
			node.next.prev = node.prev;
		}
		
		node.prev, node.next = null;
	}
}

// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
