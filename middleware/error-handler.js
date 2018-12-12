function errorHandler(error, req, res, next){
	console.error(error);
	res.status(500);
	res.send('Something broke!');
};

module.exports = errorHandler;