# Valid Palindrome

## Statement

Given a string `s`, return `TRUE` if it is a **palindrome**; otherwise, return `FALSE`.

A **palindrome** is a phrase that reads the same backward as forward after:

* Converting all uppercase letters to lowercase
* Removing all characters that are **not** letters or digits

Only **alphanumeric characters** (letters and numbers) are considered when checking for a palindrome.

---

## Example

```text
Input: "A man, a plan, a canal: Panama"
Output: TRUE

Input: "race a car"
Output: FALSE
```

---

## Constraints

* `1 ≤ s.length ≤ 3000`
* `s` consists only of **printable ASCII characters**

---

## Notes

You may use built-in string methods to:

* Normalize the string (convert to lowercase and remove non-alphanumeric characters)
* Compare the cleaned string with its reverse
