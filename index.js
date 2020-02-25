let express = require('express');

let app = express();
let path = require('path');


app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(process.env.PORT || 8080);