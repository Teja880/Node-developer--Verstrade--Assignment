//Write a simple application using a recursive function that accepts a value (integer) and returns the fibonacci value at that position in the series.
//The application should be performant at scale to handle larger numbers without slowing down exponentially.
function fibonacci(n) {
  let a = 0, b = 1, temp;
  if (n === 0) {
    return a;
  }
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}


//A string is balanced if it consists of exactly two different characters and both of those characters appear exactly the same number of times. For example: "aabbab" is balanced (both 'a' and 'b' occur three times) but "aabba" is not balanced ('a' occurs three times, 'b' occurs two times). String "aabbcc" is also not balanced (it contains three different letters).A substring of string S is a string that consists of consecutive letters in S
function getBalancedSubstrings(S) {
  const n = S.length;
  const results = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sub = S.slice(i, j + 1);
      if (isBalanced(sub)) {
        if (results.length === 0) {
          results.push(sub);
        } else {
          const currLen = results[0].length;
          const subLen = sub.length;
          if (subLen > currLen) {
            results.splice(0, results.length, sub);
          } else if (subLen === currLen) {
            results.push(sub);
          }
        }
      }
    }
  }

  return results;
}

function isBalanced(str) {
  const count = {};
  let distinctCount = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!count[char]) {
      count[char] = 1;
      distinctCount++;
    } else {
      count[char]++;
    }
    if (distinctCount > 2) {
      return false;
    }
  }
  const counts = Object.values(count);
  return counts[0] === counts[1];
}

//You're given 3 plates (A, B, C) and an N number of rings labelled according to the diameter of each ring. For instance, Ring 5 has 5cm diameter and hence is larger than Ring 4 (4cm diameter) and Ring 3 (3cm diameter) etc.Write a function solution named "migrateRings(N, A, B, C)" that accepts a positive integer input; N denoting the number of Rings labelled from 1 to N as their respective diameter sizes. These provided Rings are sorted in ascending order on Plate A denoted by the input A. The task is to move all the rings from Plate A to Plate B using Plate C as help for auxillary holder. The function should return an array of the steps required to migrate N Rings from Plate A to Plate B.
//At the end of the solution, all Rings should be sorted on Place B just as it was on Plate A.

function migrateRings(N) {
  return moveRings(N, 'A', 'B', 'C');
}

function moveRings(n, source, destination, auxiliary) {
  if (n === 1) {
    return [`${n}: ${source} to ${destination}`];
  }
  
  const step1 = moveRings(n - 1, source, auxiliary, destination);
  const step2 = `${n}: ${source} to ${destination}`;
  const step3 = moveRings(n - 1, auxiliary, destination, source);
  
  return [...step1, step2, ...step3];
}

