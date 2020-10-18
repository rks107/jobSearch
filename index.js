const express = require('express');
const app = express();
const port = 8000;

const expressLayouts = require("express-ejs-layouts");

// middleware
app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser());

app.use(express.static('./assests'));

app.use(expressLayouts);

// extract style and scripts from sub-pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

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