import sqlite3
import pandas as pd
conn = sqlite3.connect('dataset/market_share.sqlite')


query = """
SELECT a.*,
b.Total_Yearly_Gross,
a.Studio_Gross/b.Total_Yearly_Gross AS Percentage
FROM Studio a
JOIN market_share b
ON a.Year=b.Year
"""
df = pd.read_sql(query, conn)
print(df)
