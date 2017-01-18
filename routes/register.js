var express    = require('express');
// var router     = express.Router();
var bodyparser = require('body-parser');
var client = require('twilio')('AC7ee3adb394a07536038398fcd75b4d3d','fefeda2b149aa0e956127368d6cd3a0b');
var app 	   = express();
var connection = require('../config/db').connection;
var nodemailer = require('nodemailer');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));



app.post('/reg',function(req,res)
{
	var add = 
	{
		 name : req.body.name,
   		 email : req.body.email,
   		 pass : req.body.pass,
   		 msg  : req.body.msg,
   		 phn  : req.body.ph
   		 
	}

	client.sendMessage({
	to   : req.body.ph,
	from : '+12242101382',
	body : 'Your account has been registered by our website www.vectorx.com..Thanks for creating your account'

},function(err,response)
{
	if(!err){
		console.log(response.from);
		console.log(response.body);
	}
});
   connection.query('INSERT INTO registration SET ?',add,function(err,result)
   {
   	 if(err)
   	 {
   	 	console.log("Error");
   	 }
   	 else
   	 {
   	 	

   	 	var transporter = nodemailer.createTransport({
   	 		service : 'Gmail',
   	 		auth :
   	 	    {
   	 			user : 'vigneshpriyadarshan339@gmail.com',
   	 			pass : 'QwertY!@#123'
   	 		}
   	 	});
   	 	var mailoptions = {
   	 		from : 'vigneshpriyadarshan339@gmail.com',
   	 		to : req.body.email,
   	 		subject : 'Registration success',
   	 		text : req.body.msg

   	 	};
   	 	transporter.sendMail(mailoptions,function(err,result)
   	 	{
   	 		if(err)
   	 		{
   	 			console.log('Registration success');
   	 		}
   	 		else
   	 		{
   	 			
   	 			res.redirect('/');
   	 		}
   	 	});
   	 	
   	 }
   });
});
module.exports = app;
