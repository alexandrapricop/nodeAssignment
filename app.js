const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const form = require('./routes/form');
const user = require('./routes/user');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(form.route);
app.use(user);

app.use('/', (req,res) => {
    res.status(404).render('404', {pageTitle: 'Oopsie, not found!'})
})

app.listen(port, () => {
    console.log('server started')
});