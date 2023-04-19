from flask import Flask, jsonify, request
from flask_cors import CORS

todo = Flask(__name__)
CORS(todo)

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