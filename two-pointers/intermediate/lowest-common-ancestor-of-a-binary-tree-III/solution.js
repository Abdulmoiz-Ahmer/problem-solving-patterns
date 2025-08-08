// Definition for a binary tree node
// class EduTreeNode {
//     constructor(data) {
//         this.data = data;      // Value stored in the node
//         this.left = null;      // Pointer to left child
//         this.right = null;     // Pointer to right child
//         this.parent = null;    // Pointer to parent node
//     }
// }

/**
 * Finds the Lowest Common Ancestor (LCA) of two nodes in a binary tree
 * where each node has a pointer to its parent.
 *
 * @param {EduTreeNode} p - First node
 * @param {EduTreeNode} q - Second node
 * @returns {EduTreeNode} - The lowest common ancestor of p and q
 */
function lowestCommonAncestor(p, q) {
  // Start with two pointers, one at each node
  let ptr1 = p,
    ptr2 = q;

  // Keep moving both pointers upwards until they meet
  while (ptr1 !== ptr2) {
    // If ptr1 has a parent, move it up to the parent
    // If not, reset it to q (switch path to the other node’s path)
    if (ptr1.parent) {
      ptr1 = ptr1.parent;
    } else {
      ptr1 = q;
    }

    // If ptr2 has a parent, move it up to the parent
    // If not, reset it to p (switch path to the other node’s path)
    if (ptr2.parent) {
      ptr2 = ptr2.parent;
    } else {
      ptr2 = p;
    }
  }

  // When both pointers meet, that's the LCA
  return ptr1;
}

export { lowestCommonAncestor };
