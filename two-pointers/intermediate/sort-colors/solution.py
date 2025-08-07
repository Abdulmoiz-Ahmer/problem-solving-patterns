def sort_colors(colors):
    # Initialize pointers:
    # start: the position to place the next 0
    # current: the current element being evaluated
    # end: the position to place the next 2
    current = start = 0
    end = len(colors) - 1

    # Loop until current pointer surpasses end
    while current <= end:
        if colors[current] == 0:
            # If the current element is 0 (red), swap it with the element at 'start'
            # Then move both 'start' and 'current' forward
            colors[start], colors[current] = colors[current], colors[start]
            start += 1
            current += 1
        elif colors[current] == 1:
            # If it's 1 (white), it's already in the right place — move 'current' ahead
            current += 1
        else:
            # If it's 2 (blue), swap it with the element at 'end'
            # Only move 'end' back, don't move 'current' yet, because the swapped-in element may still need sorting
            colors[end], colors[current] = colors[current], colors[end]
            end -= 1

    return colors  # Sorted in-place as red (0s), white (1s), and blue (2s)
