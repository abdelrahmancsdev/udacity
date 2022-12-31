// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

// Require body-parser to parse the data
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 7000;
const server = app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);

});

//GET route to return the object projectData
app.get('/all', (req, res) => {
    res.send(projectData);
});

// POST route
app.post('/addData', (req, res) => {
        projectData.temp = req.body.temp;
        projectData.date = req.body.date;
        projectData.userResponse = req.body.userResponse;
        res.end();
        console.log(projectData);
    });


