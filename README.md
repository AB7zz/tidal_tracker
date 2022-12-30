# TIDAL TRACKER
"Tidal Tracker" is a mobile app that provides fishermen with critical information and assistance when they are in danger due to adverse weather conditions at sea. 

The app displays a map of the fisherman's live location and provides directions back to the nearest safe harbor and shore along with the estimated arrival time and distance to destination. Using our app, fishermen can quickly access the information they need to navigate back to safety even in the most challenging conditions.

If the fisherman is unable to return to shore, our app also includes emergency contact information and other resources, such as contact information of nearby rescue organizations. This may be used in case of loss of internet connectivity. 

If there is a case of imminent danger, the application automatically sends alerts to all the nearby rescue organizations and fishermen and shares their live location for rescue purposes. We will also be including a chat feature which allows fishermen to collaborate their fishing journeys with their friends.

For facilitating all these features, we use various API’s for obtaining the required data for weather conditions and map navigation. Using React as our base for UI, we provide a very user-friendly interface which allows fishermen to interact with our application with ease and reach safety as soon as possible. 

    Safety Algorithm terms:
    cloud cover : https://www.researchgate.net/figure/Figure-D1-below-shows-the-Okta-Scale-or-eights-method-of-recording-cloud-cover-while-in_fig2_347625803
    
    lifted index : 0 to -2 , weak
                   -2 to -6 , moderate
                   <= -6 , strong (severe potential)
                    https://edwilliams.org/smxgigpdf/smx2003.pdf

    precipitation : https://www.baranidesign.com/faq-articles/2020/1/19/ rain-rate-intensity-classification

    10m Wind : https://en.wikipedia.org/wiki/Beaufort_scale

    assumed : relative humidity , 2m temperature

    weather type ; https://github.com/Yeqzids/7timer-issues/wiki/Wiki


    according to data given above source we made a algorithm ,which check wheather fisherman is safe to go or not.
    we created a safety score whose maximum value is 10. if there is small obstcle safety score will reduce by 1 or 2 occurding to obstacle. 
    if there is dangarous obstacle safety score will become zero.
    finally it check the safety score , if it is less than 60% return not safe to go , else safe to go.


API Used :
    Gmaps : for the maps and locations
            reason : easy to implement 
    
    7timer : for weather forcasting 
            reason : this API provide data with 7 parameter with future weather which is predicted by a machine learning model 
    
    firebase : for chat message and to store location, marketplace 
            reason : safe and secure, easy of implement

Tech Stack Used :
    React : frond-end of the PWA application
            reason : Good performance , strong community support

    firebase : for back-end 
            reason : real - time database 
    


-Why our app is important 

    -There are more than 180,000 active traditional fishers in Kerala alone.
    -Coastal households are highly dependent on fishing and daily sale of fish, and the bulk of fishing income goes towards covering daily   household expenses, acquiring or servicing fishing gear, repaying debts.
    -Available statistics suggest that 50% of fishing households remain below poverty line

    source - https://www.newindianexpress.com/cities/thiruvananthapuram/2021/nov/11/scientific-methods-to-make-fishermens-lives-safer-2382000.html