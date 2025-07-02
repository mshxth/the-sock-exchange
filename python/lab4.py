from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    return jsonify({"message": "Hello, World!"})

@app.route('/socks/<int:num_socks>')
def get_socks(num_socks):
    socks = []
    for i in range(num_socks):
        sock = {
            "id": 1,
            "sockDetails": {
                "size": "Large",
                "color": "Yellow",
                "pattern": "Plain",
                "material": "Bamboo",
                "condition": "Used",
                "forFoot": "Both"
            },
            "additionalFeatures": {
                "waterResistant": False,
                "padded": False,
                "antiBacterial": True
            },
            "addedTimestamp": "2024-01-26T20:53:12.519940"  
        }
        socks.append(sock)
    
    return jsonify(socks)

if __name__ == '__main__':
    app.run(debug=True)   
