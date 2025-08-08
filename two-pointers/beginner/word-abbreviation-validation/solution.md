## Solution: Valid Word Abbreviation

### Statement

Given a string `word` and an abbreviation `abbr`, return **TRUE** if the abbreviation matches the given string; otherwise, return **FALSE**.

An abbreviation can replace any **non-adjacent**, **non-empty** substrings of the original word with their lengths. Replacement lengths must not contain **leading zeros**.

---

### Examples

#### Valid Abbreviations

- `"calendar"` → `"cal3ar"`  
  ("cal" + skip `"end"` [length = 3] + "ar" still matches `"calendar"`)

- `"calendar"` → `"c6r"`  
  ("c" + skip `"alenda"` [length = 6] + "r" still matches `"calendar"`)

- `"internationalization"` → `"i18n"`  
  Skip 18 characters in `"internationalization"`, leaving `"i"` and `"n"`.

#### Invalid Abbreviations

- `"c06r"` → Has **leading zeros** in the number.
- `"cale0ndar"` → Replaces an **empty string** (invalid).
- `"c24r"` → Adjacent substrings replaced (invalid).

---

### Constraints

- `1 ≤ word.length ≤ 20`  
  `word` consists of only lowercase English letters.
- `1 ≤ abbr.length ≤ 10`  
  `abbr` consists of lowercase English letters and digits.
- All integers in `abbr` fit in a **32-bit integer**.

---

## Solution

This problem aims to **verify** that the abbreviation corresponds to the given word by:

- Matching letters directly.
- Properly interpreting numbers as **skipped characters**.

The **two pointers** technique can be useful here:

1. One pointer (`word_index`) at the start of `word`.
2. One pointer (`abbr_index`) at the start of `abbr`.

We then iterate over both strings simultaneously:

- **If a digit is encountered** at `abbr[abbr_index]`:

  - Check if it is a **leading zero** → if yes, return `FALSE`.
  - Extract the full number and **skip** that many characters in `word`.

- **If a letter is encountered**:
  - Check if it matches `word[word_index]`.
  - If mismatch → return `FALSE`.
  - Otherwise, increment both pointers.

After processing:

- If both pointers are at the **end** of their respective strings → return `TRUE`.
- Otherwise → return `FALSE`.

---

### Step-by-Step Algorithm

1. Initialize:

   - `word_index = 0`
   - `abbr_index = 0`

2. While `abbr_index < len(abbr)`:

   - If `abbr[abbr_index]` is a **digit**:
     - If it's `'0'` → return `FALSE` (**leading zero check**).
     - Parse the number from `abbr` and move `word_index` forward by that number.
   - Else (**letter case**):
     - If `word[word_index] != abbr[abbr_index]` → return `FALSE`.
     - Increment both indices.

3. After loop:
   - If `word_index == len(word)` **and** `abbr_index == len(abbr)` → return `TRUE`.
   - Else → return `FALSE`.

---

### Time Complexity

**O(n)** — where `n` is the length of the abbreviation string `abbr`.  
We process each character of `abbr` exactly once.

### Space Complexity

**O(1)** — constant extra space regardless of input size.
