/*

OUTER RECURSIVE FUNCTION

I: a binary tree
O: list/array of branch sums, in order from left to right

Example:
{
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": "10", "right": null, "value": 5},
      {"id": "6", "left": null, "right": null, "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9},
      {"id": "10", "left": null, "right": null, "value": 10}
    ],
    "root": "1"
  }
}
*/

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time
// O(n/2) space (roughly half the numer of leaves to nodes
// which ends up being O(n) space

// provide default/initial values for the first call of branchSums
function branchSums(node, currentSum=0, sums=[]) {
	// if there is no root node, left node or right node, simply return
	if (!node) return;
	
	// calculate the new current sum
	let newCurrentSum = currentSum + node.value;
	
	// if at a leaf node, then add new current sum to branch sums list
	if (node.left === null && node.right === null) {
		sums.push(newCurrentSum);
		return sums;
	}
	// recursively call the function on each child node with new current sum
	branchSums(node.left, newCurrentSum, sums);
	branchSums(node.right, newCurrentSum, sums);
	
	// return array of branch sums
	return sums;
}


//Testing
const program = require('./program');
const chai = require('chai');

it('Test Case #1', function () {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  chai.expect(program.branchSums(tree)).to.deep.equal([15, 16, 18, 10, 11]);
});

class BinaryTree extends program.BinaryTree {
  constructor(value) {
    super(value);
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}