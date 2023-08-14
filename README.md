# Get-Youtube-Subscribers
This is a simple backend project that contains a RESTful API for getting information about YouTube channel subscribers. The project is developed with Node.js and Express, and the database used for managing the subscriber data is MongoDB. The subscriber's data consists of fields such as their ID, Names, Subscribed Channels, and Subscription Date.
The API has several endpoints that let users get data in JSON format, such as an endpoint that returns a list of all subscribers, an endpoint that returns a list of names and subscribed channels for each subscriber, and an endpoint that returns information about a subscriber based on their ID.
# API Endpoints
 Get/subscribers: Provide an array of all subscribers
 Get/subscribers/names: Provide an array of all subscribers with only two field names and subscriberdChannel
 Get/subscribers/:id: Provide details of particuler user of given id
 
# start
run npm i to install packages
run npm start to run project

# dependencys
expressjs
mongodb

# deployment
