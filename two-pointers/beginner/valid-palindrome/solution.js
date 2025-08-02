/**
 * Checks if a string is a valid palindrome (ignores non-alphanumeric characters and case).
 * @param {string} s - The input string to check
 * @returns {boolean} - True if palindrome, False otherwise
 */
function isPalindrome(s) {
    // Initialize two pointers at opposite ends of the string
    let left = 0,
        right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters from the left
        while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
            left++;
        }
        
        // Skip non-alphanumeric characters from the right
        while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
            right--;
        }

        // Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false; // Early exit if mismatch found
        }
        
        // Move pointers toward the center
        left++;
        right--;
    }

    // All characters matched → valid palindrome
    return true;
}

export { isPalindrome };