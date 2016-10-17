var mongoose = require('mongoose');
var db = require('mysql');

module.exports = {
	
	toMongoDB: function () {

		//Mongoose & MongoDB
		mongoose.connect('mongodb://127.0.0.1:27017/myMongoDB');
		var db = mongoose.connection;

		// Öpnna Anslutning
		db.on('error', console.error.bind(console, 'DB anslutningsfel'));
		db.once('open', function () {
			console.log('Ansuten till DB -', db.name);
		});
	},
	toMySQL: function () {

		// MySQL
		var connection = mysql.createConnection({
			host     : '10.0.0.0',
			user     : 'myUser',
			password : 'myPassword',
			database : 'myDb',
			supportBigNumbers: true,
			bigNumberStrings: true
		});
		connection.connect(function(err) {
		    if (err){ 
				throw err; 
			}
			else{
				console.log("Ansuten till Sql DB");
				//connection.end();
			};
		});

	}


}
