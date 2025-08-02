function validWordAbbreviation(word, abbreviation) {
  // Initialize pointers for both strings
  let wordIndex = 0,
    abbreviationIndex = 0;

  // Process each character in the abbreviation
  while (abbreviationIndex < abbreviation.length) {
    // Reject any abbreviation that contains a standalone '0'
    // This handles leading zeros since any number starting with 0 would be caught here
    if (abbreviation[abbreviationIndex] === "0") {
      return false;
    }

    // Check if current character is a digit
    // Using !isNaN(Number()) is safer than isDigit() checks
    if (!isNaN(Number(abbreviation[abbreviationIndex]))) {
      let num = "";
      // Collect all consecutive digits to form the full number
      // Important to check bounds before accessing character
      while (
        abbreviationIndex < abbreviation.length &&
        !isNaN(Number(abbreviation[abbreviationIndex]))
      ) {
        num += abbreviation[abbreviationIndex];
        abbreviationIndex++;
      }

      // Skip ahead in the word by the parsed number amount
      wordIndex += Number(num);
      // Missing check: Need to verify we didn't skip past the word length
      // This would catch cases like "h5" for "hello" (word length 5)
      if (wordIndex > word.length) {
        return false;
      }
    } else {
      // For non-digit characters:
      // 1. Check if we've exceeded the word length (important for bounds safety)
      // 2. Verify current characters match in both strings
      if (
        wordIndex >= word.length ||
        word[wordIndex] !== abbreviation[abbreviationIndex]
      ) {
        return false;
      }

      // Move both pointers forward
      abbreviationIndex++;
      wordIndex++;
    }
  }

  // Final check - both pointers must reach exactly the end of their strings
  // Ensures:
  // 1. All abbreviation characters were processed
  // 2. The total characters matched + skipped equals word length
  return wordIndex === word.length && abbreviationIndex === abbreviation.length;
}
