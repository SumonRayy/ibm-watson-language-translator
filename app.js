const express = require('express');
const languageTranslator = require('./translator');
const app = express();


app.get('/languages', (req, res) => {

    languageTranslator.listLanguages()
        .then(langs => {
            console.log("Languages Requested");
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
        modelId: req.query.from + '-' + req.query.to
    };

    languageTranslator.translate(translateParams)
        .then(translation => {
            res.send(translation.result.translations[0].translation);
        })
        .catch(err => {
            console.log('error:', err);
            res.send("Error: " + err);
        });

});

module.exports = app;