// Import Express to create and configure the web server
const express = require('express');

// Workaround for DNS resolution issues (Node is using 127.0.0.1 instead of a public DNS server)
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongodb = require('./data/database');
// Create a new Express application instance
const app = express();


// server port that will listen for incoming requests from the frontend
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDB((err) => {
    if (err) {
        console.log(err);
    }
    else {
        // Start "listening" for requests
        app.listen(port, () => {
            console.log(`DataBase is listening and Node is running on port ${port}`);
        });
    }
})

