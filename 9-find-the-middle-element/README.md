# Disemvowel-Trolls
https://www.codewars.com/kata/find-the-middle-element/train/javascript

## Partner:
Carmen

## Problem:

"As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1."

## Process for Solving the Challenge:

1.  Create new, sorted array lowest to highest
2.  Compare newArray[1] with original array, finding index for the value that matches newArray[1]
3.  Return index of the value