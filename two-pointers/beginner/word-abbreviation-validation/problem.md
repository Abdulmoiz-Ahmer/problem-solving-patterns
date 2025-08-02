# Word Abbreviation Validation

## Problem Statement

Given a string `word` and an abbreviation `abbr`, return `TRUE` if the abbreviation matches the given string. Otherwise, return `FALSE`.

An abbreviation can replace any non-adjacent, non-empty substrings of the original word with their lengths. Replacement lengths must not contain leading zeros.

## Examples

### Valid Abbreviations

1. `"calendar"` can be abbreviated as:

   - `"cal3ar"` ("cal" + "end" [length = 3] + "ar")
   - `"c6r"` ("c" + "alenda" [length = 6] + "r")

2. `"internationalization"` can be abbreviated as:
   - `"i18n"` (first 'i' + 18 letters skipped + last 'n')

### Invalid Abbreviations

1. `"c06r"` (has leading zeros)
2. `"cale0ndar"` (replaces an empty string)
3. `"c24r"` (replaced substrings are adjacent - "c" + "al" + "enda" + "r")

## Constraints

- `1 ≤ word.length ≤ 20`
- `word` consists of only lowercase English letters
- `1 ≤ abbr.length ≤ 10`
- `abbr` consists of lowercase English letters and digits
- All integers in `abbr` will fit in a 32-bit integer

## Function Signature

```javascript
function validWordAbbreviation(word, abbr) {
  // Your implementation here
}
```
