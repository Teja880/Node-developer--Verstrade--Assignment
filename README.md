## Node-developer--Verstrade--Assignment

# Program 1: Fibonacci Recursive Function
Function Name: fibonacci(n)

Input: A positive integer n indicating the position in the Fibonacci series to return the value for.

Output: The Fibonacci value at position n.

Explanation: This function calculates the Fibonacci value at position n using a loop. It starts with two variables a and b initialized to 0 and 1, respectively. The loop iterates from 2 to n, calculating the sum of a and b and storing it in temp, then setting a to b and b to temp. Finally, it returns the value of b.

Sample Input:
n = 10;
Sample Output:
55

# Program 2: Balanced Substrings
Function Name:  getBalancedSubstrings(S)

This program finds all substrings in a given string that are balanced. A balanced substring is defined as a string that contains exactly two different characters, and each of those characters appears exactly the same number of times in the substring. Here is how it works:

Input:
A string S to find balanced substrings in.
Output:
An array of all balanced substrings in the input string.


Sample Input:
S = "aabbab"
Sample Output:
["aabb", "abba"]


# Program 3: Migrating Rings
Function Name:  migrateRings(N)

This program solves the classic Towers of Hanoi problem using recursion. The problem is to move a stack of N rings from plate A to plate B, using plate C as an auxiliary holder. The rings are sorted in ascending order by size, with the largest ring at the bottom of the stack. Here is how it works:

Input:
A positive integer N indicating the number of rings to migrate.
Output:
An array of strings representing the steps required to move the rings from plate A to plate B.

Sample Input:
N = 3
Sample Output:
[
  "1: A to B",
  "2: A to C",
  "1: B to C",
  "3: A to B",
  "1: C to A",
  "2: C to B",
  "1: A to B"
]

