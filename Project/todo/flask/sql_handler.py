

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
            return {
                "isError":True,
                "message":"User Not Found"
            }
        else:
            hashedPasswordFromDb = userData[0][2]
            isPasswordMatching = password_handler.check(data['password'], hashedPasswordFromDb)

            if(isPasswordMatching):
                return {
                    "isError":False,
                    "message":{
                        "userData" : {
                            "id":userData[0][0],
                            "username":userData[0][1],
                            "dob":userData[0][3],
                            "createdOn":userData[0][4],
                        }
                    }
                }
            else:
                return {
                    "isError":True,
                    "message":"Password Mismatch"
                }
    except Exception as e:
        return {
                "isError":True,
                "message":str(e)
            }
    



# Tasks related functions
def createTask(data):
    try:
        insertQuery = "insert into tasks (user_id, task_name, end_time) values (%s, %s, %s)"
        connection = mysql.connect()
        cursor = connection.cursor()
        cursor.execute(insertQuery, (data['user_id'], data['task_name'], data['end_time']))
        connection.commit()
        cursor.close()
        return None
    except Exception as e:
        return e

def getTasksByUserId(data):
    try:
        connection = mysql.connect()
        cursor = connection.cursor()
        fetchQuery = "select * from tasks where user_id = %s and is_deleted = 0"

        cursor.execute(fetchQuery, (data['user_id']))
        listOfTasks = list(cursor.fetchall())
        returnObject = []

        for oneTask in listOfTasks:
            returnObject.append({
                "id":oneTask[0],
                "user_id":oneTask[1],
                "task_name":oneTask[2],
                "status":oneTask[3],
                "end_time":oneTask[4],
                "created_on":oneTask[5],
            })
        
        return {
            "error":False,
            "data":returnObject
        }
    except Exception as e:
        return {
            "error":True,
            "data" : []
        }
    

def deleteTask(data):
    try:
        connection = mysql.connect()
        cursor = connection.cursor()
        updateQuery = "update tasks set is_deleted = 1 where id = %s"
        cursor.execute(updateQuery, (data['task_id']))
        connection.commit()
        cursor.close()
        return None
    except Exception as e:
        return e


