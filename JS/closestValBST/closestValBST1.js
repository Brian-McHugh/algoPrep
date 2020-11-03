/*

USES INNER RECURSIVE FUNCTION

nodes are valid if its value is greater than the 
values of nodes to its left and its value is less
than or equal to the value of every node to the right;
children nodes are valid nodes themselves or None/null

{
  "nodes": [
    {"id": "10", "left": "5", "right": "15", "value": 10},
    {"id": "15", "left": "13", "right": "22", "value": 15},
    {"id": "22", "left": null, "right": null, "value": 22},
    {"id": "13", "left": null, "right": "14", "value": 13},
    {"id": "14", "left": null, "right": null, "value": 14},
    {"id": "5", "left": "2", "right": "5-2", "value": 5},
    {"id": "5-2", "left": null, "right": null, "value": 5},
    {"id": "2", "left": "1", "right": null, "value": 2},
    {"id": "1", "left": null, "right": null, "value": 1}
  ],
  "root": "10"
}
target = 12

BST intiated as such:
  const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);

expected output: 13

*/

// Avg: O(log(n)) time & space
// Worst: O(n) time & space
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value)
}
	
// create helper function that can be called for each node
const findClosestValueInBstHelper = (tree, target, closest) => {
	// base case: if node doesn't exist, return result
	if (tree === null) {
		return closest;
	}
	
	// if node value is closer to target, make that value the closest
	if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
		closest = tree.value;
	}
	
	// if target is less than tree.value...
	if (target < tree.value) {
		// call recursive function on next node to the left
		return findClosestValueInBstHelper(tree.left, target, closest);
	// if target is greater than tree.value...
	} else if (target > tree.value) {
		// call the recursive functon on the next node to the right
		return findClosestValueInBstHelper(tree.right, target, closest);
	} else {
		// if node value is the same as target, return closest
		return closest;
	}
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}