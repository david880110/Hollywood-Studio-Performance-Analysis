# Hollywood Studio Performance Analysis

![alt text](http://www.mormontransitions.org/wp-content/uploads/2015/12/Movie-making4.jpg)
## DatAvengers Members:
You can click into our Linkedins
-   [David Gu](https://www.linkedin.com/in/thatmandavid-gu-a0806b5a/)
-   [Lindsay Yan](https://www.linkedin.com/in/lindsay-yan-8a09469b/)
-   [Sean Yu](https://www.linkedin.com/in/sean-yu-733205a6/)
-   [Sonia Yang](https://www.linkedin.com/in/sonia-yang-69504438/)
-   [Tsering Sherpa](https://www.linkedin.com/in/tsering-sherpa-1171a7b4/)

## Background 

Our group is trying to compare the performance of movies that are produced in the past 27 years (1990 -2017 ) by total gross (US only), Rotten Tomato Scores, Oscar winning movie numbers by the biggest 6 studios. 
 
 - Disney (BV)
 - Warner Brothers (WB)
 - Paramount 
 - Fox 
 - Universal 
 - Sony 

The questions we are trying to answer are:
1. Is there a clear trend for box office, quality of movies (Rotten Tomato scores), and Oscar winning?
2. Is there any correlations between box office, quality of movies and Oscar award?
3. Who are the biggest players in each of the fields?


## Proposal 


-   Find out the market share of each studio over 27 years of time 
-   Find out how many oscar winning movies over time, and compare between the studios
-  Find out whether there are correlations between box office and Rotten Tomato scores by genre
-   Since we all love avengers, plot out the box office of the 3 Avengers movies to illustrate the movie series' performance globally 






## Data Source
### 

<img src="https://pbs.twimg.com/media/C4PrQIzUcAAPwFx.jpg" width="300" height="150"/>

Founded in 1999, Box Office Mojo tracks box office revenue in a systematic, algorithmic  way, and publishes the data on its website. In 2008 IMDb , owned by Amazon, purchased Box Office Mojo. The website is widely used within the film industry as a source of data. From 2002–11, Box Office Mojo maintained popular forums on its website.


###
[![Rottentomatoesnewlogo.svg](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Rottentomatoesnewlogo.svg/250px-Rottentomatoesnewlogo.svg.png)](https://en.wikipedia.org/wiki/File:Rottentomatoesnewlogo.svg)

Rotten Tomatoes  is an American  review-aggregation website  for film and television. The company was launched in August 1998 by three undergraduate students at the  University of California, Berkeley  Senh Duong, Patrick Y. Lee and Stephen Wang The name "Rotten Tomatoes" derives from the practice of audiences throwing rotten tomatoes when disapproving of a poor stage performance.


## Process 


First we scraped Box Office Mojo website to get the top 100 movies by year (1990- 2017)  by box office (US only) , we also scraped the 3 Avengers box office internationally for geographical visualization.

With the movie titles from Box Office Mojo, we leveraged OMDb API to pull some other information that are related to the movies (Rotten Tomato Scores, genres, directors, etc). 

After the data is pulled, we integrated all data into sqlite for plots and visualizations (We leveraged Ploty, D3 and Leaflet  to realize our plots and visualizations) 

Once the plots are ready, we embedded them into our homepage (designed using HTML, Bootstrap,css, nextparticle javascript library, Google Fonts)


# Technology Used

-   SQL
-   Python
-   Javascrpit
-   html/css/leaflet


## Findings 




## Limitations 
The biggest challenge is the time constraint, if given more time, we will be able to do a much better job.

The second limitation is the amount of data we have, if we could have access to their investment into the movies, we can perform some other interesting analysis 




## Next Steps

If given the investment data, we can perform ROI analysis for movie studios to see which studios make the most revenue other than gross revenue 

We would also like to explore the box office vs how many theaters are playing and how many showtimes each movie has to calculate some kind of metric for  earnings per show and see which studio has the top average earnings per show
