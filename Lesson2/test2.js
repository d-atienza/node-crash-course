const fs = require('fs');

// fs.readFile('./Sept.txt', (err, data) => {
//     if (err) {
//       console.log(err);
//     }  

//     let lyrics = data.toString().toUpperCase();
//     let newLyrics = lyrics.split('').reverse().join('')
//     console.log(newLyrics);
//   });


//this will print out all the file names in the directory
fs.readdir('./node-crash-course-lesson-2/docs', (err, data) => {
    if (err) {
      console.log(err);
    } else {
        console.log(data);
    }
  });