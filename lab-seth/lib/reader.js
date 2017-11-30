'use strict';

const reader = module.exports = {};
const fs = require('fs');

const fileInfo = [];

//can only handle a certain number of files determined by how many readFile functions there are inside of readAll.
reader.readAll = (paths, callback) => {

  fs.readFile(paths[0], 'utf8', (err, data) => {
    if (err) return callback(err);
    fileInfo.push(data.toString('utf-8'));

    fs.readFile(paths[1], 'utf8', (err, data) => {
      if (err) return callback(err);
      fileInfo.push(data.toString('utf-8'));

      fs.readFile(paths[2], 'utf8', (err, data) => {
        if (err) return callback(err);
        fileInfo.push(data.toString());
        callback(null, fileInfo);
      });
    });
  });
};

// NOTES FROM VINICIO
//recursive method, this would go on line 11 where fs.readFile is defined

// function readFilesRecursively() {
//   if(paths.length === 0) //this is the base case to stop recursion
//     callback(null, fileInfo);
//   else {
//     fs.readFile(paths.shift(),(error,data) => {
//       //inside here is the file or the error
//       if(error)
//         callback(error); //Return error
//
//       results.push(data.toString());
//       readFilesRecursively();
//     });
//
//   }
// }
