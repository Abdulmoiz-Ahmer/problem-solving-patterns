# Definition for a Linked List node
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def remove_nth_last_node(head, n):
    # Initialize two pointers, both starting at the head
    left = right = head

    # Move the right pointer n steps ahead
    for itr in range(n):
        right = right.next

    # If right is None after moving n steps,
    # it means the node to remove is the head
    if right is None:
        return head.next

    # Move both pointers one step at a time
    # until right reaches the last node
    while right.next is not None:
        left = left.next
        right = right.next

    # Skip the target node
    left.next = left.next.next

    # Return the (possibly updated) head of the list
    return head
