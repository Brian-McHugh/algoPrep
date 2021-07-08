'''
I: arrays of prices for a given category of clothing
I: budget for total spending
O: return the total number of possible clothing combinations a
C: one item from each clothing category must be purchased
'''
def clothing_options(jeans, shoes, skirts, tops, budget):

  jeans_shoes = []
  skirts_tops = []
  options = 0
    
  # create list of cost of buying one pair of jeans and one pair of shoes
  for jean in jeans:
    for shoe in shoes:
      combo = jean + shoe
      jeans_shoes.append(combo)

    jeans_shoes.sort()
    
  # create list of cost of buying one skirt and one top
  for skirt in skirts:
    for top in tops:
      outfit = skirt + top
      skirts_tops.append(outfit)
    
  # sort combined list
  skirts_tops.sort()
  # reverse the sorted list to get descending order
  skirts_tops.reverse()
    
  cap = 0

  for price in jeans_shoes:
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
# output >>> 4