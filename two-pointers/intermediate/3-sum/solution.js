function threeSum(numbers) {
  // Sort the array in ascending order to enable the two-pointer approach
  // Time Complexity: O(n log n)
  numbers = numbers.sort((a, b) => a - b);

  // This will store all unique triplets that sum to 0
  const sums = [];

  // Outer loop: iterate through each number as the first element of potential triplets
  // We stop at length - 2 because we need at least 3 numbers to form a triplet
  // Time Complexity: O(n) for this loop
  for (let i = 0; i < numbers.length - 2; i++) {
    // Initialize two pointers:
    let low = i + 1; // 'low' starts right after current number
    let high = numbers.length - 1; // 'high' starts at end of array

    // Skip duplicate values for the first element to avoid duplicate triplets
    // We compare with previous element (i-1) to catch duplicates
    // This optimization helps reduce unnecessary computations
    if (i > 0 && numbers[i] === numbers[i - 1]) {
      continue;
    }

    // Inner loop: two-pointer approach to find complementary pairs
    // Time Complexity: O(n) for this while loop (nested, but not quadratic due to pointer movement)
    while (low < high) {
      // Calculate current sum of the three numbers
      const sum = numbers[i] + numbers[low] + numbers[high];

      if (sum < 0) {
        // Sum is too small, move left pointer right to increase sum
        low++;
      } else if (sum > 0) {
        // Sum is too large, move right pointer left to decrease sum
        high--;
      } else {
        // Found a valid triplet that sums to 0
        sums.push([numbers[i], numbers[low], numbers[high]]);

        // Move both pointers inward to search for new combinations
        low++;
        high--;

        // Skip duplicate values for the low pointer
        // This ensures we don't process the same value multiple times
        while (low < high && numbers[low] === numbers[low - 1]) {
          low++;
        }

        // Skip duplicate values for the high pointer
        // Similar optimization as above for the right pointer
        while (low < high && numbers[high] === numbers[high + 1]) {
          high--;
        }
      }
    }
  }

  // Return all found triplets
  // Space Complexity: O(n) in worst case (when many triplets exist)
  return sums;
}

export { threeSum };
