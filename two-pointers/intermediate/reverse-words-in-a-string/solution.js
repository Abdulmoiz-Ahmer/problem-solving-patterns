function reverseWords(sentence) {
  // Step 1: Remove leading/trailing whitespace with trim()
  // Step 2: Split the sentence into words using regex \s+ to handle multiple spaces
  let reverseSentence = sentence.trim().split(/\s+/);

  // Initialize two pointers to reverse the array of words in place
  let start = 0,
    end = reverseSentence.length - 1;

  // Step 3: Use two-pointer approach to reverse the array
  while (start < end) {
    // Swap words at start and end
    [reverseSentence[start], reverseSentence[end]] = [
      reverseSentence[end],
      reverseSentence[start],
    ];
    start++;
    end--;
  }

  // Step 4: Join the reversed words back into a string with a single space
  return reverseSentence.join(" ");
}

export { reverseWords };
