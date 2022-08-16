const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');
const router = require('./routes')

const app = express()

// habilitando handlebars
app.engine('handlebars', 
    exphbs.engine({
        defaultLayout: 'layout'
    })
);

// static files
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'handlebars');


app.use('/', router())

app.listen(5000) 