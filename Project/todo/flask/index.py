from flask import Flask, jsonify, request
from flask_cors import CORS
from flaskext.mysql import MySQL
import sql_handler

# App creation
todo = Flask(__name__)
# CORS setup
CORS(todo)

# mysql instantation
mysql = MySQL()

# mysql setup
todo.config['MYSQL_DATABASE_HOST'] = 'localhost'
todo.config['MYSQL_DATABASE_USER'] = 'root'
todo.config['MYSQL_DATABASE_PASSWORD'] = 'augtra@123'
todo.config['MYSQL_DATABASE_DB'] = 'orange_todo'
# integration
mysql.init_app(todo)

@todo.route("/api/user/signup", methods=['POST'])
def signup():
    try:

        # {
        #     "username":"string",
        #     "password" : "string",
        #     "dob":"1997-12-13T06:14:52.238"
        # }

        # getting request in JSON format
        postData = request.get_json()
        # calling create user methoid to insert the data
        Error = sql_handler.createUser(postData)
        if(Error) :
            return jsonify({
            "isError":True,
            "message":str(Error)
        }), 502
        else :
            return jsonify({
            "isError":False,
            "message":"OK"
        })
        # response
    except Exception as error:
        return jsonify({
            "isError":True,
            "message":str(error)
        }), 502
    

@todo.route("/api/user/login", methods=['POST'])
def login():
    requestData = request.get_json()
    responseFromDb = sql_handler.checkUser(requestData)

    if(responseFromDb["isError"]):
        return jsonify({
            "isError":True,
            "message":str(responseFromDb["message"])
        })
    else :
         return jsonify({
            "isError":False,
            "message":responseFromDb["message"]
        })


@todo.route("/api/tasks/create", methods=['POST'])
def createTask():

    # "user_id":"12",
    # "task_name":"Session",
    # "end_time":"2013-05-10T06:14:52.238"


    requestData = request.get_json()
    Error = sql_handler.createTask(requestData)

    if(Error):
        return jsonify({
            "isError":True,
            "message":str(Error)
        }), 502
    else :
         return jsonify({
            "isError":False,
            "message":"Ok"
        })
    
@todo.route("/api/tasks/get", methods=['POST'])
def getTasks():

    # {
    # "user_id":"12"
    # }
    requestData = request.get_json()
    responseData = sql_handler.getTasksByUserId(requestData)

    if(responseData["error"]):
        return jsonify({
            "isError":True,
            "message":str(responseData["error"])
        }), 502
    else :
         return jsonify({
            "isError":False,
            "message":responseData
        })


@todo.route("/api/tasks/delete", methods=['POST'])
def deleteTask():
    requestData = request.get_json()
    Error = sql_handler.deleteTask(requestData)

    if(Error):
        return jsonify({
            "isError":True,
            "message":str(Error)
        }), 502
    else :
         return jsonify({
            "isError":False,
            "message":"Ok"
        })


if __name__ == '__main__':
    todo.run(port=5000)