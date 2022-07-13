const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({ response: 'ok bruv all working' });
})

module.exports = app;