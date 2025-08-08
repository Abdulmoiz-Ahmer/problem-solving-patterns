## Problem: Lowest Common Ancestor (Two-Pointer Approach)

**Given:**

- Two distinct nodes `p` and `q` in a binary tree (`p != q`)
- Both `p` and `q` are present in the tree

---

## Solution

We can find the **Lowest Common Ancestor (LCA)** of two nodes in a binary tree using a **two-pointer method** with parent pointers.

### Idea

- Start one pointer at `p` and another at `q`.
- Move each pointer upward (to its parent) one step at a time.
- If a pointer reaches the root (`parent == None`), jump it to the **other starting node**.
- By switching start points when reaching the top, both pointers will travel the same total distance.
- The node where they meet is the **LCA**.

---

### Steps

1. Initialize two pointers:
   - `ptr1 = p`
   - `ptr2 = q`
2. While `ptr1 != ptr2`:
   - If `ptr1.parent` exists → `ptr1 = ptr1.parent`  
     Else → `ptr1 = q`
   - If `ptr2.parent` exists → `ptr2 = ptr2.parent`  
     Else → `ptr2 = p`
3. When `ptr1 == ptr2`, return `ptr1` (or `ptr2`) as the **LCA**.

---

### Time Complexity

- **O(h)** — where `h` is the height of the tree  
  (In the worst case, each pointer travels the entire height of the tree.)

### Space Complexity

- **O(1)** — only two pointers are used, no extra data structures.

---
