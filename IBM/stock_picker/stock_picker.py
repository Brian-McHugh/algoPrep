'''
An investor has saved some money and wants to invest in the stock market.
There are a number of stocks to choose from, and they want to buy at most
one share in any company. The total invested cannot exceed the funds
available. A friend who is a stock market expert has predicted the value
of each stock after one year. Determine the maximum profit that can be
earned at the end of the year assuming the predictions come true.
Example: budget = 30
curr_prices =  [1, 2, 4, 6]
future_prices = [5, 3, 5, 6]
OUTPUT >>> 6
'''


# O(n**2) time | O(n) space
def stock_picker(curr_prices, future_prices, budget):

    # save profit outcomes for every trade, starting with zero if no trades are made
    profits = [0]

    # create a list of tuples with prices and profits
    cost_profs = get_profits(curr_prices, future_prices, budget)
    #print(cost_profs)

    # iterate thru list of prices and profits to find best combination
    for i in range(len(cost_profs)):
        max_profit = 0

        current_price = cost_profs[i][0]
        current_profit = cost_profs[i][1]

        remaining_budget = budget - current_price
        max_profit += current_profit
        profits.append(max_profit)

        for j in range(i + 1, len(cost_profs)):
            next_price = cost_profs[j][0]
            # skip this stock if we don't have enough budget left
            if remaining_budget < next_price:
                continue
            else:
                next_profit = cost_profs[j][1]
                remaining_budget -= next_price
                max_profit += next_profit
                profits.append(max_profit)

    return max(profits)


# helper function to calculate potential profits for each stock purchase
def get_profits(curr_prices, future_prices, budget):
    # create a list of tuples showing cost and profit
    cost_profs = []

    for i in range(len(curr_prices)):
        # skip stocks that are over our budget
        if curr_prices[i] > budget:
            continue

        profit = future_prices[i] - curr_prices[i]
        # skip stocks that don't result in a profitable trade
        if profit <= 0:
            continue

        cost_profs.append((curr_prices[i], profit))

    return cost_profs


# Testing
curr_prices = [175, 133, 109, 201, 97]
future_prices = [200, 125, 128, 228, 133]
budget = 250

print(stock_picker(curr_prices, future_prices, budget)) # >>> 55

curr_prices_1 = [75, 133, 101, 40, 240]
future_prices_1 = [200, 125, 128, 55, 280]
budget_1 = 250

print(stock_picker(curr_prices_1, future_prices_1, budget_1)) # >>> 167
