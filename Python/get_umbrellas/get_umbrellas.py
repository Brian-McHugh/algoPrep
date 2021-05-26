def get_umbrellas(requirement, sizes):
    umbrellas_needed = []
    
    for size in sizes:
        if requirement % size == 0:
            umbrellas = int(requirement / size)
            umbrellas_needed.append(umbrellas)

    print(umbrellas_needed)
    
    if len(umbrellas_needed) > 0:
        return min(umbrellas_needed)
    else:
        return -1
