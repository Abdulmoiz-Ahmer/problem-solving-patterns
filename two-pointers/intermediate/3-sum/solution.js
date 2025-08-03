function threeSum(numbers) {
  // Sort the array in ascending order to enable the two-pointer approach
  numbers = numbers.sort((a, b) => a - b);
  const sums = []; // This will store all unique triplets that sum to 0

  // Outer loop: iterate through each number as the first element of potential triplets
  for (let i = 0; i < numbers.length; i++) {
    // Initialize two pointers:
    // - 'low' starts right after the current number
    // - 'high' starts at the end of the array
    let low = i + 1,
      high = numbers.length - 1;

    // Skip duplicate values for the first element to avoid duplicate triplets
    // Note: This checks against the previous element (i-1) to catch duplicates
    if (i > 0 && numbers[i] === numbers[i - 1]) {
      continue;
    }

    // Inner loop: two-pointer approach to find complementary pairs
    while (low < high) {
      // Calculate the current sum of the three numbers
      const sum = numbers[i] + numbers[low] + numbers[high];

      if (sum < 0) {
        // If sum is too small, move the left pointer right to increase the sum
        low++;
      } else if (sum > 0) {
        // If sum is too large, move the right pointer left to decrease the sum
        high--;
      } else {
        // Found a valid triplet that sums to 0
        sums.push([numbers[i], numbers[low], numbers[high]]);

        // Move both pointers inward after finding a valid triplet
        low++;

        // Skip duplicate values for the second element (low pointer)
        while (numbers[low] === numbers[low - 1]) {
          low++;
        }

        // Skip duplicate values for the third element (high pointer)
        while (numbers[high] === numbers[high + 1]) {
          high--;
        }
      }
    }
  }

  return sums; // Return all found triplets
}

export { threeSum };
