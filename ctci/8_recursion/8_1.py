from functools import lru_cache

@lru_cache
def count_ways(n):
    if n < 0:
        return 0
    elif n == 0: # base case
        return 1
    else:
        return count_ways(n-1) + count_ways(n-2) + count_ways(n-3)

print(count_ways(6))

def stairs(n, cache={}):
    if n < 0:
        return 0
    elif n == 0:
        return 1
    else:
        return cache.setdefault(n,stairs(n-1) + stairs(n-2) + stairs(n-3) )
print(stairs(6))
