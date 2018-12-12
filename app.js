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
// const bodyParser = require('body-parser'); 
const helmet = require('helmet');
// const compression = require('compression');
const errorHandler = require('./middleware/error-handler');

// Setting middleware (order matters)
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded({ extended: false }));

// Routing 
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Setting custom error handler
app.use(errorHandler); // Last middleware, to handle uncaught exceptions

// Starting the server
app.listen(process.env.PORT || 3000, () => {
	console.log('Server is listening on port 3000!');
});

/* TODO:
		- Read about more useful middleware
		- Look into Max code
		- Research other templates in GitHub
 */