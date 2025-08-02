def is_palindrome(s):
    """
    Checks if a string is a valid palindrome (ignoring non-alphanumeric characters and case).

    Args:
        s (str): Input string to check

    Returns:
        bool: True if the string is a palindrome, False otherwise
    """
    # Initialize two pointers at opposite ends of the string
    left, right = 0, len(s) - 1

    while left < right:
        # Skip non-alphanumeric characters from the left
        while left < right and not s[left].isalnum():
            left += 1

        # Skip non-alphanumeric characters from the right
        while left < right and not s[right].isalnum():
            right -= 1

        # Compare characters (case-insensitive)
        if s[left].lower() != s[right].lower():
            return False  # Early exit if characters don't match

        # Move pointers toward the center
        left += 1
        right -= 1

    # All valid characters matched -> it's a palindrome
    return True
