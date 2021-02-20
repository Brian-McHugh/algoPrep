'''
Input: list of strings (3 nums)
Input: len(list) = # of scenarios
Input: [budget, cost of containers, trade-in price]
PRINT RESULTS ON EACH LINE; NO RETURN VALUE
'''

def max_containers(scenarios):
    
    for scenario in scenarios:
        scenario_list = scenario.split(' ')
        budget = int(scenario_list[0])
        cost = int(scenario_list[1])
        containers = budget // cost
        total_containers = containers
        trade_in = int(scenario_list[2])

        while containers >= trade_in:
            additional_containers = containers // trade_in
            total_containers += additional_containers
            containers = containers % trade_in + additional_containers
        
        #print(f'{total_containers}\n')
        print(total_containers)

# Testing
scenarios = ['10 2 5', '12 4 4', '6 2 2']
#scenarios = ['10 2 5']
max_containers(scenarios)
# >>>
# 6
# 3
# 5
