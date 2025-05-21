from flask import Flask, jsonify
from Ogerpon import getPokemon

app = Flask(__name__)

@app.route('/data')
def get_data():
    data = getPokemon(1)
    print("IN PY: " + data)
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
