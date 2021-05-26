
# O() time | O() space
def aladdins_carpet(magic, distance):

    if sum(magic) < sum(distance): return -1
    
    n = len(magic)
    total_val = 0
    start = 0
    
    for i in range(n):
        if total_val < 0:
            start = i
            total_val = 0
        total_val += (magic[i] - distance[i])
    
    return start

# Testing
magic = [2, 4, 5, 2]
dist = [4, 3, 1, 3]
print(aladdins_carpet(magic, dist))