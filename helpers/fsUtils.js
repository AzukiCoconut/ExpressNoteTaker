const fs = require('fs');
const util = require('util');

// Code is copied from the fsUtil.js used in the UNB Coding Bootcamp week 11 mini project

// Read from file 
const readFromFile = util.promisify(fs.readFile);

// Write to file
const writeToFile = (destination, content) => 
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => 
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
);

// Read and then append to file
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend };