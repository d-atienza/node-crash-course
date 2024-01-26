const express = require('express');
const { result } = require('lodash');

const app = express();

app.listen(3000);

// exercise 1
// app.get('/page1', (req, res) => {
//     res.sendFile('./page1.html', {root: __dirname}); //automatically sets the content type and sets the status code, intuitive
// });

// app.get('/page2', (req, res) => {
//     res.sendFile('./page2.html', {root: __dirname}); //automatically sets the content type and sets the status code, intuitive
// });


// exercise 2
// app.get('/', (req, res) => {
//     res.send(diceRoll(dice));
//   });
  
//   app.get('/about', (req, res) => {
//     res.send(diceRoll(dice));
//   });
  

// let dice = [1, 2, 3, 4, 5, 6]

// function diceRoll(arr){
//     const index = Math.floor(Math.random() * arr.length);
//     return 'this is your current roll: ' + arr[index];
//   }


// exercise 3
// const axios = require("axios").default;

// let food = ['pizza', 'pasta', 'potato', 'pumpkin', 'prawns', 'poppy seeds'];

// app.get('/', (req, res) => {
//     res.json(food);
//   }); // sends info to the browser

// const url = 'http://localhost:3000/';
// const resultingPromise = axios.get(url); // gets the info from the browser
// resultingPromise.then(processResolvedPromise);

// function processResolvedPromise(resultFromPromise) {
//     let newFoods = resultFromPromise.data;
//     console.log(newFoods)

//     console.log("promise resolved. result is: ");
//     console.log("data shows: ");
//     for (const row of newFoods) {
//         console.log(row);
//      } // displays the info
// };



// exercise 4
