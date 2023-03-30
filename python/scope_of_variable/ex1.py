def myFunc1():
    global x
    x = 1
    print("{} inside fun 1".format(x))

def myFunc2():
    global x
    x = 2
    print("{} inside fun 2".format(x))

x = 15
myFunc1()
print("{} outside after fun 1".format(x))

myFunc2()
print("{} outside after fun 2".format(x))