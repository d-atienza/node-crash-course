const fs = require('fs');

// reading files
fs.readFile('./docs/blog.txt', (err, data) => {
  if (err) {
    console.log(err);
  }  
  console.log(data.toString());
});

// console.log('last line');

// ========

// writing files
//  if filename doesn't exist, it will create a new file
//  if filename does exist, it will rewrite over the contents
// similar to grep
fs.writeFile('./docs/blog.txt', 'hello, world', () => {
  console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
  console.log('file was written');
});

// ========

// directories
//  if folder exists, it will through an error saying it already exists
if (!fs.existsSync('./assets')) { //if assets folder DOESN'T exist, then run the IF part of statement otherwise ELSE
  fs.mkdir('./assets', err => { //makes new folder 
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', err => { //delete folder if exists
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// ========

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', err => { //deletes file
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}