const express = require('express');
const app = express();
const cal = require('./calculator');

app.get('/add', (req, res) => {
    let value1 =  parseInt(req.query.value1);
    let value2 =  parseInt(req.query.value2);
    res.json({
        result: cal.add(value1, value2)
    });
});

app.get('/substract', (req, res) => {
    let value1 =  parseInt(req.query.value1);
    let value2 =  parseInt(req.query.value2) * -1;
    res.json({
        result: cal.add(value1, value2)
    });
});

module.exports = app;