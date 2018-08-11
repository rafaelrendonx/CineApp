import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './src/schemas/users';
import Genre from './src/schemas/genres';
import Movie from './src/schemas/movies';
import { createToken } from './src/resolvers/create';
import { verifyToken } from './src/resolvers/verify';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import schema from './src/graphql';

const JsonParser = bodyParser.json();

//Configuración Inicial
const app = express();
const port = process.env.Port || 3000;

mongoose.connect('mongodb://rafaelrendonx:a1b2c3d4@ds111492.mlab.com:11492/netflixclone');

const db = mongoose.connection;

db.on('error', () => console.log('Failed to connect to MongoDB'))
  .once('open', () => console.log('Connected to MongoDB'));


app.listen(port, () => {
    console.log('Server Works On Port 3000');
})

app.use((cors()));

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/addUSer', (req,res) => {
    var user = new User({
        "name":"Rolly",
        "lastName":"Dog",
        "email":"rolly@gmail.com",
        "password":"rollypro",
        "birthDate": "10/11/96",
        "phone":"6622123456",
        "isPemium": false
    });

    user.save((err) =>{
        if(err) throw err
        res.send('Usuario Creado');
    })
})

app.get('/userList', function(req,res){
    User.find({}).then(function(users){
        res.send(users);
    })
})

app.get('/addGenre', (req, res) => {
    var genre = new Genre({
        "name":"Fantasy",
        "description":"Fantasy Movies"
    });
    genre.save((err) => {
        if(err) throw err
        res.send('Nuevo Género');
    })
})

app.get('/genreList', function(req, res) {
    Genre.find({}).then(function(genres) { 
        res.send(genres);
    })
})

app.get('/addMovie', (req, res) => { 
    var movie = new Movie({
        "name":"",
        "genre":"",
        "synpsis":"",
        "cast":"",
        "year":"",
        "lenght":""
    })
})


//Endpoint para registrar usuarios
app.post('/register', JsonParser, (req, res) => {
    var user = new User(req.body);

    user.save((err) => {
        if(err) throw err;
        res.send('Usuario Registrado');
    })
});

//Endpoit de Login

app.use('/login', JsonParser, (req, res) => {
    if(req.method === 'POST'){
    const token = createToken(req.body.email, req.body.password).then((token) => {
        res.status(200).json({token});
    })
    .catch((err) => {
        res.status(403).json({
            message: 'Login FAILED invalid credentials'
        })
    })
  }
})


app.use('/verifytoken', JsonParser, (req, res) => {
    if(req.method === 'POST'){
        try{
            const token = req.headers['authorization']
            verifyToken(token)
            .then(user => {
                res.status(200).json({user});
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })
        } catch(e){
            console.log(e.message);
            res.status(401).json({
                //MOSTRAR MENSAJE SI EL TOKEN NO FUNCIONA
                message:e.message
            })
        }
    }
})

//             MIDDLEWARE
app.use('/graphql', (req,res,next) =>{

    const token = req.headers['authorization']
    try{
        req.user = verifyToken(token)
        next()
    } catch(er){
        res.status(401).json({
            message: er.message
        })
    }
})

app.use('/graphql', graphqlHTTP((req, res) => ({
    schema,
    graphiql: true,
    pretty: true,
    context:{
        user:req.user
    }
})))