const express = require('express');
const usersRouter = express.Router();

usersRouter.get('/', (req, res, next) => {
	res.send('Hello user!');
});

module.exports = usersRouter;

