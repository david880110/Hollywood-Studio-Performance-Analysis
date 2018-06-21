from flask import Flask, render_template, jsonify
from flask_cors import CORS, cross_origin
import pandas as pd

app = Flask(__name__)
CORS(app)

cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:port"}})

@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/oscars_overall')
def oscars_overall():

    oscars_overall = pd.read_csv('oscars_overall.csv')
    return jsonify(oscars_overall.to_dict(orient="records"))

    
@app.route('/oscars/')
def oscars():
    oscars = pd.read_csv('oscars.csv')
    oscars = oscars.to_dict(orient="records")

    return jsonify(oscars)    
    
@app.route('/oscars/<year>')
def oscars_by_year(year):
    oscars = pd.read_csv('oscars.csv')
    oscars = oscars.to_dict(orient="records")
    
    oscar_list = []
    
    for oscar in oscars:
        if(oscar["Year"] == int(year)):
            oscar_list.append(oscar)

            
    return jsonify(oscar_list)

@app.route('/years')
def years():
    oscars = pd.read_csv('oscars.csv')
    oscars = oscars.to_dict(orient="records")
    
    year_list = []
    unique_list = []
    
    for oscar in oscars:
        year_list.append(oscar["Year"])

    for year in year_list:
        if year not in unique_list:
            unique_list.append(year)
    
    return jsonify(unique_list)
    
if __name__ == "__main__":
    app.run(debug=True)