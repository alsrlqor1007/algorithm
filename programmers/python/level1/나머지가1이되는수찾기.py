def solution(n):
    for num in range(2, n + 1):
        if n % num == 1:
            return num


# List comprehension
def solution(n):
    return [x for x in range(1, n + 1) if n % x == 1][0]
