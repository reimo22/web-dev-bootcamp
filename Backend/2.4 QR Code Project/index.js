/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

var inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();
prompt([{
    type: 'input',
    name: 'link',
    message: 'Please enter a url' 
}
]).then((answers) => {
    // Converts inputted string into qr code
    var qr = require('qr-image');
    qr.image(JSON.stringify(answers.link), {
        type: 'png',
    }).pipe(
        require('fs').createWriteStream(`${answers[0]}.png`)
    );

    // Saves link to text file
    const fs = require('node:fs');
    fs.writeFile('URL.txt', JSON.stringify(answers.link), 'utf8', (err) => {
        if (err) throw err;
      });
  });
