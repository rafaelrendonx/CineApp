'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _users = require('./src/schemas/users');

var _users2 = _interopRequireDefault(_users);

var _genres = require('./src/schemas/genres');

var _genres2 = _interopRequireDefault(_genres);

var _movies = require('./src/schemas/movies');

var _movies2 = _interopRequireDefault(_movies);

var _create = require('./src/resolvers/create');

var _verify = require('./src/resolvers/verify');

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _graphql = require('./src/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var JsonParser = _bodyParser2.default.json();

//Configuración Inicial
var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

_mongoose2.default.connect('mongodb://rafaelrendonx:a1b2c3d4@ds111492.mlab.com:11492/netflixclone');

var db = _mongoose2.default.connection;

db.on('error', function () {
    return console.log('Failed to connect to MongoDB');
}).once('open', function () {
    return console.log('Connected to MongoDB');
});

app.listen(PORT, function () {
    console.log('Server Works On PORT ', PORT);
});

app.use((0, _cors2.default)());

app.get('/', function (req, res) {
    res.send("Hello World");
});

app.get('/addUSer', function (req, res) {
    var user = new _users2.default({
        "name": "Rolly",
        "lastName": "Dog",
        "email": "rolly@gmail.com",
        "password": "rollypro",
        "birthDate": "10/11/96",
        "phone": "6622123456",
        "isPemium": false
    });

    user.save(function (err) {
        if (err) throw err;
        res.send('Usuario Creado');
    });
});

app.get('/userList', function (req, res) {
    _users2.default.find({}).then(function (users) {
        res.send(users);
    });
});

app.get('/addGenre', function (req, res) {
    var genre = new _genres2.default({
        "name": "Fantasy",
        "description": "Fantasy Movies"
    });
    genre.save(function (err) {
        if (err) throw err;
        res.send('Nuevo Género');
    });
});

app.get('/genreList', function (req, res) {
    _genres2.default.find({}).then(function (genres) {
        res.send(genres);
    });
});

app.get('/addMovie', function (req, res) {
    var movie = new _movies2.default({
        "name": "",
        "genre": "",
        "synpsis": "",
        "cast": "",
        "year": "",
        "lenght": ""
    });
});

//Endpoint para registrar usuarios
app.post('/register', JsonParser, function (req, res) {
    var user = new _users2.default(req.body);

    user.save(function (err) {
        if (err) throw err;
        res.send('Usuario Registrado');
    });
});

//Endpoint de Login

app.use('/login', JsonParser, function (req, res) {
    if (req.method === 'POST') {
        var token = (0, _create.createToken)(req.body.email, req.body.password).then(function (token) {
            res.status(200).json({ token: token });
        }).catch(function (err) {
            res.status(403).json({
                message: 'Login FAILED invalid credentials'
            });
        });
    }
});

app.use('/verifytoken', JsonParser, function (req, res) {
    if (req.method === 'POST') {
        try {
            var token = req.headers['authorization'];
            (0, _verify.verifyToken)(token).then(function (user) {
                res.status(200).json({ user: user });
                console.log(user);
            }).catch(function (err) {
                console.log(err);
            });
        } catch (e) {
            console.log(e.message);
            res.status(401).json({
                //MOSTRAR MENSAJE SI EL TOKEN NO FUNCIONA
                message: e.message
            });
        }
    }
});

//             MIDDLEWARE
app.use('/graphql', function (req, res, next) {

    var token = req.headers['authorization'];
    try {
        req.user = (0, _verify.verifyToken)(token);
        next();
    } catch (er) {
        res.status(401).json({
            message: er.message
        });
    }
});

app.use('/graphql', (0, _expressGraphql2.default)(function (req, res) {
    return {
        schema: _graphql2.default,
        graphiql: true,
        pretty: true,
        context: {
            user: req.user
        }
    };
}));