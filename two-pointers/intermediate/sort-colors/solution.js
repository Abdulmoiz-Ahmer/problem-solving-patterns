function sortColors(colors) {
  // Initialize three pointers:
  // start: the index to place the next 0 (red)
  // current: the index currently being evaluated
  // end: the index to place the next 2 (blue)
  let current, start, end;
  current = start = 0;
  end = colors.length - 1;

  // Process elements until current passes end
  while (current <= end) {
    if (colors[current] === 0) {
      // If current element is 0 (red), swap it with the value at 'start'
      // Increment both 'start' and 'current' because we know both are in correct positions now
      [colors[start], colors[current]] = [colors[current], colors[start]];
      start++;
      current++;
    } else if (colors[current] === 2) {
      // If current element is 2 (blue), swap it with the value at 'end'
      // Decrement 'end' only, because the new value at 'current' may still need sorting
      [colors[end], colors[current]] = [colors[current], colors[end]];
      end--;
    } else {
      // If current element is 1 (white), it's already in the correct middle position
      // Just move to the next element
      current++;
    }
  }

  return colors; // Sorted in-place: reds (0), whites (1), blues (2)
}

export { sortColors };
