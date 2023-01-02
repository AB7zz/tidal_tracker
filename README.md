# TIDAL TRACKER
# Problem Statement: Marine And Fisheries

<br>

## Team Members:
<ol>
 <li>Abhinav C V</li>
 <li>Harshed Abdullah</li>
 <li>Aazim Anish</li>
 <li>Abhinand</li>
 <li>Sameer Abdullah</li>
</ol>

## Solution
<span style="font-family: sans-serif; font-size: 15px;">
"From storms to gear rentals, 'Tidal Tracker' has you covered - the all-in-one mobile application for fishermen community facing adverse weather conditions, complete with digital compass navigation and top-quality equipment rentals."

<br>

The app displays a map of the fisherman's live location and provides directions back to the shore. Using our app, fishermen can quickly access the information they need to navigate back to safety even in the most challenging conditions.

If the fisherman is unable to return to shore, our app also includes emergency contact information and other resources, such as contact information of nearby rescue organizations. This may be used in case of loss of internet connectivity. The application also contains safety guidlines for beginners from [source](https://www.takemefishing.org/how-to-fish/fishing-safety/).


 We have included a chat feature which allows fishermen to collaborate their fishing journeys with their friends and build a community. 
 
 According to data provided [source](https://www.newindianexpress.com/cities/thiruvananthapuram/2021/nov/11/scientific-methods-to-make-fishermens-lives-safer-2382000.html), most fishermen are economically weaker and unable to afford the expensive equipments that are available in the market. We have launched a marketplace for renting equipments.

<br>

<strong>
For facilitating all these features, we use various API’s for obtaining the required data for weather conditions and map navigation. Using React as our base for UI, we provide a very user-friendly interface which allows fishermen to interact with our application with ease and reach safety as soon as possible.</strong></span>

<br>

# Sources

## Safety algorithm parameters:
- `cloud cover` : [source](https://www.researchgate.net/figure/Figure-D1-below-shows-the-Okta-Scale-or-eights-method-of-recording-cloud-cover-while-in_fig2_347625803) 
    
- `lifted index` : 
    - 0 to -2 , weak <br>
    - -2 to -6 , moderate
    - \>= -6 , strong (severe potential) 
  <br>
[source](https://edwilliams.org/smxgigpdf/smx2003.pdf)(at page 18)

<br>

- `precipitation` : [source](https://www.baranidesign.com/faq-articles/2020/1/19/rain-rate-intensity-classification)

- `10m Wind` : [source](https://en.wikipedia.org/wiki/Beaufort_scale)

- `weather type` : [source](https://github.com/Yeqzids/7timer-issues/wiki/Wiki)

- `wind speed` : [source](https://github.com/Yeqzids/7timer-issues/wiki/Wiki#civil-and-civil-light)

According to data given above source we made a algorithm ,which check wheather fisherman is safe to go or not. We created a safety score whose maximum value is 10. if there is small obstcle safety score will reduce by 1 or 2 occurding to obstacle. If there is dangarous obstacle safety score will become zero. Finally it check the safety score , if it is less than 60% return not safe to go , else safe to go.

<br>

## Assumptions

- `relative humidity` and `2m temperature` used in the algorithm for weather condition is assumed using logical reasoning  
   - Reason: Couldn't find suitable safety scale for these parameters

<br>

# APIs Used :
- [`Gmaps`](https://www.npmjs.com/package/google-maps-react "Google Maps npm") : For the maps and locations
   - Reason : Easy to implement 

<br>    

- [`7timer`](http://www.7timer.cn/index.php?product=civil&lon=-97&lat=38&lang=en&ac=0&unit=metric&tzshift=0&site= "7timer API") : For weather forcasting 
   - Reason : This API provide data with 7 parameter with future weather which is predicted by a machine learning model 

<br>

- [`Firebase`](https://firebase.google.com/docs/reference/js/database.md#database_package "Firebase API") : For chat message and to store location, marketplace using realtime database
   - Reason : safe and secure, easy of implement and realtime information

# Tech Stack Used :
- [React](https://reactjs.org/ "React home") : Frond-end of the PWA application
   - Reason : Good performance , strong community support

- [Firebase](https://firebase.google.com/ "Firebase home") : For back-end 
   - Reason : Real - time database 
    
<br>

## Why our app is important 

    - There are more than 180,000 active traditional fishers in Kerala alone.
  
    - Coastal households are highly dependent on fishing and daily sale of fish, and the bulk of fishing income goes towards covering daily   household expenses, acquiring or servicing fishing gear, repaying debts.
  
    - Available statistics suggest that 50% of fishing households remain below poverty line

Source: https://www.newindianexpress.com/cities/thiruvananthapuram/2021/nov/11/scientific-methods-to-make-fishermens-lives-safer-2382000.html


## To be developed

If there is a case of imminent danger, the application will automatically send alerts to all the nearby rescue organizations and fishermen and shares their live location for rescue purposes.
