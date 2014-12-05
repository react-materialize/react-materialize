var express = require('express'),
    app = express();

app.use(express.static(__dirname))
   .listen(4000, function() {
     console.log('Server started at http://localhost:4000');
   });
