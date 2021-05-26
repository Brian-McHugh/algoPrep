# O(n) time & space, n is # of items in merged list (Interview Cake)
def merge_lists(my_list, alices_list):
    
    merged_length = len(my_list) + len(alices_list)
    #merged_list = [None] * merged_length
    merged_list = []
    
    idx = 0
    my_p = 0
    a_p = 0
    
    while idx < merged_length:
        if my_p >= len(my_list):
            #merged_list[idx] = alices_list[a_p]
            merged_list.append(alices_list[a_p])
            a_p += 1
        elif a_p >= len(alices_list):
            #merged_list[idx] = my_list[my_p]
            merged_list.append(my_list[my_p])
            my_p += 1
        elif my_list[my_p] < alices_list[a_p]:
            #merged_list[idx] = my_list[my_p]
            merged_list.append(my_list[my_p])
            my_p += 1
        else:
            #merged_list[idx] = alices_list[a_p]
            merged_list.append(alices_list[a_p])
            a_p += 1
            
        idx += 1
        
    return merged_list


# Testing
my_list = [3, 4, 6, 10, 11, 15]
alices_list = [1, 5, 8, 12, 14, 19]
print(merge_lists(my_list, alices_list))
# >>> # Prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
