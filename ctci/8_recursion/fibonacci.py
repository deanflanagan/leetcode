from functools import lru_cache
fib_cache = {}

def fibonacci_explicit(n):
    # check if value already done
    if n in fib_cache:
        return fib_cache[n]
    if n == 1:
        value = 1
    elif n == 2:
        value =  1
    elif n > 2:
        value = fibonacci_explicit(n-1) + fibonacci_explicit(n-2)

    fib_cache[n] = value
    return value

print(fibonacci_explicit(6))

@lru_cache
def fibonacci(n):
    if n == 1:
        return 1
    if n == 0:
        return 0
    return fibonacci(n-1) +  fibonacci(n-2)

print(fibonacci(6))

def mem_fib(n, _cache={}):
    '''efficiently memoized recursive function, returns a Fibonacci number'''
    if n in _cache:
        return _cache[n]
    elif n > 1:
        return _cache.setdefault(n, mem_fib(n-1) + mem_fib(n-2))
    return n

print(mem_fib(6))