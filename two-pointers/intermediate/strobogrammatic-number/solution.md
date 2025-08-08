## Solution: Strobogrammatic Number

---

### Statement

Given a string `num` representing an integer, determine whether it is a strobogrammatic number.  
Return **TRUE** if the number is strobogrammatic or **FALSE** if it is not.

**Note:**  
A strobogrammatic number appears the same when rotated **180°** (viewed upside down).  
For example:

- `"69"` → Strobogrammatic
- `"962"` → Not strobogrammatic

---

### Constraints

- `1 <= num.length <= 50`
- `num` contains only digits.
- `num` has no leading zeros except when the number itself is `"0"`.

---

### Solution

This solution uses a **two-pointer approach** to check whether `num` is a strobogrammatic number by comparing digits from both ends toward the center.  
We use a **mapping** of valid digits that either stay the same or transform into each other when rotated **180°**:

- `'0'` → `'0'`
- `'1'` → `'1'`
- `'8'` → `'8'`
- `'6'` → `'9'`
- `'9'` → `'6'`

---

#### Steps:

1. **Initialize the map** `dict` with valid strobogrammatic digit pairs.
2. **Set two pointers**:
   - `left` at the start of the string.
   - `right` at the end of the string.
3. **Iterate** while `left <= right`:
   - If `num[left]` is not in `dict`, return **FALSE**.
   - If `dict[num[left]] != num[right]`, return **FALSE**.
   - Move `left` forward (`+1`) and `right` backward (`-1`).
4. If all pairs match the mapping, return **TRUE**.

---

### Time Complexity

- **O(n)** → We iterate over the string once, comparing digits from both ends.

### Space Complexity

- **O(1)** → The digit mapping is fixed in size regardless of input length.

---
