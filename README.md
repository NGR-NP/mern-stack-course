# EXPRESS E-commerce API

This API is UP [AT](https://mern-stack-course-production.up.railway.app/api/products).


## Introducton
The objective of this project is to develop an ecommerce web application using the MERN stack, which stands for MongoDB, Express, React, and Node.js. The backend of the application will be built using Node.js and Express, which will provide the API endpoints for the frontend to interact with. MongoDB will be used as the database to store and retrieve data.


### Database.js, (https://github.com/NGR-NP/mern-stack-course/blob/E-commerce-api/src/config/database.js)

This is a Node.js module that connects to a MongoDB database using Mongoose, which is a library for working with MongoDB in Node.js.

The module exports a function called `connectMongoDB`, which attempts to connect to the MongoDB database using the connection string stored in the `MONGO_URI` variable. If the connection is successful, a message is logged to the console indicating that the module is waiting for connections.

The module also adds event listeners for the `connected` and `disconnected` events emitted by the `mongoose.connection` object. If the connection is disconnected, a message is logged to the console indicating that the connection was lost. If the connection is successful, a message is logged to the console indicating that the connection was established.

Overall, this module is used to establish a connection to a MongoDB database using Mongoose in a Node.js application.

### errorHandler, (https://github.com/NGR-NP/mern-stack-course/blob/E-commerce-api/src/middleware/errorhandler.js)

The function takes four parameters: `err`, `req`, `res`, and `next`. `err` is the error object that was thrown, `req` is the request object, `res` is the response object, and `next` is a function that can be used to pass control to the next middleware function in the stack.

The `errorHandler` function first checks the `err` object to see if it has a `status` property. If it does, the function uses that status code in the response. If not, it defaults to a status code of 500, which indicates a server error.

Next, the function checks the `err` object for a `message` property. If it exists, the function uses that message in the response. If not, it defaults to a generic error message of "Something went wrong!".

Finally, the function sends a JSON response to the client with the `success` property set to `false`, the `status` property set to the error status code, the `message` property set to the error message, and the `stack` property set to the stack trace of the error.

Overall, this `errorHandler` function is used as middleware in a Node.js application to catch errors and send appropriate error responses to the client.

