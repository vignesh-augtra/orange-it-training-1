username = input("Enter username here : ")
city = input("Enter city name here : ")
age = int(input("Enter ur age : "))
weight = float(input("Enter ur weight : "))

print(type(age))


# Output Formatting

# print("Hi", username)
# print("Hi {0}, welcome to {1}".format(username, city))
print("Hi {u}, welcome to {c}. You're age is {a} and weight is {w}".format(u = username, c = city, a = age, w = weight))