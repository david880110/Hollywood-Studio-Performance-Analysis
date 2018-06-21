import datetime as dt
import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import json

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


@app.route('/sonia')
def pie_visualization():
    return render_template('sonia.html')


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

# Mapping


@app.route("/api/v1.0/map_data")
def summary_data():
    """Return the data"""
    df = pd.read_sql_query(query, engine)
    return df.to_json(orient="records")


query_2 = """
SELECT *
FROM studio_market_share
"""

# Bubble Chart for 6 Studios


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


# Pie Chart

@app.route('/api/v1.0/years')
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


'''
query_7 = """
SELECT year
FROM oscar
"""


@app.route('/api/v1.0/years')
def years():
    df_7 = pd.read_sql_query(query_7, engine)
    return jsonify(df_7.to_dict(orient="records"))
'''

query_8 = """
SELECT *
FROM oscar_overall
"""


@app.route("/api/v1.0/oscar_overall")
def oscar_overall():
    """Return the data"""
    df_8 = pd.read_sql_query(query_8, engine)
    return jsonify(df_8.to_dict(orient="records"))


query_9 = """
SELECT *
FROM oscar
"""


@app.route('/api/v1.0/oscars/<year>')
def oscars_by_year(year):
    oscars = pd.read_csv('oscars.csv')
    oscars = oscars.to_dict(orient="records")

    oscar_list = []

    for oscar in oscars:
        if(oscar["Year"] == int(year)):
            oscar_list.append(oscar)

    return jsonify(oscar_list)


'''
@app.route('/api/v1.0/oscars/<year>')
def oscars_by_year(year):
    df_9 = pd.read_sql_query(query_9, engine)
    # return jsonify(df_9.to_dict(orient="records"))
    # oscars = pd.read_csv('oscars.csv')
    # oscars = oscars.to_dict(orient="records")

    year_info_list = []

    for yearinfo in df_9:
        if(yearinfo["Year"] == int(year)):
            year_info_list.append(yearinfo)
    return jsonify(year_info_list)
'''

if __name__ == '__main__':
    app.run(debug=True)
