def getOutput(num = 10):
    print(num)
    if(num > 1):
        getOutput(num - 1)
getOutput()