import os, json

ref_file = os.path.join(os.getcwd(),'react-test/src','data.json')
solutions = os.path.join(os.getcwd(), 'solutions')
git_root_path = 'https://github.com/deanflanagan/leetcode/tree/master/'

metadata_dict = []
sort_id = 1 # used for react-data-table-component for unique id
for dirs,_,files in os.walk(solutions):
    problem_id = dirs.split('/')[-1].lstrip('0')
    if 'metadata.json' in files: # I only add this after solution accepted on leetcode site
        cur_path = os.path.join(solutions, dirs,'metadata.json' )
        with open(cur_path, 'r') as f:
            # have to eval metadata as array, not single object
            print('found',dirs)
            print(f)
            solution_array = json.load(f)
            for prob_data in solution_array:
                prob_data['number'] = problem_id
                prob_data['git'] = git_root_path + dirs.split('leetcode/')[1]
                prob_data['id'] = sort_id
                sort_id += 1
                metadata_dict.append(prob_data)
with open(ref_file, "w") as final:
   json.dump(metadata_dict, final)