import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template


#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///dataset/market_share.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Create our session (link) from Python to the DB
session = Session(engine)

# Save reference to the tables
studio_table = Base.classes.Studio
market_share_table = Base.classes.market_share


@app.route("/")
def home():
    # Return the dashboard homepage.
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
