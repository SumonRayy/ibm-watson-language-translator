var translateAPIKey = process.env.TRANSLATE_API_KEY;
var translateServiceURL = "https://api.kr-seo.language-translator.watson.cloud.ibm.com";

const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
    version: '2018-05-01',
    authenticator: new IamAuthenticator({
        apikey: translateAPIKey,
    }),
    serviceUrl: translateServiceURL,
});

module.exports = languageTranslator;