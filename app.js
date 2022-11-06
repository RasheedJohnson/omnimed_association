const port = 3000;
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());  // Pareses URL-encoded bodies
app.use(express.static('public'));
app.use('/public/images/', express.static('./public/images'));


// Get home page
app.get('/', function (req, res) {
    res.render('home');
});
app.get('/home', function (req, res) {
    res.render('home');
});

// Get about page
app.get('/about', function (req, res) {
    res.render('about');
});

// Get about page
app.get('/contact', function (req, res) {
    res.render('contact');
});

// Get pricing page
app.get('/pricing', function (req, res) {
    res.render('pricing');
});

// Get community page
app.get('/community', function (req, res) {
    res.render('community');
});

// Get omnimap page
app.get('/omnimap', function (req, res) {
    res.render('omnimap');
});

// Get faq page
app.get('/faq', function (req, res) {
    res.render('faq');
});



app.listen(process.env.PORT || port, function () {
    console.log('Server started on port:' + port);
});
