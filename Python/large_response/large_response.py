from collections import defaultdict

filename = input()
host2req = defaultdict(int)

with open(filename) as file:
    a = 0
    b = 0

for line in file:
    print(line)

line_list = line.split()
# host2req[line_list[len(line_list)-1]] += 1
val = (int)(line_list[len(line_list)-1])
print("hi",val)
    
if (val > 5000):
    a = a + 1
    b = b + val
    print(a)
    print(b)

print(a)
print(val)

file = open("bytes_"+filename, "w")
file.write(str(a) + "\n" + str(b) + "\n")
file.close()
