class ChilliPowder:

    def __init__(self, name,color, spiciness, canEat):
        self.name = name
        self.color = color
        self.spiciness = spiciness
        self.canEat = canEat
    
    def getCanEat(self):
        return self.canEat

    def canSmell(self):
        if(self.spiciness > 50):
            return False
        else :
            return True
    
    def getColor(self):
        return self.color

kashmiriChilli = ChilliPowder("Kashimiri Chilli", "Dark Red", 30, True )
ruralChilli = ChilliPowder("Naatu Chilli", "Red", 100, True )
poisonChilli = ChilliPowder("Killer Chilli", "Brown", 1, False )

print(kashmiriChilli.name)
print(kashmiriChilli.canSmell())

print(ruralChilli.name)
print(ruralChilli.canSmell())

print(poisonChilli.name)
print(poisonChilli.canSmell())
