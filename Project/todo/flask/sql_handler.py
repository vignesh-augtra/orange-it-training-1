

from index import mysql
import password_handler



# if error, it return the rror. If no error, None is retuned
def createUser(data):
    
    try:
        # hashing the password
        hashedPassword = password_handler.hash(data['password'])
        
        # connecting to mysql
        connection = mysql.connect()

        # creating a cursor object
        cursor = connection.cursor()

        # framing insert query
        insertQuery = 'insert into users (username, password, dob) values (%s, %s, %s)'

        # query execution
        cursor.execute(insertQuery, (data['username'], hashedPassword, data['dob'] ))

        # to complete the process / to full fill the insert query
        connection.commit()

        # closing the cursor object once all done
        cursor.close()

        return None
    
    except Exception as e:
        return e
    
def checkUser(data):
    try:

        connection = mysql.connect()
        cursor = connection.cursor()
        selectQuery = 'select * from users where username = %s'

        cursor.execute(selectQuery, (data['username']))
        # fetching the data and converting it to list
        userData = list(cursor.fetchall())

        if len(userData) == 0:
            return "User Not Found"
        else:
            hashedPasswordFromDb = userData[0][2]
            isPasswordMatching = password_handler.check(data['password'], hashedPasswordFromDb)

            if(isPasswordMatching):
                return None
            else:
                return "Password Mismatch"
    except Exception as e:
        return e
    


