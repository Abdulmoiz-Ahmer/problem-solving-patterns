## Solution: Remove nth Node from End of List

### Statement

Given the head of a singly linked list and an integer `n`, remove the nth node from the end of the list and return the head of the modified list.

**Constraints:**

- The number of nodes in the list is `k`.  
  `1 ≤ k ≤ 10³`
- `-10³ ≤ Node.value ≤ 10³`
- `1 ≤ n ≤ k`

---

## Solution

So far, you have probably brainstormed some approaches and have an idea of how to solve this problem. Let’s explore some of these approaches and figure out which one to follow based on **time complexity** and **implementation constraints**.

---

### Naive Approach

1. Traverse the linked list to **count the total number of nodes** → Let this be `N`.
2. The position of the node to remove from the start is `(N - n + 1)`.
3. Traverse the list again and stop at the `(N - n)`th node.
4. Update its `next` pointer to skip the `(N - n + 1)`th node, effectively removing it.

**Drawbacks:**

- Requires **two traversals** of the list.
- Time complexity: **O(N)**
- Space complexity: **O(1)**

---

### Optimized Approach — Two Pointers

We can remove the target node in **a single traversal** using the **two pointer technique**.

**Process:**

1. Initialize two pointers `left` and `right` at the head.
2. Move `right` forward by `n` steps.
3. If `right` is `NULL` after moving:
   - The head itself is the node to remove.
   - Return `head.next` as the new head.
4. Otherwise, move both `left` and `right` forward **together** until `right` reaches the end.
5. Update `left.next` to `left.next.next` to skip the target node.
6. Return the head of the updated linked list.

**Why this works:**

- Moving `right` `n` steps ahead creates a **gap of `n` nodes** between `left` and `right`.
- When `right` reaches the end, `left` will be **right before** the target node.

---

### Step-by-Step Algorithm

1. **Initialize**:
   - `left = head`
   - `right = head`
2. Move `right` forward `n` steps.
3. **Edge case**: If `right` becomes `NULL`, remove the head by returning `head.next`.
4. Move both pointers forward one step at a time until `right.next` is `NULL`.
5. Skip the target node:  
   `left.next = left.next.next`
6. Return the updated `head`.

---

### Solution Summary

- Use two pointers (`left` and `right`) starting at the head.
- Move `right` forward by `n` steps.
- If `right` becomes `NULL`, remove the head.
- Otherwise, move both pointers together until `right` reaches the end.
- Skip the target node by adjusting `left.next`.
- Return the updated head.

---

### Time Complexity

- **O(N)** — Single traversal of the list.

### Space Complexity

- **O(1)** — Only two pointers are used.

---
