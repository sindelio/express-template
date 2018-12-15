// Importing modules
const express = require('express');
const app = express(); 
const path = require('path'); 

// Setting configurations
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Loading .env settings
require('dotenv').load();
console.log(`NODE_ENV=${process.env.NODE_ENV}`);

// Importing middleware
const morgan = require('morgan');
const helmet = require('helmet');
const serveStatic = require('serve-static');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const timeout = require('connect-timeout');
const errorHandler = require('./middleware/error-handler');

// Setting middleware (order matters)

app.use(morgan('tiny')); // Minimal logging output. First to account for all middleware delays
app.use(helmet()); // Sets response headers securely
app.use(serveStatic(path.join(__dirname, 'public'))); // Static files serving
app.use(cors()); // Cross Origin Resource Sharing
app.use(bodyParser.urlencoded({ extended: false })); // form urlencoded data
app.use(bodyParser.text()); // text data
app.use(bodyParser.json()); // json data
app.use(timeout('5s')); // Timeout for HTTP requests

// Routing 
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Setting custom error handler
app.use(errorHandler); // Last middleware, to handle uncaught exceptions

// Starting the server
app.listen(process.env.PORT = 3000, () => {
	console.log('Server is listening on port 3000!');
});

/* TODO:		
		- Research other templates in GitHub
		- Hot reload
 */