## About the Pattern

The **two pointers pattern** is a versatile technique used in problem-solving to efficiently traverse or manipulate sequential data structures, such as arrays or linked lists. As the name suggests, it involves maintaining two pointers that traverse the data structure in a coordinated manner — typically starting from different positions or moving in opposite directions.

These pointers dynamically adjust based on specific conditions or criteria, allowing for efficient exploration of the data and enabling solutions with **optimal time and space complexity**. Whenever there’s a requirement to find two data elements in an array that satisfy a certain condition, the **two pointers pattern** should be one of the first strategies to consider.

The pointers can be used to iterate through the data structure in **one or both directions**, depending on the problem statement.  
For example, to check whether a string is a palindrome:

- One pointer starts from the **beginning** of the string.
- The other starts from the **end**.
- At each step, compare the values of both pointers to see if they match.

### Efficiency Comparison

The **naive approach** to solving this problem would use nested loops, resulting in a time complexity of **O(n²)**.  
However, by using two pointers moving toward the middle from both ends, we exploit the **symmetry property** of palindromic strings.  
This allows us to compare elements in a single loop, improving efficiency to **O(n)**.
