'''
Populate an array of numbers from 1 to N (inclusive). Given two numbers,
p and q , if a number in the array is divisible by p print OUT,
if a number is divisible by q print THINK. If the number is divisible by
both p and q, print OUTTHINK. Otherwise, print the number.
'''
def out_think(n, p, q):
    for num in range(1, n + 1):
        str_out = ''
        div_by_p = (num % p == 0)
        div_by_q = (num % q == 0)
        
        if div_by_p:
            str_out += 'OUT'
            
        if div_by_q:
            str_out += 'THINK'
            
        if not div_by_p and not div_by_q:
            str_out += str(num)
            
        print(str_out)


# Testing
out_think(15, 3, 5)
