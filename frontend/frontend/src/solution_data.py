import  os, pandas, time 

filename = 'data.json'

if filename not in os.listdir(os.getcwd()):
    print('No data logged yet')

def new_solution():
    date = input('Date in dd/mm/yyyy or t for today')
    if date.lower() == 't':
        time.strftime("%m/%d/%Y")
    
    number = input('Number of problem')
    title = input('Problem title')
    topic = input('Topic tags, separated by commas')
    topic_array = topic.split(',')
    difficulty = input('Difficulty')
    language = input('Language')
    beat_perc_runtimes = input('Beat percentage of runtimes in decimal')
    beat_memory_distribution = input('Beat percentage of memory in decimal')
    git_link = input('Git link')
    leetcode_link = input('Leetcode submission link')

    print({'date': date, 'number': number, 'tags': topic_array, 'difficulty': difficulty, 'language': language, 'runtime': beat_perc_runtimes, 'memory': beat_memory_distribution, 'git': git_link, 'leetcode': leetcode_link})
    return

