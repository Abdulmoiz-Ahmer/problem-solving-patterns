def reverse_words(sentence):
    # Step 1: Remove leading and trailing spaces using strip()
    # Step 2: Split the sentence into words using split(), which also collapses multiple spaces between words
    reverse_sentence = sentence.strip().split()

    # Initialize two pointers for reversing the list of words in place
    start = 0
    end = len(reverse_sentence) - 1

    # Step 3: Reverse the list of words using two-pointer approach
    while start < end:
        # Swap the words at start and end
        reverse_sentence[start], reverse_sentence[end] = (
            reverse_sentence[end],
            reverse_sentence[start],
        )
        start += 1
        end -= 1

    # Step 4: Join the reversed words back into a single string with one space between each
    return " ".join(reverse_sentence)
