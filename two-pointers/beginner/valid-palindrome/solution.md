## Solution: Valid Palindrome

### Statement

Given a string `s`, return **TRUE** if it is a palindrome; otherwise, return **FALSE**.

A phrase is considered a palindrome if it reads the same backward as forward **after**:

- Converting all uppercase letters to lowercase.
- Removing any characters that are **not letters or numbers**.  
  Only **alphanumeric characters** (letters and digits) are taken into account.

**Constraints:**

- `1 ≤ s.length ≤ 3000`
- `s` consists only of printable ASCII characters.

---

## Solution

So far, you’ve probably brainstormed some approaches and have an idea of how to solve this problem. Let’s explore some of these approaches and figure out which one to follow based on considerations such as **time complexity** and any **implementation constraints**.

---

### Naive Approach

A naive approach to checking if a string is a palindrome would involve:

1. **Cleaning the string**:

   - Remove all non-alphanumeric characters.
   - Convert the string to lowercase for case-insensitive comparison.

2. **Checking palindrome**:
   - Reverse the cleaned string.
   - Compare the reversed string with the cleaned original.
   - If both match, it’s a palindrome; otherwise, it’s not.

While simple to implement, this method:

- Requires **extra space** to store the cleaned string and its reversed copy → **O(n)** space complexity.
- Performs unnecessary reversal, making it less efficient than the two pointer method.

---

### Optimized Approach — Two Pointers

The **two pointer** approach minimizes unnecessary computations and extra space.

**Process:**

- Initialize two pointers:
  - `left` at the **start** of the string.
  - `right` at the **end** of the string.
- Move pointers inward simultaneously.
- Skip non-alphanumeric characters (spaces, punctuation, symbols).
- Convert letters to lowercase before comparing for **case-insensitivity**.
- If characters match, continue moving inward.
- If characters don’t match, **return FALSE** immediately.

**Time complexity:** O(n)  
**Space complexity:** O(1)

---

### Step-by-Step Solution Construction

#### Step 1: Initialize pointers and skip non-alphanumeric characters

- `left = 0` (start of string)
- `right = len(s) - 1` (end of string)

Processing rules:

- If `s[left]` is not alphanumeric → `left += 1` until valid.
- If `s[right]` is not alphanumeric → `right -= 1` until valid.

#### Step 2: Compare characters and move pointers

- Convert both `s[left]` and `s[right]` to lowercase.
- If characters match → `left += 1` and `right -= 1` (move inward).
- If mismatch → return `False`.
- Continue until pointers meet or cross.
- If no mismatches found → return `True`.

---

### Solution Summary

1. Initialize two pointers:
   - `left` at the start.
   - `right` at the end.
2. Skip non-alphanumeric characters.
3. Compare lowercase versions of the characters.
4. If mismatch found → return `False`.
5. If loop finishes without mismatches → return `True`.

---
