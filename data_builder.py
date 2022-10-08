import pandas as pd
import os
import json

ref_file = os.path.join(os.getcwd(),'react-test/src','data.json')
solutions = os.path.join(os.getcwd(), 'solutions')
git_root_path = 'https://github.com/deanflanagan/leetcode/tree/master/'

metadata_dict = []
for dirs,_,files in os.walk(solutions):
    problem_id = dirs.split('/')[-1].lstrip('0')
    if 'metadata.json' in files:
        cur_path = os.path.join(solutions, dirs, [x for x in files if 'metadata.json' in files][0])
        with open(cur_path, 'r') as f:
            prob_data = json.load(f)
            prob_data['id'] = problem_id
            prob_data['git'] = git_root_path + dirs.split('leetcode/')[1]
            # print(prob_data)
            metadata_dict.append(prob_data)
with open(ref_file, "w") as final:
   json.dump(metadata_dict, final)