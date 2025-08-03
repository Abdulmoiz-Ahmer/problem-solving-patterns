def three_sum(numbers):
    # Sort the array to enable the two-pointer approach
    numbers.sort()
    # Initialize an empty list to store valid triplets
    sums = []

    # Outer loop: Iterate through each number as the first element of potential triplets
    # Stop at len(numbers)-2 to ensure at least 3 elements remain
    for i in range(len(numbers) - 2):
        # Initialize two pointers:
        # - `low` starts right after the current number
        # - `high` starts at the end of the array
        low = i + 1
        high = len(numbers) - 1

        # Skip duplicate values for `i` to avoid duplicate triplets
        # (Compare with previous element to catch duplicates)
        if i > 0 and numbers[i] == numbers[i - 1]:
            continue

        # Inner loop: Two-pointer technique to find complementary pairs
        while low < high:
            # Calculate the current sum of the three numbers
            current_sum = numbers[i] + numbers[low] + numbers[high]

            if current_sum < 0:
                # Sum is too small: move `low` right to increase the sum
                low += 1
            elif current_sum > 0:
                # Sum is too large: move `high` left to decrease the sum
                high -= 1
            else:
                # Found a valid triplet that sums to zero
                sums.append([numbers[i], numbers[low], numbers[high]])
                # Move both pointers inward to search for new combinations
                low += 1
                high -= 1

                # Skip duplicate values for `low` (compare with previous element)
                while low < high and numbers[low] == numbers[low - 1]:
                    low += 1
                # Skip duplicate values for `high` (compare with next element)
                while low < high and numbers[high] == numbers[high + 1]:
                    high -= 1

    # Return all unique triplets that sum to zero
    return sums
