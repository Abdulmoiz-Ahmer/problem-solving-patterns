function isStrobogrammatic(num) {
  // Create a mapping of valid strobogrammatic digit pairs
  const dictionary = new Map();
  dictionary.set("0", "0"); // 0 ↔ 0
  dictionary.set("1", "1"); // 1 ↔ 1
  dictionary.set("6", "9"); // 6 ↔ 9
  dictionary.set("8", "8"); // 8 ↔ 8
  dictionary.set("9", "6"); // 9 ↔ 6

  // Initialize two pointers for checking digits from both ends
  let left = 0,
    right = num.length - 1;

  // Loop until pointers meet or cross
  while (left <= right) {
    // Check if both digits are in the dictionary
    // If either is invalid, the number is not strobogrammatic
    if (!dictionary.get(num[left]) || !dictionary.get(num[right])) {
      return false;
    }

    left++; // Move left pointer forward
    right--; // Move right pointer backward
  }

  // If all digit pairs match the strobogrammatic rules, return true
  return true;
}

export { isStrobogrammatic };
