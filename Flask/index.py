from flask import Flask, jsonify, request
from flask_cors import CORS
from flaskext.mysql import MySQL

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

@todo.route("/api/users", methods=['GET'])
def getAllUsers():

    connection = mysql.connect()
    cursor = connection.cursor()
    cursor.execute('select * from users')
    result = list(cursor.fetchall())
    resultInDict = []

    for oneData in result:
        resultInDict.append({
            "id":oneData[0],
            "name":oneData[1],
            "age":oneData[2],
            "dob":oneData[3],
            "gender":oneData[4],
            "created_on":oneData[5],
        })

    return jsonify({
        "users":resultInDict
    })


@todo.route("/api/users_by_gender", methods=['POST'])
def getUsersByGender():

    data = request.get_json()
    connection = mysql.connect()
    cursor = connection.cursor()
    cursor.execute('select * from users where gender = %s and age > %s', (data['gender'], data['age']))
    result = list(cursor.fetchall())
    resultInDict = []

    for oneData in result:
        resultInDict.append({
            "id":oneData[0],
            "name":oneData[1],
            "age":oneData[2],
            "dob":oneData[3],
            "gender":oneData[4],
            "created_on":oneData[5],
        })

    return jsonify({
        "users":resultInDict
    })




@todo.route("/api/greet", methods=["GET"])
def greetingMessage():
    return jsonify({
        "message":"Hi, hello"
    })

@todo.route("/api/check", methods=['POST'])
def checkAge():
    dataFromFrontEnd = request.get_json()

    if dataFromFrontEnd['age'] >= 18:
        return jsonify({
            "message" : "Hi " + dataFromFrontEnd['name'] + ", you are eligible to vote",
            "canVote":True

        })
    else:
         return jsonify({
            "message" : "Hi " + dataFromFrontEnd['name'] + ", you are NOT eligible to vote",
            "canVote":False
        })


if __name__ == '__main__':
    todo.run(port=5000)





def xyz(a):
    print(a['age'])


b = {
    "name":"vignesh",
    "age":25
}
xyz(b)