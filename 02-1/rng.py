from random import randint

min_number = int(input("Enter min number: "))
max_number = int(input("Enter max number: "))

if (max_number < min_number):
    print("Invalid Input - shutting down ...")
else:
    print(randint(min_number, max_number))