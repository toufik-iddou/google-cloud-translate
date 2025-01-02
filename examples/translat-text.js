const {Translate} = require('@google-cloud/translate').v2;

// Initialize Google Translate
const translate = new Translate();

// Function to  translate text
async function translateText(text,language) {
    const [translation] = await translate.translate(text,language);
    console.log(translation)
  }

module.exports = translateText;