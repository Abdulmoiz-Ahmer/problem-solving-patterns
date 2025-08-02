def valid_word_abbreviation(word, abbreviation):
    # Initialize pointers for both the word and abbreviation
    wordIndex = abbreviationIndex = 0

    # Process each character in the abbreviation
    while abbreviationIndex < len(abbreviation):
        # Rule: Numbers cannot have leading zeros
        if abbreviation[abbreviationIndex] == "0":
            return False

        # Case 1: Current character is a digit (represents skipped characters)
        if abbreviation[abbreviationIndex].isdigit():
            number = ""
            # Collect all consecutive digits (handles multi-digit numbers)
            while (
                abbreviationIndex < len(abbreviation)
                and abbreviation[abbreviationIndex].isdigit()
            ):
                number += abbreviation[abbreviationIndex]
                abbreviationIndex += 1
            # Move word pointer forward by the number of skipped characters
            wordIndex += int(number)
            # Missing check: Need to verify we didn't skip past the word length
            # This could lead to false positives for abbreviations like "h5" for "hello"

        # Case 2: Current character is a letter (must match word)
        else:
            # Check if we've reached word end or characters don't match
            if (
                wordIndex >= len(word)
                or word[wordIndex] != abbreviation[abbreviationIndex]
            ):
                return False
            # Move both pointers forward
            wordIndex += 1
            abbreviationIndex += 1

    # Final validation:
    # 1. We've processed all abbreviation characters
    # 2. We've either matched or skipped exactly all word characters
    return wordIndex == len(word) and abbreviationIndex == len(abbreviation)
