const express = require('express');
const usersRouter = express.Router();
// const expressAsyncHandler = require('express-async-handler');

usersRouter.get('/', async (req, res, next) => {
	res.send('GET USER');
	// throw new Error('async error'); // tests
});

usersRouter.post('/', (req, res, next) => {
	res.send('POST USER');
	// res.send(req.body); // tests
});

usersRouter.put('/', (req, res, next) => {
	res.send('PUT USER');
});

usersRouter.delete('/', (req, res, next) => {
	res.send('DELETE USER');
});

module.exports = usersRouter;

