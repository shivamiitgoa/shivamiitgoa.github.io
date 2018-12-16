# Precision Agriculture 

### Team 
+ Shivam Pandey
+ Shikha Verma
+ Pankaj Katkar

## Introduction  

India is the second largest country having a population of about 1.32 Billion. Agriculture is the main resource and a large proportion of citizens are dependent on agriculture. We can solve several problems in India in the field of Agriculture (production/cultivation) , which could benefit the humankind. (This last sentence needs to explained. It's ambiguous)

Our goal in this research project would be to study a lot of datasets available on India and its agriculture in its states and bring out correlations between *crop production*(crop yield x area sown) of several crops like rice, wheat, bajra, cotton, etc. depending on geographical factors such as temperatue, average annual rainfall, fertilizers, net area sown, area under irrigation, etc. and other factors such as economic, political and social factors.

This will surely help us to predict the future crop yields taking into consideration the past trends observed from the datasets via EDA (*Exploratory Data Analysis*). Also, we can contribute to the nation with much more planned and organized agriculture techniques and promote modern techonologies in India for *sustainable agriculture*.

## Datasets and Exploratory Data Analysis 

Firstly, our idea was to collect ample datasets about **India and its agriculture** from available online resources so as to do the best possible exploratory data analysis. We collected the datasets from *Kaggle, Data.gov.in and Directorate of Economics and Statistics*. We had the dataset on crops grown in various states of India, rainfall in India, earth surface temperature, statewise and seasonwise data about some of the particular crops.

We selected one crop in a particular state each, and worked upon the corresponding dataset. We did exploratory data analysis over our chosen dataset along with data visualization to study the dependency of the response variable on the predictors. The objective of the EDA was to suggest hypotheses about observed dependencies of predictors on the response variable.

Following is the matrix plot on "Rice Agriculture" in Bihar :-
<a><img src="./Plots/All Bihar Data Plot.png" width="100%"/></a>

After Exploratory Data Analysis, we didn't find anything intersting from the matrix plot, since we had a sporadic dataset after taking intersection of all the predictors.

We also looked at the "Wheat" crop in Punjab. But, here also, we couldn't find any interesting correlations between the predictors and reponse variables. Following is the matrix plot for Wheat crop in Punjab :-
<a><img src="./Dataset/Wheat_Punjab/Plot_wheat/Matrix plot Punjab.png" width="100%"/></a>

However, we could see that usually, factors such as "Year" and "Temperature" led to increment in the crop production(or yield).

## Methods

Datasets obtained from the resources mentioned in the references below were analysed thoroughly and their main characteristics were summarized, quite often by visual methods(*data visualization*). The main aim was to predict the response variable “Crop Production” depending on the predictors (temperature, rainfall, area sown, year). Various data visualization methods such as scatter plot, box plot, histogram, smooth plot, etc., were used to study the predictors in particular datasets, and there correlation with the response variable was observed. The independent variables which weren’t linear with the response variable “crop production” were omitted from the model. In some of the cases, the data was normalized.

The final CSV file was obtained after taking the intersection of all independent variables. The task of taking intersection of all datasets led to decrement in the number of data points. Then a matrix plot was produced and visualized precisely. Basically, the idea was that data is visualized for linearity. Once, some interesting pattern is seen, then the linear model was fit to check how accurately the response variable depends on the predictors. 

## Experiments and Discussion
Upon exploratory data analysis and data visualization, we were able to find out what are exactly the geographical factors which have been affecting the crop yield over the past decades/centuries throughout different regions/states of India. EDA helped us to know what factors affected which crops more and which crops less. The *major problem* faced due to which an accurate linear model couldn’t be made was not getting enough datasets. We got very a sporadic dataset after taking intersection of all predictors. Being the data points so less, we were unable to make a good linear model.

Here is one of the Linear Model for Wheat in Punjab created by R's lm() funciton after Normalization of data :-

<table>
  <tr>
    <th>Coefficients:</th> <th>Estimate</th> <th>Std. Error</th> <th>t value</th> <th>Pr(>|t|)</th>
  </tr>
  <tr>
    <td>(Intercept)</td> <td>15408758</td> <td>176770</td> <td>87.168</td> <td>1.04e-07 ***</td>
  </tr>
  <tr>
    <td>Normalized_value.of.Area</td> <td>155076</td> <td>659460</td> <td>0.235</td> <td>0.8256</td>
  </tr>
  <tr>
    <td>Normalized_value.of.Market_Prices</td> <td>629928</td> <td>570170</td> <td>1.105</td> <td>0.3312</td>
  </tr>
  <tr>
    <td>Normalized_value.of.Jan.Feb.rainfall</td> <td>-58169</td> <td>345055</td> <td>-0.169</td> <td>0.8743</td>
  </tr>
  <tr>
    <td>Normalized_value.of.Mar.May.rainfall</td> <td>-216927</td> <td>246138</td> <td>-0.881</td> <td>0.4279</td>
  </tr>
  <tr>
    <td>Normalized_value.of.Oct.Dec.rainfall</td> <td>-234973</td> <td>453164</td> <td>-0.519</td> <td>0.6315</td>
  </tr>
  <tr>
    <td>Normalized_value.of.October.Avg.Temp</td> <td>-94983</td> <td>335433</td> <td>-0.283</td> <td>0.7911</td>
  </tr>
  <tr>
    <td>Normalized_value.of.November.Avg.Temp</td> <td>599625</td> <td>250811</td> <td>2.391</td> <td>0.0751</td>
  </tr>
  <tr>
    <td>Normalized_value.of.December.Avg.Temp</td> <td>-28965</td> <td>345082</td> <td>-0.084</td> <td>0.9371</td>
  </tr>
  <tr>
    <td>Normalized_value.of.Jan.Avg.Temp</td> <td>-263844</td> <td>208430</td> <td>-1.266</td> <td>0.2743</td>
  </tr>
  <tr>
    <td>Normalized_value.of.Feb.Avg.Temp</td> <td>59658</td> <td>300407</td> <td>0.199</td> <td>0.8523</td>
  </tr>
  <tr>
    <td>Normalized_value.of.March.Avg.Temp</td> <td>-168343</td> <td>302646</td> <td>-0.556</td> <td>0.6077</td>
  </tr>
 
</table>

Multiple R-squared: 0.9207,      Adjusted R-squared:  0.7028 </br>
F-statistic: 4.224 on 11 and 4 DF,   p-value: 0.08824

More of exploratory data analysis needs to be done on several other states of India. For that, we need to get enough datasets, then only we can move forward in fitting accurate linear models. We had considered many factors for a particular crop in a region, but our theoretical model helped us to find out actually what is the prime factor affecting that particular crop’s yield. Knowing the prime factor affecting a crop’s yield, we can essentially work towards it in positive direction to achieve sustainable agriculture.

## References

1. [Agriculture Precision Dataset, Kaggle](https://www.kaggle.com/srinivas1/agricuture-crops-production-in-india "To the site")
2. [Agriculture Precision Dataset, data.gov](https://data.gov.in/resources/agriculture-production-different-foodgrains-year-2003-2014-all-india-level "To the site")
3. [Rainfall in India, Kaggle](https://www.kaggle.com/rajanand/rainfall-in-india "To the site")
4. [Directorate of Economics and Statistics](https://eands.dacnet.nic.in)

## Some useful links 
1. More about writing styles -- [The Chicago Manual of Style](http://www.chicagomanualofstyle.org/home.html)
2. [R for Data Science](http://r4ds.had.co.nz/data-visualisation.html)
3. Linear Regression Model – [Linear Model Output in R](https://feliperego.github.io/blog/2015/10/23/Interpreting-Model-Output-In-R)