# ConnectJS
Connect to MongoDB &amp; MySql with Node.js 

#Example server

```javascript
            var express 	= require('express');
            var Connect 	= require('./connect');
            var app 		= express();

            Connect.toMongoDB();
            Connect.toMySQL();

            app.get('/', function (req, res) {	
               return res.sendFile('./public/html/index.html', {"root": __dirname})
            });


            app.listen(3000,function () {
              console.log("Server Started");
            });
```
