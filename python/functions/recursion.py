def sum(num = 0):
    num += 1

    if num <= 10:
        sum(num)
    print(num)

sum()
