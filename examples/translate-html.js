const {Translate} = require('@google-cloud/translate').v2;
const fs = require('fs');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;
// Initialize Google Translate
const translate = new Translate();


// Function to extract and translate text from HTML
const translateHTML = async (htmlFilePath, targetLanguage) => {
    try {
      // Read the HTML file
      const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
      const dom = new JSDOM(htmlContent);
      const document = dom.window.document;
  
      // Function to recursively translate all text nodes
      const translateTextNodes = async (node) => {
        if (node.nodeType === 3) {
          // If it's a text node, translate it
          const text = node.nodeValue.trim();
          if (text) {
            const [translation] = await translate.translate(text, targetLanguage);
            node.nodeValue = translation;
          }
        } else if (node.nodeType === 1) {
          // If it's an element node, process its children
          for (let child of node.childNodes) {
            await translateTextNodes(child);
          }
        }
      };
  
      // Start translation from the body of the HTML
      await translateTextNodes(document.body);
  
      // Write the translated HTML back to a file
      const translatedHTML = dom.serialize();
      const outputFilePath = 'translated.html';
      fs.writeFileSync(outputFilePath, translatedHTML, 'utf-8');
      console.log(`Translated HTML saved to ${outputFilePath}`);
    } catch (error) {
      console.error('Error translating HTML:', error);
    }
  };

  module.exports = translateHTML;