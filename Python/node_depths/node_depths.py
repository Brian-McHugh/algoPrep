"""
Given a binary tree, return the sum of the depths of all of its nodes
Example:
sample_tree = {
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": None, "right": None, "value": 5},
      {"id": "6", "left": None, "right": None, "value": 6},
      {"id": "7", "left": None, "right": None, "value": 7},
      {"id": "8", "left": None, "right": None, "value": 8},
      {"id": "9", "left": None, "right": None, "value": 9}
    ],
    "root": "1"
  }
}

Output: 16
> depth of node with value of 2 is 1
> depth of node with value of 3 is 1
> depth of node with value of 4 is 2
> depth of node with value of 5 is 2
etc...

"""

# recursive solution
# O(n) time | O(height) space
def nodeDepths(root, depth=0):
  # handle base base
  if root is None:
    return 0
    
  return depth + nodeDepths(root.left, depth+1) + nodeDepths(root.right, depth+1)


# while loop solution
# O(n) time | O(height) space
def node_depths(root):
  depths_sum = 0
  depths_stack = [[root, 0]]
  
  while len(depths_stack) > 0:
    current_node = depths_stack.pop()
    node, depth = current_node[0], current_node[1]
    if node is None:
      continue
    
    depths_sum += depth
    depths_stack.append([node.left, depth+1])
    depths_stack.append([node.right, depth+1])
    
  return depths_sum


# This is the class of the input binary tree.
class BinaryTree:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None
