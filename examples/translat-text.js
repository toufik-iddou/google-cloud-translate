const {Translate} = require('@google-cloud/translate').v2;

// Initialize Google Translate
const translate = new Translate();

async function translateText(text,language) {
    const [translation] = await translate.translate(text,language);
    console.log(translation)
  }

module.exports = translateText;