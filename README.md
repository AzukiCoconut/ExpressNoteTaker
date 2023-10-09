# ExpressNoteTaker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

## Description
A note taking app created using Express.js.

This application allows users to type notes into an application and saves it to a json file in the backend.  The front end code was provided to me, I developed the code that took the information the user was submitting and writing the information to a json file.  The application makes use of api fetches, the backend matched this technology and provided routes organized into multiple files to retrieve and write data to a json file.  I also created an fsUtil.js file that handled the file system read and writes. 

A server file was created to manage all the pieces.  

## Usage

Below is a screenshot of the deployed application:

![Screenshot of the completed ExpressNoteTaker application](/public/assets/images/Screenshot-ExpressNoteTaker.png)

Link to the deployed application is here:  https://thawing-cliffs-53582-3c3354a95dde.herokuapp.com/

## Credits
All of the front end code was provided to me.  I was expected to create the back end code to read/write data to the json file.  The fsUtils.js file was copied from the UNB Coding Bootcamp Week 11 Mini-Project with thanks.  The following references helped me with the completion of this project.

1. UNB Coding Bootcamp Week 11 Mini-project
2. NPM UUID package documentation - https://www.npmjs.com/package/uuid
3. Promises - W3Schools.com - https://www.w3schools.com/js/js_promise.asp
4. Async/Await - W3Schools.com - https://www.w3schools.com/js/js_async.asp

## License
MIT License

Copyright (c) 2023 Matthew Tingley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


