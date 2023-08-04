//In this page we are handling request and responce

const express = require("express");
const path = require("path"); // Import the path module for working with file paths
//Import Schema model
const schema = require("./models/subscribers");

const app = express();
//PARSE INCOMING JSON DATA
app.use(express.json()); // Middleware to parse incoming JSON data
app.use(express.urlencoded({ extended: false })); // Middleware to parse incoming URL-encoded data

//This route will show home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html")); // Serve the index.html file as the home page
});


//This route will show all subscribers array
app.get("/subscribers", async (req, res) => {
  const subscribers = await schema.find({});//here we are getting all subscriber data

  try {
    res.send(subscribers);
  } catch (err) {
    res.status(400).send(err);
  }
});

//This route will show all subscribers with only two fiels name and subscribedChannel
app.get("/subscribers/names", async (req, res) => {
  try {
    const subscribers = await schema.find().select({//here we are getting subscriber data and then taking only field which are needed using select method
      name: 1,
      subscribedChannel: 1,
      _id: 0,
    });
    res.send(subscribers);
  } catch (err) {
    response.status(404).send(error);
  }
});

//This route will show subscriber with particuler id which is given
app.get("/subscribers/:id",async (req,res)=>{
  try{
const _id=req.params.id//id of particular subscriber
const subscribers = await schema.findById(_id)//finding subscriber using id
res.send(subscribers)
  }catch(err){
    res.status(400).send("Invalid id")


  }
})
module.exports = app;
