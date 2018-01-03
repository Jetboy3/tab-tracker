const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register',(req,res) => {
    res.json({
        message:`Hello ${req.body.email}! Your user has registered! have fun`
    })
})

app.listen(8081);



