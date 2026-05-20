#!/usr/bin/env python3
"""Fix count values for projects appearing multiple times."""
import json

with open('data.json', 'r') as f:
    data = json.load(f)

fixed = 0
for day in data['days']:
    for p in day['projects']:
        name = p['name']
        date = day['date']
        
        if name == 'openhuman' and date == '2026-05-20':
            p['count'] = 4  # 5/20, 5/19, 5/18, 5/13
            fixed += 1
            print(f'openhuman {date}: count -> 4')
        elif name == 'agentmemory' and date == '2026-05-20':
            p['count'] = 3  # 5/20, 5/13, 5/12
            fixed += 1
            print(f'agentmemory {date}: count -> 3')

with open('data.json', 'w') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f'\nDone! {fixed} count(s) fixed.')
