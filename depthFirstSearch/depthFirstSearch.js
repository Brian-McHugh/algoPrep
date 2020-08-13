// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.

/* To create the example graph:
  const graph = new Node('A');
  graph.addChild('B').addChild('C').addChild('D');
  graph.children[0].addChild('E').addChild('F');
  graph.children[2].addChild('G').addChild('H');
  graph.children[0].children[1].addChild('I').addChild('J');
  graph.children[2].children[0].addChild('K');

  console.log(graph.depthFirstSearch([]));
  / output: ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]
*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
 
  // O(v + e) time | O(v) space
  depthFirstSearch(array) {
    // append the name/value to input array
    array.push(this.name);
    
    // call the function again on all children
    for (let child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}


// Testing
const program = require('./program');
const chai = require('chai');

it('Test Case #1', function () {
  const graph = new program.Node('A');
  graph.addChild('B').addChild('C').addChild('D');
  graph.children[0].addChild('E').addChild('F');
  graph.children[2].addChild('G').addChild('H');
  graph.children[0].children[1].addChild('I').addChild('J');
  graph.children[2].children[0].addChild('K');
  chai.expect(graph.depthFirstSearch([])).to.deep.equal(['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H']);
});
