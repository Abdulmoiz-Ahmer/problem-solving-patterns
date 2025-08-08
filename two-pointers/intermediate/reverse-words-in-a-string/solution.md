## Solution: Reverse Words in a String

### Statement

You are given a string `sentence` that may contain:

- Leading or trailing spaces
- Multiple spaces between words

Your task:  
Reverse the **order** of the words in the sentence **without** changing the characters within each word.

Return the result:

- Words separated by **a single space**
- No leading or trailing spaces

**Note:**

- A word is defined as a continuous sequence of non-space characters.
- Multiple words separated by single spaces form a valid English sentence.
- Ensure only **one space** between any two words.

---

### Constraints

- `sentence` contains English uppercase and lowercase letters, digits, and spaces
- At least one word in `sentence`
- `1 ≤ sentence.length ≤ 10⁴`

---

## Solution

### Approach

1. **Trim spaces** from the start and end of `sentence`.
2. **Split** the sentence into words based on spaces → store in a list `result`.  
   (Splitting automatically removes multiple spaces between words.)
3. **Use two pointers**:
   - `left` → start of the list
   - `right` → end of the list
4. Swap words at `left` and `right`, then:
   - Increment `left`
   - Decrement `right`
5. Continue until `left >= right`.
6. **Join** the list into a string with a single space between words.
7. Return the reversed sentence.

---

### Steps in Detail

- Remove extra spaces: `sentence.strip()`
- Split into words: `result = sentence.split()`
- Reverse in place using the two-pointer method
- Join with `" ".join(result)`

---

### Time Complexity

- **O(n)**
  - Splitting processes the entire string (`O(n)`)
  - Reversing with two pointers is also `O(n)`
- Total: **O(n)**

### Space Complexity

- **O(n)**
  - List of words and the final output string

---
