const express = require('express');
const app = express();
const port = 8000;

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// use express router
app.use('/',require('./routers'));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in runing surver: ${err}`);
    return;
  }

  console.log(`Server is runing on port: ${port}`);
});