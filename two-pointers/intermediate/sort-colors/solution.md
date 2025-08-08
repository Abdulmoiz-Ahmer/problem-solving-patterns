## Solution: Sort Colors

### Statement

Given an array `colors` containing a combination of the following values:

- `0` → Red
- `1` → White
- `2` → Blue

Sort the array **in place** so that:

- All reds (0) come first,
- Then whites (1),
- Then blues (2).

**Note:**  
You are **not allowed** to use built-in sorting functions, and the goal is to solve this efficiently without extra space.

---

### Constraints

- `1 ≤ colors.length ≤ 300`
- `colors[i] ∈ {0, 1, 2}`

---

## Solution

### Naive Approach

- Use any in-place sorting algorithm (e.g., merge sort, quicksort) to reorder elements.
- Time complexity depends on the algorithm (e.g., merge sort → `O(n log n)`).

---

### Optimized Approach (Two Pointers — Dutch National Flag Algorithm)

Instead of sorting or doing multiple passes, we can **sort in one pass** using three pointers:

- **start** → boundary for red section (0s)
- **end** → boundary for blue section (2s)
- **current** → traversal pointer

---

#### Algorithm Steps

1. Initialize:

   - `start = 0` (beginning of array)
   - `current = 0` (beginning of array)
   - `end = len(colors) - 1` (end of array)

2. Iterate while `current <= end`:

   - **Case 1**: `colors[current] == 0` (red)
     - Swap `colors[current]` and `colors[start]`.
     - Increment both `start` and `current`.
   - **Case 2**: `colors[current] == 1` (white)
     - Increment `current` (already in correct middle section).
   - **Case 3**: `colors[current] == 2` (blue)
     - Swap `colors[current]` and `colors[end]`.
     - Decrement `end`.
     - **Do not** increment `current` here — need to re-check the swapped element.

3. Continue until `current > end`.

---

### Solution Summary

- Traverse the array once.
- Reds go to the left via swaps with `start`.
- Blues go to the right via swaps with `end`.
- Whites stay in the middle.
- When `end < current`, the array is fully sorted.

---

### Time Complexity

- **O(n)** → Single traversal.

### Space Complexity

- **O(1)** → No extra space used.
