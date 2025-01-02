# google translate API

This project demonstrates how to use the Google Cloud Translate API with Node.js and provides an example of how to translate an HTML file.

## requirement

- google cloud account
- google cloud translate API key
- node.js

## installation

- install the necessary packages

    ```npm install @google-cloud/translate jsdom```
- set the GOOGLE_APPLICATION_CREDENTIALS environment variable to point to your JSON key file

    >on windows:
    ```set GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json```

    >on linux:
 ```export GOOGLE_APPLICATION_CREDENTIALS="/path/to/key.json"```
- run the project

    ```node index.js```

Great! Now you can use the ```translateText``` function to translate your own text.

### Permanent Setup

To make the GOOGLE_APPLICATION_CREDENTIALS on windows environment variable persist across all Command Lines you need to add it to environment variable.

>on windows (cmd):
```setx GOOGLE_APPLICATION_CREDENTIALS "/path/to/key.json"```



### Check the Variable
After setting the variable, confirm it by opening a new Command Prompt window and running:
```echo %GOOGLE_APPLICATION_CREDENTIALS%```