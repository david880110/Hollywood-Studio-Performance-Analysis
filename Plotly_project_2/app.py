from flask import Flask, render_template, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd

app = Flask(__name__)
CORS(app)

cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})

@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/sales')
def sales():

    sales = pd.read_csv('Box_office_chart.csv')
    return jsonify(sales.to_dict(orient="records"))





if __name__ == "__main__":
    app.run(debug=True)