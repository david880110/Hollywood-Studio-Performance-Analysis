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
engine = create_engine("sqlite:///avenger.sqlite")

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    return (
        f"Welcome to the avenger data Analysis API!<br/>"
        f"Avalable Routes:<br/>"
        f"/api/v1.0/summary_data<br/>"
    )

@app.route("/viz")
def visualization():
	return render_template("viz.html")

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
	
@app.route("/api/v1.0/summary_data")
def summary_data():
    """Return the data"""
    df = pd.read_sql_query(query,engine)
    print(df)
    return df.to_json(orient="records")

if __name__ == '__main__':
    app.run()
