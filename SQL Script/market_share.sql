SELECT a.*,
b.Total_Yearly_Gross,
a.Studio_Gross/b.Total_Yearly_Gross as Percentage
FROM Studio a
JOIN market_share b
ON a.Year=b.Year


/*create view test as*/
SELECT *,
b.Total_Yearly_Gross,
substr(cast (a.Studio_Gross as float)/cast (b.Total_Yearly_Gross as float), 1,5) AS Percentage
FROM Studio a
JOIN market_share b
ON a.Year=b.Year

/*select substr(Percentage,1,4) from test*/


