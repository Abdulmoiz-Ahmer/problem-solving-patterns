// Definition for a Linked List node
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// Function to remove the nth node from the end of a linked list
function removeNthLastNode(head, n) {
  // Initialize two pointers, both starting at the head
  let left, right;
  left = right = head;

  // Move the right pointer n steps ahead
  for (let itr = 0; itr < n; itr++) {
    right = right.next;
  }

  // If right is null after moving n steps,
  // it means we need to remove the head node
  if (!right) {
    return head.next;
  }

  // Move both pointers one step at a time
  // until right reaches the last node
  while (right.next != null) {
    left = left.next;
    right = right.next;
  }

  // Skip the target node
  left.next = left.next.next;

  // Return the (possibly updated) head of the list
  return head;
}

export { removeNthLastNode };
