

# O() time | O() space
def clothing_options(jeans, shoes, skirts, tops, budget):

    jeans_shoes = []
    skirts_tops = []
    options = 0

    for jean in jeans:
        for shoe in shoes:
            combo = jean + shoe
            jeans_shoes.append(combo)

    jeans_shoes.sort()

    for skirt in skirts:
        for top in tops:
            outfit = skirt + top
            skirts_tops.append(outfit)

    skirts_tops.sort()
    skirts_tops = skirts_tops[::-1]

    cap = 0

    for price in jeans_shoes:
        #cap = 0
        remaining_budget = budget - price

        while cap < len(skirts_tops) and skirts_tops[cap] > remaining_budget:
            cap += 1

        if cap == len(skirts_tops):
            break

        options += len(skirts_tops) - cap

    return options

# Testing
jeans = [2, 3]
shoes = [4]
skirts = [2, 3]
tops = [2, 1]
budget = 10

print(clothing_options(jeans, shoes, skirts, tops, budget))
