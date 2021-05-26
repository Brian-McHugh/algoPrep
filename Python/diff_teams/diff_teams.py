'''

'''

def diff_teams(s):
    chars = {}

    for char in s:
        if char in chars:
            chars[char] += 1
        else:
            chars[char] = 1
    
    teams = 99999999

    for val in chars.values():
        if val < teams:
            teams = val

    return teams

# Testing
skills = 'pcmbzpcmbz'
skills_1 = 'pcmbzpcmbzpcmbzpcmbz'
print(diff_teams(skills_1))
