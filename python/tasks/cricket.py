def calculateOver(numOfBalls):
    over = numOfBalls//6
    remainingBalls = numOfBalls%6
    print('{}.{}'.format(over, remainingBalls))
calculateOver(13)
calculateOver(6)