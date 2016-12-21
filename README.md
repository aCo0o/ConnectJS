# ConnectJS
Connect to MongoDB &amp; MySql with Node.js 

#Example server

```javascript
            var express 	= require('express');
            var Connect 	= require('./connect');
            var app 		= express();

            

            app.get('/', function (req, res) {	
               return res.sendFile('./public/html/index.html', {"root": __dirname})
            });


            app.listen(3000,function () {
            
            // Connect to mongoDB
            Connect.toMongoDB();
            
            //Or connect to MySQL
            Connect.toMySQL();
            
            });
```
