# EXPRESS E-commerce API

This API is UP [AT](https://mern-stack-course-production.up.railway.app/api/products).


## Introducton
The objective of this project is to develop an ecommerce web application using the MERN stack, which stands for MongoDB, Express, React, and Node.js. The backend of the application will be built using Node.js and Express, which will provide the API endpoints for the frontend to interact with. MongoDB will be used as the database to store and retrieve data.


### Database.js, (https://github.com/NGR-NP/mern-stack-course/blob/E-commerce-api/src/config/database.js)

This is a Node.js module that connects to a MongoDB database using Mongoose, which is a library for working with MongoDB in Node.js.

The module exports a function called connectMongoDB, which attempts to connect to the MongoDB database using the connection string stored in the MONGO_URI variable. If the connection is successful, a message is logged to the console indicating that the module is waiting for connections.

The module also adds event listeners for the connected and disconnected events emitted by the mongoose.connection object. If the connection is disconnected, a message is logged to the console indicating that the connection was lost. If the connection is successful, a message is logged to the console indicating that the connection was established.

Overall, this module is used to establish a connection to a MongoDB database using Mongoose in a Node.js application.

