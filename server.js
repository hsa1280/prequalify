var express = require("express");
var app = express();

//serve static folder, localhost:3000 points to src/webapp,
app.use(express.static('src/'));

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
