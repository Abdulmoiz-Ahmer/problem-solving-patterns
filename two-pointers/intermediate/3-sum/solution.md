## Solution: 3Sum

### Statement

Given an integer array `nums`, find and return all **unique triplets** `[nums[i], nums[j], nums[k]]` such that:

- `i ≠ j`, `i ≠ k`, and `j ≠ k`
- `nums[i] + nums[j] + nums[k] == 0`

**Note:** The order of the triplets in the output does not matter.

---

### Constraints

- `3 ≤ nums.length ≤ 500`
- `-10³ ≤ nums[i] ≤ 10³`

---

## Solution

The key idea is to **sort the array** first.  
This makes it easier to:

- Find numbers that sum to zero.
- Skip duplicates to ensure uniqueness.

For each number `nums[i]`, we use a **two-pointer** approach:

- `low` starts just after `i`
- `high` starts at the end of the array
- We check `nums[i] + nums[low] + nums[high]`:
  - If sum `< 0` → increment `low` (increase sum)
  - If sum `> 0` → decrement `high` (decrease sum)
  - If sum `== 0` → store the triplet and move both pointers inward, skipping duplicates

---

### Algorithm Steps

1. **Sort** `nums` in ascending order.
2. Initialize `result = []` to store unique triplets.
3. Let `n = len(nums)`.
4. Loop `i` from `0` to `n - 2`:
   - If `nums[i] > 0` → break (remaining numbers are positive).
   - If `i == 0` or `nums[i] != nums[i - 1]` → proceed (avoid duplicate starting numbers).
   - Set `low = i + 1`, `high = n - 1`.
   - While `low < high`:
     - Compute `total = nums[i] + nums[low] + nums[high]`.
     - If `total < 0` → `low += 1`
     - Else if `total > 0` → `high -= 1`
     - Else:
       - Append `[nums[i], nums[low], nums[high]]` to `result`.
       - Increment `low` while skipping duplicates:  
         `while low < high and nums[low] == nums[low - 1]: low += 1`
       - Decrement `high` while skipping duplicates:  
         `while low < high and nums[high] == nums[high + 1]: high -= 1`
5. Return `result`.

---

### Time Complexity

- Sorting: **O(n log n)**
- Two-pointer search for each element: **O(n²)**
- **Overall:** `O(n²)`

### Space Complexity

- **O(1)** extra space (excluding output storage and sort implementation space).
