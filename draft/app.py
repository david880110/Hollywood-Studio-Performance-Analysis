import datetime as dt
import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///database.sqlite")

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

'''
@app.route("/")
def welcome():
    return (
        f"Welcome to the avenger data Analysis API!<br/>"
        f"Avalable Routes:<br/>"
        f"/api/v1.0/map_data<br/>"
        f"/api/v1.0/market_share<br/>"
        f"/api/v1.0/sales<br/>"
        f"/api/v1.0/score<br/>"
        f"/api/v1.0/oscar<br/>"
        f"/api/v1.0/animation<br/>"
    )
'''


@app.route('/')
def welcome():
    return render_template('index.html')


@app.route("/map")
def visualization():
    return render_template("map.html")


@app.route('/lindsay')
def hello():
    return render_template('lindsay.html')


@app.route('/market_share')
def market_share_visualization():
    return render_template('sean.html')


query = """
SELECT name as Country,
latitude,
longitude,
b.Total_Gross as first_sales,
c.Total_Gross as second_sales,
d.Total_Gross as third_sales
FROM country a
left join avenger2012_data b
on a.name = b.Country
left join avenger2015_data c
on a.name = c.Country
left join avenger2018_data d
on a.name = d.Country
where b.Total_Gross is not null
and c.Total_Gross is not null
and d.Total_Gross  is not null
"""


@app.route("/api/v1.0/map_data")
def summary_data():
    """Return the data"""
    df = pd.read_sql_query(query, engine)
    return df.to_json(orient="records")


query_2 = """
SELECT *
FROM studio_market_share
"""


@app.route('/api/v1.0/market_share')
def market_share():
    """Return the data"""
    df_2 = pd.read_sql_query(query_2, engine)
    return jsonify(df_2.to_dict(orient="records"))


query_3 = """
SELECT *
FROM box_office
"""


@app.route('/api/v1.0/sales')
def sales():
    """Return the data"""
    df_3 = pd.read_sql_query(query_3, engine)
    return jsonify(df_3.to_dict(orient="records"))


query_4 = """
SELECT *
FROM rotten_tomato
"""


@app.route('/api/v1.0/score')
def score():
    """Return the data"""
    df_4 = pd.read_sql_query(query_4, engine)
    return jsonify(df_4.to_dict(orient="records"))


query_5 = """
SELECT *
FROM oscar
"""


@app.route('/api/v1.0/oscar')
def oscar():
    """Return the data"""
    df_5 = pd.read_sql_query(query_5, engine)
    return jsonify(df_5.to_dict(orient="records"))


query_6 = """
SELECT *
FROM final_animation_data
"""


@app.route('/api/v1.0/animation')
def animation():
    """Return the data"""
    df_6 = pd.read_sql_query(query_6, engine)
    return jsonify(df_6.to_dict(orient="records"))


if __name__ == '__main__':
    app.run()
