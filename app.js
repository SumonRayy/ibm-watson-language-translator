const express = require('express');
const languageTranslator = require('./translator');
const app = express();
const cors = require('cors');

app.use(cors());


app.get('/languages', (req, res) => {

    languageTranslator.listLanguages()
        .then(langs => {
            res.send(langs.result.languages);
        })
        .catch(err => {
            console.log('error:', err);
            res.send("Error: " + err);
        });
});


app.get('/translate', (req, res) => {

    var translateParams = {
        text: req.query.text,
        modelId: req.query.modelId
    };

    languageTranslator.translate(translateParams)
        .then(translation => {
            res.send(translation.result);
        })
        .catch(err => {
            console.log('error:', err);
            res.send("Error: " + err);
        });

});

module.exports = app;