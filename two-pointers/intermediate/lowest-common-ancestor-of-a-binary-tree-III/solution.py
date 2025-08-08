# Definition for a binary tree node
# class EduTreeNode:
#     def __init__(self, data):
#         self.data = data       # Value stored in the node
#         self.left = None       # Pointer to left child
#         self.right = None      # Pointer to right child
#         self.parent = None     # Pointer to parent node

from EduTreeNode import *

def lowest_common_ancestor(p, q):
    """
    Finds the Lowest Common Ancestor (LCA) of two nodes in a binary tree
    where each node has a reference to its parent.

    Args:
        p (EduTreeNode): First node
        q (EduTreeNode): Second node

    Returns:
        EduTreeNode: The lowest common ancestor of p and q
    """
    
    # Initialize two pointers at p and q
    ptr1 = p
    ptr2 = q
    
    # Traverse until both pointers meet at the same node
    while ptr1 != ptr2:
        
        # Move ptr2 upward to its parent if it exists
        # If no parent exists (root reached), switch to p's path
        if ptr2.parent:
            ptr2 = ptr2.parent
        else:
            ptr2 = p
        
        # Move ptr1 upward to its parent if it exists
        # If no parent exists (root reached), switch to q's path
        if ptr1.parent:
            ptr1 = ptr1.parent
        else:
            ptr1 = q

    # When both pointers meet, that's the LCA
    return ptr1

