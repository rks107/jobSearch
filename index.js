const express = require('express');
const app = express();
const port = 8000;

const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
// used for session cookie
const session = require('express-session');
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const MongoStore = require("connect-mongo")(session);

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

// mongo storeis used to store session cookie in the db
app.use(session({
    name: 'CornerTree',
    secret: "Something",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100)
    },
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disabled'
    },
    function(err){
        console.log(err || 'connect-mongodb setup ok');
    }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.checkAuthenticationUser);

// use express router
app.use('/',require('./routers'));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in runing surver: ${err}`);
    return;
  }

  console.log(`Server is runing on port: ${port}`);
});