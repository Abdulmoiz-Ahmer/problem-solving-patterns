def valid_word_abbreviation(word, abbreviation):
    # Initialize pointers for both the word and abbreviation
    wordIndex = abbreviationIndex = 0  # Tracks current position in both strings

    # Process each character in the abbreviation
    while abbreviationIndex < len(abbreviation):
        # Rule: Numbers cannot have leading zeros (including standalone '0')
        if abbreviation[abbreviationIndex] == "0":
            return False  # Immediate rejection for invalid zero

        # Case 1: Current character is a digit (represents skipped characters)
        if abbreviation[abbreviationIndex].isdigit():
            number = ""
            # Collect all consecutive digits to handle multi-digit numbers (e.g., "12" for 12 chars)
            while (
                abbreviationIndex < len(abbreviation)
                and abbreviation[abbreviationIndex].isdigit()
            ):
                number += abbreviation[abbreviationIndex]
                abbreviationIndex += 1  # Move past all digits

            # Move word pointer forward by the number of skipped characters
            wordIndex += int(number)

            # Critical check: Verify we didn't skip past the word length
            # Prevents false positives like "h5" for "hello" (word length 5)
            if wordIndex > len(word):
                return False

        # Case 2: Current character is a letter (must match word exactly)
        else:
            # Check for mismatch conditions:
            # 1. Word is exhausted but abbreviation continues
            # 2. Current characters don't match
            if (
                wordIndex >= len(word)  # Check bounds first
                or word[wordIndex] != abbreviation[abbreviationIndex]  # Then compare
            ):
                return False

            # Move both pointers forward on successful match
            wordIndex += 1
            abbreviationIndex += 1

    # Final validation must satisfy both:
    # 1. All abbreviation characters were processed
    # 2. Total matched + skipped chars equals word length exactly
    return wordIndex == len(word) and abbreviationIndex == len(abbreviation)
