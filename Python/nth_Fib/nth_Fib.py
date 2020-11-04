"""Implement a function recursively to get the desired
Fibonacci sequence value.
Your code should have the same input/output as the 
iterative code in the instructions."""

# recursive solution
def nth_Fib(n):
  if n == 0 or n == 1:
    return n
  else:
    return nth_Fib(n - 1) + nth_Fib(n - 2)

"""
# solution using memoization
def nth_Fib(n, memoize = {0: 0, 1: 1}):
    if n in memoize:
      return memoize[n]
    else:
      memoize[n] = nth_Fib(n - 1, memoize) + nth_Fib(n - 2, memoize)
      return memoize[n]
"""

# Test cases
print(nth_Fib(9))
print(nth_Fib(11))
print(nth_Fib(0)) 
