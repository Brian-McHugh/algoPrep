def knapsack_prob(items, capacity):
  knapsack_vals = [[0 for x in range(0, capacity + 1)]
                    for y in range(0, len(items) + 1)]
  
  for i in range(1, len(items) + 1):
    # leave top row empty to represent no items in knapsack
    current_val = items[i - 1][0]
    current_weight = items[i - 1][1]
    
    for cap in range(0, capacity + 1):
      if current_weight > cap:
        knapsack_vals[i][cap] = knapsack_vals[i - 1][cap]
      else:
        knapsack_vals[i][cap] = max(knapsack_vals[i - 1][cap], knapsack_vals[i - 1][cap - current_weight] + current_val)

  return [knapsack_vals[-1][-1], get_knapsack_items(knapsack_vals, items)]
  
  
def get_knapsack_items(knapsack_vals, items):
  sequence = []
  i = len(knapsack_vals) - 1
  cap = len(knapsack_vals[0]) - 1
  
  while i > 0:
    if knapsack_vals[i][cap] == knapsack_vals[i - 1][cap]:
      i -= 1
    else:
      sequence.append(i - 1)
      cap -= items[i - 1][1]
      i -= 1
      
    if cap == 0:
      break
    
  return list(reversed(sequence))

# Testing
knapsack_items = [[1, 2], [4, 3], [5, 6], [6, 7]]
knapsack_cap = 10

print(knapsack_prob(knapsack_items, knapsack_cap))
