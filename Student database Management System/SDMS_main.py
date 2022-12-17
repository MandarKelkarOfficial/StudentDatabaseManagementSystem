
import mysql.connector
from mysql import *

connection = mysql.connector.connect(host="localhost", user="goditachi",
                                     password="maddy06", database="sdms")

cursor = connection.cursor()

nameone = str(input("Enter your name    "))
addressone = str(input("Enter your address    "))
emailone = str(input("Enter your email    "))
phone = int(input("Enter phone number   "))
enroll = int(input("Enter enrollment No  "))

cursor.execute("INSERT INTO students_info(name,address,email,phoneNo,enrollmentNo) VALUES(%s, %s, %s, %s, %s);",
               (nameone, addressone, emailone, phone, enroll))
connection.commit()
connection.close()
print("Sucessful")


    

# :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
# -------------------------------------------Test zone---------------------------------------------------------------------------------

# from mysql import *
# import mysql.connector

# connection = mysql.connector.connect(host="localhost", user="goditachi",
#                                      password="maddy06", database="sdms")

# cursor = connection.cursor()

# nameone = str(input("Enter your name    "))
# addressone = str(input("Enter your address    "))
# emailone = str(input("Enter your email    "))
# phone = int(input("Enter phone number   "))
# enroll = int(input("Enter enrollment No  "))

# cursor.execute("INSERT INTO students_info(name,address,email,phoneNo,enrollmentNo) VALUES(%s, %s, %s, %s, %s);",(nameone,addressone,emailone,phone,enroll))
# connection.commit()
# connection.close()
# print("Sucessful")


# ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
