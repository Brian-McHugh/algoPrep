# O(n) time | O(1) space
def max_profit(stock_prices):
    
    if len(stock_prices) < 2:
        raise ValueError('Getting a profit requires at least two prices.')
    
    min_price = stock_prices[0]    
    max_profit = stock_prices[1] - stock_prices[0]
    
    for time in range(1, len(stock_prices)):
        current_price = stock_prices[time]
        profit = current_price - min_price
        
        max_profit = max(profit, max_profit)
        min_price = min(min_price, current_price)
    
    # O(n**2) time | O(1) space
    # for time in range(len(stock_prices)):
    #     current_price = stock_prices[time]
        
    #     for next_time in range(time + 1, len(stock_prices)):
    #         next_price = stock_prices[next_time]
    #         profit = next_price - current_price
    #         max_profit = max(profit, max_profit)
            
    return max_profit

# Testing
returns = [9, 7, 4, 1]
print(max_profit(returns))  # >>> -2

returns_1 = [1, 6, 7, 9]
print(max_profit(returns_1))  # >>> 8
