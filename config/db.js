
var mysql = require('mysql');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '1',
	database : 'store',
	multipleStatements: true
});

connection.connect(function(err){
	if(err)
	{
		console.log('Error connecting to Db');
		return;
	}
	else
	{
		console.log('Connection made.');

	}
});
exports.connection = connection;
