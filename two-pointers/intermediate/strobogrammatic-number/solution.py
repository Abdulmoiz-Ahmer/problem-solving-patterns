def is_strobogrammatic(num):
    # Mapping of digits to their corresponding values when rotated 180 degrees
    mapping = {'0': '0', '1': '1', '8': '8', '6': '9', '9': '6'}
    
    # Two-pointer setup: one starting at the beginning, one at the end
    left = 0 
    right = len(num) - 1
    
    # Check digits from both ends moving toward the center
    while left <= right:
        # If the current left digit is not in mapping, or
        # the rotated left digit doesn't match the right digit, it's not strobogrammatic
        if num[left] not in mapping or mapping[num[left]] != num[right]:
            return False
        
        # Move pointers toward the center
        left += 1
        right -= 1
    
    # If all checks pass, the number is strobogrammatic
    return True
