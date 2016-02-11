var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken');
var User = require('./app/models/user');

// configuration
var port = process.env.PORT || 8080;
mongoose.connect('mongodb://localhost:27017/tembo');
app.set('superSecret', 'thisisubersecret');
var tokenExpiry = 100000; // seconds

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/app/public'));

//app.get('/setup', function (req, res) {
//
//    // create a sample user
//    var nick = new User({
//        name: 'admin',
//        password: 'admin',
//        admin: true
//    });
//    nick.save(function (err) {
//        if (err) throw err;
//
//        console.log('User saved successfully');
//        res.json({success: true});
//    });
//});

// basic route (http://localhost:8080)
app.get('/', function (req, res, next) {
    res.render('index.html');
});


// get an instance of the router for api routes
var apiRoutes = express.Router();

// authentication (no middleware necessary since this isnt authenticated)
// http://localhost:8080/api/authenticate
apiRoutes.post('/authenticate', function (req, res) {
    console.log('Authentication attempt for login: ' + req.body.username);
    // find the user
    User.findOne({
        name: req.body.username
    }, function (err, user) {
        console.log(user);
        if (err) throw err;

        if (!user) {
            //res.json({success: false, message: 'Authentication failed. User not found.'});
            res.status(401).send('Authentication failed. User not found.');
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                //res.json({success: false, message: 'Authentication failed. Wrong password.'});
                res.status(401).send('Authentication failed. Wrong password.');
            } else {

                // if user is found and password is right
                // create a token
                //var token = jwt.sign(user, app.get('superSecret'), {expiresIn: '1s'});
                console.log(user);
                var token = jwt.sign(user, app.get('superSecret'), {expiresIn: tokenExpiry});

                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }
        }
    });
});

apiRoutes.post('/register', function (req, res) {
    console.log('Registration attempt with login: ' + req.body.username);
    // find the user
    User.findOne({
        name: req.body.username
    }, function (err, user) {
        console.log(user);
        if (err) throw err;

        if (!user) {
            var newUser = new User({
                name: 'admin',
                password: 'admin',
                admin: true
            });
            newUser.save(function (err) {
                if (err) throw err;
                console.log('User saved successfully');
                var token = jwt.sign(newUser, app.get('superSecret'), {expiresIn: tokenExpiry});
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            });
        } else if (user) {
            res.status(401).send('Registration failed. User is already registered');
        }
    });
});


// route middleware to authenticate and check token
apiRoutes.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.param('token') || req.headers['x-access-token'];
    console.log('-');
    console.log(token);
    console.log('--');

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                console.log(err);
                //return res.json({success: false, message: 'Failed to authenticate token.'});
                return res.status(401).send({
                    success: false,
                    message: 'Unauthorized'
                });
            } else {
                console.log("Token ok");
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});

// authenticated routes
apiRoutes.get('/', function (req, res) {
    res.json({message: 'Welcome to the coolest API on earth!'});
});

apiRoutes.get('/users', function (req, res) {
    User.find({}, function (err, users) {
        res.json(users);
    });
});

apiRoutes.get('/memo', function (req, res) {
    //User.find({}, function (err, users) {
    //res.json({message: 'Get memos from Server'});
    res.json({data: [{title: '1', description: '11'}, {title: '2', description: '22'}]});
    //});
});

apiRoutes.get('/home', function (req, res) {
    console.log('HOME');
    res.json({message: 'Home'});
});

apiRoutes.post('/logout', function (req, res) {
    console.log('LOGOUT');
    // TODO create token blacklist to store invalid tokens until their expiry date (and compare them against incoming request?)
    res.json({message: 'Logout'});
});

apiRoutes.get('/check', function (req, res) {
    res.json(req.decoded);
});

app.use('/api', apiRoutes);

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
