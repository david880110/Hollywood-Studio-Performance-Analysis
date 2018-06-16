SELECT a.*,
b.Total_Yearly_Gross,
a.Studio_Gross/b.Total_Yearly_Gross as Percentage
FROM Studio a
JOIN market_share b
ON a.Year=b.Year
